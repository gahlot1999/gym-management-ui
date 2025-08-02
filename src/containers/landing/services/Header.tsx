import Text from '../../../components/text/Text';
import type { HeaderProps } from './types';

function Header(props: HeaderProps) {
  const { activePlan, setActivePlan } = props;

  return (
    <div className='flex items-center justify-between'>
      <div>
        <Text as='p' className='text-gray-400'>
          Pricing Plan
        </Text>
        <Text as='h2'>JOIN TODAY</Text>
      </div>

      <div className='relative bg-gray-200 rounded-2xl p-2 flex items-center text-sm font-medium shadow-2xl shadow-gray-500'>
        {/* Animated background */}
        <div
          className={`absolute top-2 bottom-2 w-[47%] rounded-xl bg-black transition-all duration-300 
            ${activePlan === 'monthly' ? 'left-2' : 'left-1/2'}
          `}
        />

        {/* Buttons */}
        <span
          onClick={() => setActivePlan('monthly')}
          className={`relative z-10 py-2 px-4 rounded-xl transition-all hover:cursor-pointer ${
            activePlan === 'monthly' ? 'text-white' : 'text-black'
          }`}
        >
          Monthly
        </span>
        <span
          onClick={() => setActivePlan('yearly')}
          className={`relative z-10 py-2 px-4 rounded-xl transition-all hover:cursor-pointer ${
            activePlan === 'yearly' ? 'text-white' : 'text-black'
          }`}
        >
          Yearly
        </span>
      </div>
    </div>
  );
}

export default Header;
