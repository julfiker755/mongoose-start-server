const TasksModel = require("../models/TasksModel");


exports.createTask=(req,res)=>{
    let reqBody=req.body
    reqBody.email=req.headers['email'];
}


exports.deleteTask=(req,res)=>{
    let id= req.params.id;
    let Query={_id:id};
}


exports.updateTaskStatus=(req,res)=>{
    let id= req.params.id;
    let status= req.params.status;
    let Query={_id:id};
    let reqBody={status:status}

}


exports.listTaskByStatus=(req,res)=>{
    let status= req.params.status;
    let email=req.headers['email'];

}



exports.taskStatusCount=(req,res)=>{
    let email=req.headers['email'];

}


