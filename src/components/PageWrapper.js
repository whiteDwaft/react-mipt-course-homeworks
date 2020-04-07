import React from 'react';
import {HorizontalLoader} from './HorizontalLoader';

export const PageWrapper = ({children, loading}) => {
    return <div>
        {loading && <HorizontalLoader/>}
        {children}
    </div>
};
