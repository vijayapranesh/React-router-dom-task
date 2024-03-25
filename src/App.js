

import './App.css';
import Career from './components/Career/career';
import Cybersecurity from './components/CyberSecurity/cybersecurity';
import Datascience from './components/DataScience/datascience';
import Fullsatck from './components/FullStack/fullsatck';
import Header from './components/Header/header';
import Allcourse from './components/AllCourse/allcourse';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const allPrograms = [{
  id:1,
  imgURL:"https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-1536x804.webp",
  content:"Full Stack Web Development Program",
},{
  id:2,
  imgURL:"https://www.guvi.in/blog/wp-content/uploads/2023/08/data-science-webinars-and-workshops-1536x804.webp",
  content:"Data Science Program with offers",
},{
  id:3,
  imgURL:"https://www.guvi.in/blog/wp-content/uploads/2021/03/Blog-9-768x402.png",
  content:"Cybersecurity: Zero to Hero Combo Course",
}]

const fullStackProgram = [{
  id:1,
  imgURL:"https://www.guvi.in/blog/wp-content/uploads/2023/07/html-css-collage-concept-with-person.jpg",
  content:"Top 10 Full-Stack Developer Frameworks in 2024",
},{
  id:2,
  imgURL:"https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses-768x480.webp",
  content:"7 Best Full-Stack Development Online Courses [2024]",
},{
  id:3,
  imgURL:"https://www.guvi.in/blog/wp-content/uploads/2023/03/1.jpg",
  content:"Best Web Development Roadmap for Beginners 2024",
}]

const dataScienceProgram = [{
  id:1,
  imgURL:"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Product-Based-Companies-for-Data-Scientists-768x480.webp",
  content:"Top Product-Based Companies for Data Scientists in 2024",
},{
  id:2,
  imgURL:"https://www.guvi.in/blog/wp-content/uploads/2023/01/paper-analysis-2-1536x1024.jpg",
  content:"How to become a Data Scientist after Mechanical Engineering?",
},{
  id:3,
  imgURL:"https://www.guvi.in/blog/wp-content/uploads/2023/07/best-data-science-frameworks-1536x804.webp",
  content:"10 Best Data Science Frameworks in 2024",
}]

const cyberSecurityProgram = [{
  id:1,
  imgURL:"https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif",
  content:"8 Different Types of Cybersecurity and Threats Involved",
},{
  id:2,
  imgURL:"https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp",
  content:"The Ultimate Cybersecurity Roadmap for Beginners",
},{
  id:3,
  imgURL:"https://www.guvi.in/blog/wp-content/uploads/2022/06/8bfd01c18be1b5059bc0d7770d9dabf1.gif",
  content:"Cybersecurity Vs Ethical Hacking: Top 10 Differences",
}]


function App() {
  const [allProgram,setAllProgram] = useState(allPrograms)
  const [fullStack,setFullStack] = useState(fullStackProgram)
  const [dataScience,setDataScience] = useState(dataScienceProgram)
  const [cyberSecurity,setCyberSecurity] = useState(cyberSecurityProgram)
  return (
    <BrowserRouter>
        <div className="App">
          <Header/>
          <Routes>
            <Route path='/all' element={<Allcourse allProgram={allProgram}/>}/>
            <Route path='/fullstack' element={<Fullsatck fullStack={fullStack}/>}/>
            <Route path='/datascience' element={<Datascience dataScience={dataScience}/>}/>
            <Route path='/cybersecurity' element={<Cybersecurity cyberSecurity={cyberSecurity}/>}/>
            <Route path='/career' element={<Career/>}/>
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
