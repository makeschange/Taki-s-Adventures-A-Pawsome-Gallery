import { Schema, model, models } from "mongoose";

const categorySchema = new Schema({
  category: { type: String, required: [true, "Category is required!"] },
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

categorySchema.statics.checkExistingCategory = async function (
  enteredCategory
) {
  return await this.exists({ category: enteredCategory });
};

const Category = models.Category || model("Category", categorySchema);

export default Category;
