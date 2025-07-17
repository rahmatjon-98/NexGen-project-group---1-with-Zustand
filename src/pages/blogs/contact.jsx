import React from "react";

const Contact = () => {
  return (
    <>
      <main className="p-5 grid md:grid-cols-5 gap-5 ">
        <section className="bg-[#1A1A1A] p-5 rounded-2xl md:col-span-3">
          <div className=" mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              GET IN TOUCH
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold ">
              WITH US TODAY!
            </h2>
          </div>

          <div className="max-w-3xl  mb-16">
            <p className="text-lg text-[#676665]">
              At NeuGen, we value your inquiries, feedback, and collaborations.
              Whether you are interested in our digital services, have questions
              about our projects, or want to explore potential partnerships, we
              encourage you to reach out to our dedicated team.
            </p>
          </div>

          <div className="text-center bg-black p-3 rounded-2xl">
            <p className="text-lg ">
              MARKETING • WEBSITE DESIGN • BRANDING • WEBSITE DEVELOPMENT •
              MOBILE APP DEVELOPMENT • DIGITAL
            </p>
          </div>
        </section>

        <section className="md:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 ">
            <div className="p-6 rounded-lg text-center bg-[#1F1F1F]">
              <p className="text-lg mt-2">CLIENTS</p>
              <p className="text-4xl font-bold text-[#DA9E8B]">200+</p>
            </div>

            <div className="p-6 rounded-lg text-center bg-[#1F1F1F]">
              <p className="text-lg">PROJECTS</p>
              <p className="text-4xl font-bold text-[#DA9E8B]">280+</p>
            </div>

            <div className="p-6 rounded-lg text-center bg-[#1F1F1F]">
              <p className="text-lg">HAPPY CLIENTS </p>
              <p className="text-4xl font-bold text-[#DA9E8B]">280+</p>
            </div>

            <div className="p-6 rounded-lg text-center bg-[#1F1F1F]">
              <p className="text-lg">FOLLOWER</p>
              <p className="text-4xl font-bold text-[#DA9E8B] mt-2">420K</p>
            </div>

            <div className="p-6 rounded-lg text-center bg-[#1F1F1F] md:col-span-2">
              <p className="text-lg">Years Of Experience</p>
              <p className="text-4xl font-bold text-[#DA9E8B] mt-2">10+</p>
            </div>
          </div>
        </section>
      </main>

      <main className=" p-5 ">
        <section className=" grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8 bg-[#1A1A1A] p-5 rounded-2xl">
            <h2 className="text-2xl font-bold">CONTACT INFORMATION</h2>

            <div className="space-y-1">
              <h3 className="text-lg font-semibold">General Inquiries</h3>
              <p className="p-5 rounded-2xl bg-[#1F1F1F]">INFO@NEXGEN.COM</p>
            </div>

            <div className="space-y-1">
              <h3 className="text-lg font-semibold">Business Collaborations</h3>
              <p className="p-5 rounded-2xl bg-[#1F1F1F]">
                PARTNERSHIP@NEXGEN.COM
              </p>
            </div>

            <div className="space-y-1">
              <h3 className="text-lg font-semibold">Job Opportunities</h3>
              <p className="p-5 rounded-2xl bg-[#1F1F1F]">CAREER@NEXGEN.COM</p>
            </div>
          </div>

          <div className="space-y-6">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="block font-medium ">
                    FIRST NAME
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="Enter First Name"
                    className="w-full px-4 py-3 shadow shadow-gray-300 bg-[#242424] rounded-md focus:outline-none focus:ring-2 "
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="lastName" className="block font-medium ">
                    LAST NAME
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Enter Last Name"
                    className="w-full px-4 py-3 shadow shadow-gray-300 bg-[#242424] rounded-md focus:outline-none focus:ring-2 "
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block font-medium ">
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your Email"
                  className="w-full px-4 py-3 shadow shadow-gray-300 bg-[#242424] rounded-md focus:outline-none focus:ring-2 "
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block font-medium ">
                  PHONE NUMBER
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter Phone Number"
                  className="w-full px-4 py-3 shadow shadow-gray-300 bg-[#242424] rounded-md focus:outline-none focus:ring-2 "
                />
              </div>

              <div className="space-y-2 ">
                <label htmlFor="message" className="block font-medium ">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Enter your Message"
                  className="w-full px-4 py-3 shadow shadow-gray-300 bg-[#242424] rounded-md focus:outline-none focus:ring-2 "
                ></textarea>
              </div>

              <div className="flex items-center gap-5 justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="terms"
                    className="h-4 w-4  cursor-pointer border-gray-300 rounded"
                  />
                  <label htmlFor="terms" className="ml-2 block text-[#B3B3B2]">
                    I agree with Terms of Use and Privacy Policy
                  </label>
                </div>
                <button
                  type="submit"
                  className=" bg-[#CE7D63] text-black  py-3 px-6 rounded-md font-medium hover:bg-gray-800 hover:text-white transition-colors"
                >
                  SEND YOUR MESSAGE
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
