import React from 'react';
import api from '../../api';
import PaginationContainer from '../PaginationContainer/PaginationContainer';
import FollowerList from './FollowerList/FollowerList';
import { Row } from 'reactstrap';

export default class FollowerListContainer extends React.Component {
    constructor(props) {
        super(props); 
        
        this.initState = {
            followers: [],
            onLoad: this.props.onLoad,
            error: null,
            inProgress: true,
            title: this.props.title
        }

        this.state = {
            ...this.initState,
        }
    }
   

    componentDidUpdate(prevProps){
        if(this.props.title !== prevProps.title){
            this.setState({
                ...this.initState,
                onLoad: this.props.onLoad,
                title: this.props.title
            });
        }
    }

    handelLoadMore = (page, limit, type) => {

        if(type === PaginationContainer.type.button)
            this.setState({followers: []});

        return this.state.onLoad(page, limit)
            .then(
                data => {
                    if(data.error) return Promise.reject(data.error);

                    let {followers} = {...this.state};
                    if(type === PaginationContainer.type.loader)
                        followers = [...followers, ...data.followers];
                    if(type === PaginationContainer.type.button)
                        followers = [...data.followers];

                    this.setState({
                        followers,
                        inProgress: false
                    });

                    return {
                        length: data.followers.length, 
                        count: data.count
                    };
                }
            )
            .catch(e => this.setState({error: e}))
    }

    render() {        
        let {state} = this;

        if(state.error){
            return <div className="error">{state.error}</div>;
        } 
            

        return (
            <div className="follower-container">     
                {
                    !state.inProgress ?
                        state.followers.length > 0 ?
                            <Row>
                                {
                                    state.followers.map((follower, index) => 
                                        <FollowerList 
                                            key={index} 
                                            user={follower}
                                        />
                                    )
                                }
                            </Row>
                            :
                            <div className="text-align-center"><p>Sorry, no users found.</p></div>
                        :
                        null
                } 
                <PaginationContainer 
                    onLoad={this.handelLoadMore} 
                    title={state.title}
                    type={PaginationContainer.type.button}
                    limit={12}
                />
            </div>
        );

    }
}