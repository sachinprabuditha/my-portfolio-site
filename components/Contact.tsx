"use client";
import React, { useState } from 'react';
import Lottie from 'react-lottie';
import animationData from '@/data/confetti.json';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setStatus('Sending...');

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (res.status === 200) {
      setStatus('Message sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
    } else {
      setStatus('Failed to send message.');
    }
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <section id="contact" className="py-20 mb-20 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center mb-12">Contact Me</h2>
        <div className="flex flex-wrap -mx-6">
          <div className="w-full lg:w-1/2 px-6 mb-12 lg:mb-0">
            <div className="bg-black-200 text-white rounded-lg shadow-lg p-8">
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-black-300 rounded"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-black-300 rounded"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    className="w-full px-3 py-2 border border-black-300 rounded"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <MagicButton title="Send Message" icon={undefined} position={''} />
                </div>
              </form>
              {status && <p className="text-center mt-4">{status}</p>}
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-6 flex justify-center items-center">
            <Lottie options={defaultOptions} height={400} width={400} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
