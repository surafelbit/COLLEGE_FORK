import React from "react";
export interface DataTypes {
    key: string;
    name: string;
    amharicName: string;
    year: number;
    id: string;
    status: string;
    department: string;
    photo?: string;
    batch: string;
    isDisabled?: boolean;
}
interface EditableTableProps {
    initialData: DataTypes[];
}
declare const EditableTableApplicant: React.FC<EditableTableProps>;
export default EditableTableApplicant;
