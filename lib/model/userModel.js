import { Schema, model, models } from "mongoose";

const userSchema = new Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const User = models.User || model("User", userSchema);

export default User;
