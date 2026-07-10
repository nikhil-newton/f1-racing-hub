# F1 Racing Hub 🏎️

A modern, responsive Formula 1 fan resource website built with React, TypeScript, and Styled Components.

## 📖 Project Explanation

F1 Racing Hub is a **front-end-only React application** that presents Formula 1 content (drivers, teams, cars, circuits, race calendar, news, and shop items) through a multi-page experience.

At a high level:
- **Entry point:** `src/main.tsx` boots the app and loads global styles/font assets.
- **App shell:** `src/App.tsx` defines routes and wraps everything in a shared styled-components theme.
- **Pages:** `src/pages/*` contains feature pages (Home, Drivers, Teams, Cars, Circuits, Calendar, Shop, Forum, and detail pages).
- **Data layer:** `src/data/*` stores typed F1 datasets used by pages/components (no backend API required).
- **Design system:** `src/styles/theme.ts` provides F1-inspired colors, layout helpers, and reusable styled UI primitives.
- **Types & hooks:** `src/types/index.ts` defines domain models and `src/hooks/index.ts` includes reusable utility hooks.

In short, this project is structured as a **theme-driven, route-based F1 information hub** built with reusable React components and local TypeScript data sources.

## 🌐 Live Website
**[🚀 View Live Site](https://f1-racing-hub-nikhil.netlify.app/)**

> **Professional F1 Racing Hub featuring all 2025 drivers, cars, race calendar, and official merchandise shop**

**Built by:** nikhil-newton | **Repository:** [GitHub](https://github.com/nikhil-newton/f1-racing-hub) | **Contact:** 23MH1A4237@acoe.edu.in

## 🏁 Features

- **Interactive Homepage** with animated F1 car and dynamic statistics
- **Driver Profiles** with comprehensive stats and photo galleries
- **Team Pages** with logo animations and car showcases
- **Race Calendar** with live results and standings
- **F1-Inspired Design** with custom color palette and animations
- **Responsive Layout** optimized for all devices
- **Performance Optimized** with lazy loading and code splitting

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Styled Components** for CSS-in-JS styling
- **Framer Motion** for smooth animations
- **React Router** for navigation
- **Recharts** for data visualization
- **Vite** for fast development and building
- **Orbitron Font** for F1-style typography

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd f1-racing-hub
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [ https://f1-racing-hub-nikhil.netlify.app/](https://f1-racing-hub-nikhil.netlify.app/) to view the app.

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.tsx
│   └── Footer.tsx
├── pages/              # Page components
│   ├── HomePage.tsx
│   ├── DriversPage.tsx
│   ├── TeamsPage.tsx
│   └── ...
├── styles/             # Styling and theme
│   ├── theme.ts
│   └── index.css
├── types/              # TypeScript type definitions
│   ├── index.ts
│   └── styled.d.ts
├── data/               # Mock data and APIs
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
└── assets/             # Images and static assets
```

## 🎨 Design System

### Color Palette
- **Primary Red**: `#e10600` - F1's signature red
- **Secondary Orange**: `#ff4500` - Accent color
- **Black**: `#15151e` - Primary background
- **Gray**: `#38383f` - Secondary background
- **White**: `#ffffff` - Text color
- **Gold**: `#ffd700` - Championship highlights
- **Neon Green**: `#00ff41` - Special effects

### Typography
- **Primary Font**: Orbitron (F1-inspired, futuristic)
- **Secondary Font**: System fonts for readability

### Components
- **F1Button**: Styled buttons with hover animations
- **F1Card**: Content cards with F1 styling
- **GradientText**: Text with F1 gradient effects
- **FlexContainer**: Flexible layout container
- **GridContainer**: CSS Grid layout wrapper

## 🏗️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style

- Use functional components with hooks
- Styled Components for all styling
- TypeScript for type safety
- Consistent naming conventions
- Component-based architecture

## 🔧 Configuration

### Vite Configuration
The project uses Vite for fast development and optimized builds:
- Hot Module Replacement (HMR)
- TypeScript support
- Optimized bundling
- Asset optimization

### TypeScript
Strict TypeScript configuration for better code quality:
- Strict mode enabled
- Type checking for styled-components
- Custom type definitions

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: up to 480px
- **Tablet**: 481px to 768px  
- **Desktop**: 769px to 1024px
- **Large**: 1025px and above

## 🚀 Deployment

Build the project for production:

```bash
npm run build
```

The built files will be in the `build` directory, ready for deployment to any static hosting service.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🏎️ Formula 1 Resources

- [Official F1 Website](https://www.formula1.com)
- [FIA Regulations](https://www.fia.com/regulations)
- [F1 Technical Regulations](https://www.fia.com/regulation/category/110)

---

**Built with ❤️ for Formula 1 fans worldwide** 🌍
