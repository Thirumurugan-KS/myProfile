// components/MyProfile.tsx
'use client'

import React, { useEffect, useState } from 'react';
import { FaLinkedin, FaInstagram, FaWhatsapp, IconType} from 'react-icons/fa';

const MyProfile: React.FC = () => {

    interface SocialLink {
        link: string;
        username?: string;
        label?: string;
        icon: IconType;
        [key: string]: any; // Index signature to allow dynamic keys
      }

      
  const [containerStyle, setContainerStyle] = useState<React.CSSProperties>({
    margin: '0 auto', // Center the content horizontally
    maxWidth: '60%', // Default width for desktop
    fontFamily: 'Arial, sans-serif', // Use a professional font
  });

  const paragraphStyle: React.CSSProperties = {
    color: '#333', // You can set your desired text color here
    fontSize: '16px', // Adjust the font size as needed
    lineHeight: '1.5', // Adjust the line height for better readability
  };

  const boldStyle: React.CSSProperties = {
    fontWeight: 'bold',
  };

  const headingStyle: React.CSSProperties = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '16px',
    color: '#333', // You can set your desired text color here
  };

  const skillsStyle: React.CSSProperties = {
    marginTop: '16px',
  };

  const skillListStyle: React.CSSProperties = {
    listStyle: 'none',
    padding: '0',
    margin: '0',
    display: 'flex',
    flexWrap: 'wrap',
  };

  const skillItemStyle: React.CSSProperties = {
    backgroundColor: '#eee',
    borderRadius: '8px',
    margin: '4px',
    padding: '8px',
    textTransform: 'uppercase'
  };

//   const socialLinksStyle: React.CSSProperties = {
//     marginTop: '16px',
//   };

//   const socialLinkListStyle: React.CSSProperties = {
//     listStyle: 'none',
//     padding: '0',
//     margin: '0',
//   };

//   const socialLinkItemStyle: React.CSSProperties = {
//     marginBottom: '8px',
//   };

const socialLinksStyle: React.CSSProperties = {
    marginTop: '16px',
  };

  const socialLinkListStyle: React.CSSProperties = {
    listStyle: 'none',
    padding: '0',
    margin: '0',
  };

  const socialLinkItemStyle: React.CSSProperties = {
    marginBottom: '8px',
    display: 'flex',
    alignItems: 'center',
  };

  const socialIconStyle: React.CSSProperties = {
    marginRight: '8px',
  };


  useEffect(() => {
    // Check if the device is mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    // Update maxWidth based on the device type
    setContainerStyle((prevStyle) => ({
      ...prevStyle,
      maxWidth: isMobile ? '95%' : '60%',
    }));
  }, []);

  const skills = ['Next.js', 'React.js', 'SCSS/SASS', 'Cypress', 'Jest', 'A/B Test'];

  const socialLinks = {
    linkedin: {
      link: 'https://www.linkedin.com/in/thirumurugan-sengottaiyan-141b531a6',
      username: 'LinkedIn',
      icon: FaLinkedin,
    },
    instagram: {
      link: 'https://www.instagram.com/thiru_sathis',
      username: 'Instagram',
      icon: FaInstagram,
    },
    whatsapp: {
      link: 'https://wa.me/9788788632', // Replace with your WhatsApp number
      label: 'WhatsApp',
      icon: FaWhatsapp,
    },
  };
  

  const calculateExperience = () => {
    const joinDate = new Date('2020-09-14'); // Your joining date
    const currentDate = new Date();
    const diffInMonths = (currentDate.getFullYear() - joinDate.getFullYear()) * 12 +
      (currentDate.getMonth() - joinDate.getMonth());

    const years = Math.floor(diffInMonths / 12);
    const months = diffInMonths % 12;

    return `${years} years and ${months} months`;
  };


  return (
    <div style={containerStyle}>
    <h2 style={headingStyle}>About Myself</h2>
    <p style={paragraphStyle}>
      Hello, I&#39;m <span style={boldStyle}>Thirumurugan Sengottaiyan</span>, an accomplished frontend developer with a rich {calculateExperience()} tenure at TCS. My journey in technology began after completing my academic studies. I graduated from <span style={boldStyle}>IRTT College</span> between 2016 and 2020, achieving an impressive 73% in my academic pursuits. Prior to that, I completed my 12th grade at <span style={boldStyle}>Hindu Kalvi Nilayam</span> with a remarkable 88%. My educational journey started at <span style={boldStyle}>MSSHSS</span>, where I excelled in SSLC with an outstanding score of 93%.
    </p>
    <p style={paragraphStyle}>
      Over the course of my career at TCS, I have honed my skills in frontend development, making significant contributions to projects involving NextJS, ReactJS, and <span style={boldStyle}>Optimizely</span> for A/B testing. With a proven track record of delivering high-quality user interfaces, I am passionate about pushing the boundaries of innovation. My ability to seamlessly integrate design and functionality, coupled with my keen eye for detail, allows me to create web applications that stand out in today&#39;s competitive digital landscape. I am excited to bring my technical prowess and creative mindset to your projects, ensuring they not only meet but exceed your expectations.
    </p>
    <p style={paragraphStyle}>
      As a seasoned frontend developer with {calculateExperience()} of experience at TCS, I am well-versed in the intricacies of NextJS, ReactJS, and <span style={boldStyle}>Optimizely</span> for A/B testing. My educational background has provided a strong foundation, and I am committed to staying at the forefront of advancements in the field. I look forward to contributing my skills and expertise to elevate your web development projects.
    </p>

    <div style={skillsStyle}>
        <h2 style={headingStyle}>Skills</h2>
        <ul style={skillListStyle}>
          {skills.map((skill, index) => (
            <li key={index} style={skillItemStyle}>
              {skill}
            </li>
          ))}
        </ul>
      </div>

      <div style={socialLinksStyle}>
        <h2 style={headingStyle}>Social Links</h2>
        <ul style={socialLinkListStyle}>
          {Object.keys(socialLinks).map((key) => (
            <li key={key} style={socialLinkItemStyle}>
              {React.createElement(socialLinks[key].icon, { style: socialIconStyle })}
              <a href={socialLinks[key].link} target="_blank" rel="noopener noreferrer">
                {socialLinks[key].label || socialLinks[key].username}
              </a>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default MyProfile;
