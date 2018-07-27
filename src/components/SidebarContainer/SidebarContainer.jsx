import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import api from '../../api';
import Loader from '../Loader/Loader';

export default class SidebarContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tags: [],
            error: null,
            inProgress: true,
            onClick: this.props.onClick 
        }
    } 

    componentDidMount(){
        api.Tags.getAll()
            .then(
                data => {
                    this.setState({
                        tags: data,
                        error: data.error ? data.error : null,
                        inProgress: false
                    });
                }
            )
    }

    render() { 
        let {state} = this;

        if(state.error) 
            return <div className="error">{state.error}</div>;

        return(
            !state.inProgress ? 
                <Sidebar 
                    tags={state.tags}
                    onClick={state.onClick}
                />
                :
                <Loader />
        );
    }
}