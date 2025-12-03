# Planning Website Full Stack Keyboard Tester & Monkey Typing

## 🎯 Overview Proyek
Website keyboard tester dan typing test dengan animasi modern, sistem auth, dan tema yang bisa diganti.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: Vite + Vue 3 (Composition API)
- **Styling**: Tailwind CSS 4.1 + DaisyUI 5.5
- **Animation Libraries**:
  - Lenis (smooth scrolling)
  - GSAP (complex animations)
  - Three.js (3D effects)
  - Anime.js (UI animations)
- **Authentication**: Clerk (Vue SDK)
- **State Management**: Pinia
- **Router**: Vue Router

### Backend
- **Runtime**: Node.js + Express.js
- **Database**: MongoDB + Mongoose
- **Authentication**: Clerk Backend SDK
- **API**: RESTful API

### Development Tools
- **Package Manager**: pnpm/npm
- **Code Quality**: ESLint + Prettier
- **Version Control**: Git

---

## 📱 Fitur Utama

### 1. **Keyboard Tester**
- Full 100% layout keyboard visual
- Animasi key press real-time
- Deteksi semua tombol (termasuk fn, media keys)
- Visual feedback yang menarik
- Statistics: keys pressed, response time
- Support berbagai layout (ANSI, ISO, JIS)

### 2. **Monkey Typing Test**
- Mode typing test dengan berbagai kesulitan
- Real-time WPM (Words Per Minute) calculation
- Accuracy tracking
- Leaderboard sistem
- Custom text/quotes
- Time modes: 15s, 30s, 60s, 120s
- Visual progress bar dengan animasi

### 3. **Theme System**
- Toggle button sun/moon dengan animasi smooth
- Dark mode & Light mode
- Persistent theme (localStorage)
- Smooth transition antar tema

### 4. **User System (Clerk Integration)**
- Sign up / Sign in
- Profile management
- Typing history & statistics
- Personal best records
- Achievement system

### 5. **Fitur Engagement**
- Daily challenges
- Achievement badges
- Typing streak system
- Sound effects (optional, toggle-able)
- Particle effects saat typing
- Custom keyboard themes/skins
- Share results ke social media

---

## 🎨 Design & UX

### Layout Structure
```
┌─────────────────────────────────────┐
│           Navigation Bar             │
│  Logo | Features | Profile | Theme  │
├─────────────────────────────────────┤
│                                      │
│         Hero Section (3D)           │
│     dengan Three.js background      │
│                                      │
├─────────────────────────────────────┤
│       Keyboard Tester Section       │
│    (Full keyboard visual layout)    │
├─────────────────────────────────────┤
│      Typing Test Section            │
│   (Monkey typing dengan timer)      │
├─────────────────────────────────────┤
│        Statistics Dashboard         │
│     (Charts & personal records)     │
├─────────────────────────────────────┤
│       Leaderboard Section           │
├─────────────────────────────────────┤
│            Footer                    │
└─────────────────────────────────────┘
```

### Animasi yang Akan Digunakan
1. **Page Transitions** (GSAP)
2. **Scroll Animations** (Lenis + GSAP ScrollTrigger)
3. **Keyboard Press Effects** (Anime.js)
4. **3D Background** (Three.js - particles/waves)
5. **Hover Effects** (CSS + Anime.js)
6. **Typing Cursor Animation**
7. **Number Counter Animations** (GSAP)
8. **Theme Toggle Animation** (Anime.js)

---

## 🗂️ Struktur Folder

