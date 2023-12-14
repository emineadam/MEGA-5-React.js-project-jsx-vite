import React from 'react';
import './ProjectList.css';

function ProjectList() {
  const projects = [
    { id: 1, title: 'React.js Page 👩🏻‍💻  ', url: '' },
    { id: 2, title: 'Random Image Gallery 📸', url: ' https://emineadam.github.io/MEGA-4-Random-image-gallery/' },
    { id: 3, title: 'Bootstrap Page 👩🏻‍💻', url: 'https://emineadam.github.io/MEGA-3-Projects-Bootstrap4-/' },
    { id: 4, title: 'Sudoku🧩 ', url: 'https://emineadam.github.io/MEGA-2-Projects/' },
    { id: 5, title: 'Calculator🔢  ', url: 'https://emineadam.github.io/MEGA-1-Projects/' },
    // ... Diğer projeler
  ];

  return (
    <div className="ProjectList">
      <h2>My Projects</h2>
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


export default ProjectList;


