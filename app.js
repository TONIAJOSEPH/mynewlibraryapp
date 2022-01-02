const express = require('express'); 
const path = require ('path'); 
const cors = require('cors');
const bodyParser = require('body-parser'); //changed(2)
const port = process.env.PORT || 5000;

const nav= [
    {
        link:"/books",
        title:"Books"
    },
    {
        link:"/authors",
        title:"Authors"
    },
    {
        link:"/books/addbook",  //changed
        title:"Add Book"
    },
    {
        link:"/authors/addauthor",  //changed
        title:"Add Author"
    }
]

const loginRouter = require('./src/routes/loginroute');
const signupRouter = require('./src/routes/signuproute');
const homeRouter = require('./src/routes/homerouter')(nav); //changed (6)
const booksRouter = require('./src/routes/booksroute')(nav);//changed,changed(3)
const authorsRouter = require('./src/routes/authorsroute')(nav);//changed

const app = new express; 


app.set('views','./src/views'); 
app.set('view engine','ejs'); 

app.use(cors()); //changed(7)
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname,'/public'))); 

app.use('/login',loginRouter); 
app.use('/signup',signupRouter); 
app.use('/home',homeRouter); 
app.use('/books',booksRouter); 
app.use('/authors',authorsRouter); 



app.get('/',function(req,res){

    res.render('index',{});
    
});





app.listen(port,()=>{
    console.log("Server Ready on 5000");    //changed(5)
});
