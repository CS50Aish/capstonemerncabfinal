import React from "react";

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <p>2024 Cab Service Application Website</p>
        </footer>
    );
};

const footerStyle = {
    backgroundColor: '#4CAF50',
    padding: '10px',
    color: 'white',
    position: 'fixed',
    bottom: 0,
    width: '100%'
}

export default Footer;