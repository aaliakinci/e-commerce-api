const mongoose = require('mongoose');

module.exports = ()=>{
    mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
            console.log('MongoDB connected');
    }).catch((err)=>{
        console.log('connection failed'+err);
    })

    mongoose.connection.on('open',()=>{
        console.log('MongoDB connected');
      })
      mongoose.connection.on('error',(err)=>{
        console.log('MongoDB Error:'+err);
      })
}
