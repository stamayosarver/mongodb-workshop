import {ExcerciseType } from "@/types/types";
import {Schema} from "mongoose";


const excerciseSchema = new Schema<ExcerciseType>({
    name: String,
    muscleGroup: String,
    equipment: String,
    difficulty: String,
    difficulty: Number,
})

export const Excercise = models.Excercise || model<ExcerciseType>("Excercise", excerciseSchema);