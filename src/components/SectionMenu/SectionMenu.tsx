import React, { useCallback, useState } from 'react';
import SectionMenuItem, {
  SectionMenuItemRecord,
} from './SectionMenuItem/SectionMenuItem';

export interface SectionMenuProps {
  items: SectionMenuItemRecord[];
  onChange?: (item: SectionMenuItemRecord) => void;
  selectedAnchor?: string;
  theme?: 'dark' | 'light';
}

export default function SectionMenu({
  items,
  onChange,
  selectedAnchor,
  theme = 'dark',
}: SectionMenuProps) {
  const [selectedSectionMenuItem, setSelectedSectionMenuItem] = useState(selectedAnchor);
  const onClick = (clickedSectionMenuItem: SectionMenuItemRecord) => {
    if (selectedSectionMenuItem !== clickedSectionMenuItem.anchor) {
      setSelectedSectionMenuItem(clickedSectionMenuItem.anchor);
      onChange && onChange(clickedSectionMenuItem);
    }
  };
  const handleOnClick = useCallback(
    (clickedSectionMenuItem: SectionMenuItemRecord) => {
      onClick(clickedSectionMenuItem);
    },
    [selectedSectionMenuItem],
  );

  return (
    <nav
      className={
        'flex flex-row flex-nowrap justify-start content-center items-center mb-5 space-x-3 w-full h-fit whitespace-nowrap'
      }
    >
      {items.map((item, index) => {
        return (
          <React.Fragment key={index}>
            {index ? <span className={'mb-1 w-1 h-1 bg-zinc-400 rounded-full'} /> : null}
            <SectionMenuItem
              highlightedAnchor={selectedSectionMenuItem}
              item={item}
              onClick={handleOnClick}
              theme={theme}
            />
          </React.Fragment>
        );
      })}
    </nav>
  );
}
