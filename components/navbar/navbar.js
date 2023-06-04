import Image from 'next/image';
import Link from 'next/link';
import SearchIcon from '@/assets/images/search.svg';
import LogoImage from '@/assets/images/logo-light.svg';
import HeartIcon from '@/assets/images/heart.svg';
import ProfileIcon from '@/assets/images/profile.svg';
import ShopIcon from '@/assets/images/shop.svg';

const Navbar = () => {
  return (
    <nav className="fixed hidden top-0 left-0 right-0 bottom-auto text-white h-[100px] pb-4 pt-1 w-full border-b border-white z-10 md:block">
      <div className="container-fluid flex justify-between items-end h-full">
        <form>
          <label htmlFor="search" className="cursor-pointer">
            <Image
              src={SearchIcon}
              alt="Search icon"
              className="inline-block"
              width={20}
              height={20}
            />
            <span className="text-md text-white opacity-0">Search</span>
          </label>
        </form>
        <ul className="flex items-end gap-6 h-full text-2xl font-medium">
          <li>
            <Link href={'/'}>Groups</Link>
          </li>
          <li>
            <Link href={'/'}>Our Impack</Link>
          </li>
          <li className="self-start">
            <Link href={'/'}>
              <Image src={LogoImage} alt="Logo Image" width={80} />
            </Link>
          </li>
          <li>
            <Link href={'/'}>Brand</Link>
          </li>
          <li>
            <Link href={'/'}>Shop</Link>
          </li>
        </ul>
        <div className="flex gap-5">
          <Link href={'/'}>
            <Image src={HeartIcon} alt="Heart Icon" width={20} height={20} />
          </Link>
          <Link href={'/'}>
            <Image
              src={ProfileIcon}
              alt="Profile Icon"
              width={20}
              height={20}
            />
          </Link>
          <Link href={'/'}>
            <Image src={ShopIcon} alt="Shop Icon" width={20} height={20} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
