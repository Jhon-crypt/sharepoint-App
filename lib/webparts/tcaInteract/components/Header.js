import * as React from 'react';
import styles from './TcaInteract.module.scss';
var Header = function () {
    return (React.createElement("div", { className: styles.header },
        React.createElement("h1", { className: styles.welcomeTitle }, "WELCOME!"),
        React.createElement("div", { className: styles.logo },
            React.createElement("div", { style: {
                    color: 'white',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                } },
                React.createElement("span", { style: {
                        border: '2px solid white',
                        padding: '5px 10px',
                        fontFamily: 'serif'
                    } }, "TCA"),
                React.createElement("span", null, "Interact")))));
};
export default Header;
//# sourceMappingURL=Header.js.map