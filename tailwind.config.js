/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
      
        aspectRatio: { // defaults to {}
          'none': 0,
          'square': [1, 1], // or 1 / 1, or simply 1
          '16/9': [16, 9],  // or 16 / 9
          '4/3': [4, 3],    // or 4 / 3
          '21/9': [21, 9],  // or 21 / 9
        },

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
    variants: {
      aspectRatio: ['responsive'], // defaults to ['responsive']
    },
    corePlugins: {
      aspectRatio: false,
    },
    plugins: [
      require('@tailwindcss/aspect-ratio'),
    ],
}