export type Building = { name: string; status: "live" | "building" };

// Only set "live" if a visitor can really use it today.
export const building: Building[] = [
  { name: "VoiceOS", status: "building" },
  { name: "AttendanceAI", status: "building" },
  { name: "YojanaGPT", status: "building" },
];