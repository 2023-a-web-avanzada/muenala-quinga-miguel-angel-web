import {NextResponse} from 'next/server';
import { connectDB } from '@/utils/mongos';
import Task from '@/models/Task'

export function GET(request, {params}){
    return NextResponse.json({
        message: `obteniedo tarea ${params.id}...`,
    });

} 

export function DELETE(request, {params}){
    return NextResponse.json({
        message: `eliminando tarea ${params.id}...`,
    });

} 

export function PUT(request, {params}){
    return NextResponse.json({
        message: `actualizando tarea ${params.id}...`,
    });

} 