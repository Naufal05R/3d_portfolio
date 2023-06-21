import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 xs:top-[120px] top-[90px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 rounded-b-full violet-gradient' />
        </div>

        <div>
          <h1 className='text-white leading-tight font-bold mt-6 xs:mt-4 sm:mt-2'>
            Hello, I&rsquo;m <br /> <span className={`${styles.heroHeadText}`}>Naufal Rabbani</span> {/* `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;` */}
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          The Next level Front-End Developer. I'm good at<br className='sm:block hidden' /> Design & Development.
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-0 bottom-10 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-16 rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div 
              animate={{ 
                y: [0, 24, 0],
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className='w-3 h-3 rounded-full bg-secondary'
            />
          </div>
        </a>
      </div>

    </section>
  );
};

export default Hero;
