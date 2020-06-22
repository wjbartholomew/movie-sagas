const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/:id', (req, res) => {

console.log('id:',req.params.id)
    let query = 
`SELECT
movies_id, genres_id, genres.name
FROM
movies_genres
JOIN
genres
ON 
movies_genres.genres_id = genres.id
WHERE
movies_genres.movies_id = $1`;

    pool.query(query,[req.params.id]).then(result => {
        res.send(result.rows);
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    })
})


module.exports = router;