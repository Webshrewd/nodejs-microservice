const app = require("../app")
const request = require('supertest');


test('GET: /api/auth/ping - Ping Auth-Service', async () => {
  const response = await request(app)
    .get("/api/auth/ping");

  expect(response.statusCode).toBe(200);
  expect(response.text).toBe("Auth-Service is up and running  on port 5000");
});

