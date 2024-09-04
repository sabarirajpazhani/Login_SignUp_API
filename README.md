## API Documentation for Login and SignUp page

![password-lock-concept-flat-developer-set-security-system-to-protect-account-data-and-user-lock-password-for-login-phone-application-flat-illustration-on-a-white-background-vector](https://github.com/user-attachments/assets/850d5688-46cd-4d69-a5db-f86f6a59a3c4)


### User Authentication API

This section provides a comprehensive overview of the API endpoints designed for user authentication within the application. These endpoints are crucial for managing user access and security, allowing users to create accounts (SignUp) and securely log into the application (Login).

The SignUp endpoint enables new users to register by providing essential information such as their username, email, and password. Once registered, users can then use the Login endpoint to authenticate themselves using their credentials. Proper error handling ensures that users are informed if an account already exists or if the credentials provided during login are incorrect.

These endpoints form the backbone of user management within the application, ensuring that only authenticated users can access certain features or services.

### **Login**

**Endpoint:** `POST /api/v1/login`

**Description:** This endpoint allows a user to log in by providing their email and password.

```javascript
const registerModel = require('../models/register');

exports.getLogin=async(req,res,next)=>{

    try{
        const {email,password}=req.body;
        const user = await registerModel.findOne({email});
        if(!user){
            return res.status(400).json({
                message:"User Not Exists. So Please SignUp"
            })
        }
        if(password != user.password){
            return res.status(400).json({
                message: "Invalid Password"
            })
        }

        return res.status(200).json({
            success: true,
            message:"Login Successful!!"

        })
    }
    catch(error){
        res.status(500).json({
            message:"Internal Server Error"
        });
    }
}
```

**Request:**
**Body:**
  ```json
  {
      "email": "user@example.com",
      "password": "userpassword"
  }
  ```

**Response**
 - **Success (200):**
  ```javascript
    {
        "success": true,
        "message": "Login Successful!!"
    }
  ```
 - **User Not Found (400):**
  ```javascript
   {
    "message": "User Not Exists. So Please SignUp"
   }
  ```
 - **Invalid Password (400):**
  ```javascript
   {
    "message": "Invalid Password"
   }
  ```
 - **Internal Server Error (500):**
  ```javascript
   {
    "message": "Internal Server Error"
   }
  ```

### **SignUp**

**Endpoint:** `POST /api/v1/register`

**Description:** This endpoint allows a new user to sign up by providing their username, email, and password.
```javascript
const registerModel = require('../models/register');

exports.getSignUp=async(req,res,next)=>{
    // const registers= await registerModel.find({});
    try{
        const {username, email, password} = req.body;
        let user = await registerModel.findOne({email});
        if(user){
            return res.status(409).json({
                message: "User already Exists"
            })
        }
        user = new registerModel({username,email,password});
        await user.save();

        res.status(201).json({
            message:"User Registered Successfully"
        });
    }
    catch(error){
        res.status(500).json({
            message:"Internal Server Error"
        });
    }
}
```

**Request:**
**Body:**
  ```json
{
    "username": "username",
    "email": "user@example.com",
    "password": "userpassword"
}
```

**Response**
 - **Success (201):**
  ```javascript
    {
    "message": "User Registered Successfully"
    }
  ```
 - **Conflict (409):**
  ```javascript
  {
    "message": "User already Exists"
  }
  ```
 
 - **Internal Server Error (500):**
  ```javascript
   {
    "message": "Internal Server Error"
   }
  ```
