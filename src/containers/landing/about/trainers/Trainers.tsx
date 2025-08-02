import trainer1 from '../../../../assets/images/about/trainer1.png';
import trainer2 from '../../../../assets/images/about/trainer2.png';
import trainer3 from '../../../../assets/images/about/trainer3.png';
import trainer4 from '../../../../assets/images/about/trainer4.png';
import trainer5 from '../../../../assets/images/about/trainer5.jpg';
import trainer6 from '../../../../assets/images/about/trainer6.png';
import Image from '../../../../components/Image';
import Text from '../../../../components/text/Text';

const trainers = [
  {
    name: 'Alex Carter',
    img: trainer1,
  },
  {
    name: 'John Mathew',
    img: trainer2,
    className: 'col-span-3',
  },
  {
    name: 'Mia Chen',
    img: trainer3,
  },
  {
    name: 'Ali Razak',
    img: trainer4,
    className: 'col-span-2',
  },
  {
    name: 'Sophie Lee',
    img: trainer5,
  },
  {
    name: 'Olive Brown',
    img: trainer6,
    className: 'col-span-2',
  },
];

export default function Trainers() {
  return (
    <div className='max-w-[800px] m-auto'>
      <header className='text-center max-w-[60%] m-auto mb-12'>
        <Text as='h2' className='mb-1'>
          Meet Our Trainers
        </Text>
        <Text as='p' className='text-gray-500 font-light'>
          Passionate professionals dedicated to guiding your fitness journey
          with expertise, motivation, and care.
        </Text>
      </header>
      <div className='grid gap-4 grid-cols-5 auto-rows-[200px]'>
        {trainers.map((trainer, id) => (
          <Image
            key={id}
            imgPath={trainer.img}
            name={trainer.name}
            containerClass={trainer?.className ?? trainer.className}
            textOverlay
          />
        ))}
      </div>
    </div>
  );
}
