import React from 'react';

export default function Footer() {
  return (
    <footer className=" text-gray-300 py-10 border-t border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <small className="mb-4 text-xs">
            &copy; 2024 Sachin Prabuditha. All rights reserved.
          </small>
          <p className="text-xs mb-4 text-center max-w-xs">
            <span className="font-semibold">About this website:</span> Built with React & Next.js, Tailwind CSS, TypeScript, React Email & Resend, Vercel hosting.
          </p>
        </div>
      </div>
    </footer>
  );
}
