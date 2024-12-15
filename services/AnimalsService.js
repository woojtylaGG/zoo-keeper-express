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
    }
};

export default AnimalsService;
