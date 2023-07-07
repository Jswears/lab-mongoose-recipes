const { Schema, model } = require("mongoose");

const recipeSchema = new Schema({
  // TODO: write the schema
  title: {
    type: String,
    required: true,
    unique: true,
  },
  level: {
    type: String,
    // validate: {
    // 	validator: (element) =>
    // 		element === "Easy Peasy" ||
    // 		element === "Amateur Chef" ||
    // 		element === "UltraPro Chef",
    // },
    enum: ["Easy Peasy", "Amateur Chef", "UltraPro Chef"],
  },
  ingredients: [String],
  cuisine: {
    type: String,
    required: true,
  },
  dishType: {
    type: String,
    enum: [
      "breakfast",
      "main_course",
      "soup",
      "snack",
      "drink",
      "dessert",
      "other",
    ],
  },
  image: {
    type: String,
    default: "https://images.media-allrecipes.com/images/75131.jpg",
  },
  duration: {
    type: Number,
    min: 0,
  },
  creator: String,
  created: {
    type: Date,
    default: () => Date.now(),
  },
});

// const Recipe = mongoose.model('Recipe', recipeSchema);
const Recipe = model("Recipe", recipeSchema);

module.exports = Recipe;
