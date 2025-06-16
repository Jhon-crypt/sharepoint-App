import * as React from 'react';
import styles from './TcaInteract.module.scss';
var CoreValues = function () {
    var coreValues = [
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
    return (React.createElement("div", { className: styles.coreValuesSection },
        React.createElement("h2", { className: styles.sectionTitle }, "Core Values"),
        React.createElement("div", { className: styles.valuesList }, coreValues.map(function (value, index) { return (React.createElement("div", { key: index, className: styles.valueItem },
            React.createElement("div", { className: styles.valueIcon }, value.icon),
            React.createElement("div", { className: styles.valueContent },
                React.createElement("div", { className: styles.valueTitle }, value.title),
                React.createElement("div", { className: styles.valueDescription }, value.description)))); }))));
};
export default CoreValues;
//# sourceMappingURL=CoreValues.js.map