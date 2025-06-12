import * as React from 'react';
import styles from './TcaInteract.module.scss';
import { IResourceLink } from './ITcaInteractProps';

const ResourceLinks: React.FC = () => {
  const resourceLinks: IResourceLink[] = [
    {
      title: "Deltek Vantage",
      description: "Timecard Log In",
      url: "https://deltek.com"
    },
    {
      title: "Pinnacle Series",
      description: "TCA University & database of Document Guides",
      url: "https://pinnacle.com"
    },
    {
      title: "Open Asset",
      description: "Library of TCA project information and digital asset collection",
      url: "https://openasset.com"
    },
    {
      title: "Bloom Growth",
      description: "Our EOS system for L10 groups",
      url: "https://bloomgrowth.com"
    },
    {
      title: "Black Spectacles",
      description: "Online Architect Exam Prep",
      url: "https://blackspectacles.com"
    }
  ];

  const handleLinkClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={styles.resourceLinksSection}>
      <h2 className={styles.sectionTitle}>Resource Links</h2>
      <div className={styles.linksList}>
        {resourceLinks.map((link, index) => (
          <button
            key={index}
            className={styles.resourceLink}
            onClick={() => handleLinkClick(link.url)}
            type="button"
          >
            <strong>{link.title}</strong>
            <span className={styles.linkDescription}>{link.description}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ResourceLinks; 