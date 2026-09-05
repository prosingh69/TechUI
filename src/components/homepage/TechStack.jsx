import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle2, Layers, Cpu, Database, Cloud } from 'lucide-react';

const technologies = [
  // Frontend & Mobile
  {
    name: 'React 19',
    category: 'frontend',
    desc: 'Declarative component ecosystem',
    icon: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-8 h-8 sm:w-9 sm:h-9">
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
    name: 'Next.js 15',
    category: 'frontend',
    desc: 'Hybrid SSR & edge rendering',
    icon: (
      <svg viewBox="0 0 180 180" className="w-8 h-8 sm:w-9 sm:h-9">
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
    name: 'TypeScript',
    category: 'frontend',
    desc: 'Strict enterprise type safety',
    icon: (
      <svg viewBox="0 0 256 256" className="w-8 h-8 sm:w-9 sm:h-9">
        <rect width="256" height="256" rx="28" fill="#3178C6" />
        <path
          d="M150 193.6c14.2 8.3 30.1 12.8 46.4 13 16.5 0 26.6-7.3 26.6-18.7 0-12.7-11.4-17.7-30.8-24.8-24.9-9-40.8-21.4-40.8-44.5 0-23.7 18.6-41.5 49-41.5 14.8 0 28.3 3.5 39.5 9.4l-7.4 20.3c-11.2-5.7-22.7-8.6-33.6-8.6-14.7 0-23.2 6.8-23.2 16.5 0 11.4 10.4 16 28.8 22.8 27.5 10.1 43.1 22.8 43.1 46.8 0 25.4-20 43.7-53.5 43.7-17.8 0-35.3-5-48.4-12.8l7.3-21.6zM32 99.8h78.3v21.5H75v84.9H49.3v-84.9H32V99.8z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
  {
    name: 'JavaScript',
    category: 'frontend',
    desc: 'Modern ESNext runtime',
    icon: (
      <svg viewBox="0 0 256 256" className="w-8 h-8 sm:w-9 sm:h-9">
        <rect width="256" height="256" rx="28" fill="#F7DF1E" />
        <path
          d="M67.3 213.7c11.9 6.9 25 10.5 38.3 10.5 22.2 0 35.7-10.8 35.7-34.9v-86.8h-26.6v86.2c0 9.7-4.8 14.8-13.8 14.8-6.1 0-11.6-2.1-16.7-5.9l-16.9 16.1zm84.4-1.2c13.7 7.7 29.8 12.2 46.4 12.2 26.8 0 43.2-13.3 43.2-34.7 0-20.4-12.8-30.9-35.9-40.4-15.6-6.4-22.8-11.3-22.8-19.5 0-7.8 6.4-13.6 17.5-13.6 9.7 0 19.3 3.6 28 9.5l11-19.1c-11.4-7.4-25.5-11.5-39.7-11.5-25.7 0-41.9 14.2-41.9 34.3 0 20.3 13.5 31.4 36.4 40.5 16.4 6.7 22.8 12 22.8 20.6 0 8.8-7.7 14.9-19.7 14.9-12.3 0-24.6-4.7-34.8-12.4l-10.5 19.7z"
          fill="#000000"
        />
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    desc: 'Utility-first styling system',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 sm:w-9 sm:h-9">
        <path
          d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"
          fill="#38BDF8"
        />
      </svg>
    ),
  },
  {
    name: 'Flutter',
    category: 'frontend',
    desc: 'Cross-platform native iOS & Android',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9">
        <path d="M14.3 2.5L5.7 11.1l3.5 3.5 12.1-12.1h-7z" fill="#54C5F8" />
        <path d="M14.3 12.4l-5.1 5.1 5.1 5.1h7l-8.6-8.6-3.5 3.5 5.1-5.1z" fill="#02569B" />
        <path d="M9.2 17.5l5.1-5.1 3.5 3.5-5.1 5.1z" fill="#0175C2" />
      </svg>
    ),
  },
  {
    name: 'Apple iOS',
    category: 'frontend',
    desc: 'Swift & native Apple ecosystem',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9">
        <path
          d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 0.93-2.85-.9.04-2 .6-2.65 1.35-.58.66-1.09 1.73-.95 2.76 1.01.08 2.05-.51 2.67-1.26z"
          fill="#000000"
        />
      </svg>
    ),
  },
  {
    name: 'Android',
    category: 'frontend',
    desc: 'Kotlin & Android material engine',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9">
        <path
          d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h4v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v6c0 .83.67 1.5 1.5 1.5S5 16.33 5 15.5v-6C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-6c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71a.498.498 0 00-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM9 5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
          fill="#3DDC84"
        />
      </svg>
    ),
  },

  // Backend & Cloud & DB
  {
    name: 'Node.js',
    category: 'backend',
    desc: 'High-throughput async event loops',
    icon: (
      <svg viewBox="0 0 256 256" className="w-8 h-8 sm:w-9 sm:h-9">
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
    name: 'Python',
    category: 'backend',
    desc: 'FastAPI, PyTorch & data APIs',
    icon: (
      <svg viewBox="0 0 110 110" className="w-8 h-8 sm:w-9 sm:h-9">
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
    name: 'PostgreSQL',
    category: 'backend',
    desc: 'ACID-compliant relational database',
    icon: (
      <svg viewBox="0 0 256 256" className="w-8 h-8 sm:w-9 sm:h-9">
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
    name: 'MongoDB',
    category: 'backend',
    desc: 'Flexible distributed document DB',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9">
        <path
          d="M12 1.5c-.3 0-.6.2-.7.4-1.9 3.2-5.3 9.4-5.3 13.6 0 4.1 3 7 6 7s6-2.9 6-7c0-4.2-3.4-10.4-5.3-13.6-.1-.2-.4-.4-.7-.4zm0 2.8c1.3 2.5 4.3 8.3 4.3 12.2 0 2.8-2 4.9-4.3 4.9V4.3z"
          fill="#47A248"
        />
        <path
          d="M12 21.4c-2.3 0-4.3-2.1-4.3-4.9 0-3.9 3-9.7 4.3-12.2v17.1z"
          fill="#3FA037"
        />
        <path
          d="M12 21.8c-.3 0-.5.2-.5.5v.2c0 .3.2.5.5.5s.5-.2.5-.5v-.2c0-.3-.2-.5-.5-.5z"
          fill="#A6A6A6"
        />
      </svg>
    ),
  },
  {
    name: 'Redis',
    category: 'backend',
    desc: 'Sub-millisecond cache & pub/sub',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9">
        <path d="M2.5 8.5L12 4l9.5 4.5L12 13 2.5 8.5z" fill="#DC382D" />
        <path d="M2.5 12L12 16.5 21.5 12l-1.5 2.5-8 3.5-8-3.5-1.5-2.5z" fill="#B71C1C" />
        <path d="M2.5 15.5L12 20l9.5-4.5-1.5 2.5-8 3.5-8-3.5-1.5-2.5z" fill="#7F0000" />
      </svg>
    ),
  },
  {
    name: 'Docker',
    category: 'cloud',
    desc: 'Isolated microservice containers',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9">
        <path
          d="M13 5h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2H7zm6 3h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2H7zm-3 0h2v2H4zm9 3h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2H7zm-3 0h2v2H4zm17.5 1.5c-.4-.3-1.4-.4-2.1-.2-.3-.6-.8-1.2-1.4-1.6l-.7-.4-.4.7c-.5 1-1.3 1.7-2.3 2H2c-.4 2.2.3 4.5 1.8 6.1 1.7 1.8 4.2 2.9 6.8 2.9 5.8 0 10.7-3.8 11.9-9.5z"
          fill="#2496ED"
        />
      </svg>
    ),
  },
  {
    name: 'AWS',
    category: 'cloud',
    desc: 'Auto-scaling serverless cloud infra',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9">
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
    name: 'Google Cloud',
    category: 'cloud',
    desc: 'Kubernetes & Vertex AI pipelines',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9">
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

  // AI & Ecosystem
  {
    name: 'Gemini AI',
    category: 'ai',
    desc: 'Multimodal vision & reasoning',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9">
        <defs>
          <linearGradient id="tech-gemini-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1BA1E3" />
            <stop offset="50%" stopColor="#5B68DF" />
            <stop offset="100%" stopColor="#D96570" />
          </linearGradient>
        </defs>
        <path
          d="M12 2c.5 5 4.5 9.5 9.5 10-5 .5-9 4.5-9.5 10-.5-5-4.5-9-9.5-10 5-.5 9-5 9.5-10z"
          fill="url(#tech-gemini-grad)"
        />
      </svg>
    ),
  },
  {
    name: 'OpenAI',
    category: 'ai',
    desc: 'GPT-4o & autonomous agents',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9">
        <path
          d="M22.28 10.8a5.97 5.97 0 00-.47-4.65 6.03 6.03 0 00-5.83-3.1 5.98 5.98 0 00-4.47-2 6.02 6.02 0 00-5.7 4.14 5.98 5.98 0 00-4.06 2.94 6.03 6.03 0 00.73 6.54 5.97 5.97 0 00.47 4.65 6.03 6.03 0 005.83 3.1 5.98 5.98 0 004.47 2 6.02 6.02 0 005.7-4.14 5.98 5.98 0 004.06-2.94 6.03 6.03 0 00-.73-6.54zM12 13.8a1.8 1.8 0 111.8-1.8c0 1-.8 1.8-1.8 1.8z"
          fill="#10A37F"
        />
      </svg>
    ),
  },
  {
    name: 'Shopify',
    category: 'commerce',
    desc: 'Headless storefronts & checkouts',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9">
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
    name: 'GraphQL',
    category: 'backend',
    desc: 'Unified query language & federated schema',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9">
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
    name: 'Figma',
    category: 'frontend',
    desc: 'Design tokens & interactive prototypes',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9">
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
    category: 'cloud',
    desc: 'CI/CD workflows & DevOps automation',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9">
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
    name: 'Supabase',
    category: 'backend',
    desc: 'Serverless Postgres with real-time sync',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9">
        <path
          d="M13.4 23.6c-.6.8-1.9.4-1.9-.6V13.8H2.8c-.9 0-1.4-1-.8-1.7L10.6.4c.6-.8 1.9-.4 1.9.6v9.2h8.7c.9 0 1.4 1 .8 1.7l-8.6 11.7z"
          fill="#3ECF8E"
        />
      </svg>
    ),
  },
  {
    name: 'Stripe',
    category: 'commerce',
    desc: 'Global recurring payments & billing engine',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9">
        <rect width="24" height="24" rx="5" fill="#635BFF" />
        <path
          d="M11.6 9.4c0-.7.6-1 1.6-1 1.4 0 3.2.5 4.6 1.2V6.1C16.3 5.4 14.7 5 13.2 5 9.4 5 7 7 7 10c0 4.6 6.3 3.9 6.3 5.9 0 .9-.8 1.2-1.9 1.2-1.6 0-3.7-.7-5.3-1.6v3.7c1.7.7 3.6 1.1 5.3 1.1 4 0 6.6-2 6.6-5.1 0-4.9-6.4-4.1-6.4-5.8z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
];

