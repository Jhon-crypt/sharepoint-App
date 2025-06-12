import * as React from 'react';
import styles from './TcaInteract.module.scss';

const Mission: React.FC = () => {
  return (
    <div className={styles.missionSection}>
      <h2 className={styles.sectionTitle}>Our Mission</h2>
      <p className={styles.missionText}>
        Creative collaboration to design a better tomorrow
      </p>
      <img 
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
        alt="Modern building architecture" 
        className={styles.missionImage}
      />
    </div>
  );
};

export default Mission; 