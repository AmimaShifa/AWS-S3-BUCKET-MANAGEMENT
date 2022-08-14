const multer  = require('multer')
const express= require("express");
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors');
const exec = require('child_process').exec; 


const corsOrigin="http://localhost:3000";
app.use(express.static(__dirname+'../..'));
app.use(cors({
  origin:[corsOrigin],
  methods:['GET','POST'],
  credentials:true
}));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const fileUploadPath='C:/Users/amima/Documents/GitHub/aws_automation/server/uploads';
const storage= multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, fileUploadPath);
  },
  filename:function(req,file,cb){
    cb(null,file.originalname)
  }
})

const fileUpload=multer({storage:storage,fileFilter })
app.all('/file-upload',fileUpload.single("file"), (req,res)=>{

 exec('aws s3 cp "./uploads/index.html" s3://test-awss3-bucket-9 --acl public-read', (err, stdout, stderr) => {  
    if (err) {  
      console.error(err);  
      return;  
    }   
    var str='\nThe website is deployed.'  
    res.json({message:str});
  
    
  });
  
})
function fileFilter (req, file, cb) {

  if(file.mimetype.split("/")[1]==='html')
    {cb(null, true)}
else
   {cb(null,false)} 

}

app.listen(8080, () => console.log("listening on port 8080"))

