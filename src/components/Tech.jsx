import React from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Languages and Frameworks
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Skills</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10 pt-[30px]">
        {technologies.map((technology) => (
          <div className="d-flex text-center w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <p className="text-secondary text-[17px] max-w-3xl leading-[30px]">
              {technology.name}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
