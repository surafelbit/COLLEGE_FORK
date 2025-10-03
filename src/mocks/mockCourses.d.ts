export interface Course {
    id: string;
    name: string;
    code: string;
    credits: number;
    semester: string;
    instructor: string;
    schedule: string;
    room: string;
    description: string;
    progress?: number;
    grade?: string;
    status: "active" | "completed" | "upcoming";
}
export declare const mockCourses: Course[];
