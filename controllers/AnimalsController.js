import AnimalsService from "../services/AnimalsService.js";

const AnimalsController = {
    async getAllAnimals(req, res) {
        try {
            const animals = await AnimalsService.getAnimals();
            res.status(200).json(animals);
        } catch (error) {
            res.status(500).json({ error: "Failed to retrieve animals." });
        }
    }
};

export default AnimalsController;
