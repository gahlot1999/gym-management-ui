import coach1 from '../../../../assets/images/about/coach1.jpg';
import coach2 from '../../../../assets/images/about/coach2.jpg';
import Button from '../../../../components/button/Button';
import Image from '../../../../components/Image';
import Text from '../../../../components/text/Text';

function Coaches() {
  return (
    <div className='max-w-[1100px] m-auto flex gap-12'>
      <div className='flex gap-4'>
        <Image imgPath={coach1} containerClass='!w-48' />
        <Image imgPath={coach2} containerClass='!w-64' />
      </div>
      <div className='flex-1 my-4'>
        <Text as='p' className='text-gray-400 text-lg'>
          Are you looking for a Mentor?
        </Text>

        <Text as='h2' className='mt-1 mb-3'>
          Coaches
        </Text>

        <Text as='p' className='text-gray-400'>
          Stronger version of yourself. We are dedicated to empowering you on
          this transformative journey with our state-of-the-art facilities,
          regardless of your fitness level or goals.
        </Text>

        <Button className='mt-6' variant='secondary'>
          Explore More
        </Button>
      </div>
    </div>
  );
}

export default Coaches;
