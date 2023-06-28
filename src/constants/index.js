import {
  react,
  designer,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  azzam,
  docker,
  vitejs,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  ecommerce,
  threejs,
  nextjs,
  motion,
  blender,
  lightLevel02,
  darkLevel02,
  lightLevel03,
  darkLevel04,
  alizzah,
  todolist,
  laravel,
  php,
  zein,
  salman,
  fardan,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: react,
  },
  {
    title: "UI/UX Designer",
    icon: designer,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Framer Motion",
    icon: motion,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Vite JS",
    icon: vitejs,
  },
];

const experiences = [
  {
    title: "Belajar Membuat Front-End Web untuk Pemula",
    company_name: "Dicoding Indonesia",
    level: "Pemula",
    icon: lightLevel02,
    iconBg: "#383E56",
    date: "Jan 27, 2023 - Jan 27, 2026",
    points: [
      "Mempelajari penerapan BOM dan DOM pada halaman website. Selain itu, modul ini mengajarkan teknik pemanipulasian DOM menggunakan JavaScript.",
      "Mempelajari penerapan event dalam menciptakan interaktifitas pada HTML element.",
      "Mempelajari API browser yang berguna untuk penyimpanan data melalui Web Storage. Dalam modul ini mengajarkan mengenai tipe-tipe storage beserta penerapannya.",
    ],
  },
  {
    title: "Belajar Membuat Aplikasi Web dengan React",
    company_name: "Dicoding Indonesia",
    level: "Pemula",
    icon: darkLevel02,
    iconBg: "#E6DEDD",
    date: "Mar 27, 2023 - Mar 27, 2026",
    points: [
      "Berkenalan dengan React, mengetahui alasan mempelajari React, dan mengenal ekosistem yang ada di React.",
      "Belajar tentang konsep dasar React seperti composition, declarative code, unidirectional data flow, dan menyadari bahwa React hanyalah JavaScript.",
      "Belajar tentang membangun UI di React seperti mengenal element dan component. Serta, belajar juga konsep component properti yang membuat UI aplikasi bersifat reusable.",
      "Belajar tentang class component, menggunakan state di dalam component, memahami dan mempraktikkan controlled component.",
    ],
  },
  {
    title: "Belajar Fundamental Front-End Web Development",
    company_name: "Dicoing Indonesia",
    level: "Pemula - Menengah",
    icon: lightLevel03,
    iconBg: "#383E56",
    date: "Mar 13, 2023 - Mar 13, 2026",
    points: [
      "Belajar menerapkan sintaks terbaru pada JavaScript seperti block scope variable, template literals, destructuring object and array, spread operator dan rest parameters, arrow function, classes, promise hingga JavaScript module.",
      "Belajar membangun component UI website yang bersifat reusable dan encapsulated dengan custom element dan shadow DOM.",
      "Belajar menambahkan, menghapus, dan menggunakan package JavaScript yang tersedia di NPM, serta membedakan peranan dari development dependencies dan production dependencies.",
      "Belajar penerapan module bundler sebagai build tools bagi aplikasi web untuk membundel berkas-berkas JavaScript menjadi satu berkas statis yang siap rilis dan optimal.",
      "Belajar transaksi data melalui protokol HTTP/HTTPS menggunakan Fetch API, baik menggunakan method GET, POST, PUT, maupun DELETE.",
    ],
  },
  {
    title: "Belajar Fundamental Aplikasi Web dengan React",
    company_name: "Dicoing Indonesia",
    level: "Menengah",
    icon: darkLevel04,
    iconBg: "#E6DEDD",
    date: "May 3, 2023 - May 3, 2026",
    points: [
      "Belajar cara memvalidasi komponen props menggunakan PropTypes.",
      "Belajar cara membuat routing di sisi client yang mudah dengan menggunakan ekosistem React Router.",
      "Belajar cara memanfaatkan lifecycle method untuk menangani proses asynchronous seperti mendapatkan data dari API di dalam komponen.",
      "Belajar cara menyimpan state global yang dapat diakses tanpa praktik props drilling dengan menggunakan React Context.",
      "Belajar cara menuliskan kode React yang lebih baik dengan memaksimalkan penggunaan functional component melalui Hooks.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Terima kasih sudah menjadi partner yang baik, kerja keras dan komitmen adalah kata yang dapat menggambarkanmu. Semoga kamu dapat terus berkembang dan menjadi salah satu programmer expert.",
    name: "Fardan Hafidz",
    designation: "Friend & Partner",
    company: "IDN Solo",
    image: fardan,
  },
  {
    testimonial:
      "It's a pleasure to work with you. Also enthusiasm and stay active in coding websites or Android.",
    name: "Rafli Zein",
    designation: "Friend & Partner",
    company: "IDN Solo",
    image: zein,
  },
  {
    testimonial:
    "This portfolio website is very beautiful because of the 3D Design. The display looks very nice.",
    name: "Azzam Firdaus",
    designation: "Friend",
    company: "IDN Solo",
    image: azzam,
  },
  {
    testimonial:
      "Pengen belajar React JS bang.",
    name: "Salman Salim",
    designation: "Friend",
    company: "IDN Solo",
    image: salman,
  },
];

const projects = [
  {
    name: "E-Commerce",
    description:
      "E-Commerce app to provide transaction serve between clients. Powered by Midtrans API as a payment method to facilitate transactions between clients.",
    tags: [
      {
        name: "laravel",
        color: "orange-text-gradient",
      },
      {
        name: "midtrans",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/Naufal05R",
  },
  {
    name: "Al-Izzah Portfolio",
    description:
      "Portfolio Website for Al-Izzah Boarding School. Very Interactive design and Layouts created by The Next Level Front - End Developer using the most use & popular technologies.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "framer",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: alizzah,
    source_code_link: "https://github.com/",
  },
  {
    name: "Todo List",
    description:
      "The Latest version of my Todo list app. Fully Featured with RESTful API. Fully Featured with React Context, React Router, React Base hooks & Custom hooks.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "daisyui",
        color: "green-text-gradient",
      },
    ],
    image: todolist,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
