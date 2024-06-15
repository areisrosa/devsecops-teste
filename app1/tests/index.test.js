import { hostname } from "os";
import request from "supertest";
import server from "../src/index.js";

describe("Test the server", () => {
  test("It should respond with Hello World, " + hostname(), async () => {
    const response = await request(server).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Hello World, " + hostname());
  });
});
