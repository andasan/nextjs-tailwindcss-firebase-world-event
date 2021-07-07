import ExclamationMarkIcon from '../icons/exclamation-mark-icon'
import classes from './error-alert.style'

function ErrorAlert(props) {
  return (
    <div className={classes.alert}>
      <ExclamationMarkIcon className={classes.SVG} />
      {props.children}
    </div>
  )
}

export default ErrorAlert
