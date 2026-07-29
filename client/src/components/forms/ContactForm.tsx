import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Button } from '../ui/Button';

interface FormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
  // Honeypot field — bots fill this, humans leave it blank
  _gotcha?: string;
}

// TODO(client blocker): replace with a real submission endpoint (Formspree,
// Web3Forms, Netlify, or a serverless function) before launch.
const FORM_ENDPOINT = 'https://formspree.io/f/REPLACE_WITH_REAL_ID';

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const onSubmit = async (data: FormData) => {
    if (data._gotcha) return; // honeypot tripped — silently drop
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Submission failed');
      setSubmitStatus('success');
      reset();
    } catch {
      setSubmitStatus('error');
    }
  };

  const fieldBase =
    'w-full px-4 py-3 border border-border rounded-sm text-sm text-penstock bg-white focus:outline-none focus:border-teal transition-colors';
  const errorClass = 'border-red-400 focus:border-red-400';

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate aria-label="Send a message">
      {/* Honeypot — hidden from real users, traps bots */}
      <input
        type="text"
        {...register('_gotcha')}
        className="hidden"
        tabIndex={-1}
        aria-hidden
        autoComplete="off"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-semibold mb-1 text-penstock">
            Your Name <span aria-hidden className="text-red-500">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            className={[fieldBase, errors.name ? errorClass : ''].join(' ')}
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-xs text-red-500" role="alert">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-sm font-semibold mb-1 text-penstock">
            Your Email <span aria-hidden className="text-red-500">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            className={[fieldBase, errors.email ? errorClass : ''].join(' ')}
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email' },
            })}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-xs text-red-500" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="contact-subject" className="block text-sm font-semibold mb-1 text-penstock">
          Subject
        </label>
        <input id="contact-subject" type="text" className={fieldBase} {...register('subject')} />
      </div>

      <div className="mt-5">
        <label htmlFor="contact-message" className="block text-sm font-semibold mb-1 text-penstock">
          Your Message <span aria-hidden className="text-red-500">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={6}
          className={[fieldBase, errors.message ? errorClass : ''].join(' ')}
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          {...register('message', { required: 'Message is required' })}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-xs text-red-500" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      <div className="mt-6">
        <Button type="submit" variant="solid" disabled={isSubmitting} className="w-full sm:w-auto">
          {isSubmitting ? 'Sending…' : 'Send Message'}
        </Button>
      </div>

      {submitStatus === 'success' && (
        <p className="mt-4 text-green-600 text-sm font-semibold" role="status">
          Message sent! We'll get back to you shortly.
        </p>
      )}
      {submitStatus === 'error' && (
        <p className="mt-4 text-red-500 text-sm font-semibold" role="alert">
          Something went wrong. Please try again or email us directly at contact@jdhydro.com.
        </p>
      )}
    </form>
  );
}
