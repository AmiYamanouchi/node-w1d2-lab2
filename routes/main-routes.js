const express = require("express");
const fs = require("fs");
const path = require("path");
const data = require("../notes.json")
const router = express.Router();

router
    //　それぞれ取得するところを指定してあげる
    .get('/',(req,res)=>{
        res.render('index', {notes: data, title: "GuestBook"})
    })
    .get('/view-note',(req,res)=>{
        res.render('view-note', {notes: data})
    })
    .get('/add-note', (req,res)=>{
        res.render('add-note')
    })
    .post('/add-note',(req,res)=>{
        data.push({
            id: Math.random(),
            note: req.body.note,
        });
        fs.writeFile(
            path.join(__dirname, "..", "notes.json"),
            JSON.stringify(data, null, 2),
            () => {
              res.status(302).redirect("/");
            }
        );
    });



module.exports = router;