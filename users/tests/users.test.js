const app = require("../app");
const request = require("supertest");

test("GET: /api/users/ping - Ping Users-Service", async () => {
  const response = await request(app).get("/api/users/ping");
  
  expect(response.statusCode).toBe(200);
  expect(response.text).toBe("Users-Service is up and running  on port 8000");
});
