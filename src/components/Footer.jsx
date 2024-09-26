import React from 'react'
import { Link } from 'react-router-dom'
import 'boxicons/css/boxicons.min.css';

const Footer = () => {
  return (
    <section className="bg-[#13A2D1]" >
        <div className="container mx-auto lg:w-[80%] py-20 flex flex-col lg:flex-row items-center gap-10 lg:gap-0 justify-between space-y-10 lg:space-y-0">
            {/* <!-- Text Section --> */}
            <div className="text-white text-center lg:text-left lg:basis-1/2">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
                <div className="mb-4">
                    <i className='bx bx-map'></i> 70 Queens Street, Yaba, Lagos State
                </div>
                <div className="mb-4">
                    <i className="bx bx-envelope"></i> lovedyoungsters@gmail.com
                </div>
                <div className="mb-4">
                    <i className="bx bx-phone"></i> +234 906 8450 108
                </div>
                {/* <!-- Social Icons --> */}
                <div className="flex justify-center lg:justify-start space-x-4 mt-4">
                    <Link to="#" className="text-white hover:text-gray-200"><i className="bx bxl-facebook"></i></Link>
                    <Link to="#" className="text-white hover:text-gray-200"><i className="bx bxl-instagram"></i></Link>
                    <Link to="#" className="text-white hover:text-gray-200"><i className="bx bxl-youtube"></i></Link>
                    <Link to="#" className="text-white hover:text-gray-200"><i className="bx bxl-twitter"></i></Link>
                    <Link to="#" className="text-white hover:text-gray-200"><i className="bx bxl-whatsapp"></i></Link>
                </div>
            </div>
    
            {/* <!-- Image Section --> */}
            <div className="flex justify-center items-center lg:basis-1/2">
                <img src={require("../assets/lymainlogo.png")} alt="Heart" className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto" />
            </div>
        </div>
    
        {/* <!-- Footer --> */}
        <div className="text-center text-white mt-10">
            <p className="text-sm py-5">Copyright © 2022 - <strong>Loved Youngsters</strong> - All rights reserved.</p>
        </div>
    </section>
  )
}

export default Footer