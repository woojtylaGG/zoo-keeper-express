import fsPromises from 'fs/promises';
import path from 'path';

const filePath = path.resolve("data", "zoo.json");

const AnimalsService = {
    async getAnimals() {
        const data = await fsPromises.readFile(filePath, "utf-8");
        return JSON.parse(data);
    },
    async getAnimalById(id) {
        const animals = await this.getAnimals();
        return animals.find(animal => animal.id === id);
    },

    async getEndangeredAnimals() {
        const animals = await this.getAnimals();
        return animals.filter(animal => animal.isEndangered);
    },
    async getAnimalsByHabitat(habitat) {
        const animals = await this.getAnimals();
        return animals.filter(animal => animal.habitat === habitat);
    },

    async getAnimalsBySpecies(species) {
        const animals = await this.getAnimals();
        return animals.filter(animal => animal.species === species);
    },

    async addAnimal(newAnimal) {
        const animals = await this.getAnimals();
        const id = animals.length ? animals[animals.length - 1].id + 1 : 1;
        const animal = { id, ...newAnimal };
        animals.push(animal);
        await fsPromises.writeFile(filePath, JSON.stringify(animals, null, 2), "utf-8");
        return animal;
    }
};

export default AnimalsService;
