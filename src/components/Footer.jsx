import React from 'react';

const Footer = () => {
    return (
        <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f1f1f1' }}>
            <p>&copy; {new Date().getFullYear()} Vishnu's AI Study Assistant. All rights reserved.</p>
            <p>
                <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a>
            </p>
        </footer>
    );
};

export default Footer;