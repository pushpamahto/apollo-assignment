import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Doctor from '@/lib/models/Doctor';

export async function POST(request: Request) {
  await dbConnect();
  
  try {
    const body = await request.json();
    const doctor = new Doctor(body);
    await doctor.save();
    
    return NextResponse.json(doctor, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 400 });
  }
}

export async function GET(request: Request) {
  await dbConnect();
  
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const experience = searchParams.get('experience');
    const mode = searchParams.get('mode');
    const location = searchParams.get('location');
    
    const query: any = {};
    
    if (experience) {
      const [min, max] = experience.split('-').map(Number);
      query.experience = { $gte: min, $lte: max };
    }
    
    if (mode) {
      query.modeOfConsult = mode;
    }
    
    if (location) {
      query.location = new RegExp(location, 'i');
    }
    
    const total = await Doctor.countDocuments(query);
    const doctors = await Doctor.find(query)
      .skip((page - 1) * limit)
      .limit(limit);
    
    return NextResponse.json({
      doctors,
      total,
      page,
      pages: Math.ceil(total / limit),
    });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 400 });
  }
}