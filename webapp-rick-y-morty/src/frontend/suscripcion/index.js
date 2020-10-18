import React, { useState } from 'react';

export const Suscripcion = () => {
    const [email, setEmail] = useState('');
    const handleChangeEmail = (e) => setEmail(e.target.value);

    const [estaGuardado, setEstaGuardado] = useState(false);
    const handleClickSuscribirse = () => setEstaGuardado(true);

    return (
        <section>
            {!estaGuardado ? (
                    <>
                        <label>Suscríbete</label>
                        <input
                            placeholder='Correo electrónico'
                            onChange={handleChangeEmail}
                            value={email}
                        />
                        <button
                            onClick={handleClickSuscribirse}
                        >Suscribirse</button>
                    </>
                )
                :
                (
                    <h1>Gracias por suscribirse: {email}</h1>
                )
            }
        </section>
    );

};