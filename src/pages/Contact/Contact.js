import { React, useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import './Contact.css';
import contact from '../../assets/images/contact.webp';

const Contact = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const form = useRef();
    const { REACT_APP_SERVICE_ID } = process.env;
    const onSubmit = (event) => {
        console.log(event)
        emailjs.sendForm(REACT_APP_SERVICE_ID, "template_0gpay3j", form.current, "xqLmCvlv9nHHD4SMS")
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        reset();
    }
    return (
        <div >
            <div id="contact" className="max-w-7xl mx-auto">
                <div data-aos="zoom-in" data-aos-duration="500">
                    <p className="text-primary font-bold text-3xl lg:text-5xl my-10">
                        Contact With Me
                    </p>
                </div>
                <div className="w-full flex flex-col lg:flex-row justify-center gap-10">
                    <div
                        data-aos="fade-up-right"
                        data-aos-duration="1500"
                        className="contact-card p-5 lg:p-10 w-full lg:w-2/5 text-left"
                    >
                        <div className=" rounded-2xl overflow-hidden mb-10">
                            <img src={contact} alt="" />
                        </div>
                        <h3 className="text-3xl font-semibold text-primary my-4">
                            Zahidul Islam Sagar Patoary
                        </h3>
                        <h4 className="text-3xl font-semibold text-secondary my-10">Can I halp you ?</h4>

                    </div>
                    <div
                        data-aos="fade-up-right"
                        data-aos-duration="1500"
                        className="contact-card p-5 lg:p-10 w-full lg:w-3/5"
                    >
                        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full mb-5">
                                <label className="label">Full Name</label>
                                <input
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: "Name is required",
                                        },
                                    })}
                                    type="text"
                                    className="input input-bordered w-ful"
                                />
                                {errors?.name && (
                                    <span className="error">{errors.name.message}</span>
                                )}
                            </div>

                            <div className="mb-5 form-control w-full">
                                <label className="label">Email</label>
                                <input
                                    {...register("userEmail", {
                                        required: {
                                            value: true,
                                            message: "Email is required",
                                        },
                                    })}
                                    type="email"
                                    className="input input-bordered text-black w-ful"
                                />
                                {errors?.email && (
                                    <span className="error">{errors.userEmail.message}</span>
                                )}
                            </div>

                            <div className="mb-5 form-control">
                                <label className="label">Your Message</label>
                                <textarea
                                    {...register("message", {
                                        required: {
                                            value: true,
                                            message: "Message is required",
                                        },
                                    })}
                                    className="textarea textarea-bordered h-36 text-black"
                                ></textarea>
                                {errors?.message && (
                                    <span className="error">{errors.message.message}</span>
                                )}
                            </div>

                            <button
                                className='send-mail-button w-full'
                                type="submit"
                            >
                                Send Mail
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Contact;