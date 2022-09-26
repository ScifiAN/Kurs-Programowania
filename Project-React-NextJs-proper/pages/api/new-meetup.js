import { MongoClient } from "mongodb";

// /api/new-meetup

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodbdummyurl://<user>:<password>.@cluster.mongodb.net/FirstDatabase"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne({ data });

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
};

export default handler;
