const create = require("../models/create");

const newUser = async (req, res) =>{
  try{
    const user = await create.create(req.body);
    res.status(201).json({user})
  }
  catch (err){
    res.status(500).json({msg: err})
  }
};

module.exports = newUser;