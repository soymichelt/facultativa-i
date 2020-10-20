import React, {useState, useEffect,} from 'react';
import {List} from './list';

export const Characters = () => {
    const [characterData, setCharactersData] = useState([]);
    
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setCharactersData(data.results);
        })
        .catch(error => console.log(error));
    }, []);

    return (
        <List
            data={characterData}
        />
    );
};