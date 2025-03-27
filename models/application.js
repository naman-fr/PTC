// models/Application.js
import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student',
      required: true,
    },
    job: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'JobPosting',
      required: true,
    },
    status: {
      type: String,
      enum: ['Applied', 'Under Review', 'Accepted', 'Rejected'],
      default: 'Applied',
    },
    // Optional: any additional notes or data
    notes: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Application ||
  mongoose.model('Application', applicationSchema);
