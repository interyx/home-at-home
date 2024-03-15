
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
}