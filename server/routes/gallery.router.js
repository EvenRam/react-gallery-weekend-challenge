const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js')

// PUT /gallery/like/:id
// need to increment likes value by 1
router.put('/likes/:id', (req, res) => {
  // code here
  let likeId= req.params.id;

 let queryText = `UPDATE "gallery" SET "likes" = "likes" + 1
 WHERE "id" = $1;
  `
  pool.query(queryText,[likeId])
  .then((result) => {
    res.sendStatus(204)
  })
  .catch((err) => {
    console.log(`Error making query.. '${queryText}'`, err)
    res.sendStatus(500)
  })
});

// GET /gallery
router.get('/', (req, res) => {
  // code here
  console.log("In GET request");

  const sqlText = `SELECT * from "gallery"`;

  pool.query(sqlText)
    .then((result) => {
      console.log("Got some stuff from the database!", result.rows);
      res.send(result.rows);
  })
  .catch((error) => {
      console.log(`Error making database selection!!! ${sqlText}`, error);
  })
});

module.exports = router;
