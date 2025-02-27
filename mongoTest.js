const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://benjemiawael2003:OybPOJe1lQEMIoii@formulaireenactus.bb8n0.mongodb.net/?retryWrites=true&w=majority&appName=formulaireEnactus";

// Crée un MongoClient avec les options du client
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connecte le client au serveur
    await client.connect();
    // Envoie un ping pour vérifier la connexion
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Assure-toi que le client se ferme après l'opération
    await client.close();
  }
}

run().catch(console.dir);