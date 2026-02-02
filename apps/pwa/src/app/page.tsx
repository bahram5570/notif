'use client';

import Link from 'next/link';

const Home = () => {
  return (
    <div className="w-full h-full flex">
      <Link href="/" className="text-impo_Primary_Primary text-2xl mx-auto mt-36">
        برو به صفحه اصلی
      </Link>
    </div>
  );
};

export default Home;
