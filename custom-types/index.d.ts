
declare module 'inventory-types' {

import { Types } from "mongoose"
  export type InventoryLocation = {
    name: String;
    address?: String;
    description?: String;
  }

  export type InventorySpace = {
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