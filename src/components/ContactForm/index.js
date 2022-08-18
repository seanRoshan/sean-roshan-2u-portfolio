import React, { useState } from "react";
import { Form, TextArea, Input, Message } from 'semantic-ui-react'
import { validateEmail } from '../../utils/helpers';

function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    const [errorMessage, setErrorMessage] = useState('');
    const [notification, setNotification] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        if (!name || !email || !message){
            setErrorMessage("Please make sure all fields have valid data!");
        } else {
            if (!errorMessage) {
                setNotification(true);
            }
        }
    }

    function handleChange(e, { name, value }) {
        e.preventDefault();
        setFormState({...formState, [name]: value });
    }

    function handleBlur(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
    }

    return (
        <section>
            <h1>Contact Me</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Field
                    id='form-name'
                    name="name"
                    control={Input}
                    label='Name'
                    placeholder='Name'
                    value={name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <Form.Field
                    id='form-email'
                    control={Input}
                    name="email"
                    label='Email'
                    placeholder='Email'
                    value={email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <Form.Field
                    id='form-message'
                    name="message"
                    control={TextArea}
                    label='Message'
                    placeholder='Message'
                    value={message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />

                <Form.Button content='Submit' />

            </Form>
            {notification && <Message
                success
                header='Message Sent!'
                content={JSON.stringify(formState)}
            />}
            {errorMessage && <Message
                error
                content={errorMessage}
            />}

        </section>
    )


}

export default ContactForm;