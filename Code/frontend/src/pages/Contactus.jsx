import React from 'react';

// ContactUsPage component to display all members
const ContactUsPage = () => {
  const contactUsStyle = {
    textAlign: 'center',
    marginBottom: '30px',
  };

  const memberCardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '15px',
    marginBottom: '20px',
    width: '30%',
    textAlign: 'left',
  };

  const membersContainerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  };

  // Sample member data (replace with your team's information)
  const members = [
    {
      name: 'John Doe',
      position: 'CEO',
      email: 'john@example.com',
      phone: '+1234567890',
    },
    {
      name: 'Jane Smith',
      position: 'CTO',
      email: 'jane@example.com',
      phone: '+1987654321',
    },
    // Add more member objects here...
    {
      name: 'Alice Johnson',
      position: 'Marketing Director',
      email: 'alice@example.com',
      phone: '+1122334455',
    },
    // Add more member objects here...
    // Continue adding members until you have 9
  ];

  return (
    <div className="contact-us-page" style={contactUsStyle}>
      <h1>Contact Us</h1>
      <div className="members-container" style={membersContainerStyle}>
        {/* Map through members array and render Member component for each member */}
        {members.map((member, index) => (
          <div key={index} style={memberCardStyle}>
            <h3>{member.name}</h3>
            <p>{member.position}</p>
            <p>Email: {member.email}</p>
            <p>Phone: {member.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactUsPage;
