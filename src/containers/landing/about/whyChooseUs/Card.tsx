import Image from '../../../../components/Image';
import Text from '../../../../components/text/Text';

type CardProps = {
  title: string;
  description: string;
  imgPath: string;
  className?: string;
};

function Card(props: CardProps) {
  const { title, description, imgPath, className } = props;

  return (
    <div className={`flex gap-4 max-w-96 ${className ?? ''}`}>
      <div className='min-w-9'>
        <Image imgPath={imgPath} containerClass='!h-auto' />
      </div>
      <div>
        <Text as='h3' className='mb-2'>
          {title}
        </Text>
        <Text as='p' className='text-sm text-gray-400'>
          {description}
        </Text>
      </div>
    </div>
  );
}

export default Card;
