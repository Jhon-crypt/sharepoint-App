import * as React from 'react';
import styles from './TcaInteract.module.scss';

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.welcomeTitle}>WELCOME!</h1>
      <div className={styles.logo}>
        {/* TCA Interact logo placeholder - replace with actual logo */}
        <div style={{ 
          color: 'white', 
          fontSize: '24px', 
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <span style={{ 
            border: '2px solid white', 
            padding: '5px 10px',
            fontFamily: 'serif'
          }}>
            TCA
          </span>
          <span>Interact</span>
        </div>
      </div>
    </div>
  );
};

export default Header; 