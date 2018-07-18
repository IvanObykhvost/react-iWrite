import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default function SimpleButton({ icon, ...props }) {
    return (
        <div 
           {...props}
        >
            <MuiThemeProvider>
                {icon}
            </MuiThemeProvider>
        </div>
    )
}