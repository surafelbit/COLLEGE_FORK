import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { Table } from "antd";
export function ReusableTable({ columns, data, bordered = true, }) {
    return (_jsx(Table, { bordered: bordered, columns: columns, expandable: {
            expandedRowRender: (record) => "description" in record ? (_jsx("div", { children: record.description })) : null,
        }, dataSource: data }));
}
