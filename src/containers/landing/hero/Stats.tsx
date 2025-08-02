import { useEffect, useRef, useState } from 'react';
import Text from '../../../components/text/Text';
import useCountUp from '../../../hooks/useCountUp';

function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [animationState, setAnimationState] = useState({
    isSectionVisible: false,
    hasAnimationPlayed: false,
  });

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setAnimationState((prev) => {
          const isSectionVisible = entry.isIntersecting;
          const hasAnimationPlayed =
            prev.hasAnimationPlayed || isSectionVisible;
          return { isSectionVisible, hasAnimationPlayed };
        });
      },
      { threshold: 0.3 },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const years = useCountUp(5, animationState.hasAnimationPlayed, 1000);
  const trainers = useCountUp(10, animationState.hasAnimationPlayed, 2000);
  const members = useCountUp(786, animationState.hasAnimationPlayed, 4000);
  const satisfaction = useCountUp(95, animationState.hasAnimationPlayed, 3000);

  return (
    <section id='stats' ref={sectionRef}>
      <div className='bg-black p-10'>
        <ul className='flex items-center justify-around text-center'>
          <li>
            <Text
              as='p'
              className='text-4xl mb-1 font-semibold text-emerald-100'
            >
              {years}+
            </Text>
            <Text as='p' className='text-sm text-emerald-400'>
              Years of Service
            </Text>
          </li>
          <li>
            <Text
              as='p'
              className='text-4xl mb-1 font-semibold text-emerald-100'
            >
              {trainers}+
            </Text>
            <Text as='p' className='text-sm text-emerald-400'>
              Certified Trainers
            </Text>
          </li>
          <li>
            <Text
              as='p'
              className='text-4xl mb-1 font-semibold text-emerald-100'
            >
              {members}+
            </Text>
            <Text as='p' className='text-sm text-emerald-400'>
              Happy Members
            </Text>
          </li>
          <li>
            <Text
              as='p'
              className='text-4xl mb-1 font-semibold text-emerald-100'
            >
              {satisfaction}%
            </Text>
            <Text as='p' className='text-sm text-emerald-400'>
              Customer Satisfaction
            </Text>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Stats;
