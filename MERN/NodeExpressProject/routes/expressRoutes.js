const { response } = require('express');
const library = require('../Libraries/library');
const filePath = require('../Constants/constant').FILE_PATH();
const express = library.express;
const path = library.path;
const contents = require(filePath.content)
const router = express.Router()
const cookieParser = library.cookieParser;
const session = library.session;


// For parsing application/json
router.use(express.json());

//cookieParcer
router.use(cookieParser());
router.use(session({secret: "secret",
                    resave: true,
                    saveUninitialized: true}));

//middleware
router.use((request, response, next) => {
    console.log("Start");
    next();
 });

//Session
router.get('/pagevisit',(request,response) => {
    if(request.session.pageCounter){
        request.session.pageCounter++;
        response.send("You visited this page " + request.session.pageCounter + " times");
    }else{
        request.session.pageCounter = 1;
        response.send("Welcome to this page for the first time!");
    }
});


//indexpage
router.get('/',(request,response) => {
    response.cookie('name', 'express');
    response.sendFile(path.join(__dirname,filePath.index));
    console.log(request.cookies);
});

//For clear cookie
router.get('/clearcookie', function(request, response){
    response.clearCookie('name');
    response.send('cookiecleared');
 });

//GET
router.get('/content',(request,response) => {
    response.json(contents);
});


router.get('/content/:title',(request,response) => {
    const title = request.params.title;
    const getContent = contents.find((content) => content.title === title);

  if (!getContent) {
    response.status(500).send('Content not found.')
  } else {
    response.json(getContent);
  }
});

//POST
router.post('/content',(request,response) => {
    const incomingContent = request.body;
    contents.push(incomingContent);
    response.json(contents);
})

//PUT 
router.put('/content/:title',(request,response) => {
    const title = request.params.title;
    const body = request.body;
    const content = contents.find((content) => content.title === title);
    const index = contents.indexOf(content);

  if (!content) {
    response.status(500).send('Content not found.');
  } else {
    const updatedContent = { ...content, ...body };
    contents[index] = updatedContent;
    response.send(updatedContent);
  }
  
})

//DELETE
router.delete('/content/:title',(request,response)=>{
    const title = request.params.title;
    const content = contents.find((content) => content.title === title);
    const index = contents.indexOf(content);

    if (!content) {
        response.status(500).send('Content not found.');
      } else {
        delete contents[index];
        response.json(contents);
      }
})

//URL building using regex

router.get('/things/:id([0-9]{5})',(request,response)=>{
    response.send("id:"+request.params.id);
})

router.get('*',(request,response)=>{
    response.send('Sorry, this is an invalid URL.');
})


module.exports = router;