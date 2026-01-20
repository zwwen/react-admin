/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Table, Space, Form, Input, Modal } from "antd";
import { useState, useRef } from "react";
import type { TableColumnsType, GetProp, TableProps } from "antd";
import api from "@/apis";
import { useEffect } from "react";
import type { IDept } from "@/types";
import { formatDateToChinese } from "@/utils";
import CreateDept from "./CreateDept";
type TablePaginationConfig = Exclude<
  GetProp<TableProps, "pagination">,
  boolean
>;
interface TableParams {
  pagination?: TablePaginationConfig;
}
export default function Depth() {
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });
  const deptRef = useRef<{
    openModal: (type: string, data?: IDept | { parentId: string }) => void;
  }>(null);
  const [data, setData] = useState<IDept[]>([]);
  const [form] = Form.useForm();
  // 获取部门列表
  const getDepthData = async () => {
    setLoading(true);
    const params = {
      ...form.getFieldsValue(),
      page: tableParams.pagination?.current,
      limit: tableParams.pagination?.pageSize,
    };
    console.log();
    const data = await api.getDeptList(params);
    setLoading(false);
    setData(data);
  };
  useEffect(() => {
    getDepthData();
  }, [tableParams.pagination?.current, tableParams.pagination?.pageSize]);
  const columns: TableColumnsType<IDept> = [
    {
      title: "部门名称",
      dataIndex: "deptName",
      key: "deptName",
      width: "200",
    },
    {
      title: "负责人",
      dataIndex: "userName",
      key: "userName",
      width: "150",
    },
    {
      title: "创建时间",
      dataIndex: "createTime",
      key: "createTime",
      render: (text) => {
        return formatDateToChinese(text);
      },
    },
    {
      title: "更新时间",
      dataIndex: "updateTime",
      key: "updateTime",
      render: (text) => {
        return formatDateToChinese(text);
      },
    },
    {
      title: "操作",
      key: "action",
      width: "200",
      render: (_, record) => {
        return (
          <Space>
            <Button
              size="small"
              type="primary"
              onClick={() => {
                handleSubCreate(record._id);
              }}
            >
              新增
            </Button>
            <Button
              size="small"
              type="primary"
              onClick={() => {
                handleEdit(record);
              }}
            >
              编辑
            </Button>
            <Button
              danger
              size="small"
              onClick={() => {
                handleDel(record._id);
              }}
            >
              删除
            </Button>
          </Space>
        );
      },
    },
  ];
  const handleTableChange: TableProps<IDept>["onChange"] = (pagination) => {
    setTableParams({
      pagination,
    });

    // `dataSource` is useless since `pageSize` changed
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };
  const handleSubCreate = (id: string) => {
    console.log(id);
    deptRef.current?.openModal("create", { parentId: id });
  };
  const handleEdit = (record: IDept) => {
    console.log(record);
    deptRef.current?.openModal("edit", record);
  };
  const handleDel = (id: string) => {
    Modal.confirm({
      title: "删除部门",
      content: "确定删除该部门吗？",
      okText: "确定",
      cancelText: "取消",
      onOk: () => {
        handleDelOk(id);
      },
    });
  };
  const handleDelOk = async (id: string) => {
    await api.deleteDept({ _id: id });
    getDepthData();
  };
  const handleReset = () => {
    form.resetFields();
    getDepthData();
  };
  const handleCreate = () => {
    console.log("新增");
    deptRef.current?.openModal("create");
  };
  return (
    <div>
      <Form className="search-form" layout="inline" form={form}>
        <Form.Item name="deptName" label="部门名称">
          <Input placeholder="请输入部门名称" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" className="mr10" onClick={getDepthData}>
            查询
          </Button>
          <Button type="primary" htmlType="submit" onClick={handleReset}>
            重置
          </Button>
        </Form.Item>
      </Form>
      <div className="wrap-table">
        <div className="header">
          <div className="title">部门列表</div>
          <div className="action">
            <Button onClick={handleCreate}>新增</Button>
          </div>
        </div>
        <Table
          style={{ padding: " 0 15px", boxSizing: "border-box" }}
          rowKey="_id"
          columns={columns}
          dataSource={data}
          loading={loading}
          pagination={{
            ...tableParams.pagination,
            showQuickJumper: true,
            showSizeChanger: true,
            pageSizeOptions: [10, 20, 30],
            locale: {
              items_per_page: "/ 条",
              jump_to: "跳至",
              page: "页",
            },
            total: 1,
          }}
          onChange={handleTableChange}
        />
      </div>
      <CreateDept mref={deptRef} update={getDepthData} />
    </div>
  );
}
