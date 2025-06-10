# Player Mood Board - Local Setup Guide

The Player Mood Board is a web application that allows soccer players to submit their mood after training sessions and provides coaches with a live dashboard of team sentiment. This guide will help you set up and run the application locally.

## Features
* Player View: Submit mood via emoji (😃 😐 😞)
* Coach Dashboard: View real-time mood summaries with auto-refresh
* Historical Data: View mood data from previous days
* Responsive Design: Works on mobile and desktop devices

## Prerequisites
Make sure you have these installed before proceeding:
* Node.js (v18+)
* npm (v9+)
* PHP (v8.0+)
* Git

## Verify installations:
* node -v
* npm -v
* php -v

# Step-by-Step Setup

## 1. Clone the repository
`git clone` https://github.com/busuyiomotosho/player-mood-board.git
`cd player-mood-board`

## 2. Set up the Backend
`cd backend` # Navigate to backend directory
`touch mood.db` # Create SQLite database file
`chmod 666 mood.db` # Set permissions (Linux/macOS)
`php -S localhost:8000 public/router.php` # Start PHP server

## 3. Set up the Frontend

Open a new terminal window/tab
`cd frontend` # Navigate to frontend directory
`npm install` # Install dependencies
`echo "NEXT_PUBLIC_API_URL=http://localhost:8000" > .env.local` # Create environment file
`npm run dev` # Start development server

# Access the Application
* Player View: http://localhost:3000/player
* Coach Dashboard: http://localhost:3000/coach
* Home Page: http://localhost:3000

# Verify Backend API
Test the API endpoints directly:
* Submit a mood:
`curl -X POST http://localhost:8000/api/mood \`
  `-H "Content-Type: application/json" \`
  `-d '{"emoji": "happy"}'`

* Get mood summary:
`curl http://localhost:8000/api/moods`

# Reset the Database
To clear all mood submissions:

* Stop the PHP server (Ctrl+C)
  `rm backend/mood.db`
  `touch backend/mood.db`
  `chmod 666 backend/mood.db`

* Restart the PHP server
  `php -S localhost:8000 public/router.php`

# Troubleshooting Common Issues

1. PHP not found
* `brew install php` # macOS
* Install XAMPP: https://www.apachefriends.org # Windows

2. SQLite extension missing
* `php -m | grep sqlite` # Check installed PHP extensions
* Remove ; from ;extension=pdo_sqlite and ;extension=sqlite3 # Enable SQLite in php.ini

3. Database permission errors
* `chmod 666 backend/mood.db` # Linux/macOS

* Right-click mood.db > Properties > Security
Give "Everyone" full control # Windows

4. CORS issues
Verify that both backend files have proper headers:
* backend/config/database.php
* backend/public/router.php
Ensure the backend is started with public/router.php

5. Port conflicts
If ports 8000 or 3000 are in use:
`php -S localhost:8001 public/router.php` # Change backend port
`echo "NEXT_PUBLIC_API_URL=http://localhost:8001" > frontend/.env.local` # Update frontend .env.local

# Development Workflow
Running both services
Use two terminal windows:

Backend terminal:
`cd backend`
`php -S localhost:8000 public/router.php`

Frontend terminal:
`cd frontend`
`npm run dev`

Making changes
* Frontend files: frontend/app/ and frontend/components/
* Backend files: backend/api/ and backend/config/

The application will hot-reload when you save frontend changes
Restart PHP server after backend changes

# Project Structure

player-mood-board/
├── backend/                  # PHP backend
│   ├── api/                  # API endpoints
│   │   ├── mood.php          # Mood submission
│   │   └── moods.php         # Mood retrieval
│   ├── config/               # Configuration
│   │   └── database.php      # Database connection
│   ├── public/               # Web server root
│   │   └── router.php        # Request router
│   └── mood.db               # SQLite database
├── frontend/                 # Next.js frontend
│   ├── app/                  # App router
│   │   ├── (player)/         # Player route group
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── coach/            # Coach route group
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Home page
│   ├── components/           # React components
│   │   ├── EmojiButton.tsx
│   │   ├── MoodCard.tsx
│   │   └── MoodChart.tsx
│   ├── lib/                  # Utility functions
│   │   └── api.ts            # API client
│   ├── styles/               # Global styles
│   │   └── globals.css
│   ├── .env.local            # Environment variables
│   └── package.json          # Frontend dependencies
└── README.md                 # This documentation