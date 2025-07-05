# 🍩 The Simpsons API

Welcome to The Simpsons API, a comprehensive RESTful API that provides access to your favorite characters, episodes, and locations from the longest-running American sitcom, The Simpsons! This open-source project is built with modern technologies to deliver a fast, reliable, and well-documented API for developers and fans alike.

![The Simpsons Banner](https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/The_Simpsons_Logo.svg/1200px-The_Simpsons_Logo.svg.png)

## 🚀 Features

- **Character Information**: Get details about your favorite characters from Springfield
- **Episode Guide**: Access information about all episodes across all seasons
- **Locations**: Explore various locations in Springfield
- **Fast & Efficient**: Built with NestJS and Fastify for optimal performance
- **Type-Safe**: Full TypeScript support
- **Comprehensive Testing**: Unit and E2E test coverage
- **Docker Support**: Easy deployment with Docker
- **RESTful API**: Follows REST principles for easy integration

## 🛠️ Technologies

- **Backend Framework**: [NestJS](https://nestjs.com/)
- **Runtime**: Node.js (v18+)
- **Database**: [Prisma](https://www.prisma.io/) with PostgreSQL
- **Testing**: [Vitest](https://vitest.dev/)
- **Containerization**: [Docker](https://www.docker.com/)
- **Package Manager**: npm (v9+)

## 📋 Prerequisites

- Node.js v18 or higher
- npm v9 or higher
- Docker (optional, for containerized development)
- PostgreSQL (can be run via Docker)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Facug03/the-simpsons-api.git
cd the-simpsons-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Copy the example environment file and update the values as needed:

```bash
cp .env.example .env
```

Edit the `.env` file with your database credentials and other configurations.

### 4. Database Setup

#### Option A: Using Docker (Recommended)

```bash
docker-compose up -d
```

#### Option B: Local PostgreSQL

Make sure you have PostgreSQL installed and running, then update the database connection string in your `.env` file.

### 5. Run Database Migrations

```bash
npx prisma migrate dev
```

### 6. Start the Development Server

```bash
# Development mode with hot-reload
npm run dev

# Or build and start in production mode
npm run build
npm run start
```

The API will be available at `http://localhost:3000` by default.

<!-- ## 📚 API Documentation

Once the server is running, you can access the interactive API documentation at:

- **Swagger UI**: `http://localhost:3000/api`
- **OpenAPI JSON**: `http://localhost:3000/api-json` -->

## 🎯 Available Endpoints

#### CDN Images (Characters, Episodes & Locations)

Every resource that includes an image (character, episode, location) will have an `image_path` or `portrait_path` field in its API response. This field is a **relative path** to the image on the CDN.

To display the image, you must prepend the CDN base URL and select a size. The general pattern is:

```
https://cdn.thesimpsonsapi.com/{size}{image_path}
```

- **size**: Choose from `200`, `500`, or `1280` (pixels wide), depending on the resolution you need.
- **image_path**: The value returned by the API in the `image_path` or `portrait_path` property (e.g. `/character/1.webp`, `/episode/10.webp`, `/location/5.webp`).

**How to build the image URL:**

Suppose you get this object from the API:

```json
{
  "id": 1,
  "name": "Homer Simpson",
  "portrait_path": "/character/1.webp"
}
```

To show Homer's portrait at 500px wide:
```
https://cdn.thesimpsonsapi.com/500/character/1.webp
```

For an episode:
```json
{
  "id": 10,
  "name": "Homer's Night Out",
  "image_path": "/episode/10.webp"
}
```
URL:
```
https://cdn.thesimpsonsapi.com/200/episode/10.webp
```

For a location:
```json
{
  "id": 5,
  "name": "Moe's Tavern",
  "image_path": "/location/5.webp"
}
```
URL:
```
https://cdn.thesimpsonsapi.com/1280/location/5.webp
```

These images are optimized for web use and support modern browsers with WebP format. Just select the size you need and concatenate it with the `image_path` or `portrait_path` field.


- `GET /characters` - Get all characters
- `GET /characters/:id` - Get character by ID
- `POST /characters` - Create a new character
- `PATCH /characters/:id` - Update a character
- `DELETE /characters/:id` - Delete a character

### Episodes

- `GET /episodes` - Get all episodes
- `GET /episodes/:id` - Get episode by ID
- `GET /episodes/season/:season` - Get episodes by season

### Locations

- `GET /locations` - Get all locations
- `GET /locations/:id` - Get location by ID

## 🧪 Running Tests

```bash
# Unit tests
npm run test:unit

# E2E tests
npm run test:e2e

# All tests with coverage
npm test
```

## 🐳 Docker Support

Build the Docker image:

```bash
docker build -t the-simpsons-api .
```

Run the container:

```bash
docker run -p 3000:3000 the-simpsons-api
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

For any questions or suggestions, please open an issue or contact the maintainers.

## 📚 Data Attribution

This project uses data from [The Simpsons Wiki](https://simpsons.fandom.com/wiki/The_Simpsons_Wiki) under the [Creative Commons Attribution-ShareAlike License (CC BY-SA)](https://creativecommons.org/licenses/by-sa/3.0/).

---

**D'oh!** This API is not affiliated with, maintained, authorized, endorsed, or sponsored by 20th Television, The Walt Disney Company, or any of their affiliates. All product and company names are trademarks™ or registered® trademarks of their respective holders.