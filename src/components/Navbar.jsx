import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import 'boxicons/css/boxicons.min.css';

const Navbar = () => {
    // Sticky Navbar animation
    useEffect(() => {
        const nav_bar = document.querySelector(".wrap-nav")
        const handleScroll = () => {
            window.scrollY > 150 ? nav_bar.classList.add("new") : nav_bar.classList.remove("new")
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [])


    // JavaScript to toggle the mobile menu 
    useEffect(() => {
        const hamburger = document.getElementById('hamburger');
        const mobileMenu = document.getElementById('mobile-menu');
        const handleHamburgerClick = () => {
            mobileMenu.classList.toggle('hidden');
        }
        hamburger.addEventListener('click', handleHamburgerClick);
        return () => {
            hamburger.removeEventListener('click', handleHamburgerClick);
        }
    }, [])

    return (
        // Navbar 
        <nav class="bg-[#13A2D1] text-white wrap-nav">
            <div class="container mx-auto px-4 flex justify-between items-center py-3">
                {/* Logo  */}
                <div class="text-xl font-bold">
                    <span><img src={require("../assets/lymainlogo.png")} alt="logo" class="object-cover w-40 md:w-52 h-auto" /></span>
                </div>

                {/* Hamburger Menu (For small/medium screens) */}
                <div class="md:hidden">
                    <button id="hamburger" class="text-white focus:outline-none">
                        <i class="bx bx-menu text-4xl"></i>
                    </button>
                </div>

                {/* Nav Links (Hidden on small screens, visible on medium and larger screens) */}
                <div class="hidden md:flex">
                    <ul class="flex space-x-4 lg:space-x-8">
                        <li><Link to="/" class="hover:text-gray-300">Home</Link></li>
                        <li><Link to="/about" class="hover:text-gray-300">About</Link></li>
                        <li><Link to="/founder" class="hover:text-gray-300">Meet the Founder</Link></li>
                        <li><Link to="/mentorship" class="hover:text-gray-300">LY Mentorship</Link></li>
                        <li><Link to="/devotional" class="hover:text-gray-300">LY Devotional</Link></li>
                        <li><Link to="/resources" class="hover:text-gray-300">LY Resources</Link></li>
                        <li><Link to="/contact" class="hover:text-gray-300">Contact</Link></li>
                    </ul>
                </div>
            </div>

            {/* Mobile Menu (Visible on small screens) */}
            <div id="mobile-menu" class="hidden md:hidden bg-[#13A2D1]">
                <ul class="flex flex-col space-y-4 p-4">
                    <li><Link to="/" class="hover:text-gray-300">Home</Link></li>
                    <li><Link to="/about" class="hover:text-gray-300">About</Link></li>
                    <li><Link to="/founder" class="hover:text-gray-300">Meet the Founder</Link></li>
                    <li><Link to="/mentorship" class="hover:text-gray-300">LY Mentorship</Link></li>
                    <li><Link to="/devotional" class="hover:text-gray-300">LY Devotional</Link></li>
                    <li><Link to="/resources" class="hover:text-gray-300">LY Resources</Link></li>
                    <li><Link to="/contact" class="hover:text-gray-300">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar