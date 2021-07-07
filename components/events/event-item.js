import Button from '../ui/button';
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';
import classes from './event-item.style';

function EventItem(props) {
  const { title, image, date, location, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const formattedAddress = location.replace(', ', '\n');
  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={'/' + image} alt={title} className={classes.itemImg} />
      <div className={classes.content}>
        <div>
          <h2 className={classes.contentH2}>{title}</h2>
          <div className={classes.iconWrapper}>
            <DateIcon className={classes.SVG} />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.iconWrapper}>
            <AddressIcon className={classes.SVG} />
            <address className={classes.address}>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.action}>
          <Button link={exploreLink}>
            <span className={classes.actionTitle}>Explore Event</span>
            <span className={classes.actionIconWrapper}>
              <ArrowRightIcon className={classes.actionIcon} />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
