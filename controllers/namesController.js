const Name = require("../models/Name");

exports.getNameById = async (req, res) => {
  try {
    const name = await Name.findByPk(req.params.id);
    res.json(name);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addName = async (req, res) => {
  try {
    const newName = await Name.create({ name: req.body.name });
    res.json({ id: newName.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};