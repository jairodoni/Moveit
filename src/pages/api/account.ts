import { NowRequest, NowResponse } from '@vercel/node'
import { MongoClient, Db } from 'mongodb'
import url from 'url';

let cachedDb: Db = null;

async function connectionToDatabase(uri: string) {
  if(cachedDb){
    return cachedDb;
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  const dbName = new url.URL(uri).pathname.substr(1);

  const db = client.db(dbName);

  cachedDb = db;

  return db;

}

export default async (req: NowRequest, res: NowResponse) => {
  const { name } = req.body;

  const db = await connectionToDatabase(process.env.MONGODB_URI);

  const collection = db.collection('account');

  try {
    if(await db.collection('account').findOne({ name })){
      return console.log("Nomes iguais: ", name);
    }else{
      
      await collection.insertOne({
        name,
        subscribeAt: new Date(),
      })
  
      console.log("Cadastrou: ", name);
      
      return res.status(200).send({ message: "Registration Success" });
    }  
  } catch (err) {
    
    return res.status(400).send({ err: "Registration faild" });
    
  }
  
 }