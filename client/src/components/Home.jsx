import { Navbar } from 'flowbite-react'
import React from 'react'
import SidebarComponent from './SidebarComponent'
import { useNavigate } from 'react-router-dom';
import privateRoute from './hoc/privateRoute';

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

export default privateRoute(Home)
