'use client';
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Popup from './Popup';
import { usePathname } from 'next/navigation'; // ✅ import this

function NavPage() {
  const [showPopup, setShowPopup] = useState(false);
  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  const pathname = usePathname(); // ✅ detect current route

  // ✅ Automatically open popup when route is /enroll-now
  useEffect(() => {
    if (pathname === '/enroll-now') {
      openPopup();
    }
  }, [pathname]);

  return (
    <div>
      <Navbar openPopup={openPopup} />
      {showPopup && <Popup closeMenu={closePopup} />}
    </div>
  );
}

export default NavPage;
