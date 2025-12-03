# KeyBoba 🎹⚡ - Keyboard Tester & Typing Test Website

A modern, feature-rich full-stack web application for testing keyboards and improving typing speed, built with Vue 3, Tailwind CSS, DaisyUI, and Express.js.

## ✨ Features

### Core Features
- **Keyboard Tester**: Test all keys with real-time visual feedback
  - 8 customizable keyboard themes
  - Full 100% layout support
  - Statistics tracking
- **Typing Test**: Improve your WPM with various time modes (15s, 30s, 60s, 120s)
  - Real-time WPM & accuracy tracking
  - Visual character-by-character feedback
  - Integration with challenges
- **Leaderboards**: Compete globally, daily, and weekly
- **User Profiles**: Track progress, stats, and achievements
- **Theme System**: Dark/Light mode with smooth transitions
- **Modern Animations**: GSAP, Three.js 3D particles, Lenis smooth scroll

### 🎮 Engagement Features
- **Daily Challenges**: Complete challenges to earn points
- **Streak System**: Build and maintain your typing streak (5 visual levels)
- **Achievement Badges**: Unlock 6 different achievements
- **Sound Effects**: Toggle-able keyboard sounds
- **Social Sharing**: Share results to Twitter, Facebook, or download as image
- **8 Keyboard Themes**: Default, Ocean, Forest, Sunset, Purple, Cyber, Neon, Retro

## 🛠️ Tech Stack

### Frontend
- **Framework**: Vite + Vue 3 (Composition API)
- **Styling**: Tailwind CSS 4.1 + DaisyUI 5.5
- **Animation**: GSAP, Three.js, Lenis
- **Audio**: Web Audio API
- **State Management**: Pinia (4 stores)
- **Router**: Vue Router
- **Authentication**: Clerk (ready to integrate)

### Backend
- **Runtime**: Node.js + Express.js
- **Database**: MongoDB + Mongoose
- **Authentication**: Clerk Backend SDK

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- MongoDB
- npm or pnpm

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

### Environment Variables

#### Frontend (.env)
```
VITE_API_URL=http://localhost:3000/api
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

#### Backend (.env)
```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/keyboba
CLERK_SECRET_KEY=your_clerk_secret_key
NODE_ENV=development
```

## 🚀 Usage

1. Start MongoDB
2. Run backend: `cd backend && npm run dev`
3. Run frontend: `cd frontend && npm run dev`
4. Open browser at `http://localhost:5173`

## 📱 Pages

- **Home** (`/`): Landing page with 3D background and hero section
- **Keyboard Test** (`/keyboard-test`): Full keyboard layout tester with theme selector
- **Typing Test** (`/typing-test`): WPM and accuracy testing with sound effects
- **Challenges** (`/challenges`): Daily and regular challenges with progress tracking
- **Profile** (`/profile`): User statistics, streak badge, and achievements
- **Leaderboard** (`/leaderboard`): Global, daily, and weekly rankings

## 🎨 Customization

### Keyboard Themes

Choose from 8 pre-built keyboard themes:
1. Default - Base DaisyUI colors
2. Ocean Blue - Deep blue theme
3. Forest Green - Nature-inspired
4. Sunset - Orange/red gradient
5. Purple Haze - Purple tones
6. Cyberpunk - Neon cyan
7. Neon Lights - Pink neon
8. Retro - Yellow/brown vintage

### Custom Theme Colors

Edit `tailwind.config.js` to customize app theme colors:

```javascript
daisyui: {
  themes: [
    {
      light: {
        "primary": "#FF6B6B",
        "secondary": "#FFA500",
        // ... more colors
      }
    }
  ]
}
```

### Add Keyboard Theme

Edit `stores/keyboardThemes.js`:
```javascript
{
  id: 'mytheme',
  name: 'My Theme',
  colors: {
    base: '#color',
    border: '#color',
    pressed: '#color',
    pressedText: '#color'
  }
}
```

## 🎯 Features Checklist

- ✅ Keyboard Tester with 100+ keys
- ✅ Typing Test (4 time modes)
- ✅ Dark/Light Theme System
- ✅ 8 Keyboard Themes
- ✅ Sound Effects (toggle-able)
- ✅ Daily Challenges
- ✅ Streak System (5 levels)
- ✅ Achievement System
- ✅ Leaderboards
- ✅ Social Sharing (Twitter, Facebook, Image)
- ✅ Responsive Mobile Design
- ✅ 3D Animated Background
- ✅ Smooth Scrolling
- ✅ User Profiles & Stats
- ✅ Backend API Ready

## 📊 Project Stats

- **~6,000+** lines of code
- **67+** files created
- **6** pages
- **12** components
- **6** composables
- **4** Pinia stores
- **8** keyboard themes
- **100%** feature complete

## 📄 License

MIT

## 🙏 Acknowledgments

- Inspired by [Monkeytype](https://monkeytype.com/)
- Design inspiration from [usevia.app](https://www.usevia.app/)

## 📚 Documentation

- [Quick Start Guide](docs/QUICK_START.md)
- [Development Guide](docs/DEVELOPMENT.md)
- [Complete Features](COMPLETE_FEATURES.md)
- [Original Planning](docs/app_summary.md)

---

**Made with ❤️ using Vue 3, Tailwind CSS, and lots of coffee ☕**
