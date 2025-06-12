import * as React from 'react';
import styles from './TcaInteract.module.scss';
import { IProjectSpotlight } from './ITcaInteractProps';

interface IProjectSpotlightProps {
  projectSpotlight: IProjectSpotlight | null;
  loading: boolean;
}

const ProjectSpotlight: React.FC<IProjectSpotlightProps> = ({ projectSpotlight, loading }) => {
  if (loading) {
    return (
      <div className={styles.projectSpotlightSection}>
        <h2 className={styles.sectionTitle}>Project Spotlight</h2>
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className={styles.projectSpotlightSection}>
      <h2 className={styles.sectionTitle}>Project Spotlight</h2>
      {projectSpotlight && (
        <div className={styles.spotlightContent}>
          <div className={styles.spotlightLocation}>
            {projectSpotlight.Title}
          </div>
          <img 
            src={projectSpotlight.Image || "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"} 
            alt={projectSpotlight.Title}
            className={styles.spotlightImage}
          />
          {projectSpotlight.Description && (
            <div className={styles.spotlightDescription}>
              {projectSpotlight.Description}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectSpotlight; 