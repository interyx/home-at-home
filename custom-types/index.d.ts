
declare module 'inventory-types' {

import { Types } from "mongoose"
  export type LocationData = {
    name: String;
    address?: String;
    description?: String;
  }

  export type LocationModel = {
    _id: Types.ObjectId;
    shortId: String;
    name: String;
    address: String;
    description: String;
  }

  export type SpaceData = {
    name: String;
    description?: String;
    parent?: String;
    location: String;
  }
  
  export type SpaceModel = {
    _id: Types.ObjectId;
    name: String;
    description: String;
    parent: String;
    location: String;
    shortId: String;
  }
}