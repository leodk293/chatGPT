import React, { useState, useRef } from 'react';
import './Bot.css';
import chatgptLOGO from './assets/chatgptLogo.svg';
import send from './assets/send.svg';

export default function Container() {
    const [responses, setResponses] = useState([]);
    const inputRef = useRef();

    const fetchData = async () => {
        const url = 'https://chatgpt-42.p.rapidapi.com/conversationgpt4';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-RapidAPI-Key': '4685e83adbmshbe621af8b52500bp19db03jsna57eb0a7e344',
                'X-RapidAPI-Host': 'chatgpt-42.p.rapidapi.com'
            },
            body: JSON.stringify({
                messages: [
                    {
                        role: 'user',
                        content: `${inputRef.current.value}`
                    }
                ],
                system_prompt: 'hello',
                temperature: 0.9,
                top_k: 5,
                top_p: 0.9,
                max_tokens: 256,
                web_access: false
            })
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            if (!response.ok) {
                throw new Error('An error occurred');
            }
            setResponses(prevResponses => [...prevResponses, result.result]);
        } catch (error) {
            console.error(error);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchData();
    };

    return (
        <div className='container-chat'>
            <div className='introducing'>
                <img src={chatgptLOGO} alt='LOGO' />
                <p>
                    Hi, I am chatgpt a state of art language model developed by open AI. I'm designed to understand
                    and generate human-like text based on input I receive. You can ask me questions, have conversations,
                    seek information, or even request assistance with various tasks. Just let me know how I can help you!
                </p>
            </div>

            <form onSubmit={handleSubmit} action=''>
                <input ref={inputRef} type='text' placeholder='Send a message...' />
                <button type='submit'>
                    <img src={send} alt='SEND' />
                </button>
            </form>

            <div className="responses">
                {responses.map((response, index) => (
                    <div
                        key={index}
                        dangerouslySetInnerHTML={{ __html: response }}
                        style={{
                            border: '1px solid #1b1f3c',
                            backgroundColor: '#1b1f3c',
                            borderRadius: '10px',
                            padding: '25px',
                            color: '#f1f1f1',
                            width: '800px',
                            marginTop: index === 0 ? '100px' : '10px',
                            marginLeft: '150px',
                            boxShadow: '0 4px 10px #00000064'
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
