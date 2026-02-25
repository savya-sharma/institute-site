import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import Footer from '../sections/Footer';

const Contact = () => {
  return (
    <>
      {/* First section height reduced to half (was min-h-screen h-screen, now min-h-[50vh] h-[50vh]) */}
      <section className="hero w-full min-h-[70vh] h-[50vh] text-white">
        <div className='flex h-full items-center justify-center px-4 md:px-8'>
          <div className="flex flex-col items-center text-center gap-6 md:gap-8 w-full max-w-8xl">
            <span className="text-[#E04200] text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] font-semibold">LEARN. BUILD. GETPLACED.</span>
            <h1 className="font-[regular] leading-snug sm:leading-tight md:leading-none text-[2rem] sm:text-[2.7rem] md:text-[4rem] font-bold">
              Start Your <br className="hidden sm:block" />
              <span className="relative border border-[#E04200] bg-[#E04200]/30 px-2 py-1 inline-block align-baseline">
                <span className="absolute top-0 left-0 w-1 h-1 bg-white -translate-x-1/2 -translate-y-1/2"></span>
                <span className="absolute top-0 right-0 w-1 h-1 bg-white translate-x-1/2 -translate-y-1/2"></span>
                <span className="absolute bottom-0 left-0 w-1 h-1 bg-white -translate-x-1/2 translate-y-1/2"></span>
                <span className="absolute bottom-0 right-0 w-1 h-1 bg-white translate-x-1/2 translate-y-1/2"></span>
                Learning Journey
              </span>
            </h1>
            <p className="text-[1rem] sm:text-[1.2rem] md:text-[1.5rem] opacity-90">
              Fill out the form below and our team will get in touch <br className="hidden sm:block" /> with you to guide you through the next steps of your learning journey.
            </p>
          </div>
        </div>
      </section>

      <section className='w-full min-h-screen bg-black p-4 sm:p-6 md:p-[5rem]'>
        <div className="flex flex-col items-center text-white">
          <h1 className="text-center">
            <span className="relative border border-[#E04200] bg-[#E04200]/30 px-3 sm:px-5 py-[.1rem] inline-block align-baseline">
              <span className="absolute top-0 left-0 w-1 h-1 bg-white -translate-x-1/2 -translate-y-1/2"></span>
              <span className="absolute top-0 right-0 w-1 h-1 bg-white translate-x-1/2 -translate-y-1/2"></span>
              <span className="absolute bottom-0 left-0 w-1 h-1 bg-white -translate-x-1/2 translate-y-1/2"></span>
              <span className="absolute bottom-0 right-0 w-1 h-1 bg-white translate-x-1/2 translate-y-1/2"></span>
              Meet the Team
            </span>
          </h1>
          <div className="text-center mt-4 text-[1.2rem] xs:text-[1.3rem] sm:text-[1.7rem] md:text-[2rem] lg:text-[2.7rem]">
            <h1>Shaping careers with knowledge and experience.</h1>
          </div>
        </div>

        <div className="w-full h-auto md:h-screen flex flex-col md:flex-row items-center gap-6 md:gap-2 p-2 sm:p-4 md:p-4 justify-center bg-gradient-to-tr from-[#E04200] via-[#2C2C2C] to-[#181818] rounded-lg mt-6 md:mt-8">
          <div className="w-full md:w-[40%] h-56 md:h-full bg-transparent rounded-lg flex items-center justify-center mb-4 md:mb-0">
            <img
              className="w-full h-full object-cover rounded-xl shadow-lg"
              src="/images/footer-bg3.jpg"
              alt=""
            />
          </div>

          <div className="w-full md:w-[60%] h-auto md:h-full flex items-center justify-center">
            <form
              className="
                w-full h-full flex flex-col gap-4 p-4 sm:p-6 md:p-8
                bg-gradient-to-br from-[rgba(40,40,40,0.66)] via-[rgba(26,26,26,0.80)] to-[rgba(16,16,16,0.86)]
                backdrop-blur-xl shadow-2xl rounded-2xl
                border border-[rgba(255,255,255,0.13)]
              "
              style={{
                boxShadow: '0 8px 40px 0 rgba(224,66,0,0.13), 0 2px 24px 0 rgba(16,16,16,0.25)',
              }}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="
                    w-full p-3 rounded-xl
                    bg-black/25 text-white placeholder:text-[#bbbbbb]
                    border border-white/10
                    focus:outline-none focus:ring-2 focus:ring-[#E04200]/70
                    transition
                  "
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="
                    w-full p-3 rounded-xl
                    bg-black/25 text-white placeholder:text-[#bbbbbb]
                    border border-white/10
                    focus:outline-none focus:ring-2 focus:ring-[#E04200]/70
                    transition
                  "
                />
              </div>
              <input
                type="text"
                placeholder="Phone Number"
                className="
                  w-full p-3 rounded-xl
                  bg-black/25 text-white placeholder:text-[#bbbbbb]
                  border border-white/10
                  focus:outline-none focus:ring-2 focus:ring-[#E04200]/70
                  transition
                "
              />
              <input
                type="text"
                placeholder="Course Interest"
                className="
                  w-full p-3 rounded-xl
                  bg-black/25 text-white placeholder:text-[#bbbbbb]
                  border border-white/10
                  focus:outline-none focus:ring-2 focus:ring-[#E04200]/70
                  transition
                "
              />
              <textarea
                placeholder="Your Message or Query"
                className="
                  w-full p-3 rounded-xl
                  bg-black/25 text-white placeholder:text-[#bbbbbb]
                  border border-white/10
                  focus:outline-none focus:ring-2 focus:ring-[#E04200]/70
                  h-[120px] md:h-[150px] resize-none transition
                "
              />
              <button
                className="
                  w-full p-3
                  cursor-pointer
                  bg-gradient-to-r from-[#E04200] to-[#8C2A00]
                  text-white rounded-xl font-bold
                  hover:from-[#C03900] hover:to-[#5B1400]
                  shadow-lg
                  ring-1 ring-[#E04200]/20
                  transition-colors duration-300
                "
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Contact
