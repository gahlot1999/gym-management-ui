import Text from '../../../components/text/Text';

function Contact() {
  return (
    <div className='bg-white text-black'>
      <section
        id='contact'
        className="relative h-[300px] grid gap-12 scroll-mt-14.5 bg-fixed bg-center bg-cover bg-[url('/src/assets/images/hero.png')] flex items-center justify-center"
      >
        {/* Overlay */}
        <div className='absolute inset-0 bg-black/40 0 z-0' />

        <div className='text-center z-1'>
          <Text as='h3' className='!text-white mb-2'>
            Call Us Now
          </Text>
          <Text as='h2' className='!text-white'>
            +94 77 778 1539
          </Text>
        </div>
      </section>
    </div>
  );
}

export default Contact;
