import Button from '../ui/button';
import classes from './results-title.style';

function ResultsTitle(props) {
  const { date } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className={classes.titleWrapper}>
      <h1>Events in {humanReadableDate}</h1>
      <Button link='/events' classProps={classes.button}>Show all events</Button>
    </section>
  );
}

export default ResultsTitle;
