const mongoose = require('mongoose');
const { Schema } = require('mongoose');


mongoose.connect('mongodb://localhost/reactmongo');

const sampleSchema = new Schema({
  name: String,
  secret: String
})

const sampleModel = mongoose.model('sample', sampleSchema);

const sampleModelInstance = new sampleModel({ name: 'Testing', secret: 'Success' });

sampleModelInstance.save()
  .then( () => 
    console.log('mongo queries connected!')
  )
  .catch( err => 
    console.log('error connecting mongo queries')
  );

/* Users Table */
const userSchema = new Schema({
  username: String,
  password: String
});

const Users = mongoose.model('Users', userSchema);
module.exports = Users;