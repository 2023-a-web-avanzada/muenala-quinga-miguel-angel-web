import {Schema, model, models} from 'mongoose'

const taskSchema = new Schema({
    title:{
        type: String,
        required: [true, 'El titulo es reuerido'],
        unique: true,
        trin: true,
    },
    description: {
        type: String,
        required: [true, 'La description es reuerida'],
        trin: true,
    },
},{
    timestamps: true,
})

export default models.Task || model('Task', taskSchema)