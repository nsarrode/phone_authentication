# Strapi application

This is a simple but useful API that allow you authenticate users by phone number.

## Installation

```python
1 - Clone the repo and run npm i to install all dependencies.
2 - Download phone_number collection and then go to POSTMAN and import it. This have all endpoints with data available.
3 - You must copy the .env.example and create a new .env file with the same global variables and values.
4 - Currently I check that a phone number correspond with Argentinian valid format.
If you want modify this just go to
extensions/users-permissions/controllers/Auth.js and modify the phoneRegex from the validations that do you want.
5 - All configuration are implemented but is important understand that this API need it that strapi email confirmations are available.
```

## Available endpoints:

```python
POST signup method: url_base/auth/local/register

This endpoint send name, phone_number, email and password. All these fields are required and unique.

Response: Message: "Check your email". The user will receive an email with a six random digits.
```

```bash
POST login: url_base/auth/local

This endpoint send phone_number, password.

Response: Message: "Check your email". The user will receive an email with a six random digits.
```

```bash
GET emailConfirmation: url_base/auth/email-confirmation?confirmation=CODE.

This endpoint send username and email into the body and the random code in the url.

Response: userdata and jwt to authenticate the nexts endpoits.
```

## Considerations:

```bash
If you want to modify these or other methods like reset and forgot password go to:

extensions/users-permissions/controllers/Auth.js
extensions/users-permissions/services/User.js
```
