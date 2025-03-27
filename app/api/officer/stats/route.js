import { NextResponse } from 'next/server';

import connectDB from '../../../../database/connectDB';
import JobPosting from '@/models/JobPosting';
import Application from '@/models/application';

export async function GET() {
  try {
    await connectDB();
    const openPostings = await JobPosting.countDocuments();
    const totalApplications = await Application.countDocuments();
    // Return some officer stats
    return NextResponse.json({
      openPostings,
      totalApplications
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
