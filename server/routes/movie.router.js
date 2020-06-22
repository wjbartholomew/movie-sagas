const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    let query = `SELECT * FROM movies;`;
    pool.query(query).then(result => {
        res.send(result.rows);
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    })
})

// router.post('/', (req, res) => {
//     let query = `INSERT INTO "pets" ("name", "owner_id")
//                VALUES ($1, $2)`;
//     pool.query(query, [req.body.name, req.body.owner_id]).then(result => {
//         res.sendStatus(200);
//     }).catch(err => {
//         console.log(err);
//         res.sendStatus(500);
//     })
// })

module.exports = router;