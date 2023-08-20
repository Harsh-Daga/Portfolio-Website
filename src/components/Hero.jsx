import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { SocialIcon } from "react-social-icons";

const Hero = () => {
  return (
    <section className="relative  w-full h-screen mx-[10px]" style={{}}>
      <div
        className={`${styles.paddingX} absolute inset-0 max-w-7xl mx-auto flex flex-row items-center justify-center gap-6`}
      >
        <div>
          <h1 id="head-text" className={`${styles.heroHeadText} text-white`}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    `Hi I'm, <span style="color: #915eff; ">Harsh Daga</span>`
                  )
                  .start();
              }}
            />
          </h1>
          <p
            className={`hero-subtext ${styles.heroSubText} mt-3 text-white-100 `}
          >
            I'm a{" "}
            <span className="bg-[#00008E] px-2">Full stack Developer</span>{" "}
            <br /> with expertise in{" "}
            <span className="bg-[#00896A] px-2">React</span> &{" "}
            <br className="lg:hidden" />{" "}
            <span className="bg-[#00896A] px-2">Ruby on Rails</span>{" "}
          </p>
          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className="pt-[50px] gap-10 flex rounded-2xl"
          >
            <SocialIcon url="https://twitter.com/harshsdaga" target="_blank" />
            <SocialIcon
              url="https://www.linkedin.com/in/harsh-daga2003/"
              bgColor="#0A66C2"
              target="_blank"
            />
            <SocialIcon
              url="https://github.com/Harsh-Daga"
              bgColor="#fff"
              target="_blank"
            />
          </motion.div>
          <motion.div
           variants={slideIn("left", "tween", 0.2, 1)}
           className="pt-[50px] gap-10 flex rounded-2xl justify-center"
          >
            <a
              class="h-[50px] flex items-center w-100 px-6 text-[20px] font-bold rounded-md bg-[#00896A] text-white"
              href="https://drive.google.com/file/d/17-NBIEodBPy8LRZDrXEjcRsKSWFKx8gh/view?usp=sharing"
              target="_blank"
            >
              RESUME
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute xs:bottom-12 bottom-[5rem] w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-white mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
