import tickCircleGray from '../../../assets/svgs/tick-circle-gray.svg';
import tickCircleWhite from '../../../assets/svgs/tick-circle-white.svg';
import Button from '../../../components/button/Button';
import Text from '../../../components/text/Text';
import type { PlanCardProps } from './types';

function PlanCard(props: PlanCardProps) {
  const {
    planName,
    pricing,
    planDesc,
    features,
    activePlan,
    theme = 'light',
  } = props;

  const isLight = theme === 'light';
  const isMonthlyPlan = activePlan === 'monthly';

  return (
    <div
      className={`flex flex-col gap-8 justify-between px-6 py-4 rounded-2xl ${
        isLight ? 'bg-white text-black shadow-2xl' : 'bg-neutral-800 text-white'
      }`}
    >
      <div>
        <Text
          as='p'
          className={`text-sm font-medium mb-2 ${
            isLight ? 'text-gray-500' : ''
          }`}
        >
          {planName}
        </Text>
        <Text className='mb-4'>
          <span
            className={`text-4xl font-semibold ${
              isLight ? 'text-gray-700' : ''
            }`}
          >
            Rs.{isMonthlyPlan ? pricing.monthly : pricing.yearly}
          </span>
          <span className='font-medium'>
            {' '}
            / {isMonthlyPlan ? 'Month' : 'Year'}
          </span>
        </Text>
        <Text
          as='p'
          className={`mb-8 text-sm ${
            isLight ? 'text-gray-500' : 'text-gray-300'
          }`}
        >
          {planDesc}
        </Text>
        <ul className='flex flex-col gap-2 text-sm'>
          {features.map((el, i) => (
            <li key={i}>
              <span className='flex items-center gap-2'>
                <img src={isLight ? tickCircleGray : tickCircleWhite} />
                {el}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <Button variant={isLight ? 'secondary' : 'primary'} className='w-full'>
        Choose Plan
      </Button>
    </div>
  );
}

export default PlanCard;
