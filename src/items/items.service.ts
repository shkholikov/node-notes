// src/items/items.service.ts

/**
 * Data Model Interfaces
 */
import { Item, BaseItem } from "./item.interface";
import { Items } from "./items.interface";

/**
 * In-Memory Store
 */
let items: Items = {
  1: {
    id: 1,
    name: "Burger",
    price: 599,
    description: "Tasty",
    image: "https://cdn.auth0.com/blog/whatabyte/burger-sm.png"
  },
  2: {
    id: 2,
    name: "Pizza",
    price: 299,
    description: "Cheesy",
    image: "https://cdn.auth0.com/blog/whatabyte/pizza-sm.png"
  },
  3: {
    id: 3,
    name: "Tea",
    price: 199,
    description: "Informative",       
    image: "https://cdn.auth0.com/blog/whatabyte/tea-sm.png"
  }
};
/**
 * Service Methods
 */
export async function findAll(): Promise<Item[]> {
  return Object.values(items);
}

export async function find(id: number): Promise<Item> {
  return items[id];
}

export async function create(newItem: BaseItem): Promise<Item> {
  const id = new Date().valueOf();
  items[id] = { id, ...newItem };
  return items[id];
}

export async function update(id: number, itemUpdate: BaseItem): Promise<Item | null> {
  const item = await find(id);
  if (!item) {
    return null;
  }
  items[id] = { id, ...itemUpdate };
  return items[id];
}

export async function remove(id: number): Promise<null | void> {
  const item = await find(id);

  if (!item) {
    return null;
  }

  delete items[id];
}


