
const {Activity} = require('../models');

module.exports = {
  async index(req,res,next){
    let activities = await Activity.findAll();

    res.render('index',{activities});
  },

  async create(req,res,next){
    let activity = {...req.body};

    await Activity.create(activity);

    console.log(activity)
    res.redirect('/');
  },

  async edit(req,res,next){
    let id = req.params.id;

    let activity = await Activity.findByPk(id);


  }
}