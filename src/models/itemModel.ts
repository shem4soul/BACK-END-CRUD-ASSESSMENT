import mongoose, { Document, Schema } from "mongoose";

export interface IItem extends Document {
  name: string;
  description: string;
}

const itemSchema = new Schema<IItem>(
  {
    name: { type: String, required: true },
    description: { type: String },
  },
  { timestamps: true },
);

const Item = mongoose.model<IItem>("Item", itemSchema);
export default Item;
