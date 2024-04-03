import Image from 'next/image';

const Hero = () => {
  return (
    <section className="grid grid-cols-hero mt-12">
      <div className="py-12">
        <h1 className="text-4xl font-semibold">
          Everything <br /> is better <br /> with a <span className="text-primary">Pizza</span>
        </h1>
        <p className="my-6  text-gray-500">
          Pizza is the missing piece that makes every day complete, a simple yet delicious joy in
          life
        </p>
        <div className="flex gap-2 ">
          <button className="flex items-center gap-[8px] px-8 py-2 bg-primary text-white rounded-full">
            Order now
          </button>
          <button className="font-semibold text-gray-600">Learn more</button>
        </div>
      </div>
      <div className="relative">
        <Image fill objectFit="contain" src="/pizza.png" alt="pizza" />
      </div>
    </section>
  );
};

export default Hero;
