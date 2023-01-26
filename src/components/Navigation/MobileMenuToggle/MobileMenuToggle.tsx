import { MouseEventHandler } from 'react';
import IconButton from '@mui/material/IconButton';
import { MenuOpenRounded, MenuRounded } from '@mui/icons-material';

interface MobileMenuToggleProps {
  menuIsOpen: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function MobileMenuToggle({ menuIsOpen, onClick }: MobileMenuToggleProps) {
  return (
    <IconButton className={'lg:!hidden !my-0 !text-white'} onClick={onClick}>
      {menuIsOpen ? (
        <MenuOpenRounded className={'!text-4xl'} data-testid={'MenuOpenRounded'} />
      ) : (
        <MenuRounded className={'!text-4xl'} data-testid={'MenuRounded'} />
      )}
    </IconButton>
  );
}
