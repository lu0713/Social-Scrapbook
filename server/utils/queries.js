const db = require("../models/models.js"); // remove after testing

const queries = {};

// QUERY TO SELECT SPECIFIC USER
queries.userInfo = `SELECT * FROM users WHERE user_id=$1`; // const values = [req.query.id]

// QUERY TO SELECT SPECIFIC USER'S EVENTS
queries.userEvents = `SELECT * FROM usersandevents WHERE user_id=$1`;

// QUERY FOR WHEN USER CREATES EVENT 
let createEvent = `INSERT INTO events
  (eventtitle, eventdate, eventstarttime, eventendtime, eventlocation, eventdetails, eventowner)
VALUES($1, $2, $3, $4, $5, $6, $7)`;

// QUERY FOR USERS ADDS THEMSELVES TO OTHER PEOPL'S EVENTS
let addUserToEvent = `INSERT INTO usersandevents
  (userid, username, eventid, eventtitle)
VALUES($1, $2, $3, $4);`;

let selectedLastUserCreated = 'SELECT MAX(userid) FROM users' // CORRECT
let deleteLastUserCreated = 'DELETE FROM users WHERE ID = (SELECT MAX(userid) FROM users)' // correct





db.query(selectedLastUserCreated).then(data => console.log(data.rows[0]));





// queries.query3 = `INSERT INTO usersandevents
// VALUES(${nextEvent}, 1, 'bonjay123', 1, 'stella Birthday');`;
// const values = [req.query]

module.exports = queries;