import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

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
    const { register, handleSubmit, formState } = useForm({ resolver: zodResolver(schema) });

    const { errors } = formState;

    const toSubmit = (formData) => {
        if (errors.length) return;
        fetch('http://site.com/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
    };

    return (
        <section className="container mx-auto space-y-8 px-8 py-8 md:space-y-12 md:py-16">
            <Heading className="text-center" tag="h1">
                Contact Us
            </Heading>

            <form
                className="grid gap-6 text-primary-950 md:gap-10 md:text-xl lg:grid-cols-2 lg:grid-rows-3"
                onSubmit={handleSubmit(toSubmit)}
            >
                <div className="relative md:col-start-1 md:col-end-2 ">
                    <input
                        className="w-full rounded-md px-4 py-2 md:px-8 md:py-4"
                        type="text"
                        {...register('fullname')}
                        aria-label="fullname"
                        placeholder="Enter your full name"
                        value="Prince Cipriano"
                    />
                    {errors.fullname && (
                        <span className="absolute bottom-0 left-0 translate-x-2  translate-y-[120%] text-sm text-rose-500">
                            {errors.fullname.message}
                        </span>
                    )}
                </div>

                <div className="relative md:col-start-1 md:col-end-2">
                    <input
                        className="w-full rounded-md px-4 py-2 md:px-8 md:py-4"
                        type="text"
                        {...register('phone')}
                        aria-label=""
                        placeholder="Enter your phone number"
                    />
                    {errors.phone && (
                        <span className="absolute bottom-0 left-0 translate-x-2  translate-y-[120%] text-sm text-rose-500">
                            {errors.phone.message}
                        </span>
                    )}
                </div>

                <div className="relative md:col-start-1 md:col-end-2">
                    <input
                        className="w-full rounded-md px-4 py-2 md:px-8 md:py-4"
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
                        className="h-full w-full rounded-md px-4  py-2 md:px-8 md:py-4"
                        type="text"
                        {...register('message')}
                        aria-label=""
                        placeholder="Write your message"
                        value="sup bitch"
                    ></textarea>
                    {errors.message && (
                        <span className="absolute bottom-0 left-0 translate-x-2  translate-y-[120%] text-sm text-rose-500">
                            {errors.message.message}
                        </span>
                    )}
                </div>

                <Button
                    className="mx-auto w-full max-w-2xl md:col-start-1 md:col-end-3"
                    type="submit"
                >
                    Send
                </Button>
            </form>
        </section>
    );
};

export default ContactForm;
