import express from 'express';

module.exports=(app:any)=>{
    app.use(express.json());
    app.use(express.urlencoded({extended:true}))
}