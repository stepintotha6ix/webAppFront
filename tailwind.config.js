const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

const black = "#000";

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    
    colors: {
      black,
      white: "#fff",
      red: "#E94040",
      orange: {
        500: "#C67C4E",
       
      },
      gray: {
        300: "#EAEAEA",
        450: "#c5c5c5",
        400: "#ABABAB",
		500: "#9A9A9A",
        600: "#5F5F5F",
        700: "#303030",
      }, 
	  transparent: colors.transparent,
    },
	extend: {
		animation: {
			fade: 'fade .5s ease-in-out',
			scaleIn: 'scaleIn .35s ease-in-out',
		},
	}
  },
 plugins: [
		
		plugin(({ addUtilities }) => {
			
				addUtilities({
					'.text-shadow': {
						textShadow: '1px 1px rgba(0, 0, 0, 0.4)',
					},

					'.outline-border-none': {
						outline: 'none',
						border: 'none',
					},

					'.flex-center-between': {
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
					},

					'.image-like-bg': {
						objectPosition: 'center',
						objectFit: 'cover',
						pointerEvents: 'none',
					},
				})
		}),
	],
};

export default config;