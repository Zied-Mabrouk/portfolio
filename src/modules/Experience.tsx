import ExperienceCard from "../components/ExperienceCard";

type Props = {};

const Experience = ({}: Props) => {
  const experiences = [
    {
      title: "Software Developer",
      company: "Société Générale",
      location: "Tunis, Tunisia",
      date: "2019 - Present",
      description: [
        "Developed and maintained a web application for the bank's internal use.",
        "Worked on a team to develop a mobile application for the bank's clients.",
        "Developed and maintained a web application for the bank's internal use.",
      ],
    },
    {
      title: "Software Developer",
      company: "Société Générale",
      location: "Tunis, Tunisia",
      date: "2019 - Present",
      description: [
        "Developed and maintained a web application for the bank's internal use.",
        "Worked on a team to develop a mobile application for the bank's clients.",
        "Developed and maintained a web application for the bank's internal use.",
      ],
    },
    {
      title: "Software Developer",
      company: "Société Générale",
      location: "Tunis, Tunisia",
      date: "2019 - Present",
      description: [
        "Developed and maintained a web application for the bank's internal use.",
        "Worked on a team to develop a mobile application for the bank's clients.",
        "Developed and maintained a web application for the bank's internal use.",
      ],
    },
    {
      title: "Software Developer",
      company: "Société Générale",
      location: "Tunis, Tunisia",
      date: "2019 - Present",
      description: [
        "Developed and maintained a web application for the bank's internal use.",
        "Worked on a team to develop a mobile application for the bank's clients.",
        "Developed and maintained a web application for the bank's internal use.",
      ],
    },
  ];

  return (
    <div className="w-screen h-full flex flex-col text-white py-16 px-16">
      <h1 className="text-5xl mb-4">Experiences</h1>
      <div className="grid w-full grid-cols-4 gap-4">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
