import React from 'react';
import Button from '../Form/Buttons/Button';
import Loader from '../Loader/Loader';

export default class PaginationContainer extends React.Component {
    constructor(props) {
        super(props); 
        
        this.initState = {
            page: 0,
            count: 0,
            limit: 5,
            inProgress: false,
            isLoadMore: false,
            onLoad: this.props.onLoad,
            title: this.props.title
        };

        this.state = {
           ...this.initState
        };
    }

    componentDidMount() {
        this.handelLoadMore();
    }


    componentDidUpdate(prevProps){
        if(this.props.title !== prevProps.title){
            this.setState({
                ...this.initState,
                onLoad: this.props.onLoad,
                title: this.props.title
            },
            () => this.handelLoadMore()
        )}
    }

    handelLoadMore= () => {
        this.setState({
            inProgress: true
        });

        return this.state.onLoad(this.state.page, this.state.limit)
            .then(
                data => {
                    let {state} = this;
                    
                    if(data.length > 0){
                        state.count = data.count;
                        state.page++;
                        state.isLoadMore = true;
                    }
                    else {
                        state.isLoadMore = false;
                    }   
                        
                    if(state.count <= state.limit * state.page)
                        state.isLoadMore = false;
                    
                    state.inProgress = false;
                    this.setState({state});
                }
            )
    }

    render() {        
        let {state} = this;

        return (
            <div className="load-more height-40">
            {
                !state.inProgress ?
                    state.isLoadMore &&
                        <div className="text-align-center">
                            <Button
                                name="Load more"
                                color="primary"
                                outline 
                                onClick={e => this.handelLoadMore()}
                            />
                        </div> 
                :
                <Loader />
            }
            </div>
            
                      
        );

    }
}