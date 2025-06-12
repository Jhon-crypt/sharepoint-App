import * as React from 'react';
import styles from './TcaInteract.module.scss';
import { ICoreValue } from './ITcaInteractProps';

const CoreValues: React.FC = () => {
  const coreValues: ICoreValue[] = [
    {
      icon: "🎯",
      title: "Embrace the Journey",
      description: "We love the work we do and do so in a fun positive environment."
    },
    {
      icon: "🤝",
      title: "Collaboration Counts",
      description: "Humility and vigorous team work lead to innovation and mutual success."
    },
    {
      icon: "❤️",
      title: "Character Counts",
      description: "We earn respect through honesty and integrity."
    },
    {
      icon: "🏠",
      title: "Family Culture",
      description: "Our teammates' growth, health, and professional development are priorities of TCA."
    },
    {
      icon: "✅",
      title: "Get it Done",
      description: "Our experience and perseverance ensure successful project completion."
    }
  ];

  return (
    <div className={styles.coreValuesSection}>
      <h2 className={styles.sectionTitle}>Core Values</h2>
      <div className={styles.valuesList}>
        {coreValues.map((value, index) => (
          <div key={index} className={styles.valueItem}>
            <div className={styles.valueIcon}>
              {value.icon}
            </div>
            <div className={styles.valueContent}>
              <div className={styles.valueTitle}>{value.title}</div>
              <div className={styles.valueDescription}>{value.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreValues; 