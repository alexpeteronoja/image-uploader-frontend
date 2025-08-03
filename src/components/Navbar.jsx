import { useState } from 'react';

function Navbar() {
  const [isDark, setIsDark] = useState(false);

  function toggleDarkMode() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.theme = isDark ? 'dark' : 'light';
    setIsDark(isDark);
  }

  return (
    <div>
      <div className="flex items-center justify-between border-b px-12 py-3">
        <div className="flex space-x-4 items-center cursor-pointer">
          <div>
            <img src="/images/logo-small.svg" alt="" />
          </div>
          <div className="text-[14px] font-medium dark:text-white">
            ImageUpload
          </div>
        </div>

        <div onClick={toggleDarkMode} className="cursor-pointer">
          <img
            src={isDark ? '/images/Sun_fill.svg' : '/images/Moon_fill.svg'}
            alt=""
            className={`${isDark ? 'bg-[#4D5562]' : 'bg-white'} p-2 rounded-md`}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
