import React, { MouseEventHandler } from 'react';
import cn from 'classnames';

export interface SectionMenuItemRecord {
  anchor: string;
  label: string;
}

interface SectionMenuItemProps {
  highlightedAnchor?: string;
  item: SectionMenuItemRecord;
  onClick?: (item: SectionMenuItemRecord) => void;
  theme?: 'dark' | 'light';
}

export default function SectionMenuItem({
  item,
  highlightedAnchor,
  onClick,
  theme = 'dark',
}: SectionMenuItemProps) {
  const baseClasses = cn(
    'hover:after:w-full after:w-0 after:h-0.5 after:sm:h-[0.17rem] hover:after:opacity-100 after:opacity-0 after:bg-blue-800 after:transition-all after:duration-150 ' +
      'relative flex flex-col flex-wrap justify-center content-center items-center pb-1 font-bebas-neue text-base sm:text-3xl tracking-widest transition-all ease-in-out',
    {
      'after:left-0 after:w-full after:opacity-100': item.anchor === highlightedAnchor,
    },
    {
      'text-black': item.anchor === highlightedAnchor && theme === 'dark',
      'text-white': item.anchor === highlightedAnchor && theme === 'light',
    },
    {
      'hover:text-black text-gray-500': theme === 'dark',
      'hover:text-white text-gray-300': theme === 'light',
    },
  );
  const handleOnClick: MouseEventHandler = (event) => {
    event.preventDefault();
    onClick && onClick(item);
  };

  return (
    <a className={baseClasses} href={`/${item.anchor}`} onClick={handleOnClick}>
      {item.label}
    </a>
  );
}
