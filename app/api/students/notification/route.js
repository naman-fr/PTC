import { NextResponse } from 'next/server';

import connectDB from '../../../../database/connectDB';
import Message from '@/models/message';

export async function GET() {
  try {
    await connectDB();
    // Example: fetch messages relevant to the student
    const notes = await Message.find(); // filter if needed
    return NextResponse.json(notes);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
