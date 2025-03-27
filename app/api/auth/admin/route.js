import connectDB from "../../../../database/connectDB";
import Card from "../../../../models/credentials";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

const SALT_ROUNDS = 10;

// Admin Login
export async function POST(req) {
  await connectDB();
  try {
    const { email, password } = await req.json();
    const admin = await Card.findOne({ email });

    const isMatch = (password === admin.password);
    if (!isMatch) {
      return NextResponse.json(
        { ok: false, message: "Invalid credentials" },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { ok: true, message: "Login successful", role: admin.role },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { ok: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}

// 🔵 Update Admin Password
export async function PUT(req) {
  await connectDB();
  try {
    const { oldPassword, newPassword, id } = await req.json();

    // Fetch admin
    const admin = await Admin.findById(id);
    if (!admin) {
      return NextResponse.json(
        { ok: false, message: "Admin not found" },
        { status: 404 }
      );
    }

    // Compare old password
    const isMatch = await bcrypt.compare(oldPassword, admin.password);
    if (!isMatch) {
      return NextResponse.json(
        { ok: false, message: "Incorrect old password" },
        { status: 400 }
      );
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(newPassword, SALT_ROUNDS);

    // Update in DB
    admin.password = hashedPassword;
    await admin.save();

    return NextResponse.json({
      ok: true,
      message: "Password updated successfully!",
    });
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { ok: false, message: "Database error occurred" },
      { status: 500 }
    );
  }
}

