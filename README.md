# 📁 Portfolio — Gian Caorlin

## 👋 Welcome

This is my personal portfolio project.
It presents my professional profile as a **Full-Stack Developer / Designer**, using:

- ⚙️ **Angular** for the frontend  
- ⚙️ **Express.js + Node.js** for the backend  
- ⚙️ **MongoDB Atlas** for the database  

Everything is integrated into a full web application and deployed to the cloud.

---

## 🚀 Tech Stack

### Frontend
- [Angular](https://angular.io/)
- HTML5 + SCSS
- Angular Routing & Services
- Firebase Hosting

### Backend
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- MongoDB via Mongoose
- Deployed on [Render](https://render.com)

### Database
- [MongoDB Atlas](https://www.mongodb.com/atlas)

---

## 📁 Project Structure

```bash
/portfolio-front     # Angular frontend application
/portfolio-back      # Express backend API
/README.md           # This file
```

## 🛠️ Running Locally

### ▶️ Clone the repository
```bash
git clone https://github.com/l5partanl/portfolio-front.git
```

### ▶️ Setup Frontend
```bash
cd portfolio-front
npm install
ng serve
```

⚠️ Make sure to create a .env file inside portfolio-backend/ with your MongoDB connection string and any other required environment variables.


# PortfolioFront

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.10.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
