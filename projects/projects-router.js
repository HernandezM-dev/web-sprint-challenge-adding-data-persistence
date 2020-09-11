const express = require('express');

const knex = require('knex');

const db = require('./projects-model');

const router = express.Router();

router.get('/', (req,res)=>{
    db.findProjects()
    .then(projects =>{
        res.status(200).json(projects)
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get projects' });
      });
})

router.post('/', (req, res)=>{
    const newProj = req.body
    db.addProject(newProj)
    .then(project =>{
        res.status(201).json(project)
    })
    .catch(err => {
        res.status(500).json(err);
      });
})

router.get('/resources', (req,res)=>{
    db.findResources()
    .then(resources =>{
        res.status(200).json(resources)
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get resources' });
      });
})

router.post('/resources', (req, res)=>{
    const newProj = req.body
    db.addResource(newProj)
    .then(resource =>{
        res.status(201).json(resource)
    })
    .catch(err => {
        res.status(500).json(err);
      });
})

router.get('/:id/tasks', (req,res)=>{
    const id = req.params.id
    db.findTask(id)
    .then(tasks =>{
        res.status(200).json(tasks)
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get tasks' });
      });
})

router.post('/:id/tasks', (req, res)=>{
    const id = req.params.id
    const newProj = req.body
    db.addTask(newProj)
    .then(resource =>{
        res.status(201).json(resource)
    })
    .catch(err => {
        res.status(500).json(err);
      });
})


module.exports = router;