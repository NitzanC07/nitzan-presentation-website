import { MongoClient } from "mongodb";
async function handler(req: any, res: any) {
  if (req.method === "POST") {
    const name = req.body.name;
    console.log(name);

    if (!name) {
      res.status(422).json({ message: "Invalid name input." });
      return;
    }

    const client = await MongoClient.connect(
      "mongodb+srv://nitzancohen:cKcZDYb8PhybVmeT@nitzancourses.fclrduf.mongodb.net/?retryWrites=true&w=majority"
    );
    const db = client.db();
    await db.collection("names").insertOne({ userName: name });

    client.close();
    res.status(201).json({ message: "Success!" });
  }
}

export default handler;
