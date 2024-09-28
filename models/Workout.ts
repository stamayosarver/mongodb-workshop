import {WorkoutType } from "@/types/types";
import exp from "constants";
import {Schema, models, model} from "mongoose";

const workoutSchema = new Schema<WorkoutType>({
    reps: Number,
    sets: Number,
    weight: Number,
    excercise: {
        type: Schema.Types.ObjectId,
        ref: "Excersice"
    }
})


export const Workout = models.Workout || model<WorkoutType>("Workout", workoutSchema)>(
    "Workout", workoutSchema
)