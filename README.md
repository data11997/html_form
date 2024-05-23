# Simple Registration Form

This project is a simple registration form with front-end validation and a back-end server to save the form data to a JSON file. The front-end is built with HTML, CSS, and JavaScript, and the back-end is built with Node.js and Express.

## Project Structure

project-root/
│
├── frontend/
│ ├── index.html
│ ├── styles.css
│ └── form-validation.js
│
├── server/
│ ├── server.js
│ └── database.json
│
├── package.json
├── package-lock.json
└── vercel.json


## Front-End

### index.html

The HTML file contains the structure of the registration form with fields for first name, last name, other names, email, phone number, and gender.

### styles.css

The CSS file styles the form, ensuring it is user-friendly and visually appealing.

### form-validation.js

The JavaScript file handles form validation, ensuring that all required fields are filled out correctly and providing feedback to the user if any errors are found.

## Back-End

### server.js

The Node.js server handles POST requests to save form data to `database.json`. It uses Express for routing and middleware, Body-Parser to parse JSON request bodies, and CORS to handle cross-origin requests.

## Deployment

### Deploying on Vercel

1. **Create a Vercel Account**:
   - Sign up for a free account at [vercel.com](https://vercel.com/).

2. **Install Vercel CLI** (optional but recommended):
   - Install Vercel CLI globally using npm:
     ```bash
     npm install -g vercel
     ```

3. **Log In to Vercel CLI**:
   - Log in to your Vercel account using the CLI:
     ```bash
     vercel login
     ```

4. **Deploy the Project**:
   - Run the following command in your project root directory:
     ```bash
     vercel --prod
     ```

     Follow the prompts to set up and deploy your project.

5. **Update API URL**:
   - Ensure the fetch URL in `form-validation.js` matches the deployed backend URL.

### vercel.json

The configuration file for Vercel deployment specifies the build and route settings for the project.

## Usage

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name

Install Dependencies:
npm install

Run the Server:
node server/server.js

Open the Frontend:
- Open frontend/index.html in your web browser.

Submit the Form:
- Fill out the form and submit it. The data should be saved in server/database.json.

Features
- Front-end validation to ensure data integrity.
- Back-end server to handle data submission and storage.
- Deployment setup with Vercel for easy hosting.

Contributing
If you would like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

License
This project is open source and available under the MIT License.

