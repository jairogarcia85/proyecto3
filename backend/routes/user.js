const express = require("express");
const router = express.Router();

const User = require("../models/User");

//Se obtienen todos los Usuarios
router.get("/", (req, res, next) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.json(err));
});

//Se obtiene un usuario en especifico por el id
router.get("/:id", (req, res, next) => {
  User.findById(req.params.id)
    .then(users => res.json(users))
    .catch(err => res.json(err));
});

//Se crea un usuario
router.post("/", (req, res, next) => {
  const { name, email, telephone, role, social, country } = req.body;
  const user = new User({ name, email, telephone, role, social, country });
  user
    .save()
    .then(user => res.json({ status: "User Saved" }))
    .catch(err => res.json(err));
});

//Se modifica un usuario
router.post("/:id", (req, res, next) => {
  const { name, email, telephone, role, social, country } = req.body;
  const newUser = { name, email, telephone, role, social, country };
  User.findByIdAndUpdate(req.params.id, newUser, { new: true })
    .then(user => res.json({ status: "Task Updated", user }))
    .catch(err => res.json(err));
});

//Se elimina un usuario
router.delete("/:id", (req, res, next) => {
  User.findByIdAndRemove(req.params.id)
    .then(data => res.json({ status: "User Deleted", data }))
    .catch(err => res.json(err));
});

module.exports = router;
