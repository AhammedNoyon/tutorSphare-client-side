TutorSphere

Project Purpose

The Language Exchange project is an Online Tutor Booking Platform designed to connect users with tutors across various languages and subjects. It simplifies the process of finding, reviewing, and booking tutors through an interactive and user-friendly interface, promoting accessible learning opportunities globally.

Live URL : https://b10-asm11.web.app/

Key Features

Responsive Design:

Fully responsive for mobile, tablet, and desktop devices.

Secure Environment:

Firebase configuration keys and MongoDB credentials are secured using environment variables.

Interactive Interface:

Find tutors, add tutorials, manage bookings, and leave reviews.

Dynamic Routing:

Category-based tutor search and private routes for personalized experiences.

Dark/Light Theme Toggle:

Users can toggle between dark and light themes.

Authentication System:

Supports email/password login, Google sign-in, and JWT authentication.

NPM Packages Used

React - For building the user interface.

npm install react

Tailwind CSS - For utility-first CSS styling.

npm install -D tailwindcss postcss autoprefixer

React Icons - To incorporate popular icons as React components.

npm install react-icons

Firebase - For authentication and data management.

npm install firebase

Axios - For API requests.

npm install axios

React Router DOM - For routing.

npm install react-router-dom

JWT Decode - For decoding JSON Web Tokens.

npm install jwt-decode

Deployment Guidelines

Ensure the server works perfectly in production without throwing any errors (CORS, 404, 504, etc.).

Add authorized domains in Firebase for authentication.

Ensure the website does not throw errors upon reloading any routes.

Layout & Page Structure

Navbar

Website Name/Logo reflecting the theme.

Home, Find Tutors, Add Tutorials, My Tutorials, My Booked Tutors.

Conditional Login/Logout based on authentication status.

Main Section

Dynamic content based on routes.

Footer

Includes all relevant information and a visually appealing design.

Pages

Home Page

Banner Section: Includes a carousel with relevant images.

Stats Section: Four columns displaying counts for tutors, reviews, languages, and users.

Category Section: Minimum of 9 cards with language category details, redirecting to the respective tutor list.

Additional sections relevant to the website.

Find Tutors Page

Lists all tutors with details (name, image, language, reviews, etc.).

Includes a search functionality based on language.

Tutor Details Page (Private Route)

Displays tutor information with a "Book" button to store booking details.

My Booked Tutors (Private Route)

Lists booked tutors with review functionality.

Add Tutorials (Private Route)

Form to add tutorials with fields for name, email, image, language, price, description, and reviews.

My Tutorials (Private Route)

Displays user-added tutorials with options to update or delete.

Additional Features

Error Page for handling invalid routes.

Loading states for better user experience.

Commit Guidelines

At least 15 meaningful commits on the client side.

At least 8 meaningful commits on the server side, all with descriptive messages.

Contact

For any inquiries or feedback, please contact the project maintainer.
