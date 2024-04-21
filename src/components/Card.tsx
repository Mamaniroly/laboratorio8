import React, { useEffect, useState } from 'react';

const URL_RANDOM_AVATAR = 'https://api.minimalavatars.com/avatar/random/png';

const Card: React.FC = () => {
    
    const [avatarUrl, setAvatarUrl] = useState<string>('');

    return(
        <div >
            
            <div style={{
            width: '450px',
            height: '400px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '16px',
            textAlign: 'center',
            boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.2)'
        }}>
            <h1>Random Image</h1>
            
            <img src="https://api.minimalavatars.com/avatar/random/png" alt="Avatar" style={{
                width: '150px',
                height: '150px',
                borderRadius: '20%',
                marginBottom: '16px'
            }} />
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <h3 >Descripcion:</h3>
            </div>
            <div>
               <p style={{ textAlign: 'left' }}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptatum itaque quaerat optio</p>
            </div>
        </div>
        
        </div>
    )
};

export default Card;
