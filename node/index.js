const express = require('express');
const axios = require('axios').default;
const mysql = require('mysql');

const app = express();
const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Running on port: ${PORT}`);
});

app.get('/', (_req, res) => {
  insertNewName(res);
});

async function getMonsterName() {
  const RANDOM = Math.floor(Math.random() * 10);
  const response = await axios.get('https://www.dnd5eapi.co/api/monsters');
  return response.data.results[RANDOM].name;
}

async function insertNewName(res) {
  const name = await getMonsterName();
  const con = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'dbpeople',
  });
  const INSERT_QUERY = `INSERT INTO people(name) values('${name}')`;

  con.query(INSERT_QUERY, (error, _results, _fields) => {
    if (error) {
      console.log(`Error inserting name: ${error}`);
      res.status(500).send('inserting name error');
      return;
    }

    console.log(`${name} inserted successfully!`);
    getAllNames(res, con);
  });
}

function getAllNames(res, con) {
  const SELECT_QUERY = `SELECT id, name FROM people`;

  con.query(SELECT_QUERY, (error, results) => {
    if (error) {
      console.log(`Error getting people: ${error}`);
      res.status(500).send('Error getting people');
      return;
    }

    const rows = results.map((person) =>`<tr><td>${person.name}<td></tr>`).join('');
  
    const table = `
      <table>
        <tr>
          <td>Name</td>
        </tr>
        ${rows}
      </table>`;

    res.send(`
      <h1>Full Cycle Rocks!</h1>
      ${table}
    `);

    con.end();
  });
}