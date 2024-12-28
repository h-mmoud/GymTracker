export interface Set {
    weight: number;
    reps: number;
}

export interface Exercise {
    id: string,
    name: string;
    sets: Set[];
}

export interface Workout {
    date: string;
    exercises: Exercise[];
}
