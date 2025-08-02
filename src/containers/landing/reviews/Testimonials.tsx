import { useEffect, useRef } from 'react';
import review1 from '../../../assets/images/review1.jpg';
import review2 from '../../../assets/images/review2.jpg';
import review3 from '../../../assets/images/review3.jpg';
import review4 from '../../../assets/images/review4.jpg';
import back from '../../../assets/svgs/back-filled.svg';
import next from '../../../assets/svgs/next.svg';
import Image from '../../../components/Image';
import TestimonialCard, { type TestimonialCardProps } from './TestimonialCard';

const testimonials: TestimonialCardProps[] = [
  {
    name: 'Liam Andersen',
    stars: 5,
    testimony:
      'PowerHaus helped me build strength and consistency. The trainers push you just enough and the energy is always positive.',
  },
  {
    name: 'Sofia Martínez',
    stars: 4,
    testimony:
      'I joined for the group classes and stayed for the community. Great equipment and a really welcoming environment.',
  },
  {
    name: 'Kenji Tanaka',
    stars: 5,
    testimony:
      'This place completely changed my approach to fitness. My posture, energy, and mood have improved significantly.',
  },
  {
    name: 'Elena Petrova',
    stars: 4,
    testimony:
      'The trainers are professional and friendly. I love how they customize workouts based on your goals and limits.',
  },
  {
    name: 'Marco Rossi',
    stars: 4,
    testimony:
      'Best decision I made this year. I’ve gained lean muscle, improved endurance, and made some great gym buddies!',
  },
];

function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    const onMouseDown = (e: MouseEvent) => {
      isDown.current = true;
      startX.current = e.pageX - slider.offsetLeft;
      scrollLeft.current = slider.scrollLeft;
      slider.classList.add('cursor-grabbing');
    };

    const onMouseLeave = () => {
      isDown.current = false;
      slider.classList.remove('cursor-grabbing');
    };

    const onMouseUp = () => {
      isDown.current = false;
      slider.classList.remove('cursor-grabbing');
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDown.current) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX.current) * 1.2; // drag speed
      slider.scrollLeft = scrollLeft.current - walk;
    };

    slider.addEventListener('mousedown', onMouseDown);
    slider.addEventListener('mouseleave', onMouseLeave);
    slider.addEventListener('mouseup', onMouseUp);
    slider.addEventListener('mousemove', onMouseMove);

    return () => {
      slider.removeEventListener('mousedown', onMouseDown);
      slider.removeEventListener('mouseleave', onMouseLeave);
      slider.removeEventListener('mouseup', onMouseUp);
      slider.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  function handleScroll(direction: 'left' | 'right') {
    if (direction === 'left') {
      scrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
    }

    if (direction === 'right') {
      scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
    }
  }

  return (
    <div className='flex items-center w-full select-none'>
      <div className='relative w-[400px] h-[280px]'>
        <Image
          imgPath={review1}
          containerClass='!absolute left-0 top-0 !h-32 !w-32 '
          imageClass='!rounded-full'
        />
        <Image
          imgPath={review2}
          containerClass='!absolute left-52 top-8 !h-24 !w-24'
          imageClass='!rounded-full'
        />
        <Image
          imgPath={review3}
          containerClass='!absolute bottom-6 left-20 !h-36 !w-36'
          imageClass='!rounded-full'
        />
        <Image
          imgPath={review4}
          containerClass='!absolute left-65 bottom-8 !h-28 !w-28'
          imageClass='!rounded-full'
        />
      </div>
      <div className='relative'>
        <div className='z-10 pointer-events-none absolute top-0 right-0 h-full w-40 bg-linear-to-r from-0% from-transparent via-15% via-white/60 to-white' />
        <div
          className='flex gap-6 p-2 pr-42 w-[800px] overflow-x-scroll no-scrollbar cursor-grab'
          ref={scrollRef}
        >
          {testimonials.map((el, i) => (
            <TestimonialCard
              key={i}
              name={el.name}
              stars={el.stars}
              testimony={el.testimony}
            />
          ))}
        </div>
        <div className='flex gap-1 mt-4 ml-2'>
          <img
            src={back}
            className='h-10 w-10 opacity-80 hover:cursor-pointer'
            onClick={() => handleScroll('left')}
          />
          <img
            src={next}
            className='h-10 w-10 hover:cursor-pointer'
            onClick={() => handleScroll('right')}
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
