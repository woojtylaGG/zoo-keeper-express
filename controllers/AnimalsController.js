import AnimalsService from "../services/AnimalsService.js";

const AnimalsController = {
    async getAllAnimals(req, res) {
        try {
            const animals = await AnimalsService.getAnimals();
            res.status(200).json(animals);
        } catch (error) {
            res.status(500).json({ error: "Failed to retrieve animals." });
        }
    },

    async getAnimalById(req, res) {
        const id = parseInt(req.params.id);
        try {
            const animal = await AnimalsService.getAnimalById(id);
            if (!animal) {
                return res.status(404).json({ error: `Animal with id ${id} not found.` });
            }
            res.status(200).json(animal);
        } catch (error) {
            res.status(500).json({ error: "Failed to retrieve animal." });
        }
    },

    async getEndangeredAnimals(req, res) {
        try {
            const animals = await AnimalsService.getEndangeredAnimals();
            res.status(200).json(animals);
        } catch (error) {
            res.status(500).json({ error: "Failed to retrieve endangered animals." });
        }
    },

    async getAnimalsByHabitat(req, res) {
        const habitat = req.params.habitat;
        try {
            const animals = await AnimalsService.getAnimalsByHabitat(habitat);
            res.status(200).json(animals);
        } catch (error) {
            res.status(500).json({ error: "Failed to retrieve animals by habitat." });
        }
    },

    async getAnimalsBySpecies(req, res) {
        const species = req.query.species;
        try {
            const animals = await AnimalsService.getAnimalsBySpecies(species);
            res.status(200).json(animals);
        } catch (error) {
            res.status(500).json({ error: "Failed to retrieve animals by species." });
        }
    },

    async addAnimal(req, res) {
        const newAnimal = req.body;
        try {
            const animal = await AnimalsService.addAnimal(newAnimal);
            res.status(201).json(animal);
        } catch (error) {
            res.status(500).json({ error: "Failed to add animal." });
        }
    },

    async updateAnimal(req, res) {
        const id = parseInt(req.params.id);
        const updates = req.body;
        try {
            const updatedAnimal = await AnimalsService.updateAnimal(id, updates);
            res.status(200).json(updatedAnimal);
        } catch (error) {
            if (error.message.includes('not found')) {
                res.status(404).json({ error: error.message });
            } else {
                res.status(500).json({ error: "Failed to update animal." });
            }
        }
    },

    async deleteAnimal(req, res) {
        const id = parseInt(req.params.id);
        try {
            const result = await AnimalsService.deleteAnimal(id);
            res.status(200).json(result);
        } catch (error) {
            if (error.message.includes('not found')) {
                res.status(404).json({ error: error.message });
            } else {
                res.status(500).json({ error: "Failed to delete animal." });
            }
        }
    }
};

export default AnimalsController;
