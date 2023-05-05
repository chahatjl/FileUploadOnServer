const File=require("../models/File");

exports.localFileUpload=async(req,res)=>{
    try{

        let file = req.files.IMG-20210210-WA0001.jpg ;
        console.log(file);

        let path=__dirname+"/files/"+Date.now();
        console.log(path);
        file.mv(path,(err)=>{
            console.log(err);
        });

        res.json({
            success:true,
            message:'Local File Uploaded Successfully',
        })

    }

    catch(error)
    {
        console.log(error);
    }
}