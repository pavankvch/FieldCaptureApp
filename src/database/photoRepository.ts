import { CapturedPhoto } from "./types";
import { db } from "./database";

export const PhotoRepository = {
  getAll(): CapturedPhoto[] {
    return db.getAllSync(
      "SELECT * FROM photos ORDER BY capturedAt DESC"
    ) as CapturedPhoto[];
  },

  insert(photo: CapturedPhoto) {
    db.runSync(
      `
      INSERT INTO photos
      (id, localPath, capturedAt, label)
      VALUES (?, ?, ?, ?)
      `,
      [
        photo.id,
        photo.localPath,
        photo.capturedAt,
        photo.label,
      ]
    );
  },

  delete(id: string) {
    db.runSync(
      "DELETE FROM photos WHERE id = ?",
      [id]
    );
  },
};