import React from "react";

const Address = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
          <div className="sm:w-1/2 mb-10 px-4">
            <div className="card relative h-[260px] w-[400px] flex flex-col justify-end px-6 py-10 text-white rounded-3xl gap-8 bg-gradient-to-r from-purple-500 to-pink-500">
              <p className="text-2xl  font-medium">Email</p>
              <div className="flex justify-between gap-10">
                <p className="text-lg font-medium">
                  info@maximabusinesssolutions.com <br></br>
                  hi@maximabusinesssolutions.in
                </p>
              </div>
            </div>
          </div>

          <div className="sm:w-1/2 mb-10 px-4">
            <div className="card relative h-[260px] w-[400px] flex flex-col justify-end px-6 py-10 text-white rounded-3xl gap-8 bg-gradient-to-r from-purple-500 to-pink-500">
              <p className="text-2xl  font-medium">Phone</p>
              <div className="flex justify-between gap-10">
                <p className="text-lg font-medium">
                India - +91 9657480645<br></br>
                USA - +1-518-595-9922
                </p>
                <div className="self-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 58 36"
                    height="36"
                    width="58"
                  >
                    <circle
                      fill-opacity="0.62"
                      fill="#F9CCD1"
                      r="18"
                      cy="18"
                      cx="18"
                    ></circle>
                    <circle
                      fill="#424242"
                      r="18"
                      cy="18"
                      cx="40"
                      opacity="0.36"
                    ></circle>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="sm:w-1/2 mb-10 px-4">
            <div className="card relative h-[260px] w-[400px] flex flex-col justify-end px-6 py-10 text-white rounded-3xl gap-8 bg-gradient-to-r from-purple-500 to-pink-500">
              <p className="text-2xl  font-medium">Address</p>
              <div className="flex justify-between gap-10">
                <p className="text-lg font-medium">
                  Pune Office - Undri, NIBM Road, <br></br>Pune, India, 411060
                </p>
                <div className="flex-1 flex flex-col justify-end">
                  <p className="self-end">Delhi Office- </p>
                  <p className="self-end">Sector 47, Gurgaon</p>
                </div>
                <div className="self-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 58 36"
                    height="36"
                    width="58"
                  >
                    <circle
                      fill-opacity="0.62"
                      fill="#F9CCD1"
                      r="18"
                      cy="18"
                      cx="18"
                    ></circle>
                    <circle
                      fill="#424242"
                      r="18"
                      cy="18"
                      cx="40"
                      opacity="0.36"
                    ></circle>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Address;
