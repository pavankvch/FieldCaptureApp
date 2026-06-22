import * as SQLite from "expo-sqlite";

export const db = SQLite.openDatabaseSync("fieldcapture.db");

export const initializeDatabase = () => {
  try {
    db.execSync(`
    CREATE TABLE IF NOT EXISTS photos (
      id TEXT PRIMARY KEY NOT NULL,
      localPath TEXT NOT NULL,
      capturedAt TEXT NOT NULL,
      label TEXT NOT NULL
    );
  `);
  } catch (error) {
    console.log("DB init error", error);
  }
};
