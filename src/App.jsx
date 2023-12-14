
import React from 'react';
import './App.css';
import BlogPost from './components/BlogPost';
import ProjectList from './components/ProjectList';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Natural Beauties of Türkiye</h1>
      </header>
    
        <main>
        <BlogPost
          title="Magnificent Mountain Views"
          content="Mountain views, one of the magnificent beauties of nature, fascinate people..."
          imageUrl="/public/mountain.jpg"
        />
        <BlogPost
          title="Voice of the Forest"
          content="The forest attracts attention with its bird sounds and peaceful atmosphere. It is a natural source of therapy."
          imageUrl="/public/forest.jpg"
        />
      </main>

      <main className="App-main">
      < ProjectList/> <ContactMe/>
      </main>

      < Footer/>
      
    </div>
  );
}

export default App;

