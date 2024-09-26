import React from 'react'
import SwiperComponent from '../components/SwiperComponent'
import backgroundImage from '../assets/general_background.jpg'
import groupPhoto from '../assets/group_photo1.jpg'
import { Link } from 'react-router-dom'
import 'boxicons/css/boxicons.min.css';

const Home = () => {
    return (
        <div className="max-w-[100vw]">
            {/* <!-- Main Section --> */}
            <main className="relative overflow-hidden bg-cover bg-center h-max md:h-screen py-12"
                style={{ backgroundImage: `url(${backgroundImage})` }}>

                {/* <!-- Overlay --> */}
                <div className="absolute inset-0 bg-black bg-opacity-70"></div>

                <div className="relative container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center h-full">

                    <SwiperComponent />

                    {/* <!-- Text Section --> */}
                    <div className="w-full lg:w-2/3 text-center lg:text-left text-white p-6">
                        <h1 className="text-4xl lg:text-6xl font-bold">Welcome to <span className="text-[#13A2D1]">Loved
                            Youngsters</span></h1>
                        <p className="mt-4 text-2xl">A family of teenagers loved to love</p>
                    </div>
                </div>
            </main>


            {/* <!-- Action Plan Section --> */}
            <section className="container mx-auto py-12 px-6 text-xl">


                <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold text-[#13A2D1]">THE BIG PICTURE</h2>
                    <div className="mt-4 mx-auto p-4 rounded-xl border w-full md:w-[50%]">
                        <p>We envision all teenagers believing, delighting and embodying the love of Christ.</p>
                    </div>
                </div>

                {/* <!-- Our Action Plan --> */}
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold">OUR <span className="text-[#13A2D1]">ACTION</span> PLAN</h2>
                    <p className="mt-2">Loved Youngsters Curriculum</p>
                </div>

                {/* <!-- Curriculum Grid --> */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center mx-auto w-full md:w-[85%]">

                    {/* <!-- Row 1 --> */}
                    <div className="bg-white p-4 shadow-md rounded">
                        <p>We envision all teenagers believing, delighting and embodying the love of Christ.</p>
                    </div>
                    {/* <!-- Arrow --> */}
                    <div className="flex justify-center md:hidden">
                        <p className="text-2xl">&#x2193;</p>
                    </div>
                    <div className="bg-white p-4 shadow-md rounded">
                        <p>We envision all teenagers believing, delighting and embodying the love of Christ.</p>
                    </div>

                    {/* <!-- Arrow --> */}
                    <div className="hidden md:flex justify-center">
                        <p className="text-2xl">&#x2193;</p>
                    </div>

                    <div className="flex justify-center">
                        <p className="text-2xl">&#x2193;</p>
                    </div>

                    {/* <!-- Row 2 --> */}
                    <div className="bg-white p-4 shadow-md rounded">
                        <p>We envision all teenagers believing, delighting and embodying the love of Christ.</p>
                    </div>
                    {/* <!-- Arrow --> */}
                    <div className="flex justify-center md:hidden">
                        <p className="text-2xl">&#x2193;</p>
                    </div>
                    <div className="bg-white p-4 shadow-md rounded">
                        <p>We envision all teenagers believing, delighting and embodying the love of Christ.</p>
                    </div>

                    {/* <!-- Arrow --> */}
                    <div className="hidden md:flex justify-center">
                        <p className="text-2xl">&#x2193;</p>
                    </div>

                    <div className="flex justify-center">
                        <p className="text-2xl">&#x2193;</p>
                    </div>

                    {/* <!-- Row 3 --> */}
                    <div className="bg-white p-4 shadow-md rounded">
                        <p>We envision all teenagers believing, delighting and embodying the love of Christ.</p>
                    </div>
                    {/* <!-- Arrow --> */}
                    <div className="flex justify-center md:hidden">
                        <p className="text-2xl">&#x2193;</p>
                    </div>
                    <div className="bg-white p-4 shadow-md rounded">
                        <p>We envision all teenagers believing, delighting and embodying the love of Christ.</p>
                    </div>

                    {/* <!-- Arrow --> */}
                    <div className="hidden md:flex justify-center">
                        <p className="text-2xl">&#x2193;</p>
                    </div>

                    <div className="flex justify-center">
                        <p className="text-2xl">&#x2193;</p>
                    </div>

                    {/* <!-- Row 4 --> */}
                    <div className="bg-white p-4 shadow-md rounded">
                        <p>We envision all teenagers believing, delighting and embodying the love of Christ.</p>
                    </div>
                    {/* <!-- Arrow --> */}
                    <div className="flex justify-center md:hidden">
                        <p className="text-2xl">&#x2193;</p>
                    </div>
                    <div className="bg-white p-4 shadow-md rounded">
                        <p>We envision all teenagers believing, delighting and embodying the love of Christ.</p>
                    </div>

                    {/* <!-- Arrow --> */}
                    <div className="hidden md:flex justify-center">
                        <p className="text-2xl">&#x2193;</p>
                    </div>

                    <div className="flex justify-center">
                        <p className="text-2xl">&#x2193;</p>
                    </div>

                    {/* <!-- Row 5 --> */}
                    <div className="bg-white p-4 shadow-md rounded">
                        <p>We envision all teenagers believing, delighting and embodying the love of Christ.</p>
                    </div>
                    {/* <!-- Arrow --> */}
                    <div className="flex justify-center md:hidden">
                        <p className="text-2xl">&#x2193;</p>
                    </div>
                    <div className="bg-white p-4 shadow-md rounded">
                        <p>We envision all teenagers believing, delighting and embodying the love of Christ.</p>
                    </div>
                </div>

            </section>



            {/* <!-- Testimonials Section --> */}
            <section className="relative bg-cover bg-center h-fit" style={{ backgroundImage: `url(${groupPhoto})` }}>

                {/* <!-- Overlay --> */}
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>

                <div className="relative container mx-auto py-16 px-6 text-center text-black">
                    <h2 className="text-4xl font-bold mb-12 text-white">What our Parents Have to say about us</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* <!-- Testimonial 1 --> */}
                        <div
                            className="bg-white p-6 rounded-lg shadow-lg relative flex flex-col gap-7 justify-center lg:h-[55vh] top-4">
                            <div className="bg-yellow-400 absolute top-0 left-0 w-[11px] h-[11px] rounded-tl-lg"></div>
                            <div className="bg-[#13A2D1] absolute top-0 right-0 w-[11px] h-[11px] rounded-tr-lg"></div>
                            <diLink
                                to className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-white rounded-full w-10 h-10 flex items-center justify-center">
                                <i className='bx bxs-quote-left'></i>
                            </diLink>
                            <p className="mt-6">Ever since my son has joined loved youngsters, he has been an absolute delight.
                                Always ensuring that he takes an active role and commits to G4 in the best way. G4 has also
                                impacted his life, both in academics and in his social life. I am grateful. Thank you Simbi.</p>
                            <p className="mt-4 font-bold">Mrs Anikulapo</p>
                        </div>

                        {/* <!-- Testimonial 2 --> */}
                        <div className="bg-white p-6 rounded-lg shadow-lg relative flex flex-col gap-7 justify-center lg:h-[60vh]">
                            <div className="bg-yellow-400 absolute top-0 left-0 w-[11px] h-[11px] rounded-tl-lg"></div>
                            <div className="bg-[#13A2D1] absolute top-0 right-0 w-[11px] h-[11px] rounded-tr-lg"></div>
                            <div
                                className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[#13A2D1] text-white rounded-full w-10 h-10 flex items-center justify-center">
                                <i className="bx bxs-quote-left"></i>
                            </div>
                            <p className="mt-6">Ever since my son has joined loved youngsters, he has been an absolute delight.
                                Always ensuring that he takes an active role and commits to G4 in the best way. G4 has also
                                impacted his life, both in academics and in his social life. I am grateful. Thank you Simbi.</p>
                            <p className="mt-4 font-bold">Mr Fajirabo</p>
                        </div>

                        {/* <!-- Testimonial 3 --> */}
                        <div
                            className="bg-white p-6 rounded-lg shadow-lg relative flex flex-col gap-7 justify-center lg:h-[55vh] top-4">
                            <div className="bg-yellow-400 absolute top-0 left-0 w-[11px] h-[11px] rounded-tl-lg"></div>
                            <div className="bg-[#13A2D1] absolute top-0 right-0 w-[11px] h-[11px] rounded-tr-lg"></div>
                            <div
                                className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-white rounded-full w-10 h-10 flex items-center justify-center">
                                <i className="bx bxs-quote-left"></i>
                            </div>
                            <p className="mt-6">Ever since my son has joined loved youngsters, he has been an absolute delight.
                                Always ensuring that he takes an active role and commits to G4 in the best way. G4 has also
                                impacted his life, both in academics and in his social life. I am grateful. Thank you Simbi.</p>
                            <p className="mt-4 font-bold">Mrs Oluwatunse</p>
                        </div>
                    </div>
                </div>
            </section>



            <main className="bg-white py-16">
                {/* <!-- Statistics Section --> */}
                <section className="bg-[#13A2D1] text-white py-16">
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:h-[50vh]">
                        {/* <!-- Stat Card 1 --> */}
                        <div className="p-8 bg-[#13A2D1] rounded-lg shadow-md flex flex-col items-center justify-center gap-4">
                            <h2 className="text-4xl font-bold">1,000+</h2>
                            <p className="mt-2 text-lg">Young Readers</p>
                        </div>
                        {/* <!-- Stat Card 2 --> */}
                        <div className="p-8 bg-[#13A2D1] rounded-lg shadow-md flex flex-col items-center justify-center gap-4">
                            <h2 className="text-4xl font-bold">200+</h2>
                            <p className="mt-2 text-lg">Young Authors</p>
                        </div>
                        {/* <!-- Stat Card 3 --> */}
                        <div className="p-8 bg-[#13A2D1] rounded-lg shadow-md flex flex-col items-center justify-center gap-4">
                            <h2 className="text-4xl font-bold">3+</h2>
                            <p className="mt-2 text-lg">Running Programs</p>
                        </div>
                    </div>
                </section>

                {/* <!-- Blog Section --> */}
                <section className="py-16">
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-8">Blog</h2>
                        <p className="text-lg text-gray-600 mb-12">Latest Books & Articles</p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* <!-- Blog Post 1 --> */}
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <img src="path-to-image1.jpg" alt="The Unboxed Lady" className="rounded-t-lg" />
                                <h3 className="text-xl font-bold mt-4">The Unboxed Lady</h3>
                                <p className="text-gray-600 mt-2">The Unboxed Lady is a young reader's inspiration...</p>
                                <Link to="#" className="text-[#13A2D1] font-semibold mt-4 inline-block">Read More</Link>
                            </div>
                            {/* <!-- Blog Post 2 --> */}
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <img src="path-to-image2.jpg" alt="5 Resources You Need to Start a Business"
                                    className="rounded-t-lg" />
                                <h3 className="text-xl font-bold mt-4">5 Resources You Need to Start a Business</h3>
                                <p className="text-gray-600 mt-2">Exploring the best resources to help you become...</p>
                                <Link to="#" className="text-[#13A2D1] font-semibold mt-4 inline-block">Read More</Link>
                            </div>
                            {/* <!-- Blog Post 3 --> */}
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <img src="path-to-image3.jpg" alt="Jesus and a Little Child's Heart" className="rounded-t-lg" />
                                <h3 className="text-xl font-bold mt-4">Jesus and a Little Child's Heart</h3>
                                <p className="text-gray-600 mt-2">A lesson in faith and humility...</p>
                                <Link to="#" className="text-[#13A2D1] font-semibold mt-4 inline-block">Read More</Link>
                            </div>
                        </div>

                        <button
                            className="mt-12 bg-[#13A2D1] text-white font-semibold py-3 px-6 rounded-lg shadow-lg duration-300 hover:bg-blue-600">
                            Read More
                        </button>
                    </div>
                </section>
            </main>
        </div >
    )
}

export default Home