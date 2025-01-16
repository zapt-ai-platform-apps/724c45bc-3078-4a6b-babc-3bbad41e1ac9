# New App

A React.js application (using Vite and Tailwind CSS), structured as a clone-like skeleton of another website’s layout and pages. This app demonstrates basic routing, a few placeholder pages (Home, Features, Profile, and Chat), basic form handling, and integrated Sentry/Umami/Progressier for error tracking, analytics, and PWA support.

## User Journeys

Below are the main user journeys. Click on each to view the detailed instructions:

1. [Home Page](docs/journeys/home.md) - Introduction to the main landing page
2. [Features Page](docs/journeys/features.md) - Overview of basic features
3. [Profile Page](docs/journeys/profile.md) - Demonstrates basic user data input
4. [Chat Page](docs/journeys/chat.md) - Placeholder for messaging functionality

## How to Run

1. Install dependencies with:  
   npm install

2. Start the development server:  
   npm run dev

3. Open your browser at the provided localhost link to see the app.

## Environment Variables

The following environment variables should be set in a `.env` file at the project root:

• COCKROACH_DB_URL  
• NPM_TOKEN  
• VITE_PUBLIC_APP_ID  
• VITE_PUBLIC_APP_ENV  
• VITE_PUBLIC_SENTRY_DSN  
• VITE_PUBLIC_UMAMI_WEBSITE_ID  

These are used for:
- Sentry error tracking configuration
- Umami website analytics
- Identifying your app ID for PWA setup (Progressier)

## External Services

• Sentry (frontend) - Used for error monitoring.
• Umami - Used for collecting and analyzing website usage analytics.
• Progressier - Provides service worker and manifest for PWA support.

No other backend or authentication service is set up by default in this project.

## Additional Notes

- All errors in the frontend are captured by Sentry, so you can monitor them in production.  
- The app includes a "Made on ZAPT" badge that links to zapt.ai.  
- The logic in Profile and Chat pages are placeholders. You can expand them to connect with real services or APIs.  

Enjoy building on this base and customizing it to your needs!