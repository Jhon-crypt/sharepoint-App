import * as React from 'react';
import styles from './TcaInteract.module.scss';
var Events = function (_a) {
    var events = _a.events, loading = _a.loading;
    if (loading) {
        return (React.createElement("div", { className: styles.eventsSection },
            React.createElement("h2", { className: styles.sectionTitle }, "Events"),
            React.createElement("div", null, "Loading...")));
    }
    return (React.createElement("div", { className: styles.eventsSection },
        React.createElement("h2", { className: styles.sectionTitle }, "Events"),
        React.createElement("div", { className: styles.eventsList },
            events.map(function (event, index) { return (React.createElement("div", { key: index, className: styles.eventItem },
                React.createElement("span", { className: styles.eventDate },
                    event.Title,
                    " - ",
                    event.Date),
                event.Location && (React.createElement("div", null, event.Location)))); }),
            events.length === 0 && !loading && (React.createElement("div", null, "No upcoming events")))));
};
export default Events;
//# sourceMappingURL=Events.js.map