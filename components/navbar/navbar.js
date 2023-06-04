'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import SearchIcon from '@/assets/images/search.svg';
import SearchDarkIcon from '@/assets/images/search-dark.svg';
import LogoImage from '@/assets/images/logo-light.svg';
import HeartIcon from '@/assets/images/heart.svg';
import ProfileIcon from '@/assets/images/profile.svg';
import ShopIcon from '@/assets/images/shop.svg';
import HumburgerIcon from '@/assets/images/hambergermenu.svg';
import CloseIcon from '@/assets/images/closecircle.svg';
import ArrowRight from '@/assets/images/arrow-right.svg';
import Navdropdown from './navdropdown';

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 bottom-auto text-white h-20  pb-1 pt-1 w-full border-b border-white z-10 md:block md:h-[6.25rem] md:pb-4">
      {/* Desktop Navigation */}
      <div className="hidden container-fluid md:flex justify-between items-end h-full">
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

      {/* Mobile Navigation */}
      <div className="container-fluid flex justify-between items-center h-full capitalize md:hidden">
        <Image
          src={HumburgerIcon}
          alt="Open Icon"
          className="inline-block"
          width={30}
          onClick={() => {
            setToggleNav(true);
          }}
        />
        <Link href={'/'}>
          <Image src={LogoImage} alt="Logo Image" width={50} />
        </Link>

        <Link href={'/'} className="relative">
          <Image src={ShopIcon} alt="Shop Icon" width={30} />
          <span className="absolute right-0 -bottom-[0.625rem] inline-flex justify-center items-center w-[1.4rem] h-[1.4rem] text-xs font-medium text-black rounded-full bg-green-20%">
            24
          </span>
        </Link>

        <div
          className={`${
            toggleNav ? 'block bottom-0' : 'hidden'
          } fixed top-0 left-0 right-0 overflow-y-auto bg-black py-7`}
        >
          <div className="container-fluid flex flex-col">
            <div className="fixed top-0 right-3 left-3 inline-flex justify-end items-center bg-black h-20 z-10">
              <Image
                src={CloseIcon}
                alt="Close Icon"
                className="inline-block cursor-pointer"
                width={40}
                onClick={() => {
                  setToggleNav(false);
                }}
              />
            </div>

            <form>
              <div className="flex justify-between items-center gap-1 bg-white w-[95%] h-11 rounded-[2.5rem] p-2 mt-20 mx-auto">
                <label htmlFor="search" className="flex-shrink-0">
                  <Image
                    src={SearchDarkIcon}
                    alt="Search icon"
                    className="inline-block"
                    width={30}
                  />
                </label>

                <input
                  className="inline-block w-full text-black text-base border-none outline-transparent"
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search"
                />

                <Image
                  src={ArrowRight}
                  alt="Arrow Icon"
                  className="inline-block flex-shrink-0"
                  width={15}
                />
              </div>
            </form>

            <ul className="flex flex-col gap-3 text-lg font-normal text-white w-[95%] mx-auto mt-9 mb-6">
              <li>
                <Link href={'/'}>Home</Link>
              </li>
              <li>
                <Navdropdown
                  title="Group"
                  href="/"
                  lists={[
                    {
                      title: 'More',
                      href: '/',
                    },
                    {
                      title: 'More',
                      href: '/',
                    },
                  ]}
                />
              </li>
              <li>
                <Navdropdown
                  title="Our Impact"
                  href="/"
                  lists={[
                    {
                      title: 'More',
                      href: '/',
                    },
                    {
                      title: 'More',
                      href: '/',
                    },
                  ]}
                />
              </li>
              <li>
                <Navdropdown
                  title="Brands"
                  href="/"
                  lists={[
                    {
                      title: 'More',
                      href: '/',
                    },
                    {
                      title: 'More',
                      href: '/',
                    },
                  ]}
                />
              </li>
              <li>
                <Navdropdown
                  title="Shops"
                  href="/"
                  lists={[
                    {
                      title: 'More',
                      href: '/',
                    },
                    {
                      title: 'More',
                      href: '/',
                    },
                  ]}
                />
              </li>
            </ul>
          </div>
          <span className="inline-block h-[1px] w-full bg-gray-40%"></span>
          <div className="container-fluid mt-9 w-[95%] mx-auto">
            <ul className="flex flex-col gap-3 text-base font-normal text-white ">
              <li>
                <Link href={'/'}>Home</Link>
              </li>
              <li>
                <Link href={'/'}>Favourite</Link>
              </li>
              <li>
                <Link href={'/'}>Cart</Link>
              </li>
              <li className="text-gray-50%">
                <Link href={'/'}>Contact us</Link>
              </li>
            </ul>

            <form className="mt-8">
              <label
                htmlFor="language"
                className="block text-xs font-normal uppercase mb-4"
              >
                Change Language
              </label>
              <select
                name="language"
                id="language"
                className="text-lg bg-transparent w-full border-b border-white py-4 outline-transparent outline-none"
              >
                <option value="english"> English</option>
                <option value="french"> French</option>
                <option value="german"> German</option>
              </select>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
