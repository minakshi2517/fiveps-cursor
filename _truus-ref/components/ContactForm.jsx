'use client';

import { useEffect, useState } from 'react';

const EMPTY = { name: '', email: '', phone: '', company: '', service: '', message: '' };

export default function ContactForm({ seed = '' }) {
    const [values, setValues] = useState({ ...EMPTY, message: seed });
    const [errors, setErrors] = useState({});
    const [sent, setSent] = useState(false);

    useEffect(() => {
        if (seed) setValues((current) => ({ ...current, message: seed }));
    }, [seed]);

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
        <form className="contact-form" id="ask-form" onSubmit={onSubmit} noValidate>
            <p className="contact-form__title">Please enter your information</p>
            <div className="contact-form__row">
                <label>Full name
                    <input name="name" placeholder="Enter full name" value={values.name} onChange={onChange} className={errors.name ? 'is-bad' : ''} />
                    {errors.name && <span className="form-error">{errors.name}</span>}
                </label>
                <label>Email
                    <input name="email" type="email" placeholder="Enter email" value={values.email} onChange={onChange} className={errors.email ? 'is-bad' : ''} />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                </label>
            </div>
            <div className="contact-form__row">
                <label>Phone
                    <input name="phone" type="tel" placeholder="Enter phone number" value={values.phone} onChange={onChange} />
                </label>
                <label>Company
                    <input name="company" placeholder="Enter company" value={values.company} onChange={onChange} />
                </label>
            </div>
            <label>Service
                <select name="service" value={values.service} onChange={onChange} className={errors.service ? 'is-bad' : ''}>
                    <option value="">Choose</option>
                    <option>Digital Marketing</option>
                    <option>Design</option>
                    <option>Video Production</option>
                    <option>Web Development</option>
                    <option>Automation</option>
                </select>
                {errors.service && <span className="form-error">{errors.service}</span>}
            </label>
            <label>Message
                <textarea name="message" rows={5} placeholder="Enter your message here…" value={values.message} onChange={onChange} className={errors.message ? 'is-bad' : ''} />
                {errors.message && <span className="form-error">{errors.message}</span>}
            </label>
            <button type="submit">Send the brief</button>
        </form>
    );
}
