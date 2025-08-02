import filledStar from '../../../assets/svgs/star-filled.svg';
import star from '../../../assets/svgs/star.svg';
import Text from '../../../components/text/Text';

export type TestimonialCardProps = {
  name: string;
  stars: 1 | 2 | 3 | 4 | 5;
  testimony: string;
};

function TestimonialCard(props: TestimonialCardProps) {
  const { name, stars, testimony } = props;

  return (
    <div className='min-w-96 px-6 py-4 shadow-sm border border-gray-200 rounded-2xl'>
      <Text as='h3' className='!font-bold'>
        {name}
      </Text>
      <div className='flex gap-1 mb-4 mt-1 z-0'>
        {Array.from({ length: 5 }, (_, i) => {
          const isFilled = i + 1 <= stars;
          return (
            <img
              key={i}
              src={isFilled ? filledStar : star}
              alt='star'
              className={`w-4 h-4 ${isFilled ? 'opacity-80' : ''}`}
            />
          );
        })}
      </div>
      <Text as='p' className='text-sm text-gray-500'>
        {testimony}
      </Text>
    </div>
  );
}

export default TestimonialCard;
