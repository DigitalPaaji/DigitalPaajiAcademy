'use client';
import React, { useState } from 'react'
import Navbar from './Navbar'
import Popup from './Popup'

function NavPage() {
      const [showPopup, setShowPopup] = useState(false)
      const openPopup = ()=>setShowPopup(true);
      const closePopup = ()=>setShowPopup(false);
  return (
    <div>
 <Navbar openPopup= {openPopup}/>
{showPopup && <Popup closeMenu={closePopup} />} 
    </div>
  )
}

export default NavPage
