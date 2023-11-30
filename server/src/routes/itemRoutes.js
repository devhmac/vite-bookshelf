const express = require('express');
const router = express.Router();

const numBooks = 0


const routes = function(pool) {
  const { getItems, addItem, deleteItem } = require('../database/items')(pool);

  router.get("/", (req, res) => {
    // getItems().then(data => {
    //   res.json(data);
    res.json({ numBooks })
    // console.log(req, res)
    // })
    //   .catch(err => {
    //     console.log(err.message);
    //     res.status(500).json({ error: err.message });
    //   });
  });

  router.post("/", (req, res) => {

    numBooks++
    res.json({ numBook })
    // const name = req.body.name;
    // addItem(name).then(data => {
    //   res.json(data);
    // })
    //   .catch(err => {
    //     console.log(err.message);
    //     res.status(500).json({ error: err.message });
    //   });
  });

  router.delete("/:id", (req, res) => {
    const id = req.params.id;
    deleteItem(id).then(data => {
      res.json(data);
    })
      .catch(err => {
        console.log(err.message);
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};

module.exports = routes;