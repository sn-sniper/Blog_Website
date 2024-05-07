import React from 'react';
function Contact() {
    const email = 'mah112lb@aou.edu.lb';
    const handleEmailButtonClick = () => {
        window.location.href = `mailto:${email}`;
    };
    return (
        <div className='contact-container'>
            <div className='wrapper'>
                <h1>Do you have any issues?</h1>
                <h3>Contact us on this email and we will resolve the issues!</h3>
                <button type='button' onClick={handleEmailButtonClick}>Go to Email</button>
            </div>
        </div>
    )
}

export default Contact