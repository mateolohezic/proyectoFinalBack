const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://mateolohezic:residentevil@rollinggames.mipju9i.mongodb.net/?retryWrites=true&w=majority');
    console.log('Conectada')
  } catch (error) {
    console.log('No Conectada')
  }
}

connectDB();
module.exports = { connectDB }