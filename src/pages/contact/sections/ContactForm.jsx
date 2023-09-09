import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Heading } from '../../../components/ui';
import { Button } from '../../../components/ui';

const schema = z.object({
    fullname: z.string().trim().min(1, 'Full name should not be empty.'),
    email: z
        .string()
        .trim()
        .min(1, 'Email should not be empty.')
        .email('Please enter a valid email address.'),
    message: z.string().trim().min(1, 'Message should not be empty.'),
    phone: z
        .string()
        .min(1, 'Phone number should not be empty.')
        .regex(
            /^(\+)?(63)?(-| )?(\(0)?(-| )?(\d{2,3}\)?)(-| )?(\d{3})(-| )?(\d{4})$|^0?\d{9,10}$/,
            'Please enter a valid phone number.'
        ),
});

const ContactForm = () => {
    const [isloading, setIsloading] = useState(false);
    const { register, handleSubmit, formState } = useForm({ resolver: zodResolver(schema) });

    const { errors } = formState;

    const toSubmit = async (formData, event) => {
        if (errors.length) return;
        try {
            setIsloading(true);
            const response = await fetch('http://site.com/api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = response.json();
            if (result.status === 200) {
                toast.success('Message sent!', {
                    className: 'bg-primary-900 text-xl text-secondary-50 m-3 lg:mx-0 rounded-lg',
                    progressClassName: 'bg-accent-500',
                    icon: <CheckIcon />,
                    autoClose: 1500,
                    toastId: 'message',
                });
                event.target.reset();
            }
        } catch (error) {
            toast.error('Failed to send message!', {
                className: 'bg-primary-900 text-xl text-secondary-50 m-3 lg:mx-0 rounded-lg',
                progressClassName: 'bg-rose-500',
                icon: <XIcon />,
                autoClose: 1500,
            });
        }
    };

    toast.onChange((event) => {
        if (event.status === 'added') {
            setIsloading(true);
        } else {
            setIsloading(false);
        }
    });

    return (
        <section className="container mx-auto space-y-8 px-8 py-8 md:space-y-12 md:py-16">
            <Heading className="text-center" tag="h1">
                Contact Us
            </Heading>

            <form
                className="grid gap-8 text-primary-950 md:gap-10 md:text-xl lg:grid-cols-2 lg:grid-rows-3"
                onSubmit={handleSubmit(toSubmit)}
            >
                <div className="relative md:col-start-1 md:col-end-2 ">
                    <input
                        className="w-full rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent-500 md:px-8 md:py-4"
                        type="text"
                        {...register('fullname')}
                        aria-label="fullname"
                        placeholder="Enter your full name"
                        value="Prince Cipriano"
                    />
                    {errors.fullname && (
                        <span className="absolute bottom-0 left-0 translate-x-2 translate-y-[120%] text-sm text-rose-500">
                            {errors.fullname.message}
                        </span>
                    )}
                </div>

                <div className="relative md:col-start-1 md:col-end-2">
                    <input
                        className="w-full rounded-md px-4 py-2 focus:outline-none focus:ring-2  focus:ring-inset focus:ring-accent-500 md:px-8 md:py-4"
                        type="text"
                        {...register('phone')}
                        aria-label=""
                        placeholder="Enter your phone number"
                        value="09155419459"
                    />
                    {errors.phone && (
                        <span className="absolute bottom-0 left-0 translate-x-2 translate-y-[120%] text-sm text-rose-500">
                            {errors.phone.message}
                        </span>
                    )}
                </div>

                <div className="relative md:col-start-1 md:col-end-2">
                    <input
                        className="w-full rounded-md px-4 py-2 focus:outline-none focus:ring-2  focus:ring-inset focus:ring-accent-500 md:px-8 md:py-4"
                        type="email"
                        {...register('email')}
                        aria-label=""
                        placeholder="Enter your email address"
                        value="prince@email.com"
                    />
                    {errors.email && (
                        <span className="absolute bottom-0 left-0 translate-x-2  translate-y-[120%] text-sm text-rose-500">
                            {errors.email.message}
                        </span>
                    )}
                </div>

                <div className="relative md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-4">
                    <textarea
                        className="h-full w-full rounded-md px-4  py-2 focus:outline-none focus:ring-2  focus:ring-inset focus:ring-accent-500 md:px-8 md:py-4"
                        type="text"
                        {...register('message')}
                        aria-label=""
                        placeholder="Write your message"
                        value="prince"
                    ></textarea>
                    {errors.message && (
                        <span className="absolute bottom-0 left-0 translate-x-2  translate-y-[120%] text-sm text-rose-500">
                            {errors.message.message}
                        </span>
                    )}
                </div>

                <Button
                    className={`mx-auto flex w-full max-w-2xl flex-row items-center justify-center gap-2 bg-accent-500 md:col-start-1 md:col-end-3 ${
                        isloading ? 'cursor-not-allowed' : 'cursor-pointer'
                    }`}
                    type="submit"
                    disabled={isloading}
                >
                    {isloading ? (
                        <>
                            <span className="animate-spin mb-1 inline-block aspect-square h-6 w-6 rounded-full border-4 border-primary-950/50 border-s-primary-950 border-t-primary-950 p-2 hover:bg-accent-500" />
                            Sending
                        </>
                    ) : (
                        'Send'
                    )}
                </Button>
            </form>

            <ToastContainer theme="dark" limit={1} />
        </section>
    );
};

export default ContactForm;

const CheckIcon = () => {
    return (
        <div className="flex aspect-square items-center justify-center rounded-full bg-accent-500">
            <svg
                className="h-5/6 w-5/6 text-primary-950"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={4}
                stroke="currentColor"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
        </div>
    );
};

const XIcon = () => {
    return (
        <div className="flex aspect-square items-center justify-center rounded-full bg-rose-500">
            <svg
                className="h-5/6 w-5/6 text-primary-950"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={4}
                stroke="currentColor"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </div>
    );
};
