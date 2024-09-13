# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Netflix-Clone

1. Initialize Git and Push to GitHub
   echo "# Netflix-Clone" >> README.md
   git init
   git add README.md
   git commit -m "first commit"
   git branch -M main
   git remote add origin https://github.com/berhanyimer/Netflix-Clone.git
   git push -u origin main
2. Install Dependencies:
   2.1 Material UI & Icons
   npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
   2.2 Movie-Trailer:
   npm install movie-trailer
   2.3 React-YouTube:
   npm install react-youtube

3. Add TMDB API Key
   3.1 Create a .env file in the root directory:
   touch .env
   3.2 Add your TMDB API key in the .env file:
   VITE_TMDB_API_KEY=(Your API Key)

4. GitHub Pages Deployment
   4.1 Install gh-pages for deployment:
   npm install --save-dev gh-pages

4.2 Update package.json with the following scripts:

{
"scripts": {
"dev": "vite",
"build": "vite build",
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
}
}

4.3 Add the homepage field in package.json:
{
"homepage": "https://berhanyimer.github.io/Netflix-Clone"
}
4.4 Deploy the project:
npm run deploy

5.  Running the Project Locally
    npm run dev

          Key Features

    -Browse and view movie information using the TMDB API.
    -Watch movie trailers using the YouTube player embedded with react-youtube.
    -Styled using Material UI for a modern and clean user interface.

             Technologies Used

    -React
    -Material UI
    -TMDB API
    -Movie-Trailer Package
    -React YouTube
    -GitHub Pages for deployment

              API Key

    To use the TMDB API, ensure to replace the placeholder with your own API key in the .env file:

VITE_TMDB_API_KEY=(your_api_key_here
)
