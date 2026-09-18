# Vishu Sharma Portfolio - Deployment Guide

This project is a React Single-Page Application (SPA) with a lightweight Express server for production serving.

## Local Development

1.  **Install dependencies**:
    ```bash
    npm install
    ```
2.  **Run the development server**:
    ```bash
    npm run dev
    ```
    The app will be available at `http://localhost:3000`.

## Deployment

### Option 1: Vercel (Recommended)

Vercel is the easiest platform for this project. It handles static assets and serverless functions automatically.

1.  **Connect your GitHub repository** to Vercel.
2.  **Vercel will automatically detect the Vite build**.
3.  **The `vercel.json` file** handles SPA routing and the API routes in `api/index.ts`.
4.  **Environment Variables**: Add `GEMINI_API_KEY` and `APP_URL` in the Vercel dashboard.

### Option 2: Netlify (Recommended)

Netlify is excellent for hosting this project. It handles static assets and serverless functions via the included `netlify.toml`.

1.  **Connect your GitHub repository** to Netlify.
2.  **Build Settings**:
    *   **Build command**: `npm run build`
    *   **Publish directory**: `dist`
    *   **Functions directory**: `netlify/functions`
3.  **The `netlify.toml` file** handles SPA routing and the API routes in `netlify/functions/api.ts`.
4.  **Environment Variables**: Add `GEMINI_API_KEY` and `APP_URL` in the Netlify dashboard.

### Option 3: Heroku / Cloud Run / VPS (Full-Stack Hosting)

These platforms expect a long-running process.

1.  **Build Command**: `npm run build`
2.  **Start Command**: `npm start`
3.  **Environment Variables**: Add `GEMINI_API_KEY`, `APP_URL`, and `NODE_ENV=production`.
4.  **Port**: The server listens on the `PORT` environment variable (default 3000).

### Option 4: Docker Deployment

1.  **Build the image**:
    ```bash
    docker build -t vishu-portfolio .
    ```
2.  **Run the container**:
    ```bash
    docker run -p 3000:3000 -e GEMINI_API_KEY=your_key vishu-portfolio
    ```

## Environment Variables

- `GEMINI_API_KEY`: Required for Gemini AI API calls.
- `APP_URL`: The URL where the app is hosted (used for self-referential links).
- `NODE_ENV`: Set to `production` for production builds.
- `PORT`: The port the server should listen on (default 3000).
