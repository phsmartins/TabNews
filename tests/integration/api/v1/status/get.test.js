test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http:localhost:3000/api/v1/status");
  const responseBody = await response.json();

  const responseUpdatedAt = responseBody.updated_at;
  const parsedUpdatedAt = new Date(responseUpdatedAt).toISOString();

  const responseDatabaseVersion = responseBody.dependencies.database.version;

  expect(responseUpdatedAt).toBeDefined();
  expect(responseUpdatedAt).toEqual(parsedUpdatedAt);

  expect(responseDatabaseVersion).toBeDefined();
  expect(responseDatabaseVersion).toEqual("16.0");

  expect(response.status).toBe(200);
});
