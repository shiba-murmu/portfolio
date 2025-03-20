import React from "react";
// import { CIcon } from "@coreui/icons-react";
// import { cilArrowRight   } from "@coreui/icons";
import { CProgress } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
// import {resume} from ''

function ProgressBar({ props }) {
  return (
    <>
      <CProgress
        value={props}
        color="secondary"
        height={30}
        className="rounded-0"
      />
    </>
  );
}
function DownloadResume() {
  return (
    <>
      
    </>
  )
}
function About() {
  return (
    <>
      <div className=" pt-30">
        <div className="max-w-4xl mx-auto py-8">
          <h2 className="text-3xl text-white font-thin mb-4">About Me</h2>
          <hr className="border-white w-76 mb-4" />
          <p className="text-neutral-500 mb-2">
            I'm a dedicated software developer with a passion for building
            scalable, user-friendly web applications.
          </p>
          <p className="text-neutral-500 mb-2">
            With a strong foundation in Python, Bootstrap, TailWind CSS, React,
            modern JavaScript frameworks, and Agile methodologies, I'm always
            looking for opportunities to grow and learn.
          </p>
          <p className="text-neutral-500">
            In my free time, I enjoy working on personal projects to explore new
            technologies. If you have an exciting project or opportunity, let's
            discuss how we can work together.
          </p>

          <div className="mt-40">
            <h2 className="text-3xl text-white font-extralight mb-4">
              My Skills
            </h2>
            <div>
              <span className="text-lg text-white mb-2">Coding Skill</span>
              <ProgressBar props="85" />
              <br />
              <span className="text-lg text-white mb-2">Problem - Solving</span>
              <ProgressBar props="75" />
              <br />
              <span className="text-lg text-white mb-2">Critical thinking</span>
              <ProgressBar props="70" />
            </div>
          </div>
          <br />

          <div className="bg-white flex h-36">
            <div className="w-4/12 hover:bg-neutral-700 hover:text-white flex justify-center items-center flex-col">
              <span className="text-2xl">11+</span>
              <span className="text-md">Partners</span>
            </div>
            <div className="w-4/12 hover:bg-neutral-700 hover:text-white flex justify-center items-center flex-col">
              <span className="text-2xl">55+</span>
              <span className="text-md">Project Done</span>
            </div>
            <div className="w-4/12 hover:bg-neutral-700 hover:text-white flex justify-center items-center flex-col">
              <span className="text-2xl">89+</span>
              <span className="text-md">Happy Client</span>
            </div>
            <div className="w-4/12 hover:bg-neutral-700 hover:text-white flex justify-center items-center flex-col">
              <span className="text-2xl">150+</span>
              <span className="text-md">Meetings</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
