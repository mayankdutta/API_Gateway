# API Documentation

This documentation provides details about the routes and endpoints exposed by the application.

## Table of Contents

- [Authentication and Authorization](#authentication-and-authorization)

  - [Check User Authentication](#check-user-authentication)
  - [Check User Admin Status](#check-user-admin-status)

- [Booking Service](#booking-service)

  - [Proxy to Booking Service](#proxy-to-booking-service)

- [Flight Service](#flight-service)

  - [Proxy to Flight Service](#proxy-to-flight-service)

- [Other Routes](#other-routes)

  - [Home](#home)

- [Other Services](#other-services)

---

## Authentication and Authorization

### Check User Authentication

**Endpoint:** `GET /bookingservice`

Checks if the user is authenticated.

**Response:**

```json
{
  "err": {},
  "message": "User is authenticated",
  "success": true,
  "data": "User is already successfully authenticated"
}
```

### Check User Admin Status

**Endpoint:** `GET /flightservice`

Checks if the user is an admin.

**Response:**

```json
{
  "err": {},
  "message": "User is admin",
  "success": true,
  "data": "User is already admin"
}
```

---

## Booking Service

### Proxy to Booking Service

**Endpoint:** `Proxy /bookingservice`

Proxies requests to the Booking Service at `http://localhost:3002/`.

---

## Flight Service

### Proxy to Flight Service

**Endpoint:** `Proxy /flightService`

Proxies requests to the Flight Service at `http://localhost:3001/`.

---

## Other Routes

### Home

**Endpoint:** `GET /home`

Returns a simple "ok" message.

**Response:**

```json
{
  "message": "ok"
}
```

---

## Other Services

- [Reminder service Endpoint](https://github.com/mayankdutta/reminderService)
- [Booking service Endpoint](https://github.com/mayankdutta/bookingService)
- [Auth service Endpoint](https://github.com/mayankdutta/authServices)
- [Flights and Search services](https://github.com/mayankdutta/FlightsAndSearchService)

---

Please note that this documentation provides information about the various routes and their purposes in the provided code.
The routes related to checking authentication and authorization utilize middleware to ensure secure access.
The proxy routes are used to forward requests to other services.
Make sure to follow proper security practices and implement the necessary middleware, such as the `AuthValidatorMiddleware` and `AdminValidatorMiddleware`, to secure your application.
