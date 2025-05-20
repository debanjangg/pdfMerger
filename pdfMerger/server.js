//Package Imports
const express = require('express');
const path = require('path');
const multer = require('multer')
const upload = multer({dest: 'uploads/'})
const {mergePdfs} = require('./functions.js')

//Starting Server
const app = express();
const port = 3000;

//Serve static files
app.use('/static', express.static('public'))

app.listen(port, () => {
    console.log(`Listening on: http://localhost:${port}`)
})

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'templates/index.html'));
})

app.post('/merge', upload.array('pdfs',2), async (req, res, next) => {
    
    let pdfs = [];

    for(let x = 0; x < req.files.length; x++)
        pdfs.push(path.join(__dirname,req.files[x].path));

    let fname = await mergePdfs(pdfs);
    
    res.redirect(`http://localhost:3000/static/merged/${fname}.pdf`);
})