import fsPromises from 'fs/promises';
import path from 'path';

const filePath = path.resolve("data", "zoo.json");

const AnimalsService = {
    async getAnimals() {
        const data = await fsPromises.readFile(filePath, "utf-8");
        return JSON.parse(data);
    }
};

export default AnimalsService;
