import { NextRequest, NextResponse } from 'next/server';
import { appendToSheet } from '@/lib/sheets';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, neighborhood, interests, timestamp } = body;

    // Validate required fields
    if (!email || !neighborhood) {
      return NextResponse.json(
        { error: 'Email and neighborhood are required' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Append to Google Sheet
    await appendToSheet([
      timestamp,
      email,
      neighborhood,
      interests || '',
    ]);

    return NextResponse.json(
      { success: true, message: 'Successfully signed up!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { error: 'Failed to process signup. Please try again.' },
      { status: 500 }
    );
  }
}
