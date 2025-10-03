import React from "react";
import type { TableColumnsType } from "antd";
export interface TableProps<T> {
    columns: TableColumnsType<T>;
    data: T[];
    bordered?: boolean;
}
export declare function ReusableTable<T extends {
    key: React.Key;
}>({ columns, data, bordered, }: TableProps<T>): import("react/jsx-runtime").JSX.Element;
