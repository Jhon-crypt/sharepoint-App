import * as React from 'react';
import { useState, useEffect } from 'react';
import { spfi, SPFx } from '@pnp/sp';
import '@pnp/sp/webs';
import '@pnp/sp/lists';
import '@pnp/sp/items';
import { ITcaInteractProps, IProjectSpotlight, IShoutOut, IEvent } from './ITcaInteractProps';
import styles from './TcaInteract.module.scss';

// Individual component imports
import Header from './Header';
import Mission from './Mission';
import CoreValues from './CoreValues';
import ResourceLinks from './ResourceLinks';
import ProjectSpotlight from './ProjectSpotlight';
import ShoutOut from './ShoutOut';
import Events from './Events';
import SocialMediaLinks from './SocialMediaLinks';

const TcaInteract: React.FC<ITcaInteractProps> = ({ description, context }) => {
  const [projectSpotlight, setProjectSpotlight] = useState<IProjectSpotlight | null>(null);
  const [shoutOut, setShoutOut] = useState<IShoutOut | null>(null);
  const [events, setEvents] = useState<IEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadSharePointData = async () => {
      try {
        setLoading(true);
        
        // Initialize PnPjs with the current context
        const sp = spfi().using(SPFx(context));
        
        // Load Project Spotlight data
        try {
          const spotlightItems = await sp.web.lists.getByTitle("ProjectSpotlight").items.top(1)();
          if (spotlightItems.length > 0) {
            setProjectSpotlight(spotlightItems[0]);
          }
        } catch (spotlightError) {
          console.log('ProjectSpotlight list not found, using default data');
          setProjectSpotlight({
            Title: "Vox at Cumulus, Los Angeles, CA",
            Image: "/sites/SiteAssets/default-project.jpg",
            Description: "Modern apartment complex featuring sustainable design and innovative living spaces."
          });
        }

        // Load Shout Out data
        try {
          const shoutOutItems = await sp.web.lists.getByTitle("ShoutOuts").items.top(1)();
          if (shoutOutItems.length > 0) {
            setShoutOut(shoutOutItems[0]);
          }
        } catch (shoutOutError) {
          console.log('ShoutOuts list not found, using default data');
          setShoutOut({
            Name: "Name, Title",
            Title: "Position Title",
            Nominator: "Person Name",
            Text: "Nominated by Person Name went above and beyond the call of duty, etc. etc. blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah"
          });
        }

        // Load Events data
        try {
          const eventItems = await sp.web.lists.getByTitle("Events").items.top(10)();
          setEvents(eventItems);
        } catch (eventsError) {
          console.log('Events list not found, using default data');
          setEvents([
            { Title: "XXXXXX", Date: "10/12", Location: "" },
            { Title: "XXXXXX", Date: "OC 10/25, LA 10/25, OAK 10/30", Location: "" },
            { Title: "XXXXXX", Date: "OC 11/13, LA 11/12, OAK 11/14", Location: "" },
            { Title: "XXXXXX", Date: "", Location: "" }
          ]);
        }

      } catch (err) {
        console.error('Error loading SharePoint data:', err);
        setError('Failed to load data from SharePoint');
      } finally {
        setLoading(false);
      }
    };

    loadSharePointData();
  }, [context]);

  return (
    <div className={styles.tcaInteract}>
      <Header />
      
      <div className={styles.mainContent}>
        <div className={styles.leftColumn}>
          <Mission />
          <CoreValues />
        </div>
        
        <div className={styles.middleColumn}>
          <ResourceLinks />
          <ProjectSpotlight 
            projectSpotlight={projectSpotlight}
            loading={loading}
          />
        </div>
        
        <div className={styles.rightColumn}>
          <ShoutOut 
            shoutOut={shoutOut}
            loading={loading}
          />
          <Events 
            events={events}
            loading={loading}
          />
          <SocialMediaLinks />
        </div>
      </div>
    </div>
  );
};

export default TcaInteract; 