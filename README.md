🎬 Movie Explorer API

REST API built with NestJS, Prisma and PostgreSQL for the Movie Explorer application.

This API provides movie data, genre filtering, searching, sorting and favorite management.

🚀 Features

CRUD operations for Movies

CRUD operations for Genres (many-to-many with movies)

Manage Favorites

Search, sort and filter via query parameters

Swagger API documentation

PostgreSQL database running in Docker

Seed script with 20+ movies

🧱 Tech Stack

NestJS

Prisma ORM

PostgreSQL

Docker

Swagger

⚙️ Setup
npm install
docker compose up -d
npx prisma migrate dev
npx prisma db seed
npm run start:dev

API runs at: http://localhost:3000
Swagger docs: http://localhost:3000/api

## 📦 Frontend Integration

This API replaces external APIs or mock data previously used in the Internship-15-Movie-Explorer repository.
Favorites are now persisted in the database.
