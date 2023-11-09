import profileImage from '../Assets/Images/1621758938052.jpeg';

// Image Import for Youtube Banner
import SMTPAuth from '../Assets/Images/Youtube Banner/SMTP-Auth.png';
import SendMailJavaSMTP from '../Assets/Images/Youtube Banner/Send-Mail-Java-SMTP.png';
import GettingStartedWithNodejs from '../Assets/Images/Youtube Banner/GettingStartedWithNodejs.png';
import GettingStartedWithNodejs_Insert from '../Assets/Images/Youtube Banner/GSWN-Insert.png';
import GettingStartedWithNodejs_Read from '../Assets/Images/Youtube Banner/GSWN-Read.png';
import GettingStartedWithNodejs_Update from '../Assets/Images/Youtube Banner/GSWN-Update.png';
import GettingStartedWithNodejs_Delete from '../Assets/Images/Youtube Banner/GSWN-Delete.png';
import GETvsPOST from '../Assets/Images/Youtube Banner/GETvsPOST.png';

// Image Import for Projects
import cliqraiser from '../Assets/Images/Projects/cliqraiser.jpg';
import heartfit from '../Assets/Images/Projects/heartfit.jpg';
import Inventory from '../Assets/Images/Projects/Inventory.png';
import NetRegister from '../Assets/Images/Projects/NetRegister.png';
import rangoliind from '../Assets/Images/Projects/rangoliind.jpg';
import rotson from '../Assets/Images/Projects/rotson.jpg';
import signitive from '../Assets/Images/Projects/signitive.jpg';
import ExpenseTracker from '../Assets/Images/Projects/ExpenseTracker.png';
import InkCart from '../Assets/Images/Projects/InkCart.png';



// Importing .env Variables
const Whatsapp_Number = process.env.REACT_APP_WHATSAPP_NUMBER;

const Whatsapp_Message = `Hi%20Kiranroy👋,%20I%20saw%20your%20resume%20and%20I'd%20like%20to%20connect%20with%20you%20to%20discuss%20potential%20opportunities.%20Please%20let%20me%20know%20when%20you're%20available%20to%20chat.%20Thanks!`;


