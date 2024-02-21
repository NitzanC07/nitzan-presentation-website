const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    courseName: String,
    courseDescription: String,
    courseContent: {}
});

/**
 * * Explaination: 
 * ? 'course' mean to the specific collection in the DB.
 * ? The second argument call to CourseSchema class and 
 * ? create a model with the types in it. 
 * ? And finally, the model return and save in Course constant variable.
 */
const Course = mongoose.model('course', CourseSchema);

module.exports = Course;