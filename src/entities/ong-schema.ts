import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const OngSchema = new Schema({    
  id_: {type: String},
  razonSocial: {type: String},
  nit: {type: String},
  telefonoComercial1: {type: String},
  emailComercial: {type: String},
  fechaDeConstitucion: {type: Number}
});