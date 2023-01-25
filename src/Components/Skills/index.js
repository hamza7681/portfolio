import React from "react";
import { motion } from "framer-motion";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { skills } from "../../Utils/skills";

const Skills = () => {
  return (
    <>
      <div className="p-[10px]  md:p-[30px] relative">
        <div className="bg-gradient-to-r from-indigo-500 via-purple-700 to-pink-600 blur-2xl h-[100px]  md:h-[70px] w-[120px] md:w-[200px] absolute -top-[100px] md:left-[120px] "></div>
        <h1 className="text-white text-center text-[32px] font-bold py-[40px]  md:py-[80px] ">
          | Skills Set
        </h1>
        <div className="flex md:flex-row flex-col justify-center flex-wrap gap-4 bg-transparent relative overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-500 via-purple-700 to-pink-600 blur-2xl h-[100px]  md:h-[70px] w-[190px] absolute top-[100px] md:left-[320px] hidden md:block "></div>
          <div className="bg-gradient-to-r from-indigo-500 via-purple-700 to-pink-600 blur-2xl h-[100px]  md:h-[70px] w-[190px] absolute top-[390px] md:left-[720px] hidden md:block"></div>
          <div className="bg-gradient-to-r from-indigo-500 via-purple-700 to-pink-600 blur-2xl h-[100px]  md:h-[70px] w-[190px] absolute top-[350px] md:left-[120px] hidden md:block"></div>
          <div className="bg-gradient-to-r from-indigo-500 via-purple-700 to-pink-600 blur-2xl h-[100px]  md:h-[70px] w-[190px] absolute top-[450px] md:left-[820px] hidden md:block"></div>
          {skills.map((val, index) => {
            return (
              <>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  key={index}
                  className="  flex flex-row  md:w-1/4 bg-[rgba(139,139,139,0.3)] rounded-[10px]  p-[10px] md:p-[20px] items-center md:gap-4 gap-6 "
                >
                  <div className="w-[100px] h-[100px] bg-transparent ">
                    <CircularProgressbar
                      stroke="black"
                      counterClockwise={true}
                      value={val.percentage}
                      text={`${val.percentage}%`}
                      className="bg-transparent"
                      styles={buildStyles({
                        pathColor: " white",
                        textColor: "white",
                        trailColor: "black",
                      })}
                    />
                  </div>
                  <div className="bg-transparent">
                    <p className=" text-white md:text-[20px] text-[17px] bg-transparent">
                      {val.name}
                    </p>
                    <div className="flex flex-row bg-transparent">
                      <span className="text-white text-[35px] bg-transparent">
                        {val.icon1}
                      </span>
                      <span className="text-white text-[35px] bg-transparent">
                        {val.icon2}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Skills;
