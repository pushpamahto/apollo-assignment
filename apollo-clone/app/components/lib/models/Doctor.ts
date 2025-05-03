import { Schema, model, models } from 'mongoose';

const doctorSchema = new Schema({
  name: { type: String, required: true },
  specialization: { type: String, required: true },
  experience: { type: Number, required: true },
  qualifications: { type: String, required: true },
  location: { type: String, required: true },
  clinic: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  modeOfConsult: { type: [String], required: true }, // ['Hospital', 'Online']
  patientCount: { type: Number, default: 0 },
  rating: { type: Number, default: 0 },
});

const Doctor = models.Doctor || model('Doctor', doctorSchema);

export default Doctor;