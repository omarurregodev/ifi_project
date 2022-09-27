import React from 'react';

function Footer() {

    return (
        <footer className="lg:text-left">
            <div className="text-darkWhite text-center p-3" style={styles.bgFooter}>
                © 2022 Copyright, hecho por <a href="https://www.linkedin.com/in/omar-torres-u/" className='text-darkWhite hover:text-white' target="blank">Omar Torres Urrego.</a> 
            </div>
        </footer>
    );
}

export default Footer;

const styles = {
    bgFooter: {
        backgroundColor: '#353535',
        height: '6vh'
    },
}