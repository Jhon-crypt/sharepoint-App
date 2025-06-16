import * as React from 'react';
import styles from './TcaInteract.module.scss';
var ResourceLinks = function () {
    var resourceLinks = [
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
    var handleLinkClick = function (url) {
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    return (React.createElement("div", { className: styles.resourceLinksSection },
        React.createElement("h2", { className: styles.sectionTitle }, "Resource Links"),
        React.createElement("div", { className: styles.linksList }, resourceLinks.map(function (link, index) { return (React.createElement("button", { key: index, className: styles.resourceLink, onClick: function () { return handleLinkClick(link.url); }, type: "button" },
            React.createElement("strong", null, link.title),
            React.createElement("span", { className: styles.linkDescription }, link.description))); }))));
};
export default ResourceLinks;
//# sourceMappingURL=ResourceLinks.js.map