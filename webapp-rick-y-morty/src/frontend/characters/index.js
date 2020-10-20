import React, {useState, useEffect,} from 'react';
import {List} from './list';

export const Characters = () => {
    const url = process.env.API_URL || '172.19.0.2:8080/personajes';
    const [characterData, setCharactersData] = useState([]);
    
    useEffect(() => {
        console.log(url);
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