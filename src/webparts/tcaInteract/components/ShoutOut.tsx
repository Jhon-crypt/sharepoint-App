import * as React from 'react';
import styles from './TcaInteract.module.scss';
import { IShoutOut } from './ITcaInteractProps';

interface IShoutOutProps {
  shoutOut: IShoutOut | null;
  loading: boolean;
}

const ShoutOut: React.FC<IShoutOutProps> = ({ shoutOut, loading }) => {
  if (loading) {
    return (
      <div className={styles.shoutOutSection}>
        <h2 className={styles.sectionTitle}>Shout Out to...</h2>
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className={styles.shoutOutSection}>
      <h2 className={styles.sectionTitle}>Shout Out to...</h2>
      {shoutOut && (
        <div className={styles.shoutOutCard}>
          <div className={styles.avatarContainer}>
            <div className={styles.avatar}>
              👤
            </div>
            <div className={styles.nameTitle}>
              <div className={styles.name}>{shoutOut.Name}</div>
              <div className={styles.title}>{shoutOut.Title}</div>
            </div>
          </div>
          <div className={styles.shoutOutText}>
            {shoutOut.Text}
          </div>
          <div className={styles.nominator}>
            Nominate your teammate! Send their name and why you are nominating them to: xxx@tca-arch.com
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoutOut; 