/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero-bg': "url('../public/herobg.png')",
        'hero-bgsm': "url('../public/herobgsm.png')",
        'roadmap-bg': "url('../public/bgroadmap.png')",
        'roadmapsm-bg': "url('../public/bgroadmapsm.png')",
        'team-bg': "url('../public/teambg.png')",
        'team-bgsm': "url('../public/teambgsm.png')",
        'faq-bg': "url('../public/bgfaq.png')",
        'faq-bgsm': "url('../public/bgfaqsm.png')",
      },
      fontFamily:{
        NocturaSans: "NocturaSans",
      }
    },
  },
  plugins: [],
}