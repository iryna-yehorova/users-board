module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-pseudo-elements')({
      customPseudoClasses: ['foo'],
      customPseudoElements: ['bar'],
      contentUtilities: false,
      emptyContent: false,
      classNameReplacer: {
        'hover:before:text-black': 'hbt',
      },
    }),
  ],
}
