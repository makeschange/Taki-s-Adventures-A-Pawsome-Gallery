import { Schema, model, models } from "mongoose";

const gallerySchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  title: { type: String, required: true },
  imageUrl: { type: String, required: true },
  description: { type: String },
  tags: { type: [String], index: true },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  rating: { type: Number, default: 0 },
  postedOn: { type: Date, default: Date.now },
});

const Gallery = models.Gallery || model("Gallery", gallerySchema);
export default Gallery;
