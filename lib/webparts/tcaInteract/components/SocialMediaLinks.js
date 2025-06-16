import * as React from 'react';
import styles from './TcaInteract.module.scss';
var SocialMediaLinks = function () {
    var socialLinks = [
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
    var handleSocialClick = function (url) {
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    return (React.createElement("div", { className: styles.socialMediaSection },
        React.createElement("div", { className: styles.socialTitle }, "Follow us on Social Media"),
        React.createElement("div", { className: styles.socialIcons }, socialLinks.map(function (link, index) { return (React.createElement("button", { key: index, className: styles.socialIcon, onClick: function () { return handleSocialClick(link.url); }, "aria-label": "Follow us on ".concat(link.name), type: "button" }, link.icon)); }))));
};
export default SocialMediaLinks;
//# sourceMappingURL=SocialMediaLinks.js.map