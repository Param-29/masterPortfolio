/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Param Mirani",
  logo_name: "Param-29",
  nickname: "call_me_param",
  subTitle:
    "A passionate individual who always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/open?id=1XYpYhLeqCdyx_q6l0bQoC7RgwQjAjXPf",
  portfolio_repository: "https://github.com/param-29/masterPortfolio",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/Param-29",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/param-mirani/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:param.mirani1999@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/param_mirani1999",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/call_me_param",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@call_me_param",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/parammirani",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Vishwakarma Institute of Technology, Pune",
      subtitle: "B.Tech. in Information Technology",
      logo_path: "vit_logo.png",
      alt_name: "IIITDM Kurnool",
      duration: "2017 - 2021",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Machine Learning, Deep Learning, Data Science and Reinforcement Learning.",
        "⚡ I was also a part of various clubs like The Robotics Forum (TRF), Gedit coding club, CSI VIT Pune",
      ],
      website_link: "http://www.vit.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Reinforcement Learning",
      subtitle: "- University of Alberta",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/FTKUYEEHNCXP?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=s12n",
      alt_name: "University of Alberta",
      color_code: "#8C151599",
    },
    {
      title: "DeepLearning.AI: TensorFlow Developer",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/TEH7HSY9FJ52",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "CUDA with C/C++",
      subtitle: "- CUDA Training",
      logo_path: "nvidia_logo.png",
      certificate_link:
        "https://courses.nvidia.com/certificates/76e52f3f2c854813bfcafd9f09a3bcc8",
      alt_name: "NVIDIA",
      color_code: "#0C9D5899",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internships and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Development Intern",
          company: "NVIDIA",
          company_url: "https://www.nvidia.com/en-in/",
          logo_path: "nvidia_logo.png",
          duration: "July 2020 - Dec 2020",
          location: "Pune, India",
          description:
            "Worked with Power Labs on “Spike Analyzer” tool for better and faster analysis of automated tests. These were my contributions : (1) Improved on Analyzer tool for better visualization and analysis of the running tests. (2) Implemented a flask server for interaction with internal databases. (3) Designed a software noise cancellation feature to remove noise that power measurement devices caught.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Machine Learning Instructor",
          company: "NextUp",
          company_url: "https://nextup.co.in/index.html",
          logo_path: "next_up.jpeg",
          duration: "June 2019 - April 2020",
          location: "Remote Work",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Head of Machine Learning and Artificial Intelligence",
          company: "The Robotics Forum - VIT Pune",
          company_url: "https://vitpunerobotics.com/",
          logo_path: "trflogo6.png",
          duration: "Aug 2019 - May 2020",
          location: "Pune, India",
          description:
            "Lead a team to complete various projects and build real world applications using ML, DL and AI. We completed 2 industry projects along wit 2 research projects in the duration of a year.",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "param-snap-nobg.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, DL, and Data Science.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://ashutoshhathidara.wordpress.com",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Pune, Maharashtra, India",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/d/u/0/viewer?mid=14ouczEWkITYcdsOnbBLdvGn9ujo&hl=en_US&ll=18.520474528210258%2C73.87565375000001&z=15",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8796652152",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
