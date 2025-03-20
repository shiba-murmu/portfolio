import React from "react";
import "./profile.css";
function Profile() {

  return (
    <>
      <div className="flex justify-between h-screen">
        <div className=" w-1/3">
          <div className="relative  h-full w-4xl">
            {/* Image */}
            <img
              src="/images/online.png" // Replace with your image URL
              alt="Image with Gradient Brightness"
              className="w-full h-full object-cover brightness-150 " // Adjust brightness here
            />
            {/* Gradient Overlay */}
            {/* <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-10"></div> */}
            <div className="absolute inset-0 bg-gradient-to-t  from-black to-transparent opacity-85"></div>
            <div className="absolute inset-0 bg-gradient-to-t  from-black to-transparent opacity-85"></div>
          </div>
        </div>

        <div className="w-2/3 ">
          <div className="h-full  flex items-center justify-center">
            <div className="z-20 text-center">
              <div className="flex  justify-center align-center">
                <span id="heading" className="text-7xl font-sans text-blue-400">
                  Hey, I'm Shiba !
                </span>
              </div>
              <br />
              <div className="mt-2">
                <span className="text-white text-md text-center ">
                  B.Tech student passionate about software development, 
                  experience in <br />Python and React. 
                  Exploring web development <br />
                  and AI projects.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
