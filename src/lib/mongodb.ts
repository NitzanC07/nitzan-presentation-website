// mongodb.ts
import { Mongoose } from 'mongoose'
import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI || '';
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}

let client
let clientPromise

if (!process.env.MONGODB_URI) {
  throw new Error('Add Mongo URI to .env.local')
}

async function connect() {
  try {
    await mongoose.connect(uri, options);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
}
