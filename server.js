const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Configuration pour utiliser body-parser et CORS
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connexion à MongoDB Atlas
mongoose.connect('mongodb+srv://benjemiawael2003:OybPOJe1lQEMIoii@formulaireenactus.bb8n0.mongodb.net/formDB?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connexion à MongoDB réussie');
})
.catch(err => {
    console.log('Erreur de connexion à MongoDB:', err);
});

// Définition du modèle de données pour le formulaire
const FormSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    game1: String,
    game1Feedback: String,
    game2: String,
    game2Feedback: String,
    game3: String,
    game3Feedback: String,
    game4: String,
    game4Feedback: String,
    game5: String,
    game5Feedback: String,
    suggestions1: String,
    suggestions2: String,
    suggestions3: String,
    suggestions4: String,
    suggestions5: String,
});

const FormData = mongoose.model('FormData', FormSchema);

// Route POST pour recevoir et enregistrer les données du formulaire
app.post('/submit', async (req, res) => {
    try {
        const formData = new FormData(req.body);
        await formData.save();
        res.status(200).send('Données enregistrées avec succès');
    } catch (err) {
        res.status(500).send('Erreur lors de l\'enregistrement des données');
    }
});

// Démarrer le serveur
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});