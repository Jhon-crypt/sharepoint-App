import * as React from 'react';
import styles from './TcaInteract.module.scss';
var ProjectSpotlight = function (_a) {
    var projectSpotlight = _a.projectSpotlight, loading = _a.loading;
    if (loading) {
        return (React.createElement("div", { className: styles.projectSpotlightSection },
            React.createElement("h2", { className: styles.sectionTitle }, "Project Spotlight"),
            React.createElement("div", null, "Loading...")));
    }
    return (React.createElement("div", { className: styles.projectSpotlightSection },
        React.createElement("h2", { className: styles.sectionTitle }, "Project Spotlight"),
        projectSpotlight && (React.createElement("div", { className: styles.spotlightContent },
            React.createElement("div", { className: styles.spotlightLocation }, projectSpotlight.Title),
            React.createElement("img", { src: projectSpotlight.Image || "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", alt: projectSpotlight.Title, className: styles.spotlightImage }),
            projectSpotlight.Description && (React.createElement("div", { className: styles.spotlightDescription }, projectSpotlight.Description))))));
};
export default ProjectSpotlight;
//# sourceMappingURL=ProjectSpotlight.js.map