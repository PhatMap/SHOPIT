const Product = require("../models/product");
const User = require("../models/user");
const dotenv = require("dotenv");
const connectDatabase = require("../config/database");
const products = require("../data/product.json");
const users = require("../data/user.json");

dotenv.config({ path: "backend/config/config.env" });

connectDatabase();

const seedProducts = async () => {
  try {
    await User.deleteMany();
    console.log("Users are deleted");

    // await User.insertMany(users);
    // console.log("All users are added");

    // const allUsers = await User.find();
    // allUsers.map((user, index) => {
    //   products[index].user = user.id;
    //   products[index].reviews.user = user.id;
    //   console.log(products[index]);
    // });

    await Product.deleteMany();
    console.log("Products are deleted");

    await Product.insertMany(products);
    console.log("All products are added");

    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedProducts();
