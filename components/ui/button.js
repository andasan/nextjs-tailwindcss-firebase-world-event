import Link from 'next/link'

import classes from './button.style'

function Button(props) {
  const { link, classProps, onClick, children } = props
  if (props.link) {
    return (
      <Link href={link}>
        <a className={classProps ? classProps : classes.btn}>{children}</a>
      </Link>
    )
  }

  return (
    <button className={classProps ? classProps : classes.btn} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
