# Funproject Setup Instructions

## Prerequisites
- Ensure you have [Node.js](https://nodejs.org/) installed on your machine.
- Optional: Install [Docker](https://www.docker.com/) for containerized projects.

## Installation
1. Clone the repository:  
   ```bash
   git clone https://github.com/MaxPax1/Funproject.git
   ```  
2. Navigate to the project directory:  
   ```bash
   cd Funproject
   ```  
3. Install the required dependencies:  
   ```bash
   npm install
   ```

## Development
- To start the development server:  
   ```bash
   npm run dev
   ```  
- All changes will be reflected live in your browser.

## Build Commands
- To create a production build:  
   ```bash
   npm run build
   ```
- This will generate a `dist` folder with optimized files.

## Deployment
- Deploy the contents of the `dist` folder to your web server or cloud platform of choice (e.g., Vercel, Netlify).

---