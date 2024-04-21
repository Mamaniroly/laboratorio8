import React, { useState } from 'react';

const Counter: React.FC = () => {
    // Define el estado del contador y la función para actualizarlo
    const [count, setCount] = useState<number>(5);

    // Define una función para incrementar el contador en 5
    const incrementCount = () => {
        setCount(count + 50);
    };

    return (
        <div>
            <p>Contador: {count}</p>
            <button onClick={incrementCount}>Incrementar por 50</button>
        </div>
    );
};

export default Counter;

