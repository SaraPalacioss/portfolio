import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Sara Palacios | Portfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '<Hi, I Am',
  name: 'Sara Palacios',
  subtitle: `FullStack Developer/>`,
  cta: '+',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `"After working for more than 10 years as technician for IT companies I found in Web Development a real passion. I'm a technology lover and I do enjoy achieving new skills that let me find the better way to solve challenging issues. The learning process never ends!"`,
  paragraphTwo: `TECH STACK:`,
  paragraphThree: 'JavaScript | React | NodeJS | Express | MongoDB | Mongoose | Handlebars | API REST | Git | GitHub | ES6 | HTML | CSS',
  resume: 'https://drive.google.com/file/d/1dne34zF5dbEZLaWbDsoLvWCfh0De39TZ/view?usp=sharing', 
  resume2: 'https://drive.google.com/file/d/1mHsOxWyvBqc4aTfDZ63Snc-frdcaoOqy/view?usp=sharing'// if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'film.png',
    title: 'theGoodFilm',
    info: `This is my Ironhack final project. It's a full responsive MERN web application make with ReactJs,
    ExpressJs, NodeJs, MongoDB, Axios, API Rest & Bootstrap.`,
    info2: '',
    url: 'https://thegoodfilm.netlify.app/',
    repo: 'https://github.com/thegoodfilm', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cocktails.png',
    title: 'All City Cocktails',
    info: `Full stack project using ExpressJs, NodeJs, Handlebars, MongoDB, Axios, API Rest & Bootstrap made in 1 week for Ironhack bootcamp.`,
    info2: '',
    url: 'https://all-city-cocktails.herokuapp.com/',
    repo: 'https://github.com/SaraPalacioss/project-all-city-cocktails', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Funko.png',
    title: 'Funko Hollywood Trivial',
    info: `Front End project made in just 7 days for Ironhack bootcamp and developed with Vanilla JavaScript, DOM manipulation, HTML & CSS.`,
    info2: '',
    url: 'https://sarapalacioss.github.io/funko-hollywood-trivial',
    repo: 'https://github.com/SaraPalacioss/funko-hollywood-trivial', // if no repo, the button will not show up
  }
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to contact with me? Awesome!',
  // btn: '+34 601327667',
  email: 'contact@sarapalacios.me',
};


// OTHER PROJECTS DATA
export const otherProjectsData = [
  {
    id: nanoid(),
    img: 'film.png',
    title: 'Buscador de letras',
    info: `React app`,
    info2: '',
    url: 'https://buscadordeletras.netlify.app',
    repo: 'https://github.com/thegoodfilm', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cocktails.png',
    title: 'All City Cocktails',
    info: `Full stack project using ExpressJs, NodeJs, Handlebars, MongoDB, Axios, API Rest & Bootstrap made in 1 week for Ironhack bootcamp.`,
    info2: '',
    url: 'https://all-city-cocktails.herokuapp.com/',
    repo: 'https://github.com/SaraPalacioss/project-all-city-cocktails', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Funko.png',
    title: 'Funko Hollywood Trivial',
    info: `Front End project made in just 7 days for Ironhack bootcamp and developed with Vanilla JavaScript, DOM manipulation, HTML & CSS.`,
    info2: '',
    url: 'https://sarapalacioss.github.io/funko-hollywood-trivial',
    repo: 'https://github.com/SaraPalacioss/funko-hollywood-trivial', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'film.png',
    title: 'theGoodFilm',
    info: `This is my Ironhack final project. It's a full responsive MERN web application make with ReactJs,
    ExpressJs, NodeJs, MongoDB, Axios, API Rest & Bootstrap.`,
    info2: '',
    url: 'https://thegoodfilm.netlify.app/',
    repo: 'https://github.com/thegoodfilm', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cocktails.png',
    title: 'All City Cocktails',
    info: `Full stack project using ExpressJs, NodeJs, Handlebars, MongoDB, Axios, API Rest & Bootstrap made in 1 week for Ironhack bootcamp.`,
    info2: '',
    url: 'https://all-city-cocktails.herokuapp.com/',
    repo: 'https://github.com/SaraPalacioss/project-all-city-cocktails', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Funko.png',
    title: 'Funko Hollywood Trivial',
    info: `Front End project made in just 7 days for Ironhack bootcamp and developed with Vanilla JavaScript, DOM manipulation, HTML & CSS.`,
    info2: '',
    url: 'https://sarapalacioss.github.io/funko-hollywood-trivial',
    repo: 'https://github.com/SaraPalacioss/funko-hollywood-trivial', // if no repo, the button will not show up
  }
];


// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/sara-palaciosdepedro',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/sarapalacioss',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/sarapalacios',
    }
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
