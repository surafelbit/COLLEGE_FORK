import React from "react";
export interface DataTypes {
    key: string;
    name: string;
    year: number;
    semester?: string | number;
    amharicName: string;
    department: string;
    gender: string;
    photo: string;
}
interface EditableTableProps {
    initialData: DataTypes[];
}
declare const EditableTable: React.FC<EditableTableProps>;
export default EditableTable;
