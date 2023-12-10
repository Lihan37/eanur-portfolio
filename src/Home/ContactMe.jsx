import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';

const ContactForm = () => {
    return (
        <div>
            <Navbar></Navbar>
            <form action="https://formspree.io/eanurlihan10@gmail.com" method="POST">
                <label>
                    Your Email:
                    <input type="email" name="_replyto" />
                </label>
                <label>
                    Message:
                    <textarea name="message"></textarea>
                </label>
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default ContactForm;
