export interface Grade {
    courseId: string;
    courseName: string;
    courseCode: string;
    credits: number;
    grade: string;
    points: number;
    semester: string;
    instructor: string;
    date: string;
}
export interface GradesSummary {
    currentSemester: {
        name: string;
        gpa: number;
        credits: number;
        courses: Grade[];
    };
    previousSemesters: Array<{
        name: string;
        gpa: number;
        credits: number;
        courses: Grade[];
    }>;
    overallStats: {
        totalCredits: number;
        overallGPA: number;
        completionRate: number;
    };
}
export declare const mockGrades: GradesSummary;
