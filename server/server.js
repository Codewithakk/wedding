
const connectDb=require("./utils/db");
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const contactroute= require("./route/contactroute")
const path=require('path')

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET, POST, PUT, DELETE, PATCH, HEAD',
  credentials: true,
};

// app.set('view engine', 'ejs');
// app.use(expressLayouts);
app.use(express.static('public'));
app.use(express.static(path.join(__dirname + './client/build')));
app.get('*',function(req,res){
  res.sendFile(path.join(__dirname,"./client/build/index.html"))
});
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use('/saurabhphotography',contactroute );



const Port = process.env.PORT || 5000;

connectDb().then(() => {
  app.listen(Port, () => {
    console.log(`Server is running at port: ${Port}`);
  });
});
