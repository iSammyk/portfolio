import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen medw mx-auto bg-gradient-to-b from-gray-800 to-black pb-10`}>
      
      {/* Container for Main Text and Profile Image */}
      <div className={`absolute inset-0 top-[120px] godo max-w-7xl mx-auto ${styles.paddingX} flex  flex-row-reverse items-center gap-12`}>
        
        {/* Right Side - Profile Image */}
        <div className="flex justify-center md:w-1/2 mt-2 md:mt-0">
          <motion.img
            src="https://media.licdn.com/dms/image/v2/D4E03AQEClPskA2PmZQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1729800879891?e=1735776000&v=beta&t=Tsgz1OMO55JlcKOsSmghmS2pHlNlx7yKmjUzWJ8My4w"
            alt="Profile photo"
            width={280}
            className="rounded-lg shadow-xl border-4 border-indigo-500 object-cover"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
        </div>

        {/* Left Side - xory Text */}
        <div className="md:w-1/2 text-center md:text-left space-y-3">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hello, I'm <span className='text-[#915EFF]'>iSammy</span>
          </h1>
          <p className={`${styles.heroSubText} mt-4 text-gray-300 leading-relaxed`}>
          I am a creative software developer that specialises in creating dynamic web apps and interactive, user-friendly interfaces.
          </p>
        </div>
      </div>

      {/* Floating Gradient Shapes */}
      <div className='absolute bottom-20 right-10 w-[150px] h-[150px] rounded-full violet-gradient opacity-25'></div>
      <div className='absolute top-32 left-10 w-[180px] h-[180px] rounded-full purple-gradient opacity-25'></div>

      {/* Scroll Down Indicator */}
      <div className='absolute bottom-10 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-indigo-500 flex justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className='w-3 h-3 rounded-full bg-indigo-500 mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
