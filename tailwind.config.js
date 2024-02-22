/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        "blue-1000": "#A024D5",
        "yellow-1000": '#F9ED0B',
        "gray-1000": '#FCF4FF',
        "black-1000": '#292930',
        "black-1100": '#27272E',
        "green-1000": '#27EACE',
        "yellow-1100": '#FDB41A',
        'gray-1100': '#F0DDF9',
        'blue-1100': '#6B188E',
        'gray-1200': '#FCF8FE',
        'yellow-1200': '#F7BD43',
        'green-1100': '#2FC9B3',
        'blue-1200': '#C578E5',
        'gray-1300': '#C0C0C0',
        'gray-1400': '#868686',
        'gray-1500': '#E8E8E8',
        'gray-1600': '#CFCFCF',
        'gray-1700': '#D9D9D9',
        'blue-1300': '#CEA5DF',
        'gray-1800': '#999FAE',
        'green-1200': '#30C9B3',
        'blue-1400': '#01B3FF',
        'yellow-1300': '#B0D630',
        'purple-shade': "#f6e9fc",
      },
      screens: {
        'xs': '320px',
        // => @media (min-width: 320px) { ... } 

        'sxs': '360px',
        // => @media (min-width: 320px) { ... } 

        'ssxs': '440px',
        // => @media (min-width: 320px) { ... } 

        'sm': '576px',
        // => @media (min-width: 575px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '992px',
        // => @media (min-width: 992px) { ... }

        'xl': '1200px',
        // => @media (min-width: 1200px) { ... }

        '2xl': '1366px',
        // => @media (min-width: 1366px) { ... }

        '3xl': '1440px',
        // => @media (min-width: 1440px) { ... }
        '4xl': '1600px',
        // => @media (min-width: 1600px) { ... }
      },
      boxShadow: {
        "4xl": '0px 0px 5px 0px rgba(0, 0, 0, 0.10)',
      },
      dropShadow: {
        '4xl': '0px 4px 4px rgba(0, 0, 0, 0.25)',
        '5xl': '0px 0px 4px rgba(0, 0, 0, 0.25)',
      },
      backgroundImage: {
        'bg-clr': 'linear-gradient(62deg, #6B188E 1.64%, #A024D5 26.16%, #A024D5 75%, #2FC9B3 107.4%)',
        'btn-clr': 'linear-gradient(86deg, #F7BD43 4.09%, #F9ED0B 93.58%)',
        'card-bg': 'linear-gradient(253deg, #01B3FF 51.76%, #3987E6 98.91%)',
        'bg-gradient': "linear-gradient(247deg, #2FC9B3 54.34%, #25B09C 106.06%)",
        'app-bg': 'linear-gradient(242deg, #A024D5 55.44%, #6B188E 117.19%)',
        'hero-bg': 'linear-gradient(67deg, #6B188E -1%, #A024D5 28.72%)',
        'customer-bg': 'linear-gradient(98deg, #AED235 31.16%, #B3DD28 78.72%)',
      },
      fontFamily: {
        "poppins": 'Poppins',
        "dm-sans": 'DM Sans',
        "open-sans": 'Open Sans',
        "Inter": 'Inter',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}