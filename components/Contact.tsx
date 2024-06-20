import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import MagicButton from './ui/MagicButton';
import Lottie from 'react-lottie';
import animationData from "@/data/confetti.json";


const Contact = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      };
  return (
    <section id="contact" className="py-20 mb-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center mb-12">Contact Me</h2>
        <div className="flex flex-wrap -mx-6">
          <div className="w-full lg:w-1/2 px-6 mb-12 lg:mb-0">
            <div className="bg-black-200 text-white rounded-lg shadow-lg p-8">
              <form>
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
                  <input type="text" id="name" className="w-full px-3 py-2 border border-black-300 bg-black-100 rounded" required />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                  <input type="email" id="email" className="w-full px-3 py-2 border border-black-300 bg-black-100 rounded" required />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
                  <textarea id="message" className="w-full px-3 py-2 border border-black-300 bg-black-100 rounded" required></textarea>
                </div>
                <div className="text-center">
                  <MagicButton title='Send Message' icon={undefined} position={''}/>
                </div>
              </form>
            </div>
          </div>
          
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
