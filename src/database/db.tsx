import { MongoClient } from "mongodb";

MongoClient.connect(
  "mongodb+srv://nitzancohen:Cwg94LLAtMXkNcLC@nitzancourses.fclrduf.mongodb.net/?retryWrites=true&w=majority"
).then((client) => {
  return client.db();
});