```
keyboba/
├── frontend/                  # Client Vue
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   │   ├── sounds/       # Sound effects
│   │   │   └── images/
│   │   ├── components/
│   │   │   ├── keyboard/
│   │   │   │   ├── KeyboardLayout.vue
│   │   │   │   ├── Key.vue
│   │   │   │   └── KeyboardStats.vue
│   │   │   ├── typing/
│   │   │   │   ├── TypingTest.vue
│   │   │   │   ├── TypingInput.vue
│   │   │   │   └── ResultCard.vue
│   │   │   ├── ui/
│   │   │   │   ├── ThemeToggle.vue
│   │   │   │   ├── Navbar.vue
│   │   │   │   └── Footer.vue
│   │   │   └── three/
│   │   │       └── BackgroundScene.vue
│   │   ├── composables/
│   │   │   ├── useKeyboard.js
│   │   │   ├── useTyping.js
│   │   │   ├── useTheme.js
│   │   │   └── useAnimations.js
│   │   ├── layouts/
│   │   │   └── DefaultLayout.vue
│   │   ├── pages/
│   │   │   ├── Home.vue
│   │   │   ├── KeyboardTest.vue
│   │   │   ├── TypingTest.vue
│   │   │   ├── Profile.vue
│   │   │   └── Leaderboard.vue
│   │   ├── stores/
│   │   │   ├── user.js
│   │   │   ├── typing.js
│   │   │   └── theme.js
│   │   ├── utils/
│   │   │   ├── api.js
│   │   │   └── helpers.js
│   │   ├── App.vue
│   │   └── main.js
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── package.json
│
├── backend/                   # Server Express
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── typingController.js
│   │   └── leaderboardController.js
│   ├── models/
│   │   ├── User.js
│   │   ├── TypingResult.js
│   │   └── Achievement.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── typing.js
│   │   └── leaderboard.js
│   ├── middleware/
│   │   └── clerkAuth.js
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## 🗄️ Database Schema (MongoDB)

### Users Collection
```javascript
{
  _id: ObjectId,
  clerkId: String,
  username: String,
  email: String,
  avatar: String,
  totalTests: Number,
  bestWPM: Number,
  averageWPM: Number,
  totalKeysPressed: Number,
  achievements: [ObjectId],
  streak: Number,
  lastActive: Date,
  createdAt: Date
}
```

### TypingResults Collection
```javascript
{
  _id: ObjectId,
  userId: ObjectId,
  wpm: Number,
  accuracy: Number,
  rawWPM: Number,
  duration: Number,
  mode: String, // '15s', '30s', '60s', '120s'
  mistakes: Number,
  textLength: Number,
  createdAt: Date
}
```

### Achievements Collection
```javascript
{
  _id: ObjectId,
  name: String,
  description: String,
  icon: String,
  requirement: Object,
  rarity: String // 'common', 'rare', 'epic', 'legendary'
}
```

---

## 🚀 Development Phases

### Phase 1: Setup & Foundation (Week 1)
- [ ] Setup Vite + Vue project
- [ ] Install & configure Tailwind CSS 4.1 + DaisyUI 5.5
- [ ] Setup Express + MongoDB
- [ ] Integrate Clerk authentication
- [ ] Create basic routing
- [ ] Setup theme system (dark/light mode)

### Phase 2: Core Features (Week 2-3)
- [ ] Build keyboard tester component
  - [ ] Full keyboard layout
  - [ ] Key press detection
  - [ ] Visual animations
- [ ] Build typing test component
  - [ ] Text display
  - [ ] Input handling
  - [ ] WPM calculation
  - [ ] Accuracy tracking

### Phase 3: Animation & Polish (Week 4)
- [ ] Integrate Lenis smooth scroll
- [ ] Add GSAP animations
  - [ ] Page transitions
  - [ ] Scroll triggers
- [ ] Create Three.js background scene
- [ ] Add Anime.js micro-interactions
- [ ] Sound effects integration

### Phase 4: User Features (Week 5)
- [ ] User profile page
- [ ] Statistics dashboard
- [ ] Typing history
- [ ] Achievement system
- [ ] Leaderboard

### Phase 5: Engagement Features (Week 6)
- [ ] Daily challenges
- [ ] Streak system
- [ ] Custom keyboard themes
- [ ] Social sharing
- [ ] Responsive optimization

### Phase 6: Testing & Deployment (Week 7)
- [ ] Cross-browser testing
- [ ] Mobile responsive testing
- [ ] Performance optimization
- [ ] SEO optimization
- [ ] Deploy to production

---

## 🎯 Fitur Engagement Detail

### 1. **Daily Challenges**
- Challenge baru setiap hari
- Reward coins/points
- Special achievement

### 2. **Achievement System**
```
- First Timer: Complete first typing test
- Speed Demon: Reach 100 WPM
- Accuracy Master: 100% accuracy
- Marathon Typer: Complete 100 tests
- Week Warrior: 7 day streak
- Perfect Week: 100% accuracy for 7 days
```

### 3. **Visual Rewards**
- Particle explosion saat milestone
- Confetti saat personal best
- Badge animations
- Progress bar yang menarik

### 4. **Customization**
- Keyboard color themes
- Sound pack selection
- Font choices untuk typing test
- Background preferences

### 5. **Social Features**
- Share results as image
- Challenge friends
- Global leaderboard
- Friends leaderboard

---

## 📊 API Endpoints

### Authentication
```
POST   /api/auth/sync          - Sync Clerk user
GET    /api/auth/user/:id      - Get user profile
```

### Typing Tests
```
POST   /api/typing/result      - Submit typing result
GET    /api/typing/history     - Get user history
GET    /api/typing/stats       - Get user statistics
GET    /api/typing/best        - Get personal best
```

### Leaderboard
```
GET    /api/leaderboard/global - Global leaderboard
GET    /api/leaderboard/daily  - Daily leaderboard
GET    /api/leaderboard/friends - Friends leaderboard
```

### Achievements
```
GET    /api/achievements       - Get all achievements
GET    /api/achievements/user  - Get user achievements
POST   /api/achievements/claim - Claim achievement
```

---

## 🎨 Color Palette (DaisyUI Themes)

### Light Mode
- Primary: `#FF6B6B` (Coral Red)
- Secondary: `#FFA500` (Orange)
- Accent: `#10B981` (Emerald)
- Neutral: `#2D3748`
- Background: `#FFFFFF`
- Base: `#F7FAFC`

