import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Root = () => {
  return (
    <div className="flex flex-col w-[80%] min-h-screen m-auto max-w-[1200px] p-4 md:p-8 lg:p-12 ">
      <Navbar />
      <main className="flex grow">
        <div className='w-full text-gray-700 px-4 md:px-8 lg:px-12 h-[calc(100%-32px)]'>
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Root