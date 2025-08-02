import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { TiSocialFacebookCircular } from 'react-icons/ti';
import Button from '../../../components/button/Button';
import Text from '../../../components/text/Text';

function Hero() {
  return (
    <section
      id='home'
      className="relative min-h-screen bg-[url('/src/assets/images/hero.png')] bg-cover bg-center flex items-center overflow-hidden"
    >
      <div className='absolute rotate-[50deg] left-[75%] top-[50%] h-full w-full rounded-[130px] bg-white/10 overflow-hidden' />

      <div className='ml-8 mt-10 max-w-[28%]'>
        <Text as='h1'>Live Your Best Life</Text>
        <Text as='p' className='text-sm text-gray-400 mt-2'>
          At PowerHaus Gyms, we believe that fitness is not just a destination;
          it's a journey towards a healthier you.
        </Text>

        <Button className='mt-10'>Get Started</Button>

        <div className='flex items-center gap-3 mt-6'>
          <FaInstagram
            size={28}
            className='hover:text-teal-400 transition-all'
          />
          <TiSocialFacebookCircular
            size={32}
            className='hover:text-teal-400 transition-all'
          />
          <FaXTwitter
            size={26}
            className='hover:text-teal-400 transition-all'
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
