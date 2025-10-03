export interface Student {
    id: string;
    fullName: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dateOfBirth: string;
    nationality: string;
    address: string;
    department: string;
    program: string;
    batch: string;
    year: string;
    studentId: string;
    enrollmentDate: string;
    expectedGraduation: string;
    academicAdvisor: string;
    gpa: number;
    totalCredits: number;
    completionRate: number;
    avatar?: string;
    emergencyContact: {
        name: string;
        relationship: string;
        phone: string;
        email: string;
    };
    previousEducation: string;
}
export declare const mockStudent: Student;
