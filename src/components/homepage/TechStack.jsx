import React, { useState } from 'react';

/* ─────────────────────────────────────────────────────────────────
   27 AUTHENTIC BRAND ICONS IN ROOMMASTER 5-TRACK FORMAT
───────────────────────────────────────────────────────────────── */
const track1Logos = [
  {
    name: 'Python',
    icon: (
      <svg viewBox="0 0 110 110" className="w-10 h-10">
        <path
          d="M53.8 2.6c-24.8 0-23.3 10.8-23.3 10.8l.1 11.2h23.7v3.4H21.2S6.5 26.3 6.5 51.3s12.9 24.1 12.9 24.1h7.7V64.6s-.4-12.9 12.7-12.9h23.5s12.2-.2 12.2-12.2V14.8s1.6-12.2-21.7-12.2zm-12.9 7.4c2.5 0 4.5 2 4.5 4.5s-2 4.5-4.5 4.5-4.5-2-4.5-4.5 2-4.5 4.5-4.5z"
          fill="#3776AB"
        />
        <path
          d="M56.2 107.4c24.8 0 23.3-10.8 23.3-10.8l-.1-11.2H55.7V82h33.1s14.7 1.7 14.7-23.3-12.9-24.1-12.9-24.1h-7.7v10.8s.4 12.9-12.7 12.9H46.9s-12.2.2-12.2 12.2v24.7s-1.6 12.2 21.5 12.2zm12.9-7.4c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"
          fill="#FFD43B"
        />
      </svg>
    ),
  },
  {
    name: 'Node.js',
    icon: (
      <svg viewBox="0 0 256 256" className="w-10 h-10">
        <path d="M128 12l104 60v120l-104 60-104-60V72L128 12z" fill="#5FA04E" />
        <path d="M128 32l86 50v100l-86 50-86-50V82l86-50z" fill="#333333" />
        <path
          d="M106 88c-12 0-20 8-20 20v40c0 12 8 20 20 20h44c12 0 20-8 20-20v-40c0-12-8-20-20-20h-44zm10 20h24v16h-24v-16zm0 24h24v16h-24v-16z"
          fill="#5FA04E"
        />
      </svg>
    ),
  },
  {
    name: 'AWS',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path
          d="M7.8 11.5c-.8.7-1.4 1.3-1.4 2.3 0 1.2.8 1.9 2 1.9 1 0 1.9-.6 2.4-1.5v2.7c-.8.4-1.8.6-2.8.6-2.5 0-4.2-1.6-4.2-4.1 0-1.8 1-3.2 2.6-4.1 1.3-.7 3.1-1.1 5.3-1.1v.6c0 1.8-.7 2.7-3.9 3.3zm5.7-4.4h2.5l3.2 10.4h-2.6l-.6-2.4H13.6l-.6 2.4h-2.5l3-10.4zm2.4 6.2l-.9-3.7-.9 3.7h1.8z"
          fill="#232F3E"
        />
        <path
          d="M21.5 18.2C18.6 20.4 14.5 21.6 10.5 21.6 6 21.6 2.5 20 .5 17.5c-.2-.2-.2-.6.1-.8.3-.2.7-.1.9.1C3.8 19.1 7.1 20.4 11 20.4c3.5 0 7.2-1 9.8-2.9.3-.2.7-.1.9.2.2.2.1.4-.2.5zm1.5-1c-.3-.4-1.8-.6-2.7-.4-.3 0-.3-.3-.1-.5 1.3-1.1 3.5-.8 3.8-.4.3.4-.2 2.6-1.4 3.6-.2.2-.4.1-.3-.2.3-.7.9-1.8.7-2.1z"
          fill="#FF9900"
        />
      </svg>
    ),
  },
  {
    name: 'Docker',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path
          d="M13 5h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2H7zm6 3h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2H7zm-3 0h2v2H4zm9 3h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2H7zm-3 0h2v2H4zm17.5 1.5c-.4-.3-1.4-.4-2.1-.2-.3-.6-.8-1.2-1.4-1.6l-.7-.4-.4.7c-.5 1-1.3 1.7-2.3 2H2c-.4 2.2.3 4.5 1.8 6.1 1.7 1.8 4.2 2.9 6.8 2.9 5.8 0 10.7-3.8 11.9-9.5z"
          fill="#2496ED"
        />
      </svg>
    ),
  },
  {
    name: 'Supabase',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path
          d="M13.4 23.6c-.6.8-1.9.4-1.9-.6V13.8H2.8c-.9 0-1.4-1-.8-1.7L10.6.4c.6-.8 1.9-.4 1.9.6v9.2h8.7c.9 0 1.4 1 .8 1.7l-8.6 11.7z"
          fill="#3ECF8E"
        />
      </svg>
    ),
  },
  {
    name: 'Kubernetes',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z" fill="#326CE5" />
        <path d="M12 4.5l6.5 3.75v7.5L12 19.5l-6.5-3.75v-7.5L12 4.5z" fill="#FFFFFF" />
        <path d="M12 6.8l4.5 2.6v5.2L12 17.2l-4.5-2.6V9.4L12 6.8z" fill="#326CE5" />
      </svg>
    ),
  },
  {
    name: 'Go',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path d="M1.5 10.5h6v3h-6zm0-4h10v3h-10zm0 8h4v3h-4z" fill="#00ADD8" />
        <path d="M16.5 6a6 6 0 100 12 6 6 0 000-12zm0 9.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7z" fill="#00ADD8" />
        <path d="M15 11h5v2h-5z" fill="#00ADD8" />
      </svg>
    ),
  },
  {
    name: 'Rust',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <circle cx="12" cy="12" r="10" fill="#DEA584" />
        <path d="M12 4a8 8 0 100 16 8 8 0 000-16zm-3 5h6a2.5 2.5 0 010 5H12v3H9V9zm3 3.5h3a1 1 0 000-2h-3v2z" fill="#000000" />
      </svg>
    ),
  },
  {
    name: 'Linux',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <ellipse cx="12" cy="13" rx="6" ry="8" fill="#FFD133" />
        <ellipse cx="12" cy="14" rx="5" ry="7" fill="#FFFFFF" />
        <circle cx="10" cy="9" r="1" fill="#000000" />
        <circle cx="14" cy="9" r="1" fill="#000000" />
        <path d="M11 10.5h2l-1 2z" fill="#FF9900" />
      </svg>
    ),
  },
];

