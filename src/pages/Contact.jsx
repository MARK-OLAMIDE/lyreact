import React from 'react'

const Contact = () => {
  return (
    <section>
        {/* <!-- Contact Form Section --> */}
    <section class="py-12 px-4 md:px-10 lg:px-20 bg-[#13A2D1] opacity-50 relative">
        <div class="container mx-auto">
            <div class="flex flex-col justify-center items-center">
                {/* <!-- Contact Icon --> */}
                <div class="mb-5">
                    <i class='bx bx-envelope text-[120px] text-white'></i>
                </div>

                {/* <!-- Contact Form --> */}
                <form class="w-full max-w-lg space-y-6">
                    {/* <!-- Name Field --> */}
                    <div class="flex flex-col">
                        <label for="name" class="text-white text-lg font-semibold mb-2">NAME</label>
                        <input id="name" type="text" placeholder="Enter your full name"
                            class="w-full p-4 rounded-lg bg-white border-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 text-gray-800" />
                    </div>

                    {/* <!-- Email Field --> */}
                    <div class="flex flex-col">
                        <label for="email" class="text-white text-lg font-semibold mb-2">Email</label>
                        <input id="email" type="email" placeholder="Enter your email"
                            class="w-full p-4 rounded-lg bg-white border-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 text-gray-800" />
                    </div>

                    {/* <!-- Message Field --> */}
                    <div class="flex flex-col relative">
                        <label for="message" class="text-white text-lg font-semibold mb-2">Message</label>
                        <textarea id="message" rows="5" placeholder="Tell us something, we want to hear from you"
                            class="w-full p-4 rounded-lg bg-white border-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 text-gray-800"></textarea><i
                            class='bx bxs-message-dots absolute top-[90%] left-[94%] md:left-[96%]'></i>
                    </div>

                    {/* <!-- Submit Button --> */}
                    <div class="flex justify-center mt-6">
                        <button type="submit"
                            class="bg-white text-blue-500 font-bold py-3 px-8 rounded-lg hover:bg-blue-100">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
    </section>
  )
}

export default Contact