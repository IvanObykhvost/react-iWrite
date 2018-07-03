import React from 'react';
import { Link } from 'react-router-dom';

export default function EditProfileSettings(){    
        return (
            <Link
                to="/settings/"
                className="btn btn-sm btn-outline-secondary action-btn">
                <i className="ion-gear-a"></i> Edit Profile Settings
            </Link>
        );
}