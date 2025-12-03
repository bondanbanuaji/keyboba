# Development Guide

## Project Structure

```
keyboba/
├── frontend/               # Vue 3 + Vite frontend
│   ├── src/
│   │   ├── assets/        # Static assets
│   │   ├── components/    # Vue components
│   │   │   ├── keyboard/  # Keyboard tester components
│   │   │   ├── typing/    # Typing test components
│   │   │   ├── ui/        # UI components (Navbar, Footer, etc.)
│   │   │   └── three/     # Three.js components
│   │   ├── composables/   # Vue composables
│   │   ├── layouts/       # Layout components
│   │   ├── pages/         # Page components
│   │   ├── stores/        # Pinia stores
│   │   ├── utils/         # Utility functions
│   │   ├── router/        # Vue Router config
│   │   ├── App.vue        # Root component
│   │   ├── main.js        # Entry point
│   │   └── style.css      # Global styles
│   ├── public/            # Public assets
│   ├── index.html         # HTML template
│   ├── vite.config.js     # Vite configuration
│   ├── tailwind.config.js # Tailwind configuration
│   └── package.json       # Frontend dependencies
│
├── backend/               # Express.js backend
│   ├── config/           # Configuration files
│   │   └── db.js         # MongoDB connection
│   ├── controllers/      # Route controllers
│   │   ├── authController.js
│   │   ├── typingController.js
│   │   └── leaderboardController.js
│   ├── models/           # Mongoose models
│   │   ├── User.js
│   │   ├── TypingResult.js
│   │   └── Achievement.js
│   ├── routes/           # API routes
│   │   ├── auth.js
│   │   ├── typing.js
│   │   └── leaderboard.js
│   ├── middleware/       # Express middleware
│   │   └── clerkAuth.js
│   ├── server.js         # Express server
│   └── package.json      # Backend dependencies
│
└── docs/                 # Documentation
    ├── app_summary.md    # Project summary
    └── DEVELOPMENT.md    # This file
```

## Development Workflow

### Frontend Development

1. Start the dev server:
```bash
cd frontend
npm run dev
```

2. The app will be available at `http://localhost:5173`

3. Hot Module Replacement (HMR) is enabled - changes will reflect automatically

### Backend Development

1. Make sure MongoDB is running

2. Start the backend server:
```bash
cd backend
npm run dev
```

3. API will be available at `http://localhost:3000`

4. Nodemon will auto-restart on file changes

## Key Technologies

### Frontend
- **Vue 3**: Composition API for reactive components
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **DaisyUI**: Component library for Tailwind
- **Pinia**: State management
- **Vue Router**: Client-side routing
- **GSAP**: Animation library
- **Three.js**: 3D graphics
- **Lenis**: Smooth scrolling
- **Anime.js**: Animation library

### Backend
- **Express**: Web framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB ODM
- **Clerk**: Authentication service

## API Endpoints

### Authentication
- `POST /api/auth/sync` - Sync user with Clerk
- `GET /api/auth/user/:id` - Get user profile

### Typing Tests
- `POST /api/typing/result` - Submit typing test result
- `GET /api/typing/history` - Get user's typing history
- `GET /api/typing/stats` - Get user statistics
- `GET /api/typing/best` - Get user's best result

### Leaderboards
- `GET /api/leaderboard/global` - Global leaderboard
- `GET /api/leaderboard/daily` - Daily leaderboard
- `GET /api/leaderboard/friends` - Friends leaderboard

## State Management

### Pinia Stores

1. **Theme Store** (`stores/theme.js`)
   - Manages dark/light mode
   - Persists to localStorage

2. **User Store** (`stores/user.js`)
   - User authentication state
   - User profile data

3. **Typing Store** (`stores/typing.js`)
   - Typing test state
   - WPM/accuracy calculations

## Composables

1. **useKeyboard** - Keyboard event handling
2. **useTyping** - Typing test logic
3. **useTheme** - Theme management
4. **useAnimations** - Animation helpers
5. **useSmoothScroll** - Lenis smooth scroll

## Building for Production

### Frontend
```bash
cd frontend
npm run build
```

Output will be in `frontend/dist/`

### Backend
Backend doesn't need a build step, just make sure:
- MongoDB is configured
- Environment variables are set
- Dependencies are installed

## Environment Variables

### Frontend (.env)
```
VITE_API_URL=http://localhost:3000/api
VITE_CLERK_PUBLISHABLE_KEY=pk_test_xxxxx
```

### Backend (.env)
```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/keyboba
CLERK_SECRET_KEY=sk_test_xxxxx
NODE_ENV=development
```

## Troubleshooting

### Frontend Issues

**Port 5173 is already in use:**
```bash
# Kill the process or change port in vite.config.js
```

**Module not found errors:**
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
```

### Backend Issues

**MongoDB connection failed:**
- Make sure MongoDB is running
- Check MONGODB_URI in .env

**Port 3000 is already in use:**
- Change PORT in .env
- Update VITE_API_URL in frontend/.env

## Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## Code Style

- Use Composition API for Vue components
- Follow ESLint rules
- Use Tailwind utility classes
- Keep components small and focused
- Write descriptive commit messages
