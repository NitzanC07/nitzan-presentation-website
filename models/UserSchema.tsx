import mongoose from "mongoose";

/**
 * * Explaination:
 * ? 'users' mean to the specific collection in the DB.
 * ? The second argument call to UserSchema class and
 * ? create a model with the types in it.
 * ? And finally, the model return and save in User constant variable.
 */

const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  classLevel: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

});

export default mongoose.models.User || mongoose.model("User", userSchema);
