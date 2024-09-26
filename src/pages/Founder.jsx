import React from 'react'
import styled from 'styled-components'
import founderImage from "../assets/founder.jpg";

const Founder = () => {
    return (
        <Wrapper>
            <section className="flex justify-center items-center min-h-screen bg-gray-100">

                <div className="mx-auto w-full bg-white p-6 md:p-12 rounded-lg shadow-lg flex flex-col md:flex-row items-start">

                    {/* <!-- Image Section --> */}
                    <div className="w-full mb-6 md:mb-0">
                        <div className="border-4 border-blue-400 rounded-md">
                            <img src={founderImage} alt="Profile Image1" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* <!-- Text Section --> */}
                    <div className="w-full md:pl-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">MOSIMILEOLUWA OLUNLOYO</h2>
                        <p className="text-gray-700 mb-4">Ultrices tincidunt lorem. Sed quam faucibus vitae Nam tincidunt dolor non,
                            Nullam tincidunt lorem. Lobortis, scelerisque tincidunt non. Turpis libero, ex maximus Nunc
                            convallis. Dui. Donec efficitur, facilisis vitae non, vitae sit nisl.</p>
                        <p className="text-gray-700 mb-4">Placerat ex elit. Id amet, sit non Nullam tincidunt nec quis hendrerit
                            odio laoreet at, Sed quis leo. Felis, elementum turpis malesuada vehicula, ultrices sit viverra
                            tortor. Eget dui Nullam Ut Praesent placerat Morbi elementum Nunc sit.</p>
                        <p className="text-gray-700">In elementum amet, tincidunt risus Ut amet, quis ex placerat odio ipsum
                            faucibus non, odio Sed non, adipiscing est. Dolor amet, urna Nam quis porta elit consectetur.</p>
                    </div>

                </div>

            </section>

            <section className="relative bg-[#13A2D1] min-h-screen flex items-center justify-center overflow-hidden">
                {/* <!-- Circles --> */}
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
                <div className="circle circle-3"></div>
                <div className="circle circle-4"></div>

                {/* <!-- Text --> */}
                <div className="relative text-white p-6 w-[90%]">
                    <p className="leading-relaxed">
                        Eget ex orci at, venenatis adipiscing elementum tortor. Hendrerit tincidunt eget Sed libero, scelerisque
                        laoreet lacus tincidunt nisi Lorem risus Praesent efficitur. Eget dui quis lorem, vitae odio faucibus
                        porta Ut facilisis dignissim.
                    </p>
                    <p className="leading-relaxed mt-4">
                        Quis nisl scelerisque dolor gravida Lorem lorem consectetur nulla, nisi quam tincidunt commodo tincidunt
                        convallis ipsum ex Nullam Sed id fringilla Donec Lorem sed nisi venenatis dui scelerisque tincidunt elit
                        non Nullam lacus id nec.
                    </p>
                    <p className="leading-relaxed mt-4">
                        Placerat ipsum id ullamcorper felis, varius viverra vehicula est in non libero non lorem massa libero
                        ipsum amet venenatis Vestibulum libero libero vel orci Morbi varius Quisque ac convallis facilisis
                        Quisque porta Nullam dui.
                    </p>
                    <p className="leading-relaxed mt-4">
                        Nec gravida sodales faucibus vitae Ut quis Quisque malesuada viverra tortor sit dolor scelerisque
                        consectetur non vel Quisque non ultrices hendrerit non ex eget sollicitudin sed dui amet adipiscing
                        lobortis non ex turpis Ut.
                    </p>
                    <p className="leading-relaxed mt-4">
                        Quis nisl scelerisque dolor gravida Lorem lorem consectetur nulla, nisi quam tincidunt commodo tincidunt
                        convallis ipsum ex Nullam Sed id fringilla Donec Lorem sed nisi venenatis dui scelerisque tincidunt elit
                        non Nullam lacus id nec.
                    </p>
                    <p className="leading-relaxed mt-4">
                        Placerat ipsum id ullamcorper felis, varius viverra vehicula est in non libero non lorem massa libero
                        ipsum amet venenatis Vestibulum libero libero vel orci Morbi varius Quisque ac convallis facilisis
                        Quisque porta Nullam dui.
                    </p>
                    <p className="leading-relaxed mt-4">
                        Nec gravida sodales faucibus vitae Ut quis Quisque malesuada viverra tortor sit dolor scelerisque
                        consectetur non vel Quisque non ultrices hendrerit non ex eget sollicitudin sed dui amet adipiscing
                        lobortis non ex turpis Ut.
                    </p>
                </div>

            </section >

            {/* <!-- Her Services Section --> */}
            < section className="py-12 px-4 md:px-10 lg:px-20" >
                <div className="container mx-auto">
                    {/* <!-- Title --> */}
                    <div className="flex items-center gap-10">
                        <h2 className="text-2xl md:text-5xl font-bold text-black mb-2 sm:mb-0 sm:mr-4">
                            HER SERVICES
                        </h2>
                        {/* <!-- Right Arrow --> */}
                        <div className="hidden md:block text-[#13A2D1] text-xl md:text-5xl">
                            <span>&#9654;</span>
                        </div>
                    </div>
                    <p className="text-gray-400 text-xl my-4">
                        Services
                    </p>

                    {/* <!-- Content --> */}
                    <div className="flex flex-col md:flex-row justify-center gap-10 items-center mt-8 space-y-6 md:space-y-0">

                        {/* <!-- Service Content --> */}
                        <div className="bg-[#13A2D1] text-white p-6 h-[70vh] rounded-lg md:w-2/3 lg:w-1/2">
                            <div className="flex justify-center gap-7 items-center mb-4">
                                <div className="bg-white h-4 w-4 rounded-[50%]"> </div>
                                <p className="text-lg md:text-4xl font-semibold text-center">
                                    Private Parental Guide
                                </p>
                            </div>
                            <p className="text-white text-sm md:text-lg">
                                placerat. ipsum id In ullamcorper felis, varius viverra vehicula,
                                est. in non libero, non lorem. massa libero, ipsum amet, venenatis Vestibulum libero,
                                libero, vel orci Morbi varius Quisque ac convallis facilisis Quisque porta Nullam dui.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ut facere! Harum soluta in non, iusto repellendus optio eligendi, incidunt rem quia, modi nemo! Laboriosam eos voluptates iusto quae accusamus?
                            </p>
                        </div>

                        {/* <!-- Right Arrow --> */}
                        <div className="hidden md:block text-[#13A2D1] text-xl md:text-5xl">
                            <span>&#9654;</span>
                        </div>
                    </div>
                </div>
            </section >
        </Wrapper>
    )
}

export default Founder

const Wrapper = styled.div`
    .circle {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.1);
            /* Transparent white */
            border: 2px solid rgba(255, 255, 255, 0.5);
        }

        .circle-1 {
            width: 300px;
            height: 300px;
            top: 50px;
            left: 100px;
        }

        .circle-2 {
            width: 400px;
            height: 400px;
            top: 200px;
            right: 150px;
        }

        .circle-3 {
            width: 250px;
            height: 250px;
            bottom: 100px;
            left: 200px;
        }

        .circle-4 {
            width: 350px;
            height: 350px;
            bottom: 250px;
            right: 100px;
        }
`