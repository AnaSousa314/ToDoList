
const {Activity} = require('../models');

module.exports = {
  async index(req,res,next){
    let activities = await Activity.findAll();

    res.render('index',{activities});
  },

  async create(req,res,next){
    let activity = {...req.body};

    await Activity.create(activity);

    //console.log(activity)
    res.redirect('/');
  },

  async edit(req,res,next){
    let id = req.params.id;

    console.log(id);

    let activity = await Activity.findByPk(id);

    console.log(activity)
    res.render('edit-task',{activity});
  },

  async updated(req,res,next){
    let id = req.params.id;

    let {task} = req.body;

    let activity = await Activity.findByPk(id);

    activity.task = task;

    await activity.save();

    res.render('edit-task',{activity, updated:true})
  },

  async delete(req,res,next){
    let id = req.params.id;

    let activity = await Activity.findByPk(id);

    activity.destroy();

    res.redirect('/');
  }
}