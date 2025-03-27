import { NextResponse } from 'next/server';
import Message from '@/models/message';

import connectDB from '../../../../database/connectDB';

export async function GET() {
  try {
    await connectDB();
    // Example: fetch messages relevant to the officer
    const messages = await Message.find();
    return NextResponse.json(messages);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
