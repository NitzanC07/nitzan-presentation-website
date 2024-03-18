import mongoose from "mongoose";

/**
 * * Explaination:
 * ? 'courses' mean to the specific collection in the DB.
 * ? The second argument call to CourseSchema class and
 * ? create a model with the types in it.
 * ? And finally, the model return and save in Course constant variable.
 */

const { Schema } = mongoose;

const courseSchema = new Schema({
  courseId: {
    type: String,
    required: true,
  },
  courseName: {
    type: String,
    required: true,
  },
  courseDescription: {
    type: String,
    required: true
  },
  courseContent: {
    type: Array,
    required: true
  }
});

export default mongoose.models.Course || mongoose.model("Course", courseSchema);
