/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    // ""
  ],
  theme: {
    extend: {
      // Add custom colors
      colors: {
        border: 'hsl(var(--border))', //border color and line-separate
        background: 'hsl(var(--background))',// main background 
        foreground: 'hsl(var(--foreground))',//no use 
        heading: 'hsl(var(--heading))',// headings
        menu: 'hsl(var(--basic))',//no use 
        active: 'hsl(var(--active))',//active menu text
        activeBg:'hsl(var(--active-bg))',//active menu background
        basic:'hsl(var(--basic))',// basic text
        placeholder:'hsl(var(--placeholder))',// placeholders and tabs 
        highlight:'hsl(var(--highlight))',// disabled and gray highlight 
        component:'hsl(var(--component))',// component or card background
       
      },
      
      // Custom spacing
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      
      // Custom fonts
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      
      // Custom breakpoints
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
      
      // Custom border radius
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      
      // Custom animations
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
    fontFamily:{},
    fontSize:{},
    container:{}
  },
  plugins: [],
}