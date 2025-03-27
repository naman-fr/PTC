// models/JobPosting.js
import mongoose from 'mongoose';

const jobPostingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    company: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    deadline: {
      type: Date,
      required: true,
    },
    requirements: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.models.JobPosting ||
  mongoose.model('JobPosting', jobPostingSchema);
