// mongodb.ts
import  mongoose from 'mongoose';

// let client
// let clientPromise

const options:{} = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}

async function connect() {
  if (!process.env.MONGODB_URI) {
    throw new Error('Add Mongo URI to .env.local')
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, options);
    console.log('Connected to MongoDB');
  } catch (error) {
    throw new Error("Error in connection to MongoDB.")
  }
}

export default connect;
