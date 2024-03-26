const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000
var cors = require('cors')


app.use((_, res, next) => {
    res.header('Cross-Origin-Opener-Policy', 'same-origin');
    res.header('Cross-Origin-Embedder-Policy', 'require-corp');
    next();
  });

app.use(express.static(path.join(__dirname + "/public")))
app.listen(PORT, ()=> {
    console.log('listening on port PORT')
})   

// https://www.youtube.com/watch?v=Q0wVXS-V-Uw --> for initial set up of heroku + node + express + react
const corsOptions ={
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


module.exports = app; 