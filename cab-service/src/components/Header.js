import React from 'react';

const Header = () => {
    return (
        <header style={headerStyle}>
            <h1>Cab Service</h1>
            <nav>
                <ul style={navStyleListL}>
                    <li style={navListStyle}><a href='/'>Home</a></li>
                    <li style={navListStyle}><a href='/about'>About</a></li>
                    <li style={navListStyle}><a href='/contact'>Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}