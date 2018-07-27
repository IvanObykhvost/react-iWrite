import React from 'react';
import { PropagateLoader } from 'react-spinners';

export default function Loader() {
    return (
        <div className='sweet-loading div-center'>
            <PropagateLoader
                size={15}
                color={'#123abc'}
                loading={true}
            />
        </div>
    )
}
