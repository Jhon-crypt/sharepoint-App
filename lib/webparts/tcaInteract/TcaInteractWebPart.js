var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { PropertyPaneTextField } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
// PnPjs is initialized in the main component
import * as strings from 'TcaInteractWebPartStrings';
import TcaInteract from './components/TcaInteract';
var TcaInteractWebPart = /** @class */ (function (_super) {
    __extends(TcaInteractWebPart, _super);
    function TcaInteractWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TcaInteractWebPart.prototype.onInit = function () {
        return _super.prototype.onInit.call(this);
    };
    TcaInteractWebPart.prototype.render = function () {
        var element = React.createElement(TcaInteract, {
            description: this.properties.description,
            context: this.context
        });
        ReactDom.render(element, this.domElement);
    };
    TcaInteractWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(TcaInteractWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: false,
        configurable: true
    });
    TcaInteractWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField('description', {
                                    label: strings.DescriptionFieldLabel
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return TcaInteractWebPart;
}(BaseClientSideWebPart));
export default TcaInteractWebPart;
//# sourceMappingURL=TcaInteractWebPart.js.map