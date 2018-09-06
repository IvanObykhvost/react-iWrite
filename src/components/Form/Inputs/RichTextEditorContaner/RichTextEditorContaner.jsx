import React from 'react';
import PropTypes from 'prop-types';
import RichTextEditor from 'react-rte';

export default class RichTextEditorContainer extends React.Component {
    constructor(props){
        super(props);
        const value = RichTextEditor.createValueFromString(this.props.value, 'html') 
        this.state ={
            value
        }
    }

    handelChange = value => {
        this.setState({value});
        value.toString('html');
        this.props.onChange(value);
    }

    render(){
        const {value} = this.state;
        
        return <RichTextEditor
                    onChange={this.handelChange}
                    value={value}
                />
    }
}

RichTextEditorContainer.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.object.isRequired,
}