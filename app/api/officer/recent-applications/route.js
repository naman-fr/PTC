import { NextResponse } from 'next/server';

import connectDB from '../../../../database/connectDB';
import Application from '@/models/application';

export async function GET() {
  try {
    await connectDB();
    // Example: get last 5 applications
    const apps = await Application.find().sort({ _id: -1 }).limit(5);
    return NextResponse.json(apps);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
