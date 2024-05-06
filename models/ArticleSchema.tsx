import mongoose from "mongoose";

/**
 * * Explaination:
 * ? 'articles' mean to the specific collection in the DB.
 * ? The second argument call to ArticleSchema class and
 * ? create a model with the types in it.
 * ? And finally, the model return and save in Course constant variable.
 */

const { Schema } = mongoose;

const articleSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  bodyText: {
    type: Array,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  writer: {
    type: String,
    required: true,
  },
  originalPost: {
    type: String,
    required: false,
  },
});

export default mongoose.models.Article ||
  mongoose.model("Article", articleSchema);
