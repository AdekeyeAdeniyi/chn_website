'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import ArrowRightLight from '@/assets/images/arrow-right-light.svg';

const Navdropdown = ({ title, href, lists }) => {
  const [dropDown, setDropDown] = useState(false);

  const handlerToggle = () => {
    setDropDown(!dropDown);
    console.log(dropDown);
  };
  return (
    <div className="w-full h-full">
      <div className="flex justify-between items-center">
        <Link href={href}>{title}</Link>
        <span
          className={`${dropDown ? 'rotate-90' : 'rotate-0'} inline-block`}
          onClick={handlerToggle}
        >
          <Image
            src={ArrowRightLight}
            className="inline-block cursor-pointer"
            alt="arrow right icon"
          />
        </span>
      </div>
      <div className={`${dropDown ? 'flex' : 'hidden'} pl-2 flex-col h-full`}>
        {lists.map((link) => {
          const { title, href } = link;

          return <Link href={href}>{title}</Link>;
        })}
      </div>
    </div>
  );
};

export default Navdropdown;
