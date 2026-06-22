


export interface CapturedPhoto {
    id: string; // unique identifier
    localPath: string; // file path on device
    capturedAt: string; // ISO timestamp - set at moment of capture
    label: string; // see Part 2
  }