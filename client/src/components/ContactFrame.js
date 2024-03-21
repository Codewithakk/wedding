import React, { useState } from 'react';
import { toast } from 'react-toastify';
import './ContactFrame.css';
import '../../src/global.css'

const ContactFrame = () => {
    const defaultContactFormData = {
        name: '',
        email: '',
        phoneNumber: '',
        message: ''
    };
const msg=()=>{alert("Message sent successfully")}

    const [contact, setContact] = useState(defaultContactFormData);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/saurabhphotography/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(contact),
            });
            console.log("Message sent", response);
            if (response.ok) {
                setContact(defaultContactFormData);
                toast.success("Message Sent Successfully");
            } else {
                throw new Error("Failed to send message");
            }
        } catch (error) {
            console.log(error);
            toast.error("Failed to send message");
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setContact({ ...contact, [name]: value });
    };

    return (
        <section className="contact-frame2">
            <div className="frame-b">
                <div className="frame-c">
                    <div className="f-r-a-m-e1">
                        <h1 className="contact-us-for-container">
                            <p className="contact-us-for">Contact Us for</p>
                            <p className="enquiry">Enquiry</p>
                        </h1>
                        <div className="f-r-a-m-e2">
                            <div className="contact-content">
                                <p>
                                    Feel free to reach out to us for any inquiries or questions.
                                    We are here to assist you!
                                </p>
                            </div>
                            <h2 className="our-info">Our Info</h2>
                            <div className="phone-frame">
                                <div className="f-r-a-m-e3">
                                    <img className="phone-fill-icon" loading="lazy" alt="" src="/phonefill.svg" />
                                    <img className="at-fill-icon" loading="lazy" alt="" src="/atfill.svg" />
                                    <img className="map-pin-fill-icon" loading="lazy" alt="" src="/mappinfill.svg" />
                                </div>
                                <div className="name-frame">
                                    <div className="contact-us-text">
                                    <a href="mailto:saurabhsinghphotography@gmail.com" className="email-text">
                                           saurabhsinghphotography@gmail.com
                    </a>
                                    </div>
                                    <div className="contact-us-text">
                                    <a href="tel:+916386874288" className="phone-number">+91 6386874288</a>
                                        <div className="location-text">
                                            <b className="location">Lucknow, Uttar Pradesh</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-services-frame1">
                    <div className="parent-frame1">
                        <div className="rectangle-container1" />
                        <div className="rectangle-container2" />
                    </div>
                    <div className="text-frame">
                        <div className="text-frame-child" />
                        <div className="empty-frame1">
                            <div className="text-bubbles">
                                <h2 className="contact-us1">Contact us</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="text-input">
                                        <div className="line-separator">
                                            <div className="text">
                                                <div className="text1">
                                                    <div className="name">Name</div>
                                                    <div className="frame-with-border">
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            value={contact.name}
                                                            onChange={handleInputChange}
                                                            className="your-name"
                                                            placeholder="Enter Your Name"
                                                        />
                                                        
                                                    <div className="line-separator2"/>
                                                    </div>
                                                </div>
                                                <div className="text2">
                                                    <div className="email">Email</div>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={contact.email}
                                                        onChange={handleInputChange}
                                                        className="your-email"
                                                        placeholder="Enter Your Email"
                                                    />
                                                </div>
                                            </div>
                                            <div className="phone-number-parent">
                                                <div className="phone-number">Phone Number</div>
                                                <div className="text3">
                                                    <input
                                                        type="text"
                                                        name="phoneNumber"
                                                        value={contact.phoneNumber}
                                                        onChange={handleInputChange}
                                                        className="phone-number"
                                                        placeholder="Enter Phone Number"
                                                   />
                                                        <div className="line-separator2"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="line-separator2" />
                                        <div className="message">Message</div>
                                        <textarea
                                            name="message"
                                            value={contact.message}
                                            onChange={handleInputChange}
                                            className="message-textarea"
                                            placeholder="Enter your message"
                                        />
                                    </div>
                                      <button type="submit" onClick={msg}className='btn'>Submit</button>

                                </form>
                            </div>
                        </div>
                        <div className="about-us-text-wrapper">
                            <div className="about-us-text">
                                <div className="lorem-text">
                                    {/* Additional content can go here */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactFrame;
