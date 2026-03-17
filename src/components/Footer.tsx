import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-5 border-t border-slate-100 dark:border-slate-900 text-center bg-[#f2f2f2] dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-400 dark:text-slate-500 text-sm">
            © {new Date().getFullYear()} Kritisha Shrestha. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a
              href="https://www.facebook.com/kritisha.shrestha.792"
              target="_blank"
              rel="noopener noreferrer"
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
              href="https://www.instagram.com/kritisha_shrestha/"
              target="_blank"
              rel="noopener noreferrer"
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
              href="https://github.com/KritishaShrestha"
              target="_blank"
              rel="noopener noreferrer"
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
              href="https://www.linkedin.com/in/kritisha-shrestha-618481254/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
                aria-hidden="true"
              >
                <path d="M6.94 8.5H3.56V19.4h3.38V8.5zm.22-3.37a1.96 1.96 0 11-3.92 0 1.96 1.96 0 013.92 0zM20.44 13.16v6.24h-3.36v-5.85c0-1.47-.53-2.47-1.85-2.47-1 0-1.6.67-1.86 1.33-.1.23-.12.56-.12.9v6.1H9.9s.04-9.9 0-10.9h3.36v1.54l-.02.03h.02v-.03c.45-.7 1.24-1.7 3.02-1.7 2.2 0 3.86 1.44 3.86 4.53z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
