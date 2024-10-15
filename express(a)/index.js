const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const app = express()
var valids = require('./valid.js');

app.use(bodyParser.urlencoded({extended: false}));
const port = 3000;
app.use(bodyParser.json());
// app.use(express.urlencoded({extended: false}));
// const urlencodedParser = bodyParser.urlencoded({ extended: false })
// const jsonParser = bodyParser.json();

app.get('/', function(req, res) {

    res.sendFile(path.join(__dirname, '/index.html'));
  });
app.post('/submit',function(req,res)  {
    
    const Username = req.body.Username;
    
    const email = req.body.Email;
    
    const pass = req.body.password;
    
    const repass = req.body.Password;
    if(valids.validUsername(Username)&&valids.validEmail(email)&&valids.validPassword(pass)&&pass===repass){
        res.send("Registration successful")
    }else{
        res.send("unsuccessful registraiton")
    }
});

app.listen(port, () => {

    console.log(`Example app listening on port ${port}`)

})