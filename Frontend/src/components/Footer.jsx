import React from 'react'


const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#343a40', color: '#ffffff', padding: '20px 0', textAlign: 'center' }}>
            <div>
                <p style={{ margin: 0 }}>© {new Date().getFullYear()} Job Portal</p>
                <p style={{ margin: 0 }}>All Rights Reserved</p>
            </div>
            <div style={{ marginTop: '10px' }}>
                <a href="/about" style={{ color: '#ffffff', textDecoration: 'none', margin: '0 10px' }}>About Us</a>
                <a href="/contact" style={{ color: '#ffffff', textDecoration: 'none', margin: '0 10px' }}>Contact</a>
                <a href="/privacy" style={{ color: '#ffffff', textDecoration: 'none', margin: '0 10px' }}>Privacy Policy</a>
                <a href="/terms" style={{ color: '#ffffff', textDecoration: 'none', margin: '0 10px' }}>Terms</a>
            </div>
        </footer>
    );
};

export default Footer