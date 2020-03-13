import * as mongoose from 'mongoose';
export const CompanySchema = new mongoose.Schema({
  id: { required: true, unique: true, type: Number },
  name: String,
  website: String,
  phone: String,
  fax: String,
  addressLine1: String,
  addressLine2: String,
  city: String,
  state: String,
  zip: String,
  countryCode: String,
  email: String,
  secondaryEmail: String,
  tertiaryEmail: String,
  logo: String,
  eventCreator: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
});
