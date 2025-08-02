import Button from '../../../components/button/Button';
import Text from '../../../components/text/Text';

function Header() {
  return (
    <div className='flex items-center justify-between'>
      <div>
        <Text as='p' className='text-gray-400'>
          Reviews
        </Text>
        <Text as='h2'>YOUR OPINIONS</Text>
      </div>
      <Button variant='secondary'>+ Your Opinion</Button>
    </div>
  );
}

export default Header;
