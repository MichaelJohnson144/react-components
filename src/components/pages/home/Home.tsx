import logo from '../../../assets/images/logo.svg';

export default function Home() {
  return (
    <main
      className={
        'flex flex-col flex-nowrap justify-center contents-center items-center w-full h-screen bg-zinc-800'
      }
      data-testid={'home'}
    >
      <h1 className={'font-bebas-neue text-4xl font-bold text-white'}>W E L C O M E!</h1>
      <img src={logo} alt={'logo'} className={'w-52 h-52 animate-spin'} />
      <h2 className={'font-bebas-neue text-2xl font-bold tracking-widest text-white'}>
        PLEASE, CHOOSE FROM ANY OF MY FAMILIES OF REUSABLE REACT FUNCTIONAL COMPONENTS
      </h2>
    </main>
  );
}
