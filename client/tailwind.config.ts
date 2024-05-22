import daisyui from 'daisyui';

export default {
  content: [
    './src/**/*.tsx',
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js'
  ],
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        'main': {
          "primary": "#72c",
          "secondary": "#37a",
          "accent": "#a60",
          "neutral": "#345",
          "base-100": "#111",
          "info": "#09f",
          "success": "#0e9",
          "warning": "#fb0",
          "error": "#f11"
        }
      }
    ]
  }
}
