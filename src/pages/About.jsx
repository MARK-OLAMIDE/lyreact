import React from 'react'
import 'boxicons/css/boxicons.min.css';

const About = () => {
    return (
        <section>

            {/* <!-- Responsive Section --> */}
            <section className="bg-[#13A2D1] flex justify-end items-center h-screen md:h-[80vh] px-5 md:px-10">
                <div className="bg-white p-5 md:p-10 rounded-lg shadow-lg text-center max-w-xs md:max-w-md h-auto md:h-[80%]">
                    <p className="text-2xl md:text-3xl font-bold">1 John 4:10</p>
                    <p className="text-lg md:text-3xl font-bold mt-4">
                        {"This is real love—not that we loved God, but that he loved us and sent his Son as a sacrifice to take away our sins. {NLT}"}</p>
                </div>
            </section>


            {/* <!-- Section 2 --> */}

            <section className="bg-white py-12">
                <div className="flex items-center justify-center flex-col">
                    <div className="h-[200px] w-[200px] md:h-[400px] md:w-[400px] rounded-full bg-[#13A2D1]">
                    </div>
                    <p className="py-6 font-semibold text-lg md:text-[22px] text-center">A STORY WRITTEN FOR EVERY <span
                        className="text-[#13A2D1]">TEENAGER</span> TO UNDERSTAND THE <span className="text-[#13A2D1]">LOVED
                            YOUNGSTERS</span> VISION</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 p-5 md:p-10 gap-5 md:gap-10 text-center">
                    <p className="font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore quo mollitia
                        molestias
                        saepe iste quia consectetur adipisci, laboriosam cumque molestiae magnam aperiam aspernatur, voluptatem
                        fugiat? Quas optio incidunt unde eligendi?</p>
                    <p className="font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore quo mollitia
                        molestias
                        saepe iste quia consectetur adipisci, laboriosam cumque molestiae magnam aperiam aspernatur, voluptatem
                        fugiat? Quas optio incidunt unde eligendi?</p>
                    <p className="font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore quo mollitia
                        molestias
                        saepe iste quia consectetur adipisci, laboriosam cumque molestiae magnam aperiam aspernatur, voluptatem
                        fugiat? Quas optio incidunt unde eligendi?</p>
                    <p className="font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore quo mollitia
                        molestias
                        saepe iste quia consectetur adipisci, laboriosam cumque molestiae magnam aperiam aspernatur, voluptatem
                        fugiat? Quas optio incidunt unde eligendi?</p>
                    <p className="font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore quo mollitia
                        molestias
                        saepe iste quia consectetur adipisci, laboriosam cumque molestiae magnam aperiam aspernatur, voluptatem
                        fugiat? Quas optio incidunt unde eligendi?</p>
                    <p className="font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore quo mollitia
                        molestias
                        saepe iste quia consectetur adipisci, laboriosam cumque molestiae magnam aperiam aspernatur, voluptatem
                        fugiat? Quas optio incidunt unde eligendi?</p>
                    <p className="font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore quo mollitia
                        molestias
                        saepe iste quia consectetur adipisci, laboriosam cumque molestiae magnam aperiam aspernatur, voluptatem
                        fugiat? Quas optio incidunt unde eligendi?</p>
                    <p className="font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore quo mollitia
                        molestias
                        saepe iste quia consectetur adipisci, laboriosam cumque molestiae magnam aperiam aspernatur, voluptatem
                        fugiat? Quas optio incidunt unde eligendi?</p>
                </div>
                <div className="p-5 md:p-10 font-semibold text-right">
                    <p>I CAN'T WAIT TO HAVE YOU ON BOARD</p>
                    <p>MOSIMILEOLUWA</p>
                </div>
            </section>

            {/* <!-- Star section --> */}
            <section className="bg-[#13A2D1] text-white">
                <div className="container mx-auto py-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">CORE VALUES</h1>
                    <div className="flex flex-col lg:flex-row justify-around items-center lg:space-x-6">
                        {/* <!-- Star 1 --> */}
                        <div
                            className="text-center bg-[url('./assets/star1.png')] relative w-[95vw] lg:w-[35vw] h-[70vh] lg:h-[70vh] bg-contain bg-center bg-no-repeat mb-8 md:mb-0">
                            <div
                                className="text-black flex items-center flex-col absolute justify-center mx-auto top-[4%] lg:top-[7%] left-[20%] w-[60%] h-full">
                                <p className="text-lg md:text-4xl lg:text-xl font-semibold mb-3"><span
                                    className="text-[#13A2D1]">Love</span> is our
                                    <span className="text-[#13A2D1]">Identity</span>
                                </p>
                                <p className="font-normal w-[70%] text-sm md:text-3xl lg:text-base">We have received Christ's nature
                                    of love.
                                </p>
                            </div>
                        </div>
                        {/* <!-- Star 2 --> */}
                        <div
                            className="text-center bg-[url('./assets/star1.png')] relative w-[95vw] lg:w-[35vw] h-[70vh] lg:h-[70vh] bg-contain bg-center bg-no-repeat mb-8 md:mb-0">
                            <div
                                className="text-black flex items-center flex-col absolute justify-center mx-auto top-[4%] md:top-[7%] left-[20%] w-[60%] h-full">
                                <p className="text-lg md:text-4xl lg:text-xl font-semibold"><span className="text-[#13A2D1]">We</span>
                                    are<span className="text-[#13A2D1]"> made</span> to <span className="text-[#13A2D1]">love</span></p>
                                <p className="font-normal w-[70%] text-sm md:text-3xl lg:text-base">We pour out the love of Christ
                                    in our hearts
                                    to the world.</p>
                            </div>
                        </div>
                        {/* <!-- Star 3 --> */}
                        <div
                            className="text-center bg-[url('./assets/star1.png')] relative w-[95vw] lg:w-[35vw] h-[70vh] lg:h-[70vh] bg-contain bg-center bg-no-repeat">
                            <div
                                className="text-black flex items-center flex-col absolute justify-center mx-auto top-[5%] md:top-[7%] left-[20%] w-[60%] h-full">
                                <p className="text-lg md:text-4xl lg:text-xl font-semibold"><span className="text-[#13A2D1]">Love</span>
                                    binds us as
                                    a <span className="text-[#13A2D1]">family</span></p>
                                <p className="font-normal w-[70%] text-sm md:text-3xl lg:text-base">We are one body, we believe in
                                    one Christ
                                    and we are immersed into one love.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Thumbnail section --> */}
            <section className="bg-white">
                <div className="container mx-auto py-12 h-[100vh]">
                    <iframe className="w-full h-full" src="https://www.youtube.com/embed/6eDW9Jw7Uew?si=C3XMF7gAS9RIdWVs"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <p className="font-bold text-center text-4xl">YOUTUBE THUMBNAIL</p>

                <div className="flex text-white flex-col items-center min-h-screen mx-10 my-10 bg-[#13A2D1]">
                    <h1 className="text-2xl md:text-3xl py-10 lg:text-7xl font-bold mb-4 lg:mb-6">OUR CREED</h1>
                    <div className="text-center text-white px-4 py-10 md:px-8 lg:px-16 w-full h-full">
                        <p className="leading-loose text-sm md:text-base lg:text-4xl mb-2">Abba’s love found us, now He is our
                            treasure</p>
                        <p className="leading-loose text-sm md:text-base lg:text-4xl mb-2">Abba rejoices over us with joy, now we
                            delight in Him</p>
                        <p className="leading-loose text-sm md:text-base lg:text-4xl mb-2">Abba’s light is shining in our hearts,
                            now we light up the world</p>
                        <p className="leading-loose text-sm md:text-base lg:text-4xl mb-2">Abba’s spirit is burning in our bones,
                            now we set the world ablaze for our King</p>
                        <p className="leading-loose text-sm md:text-base lg:text-4xl mb-2">We are Young and Loved,</p>
                        <p className="leading-loose text-sm md:text-base lg:text-4xl">We are <span className="font-bold">LOVED
                            YOUNGSTERS</span>.</p>
                    </div>

                </div>
            </section>


        </section>

    )
}

export default About