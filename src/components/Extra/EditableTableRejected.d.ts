import React from "react";
export interface DataTypes {
    key: string;
    name: string;
    amharicName: string;
    registeredYear: number;
    department: string;
    gender: string;
    age: number;
    status: string;
    photo?: string;
}
interface EditableTableProps {
    initialData: DataTypes[];
}
declare const EditableTableRejected: React.FC<EditableTableProps>;
export default EditableTableRejected;
