import React from 'react'
import { Link } from 'react-router-dom'
import googleMeetIcon from "../assets/google meet.png"

const Devotional = () => {
    return (
        <section>
            <section class="bg-[#83CBE2] min-h-screen p-4">
                {/* <!-- First Section --> */}
                <div class="mb-8">
                    <div class="flex flex-col lg:flex-row gap-5 items-start lg:items-center">
                        <h1 class="text-[4rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] font-bold text-white mb-2">
                            JOIN US
                        </h1>
                        <p class="text-white mb-2 text-[2rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem]">
                            on our daily devotional platform <br /> every Monday - Friday
                        </p>
                    </div>

                    <div class="mb-2 flex items-center gap-7">
                        {/* <!-- Icon (optional placeholder) --> */}
                        <img src={googleMeetIcon} alt="Platform icon" class="w-[3rem] h-[3rem] sm:w-[4rem] sm:h-[4rem]" />
                        {/* <!-- Link --> */}
                        <Link to="https://bit.ly/LYDevotionalTime" target="_blank"
                            class="text-black font-bold underline text-[20px] sm:text-[30px] md:text-[35px] lg:text-[40px]">
                            bit.ly/LYDevotionalTime
                        </Link>
                    </div>

                    <p class="text-black font-bold text-[20px] sm:text-[30px] md:text-[35px] lg:text-[40px]">
                        8:30-9:00PM
                    </p>
                </div>

                {/* <!-- Second Section --> */}
                <div class="mt-8">
                    <p class="text-[4rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] text-white font-semibold mb-2">
                        What's prayer without the word?
                    </p>
                    <p class="text-[2rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] text-white mb-2">
                        Join us every Thursday for a special time of bible study or as we call it, <br /> KINGDOM DIET
                    </p>

                    <div class="mb-2 flex items-center gap-7">
                        {/* <!-- Icon (optional placeholder) --> */}
                        <img src={googleMeetIcon} alt="Platform icon" class="w-[3rem] h-[3rem] sm:w-[4rem] sm:h-[4rem]" />
                        {/* <!-- Link --> */}
                        <Link to="https://bit.ly/Kingdomdiet" target="_blank"
                            class="text-black font-bold underline text-[20px] sm:text-[30px] md:text-[35px] lg:text-[40px]">
                            bit.ly/Kingdomdiet
                        </Link>
                    </div>

                    <p class="text-black font-bold text-[20px] sm:text-[30px] md:text-[35px] lg:text-[40px]">
                        8:30-9:30PM
                    </p>
                </div>
            </section>
        </section>
    )
}

export default Devotional