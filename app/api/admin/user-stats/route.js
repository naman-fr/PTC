// app/api/admin/user-stats/route.js
import { NextResponse } from 'next/server';
import connectDB from '../../../../database/connectDB'; // or wherever you keep DB connection code
       

export async function GET() {
  try {
    await connectDB();
    const totalUsers = await User.countDocuments();
    // Return some user stats as JSON
    return NextResponse.json({
      totalUsers,
      message: 'Fetched user stats successfully'
    });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json(); // { someStat: number, ... }
    // For demonstration, let's say we store a new "stat" or do something
    // In reality, you might have a Stats model
    const newStat = {
      success: true,
      data: body
    };
    return NextResponse.json({
      message: 'User stats updated/created',
      newStat
    });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
