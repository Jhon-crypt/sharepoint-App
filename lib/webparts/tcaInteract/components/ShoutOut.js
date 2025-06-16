import * as React from 'react';
import styles from './TcaInteract.module.scss';
var ShoutOut = function (_a) {
    var shoutOut = _a.shoutOut, loading = _a.loading;
    if (loading) {
        return (React.createElement("div", { className: styles.shoutOutSection },
            React.createElement("h2", { className: styles.sectionTitle }, "Shout Out to..."),
            React.createElement("div", null, "Loading...")));
    }
    return (React.createElement("div", { className: styles.shoutOutSection },
        React.createElement("h2", { className: styles.sectionTitle }, "Shout Out to..."),
        shoutOut && (React.createElement("div", { className: styles.shoutOutCard },
            React.createElement("div", { className: styles.avatarContainer },
                React.createElement("div", { className: styles.avatar }, "\uD83D\uDC64"),
                React.createElement("div", { className: styles.nameTitle },
                    React.createElement("div", { className: styles.name }, shoutOut.Name),
                    React.createElement("div", { className: styles.title }, shoutOut.Title))),
            React.createElement("div", { className: styles.shoutOutText }, shoutOut.Text),
            React.createElement("div", { className: styles.nominator }, "Nominate your teammate! Send their name and why you are nominating them to: xxx@tca-arch.com")))));
};
export default ShoutOut;
//# sourceMappingURL=ShoutOut.js.map