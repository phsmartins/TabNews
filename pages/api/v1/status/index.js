import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();
  const resultDatabaseVersion = await database.query("SHOW server_version");
  const databaseVersion = resultDatabaseVersion.rows[0].server_version;

  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: databaseVersion,
      },
    },
  });
}

export default status;
