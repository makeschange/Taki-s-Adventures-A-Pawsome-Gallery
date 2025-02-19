import { Schema, model, models } from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

const userSchema = new Schema(
  {
    firstname: String,
    lastname: String,
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required!"],
      validate: [validator.isEmail, "Please provide a valid email!"],
    },
    profilePhoto: String,
    password: {
      type: String,
      required: [true, "Password is required!"],
      minLength: 5,
      select: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = models.User || model("User", userSchema);

export default User;
