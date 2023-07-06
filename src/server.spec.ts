import supertest from "supertest";
import { expect, test } from "vitest";
import app from "./app";

const request = supertest(app);

test("Deve verificar se o servidor está rodando", async () => {
  const res = await request.get("/");
  expect(res.statusCode).toEqual(200);
});
