import React, { useRef, useEffect } from 'react';

function Hero() {
    const videoRef = useRef();

    useEffect(() => {
        if (videoRef.current) videoRef.current.playbackRate = 2;
    }, []);

    return (
        <section id='hero'>
            <div>
                <h1>MacBook Pro</h1>
                <img src="/title.png" alt="macbook" />
            </div>

            <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline></video>

            <button>Buy</button>

            <p>From $1699/month for 12 months</p>
        </section>
    );
}

export default Hero;
