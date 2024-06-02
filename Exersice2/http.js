// const http = require('http');
// // const { Server } = require('https');
// http.createServer( function(req,res){
//     res.write("Http module import and server created succsesfully");
//     res.end("connected");
//     // console.log("localhost:8080/http");

//  }).listen(1213,()=>{
//     console.log('server running at <http://localhost:1213/>');
// })

const express = require('express');
const app = express();
const PORT = 8000;
const demo = require('./MOCK_DATA.json')

app.get("/", (req, res) => {
  let date = new Date();
 
  res.send("Hello  Welcome Ravi Dangar" + "<br>" + date);
});

app.get('/demo',  function (req,res) {
    res.send(demo);
});

app.get('/fname', function (req,res) {

     const fname = `<ul>
      ${demo.map((item)=>`<li>${item.first_name}</li>`
      ).join("")}
     </ul>`
     res.send(fname);

 
  });


app.listen(PORT, () => {
  console.log("your application is runnig on " + PORT);
});
