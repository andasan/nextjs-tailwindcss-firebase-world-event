import Link from 'next/link';

import classes from './main-header.style';

function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href='/'>
          <a className={classes.logoLink}>WorldNow</a>
        </Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href='/events'>Browse All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
