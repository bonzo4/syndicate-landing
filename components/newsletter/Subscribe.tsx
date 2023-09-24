'use client';

import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function NewsletterSubscribe() {
  const [email, setEmail] = useState('');

  const subscribe = async () => {
    if (!email) return;

    const res = await fetch('/api/newsletter/subscribe', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (data.error) {
      toast.error('Something went wrong, please try again.');
      return;
    }

    toast.success('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <div className='flex flex-col'>
      <div className='flex flex-col space-y-5'>
        <div className='flex flex-row items-center justify-between space-x-5 rounded-md'>
          <input
            type='email'
            placeholder='Email'
            className='rounded-md border-none bg-cardBlack p-3 text-lg text-[#DADADA] focus:ring-0'
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className='rounded-md border-none bg-cardBlack px-4 py-3  text-lg text-[#DADADA] focus:ring-0'
            onClick={subscribe}
          >
            Subscribe
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
