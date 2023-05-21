/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        zinc: {
          css: {
            '--tw-prose-pre-bg': 'transparent',
            '--tw-prose-headings': '#ff838d',
            '--tw-prose-links': 'white'
          }
        }
      })
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

