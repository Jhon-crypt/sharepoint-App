import * as React from 'react';
import styles from './TcaInteract.module.scss';

const SocialMediaLinks: React.FC = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/tcaarchitectsinc',
      icon: '💼'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/TCA-Architects-Inc-396460527096036/',
      icon: '📘'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/tcaarchitects/',
      icon: '📷'
    }
  ];

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={styles.socialMediaSection}>
      <div className={styles.socialTitle}>Follow us on Social Media</div>
      <div className={styles.socialIcons}>
        {socialLinks.map((link, index) => (
          <button
            key={index}
            className={styles.socialIcon}
            onClick={() => handleSocialClick(link.url)}
            aria-label={`Follow us on ${link.name}`}
            type="button"
          >
            {link.icon}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaLinks; 