import express from 'express';
import AnimalsController from './controllers/AnimalsController.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => res.send('Zoo Keeper API is running.'));

app.get('/animals', AnimalsController.getAllAnimals);
app.get('/animals/:id', AnimalsController.getAnimalById);


app.listen(port, () => console.log(`Server is running on port ${port}`));
