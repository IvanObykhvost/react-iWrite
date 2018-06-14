import React, { Component } from 'react';
import PropTypes from 'prop-types';

//export default function NavButton({ children}) {
//    return (
//        <div className="button"
            
//        >
//            {children}
//        </div>    
//    )
//}

export default class NavButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { props } = this;
        return (
            <div className="button"

            >
                {props.children}
            </div>    
        )
    }
}