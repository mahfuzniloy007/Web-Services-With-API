const fs = require('fs');
const filePath = "./database.json";
const { readData, writeData } = require('../utils/file');

// Async function to add a user
async function createUser(req, res) {
  try {
    const data = await readData();

    // Determine last user id
    const lastUser = data.users[data.users.length-1];
    
    // Last user id is checked.. defaults to one if last user doesnot exist...
    const nextId = lastUser ? lastUser.id + 1 : 1;

    // Created a new user object
    const newUser = {
      id: nextId,
      username: req.body.username,
      first_name: req.body.first_name,
      email: req.body.email,
    };

    // Push the new data record to the users object
    data.users.push(newUser);
    
    // Write this data to finalize it
    await writeData(data);

    // Refresh the page
    res.redirect('/');

  } catch (error) {
    res.status(500).json(`Internel Server Error: ${error}`);
  }
}

// Async function to update a user
async function updateUser(req, res) {
  try {
    const data = await readData();
    
    // Find out function that fetches user by id
    const user = data.users.find(user => user.id === parseInt(req.params.id));

    // Update the user object fields with values from the req.body(from data incoming)
    if (user) {
      user.username = req.body.new_username || user.username;
      user.first_name = req.body.new_first_name || user.first_name;
      user.email = req.body.new_email || user.email;
      
      await writeData(data);

      res.status(200).json("User added succesfully");
    } else {
      res.status(404).json("User not found. Please try again.");
    }

  } catch (error) {
    res.status(500).json("Internal Server Error");
  }
}

// Async function to delete a user
async function deleteUser(req, res) {
  try {
    const data = await readData();

    // Finder function that fetches user by id
    const user = data.users.find(user => user.id === parseInt(req.params.id));

    // Check if user exists. Splice the user form the users array/object
    if (user) {
      data.users.splice(user,1);
      await writeData(data);

      res.status(200).json("User successfully deleted")
    } else {
      res.status(404).json("User not found. Please try again.");
    }


  } catch (error) {
    res.status(500).json("Internal Server Error");
  }
}

module.exports = {
  createUser,
  updateUser,
  deleteUser,
};
