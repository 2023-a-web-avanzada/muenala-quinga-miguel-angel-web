import {NextResponse} from 'next/server';
import { connectDB } from '@/utils/mongos';
import Task from '@/models/Task'

export async function GET(request, {params}){//consultar
    try{
        connectDB()
        const taskFound = await Task.findById(params.id)

        if(!taskFound) return NextResponse.json({
            message:"Task no found",
        },{
            status: 404
        });

        return NextResponse.json(taskFound);
    }catch (error){
        return NextResponse.json(error.message,{
            status: 400
        })
    }
} 

export async function DELETE(request, {params}){
    const taskDeleted = await Task.findByIdAndDelete(params.id)
    if(!taskDeleted)
        return NextResponse.json({
            message: "Task not found"
        },{
            status: 404
        })

    return NextResponse.json(taskDeleted);

} 

export async function PUT(request, {params}){//actualizar
    try{
        const data = await request.json()
        console.log(data)
        const taskUpdated = await Task.findByIdAndUpdate(params.id, data, {
            new: true
        })
        return NextResponse.json(taskUpdated);

    }catch(error){
        return NextResponse.json(error.message, {
            status: 400
        });
    }

} 