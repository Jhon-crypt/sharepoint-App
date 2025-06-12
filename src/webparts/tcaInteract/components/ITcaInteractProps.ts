import { WebPartContext } from '@microsoft/sp-webpart-base';

export interface ITcaInteractProps {
  description: string;
  context: WebPartContext;
}

// SharePoint List Item interfaces
export interface IProjectSpotlight {
  Title: string;
  Image: string;
  Description: string;
}

export interface IShoutOut {
  Name: string;
  Title: string;
  Nominator: string;
  Text: string;
}

export interface IEvent {
  Title: string;
  Date: string;
  Location: string;
}

export interface ICoreValue {
  icon: string;
  title: string;
  description: string;
}

export interface IResourceLink {
  title: string;
  description: string;
  url: string;
} 