const track2Logos = [
  {
    name: 'React 19',
    icon: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-10 h-10">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: 'Shopify',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path
          d="M18.8 6.2c-.1-.3-.3-.4-.5-.4h-1.4c-.1-.7-.4-2.5-1.9-3.7C13.8 1 12.4 1 11.6 1.3 10.3 1.8 9.5 3.1 9.3 4.6L6.5 5.5c-.5.2-.6.4-.7.8L3 21.4c0 .3.1.5.4.6l12.4 2c.2 0 .4 0 .5-.1L21 21c.2-.1.3-.3.3-.5l-2.5-14.3z"
          fill="#95BF47"
        />
        <path
          d="M12 3.6c.5 0 1.2.3 1.6 1.1.4.8.4 2 .4 2.8l-3.8 1.2c.2-1.3.8-3.1 1.8-4.6.3-.3.6-.5.9-.5z"
          fill="#5E8E3E"
        />
      </svg>
    ),
  },
  {
    name: 'Next.js 15',
    icon: (
      <svg viewBox="0 0 180 180" className="w-10 h-10">
        <circle cx="90" cy="90" fill="#000000" r="90" />
        <path
          d="M149.508 157.438L69.147 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.14 149.508 157.438Z"
          fill="#FFFFFF"
        />
        <rect fill="#FFFFFF" height="72" width="12" x="115" y="54" />
      </svg>
    ),
  },
  {
    name: 'Stripe',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <rect width="24" height="24" rx="5" fill="#635BFF" />
        <path
          d="M11.6 9.4c0-.7.6-1 1.6-1 1.4 0 3.2.5 4.6 1.2V6.1C16.3 5.4 14.7 5 13.2 5 9.4 5 7 7 7 10c0 4.6 6.3 3.9 6.3 5.9 0 .9-.8 1.2-1.9 1.2-1.6 0-3.7-.7-5.3-1.6v3.7c1.7.7 3.6 1.1 5.3 1.1 4 0 6.6-2 6.6-5.1 0-4.9-6.4-4.1-6.4-5.8z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10">
        <path
          d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"
          fill="#38BDF8"
        />
      </svg>
    ),
  },
  {
    name: 'Vue.js',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path d="M2 3h3.5L12 14.5 18.5 3H22L12 20.5 2 3z" fill="#41B883" />
        <path d="M6 3h3.5L12 7.5 14.5 3H18L12 13.5 6 3z" fill="#35495E" />
      </svg>
    ),
  },
  {
    name: 'Angular',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path d="M12 2L2 5.5l1.5 13L12 22l8.5-3.5 1.5-13L12 2z" fill="#DD0031" />
        <path d="M12 4.2l6.8 13.6h-2.3l-1.4-3.5H8.9l-1.4 3.5H5.2L12 4.2zm1.8 8.3L12 7.8l-1.8 4.7h3.6z" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    name: 'Vite',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path d="M21.5 3.5L12.5 21.5 2.5 6.5l8.5-2 10.5-1z" fill="#646CFF" />
        <path d="M13 3l-6 10h4l-2 7 9-11h-4l3-6z" fill="#FFD62E" />
      </svg>
    ),
  },
  {
    name: 'Svelte',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path d="M18.8 4.8C16.6 2.4 13.1 1.7 10 3L6.8 4.8C5.2 5.8 4.1 7.4 3.9 9.3c-.2 2 .5 3.9 1.9 5.2l.9.8-1.5 1.8c-1.3 1.6-1.5 3.8-.5 5.6 1 1.8 3 2.8 5 2.6 1.7-.2 3.3-1.1 4.3-2.5l3.2-4.5c1.4-1.9 1.5-4.4.4-6.4l-.8-1.3 1.5-1.8c1.6-1.8 1.8-4.5.5-6.6z" fill="#FF3E00" />
      </svg>
    ),
  },
];

