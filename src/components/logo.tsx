import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center mr-4"
    >
      <Image
        src="/logo-removebg.webp"
        width={16}
        height={16}
        alt="Be Americans logo"
        className="w-16 h-auto rounded-full"
        sizes="20vw"
        priority
      />
      <span className="font-medium text-lg md:text-xl">
        Be Americans
      </span>
    </Link>
  );
};

export default Logo;
