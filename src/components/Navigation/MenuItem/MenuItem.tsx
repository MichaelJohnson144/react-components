// Feel free to integrate and configure this component with "react-router-dom" at your own leisure

export interface MenuItemRecord {
  link: string;
  href?: string;
  label: string;
}

interface MenuItemProps {
  item: MenuItemRecord;
}

function handleTestOnClick(event: { preventDefault: () => void }) {
  // Is the event "cancelable?" If so, then "''prevent' the ''default' action' that
  // 'belongs to the 'event'' from occurring:'"
  event.preventDefault();
}

export default function MenuItem({ item }: MenuItemProps) {
  return (
    <li>
      <a
        className={
          'hover:text-white hover:bg-gradient-to-r hover:from-pink-400 hover:to-pink-600 rounded-[0.25rem] sm:rounded-md hover:animate-pulse ' +
          'inline-block py-1 sm:py-1.5 px-2.5 sm:px-3 my-1.5 mx-2 text-base sm:text-lg font-bold'
        }
        href={item.href ? item.href : `/${item.link}`}
        onClick={handleTestOnClick}
      >
        {item.label}
      </a>
    </li>
  );
}
