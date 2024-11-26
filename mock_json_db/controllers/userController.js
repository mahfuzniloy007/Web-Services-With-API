const fs = require('fs');
const filePath = "./database.json";
const { readData, writeData } = require('../utils/file');

// Async function to add a user
async function createUser(req, res) {
  try {
    const data = await readData();
    // console.log(data);

    // Determine last user id
    const lastUser = data.users[data.users.length-1];
    
    // Last user id is checked.. defaults to one if last user doesnot exist...
    const nextId = lastUser ? lastUser.id + 1 : 1;

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

    res.redirect('/');

  } catch (error) {
    res.status(500).json(`Internel Server Error: ${error}`)
  }
}

// Async function to update a user
async function updateUser(req, res) {
  try {

  } catch (error) {
    
  }
}

// Async function to delete a user
async function deleteUser(req, res) {
  try {

  } catch (error) {
    
  }
}

module.exports = {
  createUser,
  updateUser,
  deleteUser,
};
