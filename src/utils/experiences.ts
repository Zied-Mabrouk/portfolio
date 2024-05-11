export type ExperienceType = {
  title: string;
  company: string;
  videos?: string[];
  photos?: string[];
};

export const experiences = [
  {
    title: "End-Of-Studies Intern",
    company: "Rue des Vignerons",
    videos: ["projects/chat/demo.mov", "projects/dah/vr.mp4"],
  },
  {
    title: "Software Developer",
    company: "Devino",
    videos: ["projects/dah/vr.mp4", "projects/chat/demo.mov"],
  },
  {
    title: "Software Developer",
    company: "DAH Studio",
    videos: ["projects/chat/demo.mov", "projects/chat/demo.mov"],
  },
  {
    title: "Software Developer & Web Master",
    company: "Château de Montargis",
    videos: ["projects/chat/demo.mov", "projects/chat/demo.mov"],
  },
  {
    title: "Intern Developer",
    company: "OLA Energy",
    videos: ["projects/chat/demo.mov", "projects/chat/demo.mov"],
  },
  {
    title: "Web Developer",
    company: "TCB",
    videos: ["projects/chat/demo.mov", "projects/chat/demo.mov"],
  },
];
