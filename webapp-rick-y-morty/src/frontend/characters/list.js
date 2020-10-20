import React from 'react';
import {LOADING, ERROR,} from './index-with-context';

export const List = (props) => {
    const {
        data,
    } = props;
    return(
        <>
            <ul>
                {data && data.map(item => {
                    return (<li key={item.id}>{item.name}</li>);
                })}
            </ul>
        </>
    );
};