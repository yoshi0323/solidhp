'use client';

import React from 'react';

const Footer = () => {
  return (
    <div className="mt-20 text-center text-solid-gray-400 text-sm">
      <p>© {new Date().getFullYear()} SOLID. All rights reserved.</p>
    </div>
  );
};

export default Footer; 