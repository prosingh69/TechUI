import React from 'react';

const articles = [
  {
    id: 1,
    title: 'Custom Web & Software Development: Scalable Apps, CRM/ERP & Automation',
    category: 'TECH SOLUTIONS',
    image: 'https://growthjockey-prod.b-cdn.net/new/GrowthThinking1.webp',
    link: '#technology',
  },
  {
    id: 2,
    title: 'Generative AI & Smart Workflows: AI Photoshoots, Model Photography & Solutions',
    category: 'AI SOLUTIONS',
    image: 'https://growthjockey-prod.b-cdn.net/new/GrowthThinking2.webp',
    link: '#ai-solutions',
  },
  {
    id: 3,
    title: 'E-Commerce Scaling & Digital Marketing: Marketplace Listings, SEO & Meta/Google Ads',
    category: 'COMMERCE & ADS',
    image: 'https://growthjockey-prod.b-cdn.net/new/GrowthThinking3.webp',
    link: '#ecommerce',
  },
];

const GrowthThinking = () => {
  return (
    <div className="w-full bg-white border-t border-gray-200/70 shadow-[0_-4px_25px_rgba(0,0,0,0.06)] px-6 sm:px-8 lg:px-12 py-2 sm:py-2.5">
      <div className="max-w-7xl mx-auto">
        {/* 3 Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-5 lg:gap-6">
          {articles.map((item, idx) => (
            <a
              key={item.id}
              href={item.link}
              className={`group flex items-start gap-3 sm:gap-3.5 p-0.5 sm:p-1 rounded-xl hover:bg-gray-50/80 transition-all duration-200 ${idx === 0 ? '-ml-0.5 sm:-ml-1' : ''}`}
            >
              {/* Thumbnail Box: Enlarged to prominent large format */}
              <div className="relative w-16 h-16 sm:w-[4.75rem] sm:h-[4.75rem] lg:w-[5.25rem] lg:h-[5.25rem] rounded-xl overflow-hidden bg-blue-950 shrink-0 shadow-sm border border-black/5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Title & Tag / Arrow */}
              <div className="flex flex-col justify-between flex-1 min-w-0 h-16 sm:h-[4.75rem] lg:h-[5.25rem] py-0.5">
                <p className="text-[13px] sm:text-[13.5px] lg:text-[14.5px] font-medium text-[#1A1D2E] group-hover:text-blue-600 transition-colors line-clamp-2 leading-[1.34] font-ibm">
                  {item.title}
                </p>

                <div className="flex items-center justify-between mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[9px] sm:text-[9.5px] font-bold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded tracking-wider uppercase">
                    {item.category}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    viewBox="0 0 17 17"
                    fill="none"
                    className="w-3.5 h-3.5 text-blue-600 group-hover:translate-x-0.5 transition-transform"
                  >
                    <path
                      d="M8.02867 12.3182L8.97133 13.2609L13.4427 8.78957L8.97133 4.31824L8.02867 5.2609L10.8907 8.1229H4.5V9.45624H10.8907L8.02867 12.3182Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GrowthThinking;