const track3Logos = [
  {
    name: 'Gemini AI',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <defs>
          <linearGradient id="rm-gemini-logo" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1BA1E3" />
            <stop offset="50%" stopColor="#5B68DF" />
            <stop offset="100%" stopColor="#D96570" />
          </linearGradient>
        </defs>
        <path
          d="M12 2c.5 5 4.5 9.5 9.5 10-5 .5-9 4.5-9.5 10-.5-5-4.5-9-9.5-10 5-.5 9-5 9.5-10z"
          fill="url(#rm-gemini-logo)"
        />
      </svg>
    ),
  },
  {
    name: 'MongoDB',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path
          d="M12 1.5c-.3 0-.6.2-.7.4-1.9 3.2-5.3 9.4-5.3 13.6 0 4.1 3 7 6 7s6-2.9 6-7c0-4.2-3.4-10.4-5.3-13.6-.1-.2-.4-.4-.7-.4zm0 2.8c1.3 2.5 4.3 8.3 4.3 12.2 0 2.8-2 4.9-4.3 4.9V4.3z"
          fill="#47A248"
        />
        <path
          d="M12 21.4c-2.3 0-4.3-2.1-4.3-4.9 0-3.9 3-9.7 4.3-12.2v17.1z"
          fill="#3FA037"
        />
      </svg>
    ),
  },
  {
    name: 'OpenAI',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path
          d="M22.28 10.8a5.97 5.97 0 00-.47-4.65 6.03 6.03 0 00-5.83-3.1 5.98 5.98 0 00-4.47-2 6.02 6.02 0 00-5.7 4.14 5.98 5.98 0 00-4.06 2.94 6.03 6.03 0 00.73 6.54 5.97 5.97 0 00.47 4.65 6.03 6.03 0 005.83 3.1 5.98 5.98 0 004.47 2 6.02 6.02 0 005.7-4.14 5.98 5.98 0 004.06-2.94 6.03 6.03 0 00-.73-6.54zM12 13.8a1.8 1.8 0 111.8-1.8c0 1-.8 1.8-1.8 1.8z"
          fill="#10A37F"
        />
      </svg>
    ),
  },
  {
    name: 'Flutter',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path d="M14.3 2.5L5.7 11.1l3.5 3.5 12.1-12.1h-7z" fill="#54C5F8" />
        <path d="M14.3 12.4l-5.1 5.1 5.1 5.1h7l-8.6-8.6-3.5 3.5 5.1-5.1z" fill="#02569B" />
        <path d="M9.2 17.5l5.1-5.1 3.5 3.5-5.1 5.1z" fill="#0175C2" />
      </svg>
    ),
  },
  {
    name: 'PostgreSQL',
    icon: (
      <svg viewBox="0 0 256 256" className="w-10 h-10">
        <path
          d="M128 16C66.1 16 16 66.1 16 128s50.1 112 112 112 112-50.1 112-112S189.9 16 128 16z"
          fill="#336791"
        />
        <path
          d="M85 80c-5 10-10 25-10 45 0 25 10 45 25 55 5-15 15-25 30-30-10-5-15-15-15-25 0-15 10-25 25-25 5 0 10 2 15 5-5-12-15-20-30-20-15 0-30 5-40 0z"
          fill="#FFFFFF"
        />
        <path
          d="M140 100c-8 0-15 7-15 15 0 8 7 15 15 15s15-7 15-15c0-8-7-15-15-15z"
          fill="#336791"
        />
      </svg>
    ),
  },
  {
    name: 'Google Cloud',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path
          d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"
          fill="#4285F4"
        />
        <path
          d="M19 14h-6v6h6c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96L19 14z"
          fill="#EA4335"
        />
        <path d="M13 4c-3.64 0-6.67 2.59-7.35 6.04L13 14V4z" fill="#FBBC05" />
        <path d="M5.35 8.04C2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h7V14L5.35 8.04z" fill="#34A853" />
      </svg>
    ),
  },
  {
    name: 'PyTorch',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path d="M13.5 2.5a8 8 0 104.5 14.5l-1.5-1.5a6 6 0 11-3-11v-2z" fill="#EE4C2C" />
        <circle cx="16" cy="6" r="1.5" fill="#EE4C2C" />
      </svg>
    ),
  },
  {
    name: 'Hugging Face',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <circle cx="12" cy="12" r="10" fill="#FFD21E" />
        <circle cx="9" cy="10" r="1.5" fill="#000000" />
        <circle cx="15" cy="10" r="1.5" fill="#000000" />
        <path d="M8 14c1 2 7 2 8 0" stroke="#000000" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Claude AI',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <circle cx="12" cy="12" r="10" fill="#D97757" />
        <path d="M12 7l1.5 3.5L17 12l-3.5 1.5L12 17l-1.5-3.5L7 12l3.5-1.5L12 7z" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    name: 'LangChain',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <rect width="24" height="24" rx="5" fill="#1C3C3C" />
        <path d="M7 10h4v4H7zm6 0h4v4h-4zm-3-3h4v4h-4zm0 6h4v4h-4z" fill="#00A67E" />
      </svg>
    ),
  },
];

