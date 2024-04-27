const content = {
  education: [
    {
      id: 1,
      course: "SSLC",
      title:
        "Sundram Matriculation Hr.Sec Schoool,Aaviyur,Virudhunagar(Dt)-626106",
      yearOfPassing: "2014",
      percentage: 92,
    },
    {
      id: 2,
      course: "HSC",
      title:
        "Sundram Matriculation Hr.Sec Schoool,Aaviyur,Virudhunagar(Dt)-626106",
      yearOfPassing: "2016",
      percentage: 60,
    },
    {
      id: 3,
      course: "Bachelor of Computer Science Engineering",
      title: "Sree Sowdambika College of Engineering, Aruppukottai - 626106",
      yearOfPassing: "2020",
      percentage: 6.7,
    },
  ],

  skills: [
    {
      id: 1,
      skill: "HTML",
      range: 70,
      url: "./assets/skills/html.png",
    },
    {
      id: 2,
      skill: "CSS",
      range: 80,
      url: "./assets/skills/css.png",
    },
    {
      id: 3,
      skill: "Javascript",
      range: 65,
      url: "./assets/skills/js.png",
    },
    {
      id: 4,
      skill: "Typescript",
      range: 70,
      url: "./assets/skills/typescript.png",
    },
    {
      id: 5,
      skill: "React (js/ts)",
      range: 50,
      url: "./assets/skills/react.png",
    },
    {
      id: 6,
      skill: "Node - Express (js/ts)",
      range: 80,
      url: "./assets/skills/node-js.png",
    },
    {
      id: 7,
      skill: "Bootstrap",
      url: "./assets/skills/bootstrap.png",
    },
    {
      id: 8,
      skill: "MySQL",
      url: "./assets/skills/mysql.png",
    },
    {
      id: 9,
      skill: "Postgres",
      url: "./assets/skills/postgre.png",
    },
    {
      id: 10,
      skill: "Redux Toolkit",
      url: "./assets/skills/react.png",
    },
    {
      id: 11,
      skill: "React Native",
      url: "./assets/skills/react.png",
    },
    {
      id: 12,
      skill: "Agile",
      url: "./assets/skills/agile.png",
    },
  ],

  experience: [
    {
      id: 1,
      year: "Oct/2023 - Present",
      job: "Full Stack Developer Level 2",
      company: "Crystal Delta",
      project: "Atlus - Medical E-Commerce Application",
      projectDescription: [
        {
          id: 1,
          description:
            "Working on Ecommerce Platform for a Medicare company to ease and automate their business flows",
        },
        {
          id: 2,
          description:
            "Worked on various parts of service and frontend of the application",
        },
        {
          id: 3,
          description: "Build Secure API’s on Node with Express",
        },
        {
          id: 4,
          description:
            "Involved in Authentik integration for Authentication and Authorization",
        },
        {
          id: 5,
          description: "Worked core business logic in Atlus",
        },
        {
          id: 6,
          description:
            "Involved in integrating eRx (electronic prescription) to the system",
        },
      ],
      technology:
        "React · Node · Express · TypeScript · TypeORM · PostgreSQL · HTML5 · SASS · Tailwind CSS",
    },
    {
      id: 2,
      year: "Jul/2023 - Oct/2023",
      job: "Full Stack Developer Level 2",
      company: "Crystal Delta",
      project:
        "James Cook University - Electronic Health Record system to maintain Patient Record",
      projectDescription: [
        {
          id: 1,
          description:
            "Developed an Academic Electronic Health Record system that maintains the Patient Records for  Educational Purposes",
        },
        {
          id: 2,
          description: "Student, Instructor UI implementation using React",
        },
        {
          id: 3,
          description: "Integrated Application with the Blackboard Ultra LMS",
        },
        {
          id: 4,
          description: "LTI 1.3 Verification",
        },
        {
          id: 5,
          description: "Developed API with Express",
        },
      ],
      technology:
        "React · Express · PostgreSQL · TypeScript · Jest · Amazon S3 · Amazon ECS · SASS · Sequelize.js",
    },
    {
      id: 3,
      year: "Jun/2023 - Jul/2023",
      job: "Full Stack Developer Level 2",
      company: "Crystal Delta",
      project: "CRANE - Migrate Course from one LMS to another LMS",
      projectDescription: [
        {
          id: 1,
          description:
            "Developed a seamless migration of courses from one Learning Management System (LMS) to another LMS, utilizing Playwright, Typescript, and NX technologies.",
        },
        {
          id: 2,
          description:
            "Worked on Playwright for implementing migration on various LMS.",
        },
        {
          id: 3,
          description: "Developed API with Express",
        },
        {
          id: 4,
          description: "Created Unit Tests utilizing jest",
        },
        {
          id: 5,
          description: "AWS Services hands-on.",
        },
      ],
      technology: "Express · TypeScript · Jest · Microservice · playwright",
    },
    {
      id: 4,
      year: "Jul/2021 - May/2023",
      job: "Full Stack Developer Level 1",
      company: "Crystal Delta",
      project: "MONTU - Medical E-Commerce Application",
      projectDescription: [
        {
          id: 1,
          description: `Montu has built an integrated plant-based medicine ecosystem, which streamlines the experience
            for patients end-to-end, and sets new standards in plant based medical care. Application connects
            highly qualified doctors and support them throughout their journey with dedicated patient care
            team.`,
        },
        {
          id: 2,
          description: `Developed a comprehensive E-Commerce web application for Montu, that enables dependent
            applications to manage prescription and order information`,
        },
        {
          id: 3,
          description: `Patient, Doctor, Supplier Onboarding Implementation using React and Node
          Integrated Xero API for Invoice Generation`,
        },
        {
          id: 4,
          description: `Developed API with Express js also using sequelize(ORM) for DB migrations.`,
        },
        {
          id: 5,
          description: "Created Unit Tests utilizing jest",
        },
        {
          id: 6,
          description: `Worked on Cron job Script`,
        },
        {
          id: 7,
          description: `Worked on Supplier Email job`,
        },
      ],
      technology:
        "React · Node · Express · JavaScript · Sequelize · MySQL · Amazon S3 · Amazon EC2 · HTML5 · SASS",
    },
    {
      id: 5,
      year: "Apr/2021 - Jul/2021",
      job: "Full Stack Developer",
      company: "Crystal Delta",
      project: "NCISD - LTI",
      projectDescription: [
        {
          id: 1,
          description: `Developed a LTI application that allows LMS instructors to monitor the performance of students
            at account and course level and allows grouping of specific students, writing notes on students,
            message a student in LMS or directly mail them through the LTI app.`,
        },
        {
          id: 2,
          description: "UI web layer implementation using React/Redux",
        },
        {
          id: 3,
          description: "Developed APIs with Node",
        },
        {
          id: 4,
          description: " Wrote API tests using super test, mocha, chai",
        },
      ],
      technology:
        "React · Node · Express · HTML5 · TypeScript · Redux · Jest · SASS",
    },
    {
      id: 6,
      year: "Mar/2021 - Apr/2021",
      job: "Full Stack Developer",
      company: "Crystal Delta",
      project: "Commonwealth of Learning - Elearning Platform",
      projectDescription: [
        {
          id: 1,
          description:
            "Developed a course catalogue which helps users to find various types of courses along with its description",
        },
        {
          id: 2,
          description: "UI web layer in React",
        },
        {
          id: 3,
          description: "Developed APIs with FeathersJS",
        },
        {
          id: 4,
          description: "Deployed the App in AWS",
        },
      ],
      technology:
        "React · Bootstrap · HTML5 · SASS · JavaScript · Node · Feather ",
    },
    {
      id: 7,
      year: "Oct/2020 - Mar/2021",
      job: "Process Associate",
      company: "Crystal Delta",
      project: "Intenal Courses",
      projectDescription: [
        {
          id: 1,
          description:
            "Create Internal Courses with Crystal Delta product Loree tool",
        },
      ],
      technology: "JavaScript · JSON · HTML5 · Cascading Style Sheets (CSS)",
    },
    {
      id: 8,
      year: "Aug/2017 - Dec/2019",
      job: "Frontend Developer",
      company: "Innovace Solutions",
      project: "Websites",
      projectDescription: [
        {
          id: 1,
          description:
            "Creating websites for College, Industries and host in GoDaddy",
        },
      ],
      technology:
        "HTML · JavaScript · Cascading Style Sheets (CSS) · Bootstrap · Responsive Web Design · React",
    },
  ],
};

export default content;
