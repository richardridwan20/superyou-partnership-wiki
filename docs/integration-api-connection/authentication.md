---
sidebar_position: 1
---

# Authentication

We provide two options for authentication in validating the API Requests:
- Bearer Token
- User Key

## Getting the Token

This token is generated using **JWT (Json Web Tokens)** to ensure a secure and strict way of transmitting information between requests.

You can get the **Bearer Token** simply by hitting the endpoint of our login API.

**Endpoint: **

`{base-url}/api/v1/users/token`

**Payload:**
```json title="body"
{
  "username": "user@email.com",
  "password": "secret"
}
```

**Response:**
```json title="success"
{
  "access_token": "jwt-token-generated",
  "user_key": "user-key-generated",
  "token_type": "Bearer"
}
```
```json title="failed"
{
  "detail": "Incorrect username or password"
}
```

## Implementing the Token

### Bearer Token

Put the value of `access_token` into the **Authorization** Header of each requests.

Example:
```json title="Headers"
{
  "Authorization": <token_type> <access_token>
}
```

### User Key

Put the value of `user_key` into the **Authorization** Header of each requests.

Example:
```json title="Headers"
{
  "Authorization": <user_key>
}
