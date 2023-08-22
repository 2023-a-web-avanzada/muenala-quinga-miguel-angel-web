import {NextResponse} from 'next/server';
import { connectDB } from '@/utils/mongos';
import Task from '@/models/Task'

export async function GET(request, {params}){
    connectDB()

    const tasks = await Task.find()

    return NextResponse.json(tasks);//obteniedo tarea ${params.id}...

} 

export function POST(){
    return NextResponse.json({
        message: "creando tarea...."
    })
}