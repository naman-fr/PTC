import { NextResponse } from 'next/server';

import connectDB from '../../../../database/connectDB';
import Application from '@/models/application';

export async function GET() {
  try {
    await connectDB();
    // Example: fetch all applications for the "current" student
    // In a real app, you'd filter by user ID from the session
    const applications = await Application.find({ studentName: 'John Doe' });
    return NextResponse.json(applications);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
