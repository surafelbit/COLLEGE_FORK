import React from "react";
export interface DataTypes {
    key: string;
    name: string;
    year: number;
    amharicName: string;
    department: string;
    gender: string;
    photo: string;
}
interface EditableTableProps {
    initialData: DataTypes[];
}
declare const EditableTableManager: React.FC<EditableTableProps>;
export default EditableTableManager;
