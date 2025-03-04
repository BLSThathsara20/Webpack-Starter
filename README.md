# Flying Bee - Modern Web Project Starter

A modern web project starter template featuring Three.js for 3D graphics, SASS for styling, and Webpack for optimization. This template provides a solid foundation for building interactive 3D web applications.

## Features

- **Three.js Integration**: Ready-to-use 3D graphics setup with model loading capabilities
- **Modern JavaScript**: ES6+ features with Babel transpilation
- **SASS Styling**: Organized CSS with variables and nested rules
- **Webpack Configuration**: Optimized build setup with:
  - Code splitting
  - Asset optimization
  - Hot module replacement
  - Development server
- **jQuery Integration**: For DOM manipulation and events
- **Responsive Design**: Mobile-friendly layout
- **Development Tools**: Source maps, bundle analyzer, and compression

## Getting Started

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development server:
   ```bash
   npm start
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
├── src/
│   ├── js/
│   │   ├── index.js        # Main application entry
│   │   └── model-control.js # 3D model controls
│   ├── styles/
│   │   ├── _variables.scss  # SASS variables
│   │   └── main.scss       # Main styles
│   └── index.html          # HTML template
├── webpack.config.js       # Webpack configuration
└── package.json           # Project dependencies
```

## Development

- Development server runs on `http://localhost:9000`
- Hot module replacement is enabled
- Source maps are available in development mode

## Production Build

The production build includes:
- Minified and optimized assets
- Code splitting for better performance
- Gzipped bundles
- Source maps for debugging

## License

ISC License