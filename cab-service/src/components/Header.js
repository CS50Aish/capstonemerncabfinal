import React from 'react';

const Header = () => {
    return (
        <header style={headerStyle}>
            <h1>Cab Service</h1>
            <nav>
                <ul style={navListStyle}>
                    <li style={navItemStyle}><a href="/">Home</a></li>
                    <li style={navItemStyle}><a href="/about">About</a></li>
                    <li style={navItemStyle}><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

const headerStyle = {
  backgroundColor: '#4CAF50',
  padding: '10px',
  color: 'white',
  textAlign: 'center'
}

const navListStyle = {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  overflow: 'hidden'
}

const navItemStyle = {
  float: 'left',
  padding: '0 10px'    
};

export default Header;