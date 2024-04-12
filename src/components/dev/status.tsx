import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const DevelopmentNotice = () => {
    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                zIndex: 9999,
                backdropFilter: 'blur(4px)',
            }}
        >
            <div
                style={{
                    background: 'transparent',
                    color: '#ffffff',
                    padding: '20px',
                    borderRadius: '10px',
                    maxWidth: '400px',
                    textAlign: 'center',
                }}
            >
                <Player
                    autoplay
                    loop
                    src="/lottie/github.json"
                    style={{ marginBottom: '20px', width: '300px', height: '300px' }}
                />
                <Player
                    autoplay
                    loop
                    src="/lottie/codingdev.json"
                    style={{ marginBottom: '20px', width: '300px', height: '300px' }}
                />
                <p style={{ fontSize: '18px', marginBottom: '20px' }}>
                    Selamat Datang di portfolio Fauzi Bagaswara
                </p>
            </div>
        </div>
    );
};

export default DevelopmentNotice;
