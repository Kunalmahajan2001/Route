import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div style={{display : 'flex' , justifyContent : 'space-around' , fontSize : '25px'}}>
<Link  style={{textDecoration : 'none'}} to ='/'>Home</Link>
<Link  style={{textDecoration : 'none'}} to ='/Product'>Product</Link>

<Link  style={{textDecoration : 'none'}} to ='/Allproduct'>Allproduct</Link>
<Link  style={{textDecoration : 'none'}} to ='/Login'>Login</Link>


      
    </div>
  )
}

export default Navbar