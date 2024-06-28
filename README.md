# VaultGuard Password Manager

Welcome to **VaultGuard**, a modern password manager application designed to securely store and manage your passwords. Built with **React**, **Tailwind CSS**, **MongoDB**, and **Express**, VaultGuard offers a seamless, responsive, and secure experience for managing your credentials.
<div>
   <img width="251" alt="Logo" src="https://github.com/Dakshesh1234/Password-Manager/assets/95707585/171488fc-8cc8-4db8-a72c-f43bab1539c5">
</div>

## Features

- **Secure Password Storage**: Safely store and retrieve passwords locally or in MongoDB.
- **Responsive Design**: Built with Tailwind CSS to ensure a seamless experience across devices.
- **Intuitive UI**: Simple and user-friendly interface for adding, editing, and managing passwords.
- **Copy to Clipboard**: Quickly copy usernames, passwords, and URLs with a single click.
- **Password Visibility Toggle**: Easily view or hide your passwords.
- **Interactive Feedback**: Toast notifications for actions like saving, copying, and deleting passwords.

## Technologies Used

- **React**: Frontend library for building interactive user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for creating responsive designs.
- **MongoDB**: NoSQL database for storing password data (optional for local storage).
- **Express**: Backend framework for API development and database integration.
- **UUID**: For generating unique identifiers for passwords.
- **React Toastify**: For displaying toast notifications.

## Getting Started

### Prerequisites

Ensure you have the following installed on your local development machine:

- **Node.js** (version >= 12)
- **npm** or **yarn**

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/vaultguard.git
   cd vaultguard
   ```

2. **Install Dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set Up Environment Variables**

   Create a `.env` file in the root directory and add the following:

   ```env
   MONGODB_URI=your-mongodb-uri
   ```

4. **Run the Application - Local Storage Version** 

   ```bash
   npm run dev
   ```
4. **Run the Application - MongoDB Storage Version** 
   **Open Terminal in the main folder and Run**
   ```bash
   npm run dev
   ```
   Your app should now be running on [http://localhost:5173](http://localhost:5173).
   
   **Open Terminal in the beckend folder and Run**
   ```bash
   node --watch server.js
   ```
   Your app backend Should now be running on [http://localhost:3000](http://localhost:3000).

### Project Structure

- **src**
  - **components**
    - `Navbar.js`: Navigation bar component.
    - `Manager.js`: Main password manager component.
    - `Footer.js`: Footer component.
  - **icons**: Directory for icons used in the app.
  - **App.js**: Main app component.
  - **App.css**: CSS file for global styles.

### Available Scripts

In the project directory, you can run:

- **`npm start`**: Runs the app in development mode.
- **`npm run build`**: Builds the app for production to the `build` folder.
- **`npm test`**: Launches the test runner in interactive watch mode.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes or enhancements you'd like to see.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements

- **React**: [React](https://reactjs.org/)
- **Tailwind CSS**: [Tailwind CSS](https://tailwindcss.com/)
- **MongoDB**: [MongoDB](https://www.mongodb.com/)
- **Express**: [Express](https://expressjs.com/)
- **React Toastify**: [React Toastify](https://fkhadra.github.io/react-toastify/)

---

Feel free to customize this description to better fit your project specifics, especially if you have additional features or instructions to include. Add relevant links to images, contributors, or other references to enhance the documentation.
