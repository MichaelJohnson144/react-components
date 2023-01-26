import cn from 'classnames';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const contact = cn(
  'bg-zinc-800',
  'overflow-auto w-full h-screen bg-fixed bg-center bg-no-repeat bg-cover',
);

export default function Confirmation() {
  return (
    <main className={contact} data-testid={'confirmation'}>
      <div
        className={
          'flex flex-row flex-nowrap justify-center content-center items-center w-full h-screen bg-transparent-carbon-black-65'
        }
      >
        <div className={'drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]'}>
          <FontAwesomeIcon icon={faCircleCheck} className={'text-5xl text-pink-400'} />
          <div
            className={
              'my-6 flex flex-row flex-nowrap justify-center content-center items-center w-screen h-full'
            }
          >
            <div
              className={
                'w-full border-t-0 border-x-0 border-b-4 border-solid border-b-pink-400'
              }
            />
            <h2 className={'mx-2 text-4xl sm:text-6xl font-bold whitespace-nowrap'}>
              T H A N K&nbsp;&nbsp;Y O U !
            </h2>
            <div
              className={
                'w-full border-t-0 border-x-0 border-b-4 border-solid border-b-pink-400'
              }
            />
          </div>
          <h2 className={'text-base sm:text-2xl font-bold tracking-widest'}>
            <span className={'text-pink-400'}>Your message</span> has been{' '}
            <span className={'text-pink-400'}>received!</span> I will{' '}
            <span className={'text-pink-400'}>reply</span> within{' '}
            <span className={'text-pink-400'}>2 business days!</span>
          </h2>
        </div>
      </div>
    </main>
  );
}
