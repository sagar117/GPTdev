// Update and rewrite code with document upload and categorization function

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');

// Set up multer for document uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})
const upload = multer({ storage: storage })


// Use body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});

app.post('/login', (req, res) =>{
  // Get username and password from form
  let username = req.body.username;
  let password = req.body.password;
  
  // Check if they are valid
  if (username === 'example' && password === 'password') {
    res.redirect('/documents');
  } else {
    res.send(`<html><body><h1>Invalid username or password</h1></body></html>`);
  }
});

app.get('/documents', (req, res) => {
  res.sendFile(__dirname + '/documents.html');
});

// Upload document and categorize based on form data
app.post('/documents', upload.single('document'), (req, res) => {
  // Get the form information and document info
  const category = req.body.category;
  const documentName = req.file.originalname;
  const documentPath = req.file.path;
  
  // TODO: Save the document info to the EMR and categorize it
  
  // Return success message and options to upload another document or view documents
  res.send(`
    <html>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link rel="stylesheet" href="/css/materialize.min.css">
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>
          body {
            background-color: #2196F3;
            color: white;
          }
          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 50px;
          }
          h1 {
            font-size: 36px;
            margin-bottom: 30px;
            text-align: center;
          }
          .input-field {
            margin-top: 20px;
          }
          .btn {
            background-color: #0D47A1;
          }
          .btn:hover {
            background-color: #1565C0;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Document Uploaded and Categorized Successfully</h1>
          <div class="row">
            <form class="col s12" action="/documents" method="post" enctype="multipart/form-data">
              <div class="file-field input-field col s12 m6">
                <div class="btn">
                  <span>File</span>
                  <input type="file" name="document">
                </div>
                <div class="file-path-wrapper">
                  <input class="file-path validate" type="text">
                </div>
              </div>
              <div class="input-field col s12 m6">
                <select id="category" name="category">
                  <option value="" disabled selected>Choose a category</option>
                  <option value="Medical Records">Medical Records</option>
                  <option value="Insurance Forms">Insurance Forms</option>
                  <option value="Prescriptions">Prescriptions</option>
                  <option value="Lab Results">Lab Results</option>
                </select>
                <label for="category">Category</label>
              </div>
              <div class="input-field col s12">
                <button class="btn waves-effect waves-light" type="submit" name="action">Upload another document</button>
                <a href="/view-documents" class="btn waves-effect waves-light">View Documents</a>
              </div>
            </form>
          </div>
        </div>
        <script src="/js/materialize.min.js"></script>
        <script>
          document.getElementById("category").value = "${category}";
        </script>
      </body>
    </html>
  `)
});

// Start server
app.listen(3000, () => console.log('Server started at http://localhost:3000/'));