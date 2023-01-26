// Feel free to integrate and configure this component with "react-router-dom" at your own leisure

import { useCallback, useState } from 'react';
import Button from '../../ui/Button';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function handleTestOnClick(event: { preventDefault: () => void }) {
  // Is the event "cancelable?" If so, then "''prevent' the ''default' action' that
  // 'belongs to the 'event'' from occurring:'"
  event.preventDefault();
}

export default function SocialMedia() {
  const [wasClicked, setWasClicked] = useState(false);
  const handleOnClick = useCallback(() => {
    setWasClicked(!wasClicked);
  }, [wasClicked]);

  return (
    <li
      className={
        'hidden lg:flex flex-row flex-nowrap justify-center content-center items-center space-x-4'
      }
    >
      <a href={`https://www.linkedin.com/`}>
        <Button color={'inherit'} type={'button'} onClick={handleTestOnClick}>
          <FontAwesomeIcon className={'text-4xl text-[#0077B5]'} icon={faLinkedin} />
        </Button>
      </a>
      <a href={`https://github.com/`}>
        <Button color={'inherit'} type={'button'} onClick={handleTestOnClick}>
          <FontAwesomeIcon className={'text-4xl text-white'} icon={faGithub} />
        </Button>
      </a>
    </li>
  );
}
