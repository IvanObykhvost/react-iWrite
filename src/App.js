import React, { Component } from 'react';
import './main.css';
import Nav from './components/nav/index';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from './actions/export';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {

    let { state, ...rest } = this.props;
    return (
        <div className="App">
            <div className="Wrapper">
                <Nav state={state} {...rest}/>
            </div>
      </div>
    );
  }
}

function mapStateToProps(stateProps) {
    return {
        state: stateProps
    };
}

function objectsMap(object, func) {
    let mappedObject = {};
    for (let key in object) {
        mappedObject[key] = func(key, mappedObject[key]);
    }
    return mappedObject;
}

function mapDispatchToProps(dispatch) {
    return objectsMap(actions, actionName => bindActionCreators(actions[actionName], dispatch));
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(App);
