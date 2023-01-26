export default function CallToAction() {
  return (
    <div className={'mb-4 font-bold text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]'}>
      <div
        className={
          'flex flex-row flex-nowrap justify-center content-center items-center mb-4 drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]'
        }
      >
        <div
          className={
            'flex-grow border-t-0 border-x-0 border-b-4 border-solid border-b-pink-400'
          }
        />
        <h2 className={'flex-shrink mx-2 text-4xl sm:text-5xl font-bold'}>
          C O N T A C T
        </h2>
        <div
          className={
            'flex-grow border-t-0 border-x-0 border-b-4 border-solid border-b-pink-400'
          }
        />
      </div>
      <h3
        className={
          'text-base sm:text-lg tracking-widest drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]'
        }
      >
        INTERESTED IN<span className={'text-pink-400'}> BOOKING ME? GREAT!</span> THEN
        PLEASE
        <span className={'text-pink-400'}> FILL OUT THE FORM BELOW</span> AND WE WILL
        <span className={'text-pink-400'}> GET IN TOUCH</span> SHORTLY.
      </h3>
    </div>
  );
}
