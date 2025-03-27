// app/api/placement/route.js
import { NextResponse } from 'next/server';
import JobPosting from '@/models/placement';
import connectDB from "../../../../database/connectDB";

export async function GET() {
  try {
    await connectDB();
    const jobs = await JobPosting.find();
    return NextResponse.json({ jobs });
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
    const body = await req.json(); // { title, description, deadline, ... }
    const newJob = await JobPosting.create(body);
    return NextResponse.json({
      message: 'Job created successfully',
      job: newJob
    });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
