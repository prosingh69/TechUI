import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Layers,
  Server,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  Code2,
} from 'lucide-react';

const categories = [
  {
    id: 'frontend',
    name: 'Frontend & Apps',
    icon: Layers,
    items: [
      {
        name: 'React 19',
        tag: 'UI Architecture',
        desc: 'Declarative component ecosystem',
        color: '#00D8FF',
      },
      {
        name: 'Next.js 15',
        tag: 'SSR & Edge',
        desc: 'Hybrid rendering & SEO excellence',
        color: '#FFFFFF',
      },
      {
        name: 'TypeScript',
        tag: 'Type Safety',
        desc: 'Robust enterprise maintainability',
        color: '#3178C6',
      },
      {
        name: 'Tailwind CSS',
        tag: 'Design Systems',
        desc: 'Ultra-fast bespoke styling',
        color: '#38BDF8',
      },
      {
        name: 'Flutter',
        tag: 'Mobile Engine',
        desc: 'Native iOS & Android performance',
        color: '#02569B',
      },
      {
        name: 'React Native',
        tag: 'Cross-Platform',
        desc: 'Shared codebase mobile apps',
        color: '#61DAFB',
      },
    ],
  },
  {
    id: 'backend',
    name: 'Backend & Cloud',
    icon: Server,
    items: [
      {
        name: 'Node.js',
        tag: 'Microservices',
        desc: 'High-throughput async event loops',
        color: '#5FA04E',
      },
      {
        name: 'Python',
        tag: 'AI & Data APIs',
        desc: 'FastAPI & machine learning pipelines',
        color: '#FFD43B',
      },
      {
        name: 'PostgreSQL',
        tag: 'Relational DB',
        desc: 'ACID-compliant enterprise storage',
        color: '#4169E1',
      },
      {
        name: 'Redis',
        tag: 'In-Memory Cache',
        desc: 'Sub-millisecond data retrieval',
        color: '#FF4438',
      },
      {
        name: 'Docker',
        tag: 'Containers',
        desc: 'Predictable isolated deployments',
        color: '#2496ED',
      },
      {
        name: 'AWS & GCP',
        tag: 'Cloud Infra',
        desc: 'Auto-scaling serverless clusters',
        color: '#FF9900',
      },
    ],
  },
  {
    id: 'ai',
    name: 'AI & Automation',
    icon: Sparkles,
    items: [
      {
        name: 'OpenAI GPT-4o',
        tag: 'Generative AI',
        desc: 'Intelligent conversational agents',
        color: '#10A37F',
      },
      {
        name: 'Google Gemini',
        tag: 'Multimodal AI',
        desc: 'Vision, document & audio parsing',
        color: '#1A73E8',
      },
      {
        name: 'PyTorch',
        tag: 'Deep Learning',
        desc: 'Custom model training & inference',
        color: '#EE4C2C',
      },
      {
        name: 'LangChain',
        tag: 'AI Agents',
        desc: 'Chained autonomous workflows',
        color: '#1C3C3C',
      },
      {
        name: 'Make & Zapier',
        tag: 'Workflow Sync',
        desc: 'Cross-platform CRM automation',
        color: '#9B51E0',
      },
      {
        name: 'Puppeteer',
        tag: 'Web Automation',
        desc: 'Catalogue crawling & monitoring',
        color: '#40B5A4',
      },
    ],
  },
  {
    id: 'growth',
    name: 'Commerce & Ads',
    icon: TrendingUp,
    items: [
      {
        name: 'Amazon SP-API',
        tag: 'Marketplace Sync',
        desc: 'Automated catalogue & order flows',
        color: '#FF9900',
      },
      {
        name: 'Flipkart API',
        tag: 'Commerce Infra',
        desc: 'Real-time inventory synchronization',
        color: '#2874F0',
      },
      {
        name: 'Shopify Plus',
        tag: 'Store Scaling',
        desc: 'Headless storefront architecture',
        color: '#95BF47',
      },
      {
        name: 'Meta Ads API',
        tag: 'PPC Scaling',
        desc: 'Automated campaign optimization',
        color: '#0668E1',
      },
      {
        name: 'Google Analytics 4',
        tag: 'Attribution',
        desc: 'Cross-funnel conversion intelligence',
        color: '#F9AB00',
      },
      {
        name: 'Payment Gateways',
        tag: 'Checkout Flow',
        desc: 'Stripe, Razorpay & UPI integration',
        color: '#635BFF',
      },
    ],
  },
];

