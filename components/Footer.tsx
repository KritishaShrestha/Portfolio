
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-slate-100 dark:border-slate-900 text-center bg-[#fbfbfc] dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-400 dark:text-slate-500 text-sm">© {new Date().getFullYear()} Kritisha Shrestha. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a
              href="#"
              className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <img
                src="https://cdn.simpleicons.org/facebook/94a3b8"
                alt="Facebook"
                className="w-5 h-5"
              />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <img
                src="https://cdn.simpleicons.org/instagram/94a3b8"
                alt="Instagram"
                className="w-5 h-5"
              />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <img
                src="https://cdn.simpleicons.org/github/94a3b8"
                alt="GitHub"
                className="w-5 h-5"
              />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="Email"
            >
              <img
                src="https://cdn.simpleicons.org/gmail/94a3b8"
                alt="Email"
                className="w-5 h-5"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
