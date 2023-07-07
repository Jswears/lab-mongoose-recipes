const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require("./models/Recipe.model");
// Import of the data from './data.json'
const data = require("./data");
const myRecipe = {
  title: "Pizza Pepperoni",
  level: "UltraPro Chef",
  ingredients: ["flour", "water", "pepperoni", "yeast", "tomato", "cheese"],
  cuisine: "Italian",
  dishType: "main_course",
  duration: 1,
  creator: "Sojosha",
};

const MONGODB_URI = "mongodb://localhost:27017/recipe-app";
const recipeMaking = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log(`Connected to the database`);
    await Recipe.deleteMany();
    const createdRecipe = await Recipe.create(myRecipe);
    console.log(createdRecipe.title);
    const manyRecipes = await Recipe.insertMany(data);
    manyRecipes.forEach((recipe) => {
      console.log(recipe.title);
    });
    const updatedRecipe = await Recipe.findOneAndUpdate(
      { title: "Rigatoni alla Genovese" },
      { duration: 100 }
    );
    console.log(`You successfully updated ${updatedRecipe.title}!`);
    await Recipe.deleteOne({ title: "Carrot Cake" });
    console.log(`Oh no! You deleted a recipe!`);
    await mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
};
recipeMaking();
