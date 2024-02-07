import { Navbar } from 'flowbite-react'
import React from 'react'
import SidebarComponent from './SidebarComponent'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import withAuth from './hoc/withAuth';

function Home() {
  const navigate = useNavigate()

  const key = localStorage.getItem("token")
  useEffect(() => {
    if (key === null) {
      navigate("/");
    }
  }, []);
  return (

    
    <div>
      <Navbar/>
      <SidebarComponent/>
    </div>
  )
}

export default Home
