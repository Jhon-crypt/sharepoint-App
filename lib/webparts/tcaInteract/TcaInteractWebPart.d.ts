import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
export interface ITcaInteractWebPartProps {
    description: string;
}
export default class TcaInteractWebPart extends BaseClientSideWebPart<ITcaInteractWebPartProps> {
    protected onInit(): Promise<void>;
    render(): void;
    protected onDispose(): void;
    protected get dataVersion(): Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=TcaInteractWebPart.d.ts.map