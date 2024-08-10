import React from 'react';
import '../styles/aboutus.css';

function AboutUs() {
  const teamMembers = [
    {
      name: 'Alice Johnson',
      role: 'CEO',
      image: 'https://via.placeholder.com/150',
      bio: 'Alice has over 20 years of experience in the industry and leads our company with a vision for innovation and growth.',
    },
    {
      name: 'Bob Smith',
      role: 'CTO',
      image: 'https://via.placeholder.com/150',
      bio: 'Bob is a tech enthusiast with a passion for developing cutting-edge technology solutions.',
    },
    {
      name: 'Carol Williams',
      role: 'CFO',
      image: 'https://via.placeholder.com/150',
      bio: 'Carol brings a wealth of financial expertise to our company, ensuring sound financial strategies and stability.',
    },
    {
      name: 'Dave Brown',
      role: 'COO',
      image: 'https://via.placeholder.com/150',
      bio: 'Dave is focused on optimizing our operations to deliver the highest level of efficiency and effectiveness.',
    },
  ];

  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <p>
        Welcome to our company! We are dedicated to providing the best services
        and solutions to our clients. Our team is composed of experienced and
        passionate individuals who are committed to excellence and innovation.
      </p>

      {/* <div className="team">
        <h2>Our Team</h2>
        <div className="team-members">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <img src={member.image} alt={${member.name}} />
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
              <p className="bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </div> */}

      <div className="features">
        <h2>Features</h2>
        <p>
          Discover the unique features that set us apart and drive our success.
        </p>
        <ul>
          <li>State-of-the-art technology solutions</li>
          <li>Customer-focused service approach</li>
          <li>Global outreach and collaboration</li>
          <li>Empowering employee development and growth</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutUs;