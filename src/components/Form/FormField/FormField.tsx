import { useCallback, useState } from 'react';
import CallToAction from './CallToAction';
import Name from './Name';
import Email from './Email';
import Subject from './Subject';
import Message from './Message';
import { Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default function FormField() {
  const [wasClicked, setWasClicked] = useState(0);
  const handleOnClick = useCallback(() => {
    console.log('Submission: #', wasClicked);
    setWasClicked((prevCount) => prevCount + 1);
  }, [wasClicked]);

  return (
    <div
      className={
        'flex flex-col flex-nowrap justify-center content-center items-center py-4 px-4 w-full sm:w-fit bg-transparent-carbon-black-55 rounded-2xl drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]'
      }
    >
      <CallToAction />
      <div className={'w-full drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]'}>
        <Name />
        <div
          className={
            'flex flex-col sm:flex-row flex-nowrap justify-center content-center items-center my-4 sm:space-x-4'
          }
        >
          <Email />
          <Subject />
        </div>
        <Message />
        <Button
          className={
            '!w-full !bg-gradient-to-r !from-pink-600 !via-pink-400 !to-pink-500'
          }
          type={'submit'}
          variant={'contained'}
          onClick={handleOnClick}
        >
          <FontAwesomeIcon icon={faPaperPlane} />
          &nbsp;SUBMIT
        </Button>
      </div>
    </div>
  );
}
