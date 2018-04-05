const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/reactmongo');

const sampleModel = mongoose.model('Mongo', { name: String });

const sampleModelInstance = new sampleModel({ name: 'Mongo' });

sampleModelInstance.save()
  .then( () => 
    console.log('mongo queries connected!'
  ))
  .catch( err => {
    console.log('error connecting mongo queries')});