import card4 from '../../../../assets/images/about/card4.jpg';
import card5 from '../../../../assets/images/about/card5.jpg';
import card6 from '../../../../assets/images/about/card6.jpg';
import card1 from '../../../../assets/svgs/about/card1.svg';
import card2 from '../../../../assets/svgs/about/card2.svg';
import card3 from '../../../../assets/svgs/about/card3.svg';
import Image from '../../../../components/Image';
import Text from '../../../../components/text/Text';
import Card from './Card';

function WhyChooseUs() {
  return (
    <div>
      <header className='text-center max-w-[40%] m-auto mb-12'>
        <Text as='h2' className='mb-1'>
          Why Choose Us
        </Text>
        <Text as='p' className='text-gray-500 font-light'>
          Exercise is defined as any physical activity that makes your muscles
          work and requires your body to burn calories.
        </Text>
      </header>
      <div className='max-h-96 flex gap-4'>
        <div className='grid gap-4 items-center grid-cols-2'>
          <Card
            title='Improved Physical Health'
            description='Regular exercise can lead to enhanced cardiovascular health,
                stronger muscles and bones, improved flexibility, and increased
                endurance.'
            imgPath={card1}
            className='col-start-1 col-end-3 justify-self-center'
          />

          <Card
            title='Enhanced Mental Health'
            description='Exercise releases endorphins, often referred to as the "feel-good" hormones, which can elevate mood and reduce feelings of stress.'
            imgPath={card2}
          />

          <Card
            title='Increased Energy Levels'
            description='Regular physical activity improves blood circulation and oxygen delivery to the body, resulting in increased energy levels and reduced fatigue.'
            imgPath={card3}
          />
        </div>
        <div className='flex-1 grid gap-4 grid-cols-2'>
          <Image imgPath={card4} containerClass='!h-30' />
          <Image imgPath={card5} containerClass='!h-30' />
          <Image
            imgPath={card6}
            containerClass='!h-64 col-start-2 col-end-3 row-start-1 row-end-3'
          />
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
