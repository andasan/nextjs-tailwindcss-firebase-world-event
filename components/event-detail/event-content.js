import classes from './event-content.style';

function EventContent(props) {
  return (
    <section className={classes.content}>
      {props.children}
    </section>
  );
}

export default EventContent;
