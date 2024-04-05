import Image from 'next/image';

const MenuItem = () => {
  return (
    <div className="flex flex-col items-center px-2 py-3 bg-gray-200 rounded-lg hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
      <Image width={200} height={200} src="/pizza.png" alt="pizza" />
      <h4 className="my-3 text-xl font-semibold">Pizza</h4>
      <p className="text-center text-sm text-gray-500">
        Pizza is the missing piece that makes every day complete, a simple yet delicious joy in life
      </p>
      <p className="mt-2 font-semibold text-gray-500">
        Price: <span className="text-primary">$12</span>
      </p>
      <button className="px-8 py-2 mt-4 rounded-full bg-primary text-white">Add to cart</button>
    </div>
  );
};

export default MenuItem;