const categoryFilters = [
  { id: 'all', label: 'All Technologies' },
  { id: 'frontend', label: 'Frontend & Mobile' },
  { id: 'backend', label: 'Backend & Data' },
  { id: 'cloud', label: 'Cloud & DevOps' },
  { id: 'ai', label: 'AI & Models' },
  { id: 'commerce', label: 'Commerce & Scale' },
];

const TechStack = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredTech, setHoveredTech] = useState(null);

  const filteredTechs =
    activeFilter === 'all'
      ? technologies
      : technologies.filter((t) => t.category === activeFilter);

  return (
    <section className="w-full bg-[#1F40CB] text-white py-12 sm:py-16 lg:py-20 px-6 sm:px-8 lg:px-12 relative overflow-hidden transition-colors duration-300">
      {/* Background Soft Glow Accents */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header: Matches ProcessVision.jsx pattern */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-12"
        >
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <span className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />
            <span className="text-cyan-200 text-xs sm:text-sm font-semibold tracking-wider uppercase font-ibm">
              Engineering & Integrations Ecosystem
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[3.15rem] xl:text-[3.35rem] font-medium sm:font-semibold tracking-tight text-white leading-[1.12] font-ibm">
            <span className="bg-gradient-to-r from-cyan-300 via-sky-100 to-white bg-clip-text text-transparent">
              Connect your vision
            </span>{' '}
            with 50+ modern technologies
          </h2>

          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-white/90 max-w-2xl font-ibm leading-relaxed">
            A battle-tested technology ecosystem designed for extreme speed, enterprise reliability, and seamless multi-channel scale.
          </p>
        </motion.div>

        {/* Two-Column Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Left Column: Highlight Card + Action CTA Box */}
          <div className="lg:col-span-5 flex flex-col gap-5 sm:gap-6">
            {/* 1. Main Highlight Card (White Card with Dark Navy Text) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-3xl p-7 sm:p-9 shadow-2xl border border-white/60 relative overflow-hidden"
            >
              {/* Branded pill badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#1F40CB] text-xs font-semibold tracking-wide font-ibm mb-5">
                <Sparkles className="w-3.5 h-3.5 text-[#1F40CB]" />
                <span>Modern Stack Architecture</span>
              </div>

              {/* Card Heading */}
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0F172A] font-ibm tracking-tight leading-snug">
                Powering high-velocity ventures from prototype to enterprise scale.
              </h3>

              {/* Card Description */}
              <p className="mt-4 text-[#475569] font-ibm text-base sm:text-lg leading-relaxed">
                Connect your digital vision with{' '}
                <strong className="text-[#0F172A] font-semibold">
                  50+ battle-tested frameworks & modern cloud tools
                </strong>{' '}
                — from frontend & mobile architectures to cutting-edge AI pipelines and marketplace scaling, so your venture runs like a well-oiled machine.
              </p>

              {/* Feature Checklist */}
              <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col gap-3.5">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#1F40CB]" />
                  </div>
                  <span className="text-sm sm:text-base font-medium text-slate-800 font-ibm">
                    99.9% Production Reliability & Edge Performance
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#1F40CB]" />
                  </div>
                  <span className="text-sm sm:text-base font-medium text-slate-800 font-ibm">
                    Microservices & AI-First Autonomous Workflows
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#1F40CB]" />
                  </div>
                  <span className="text-sm sm:text-base font-medium text-slate-800 font-ibm">
                    Multi-Cloud Infrastructure & Marketplace Sync
                  </span>
                </div>
              </div>
            </motion.div>

            {/* 2. Bottom Action Box (CTA with White Background & Blue Button) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div>
                <p className="text-base sm:text-lg font-semibold text-[#1E293B] font-ibm leading-tight">
                  See how Big Feathers connects with your favorite tools.
                </p>
                <p className="text-xs sm:text-sm text-slate-500 font-ibm mt-1">
                  Tailored integration blueprints & custom API setups
                </p>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-[#1F40CB] hover:bg-[#1635AA] text-white font-semibold text-sm sm:text-base px-5 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 shrink-0 font-ibm group"
              >
                <span>Explore Integrations</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Tech Logo Grid in Dark Navy Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7 bg-[#0B1C3D] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl relative overflow-hidden"
          >
            {/* Filter Tabs Header */}
            <div className="flex items-center justify-between flex-wrap gap-2 pb-5 mb-5 border-b border-white/10">
              <span className="text-xs sm:text-sm font-semibold text-cyan-300 font-ibm uppercase tracking-wider">
                Integrated Frameworks ({technologies.length})
              </span>

              {/* Filter Pills */}
              <div className="flex flex-wrap gap-1.5">
                {categoryFilters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`text-xs px-3 py-1 rounded-full font-ibm transition-all duration-200 cursor-pointer ${
                      activeFilter === filter.id
                        ? 'bg-white text-[#0B1C3D] font-bold shadow-sm'
                        : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Individual Pure White Icon Cards Grid */}
            <motion.div
              layout
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-3.5"
            >
              <AnimatePresence>
                {filteredTechs.map((tech) => (
                  <motion.div
                    layout
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.25 }}
                    onMouseEnter={() => setHoveredTech(tech)}
                    onMouseLeave={() => setHoveredTech(null)}
                    className="bg-white rounded-2xl p-3.5 sm:p-4 aspect-square flex flex-col items-center justify-center shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer group relative border border-slate-100 select-none"
                  >
                    {/* Authentic Brand SVG */}
                    <div className="flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      {tech.icon}
                    </div>

                    {/* Tech Name in Dark Navy */}
                    <span className="mt-2 text-[11px] sm:text-xs font-semibold text-[#0F172A] font-ibm truncate max-w-full text-center group-hover:text-[#1F40CB] transition-colors">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Active Tooltip / Details Footer Bar */}
            <div className="mt-6 pt-4 border-t border-white/10 min-h-[48px] flex items-center justify-between text-xs sm:text-sm font-ibm text-white/70">
              {hoveredTech ? (
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  <span className="text-white font-semibold">{hoveredTech.name}:</span>
                  <span className="text-white/85">{hoveredTech.desc}</span>
                </div>
              ) : (
                <span className="text-white/50 italic">
                  Hover over any technology to explore architectural capabilities.
                </span>
              )}
              <span className="hidden sm:inline-block text-cyan-300/80 font-medium">
                Continuous CI/CD Delivery
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
