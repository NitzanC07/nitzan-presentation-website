// courses.js

// import clientPromise from "@/lib/mongodb";

// export default async function handler(req, res) {
//   const client = await clientPromise;
//   const db = client.db("courses");
//   switch (req.method) {
//     case "POST":
//       let bodyObject = JSON.parse(req.body);
//       let myPost = await db.collection("subjects").insertOne(bodyObject);
//       res.json(myPost.ops[0]);
//       break;
//     case "GET":
//       const allCourses = await db.collection("subjects").find({}).toArray();
//       res.json({ status: 200, data: allCourses });
//       break;
//   }
// }