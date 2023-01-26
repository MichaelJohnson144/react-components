function handleTestOnClick(event: { preventDefault: () => void }) {
  // Is the event "cancelable?" If so, then "''prevent' the ''default' action' that
  // 'belongs to the 'event'' from occurring:'"
  event.preventDefault();
}

export default function Logo() {
  return (
    <a
      className={'font-helvetica-now text-2xl font-bold'}
      href={'/'}
      onClick={handleTestOnClick}
    >
      Your&nbsp;&nbsp;Logo
    </a>
  );
}