const track4Logos = [
  {
    name: 'Apple iOS',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path
          d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 0.93-2.85-.9.04-2 .6-2.65 1.35-.58.66-1.09 1.73-.95 2.76 1.01.08 2.05-.51 2.67-1.26z"
          fill="#000000"
        />
      </svg>
    ),
  },
  {
    name: 'Android',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path
          d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h4v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v6c0 .83.67 1.5 1.5 1.5S5 16.33 5 15.5v-6C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-6c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71a.498.498 0 00-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM9 5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
          fill="#3DDC84"
        />
      </svg>
    ),
  },
  {
    name: 'Figma',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path d="M8 24a4 4 0 01-4-4 4 4 0 014-4h4v4a4 4 0 01-4 4z" fill="#0ACF83" />
        <path d="M4 12a4 4 0 014-4h4v8H8a4 4 0 01-4-4z" fill="#A259FF" />
        <path d="M4 4a4 4 0 014-4h4v8H8a4 4 0 01-4-4z" fill="#F24E1E" />
        <path d="M12 0h4a4 4 0 014 4 4 4 0 01-4 4h-4V0z" fill="#FF7262" />
        <path d="M20 12a4 4 0 01-4 4 4 4 0 01-4-4 4 4 0 014-4 4 4 0 014 4z" fill="#1ABCFE" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          fill="#181717"
        />
      </svg>
    ),
  },
  {
    name: 'Redis',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path d="M2.5 8.5L12 4l9.5 4.5L12 13 2.5 8.5z" fill="#DC382D" />
        <path d="M2.5 12L12 16.5 21.5 12l-1.5 2.5-8 3.5-8-3.5-1.5-2.5z" fill="#B71C1C" />
        <path d="M2.5 15.5L12 20l9.5-4.5-1.5 2.5-8 3.5-8-3.5-1.5-2.5z" fill="#7F0000" />
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    icon: (
      <svg viewBox="0 0 256 256" className="w-10 h-10">
        <rect width="256" height="256" rx="28" fill="#3178C6" />
        <path
          d="M150 193.6c14.2 8.3 30.1 12.8 46.4 13 16.5 0 26.6-7.3 26.6-18.7 0-12.7-11.4-17.7-30.8-24.8-24.9-9-40.8-21.4-40.8-44.5 0-23.7 18.6-41.5 49-41.5 14.8 0 28.3 3.5 39.5 9.4l-7.4 20.3c-11.2-5.7-22.7-8.6-33.6-8.6-14.7 0-23.2 6.8-23.2 16.5 0 11.4 10.4 16 28.8 22.8 27.5 10.1 43.1 22.8 43.1 46.8 0 25.4-20 43.7-53.5 43.7-17.8 0-35.3-5-48.4-12.8l7.3-21.6zM32 99.8h78.3v21.5H75v84.9H49.3v-84.9H32V99.8z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
  {
    name: 'Swift',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path d="M21.5 17.5c-4.5 4.5-11.5 4.5-16 0-1-1-1.5-2.2-1.5-3.5 0-3 3-6.5 7-9 0 2-1 4-2 5.5 3.5-1 7-4 7.5-6.5 1 2 1.5 4 1 6 3-2 4-5 4-5s-.5 4-3.5 7c4.5-1.5 6-4 6-4s-.5 2.5-2.5 4.5z" fill="#F05138" />
      </svg>
    ),
  },
  {
    name: 'Kotlin',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <defs>
          <linearGradient id="ktGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0095D5" />
            <stop offset="50%" stopColor="#8056CA" />
            <stop offset="100%" stopColor="#C757BC" />
          </linearGradient>
        </defs>
        <path d="M2 2h20L12 12 22 22H2V2z" fill="url(#ktGrad)" />
      </svg>
    ),
  },
  {
    name: 'React Native',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <circle cx="12" cy="12" r="2.5" fill="#61DAFB" />
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(90 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(150 12 12)" />
      </svg>
    ),
  },
  {
    name: 'GitLab',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path d="M12 21.5L2 14.2l3.8-11.7L9 11.2h6l3.2-8.7L22 14.2 12 21.5z" fill="#E24329" />
        <path d="M12 21.5l-3-10.3h6L12 21.5z" fill="#FC6D26" />
        <path d="M12 21.5L2 14.2h7L12 21.5zm0 0l10-7.3h-7L12 21.5z" fill="#FCA326" />
      </svg>
    ),
  },
];

