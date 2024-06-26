# Worko.ai - Job Seeker Portal✨

## Description📄

Worko is a Node.js project designed to assist job seekers in requesting referrals from companies they wish to work with. The platform also offers various services such as resume reviews, interview handholding, career guidance, and mock interviews. The backend API is built using Node.js, Express, and MongoDB, following an MVC architecture.

## Features🚀

- User Management: Create, list, update, and soft delete users.
- Validation: Ensures correct data formats for fields like email  and zip code
- Partial Updates: Supports PATCH requests for updating specific fields
- MVC Architecture: Separation of concerns with Controllers, Services, DAOs, Models, DTOs, and Validators

## Technologies Used🛠️

- Node.js
- Express.js
- MongoDB
- Joi for implementing validations
- Mongoose for MongoDB object modeling
- Dotenv for storing and configuring env. variables

## Installation💻

1. **Clone the repository:**

```bash
  git clone https://github.com/Khushboo-Malik/Worko.ai.git
```

2. **Navigate to the project directory:**

```bash
  cd Worko.ai
```

3. **Install dependencies:**

 ```bash
  npm install
```

4. **Set up environment variables by creating a `.env` file and adding the necessary variables. You'll need:**
(refer to the example in the README).

5. **Start the server:**

  ```bash
  npm start
```

## Usage🧑‍💻

1.Use tools like Postman or curl to interact with the API.
2.Perform operations like creating, listing, updating, and deleting users.
3.Validate input data to ensure correct format

## Environment Variables🌐

Make sure to set the required environment variables in your `.env` file. Here's an example of what your `.env` file might look like:

```dotenv
PORT=5000
MONGODB_URL='mongodb://127.0.0.1:27017/Your_DB_Name'


Make sure to replace the placeholder values with your actual environment variable values. This example provides a starting point for configuring your environment variables.


This section explains what environment variables are needed and provides an example `.env` file that users can reference when setting up their own environment.