### Dark Mode
- Primary: `#FF8787` (Light Coral)
- Secondary: `#FFB84D` (Light Orange)
- Accent: `#34D399` (Light Emerald)
- Neutral: `#E2E8F0`
- Background: `#1A202C`
- Base: `#0F1419`

---

## ⚡ Performance Optimization

1. **Lazy Loading**: Route-based code splitting
2. **Image Optimization**: WebP format + lazy load
3. **Animation Performance**: Use transform & opacity
4. **Debouncing**: Input & scroll events
5. **Memoization**: Expensive calculations
6. **CDN**: Static assets
7. **Compression**: Gzip/Brotli

---

## 📱 Responsive Breakpoints

```javascript
// Tailwind default
sm: '640px',   // Mobile landscape
md: '768px',   // Tablet
lg: '1024px',  // Desktop
xl: '1280px',  // Large desktop
2xl: '1536px'  // Extra large
```

Priority: Desktop first, kemudian mobile optimization

---

## 🔒 Security Considerations

1. **Clerk Auth**: Secure authentication
2. **Rate Limiting**: Prevent API abuse
3. **Input Validation**: Sanitize user input
4. **CORS**: Proper configuration
5. **Environment Variables**: Sensitive data
6. **HTTPS**: Secure connection

---

## 📚 Resources & Documentation

- Clerk Docs: https://clerk.com/docs
- Tailwind CSS: https://tailwindcss.com
- DaisyUI: https://daisyui.com
- GSAP: https://greensock.com/gsap/
- Three.js: https://threejs.org
- Anime.js: https://animejs.com
- Lenis: https://lenis.studiofreight.com

---

## tambahan untuk referensi website yang gua mau:

https://monkeytype.com/

https://www.usevia.app/

--