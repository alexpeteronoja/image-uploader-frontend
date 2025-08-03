import React, { useEffect } from 'react';
import '../App.css';
import Navbar from '../components/Navbar';

import FileUpload from '../components/FileUpload';

function Home() {
  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  });

  return (
    <>
      <div className="bg-[#e5e7eb] dark:bg-gray-800 dark:text-white min-h-screen">
        <Navbar />

        <FileUpload />
      </div>
    </>
  );
}

export default Home;
