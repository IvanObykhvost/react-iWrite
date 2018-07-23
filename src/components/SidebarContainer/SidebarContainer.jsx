import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import api from '../../api';

export default class SidebarContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tags: [],
            error: null,
            inProgress: true
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
                <Sidebar tags={state.tags}/>
                :
                <div>Please wait, tags are loading...</div>
        );
    }
}