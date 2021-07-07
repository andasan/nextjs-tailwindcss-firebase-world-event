import classes from './event-summary.style';

function EventSummary(props) {
  const { title } = props;

  return (
    <section className={classes.summary}>
      <h1 className={classes.summaryTitle}>{title}</h1>
    </section>
  );
}

export default EventSummary;