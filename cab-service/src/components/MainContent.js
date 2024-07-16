import React from "react";

const MainContent = () => {
    return (
        <main style={MainContentStyle}>
            <h2>Welcome to the Home Page</h2>
            <p>This is the main content section</p>
        </main>
    );
};

const mainContentStyle = {
    padding: '20px',
    textAlign: 'center'
};

export default MainContent;