const track5Logos = [
  {
    name: 'JavaScript',
    icon: (
      <svg viewBox="0 0 256 256" className="w-10 h-10">
        <rect width="256" height="256" rx="28" fill="#F7DF1E" />
        <path
          d="M67.3 213.7c11.9 6.9 25 10.5 38.3 10.5 22.2 0 35.7-10.8 35.7-34.9v-86.8h-26.6v86.2c0 9.7-4.8 14.8-13.8 14.8-6.1 0-11.6-2.1-16.7-5.9l-16.9 16.1zm84.4-1.2c13.7 7.7 29.8 12.2 46.4 12.2 26.8 0 43.2-13.3 43.2-34.7 0-20.4-12.8-30.9-35.9-40.4-15.6-6.4-22.8-11.3-22.8-19.5 0-7.8 6.4-13.6 17.5-13.6 9.7 0 19.3 3.6 28 9.5l11-19.1c-11.4-7.4-25.5-11.5-39.7-11.5-25.7 0-41.9 14.2-41.9 34.3 0 20.3 13.5 31.4 36.4 40.5 16.4 6.7 22.8 12 22.8 20.6 0 8.8-7.7 14.9-19.7 14.9-12.3 0-24.6-4.7-34.8-12.4l-10.5 19.7z"
          fill="#000000"
        />
      </svg>
    ),
  },
  {
    name: 'GraphQL',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path
          d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2zm0 2.3L4.99 8.4v7.2L12 19.7l7.01-4.1V8.4L12 4.3z"
          fill="#E10098"
        />
        <circle cx="12" cy="2" r="2" fill="#E10098" />
        <circle cx="20.66" cy="7" r="2" fill="#E10098" />
        <circle cx="20.66" cy="17" r="2" fill="#E10098" />
        <circle cx="12" cy="22" r="2" fill="#E10098" />
        <circle cx="3.34" cy="17" r="2" fill="#E10098" />
        <circle cx="3.34" cy="7" r="2" fill="#E10098" />
      </svg>
    ),
  },
  {
    name: 'Vercel',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path d="M12 2L24 22H0L12 2z" fill="#000000" />
      </svg>
    ),
  },
  {
    name: 'Cloudflare',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path
          d="M18.8 12.8c-.2-1.8-1.7-3.2-3.6-3.2-.8 0-1.5.3-2.1.8-.6-1.5-2.2-2.6-4-2.6-2.3 0-4.2 1.8-4.3 4.1C2.1 12.4 0 14.7 0 17.5 0 20.5 2.5 23 5.5 23h13.2c2.9 0 5.3-2.4 5.3-5.3 0-2.6-1.9-4.7-4.5-5.1l-.7.2z"
          fill="#F38020"
        />
      </svg>
    ),
  },
  {
    name: 'FastAPI',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path d="M12 0a12 12 0 100 24 12 12 0 000-24zm-.8 18l-3-6h2.7l.8-4 3 6h-2.7l-.8 4z" fill="#009688" />
      </svg>
    ),
  },
  {
    name: 'HTML5',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path d="M2.5 2l1.7 18.5 7.8 2.2 7.8-2.2L21.5 2H2.5zm15.4 5.2H7.9l.3 3.1h9.4l-.8 8-4.8 1.3-4.8-1.3-.3-3.6h2.5l.2 1.8 2.4.6 2.4-.6.3-3.4H6.5L5.7 4.2h12.5l-.3 3z" fill="#E34F26" />
      </svg>
    ),
  },
  {
    name: 'CSS3',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path d="M2.5 2l1.7 18.5 7.8 2.2 7.8-2.2L21.5 2H2.5zm15.4 5.2H7.9l.3 3.1h9.4l-.8 8-4.8 1.3-4.8-1.3-.3-3.6h2.5l.2 1.8 2.4.6 2.4-.6.3-3.4H6.5L5.7 4.2h12.5l-.3 3z" fill="#1572B6" />
      </svg>
    ),
  },
  {
    name: 'MySQL',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path d="M12 3c-4.5 0-8 3-8 7 0 2.5 1.5 4.8 3.8 6 .5.3.8.8.7 1.4l-.3 2.1c1.2-.5 2.5-1.2 3.5-2.1.8.1 1.5.2 2.3.2 4.5 0 8-3 8-7s-3.5-7.6-10-7.6z" fill="#00758F" />
        <path d="M15 11c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" fill="#F29111" />
      </svg>
    ),
  },
  {
    name: 'Prisma',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path d="M12.5 2L3 18.5h7L9 22l11-8.5h-5.5L18 8l-5.5-6z" fill="#2D3748" />
      </svg>
    ),
  },
];

