import { NextPage } from "next";
import Link from "next/link";
import {
  AiOutlineHome,
  AiOutlineProfile,
  AiOutlineContacts,
  AiOutlineProject,
  AiOutlineControl,
} from "react-icons/ai";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

interface PersonalDetailsProps {}

const MenuItems = [
  {
    name: "Home",
    href: "/",
    icon: <AiOutlineHome size={24} />,
  },
  {
    name: "About",
    href: "/about",
    icon: <AiOutlineProfile size={24} />,
  },
  {
    name: "What I Do",
    href: "/services",
    icon: <AiOutlineControl size={24} />,
  },
  {
    name: "Projects",
    href: "/projects",
    icon: <AiOutlineProject size={24} />,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: <AiOutlineContacts size={24} />,
  },
];

const SocialMedia = [
  {
    name: "Github",
    href: "",
    icon: <Facebook size={24} />,
  },
  {
    name: "LinkedIn",
    href: "",
    icon: <Linkedin size={24} />,
  },
  {
    name: "Twitter",
    href: "",
    icon: <Twitter size={24} />,
  },
  {
    name: "Instagram",
    href: "",
    icon: <Instagram size={24} />,
  },
];

const PersonalDetails: NextPage<PersonalDetailsProps> = () => {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="sticky flex flex-col items-center justify-center h-60">
        <div className="w-24 h-24  rounded-full border-[5px] border-white"></div>
        <div className="flex flex-col items-center justify-center mt-4">
          <h4 className="font-bold ">Ryan Pereira</h4>
          <h5 className="text-sm font-semibold">Full Stack Developer</h5>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 my-8">
        <ul className="flex flex-col w-full h-full space-y-4">
          {MenuItems.map((item, index) => (
            <li className="mx-6 ">
              <Link
                href={item.href}
                key={index}
                className="flex flex-col w-full "
              >
                <div className="flex items-center space-x-3 text-sm font-semibold tracking-wider uppercase">
                  {item.icon} <p>{item.name}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-16 ">
        <ul className="flex flex-row items-center justify-center w-full h-full space-x-4">
          {SocialMedia.map((item, index) => (
            <li className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
              <Link
                href={item.href}
                key={index}
                className="flex flex-col w-full "
              >
                <div className="flex items-center justify-center w-full h-full">
                  {item.icon}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PersonalDetails;
