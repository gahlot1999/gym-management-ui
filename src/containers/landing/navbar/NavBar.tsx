import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';
import logo from '../../../assets/images/logo.png';
import Button from '../../../components/button/Button';

const navItems = [
  {
    title: 'Home',
    href: '#home',
  },
  {
    title: 'About',
    href: '#about',
  },
  {
    title: 'Services',
    href: '#services',
  },
  {
    title: 'Reviews',
    href: '#reviews',
  },
  {
    title: 'Contact',
    href: '#contact',
  },
];

function NavBar() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);

      let currentSection = '';
      for (const item of navItems) {
        const section = document.querySelector(item.href);
        if (section) {
          const rect = (section as HTMLElement).getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            currentSection = item.title;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleLoginLogout() {
    if (isAuthenticated) logout();
    if (!isAuthenticated) loginWithRedirect();
  }

  return (
    <nav
      className={`fixed w-full px-9 flex items-center justify-between transition-all z-999 ${
        isSticky ? 'bg-black/70 py-2' : 'bg-transparent py-6'
      }`}
    >
      <img src={logo} alt='Gym logo' className='w-20' />
      <ul className='flex gap-8 text-sm text-gray-400'>
        {navItems.map((el) => (
          <li
            key={el.title}
            className={`hover:text-white hover:font-semibold ${
              activeSection === el.title ? 'font-semibold text-white' : ''
            }`}
          >
            <a href={el.href}>{el.title}</a>
          </li>
        ))}
      </ul>
      <Button onClick={handleLoginLogout}>
        {isAuthenticated ? 'Logout' : 'Login'}
      </Button>
    </nav>
  );
}

export default NavBar;
