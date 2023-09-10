import { NextResponse } from 'next/server'
import { connectDB } from '../utils/mongos'

export function GET(){
    connectDB()
    return NextResponse.json({
        message: "Hello world mongoDB!",
    });
}