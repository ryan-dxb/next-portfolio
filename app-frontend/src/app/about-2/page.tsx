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
            <h3 className="text-xl font-semibold">Who am i?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Similique, tenetur. Repellat exercitationem doloribus alias
            </p>
            <div className="flex flex-row items-center space-x-2">
              <div className="flex flex-row items-center w-full space-x-2">
                <p className="font-bold text-green-500">2+</p>
                <p className="text-sm font-semibold tracking-wider">
                  Years Experience
                </p>
              </div>

              <div className="flex flex-row items-center w-full space-x-2">
                <p className="font-bold text-green-500">2+</p>
                <p className="text-sm font-semibold tracking-wider">
                  Projects Done
                </p>
              </div>
            </div>
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
      <div className="flex items-center w-full min-h-[20rem] overflow-y-scroll bg-gray-50 space-x-4 px-4">
        <div className="grid grid-cols-4 gap-3 ">
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
