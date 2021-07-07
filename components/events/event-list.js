import EventItem from './event-item'

function EventList(props) {
  const { items } = props

  return (
    <ul className='w-11/12 max-w-screen-sm mt-20 mb-20 ml-auto mr-auto'>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  )
}

export default EventList
