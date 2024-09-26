import React from 'react'
import { Link } from 'react-router-dom'
import jumpImage from "../assets/JumpImage [attachment-post-thumbnail].png"
import spotifyIcon from "../assets/teenyicons_spotify-outline.png"
import mailChimp from "../assets/cib_mailchimp.png"
import rectangleImage1 from "../assets/Rectangle 31.png"
import rectangleImage2 from "../assets/Rectangle 32.png"
import rectangleImage3 from "../assets/Rectangle 33.png"
import rectangleImage4 from "../assets/Rectangle 34.png"

const Resources = () => {
    return (
        <section>
            {/* <!-- Books Section --> */}
            <section class="bg-white p-14">
                {/* <!-- Header --> */}
                <h1 class="text-2xl md:text-4xl font-bold mb-2 md:w-[50%] text-center">Welcome to our Treasure Chest over <br /> at   <Link to="#" class="text-[#13A2D1] ">Loved Youngsters</Link>
                </h1>
                <h2 class="text-4xl md:text-5xl font-bold text-[#3DBFF0] pt-14 text-center">LY Books</h2>
            </section>


            <section class="bg-[#83CBE2] py-12">
                <div class="container mx-auto text-center">


                    {/* <!-- Book Images --> */}
                    <div class="flex flex-wrap justify-center gap-6 py-6">
                        <div class="w-full md:w-1/5">
                            <img src={rectangleImage1} alt="Book 1" class="rounded-lg shadow-lg mx-auto" />
                        </div>
                        <div class="w-full md:w-1/5">
                            <img src={rectangleImage2} alt="Book 2" class="rounded-lg shadow-lg mx-auto" />
                        </div>
                        <div class="w-full md:w-1/5">
                            <img src={rectangleImage3} alt="Book 3" class="rounded-lg shadow-lg mx-auto" />
                        </div>
                        <div class="w-full md:w-1/5">
                            <img src={rectangleImage4} alt="Book 3" class="rounded-lg shadow-lg mx-auto" />
                        </div>
                    </div>

                    {/* <!-- CTA Button --> */}
                    <div class="mt-10">
                        <Link to="#" class="bg-white text-[#83CBE2] font-semibold py-6 px-8 rounded-full hover:bg-[#0D7A9B] duration-500">
                            GET OUR BOOKS NOW
                        </Link>
                    </div>
                </div>
            </section>

            <section class="py-12 bg-white">
                {/* <!-- Section title --> */}
                <h2 class="text-center text-[2rem] md:text-5xl font-bold text-[#55c0e0] mb-10">LY Sermons</h2>

                {/* <!-- Cards Container --> */}
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8 lg:px-12">
                    {/* <!-- Card 1 --> */}
                    <div class="bg-[#9c3b2f] rounded-lg p-6 shadow-md flex flex-col items-center">
                        <div class="bg-gray-200 w-full h-48 rounded-lg mb-4"></div>
                        <div class="text-center text-white">
                            <h3 class="font-bold text-lg mb-2">Let's talk about your heart</h3>
                            <p class="text-sm text-gray-300 mb-4">Loved youngsters Media</p>
                            <div class="flex items-center justify-center">
                                <img src={spotifyIcon} alt="Spotify Icon" class="w-5 h-5 mr-2" />
                                <p class="text-sm">Spotify</p>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Card 2 --> */}
                    <div class="bg-[#9c3b2f] rounded-lg p-6 shadow-md flex flex-col items-center">
                        <div class="bg-gray-200 w-full h-48 rounded-lg mb-4"></div>
                        <div class="text-center text-white">
                            <h3 class="font-bold text-lg mb-2">Let's talk about your heart</h3>
                            <p class="text-sm text-gray-300 mb-4">Loved youngsters Media</p>
                            <div class="flex items-center justify-center">
                                <img src={spotifyIcon} alt="Spotify Icon" class="w-5 h-5 mr-2" />
                                <p class="text-sm">Spotify</p>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Card 3 --> */}
                    <div class="bg-[#9c3b2f] rounded-lg p-6 shadow-md flex flex-col items-center">
                        <div class="bg-gray-200 w-full h-48 rounded-lg mb-4"></div>
                        <div class="text-center text-white">
                            <h3 class="font-bold text-lg mb-2">Let's talk about your heart</h3>
                            <p class="text-sm text-gray-300 mb-4">Loved youngsters Media</p>
                            <div class="flex items-center justify-center">
                                <img src={spotifyIcon} alt="Spotify Icon" class="w-5 h-5 mr-2" />
                                <p class="text-sm">Spotify</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="py-12 bg-white">
                {/* <!-- Section title --> */}
                <h2 class="text-center text-[2rem] md:text-5xl font-bold text-[#55c0e0] mb-10">LY Articles</h2>

                {/* <!-- Articles Container --> */}
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-8 lg:px-12">
                    {/* <!-- Article 1 --> */}
                    <div class="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={jumpImage} alt="Article Images" class="w-full object-cover" />
                        <div class="p-4 flex flex-col gap-[20px]">
                            <p class="text-red-500 text-sm mb-1">March 8, 2022</p>
                            <h3 class="font-bold text-xl mb-2">The Unboxed Lady</h3>
                            <p class="text-gray-700 mb-4">
                                The buzz words in recent times have been “Feminism”, “Gender equality”, “the future-forward female”, but
                                what do these words really mean?
                            </p>
                            <Link to="#" class="text-red-500 font-bold text-sm">READ MORE</Link>
                        </div>
                    </div>

                    {/* <!-- Article 2 --> */}
                    <div class="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={jumpImage} alt="Article Image1" class="w-full object-cover" />
                        <div class="p-4 flex flex-col gap-[20px]">
                            <p class="text-red-500 text-sm mb-1">March 8, 2022</p>
                            <h3 class="font-bold text-xl mb-2">The Unboxed Lady</h3>
                            <p class="text-gray-700 mb-4">
                                The buzz words in recent times have been “Feminism”, “Gender equality”, “the future-forward female”, but
                                what do these words really mean?
                            </p>
                            <Link to="#" class="text-red-500 font-bold text-sm">READ MORE</Link>
                        </div>
                    </div>

                    {/* <!-- Article 3 --> */}
                    <div class="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={jumpImage} alt="Article Image2" class="w-full object-cover" />
                        <div class="p-4 flex flex-col gap-[20px]">
                            <p class="text-red-500 text-sm mb-1">March 8, 2022</p>
                            <h3 class="font-bold text-xl mb-2">The Unboxed Lady</h3>
                            <p class="text-gray-700 mb-4">
                                The buzz words in recent times have been “Feminism”, “Gender equality”, “the future-forward female”, but
                                what do these words really mean?
                            </p>
                            <Link to="#" class="text-red-500 font-bold text-sm">READ MORE</Link>
                        </div>
                    </div>

                    {/* <!-- Article 4 --> */}
                    <div class="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={jumpImage} alt="Article Image3" class="w-full object-cover" />
                        <div class="p-4 flex flex-col gap-[20px]">
                            <p class="text-red-500 text-sm mb-1">March 8, 2022</p>
                            <h3 class="font-bold text-xl mb-2">The Unboxed Lady</h3>
                            <p class="text-gray-700 mb-4">
                                The buzz words in recent times have been “Feminism”, “Gender equality”, “the future-forward female”, but
                                what do these words really mean?
                            </p>
                            <Link to="#" class="text-red-500 font-bold text-sm">READ MORE</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section class="py-12 bg-white">
                {/* <!-- Section title --> */}
                <h2 class="text-center text-[2rem] md:text-5xl font-bold text-gray-500 mb-8">Subscribe to our Newsletters</h2>

                {/* <!-- Form Container --> */}
                <div class="mx-auto w-[90%]">
                    <form action="#" class="space-y-6">
                        {/* <!-- Full Name Input --> */}
                        <div>
                            <label for="full-name" class="block text-sm md:text-2xl font-thin text-gray-600">Full Name</label>
                            <input type="text" id="full-name"
                                class="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Full Name" />
                        </div>

                        {/* <!-- Email Address Input --> */}
                        <div>
                            <label for="email" class="block text-sm md:text-2xl font-thin text-gray-600">Email Address</label>
                            <input type="email" id="email"
                                class="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Email Address" />
                        </div>

                        <div class="flex justify-around mt-6 p-4 gap-4">

                            {/* <!-- Submit Button --> */}
                            <button type="submit"
                                class="bg-[#00aaff] text-sm md:text-2xl text-[#6B7280] font-bold py-2 px-5 md:px-14 rounded-md hover:bg-[#008ecc] focus:outline-none focus:ring-2 focus:ring-blue-500">
                                SUBSCRIBE
                            </button>


                            {/* <!-- Mailchimp Branding --> */}
                            <div class="flex items-center md:gap-3">
                                <img src={mailChimp} alt="Mailchimp Logo" class="w-20" />
                                    <p class="text-[#6B7280] ml-3 text-sm md:text-2xl font-extrabold">INTUIT <br /> MAILCHIMP</p>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </section>
    )
}

export default Resources