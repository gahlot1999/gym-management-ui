import Header from './Header';
import Testimonials from './Testimonials';

function Reviews() {
  return (
    <div className='bg-white text-black py-18'>
      <section
        id='reviews'
        className='max-w-[1200px] m-auto grid gap-12 scroll-mt-16'
      >
        <Header />
        <Testimonials />
      </section>
    </div>
  );
}

export default Reviews;
