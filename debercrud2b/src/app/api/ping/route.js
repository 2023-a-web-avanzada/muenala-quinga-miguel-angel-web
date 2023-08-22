import { NextResponse } from 'next/server'
import { connectDB } from '@/utils/mongos';

export function GET(){
    return NextResponse.json({
        message: "Hello world",
    });
}