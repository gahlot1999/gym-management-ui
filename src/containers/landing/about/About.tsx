import Coaches from './coaches/Coaches';
import Trainers from './trainers/Trainers';
import WhyChooseUs from './whyChooseUs/WhyChooseUs';

function About() {
  return (
    <div className='bg-white text-black py-18'>
      <section
        id='about'
        className=' max-w-[1200px] m-auto grid gap-32 scroll-mt-16'
      >
        <WhyChooseUs />
        <Coaches />
        <Trainers />
      </section>
    </div>
  );
}

export default About;
