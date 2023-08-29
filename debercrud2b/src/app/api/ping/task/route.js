import {NextResponse} from 'next/server';
import { connectDB } from '@/utils/mongos';
import Task from '@/models/Task'

export async function GET(request, {params}){
    connectDB()

    const tasks = await Task.find()
    return NextResponse.json(tasks);//obteniedo tarea ${params.id}...

} 

export async function POST(request){
    try{
        const data = await request.json()
        const newTask = new Task(data)
        const savedTask = await newTask.save()
        console.log(newTask)

        return NextResponse.json(savedTask)
    }catch(error){
        return NextResponse.json(error.message,
            {
                status: 400
            })
    }
}