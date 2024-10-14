import userEvent from '@testing-library/user-event';
import logo from './logo.svg';
import { useEffect, useState } from 'react';




function App() {
  const [user, setUser] = useState([])

  async function fetchData()
  {
    // const getPeople = await fetch(`${process.env.REACT_APP_BASE_URL}/getUserData`)
    const url = process.env.REACT_APP_BASE_URL
    const getPeople = await fetch(`${url}/getUserData`)
    const data= await getPeople.json()
    console.log(data)
    console.log(`${url}/getUserData`)
    setUser(data.userData)
  
    // console.log(getPeople.json())
  }


  useEffect(()=>{
    fetchData()
  }, [])

  return (
    <div className="App">
      <div>{user[0].name}</div>
    </div>
  );
}

export default App;
