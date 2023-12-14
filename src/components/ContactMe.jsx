
import React from 'react';
import './ContactMe.css';

function ContactMe() {
  const projects = [
    { id: 1, title: 'Linkedln', url: ' https://www.linkedin.com/in/emine-adam-79a9a5189/' },
    { id: 2, title: 'E-mail 📧', url: 'https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSMSqVrVrHJMnKmvZlmzhvVQWfCpgxLgkcjNjrQTpwmDrRnJszGwZDfqBQxQnMwcdPBHtlzh' },
    { id: 3, title: 'Github ', url: '' },
    { id: 4, title: 'Instagram  ', url: '' },
    // ... Diğer projeler
  ];

  return (
    <div className="ContactMe">
      <h2>Contact Me</h2>
      <p>
      Hello! You can use the information below to contact me.
      </p>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              {project.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactMe;
