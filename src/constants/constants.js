import { DiDatabase, DiJavascript, DiBootstrap} from 'react-icons/di';

export const projects = [
    {
      title: 'Weather News App',
      description: `This is a web application, which combines a comprehensive weather forecast and up-to-date news from the Netherlands. 
                    The app offers a seamless user experience with embedded Twitter blocks for real-time updates and insights.
                    With my weather feature, users can effortlessly access weather information based on their current location.
                    It also empowers users to explore weather conditions in any city of their choice.`
                    ,
        image: '/images/1.png',
        tags: ['React', 'Weather API', 'Twitter Api', 'Node'],
      source: 'https://github.com/Tomoroso/weather__news__app.git',
      visit: 'https://google.com',
      id: 0,
    },
    {
      title: 'Udemy Landing Page',
      description:`I want to present you my exiting project showcasing the Udemy platform! With a focus on advertising Udemy's exceptional services,
                   this project combines captivating animations, screen size optimization, and a sleek design created using Figma. Developed with React,
                   the application delivers an immersive and user-friendly experience, making learning accessible to all.`,
      image: '/images/2.png',
      tags: ['React', 'Node', 'Figma'],
      source: 'https://github.com/Tomoroso/udemy_landingPage.git',
      visit: 'https://google.com',
      id: 1,
    },
    {
      title: 'Restaurant Web Site',
      description: `This is a captivating restaurant web project, designed to showcase the culinary delights and achievements of your establishment. 
                     With a stunning and responsive design, our project utilizes the power of React to deliver an immersive and visually appealing experience.
                     From enticing image slides to comprehensive menus, this project highlights the essence of the restaurant in a captivating way.`,
        image: '/images/3.jpg',
        tags: ['React', 'Node', 'Figma'],
      source: 'https://github.com/Tomoroso/zarzo_restaurant.git',
      visit: 'https://google.com',
      id: 2,
    },
    {
      title: 'Blog Application',
      description: `Here I have an elegant and user-friendly blog web application, crafted with Node.js, EJS, and Express. 
                    This application offers seamless navigation and a visually pleasing design, providing an effortless experience for users to explore,
                    create, edit, and delete blogs. With a focus on simplicity and responsiveness, is ensured that the content takes center stage, free from distractions.`,
      image: '/images/4.jpg',
      tags: ['React', 'Node', 'EJS', 'Express'],
      source: 'https://github.com/Tomoroso/blog_node_app.git',
      visit: 'https://google.com',
      id: 3,
    },
  ];
  
  export const TimeLineData = [
    { year: 2018, text: 'Finished my University(IT field).', },
    { year: 2018, text: 'Worked as a freelance developer.', },
    { year: 2019, text: 'I explored non-IT jobs to expand my experiences.', },
    { year: 2020, text: 'Traveled, studying both English and Spanish.', },
    { year: 2023, text: 'Started full stack web courses.', },
    { year: 2024, text: 'Finished my first projects.', },
  ];

  export const experience = [
    { icon: <DiJavascript style={{width: 20, height: 20}}/>, field: 'Front-End', technologies: ['HTML&CSS', 'JavaScript', 'jQuery', 'React.js']},
    { icon: <DiDatabase style={{width: 20, height: 20}}/>, field: 'Back-End' , technologies: ['EJS', 'Express.js', 'Node.js']},
    { icon: <DiBootstrap style={{width: 20, height: 20}}/>, field: 'UI/UX', technologies: ['Bootstrap', 'Figma']},
  ]