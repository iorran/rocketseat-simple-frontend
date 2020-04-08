import React, {useState} from 'react'; 

export default function App() {
  const [projects, setProjects] = useState([]);

  function handleClick() {
    setProjects([...projects, {id: uuid(), title: 'React 2' }])
  }

  return (  
    <>
      <h1>Hello</h1>
      <ul> 
        {projects.map(item => <li onClick={handleClick} key={item.id}>item.title</li>)}
      </ul>
    </>
  );
}