const TechStack = () => {
  const [activeTab, setActiveTab] = useState(categories[0].id);

  const currentCategory = categories.find((c) => c.id === activeTab) || categories[0];

  return (
    <section className="w-full bg-gradient-to-r from-[#1F40CB] to-[#00A2ED] text-white py-14 sm:py-16 lg:py-20 px-6 sm:px-8 lg:px-12 overflow-hidden relative">
      {/* Background Subtle Tech Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-16 items-center relative z-10">
        
        {/* Left Column: Heading, Value Proposition & Dual CTAs */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55 }}
          className="flex flex-col items-start"
        >
          {/* Heading - Increased size with elegant medium weight */}
          <h2 className="text-3xl sm:text-4xl lg:text-[3.35rem] xl:text-[3.75rem] font-medium text-white tracking-[-0.025em] leading-[1.1] font-ibm">
            Engineered with Modern Tech & AI Stack
          </h2>

          {/* Description */}
          <p className="mt-4 sm:mt-5 text-white/85 text-sm sm:text-base lg:text-[17px] leading-[1.7] font-ibm max-w-xl font-normal">
            We build on battle-tested frameworks, cloud infrastructure, and state-of-the-art AI models. From responsive cross-platform web and mobile applications to high-throughput business automation and marketplace catalogue scaling, our stack is engineered for speed, resilience, and measurable growth.
          </p>

          {/* Action Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3.5">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-[#1F40CB] hover:bg-blue-50 font-medium text-sm transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02] group font-ibm"
            >
              <span>Explore Architecture</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-normal sm:font-medium text-sm border border-white/40 backdrop-blur-md transition-all duration-200 hover:scale-[1.02] font-ibm"
            >
              <span>Schedule Tech Consult</span>
            </a>
          </div>
        </motion.div>


        {/* Right Column: Innovative Interactive Tech Console */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55 }}
          className="w-full flex items-center justify-center"
        >
          <div className="w-full bg-white rounded-2xl sm:rounded-3xl shadow-[0_25px_60px_-15px_rgba(2,19,56,0.35)] border border-white/80 p-5 sm:p-6 lg:p-7 relative overflow-hidden text-slate-900">
            
            {/* Ambient Subtle Glow */}
            <div className="pointer-events-none absolute -right-16 -top-16 w-44 h-44 bg-blue-100/60 rounded-full blur-2xl" />
            <div className="pointer-events-none absolute -left-16 -bottom-16 w-44 h-44 bg-cyan-100/60 rounded-full blur-2xl" />

            {/* Console Header Bar */}
            <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-100 relative z-10">
              <div className="flex items-center gap-2.5">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                </div>
                <span className="text-xs font-medium text-slate-700 tracking-wider uppercase font-ibm flex items-center gap-1.5 ml-1">
                  <Code2 className="w-3.5 h-3.5 text-[#1F40CB]" />
                  Stack Console
                </span>
              </div>

              {/* Status Badge */}
              <div className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-full font-ibm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Production Ready</span>
              </div>
            </div>

            {/* Interactive Category Selector Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-1.5 bg-slate-100/80 rounded-xl border border-slate-200/60 mb-4 relative z-10">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeTab === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg text-xs font-medium transition-all duration-200 font-ibm ${
                      isActive
                        ? 'bg-gradient-to-r from-[#1F40CB] to-[#00A2ED] text-white shadow-md'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-white/80'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{cat.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Interactive 2x3 Tech Cards Grid with Smooth Crossfade */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 relative z-10"
              >
                {currentCategory.items.map((tech) => (
                  <div
                    key={tech.name}
                    className="group/card relative bg-slate-50/80 hover:bg-blue-50/60 border border-slate-200/80 hover:border-blue-300 rounded-xl p-3 sm:p-3.5 transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-default"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        {/* Colored Tech Dot */}
                        <span
                          className="w-2.5 h-2.5 rounded-full shrink-0 shadow-sm"
                          style={{ backgroundColor: tech.color }}
                        />
                        <h4 className="text-sm font-medium sm:font-semibold text-slate-900 font-ibm group-hover/card:text-[#1F40CB] transition-colors truncate">
                          {tech.name}
                        </h4>
                      </div>

                      {/* Pill Tag */}
                      <span className="text-[10px] font-medium text-[#1F40CB] bg-blue-50 px-2 py-0.5 rounded border border-blue-200/60 font-ibm shrink-0">
                        {tech.tag}
                      </span>
                    </div>

                    <p className="mt-1 text-xs text-slate-500 group-hover/card:text-slate-700 leading-relaxed font-ibm font-normal line-clamp-1">
                      {tech.desc}
                    </p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Performance Status Metrics Bar */}
            <div className="grid grid-cols-3 gap-2 pt-3.5 mt-4 border-t border-slate-100 text-center relative z-10">
              <div>
                <div className="text-sm sm:text-base font-semibold text-slate-900 font-ibm flex items-center justify-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>99.9%</span>
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 font-ibm mt-0.5">Uptime SLA</div>
              </div>

              <div className="border-x border-slate-200/80">
                <div className="text-sm sm:text-base font-semibold text-[#1F40CB] font-ibm">
                  &lt;80ms
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 font-ibm mt-0.5">API Latency</div>
              </div>

              <div>
                <div className="text-sm sm:text-base font-semibold text-slate-900 font-ibm">
                  100%
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 font-ibm mt-0.5">Cloud Scalable</div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default TechStack;

