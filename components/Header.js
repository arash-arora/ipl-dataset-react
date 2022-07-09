export default function Header() {
  return (
    <nav className='mt-5 flex justify-center items-center'>
      <ul className='flex gap-8 transition md:gap-20 text-[#444444] text-sm md:text-md'>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/winners'>Winners</a>
        </li>
        <li>
          <a href='/teams'>Teams</a>
        </li>
        <li>
          <a href='/player-of-match'>Players</a>
        </li>
      </ul>
    </nav>
  );
}
