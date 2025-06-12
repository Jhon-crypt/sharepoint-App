import * as React from 'react';
import styles from './TcaInteract.module.scss';
import { IEvent } from './ITcaInteractProps';

interface IEventsProps {
  events: IEvent[];
  loading: boolean;
}

const Events: React.FC<IEventsProps> = ({ events, loading }) => {
  if (loading) {
    return (
      <div className={styles.eventsSection}>
        <h2 className={styles.sectionTitle}>Events</h2>
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className={styles.eventsSection}>
      <h2 className={styles.sectionTitle}>Events</h2>
      <div className={styles.eventsList}>
        {events.map((event, index) => (
          <div key={index} className={styles.eventItem}>
            <span className={styles.eventDate}>
              {event.Title} - {event.Date}
            </span>
            {event.Location && (
              <div>{event.Location}</div>
            )}
          </div>
        ))}
        {events.length === 0 && !loading && (
          <div>No upcoming events</div>
        )}
      </div>
    </div>
  );
};

export default Events; 