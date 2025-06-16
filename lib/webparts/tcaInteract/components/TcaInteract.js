var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import * as React from 'react';
import { useState, useEffect } from 'react';
import { spfi, SPFx } from '@pnp/sp';
import '@pnp/sp/webs';
import '@pnp/sp/lists';
import '@pnp/sp/items';
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
var TcaInteract = function (_a) {
    var description = _a.description, context = _a.context;
    var _b = useState(null), projectSpotlight = _b[0], setProjectSpotlight = _b[1];
    var _c = useState(null), shoutOut = _c[0], setShoutOut = _c[1];
    var _d = useState([]), events = _d[0], setEvents = _d[1];
    var _e = useState(true), loading = _e[0], setLoading = _e[1];
    // Removed unused error state
    useEffect(function () {
        var loadSharePointData = function () { return __awaiter(void 0, void 0, void 0, function () {
            var sp, spotlightItems, spotlightError_1, shoutOutItems, shoutOutError_1, eventItems, eventsError_1, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 11, 12, 13]);
                        setLoading(true);
                        sp = spfi().using(SPFx(context));
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, sp.web.lists.getByTitle("ProjectSpotlight").items.top(1)()];
                    case 2:
                        spotlightItems = _a.sent();
                        if (spotlightItems.length > 0) {
                            setProjectSpotlight(spotlightItems[0]);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        spotlightError_1 = _a.sent();
                        console.log('ProjectSpotlight list not found, using default data');
                        setProjectSpotlight({
                            Title: "Vox at Cumulus, Los Angeles, CA",
                            Image: "/sites/SiteAssets/default-project.jpg",
                            Description: "Modern apartment complex featuring sustainable design and innovative living spaces."
                        });
                        return [3 /*break*/, 4];
                    case 4:
                        _a.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, sp.web.lists.getByTitle("ShoutOuts").items.top(1)()];
                    case 5:
                        shoutOutItems = _a.sent();
                        if (shoutOutItems.length > 0) {
                            setShoutOut(shoutOutItems[0]);
                        }
                        return [3 /*break*/, 7];
                    case 6:
                        shoutOutError_1 = _a.sent();
                        console.log('ShoutOuts list not found, using default data');
                        setShoutOut({
                            Name: "Name, Title",
                            Title: "Position Title",
                            Nominator: "Person Name",
                            Text: "Nominated by Person Name went above and beyond the call of duty, etc. etc. blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah"
                        });
                        return [3 /*break*/, 7];
                    case 7:
                        _a.trys.push([7, 9, , 10]);
                        return [4 /*yield*/, sp.web.lists.getByTitle("Events").items.top(10)()];
                    case 8:
                        eventItems = _a.sent();
                        setEvents(eventItems);
                        return [3 /*break*/, 10];
                    case 9:
                        eventsError_1 = _a.sent();
                        console.log('Events list not found, using default data');
                        setEvents([
                            { Title: "XXXXXX", Date: "10/12", Location: "" },
                            { Title: "XXXXXX", Date: "OC 10/25, LA 10/25, OAK 10/30", Location: "" },
                            { Title: "XXXXXX", Date: "OC 11/13, LA 11/12, OAK 11/14", Location: "" },
                            { Title: "XXXXXX", Date: "", Location: "" }
                        ]);
                        return [3 /*break*/, 10];
                    case 10: return [3 /*break*/, 13];
                    case 11:
                        err_1 = _a.sent();
                        console.error('Error loading SharePoint data:', err_1);
                        return [3 /*break*/, 13];
                    case 12:
                        setLoading(false);
                        return [7 /*endfinally*/];
                    case 13: return [2 /*return*/];
                }
            });
        }); };
        loadSharePointData();
    }, [context]);
    return (React.createElement("div", { className: styles.tcaInteract },
        React.createElement(Header, null),
        React.createElement("div", { className: styles.mainContent },
            React.createElement("div", { className: styles.leftColumn },
                React.createElement(Mission, null),
                React.createElement(CoreValues, null)),
            React.createElement("div", { className: styles.middleColumn },
                React.createElement(ResourceLinks, null),
                React.createElement(ProjectSpotlight, { projectSpotlight: projectSpotlight, loading: loading })),
            React.createElement("div", { className: styles.rightColumn },
                React.createElement(ShoutOut, { shoutOut: shoutOut, loading: loading }),
                React.createElement(Events, { events: events, loading: loading }),
                React.createElement(SocialMediaLinks, null)))));
};
export default TcaInteract;
//# sourceMappingURL=TcaInteract.js.map