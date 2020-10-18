import React, {useRef} from 'react';

export const Suscription = () => {
    const suscribeInputText = useRef();
    const suscribeMessage = useRef();

    const handleClickSuscribe = () => {
        const email = suscribeInputText.current.value;
        if(email !== '') {
            suscribeMessage.current.innerHTML = `Gracias por suscribirse: ${email}`
            suscribeInputText.current.value = '';
            suscribeInputText.current.focus();
        }
    };

    return (
        <section>
            <input
                ref={suscribeInputText}
                placeholder="Ingresar email"
             />
             <button
                onClick={handleClickSuscribe}
             >
                 Suscribirse
             </button>
             <h1 ref={suscribeMessage}></h1>
        </section>
    );
};