import { NextResponse } from 'next/server';
import JobPosting from '@/models/cards';

import connectDB from '../../../../database/connectDB';

export async function GET() {
  try {
    await connectDB();
    // Example: Count how many job postings are available
    const count = await JobPosting.countDocuments();
    return NextResponse.json({ availableJobs: count });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
