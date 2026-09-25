'use client';

import { useState } from 'react';

const EMPTY = { name: '', email: '', company: '', service: '', message: '' };

export default function ContactForm() {
    const [values, setValues] = useState(EMPTY);
    const [errors, setErrors] = useState({});
    const [sent, setSent] = useState(false);

    const onChange = (event) => {
        const { name, value } = event.target;
        setValues((current) => ({ ...current, [name]: value }));
        setErrors((current) => ({ ...current, [name]: '' }));
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const next = {};
        if (!values.name.trim()) next.name = 'Add your name.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = 'Add a real email.';
        if (!values.service) next.service = 'Pick a service.';
        if (values.message.trim().length < 8) next.message = 'Tell us a little more.';
        setErrors(next);
        if (Object.keys(next).length) return;
        setSent(true);
    };

    if (sent) {
        return <p className="form-ok">Got it. Write to hello@fiveps.com if you want to send the brief directly.</p>;
    }

    return (
        <form className="contact-form" onSubmit={onSubmit} noValidate>
            <label>Name
                <input name="name" value={values.name} onChange={onChange} className={errors.name ? 'is-bad' : ''} />
            </label>
            {errors.name && <p className="form-error">{errors.name}</p>}
            <label>Email
                <input name="email" type="email" value={values.email} onChange={onChange} className={errors.email ? 'is-bad' : ''} />
            </label>
            {errors.email && <p className="form-error">{errors.email}</p>}
            <label>Company
                <input name="company" value={values.company} onChange={onChange} />
            </label>
            <label>Service
                <select name="service" value={values.service} onChange={onChange} className={errors.service ? 'is-bad' : ''}>
                    <option value="">Choose</option>
                    <option>Marketing</option>
                    <option>Design</option>
                    <option>Video Production</option>
                    <option>Web Development</option>
                    <option>Automation</option>
                </select>
            </label>
            {errors.service && <p className="form-error">{errors.service}</p>}
            <label>Message
                <textarea name="message" rows={5} value={values.message} onChange={onChange} className={errors.message ? 'is-bad' : ''} />
            </label>
            {errors.message && <p className="form-error">{errors.message}</p>}
            <button type="submit">Send the brief</button>
        </form>
    );
}
