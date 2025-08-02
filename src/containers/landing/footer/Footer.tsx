import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { TiSocialFacebookCircular } from 'react-icons/ti';
import logo from '../../../assets/images/logo.png';
import Text from '../../../components/text/Text';

function Footer() {
  return (
    <div className='bg-white text-black pt-18 pb-6'>
      <footer className='max-w-[1100px] m-auto grid gap-12'>
        <div className='flex'>
          <div className='w-1/2 '>
            <img src={logo} className='w-60 mb-4' />
            <Text className='text-gray-500 mb-4'>© 2025 by Powerhaus Gyms</Text>
            <Text className='text-gray-500 mb-4'>powerhaus@gmail.com</Text>
            <div className='flex items-center gap-3'>
              <FaInstagram
                size={28}
                className='text-gray-700 hover:text-gray-900 transition-all'
              />
              <TiSocialFacebookCircular
                size={32}
                className='text-gray-700 hover:text-gray-900 transition-all'
              />
              <FaXTwitter
                size={26}
                className='text-gray-700 hover:text-gray-900 transition-all'
              />
            </div>
          </div>
          <div className='w-1/2 flex items-center justify-around'>
            <ul>
              <Text as='p' className='text-lg font-semibold mb-4'>
                Quick Links
              </Text>
              {['Home', 'About Us', 'Services', 'Contact'].map((el) => (
                <li className='text-sm font-medium mb-2 text-gray-500'>
                  <a href=''>{el}</a>
                </li>
              ))}
            </ul>

            <ul>
              <Text as='p' className='text-lg font-medium mb-4'>
                Branches
              </Text>
              {['Morocco', 'Finland', 'Peru', 'Thailand'].map((el) => (
                <li className='text-sm font-medium mb-2 text-gray-500'>
                  <a href=''>{el}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <span className='text-center text-sm text-gray-500 font-medium'>
          © 2025 by Powerhaus Gyms. All rights reserved. Powered and secured by
          Powerhaus-Team
        </span>
      </footer>
    </div>
  );
}

export default Footer;
