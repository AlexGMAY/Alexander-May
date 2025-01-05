import React from 'react'

const Footer = () => {
  return (
    <>
       <footer className="p-4 bg-primary text-white text-center">
        <p>© {new Date().getFullYear()} Merveille Alexander. All rights reserved.</p>
       </footer>
    </>
  )
}

export default Footer