import classes from './logistics-item.style';

function LogisticsItem(props) {
  const { icon: Icon } = props;

  return (
    <li className={classes.item}>
      <span className={classes.icon}>
        <Icon className={classes.SVG} />
      </span>
      <span className={classes.content}>{props.children}</span>
    </li>
  );
}

export default LogisticsItem;
