"use client";

import { NextPage } from "next";
import { useTypingText } from "@/hooks/useTypingText";
import Image from "next/image";
import SkillBox from "@/components/skillBox/SkillBox";
import { FaNodeJs, FaPython, FaReact } from "react-icons/fa";

interface AboutProps {}

const About: NextPage<AboutProps> = () => {
  const { word, stop, start } = useTypingText(
    ["fast", "reliable", "affordable"],
    130,
    20
  );

  return (
    <div className="flex flex-col w-full my-8 space-y-4 bg-gray-800">
      {/* Personal Card */}

      <div className="flex w-full space-x-4 overflow-hidden">
        {/* Personal Information */}

        {/* Download CV */}

        {/* Skills */}
        <div className="w-3/5 p-2 bg-gray-50">
          <div className="flex flex-col p-4 space-y-4">
            <h3 className="text-xl font-semibold">Hey there! {word}</h3>
            <p className="text-sm">
              I'm Ryan Pereira, a freelance full-stack Python and JavaScript
              developer with over 2 years of experience. When I'm not coding,
              you can find me enjoying my hobbies of listening to music and
              playing games. I'm always excited to dive into new technologies
              and expand my knowledge.
            </p>

            <hr />

            <div>
              <div className="flex flex-row items-center space-x-2">
                <div className="flex flex-row items-center w-full space-x-2">
                  <p className="text-sm font-semibold tracking-wide">Name:</p>
                  <p className="text-sm ">Ryan Pereira</p>
                </div>

                <div className="flex flex-row items-center w-full space-x-2">
                  <p className="text-sm font-semibold tracking-wide">Email:</p>
                  <p className="text-sm ">connect@pereiraryan.com</p>
                </div>
              </div>
              <div className="flex flex-row items-center mt-2 space-x-2">
                <div className="flex flex-row items-center w-full space-x-2">
                  <p className="text-sm font-semibold tracking-wide">Age:</p>
                  <p className="text-sm ">30</p>
                </div>

                <div className="flex flex-row items-center w-full space-x-2">
                  <p className="text-sm font-semibold tracking-wide">
                    Address:
                  </p>
                  <p className="text-sm ">Dubai, UAE</p>
                </div>
              </div>
            </div>

            <hr />

            {/* <div className="flex flex-row items-center space-x-2">
              <div className="flex flex-row items-center w-full space-x-2">
                <p className="text-3xl font-bold text-green-500">2+</p>
                <p className="text-base font-semibold tracking-wider">
                  Years Experience
                </p>
              </div>

              <div className="flex flex-row items-center w-full space-x-2">
                <p className="text-3xl font-bold text-green-500">2+</p>
                <p className="text-base font-semibold tracking-wider">
                  Projects Done
                </p>
              </div>
            </div> */}
          </div>

          <div className="flex flex-row px-4 space-x-4">
            <button className="w-full p-4 text-white bg-gray-800">
              Contact Me
            </button>

            <button className="w-full p-4 text-white bg-gray-800">
              Download CV
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center w-2/5 bg-gray-50">
          <div className="relative rounded-full w-80 h-80 bg-gray-50">
            <Image
              alt="Personal Portfolio Image"
              src="/home-banner.png"
              fill
              className="rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col mx-auto  w-full min-h-[20rem] overflow-y-auto bg-gray-50 p-4">
        <h3 className="py-2 text-xl font-semibold ">My Skills</h3>

        <div className="grid items-center justify-center grid-cols-4 gap-3 mt-2 ">
          <SkillBox icon={FaNodeJs} name="NodeJS" level={5} />
          <SkillBox icon={FaNodeJs} name="NodeJS" level={5} />
          <SkillBox icon={FaNodeJs} name="NodeJS" level={2} />
          <SkillBox icon={FaNodeJs} name="NodeJS" level={5} />
          <SkillBox icon={FaNodeJs} name="NodeJS" level={5} />
          <SkillBox icon={FaNodeJs} name="NodeJS" level={5} />
          <SkillBox icon={FaNodeJs} name="NodeJS" level={5} />
          <SkillBox icon={FaNodeJs} name="NodeJS" level={5} />
          <SkillBox icon={FaNodeJs} name="NodeJS" level={5} />
          <SkillBox icon={FaNodeJs} name="NodeJS" level={5} />
          <SkillBox icon={FaNodeJs} name="NodeJS" level={5} />
          <SkillBox icon={FaNodeJs} name="NodeJS" level={5} />
          <SkillBox icon={FaNodeJs} name="NodeJS" level={5} />
          <SkillBox icon={FaNodeJs} name="NodeJS" level={5} />

          {/* <SkillBox />
            <SkillBox /> */}
        </div>
      </div>
    </div>
  );
};

export default About;
