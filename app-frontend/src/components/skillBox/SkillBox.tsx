import { NextPage } from "next";
import { IconType } from "react-icons";

interface SkillBoxProps {
  name: string;
  icon: IconType;
  level: number;
}

const SkillBox: NextPage<SkillBoxProps> = ({ icon: Icon, level, name }) => {
  return (
    <div className="flex flex-col px-2 py-4 space-y-3 border">
      <div className="flex flex-row items-center space-x-6">
        <div className="flex space-x-2">
          <Icon size={24} />
          <h3 className="font-semibold">{name}</h3>
        </div>

        <div className="flex flex-row space-x-1">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3  ${
                index < level ? "bg-green-500" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Skill Boxes from 1 to 5 and color on the level */}
    </div>
  );
};

export default SkillBox;
