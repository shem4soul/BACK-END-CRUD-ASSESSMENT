import { Request, Response } from "express";
import Item from "../models/itemModel";

// Create
export const createItem = async (req: Request, res: Response) => {
  const { name, description } = req.body;
  const item = await Item.create({ name, description });
  res.status(201).json(item);
};

// Read All
export const getItems = async (req: Request, res: Response) => {
  const items = await Item.find();
  res.json(items);
};

// Read One
export const getItem = async (req: Request, res: Response) => {
  const item = await Item.findById(req.params.id);
  if (!item) {
    res.status(404);
    throw new Error("Item not found");
  }
  res.json(item);
};

// Update
export const updateItem = async (req: Request, res: Response) => {
  const item = await Item.findById(req.params.id);
  if (!item) {
    res.status(404);
    throw new Error("Item not found");
  }
  item.name = req.body.name || item.name;
  item.description = req.body.description || item.description;
  const updatedItem = await item.save();
  res.json(updatedItem);
};

// Delete
export const deleteItem = async (req: Request, res: Response) => {
  const item = await Item.findByIdAndDelete(req.params.id);
  if (!item) {
    res.status(404);
    throw new Error("Item not found");
  }

  res.json({ message: "Item removed" });
};
