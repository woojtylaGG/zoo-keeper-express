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
    }
};

export default AnimalsController;