const PROFILE = [
    {
      id: 0,
      name: 'Kiranroy Patravali',
      email: 'kiranroypp020@gmail.com',
      phoneNumber:Whatsapp_Number,
      Whatsapp_Message:Whatsapp_Message,
      whatsapp_API:`https://wa.me/${Whatsapp_Number}?text=${Whatsapp_Message}`,
      image: profileImage,
      introduction:
        "I'm Kiranroy Patravali, an enthusiastic and dynamic Full-Stack Web Developer with a strong foundation in Adobe Photoshop, Illustrator, and digital marketing. I excel in HTML, CSS, JavaScript, Python, React, Node.js, MySQL, and MongoDB, crafting seamless web applications. My motivation to learn and grow drives me to pursue opportunities for practical experience and career development.",
      quickInfo: [
        'Full-Stack Web developer',
        'YouTuber',
        'Free-Lancing',
        'MERN Dev'
      ],
      currentCompany: 'Tata Consultancy Services (TCS)',
      workLocation: 'Bangalore, Karnataka, India',
      experience: [
        {
          title: 'Sales and Marketing Intern, My Live Tuition',
          type:'Free Lancing',
          date: 'Dec 2020 - Feb 2021',
          details: [
            'Connecting with client and making a deal for the firm.',
            'Approached clients through calls, email, and in person, based on design brief and promo specification.',
          ],
        },
        {
          title: 'Back-End Node.js Developer, Abhiyantrik Solutions',
          type:'Free Lancing',
          date: 'February 2023 – March 2023',
          details: [
            'Managing and developing backend for Smart Home Application, managing Database and hosting Server.',
            'Worked on MQTT Protocols and MQTT Library in Node.js to build real-time communication between MQTT Broker and MQTT Topics.',
            'Designing a Database Schema to Store and retrieve all the App data effectively and efficiently.',
            'Building all API End-points required to enable interaction between the app and server.',
          ],
        },
        {
          title: 'Tutor, Agileitech',
          type:'Free Lancing',
          date: 'February 2023 - July 2023',
          details: [
            'Taught Front-End and Back-End development, Database Management, Python programming, and Data Structures to diverse student groups.',
            'Developed effective course materials to promote engagement and knowledge retention.',
            'Provided individualized guidance and support to help students achieve their learning objectives.',
          ],
        },
        {
          title: 'Server Management & Application Development, K.L.E. Institute of Technology, Hubballi',
          type:'Internship (In-house)',
          date: 'December 2022 - July 2023',
          details: [
            'Developed multiple web applications, including the Ink-Cartridge Management System, Placement Website, Net Registration System, Attendance Records System, and Asset Management System, all of which are currently in use for effective management within the university.',
            'Contributed to the development of a Facial Recognition Attendance System using Python OpenCV, which is currently utilized in all K.L.E Society\'s schools as a system for recording teachers\' attendance.',
            'I collaborated with the IT admin to identify issues faced by the university, and together, we devised programming solutions to address some of these problems, successfully implementing them through our application. ',
          ],
        },
        // Other experiences...
      ],
      
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React.js',
        'Node.js',
        'MySQL',
        'MongoDB',
        'Adobe Creative Suite',
        'AEM',
        'Php',
        'WordPress',
      ],
      certifications: [
        {
          name: 'AWS ACADEMY GRADUATE - AWS ACADEMY CLOUD FOUNDATIONS, AMAZON WEB SERVICES TRAINING AND CERTIFICATION',
          link: 'https://udemy-certificate.s3.amazonaws.com/image/UC-b79a3819-2363-452a-9d2d-f83fe14370d8.jpg?v=1627227658000',
        },
        {
          name: 'SQL (BASIC) CERTIFICATE, HackerRank',
          link: 'https://www.hackerrank.com/certificates/44dd354ff1d9',
        },
        {
          name: 'SQL (INTERMEDIATE) CERTIFICATE, HackerRank',
          link: 'https://www.hackerrank.com/certificates/29b3e2d43d12',
        },
        {
          name: 'JAVASCRIPT (BASIC) CERTIFICATE, HackerRank',
          link: 'https://www.hackerrank.com/certificates/3f5ec3571eb1',
        },
        {
          name: 'JAVASCRIPT (INTERMEDIATE) CERTIFICATE, HackerRank',
          link: 'https://www.hackerrank.com/certificates/7a0cbff017ed',
        },
        {
          name: 'REST API (INTERMEDIATE) CERTIFICATE, HackerRank',
          link: 'https://www.hackerrank.com/certificates/b8fef43f6b58',
        },
        {
          name: 'THE COMPLETE HTML5 COURSE: FROM BEGINNING TO EXPERT, UDEMY',
          link: 'https://udemy-certificate.s3.amazonaws.com/image/UC-626ce37e-5a8d-4afd-b401-63a6e453ede5.jpg?v=1627223647000',
        },
        {
          name: 'ADOBE PHOTOSHOP CC- PHOTO MANIPULATION & RETOUCHING, UDEMY',
          link: 'https://udemy-certificate.s3.amazonaws.com/image/UC-b79a3819-2363-452a-9d2d-f83fe14370d8.jpg?v=1627227658000',
        },
        {
          name: 'THE COMPLETE 2022 WEB DEVELOPMENT BOOTCAMP, by Dr. Angela Yu',
          link: 'https://tcsglobal.udemy.com/certificate/UC-00518236-93dd-4fbc-b57c-3845f7f0f1e0/',
        },
        {
          name: "SPARK EVENT COORDINATOR AT TWO DAY NATIONAL LEVEL STUDENTS' TECHNICAL FEST ADVITIYA'21, K.L.E INSTITUTE OF TECHNOLOGY",
          link: 'https://www.linkedin.com/posts/kiranroy-patravali-45b04a104_leadership-management-event-activity-6825333379341385728-tY5R?utm_source=share&utm_medium=member_desktop',
        },
         ],
      
      projects: [
        {
          name: 'Placement Website for K.L.E. Institute of Technology, Hubballi',
          client:'K.L.E. Institute of Technology, Hubballi',
          techStack: ['HTML', 'CSS', 'JavaScript','Node.js','EJS','MySQL','NodeMailer','Twilio'],
          shortDescription:'Our Placement Website simplifies university placement through student profiles, resume creation, and efficient communication for all involved.',
          description: 'Our Placement Website is a comprehensive solution for university placement, offering students profile management, resume generation, and effective communication with coordinators. It streamlines the process, ensuring students stay informed about upcoming opportunities, cutoffs, and eligibility criteria. Coordinators can efficiently target messages to eligible students, reducing information overload and increasing job placement success. This user-friendly platform enhances the overall placement experience within the university, centralizing resources and fostering effective communication.',
          link: '',
          projectImg:'',
        },
        {
          name: 'Ink-Cartridge Management System',
          client:'K.L.E. Institute of Technology, Hubballi',
          techStack: ['HTML', 'CSS', 'JavaScript','Node.js','EJS','MySQL','NodeMailer','Twilio'],
          shortDescription:'Our Ink-Cartridge Management System minimizes paper use and simplifies ink-cartridge handling. Departments make requests, HODs approve them, and the IT Admin fulfills them. The system also provides insights into cartridge usage and department efficiency.',
          description: 'Our Ink-Cartridge Management System is an eco-friendly solution that simplifies ink-cartridge management while minimizing paper usage. Departments easily request cartridges, which are then approved by Heads of Departments (HODs) within the system. Once approved, the IT Admin receives notifications and takes action to fulfill the requests promptly. The system also provides valuable insights into ink-cartridge usage and department efficiency. By centralizing this process, it not only reduces paper waste but also enhances resource management, ensuring a more sustainable and streamlined approach to handling ink cartridges in the organization.',
          link: '',
          projectImg:InkCart,

        },
        {
          name: 'CliqRaiser.com',
          client:'Cliq Raiser',
          techStack: ['HTML', 'CSS', 'JavaScript','WordPress','Php'],
          shortDescription:'Your go-to web development agency, offering tailored web solutions, from design to e-commerce, for businesses of all sizes.',
          description: 'CliqRaiser.com is our web development agency\'s official website. We offer a wide range of web development services, including website design, e-commerce solutions, custom web applications, and more. Our team of experienced developers and designers is dedicated to creating unique and responsive websites tailored to your specific needs. Whether you\'re a small business or a large enterprise, we can help you establish a strong online presence and achieve your digital goals. Explore our portfolio and get in touch to discuss your web development projects. CliqRaiser.com is your gateway to innovative and effective web solutions.',
          link: 'https://cliqraizer.com/',
          projectImg:cliqraiser,

        },
        {
          name: 'Heartfit Oil | E-commerce',
          client:'Heartfit Oil, Aroodha Gani Oil',
          techStack:  ['HTML', 'CSS', 'JavaScript','WordPress','Php'],
          shortDescription:'Your source for healthy oils. Explore our e-commerce site, designed using WordPress, for a seamless shopping experience.',
          description: 'Heartfit Oil is an e-commerce platform dedicated to promoting healthy living through the sale of quality oils. We\'ve developed a user-friendly e-commerce website for them using WordPress, providing a seamless shopping experience for customers. Explore their range of heart-healthy oils and make your wellness journey delicious and convenient.',
          link: 'https://heartfitoil.com/',
          projectImg:heartfit,

        },
        {
          name: 'Inventory Management System',
          techStack:  ['HTML', 'CSS', 'JavaScript','MYSQL','Php'],
          shortDescription:'A versatile tool for efficiently managing inventory items, accessible as a responsive web application from anywhere, anytime.',
          description: 'The Inventory Management System provides efficient control of inventory operations through its responsive web application, accessible anytime and anywhere. This system simplifies real-time inventory tracking, ensuring optimal stock levels and promoting efficient order management for businesses.',
          link: '',
          projectImg:Inventory,

        },
        {
          name: 'Internet Registration Application',
          client:'K.L.E. Institute of Technology, Hubballi',
          techStack: ['HTML', 'CSS', 'JavaScript','Node.js','EJS','MySQL'],
          shortDescription:'Streamlining the registration of university emails for students and staff, ensuring seamless access to the university network.',
          description: 'The Internet Registration Application serves as a vital tool for both students and university staff, simplifying the process of registering their university email accounts. This seamless registration ensures swift and secure access to the university network. Whether you\'re a student looking to connect for coursework or a staff member requiring network access for administrative tasks, this application is designed to provide a user-friendly experience, making it easier for everyone to stay connected and access the resources they need within the university\'s digital ecosystem.',
          link: '',
          projectImg:NetRegister,

        },
        {
          name: 'Rangoli Ind | E-commerce',
          client:'Rangoli Industries',
          techStack:  ['HTML', 'CSS', 'JavaScript','WordPress','Php'],
          shortDescription:'Your one-stop E-commerce shop for top-notch industrial safety equipment.',
          description: 'Rangoli Ind is an E-commerce platform dedicated to providing a wide range of industry safety equipment. Our online store offers a comprehensive selection of safety gear and equipment to meet the diverse needs of industrial settings. Whether you are looking for protective clothing, safety gear, or other essential safety equipment, Rangoli Ind has you covered. Shop with confidence and prioritize safety in your workplace with our high-quality products.',
          link: '',
          projectImg:rangoliind,

        },
        {
          name: 'Rotson Builders Website',
          client:'Rotson Builders',
          techStack: ['HTML', 'CSS', 'JavaScript','WordPress','Php'],
          shortDescription:'A platform showcasing a diverse range of construction projects completed by Rotson Builders.',
          description: 'The Rotson Builders Website offers a comprehensive showcase of a wide array of construction projects. It serves as a valuable resource for anyone interested in exploring the diverse portfolio of projects completed by Rotson Builders. From residential developments to commercial constructions, the website provides a detailed overview of each project, including images, descriptions, and key highlights. Whether you\'re seeking inspiration for your own project or simply interested in the work of Rotson Builders, this platform offers a convenient and informative way to browse and learn about their various successful ventures in the world of construction.',
          link: 'https://rotsongroups.com/',
          projectImg:rotson,

        },
        {
          name: 'Signitive Constructions Website',
          client:'Signitive Constructions',
          techStack:  ['HTML', 'CSS', 'JavaScript','WordPress','Php'],
          shortDescription:'A platform showcasing a diverse range of construction projects completed by Signitive Constructions.',
          description: 'The Signitive Constructions Website is a valuable resource for those looking to explore an extensive portfolio of construction projects. It offers an in-depth showcase of a wide array of projects completed by Signitive Constructions, including residential and commercial developments. Each project is thoughtfully presented with images, detailed descriptions, and key highlights, providing valuable insights into the company\'s expertise and capabilities. Whether you\'re seeking inspiration for your own construction endeavors or simply interested in the achievements of Signitive Constructions, this website offers an informative and convenient way to discover their successful ventures in the construction industry.',
          link: 'https://signitiveconstructions.com/',
          projectImg:signitive,

        },
        {
          name: 'Expense Tracker with Cookies',
          techStack: ['HTML', 'CSS', 'JavaScript'],
          shortDescription:'Easily monitor and store your expenses in browser cookies for efficient financial management.',
          description: 'An Expense Tracker is a tool that records and stores your expenses in browser cookies. It offers a simple way to keep track of your spending and manage your finances conveniently.',
          link: 'https://kiranroy2010.github.io/Expense-Tracker/',
          projectImg:ExpenseTracker,

        },
        // Add more projects with techStack, description, and link...
      ],
      socialLinks: {
        github: 'https://github.com/kiranroy2010',
        linkedin: 'https://www.linkedin.com/in/kiranroy-patravali-45b04a104/',
        youtube: 'https://www.youtube.com/@bitbybitofficial',
      },
      education: [
        {
          name: 'KLE Institute of Technology, Hubli',
          date: '2019 - 2023',
          degree: 'Bachelors',
        },
        {
          name: 'Mahesh PU college, Hubli',
          date: '2017 - 2019',
          degree: 'Higher Secondary Education',
        },
        {
          name: 'V S Pillay English Medium School, Hubli',
          date: '2007 - 2017',
          degree: 'Primary Education',
        },
      ],
      hobbies: [
        'Photography',
        'Photo Manipulation',
        'Content Creation',
        'Public Speaking',
      ],
      youtube: [
        {
          title: 'Step-by-Step Guide to Set Up Gmail SMTP for Java Email',
          banner: SMTPAuth, // Replace with your YouTube banner image URL
          link: 'https://youtu.be/XohdiigLMik?si=NafgzNX0OAcvBevN', // Replace with the link to your YouTube video
          shortDesc: 'Part-1 | Step-by-Step Guide to Set Up Gmail SMTP for Java Email | #smtp #gmail',
        },
        {
          title: 'Code Walkthrough: Sending Emails with Java and Gmail SMTP',
          banner: SendMailJavaSMTP,
          link: 'https://youtu.be/iLVxXN5z6ds?si=s1DJGL6S23FtXl51',
          shortDesc: 'Part-2 | Code Walkthrough: Sending Emails with Java and Gmail SMTP | #smtp #java #mailserver',
        },
        {
          title: 'Install Node.js and Build Your First Node Server.',
          banner: GettingStartedWithNodejs,
          link: 'https://youtu.be/6bOM4V-I6dA?si=cgFTpDQJ_CaMmw6x',
          shortDesc: 'INSTALL NODEJS AND BUILD YOUR FIRST NODE SERVER - A guide for beginners',
        },
        {
          title: 'Crud application Nodejs and MySQL: Insert Data',
          banner: GettingStartedWithNodejs_Insert,
          link: 'https://youtu.be/5ZDbWdrDfHU?si=e1Xop8hjEuYLne8F',
          shortDesc: 'Crud application Nodejs and MySQL: Insert Data (Part 1)',
        },
        {
          title: 'Crud application Nodejs and MySQL: Read Data',
          banner: GettingStartedWithNodejs_Read,
          link: 'https://youtu.be/k-WT3WO5ku0?si=0uj_3NQgicPTDQH8',
          shortDesc: 'Crud application Nodejs and MySQL: Read Data (Part 2)',
        },
        {
          title: 'Crud application Nodejs and MySQL: Update Data',
          banner: GettingStartedWithNodejs_Update,
          link: 'https://youtu.be/xx2sDsSmK0g?si=Kf_vDSlCCWKX9Q9I',
          shortDesc: 'Crud application Nodejs and MySQL: Update Data (Part 3)',
        },
        {
          title: 'Crud application Nodejs and MySQL: Delete Data',
          banner: GettingStartedWithNodejs_Delete,
          link: 'https://youtu.be/AVCYTFGqGe0?si=0LR6R9md6jlSTyMz',
          shortDesc: 'Crud application Nodejs and MySQL: Delete Data (Part 4)',
        },
        {
          title: 'Mastering GET vs POST in HTTP: Valuable Insights for Coding and Architecture',
          banner: GETvsPOST,
          link: 'https://youtu.be/uvyKNXApAjU',
          shortDesc: 'GET vs POST in HTTP',
        },
        // Add more objects for additional videos
      ],
    },
  ];
  
  export default PROFILE;
  