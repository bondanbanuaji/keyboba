# KeyBoba - Quick Start Guide

## 🚀 Get Started in 5 Minutes

### Prerequisites
- Node.js 18+ installed
- MongoDB installed and running
- npm or pnpm

### Step 1: Clone and Setup

```bash
cd /media/boba/DATA/Project/js\ project/vue/Vite/keyboba
```

### Step 2: Frontend Setup

```bash
# Navigate to frontend
cd frontend

# Install dependencies (already done)
# npm install

# Start dev server
npm run dev
```

Frontend will be available at: `http://localhost:5173`

### Step 3: Backend Setup (Optional for now)

```bash
# Open new terminal
cd backend

# Install dependencies (already done)
# npm install

# Create .env file
cp .env.example .env

# Edit .env and add your MongoDB URI and Clerk keys

# Start backend server
npm run dev
```

Backend will be available at: `http://localhost:3000`

## 🎮 Using the Application

### 1. Home Page
- Visit `http://localhost:5173`
- See the hero section with animated background
- Click "Test Keyboard" or "Start Typing Test"

### 2. Keyboard Tester
- Go to `/keyboard-test`
- Press any key on your keyboard
- See real-time visual feedback
- View statistics (keys pressed, last key, etc.)

### 3. Typing Test
- Go to `/typing-test`
- Select time mode (15s, 30s, 60s, or 120s)
- Click "Start Test"
- Type the displayed text
- See real-time WPM and accuracy
- View results when finished

### 4. Theme Toggle
- Click the sun/moon icon in navbar
- Toggle between dark and light mode
- Theme is saved to localStorage

## 🎨 Customization

### Change Theme Colors

Edit `frontend/tailwind.config.js`:

```javascript
daisyui: {
  themes: [
    {
      light: {
        "primary": "#FF6B6B",  // Change this
        "secondary": "#FFA500", // And this
        // ... more colors
      }
    }
  ]
}
```

### Add More Typing Texts

Edit `frontend/src/composables/useTyping.js`:

```javascript
const typingTexts = [
  "Your custom text here",
  "Another text",
  // Add more...
]
```

### Modify Keyboard Layout

Edit `frontend/src/components/keyboard/KeyboardLayout.vue`:

```javascript
const keyboardLayout = [
  // Add or modify rows and keys
]
```

## 🔧 Common Tasks

### Build for Production

```bash
cd frontend
npm run build
```

Output will be in `frontend/dist/`

### Run Backend

```bash
# Make sure MongoDB is running
mongod

# In another terminal
cd backend
npm run dev
```

### Check if Everything Works

1. Frontend running: `http://localhost:5173`
2. Backend running: `http://localhost:3000`
3. API working: `http://localhost:3000/api`

## 📦 What's Included

### Frontend Features
✅ Keyboard tester with full layout
✅ Typing test with 4 time modes
✅ Profile page (mock data)
✅ Leaderboard (mock data)
✅ Dark/Light theme
✅ Smooth animations
✅ 3D background
✅ Responsive design

### Backend Features
✅ User management
✅ Typing results tracking
✅ Leaderboard API
✅ Clerk authentication ready
✅ MongoDB models

## 🎯 Next Steps

1. **Connect Clerk Auth** - Get API keys from clerk.com
2. **Setup MongoDB** - Use local or MongoDB Atlas
3. **Add Environment Variables** - Configure .env files
4. **Test Features** - Try all functionality
5. **Customize** - Make it your own!

## 🆘 Troubleshooting

### Frontend won't start
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Backend won't start
- Check if MongoDB is running: `mongod`
- Check if port 3000 is available
- Verify .env file exists

### Theme not working
- Clear browser localStorage
- Hard refresh (Ctrl+Shift+R)

### Animations laggy
- Close other browser tabs
- Check if GPU acceleration is enabled

## 📞 Need Help?

Check these files:
- `README.md` - Full documentation
- `docs/DEVELOPMENT.md` - Development guide
- `docs/COMPLETED_FEATURES.md` - Feature list
- `docs/app_summary.md` - Original planning

## 🎉 Have Fun!

You're all set! Start testing your keyboard and improving your typing speed with KeyBoba! 🎹⚡