const TechStack = () => {
  const [hovered, setHovered] = useState(null);

  const renderLogoItem = (item, idx) => (
    <div
      key={`${item.name}-${idx}`}
      onMouseEnter={() => setHovered(item)}
      onMouseLeave={() => setHovered(null)}
      className="market_content_logo_wrap"
    >
      <div className="market_content_logo">
        {item.icon}
      </div>
    </div>
  );

  return (
    <section logo-section="" className="w-full section_market bg-white dark:bg-[#030A1E] text-gray-900 dark:text-white px-6 sm:px-8 lg:px-12 overflow-hidden transition-colors duration-300">
      {/* ── Exact RoomMaster Hidden SVG Gooey Filter ── */}
      <div className="clip-path-round w-embed">
        <svg
          style={{ visibility: 'hidden', position: 'absolute', pointerEvents: 'none' }}
          width="0"
          height="0"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <defs>
            <filter id="roundLarge">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                result="goo"
              />
              <feComposite in="SourceGraphic" in2="goo" operator="atop" />
            </filter>
          </defs>
        </svg>
      </div>

      {/* ── RoomMaster Scoped CSS Rules ── */}
      <style>{`
        :root {
          --royal-blue--600-primary: #0156fc;
          --beige--100-primary: #f7f5f2;
          --powder-blue--400-primary: #aac7fe;
        }

        .section_market {
          padding-top: 1.5rem;
          padding-bottom: 3.5rem;
          font-family: inherit;
        }

        @media (min-width: 992px) {
          .section_market {
            padding-top: 1.75rem;
            padding-bottom: 4rem;
          }
        }

        .market_component {
          width: 100%;
          max-width: 80rem;
          margin: 0 auto;
        }

        .top_title_wrap {
          text-align: left;
          margin-bottom: 2rem;
        }

        .top_title {
          font-size: clamp(2rem, 3.4vw, 3.2rem);
          font-weight: 500;
          letter-spacing: -0.025em;
          color: #0f172a;
          line-height: 1.15;
          margin: 0;
        }

        .market_content_wrap {
          justify-content: flex-start;
          display: flex;
          align-items: stretch;
          width: 100%;
          position: relative;
        }

        @media (max-width: 991px) {
          .market_content_wrap {
            flex-direction: column;
            gap: 1.5rem;
          }
        }

        .market_content_left {
          grid-column-gap: 1.5rem;
          grid-row-gap: 1.25rem;
          gap: 1.25rem;
          flex-flow: column;
          width: 44%;
          margin-right: -8%;
          display: flex;
          z-index: 2;
          position: relative;
        }

        @media (max-width: 991px) {
          .market_content_left {
            width: 100%;
            margin-right: 0;
          }
        }

        @media (min-width: 992px) {
          .market_content_round {
            filter: url('#roundLarge');
          }

          .market_content.is_1 {
            clip-path: polygon(0% 0%, 100% 0%, 100% 48%, 75.5% 48%, 75.5% 100%, 0% 100%);
          }

          .market_content.is_2 {
            clip-path: polygon(20% 0%, 100% 0%, 100% 48%, 100% 100%, 75.5% 100%, 20% 100%, 20% 77%, 0% 77%, 0% 42%, 20% 42%);
          }
        }

        .market_content_round.is_1 {
          flex: 1;
          display: flex;
          flex-direction: column;
          min-height: 0;
        }

        .market_content.is_1 {
          background-color: var(--royal-blue--600-primary);
          padding: 1.75rem 5vw 1.75rem 2rem;
          border-radius: 1.5rem;
          flex: 1;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }

        @media (min-width: 992px) {
          .market_content.is_1 {
            border-radius: 0;
          }
        }

        .market_logo {
          width: 2.75rem;
          height: 2.75rem;
          color: #ffffff;
          background-color: #ffffff3d;
          border-radius: 0.6rem;
          justify-content: center;
          align-items: center;
          margin-bottom: 1.15rem;
          display: flex;
        }

        .market_desc_wrap {
          width: 100%;
          max-width: 22rem;
        }

        .market_desc {
          color: #ffffff;
          font-size: 1.05rem;
          line-height: 1.5;
          margin: 0;
          font-weight: 400;
        }

        .market_content_cta {
          grid-column-gap: 1rem;
          grid-row-gap: 1rem;
          border: 1px dashed var(--powder-blue--400-primary);
          border-radius: 0.875rem;
          flex-flow: row;
          justify-content: space-between;
          align-items: center;
          padding: 0.9rem 1.35rem;
          display: flex;
          background-color: #ffffff;
          flex-shrink: 0;
        }

        @media (max-width: 640px) {
          .market_content_cta {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        .market_content_title_wrap {
          width: 100%;
          max-width: 18rem;
        }

        .market_content_title {
          font-size: 0.95rem;
          line-height: 1.35;
          color: #0f172a;
          margin: 0;
          font-weight: 500;
        }

        .market_content_link {
          flex: none;
        }

        .button.is-alternate {
          border: 1px solid var(--royal-blue--600-primary);
          color: var(--royal-blue--600-primary);
          background-color: transparent;
          border-radius: 0.5rem;
          padding: 0.5rem 1.15rem;
          font-size: 0.825rem;
          font-weight: 600;
          text-decoration: none;
          display: inline-block;
          transition: background-color 0.2s, color 0.2s;
          cursor: pointer;
          white-space: nowrap;
        }

        .button.is-alternate:hover {
          background-color: var(--royal-blue--600-primary);
          color: #ffffff;
        }

        .market_content_round.is_2 {
          width: 64%;
          overflow: hidden;
          z-index: 1;
          position: relative;
        }

        @media (max-width: 991px) {
          .market_content_round.is_2 {
            width: 100%;
          }
        }

        .market_content.is_2 {
          background-color: var(--beige--100-primary);
          height: 100%;
          padding: 1.15rem 0;
          position: relative;
          overflow: hidden;
          border-radius: 1.5rem;
        }

        @media (min-width: 992px) {
          .market_content.is_2 {
            border-radius: 0;
          }
        }

        .market_content_logos_container {
          flex-flow: column;
          justify-content: space-between;
          align-items: flex-start;
          width: 100%;
          height: 100%;
          display: flex;
          position: relative;
          gap: 0.85rem;
          z-index: 2;
        }

        .market_content_logos_track {
          grid-column-gap: 1.35rem;
          grid-row-gap: 1.35rem;
          justify-content: flex-start;
          align-items: center;
          display: flex;
          white-space: nowrap;
        }

        @media (min-width: 992px) {
          .market_content_logos_track.is_1,
          .market_content_logos_track.is_5 {
            margin-left: 2.75rem;
          }
          .market_content_logos_track.is_2 {
            margin-left: 8.5rem;
          }
        }

        .market_content_logo_wrap {
          background-color: #ffffff;
          border-radius: 0.875rem;
          justify-content: center;
          align-items: center;
          width: 3.75rem;
          height: 3.75rem;
          display: flex;
          flex-shrink: 0;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.05);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          cursor: pointer;
        }

        .market_content_logo_wrap:hover {
          transform: scale(1.08);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
        }

        .market_content_logo {
          flex: none;
          width: 2rem;
          height: 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .market_overlay.is_left_right {
          background-image: linear-gradient(90deg, #f7f5f2f0, #f7f5f200 20%, #f7f5f200 80%, #f7f5f2f0);
          position: absolute;
          inset: 0%;
          pointer-events: none;
          z-index: 3;
        }

        .market_overlay.is_top_bottom {
          background-image: linear-gradient(#f7f5f2e6, #f7f5f200 20%, #f7f5f200 80%, #f7f5f2e6);
          position: absolute;
          inset: 0%;
          pointer-events: none;
          z-index: 3;
        }
      `}</style>

      <div className="max-w-7xl mx-auto market_component">
        {/* ── Section Title Header ── */}
        <div className="top_title_wrap">
          <h2 className="top_title">Create your perfect technology ecosystem</h2>
        </div>

          {/* ── Exact RoomMaster Inspected HTML Hierarchy ── */}
          <div className="market_content_wrap">
            {/* Left Column */}
            <div id="w-node-_8c3b925d-ad9c-0682-3acb-a2ef7ab91c00-7ab91bf7" className="market_content_left">
              <div className="market_content_round is_1">
                <div className="market_content is_1">
                  <div className="market_logo">
                    <div className="icon-embed-small w-embed">
                      {/* Exact RoomMaster 4-Box App Grid SVG */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        viewBox="0 0 33 33"
                        fill="none"
                        preserveAspectRatio="xMidYMid meet"
                        aria-hidden="true"
                        role="img"
                      >
                        <g clipPath="url(#clip0_2514_10113)">
                          <path
                            d="M5.54492 7.11902C5.54492 6.75956 5.68772 6.41482 5.94189 6.16064C6.19607 5.90647 6.54081 5.76367 6.90027 5.76367H12.3217C12.6811 5.76367 13.0259 5.90647 13.28 6.16064C13.5342 6.41482 13.677 6.75956 13.677 7.11902V12.5404C13.677 12.8999 13.5342 13.2446 13.28 13.4988C13.0259 13.753 12.6811 13.8958 12.3217 13.8958H6.90027C6.54081 13.8958 6.19607 13.753 5.94189 13.4988C5.68772 13.2446 5.54492 12.8999 5.54492 12.5404V7.11902Z"
                            stroke="currentColor"
                            strokeWidth="2.71069"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M5.54492 20.6718C5.54492 20.3123 5.68772 19.9676 5.94189 19.7134C6.19607 19.4592 6.54081 19.3164 6.90027 19.3164H12.3217C12.6811 19.3164 13.0259 19.4592 13.28 19.7134C13.5342 19.9676 13.677 20.3123 13.677 20.6718V26.0931C13.677 26.4526 13.5342 26.7973 13.28 27.0515C13.0259 27.3057 12.6811 27.4485 12.3217 27.4485H6.90027C6.54081 27.4485 6.19607 27.3057 5.94189 27.0515C5.68772 26.7973 5.54492 26.4526 5.54492 26.0931V20.6718Z"
                            stroke="currentColor"
                            strokeWidth="2.71069"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M19.0977 20.6718C19.0977 20.3123 19.2405 19.9676 19.4946 19.7134C19.7488 19.4592 20.0935 19.3164 20.453 19.3164H25.8744C26.2338 19.3164 26.5786 19.4592 26.8328 19.7134C27.0869 19.9676 27.2297 20.3123 27.2297 20.6718V26.0931C27.2297 26.4526 27.0869 26.7973 26.8328 27.0515C26.5786 27.3057 26.2338 27.4485 25.8744 27.4485H20.453C20.0935 27.4485 19.7488 27.3057 19.4946 27.0515C19.2405 26.7973 19.0977 26.4526 19.0977 26.0931V20.6718Z"
                            stroke="currentColor"
                            strokeWidth="2.71069"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M19.0977 9.8291H27.2297"
                            stroke="currentColor"
                            strokeWidth="2.71069"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M23.165 5.76367V13.8958"
                            stroke="currentColor"
                            strokeWidth="2.71069"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2514_10113">
                            <rect
                              width="32.5283"
                              height="32.5283"
                              fill="currentColor"
                              transform="translate(0.123047 0.341797)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="market_desc_wrap">
                    <p className="market_desc text-size-large">
                      Connect roommaster with <strong>100+ third-party solutions</strong> from door locks, and point of
                      sale to accounting systems, and marketing tools, so your hotel runs like a well-oiled machine.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom CTA Box */}
              <div className="market_content_cta">
                <div className="market_content_title_wrap">
                  <h3 className="market_content_title text-size-large" role="heading" aria-level="3">
                    See how roommaster connects with your favorite tools
                  </h3>
                </div>
                <div className="market_content_link">
                  <a href="#contact" className="button w-inline-block is-alternate">
                    <div>Visit Marketplace</div>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Logo Grid with Overhang Wrap */}
            <div id="w-node-_8c3b925d-ad9c-0682-3acb-a2ef7ab91c12-7ab91bf7" className="market_content_round is_2">
              <div className="market_content is_2">
                <div className="market_content_logos_container">
                  {/* Track 1 */}
                  <div logo-wrapper="" className="market_content_logos_track is_1">
                    {track1Logos.map(renderLogoItem)}
                  </div>

                  {/* Track 2 */}
                  <div logo-wrapper="" className="market_content_logos_track is_2">
                    {track2Logos.map(renderLogoItem)}
                  </div>

                  {/* Track 3 */}
                  <div logo-wrapper="" className="market_content_logos_track">
                    {track3Logos.map(renderLogoItem)}
                  </div>

                  {/* Track 4 */}
                  <div logo-wrapper="" className="market_content_logos_track">
                    {track4Logos.map(renderLogoItem)}
                  </div>

                  {/* Track 5 */}
                  <div logo-wrapper="" className="market_content_logos_track is_5">
                    {track5Logos.map(renderLogoItem)}
                  </div>
                </div>

                {/* Overlays */}
                <div className="market_overlay is_left_right" />
                <div className="market_overlay is_top_bottom" />
              </div>
            </div>
          </div>

          {/* Interactive Tooltip Hint Bar */}
          {hovered && (
            <div className="text-center mt-6 text-sm font-medium text-slate-600">
              <span className="font-semibold text-[#0156fc]">{hovered.name}</span> — {hovered.category} Architecture
            </div>
          )}
        </div>
    </section>
  );
};

export default TechStack;
