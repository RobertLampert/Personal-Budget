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

const envTest = new envelope('food',1000,50);

const envTests = new envelope('water',1000,50);

const envTesting = new envelope('gas',1000);

envelopes.push(envTest,envTests,envTesting);


envelopeRouter = express.Router();
apiRouter.use('/envelopes',envelopeRouter);

envelopeRouter.param('envelopeId',(req,res,next,id)=>{
    const index = req.body[0].id;
    res.locals.findEnvelopeFromId = envelopes.filter(envelope => envelope.id===index)[0];
    console.log(res.locals.findEnvelopeFromId);
    if(res.locals.findEnvelopeFromId!==undefined){
        next();
    }else{
        res.status(404).send();
    }
})

envelopeRouter.get('/',(req,res,next)=>{
    res.send(envelopes);
});

envelopeRouter.post('/',(req,res,next)=>{
    let category = req.body.category;
    let budget = req.body.budget;
    if(typeof category!=='string'||isNaN(budget)===true){
        res.status(400).send();
    }else{
        const newEnvelope = new envelope( category, budget );
        envelopes.push(newEnvelope);
        res.status(201).send(newEnvelope);
    }
});

envelopeRouter.get('/:envelopeId',(req,res,next)=>{
    res.send(res.locals.findEnvelopeFromId);
});

envelopeRouter.put('/:envelopeId',(req,res,next)=>{
    res.locals.findEnvelopeFromId = req.body[0];
    res.status(200).send(res.locals.findEnvelopeFromId);
});

envelopeRouter.delete('/:envelopeId',(req,res,next)=>{
    envelopes.splice(res.locals.findEnvelopeFromId,1);
    res.status(204).send(envelopes);
});

module.exports = apiRouter;