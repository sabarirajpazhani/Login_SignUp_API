## API Documentation for Login and SignUp page

![password-lock-concept-flat-developer-set-security-system-to-protect-account-data-and-user-lock-password-for-login-phone-application-flat-illustration-on-a-white-background-vector](https://github.com/user-attachments/assets/850d5688-46cd-4d69-a5db-f86f6a59a3c4)


### User Authentication API

This section provides a comprehensive overview of the API endpoints designed for user authentication within the application. These endpoints are crucial for managing user access and security, allowing users to create accounts (SignUp) and securely log into the application (Login).

The SignUp endpoint enables new users to register by providing essential information such as their username, email, and password. Once registered, users can then use the Login endpoint to authenticate themselves using their credentials. Proper error handling ensures that users are informed if an account already exists or if the credentials provided during login are incorrect.

These endpoints form the backbone of user management within the application, ensuring that only authenticated users can access certain features or services.

### **Login**

**Endpoint:** `POST /api/login`
