import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default function ButtonIcon({ icon, ...props }) {
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