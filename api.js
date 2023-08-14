const express = require('express');
const apiRouter = express.Router();

let envelopes = [];
let id = 1;

class envelope {
    constructor(category,budget,leftoverBudget=0){
        this.category=category;
        this.budget=budget;
        this.leftoverBudget = budget - leftoverBudget;
        this.id = id;
        id++;
    }
    get category(){
        return this._category;
    }
    get budget(){
        return this._budget;
    }
    get leftoverBudget(){
        return this._leftoverBudget;
    }
    set category(str){
        return this._category=str;
    }
    set budget(num){
        return this._budget=num;
    } 
    set leftoverBudget(num){
        return this._leftoverBudget=num;
    }  
};

module.exports = apiRouter;