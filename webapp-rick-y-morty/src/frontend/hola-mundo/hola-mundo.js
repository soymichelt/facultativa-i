import React from 'react';
import './hola-mundo.scss';
import Imagen from './../../assets/hola-mundo.png';

const HolaMundo = () => {
    return (
        <div>
            <h1>Hola Mundo</h1>
            <img
                src={Imagen}
                alt={'Hola mundo'}
            />
        </div>
    );
};

export default HolaMundo;