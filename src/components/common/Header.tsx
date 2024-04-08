import Link from 'next/link';

import { menuConfig } from '@/configs';

const header = () => {
  return (
    <header className="flex items-center justify-between">
      <Link href="/" className="text-2xl font-semibold text-primary">
        Pizza and Go
      </Link>
      <nav className="flex gap-4 font-semibold text-gray-500">
        {menuConfig.main.map((item) => (
          <Link key={item.id} href={item.path}>
            {item.display}
          </Link>
        ))}
      </nav>
      <button className="px-6 py-1 rounded-full bg-primary text-white">
        <Link href="/login">Login</Link>
      </button>
    </header>
  );
};

export default header;
