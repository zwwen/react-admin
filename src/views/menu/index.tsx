/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import {
  Button,
  Table,
  Space,
  Form,
  Input,
  Modal,
  message,
  Select,
} from "antd";
import { useState, useRef } from "react";
import type { TableColumnsType, GetProp, TableProps } from "antd";
import api from "@/apis";
import type { IMenu } from "@/types";
import { formatDateToChinese } from "@/utils";
import CreateMenu from "./CreateMenu";
type TablePaginationConfig = Exclude<
  GetProp<TableProps, "pagination">,
  boolean
>;
interface TableParams {
  pagination?: TablePaginationConfig;
}
export default function Menu() {
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });
  const menuRef = useRef<{
    openModal: (type: string, data?: IMenu | { parentId: string }) => void;
  }>(null);
  const [data, setData] = useState<IMenu[]>([]);
  const [form] = Form.useForm();
  // 获取部门列表
  const getMenuList = async () => {
    setLoading(true);
    const params = {
      ...form.getFieldsValue(),
      page: tableParams.pagination?.current,
      limit: tableParams.pagination?.pageSize,
    };
    const data = await api.getMenuList(params);
    setLoading(false);
    setData(data);
  };
  useEffect(() => {
    getMenuList();
  }, [tableParams.pagination?.current, tableParams.pagination?.pageSize]);
  const columns: TableColumnsType<IMenu> = [
    {
      title: "菜单名称",
      dataIndex: "menuName",
      key: "menuName",
      width: 200,
    },
    {
      title: "菜单图标",
      dataIndex: "icon",
      key: "icon",
    },
    {
      title: "菜单类型",
      dataIndex: "menuType",
      key: "menuType",
      width: 200,
      render: (text) => {
        return text === 1 ? "菜单" : text === 2 ? "按钮" : "页面";
      },
    },
    {
      title: "菜单权限标识",
      dataIndex: "menuCode",
      key: "menuCode",
      width: 300,
    },
    {
      title: "路由地址",
      dataIndex: "path",
      key: "path",
      width: 200,
    },

    {
      title: "组件名称",
      dataIndex: "component",
      key: "component",
      width: 200,
    },
    {
      title: "菜单状态",
      dataIndex: "menuState",
      key: "menuState",
      width: 200,
      render: (text) => {
        return text === 1 ? "启用" : "禁用";
      },
    },
    {
      title: "创建时间",
      dataIndex: "createTime",
      key: "createTime",
      width: 200,
      render: (text) => {
        return formatDateToChinese(text);
      },
    },
    {
      title: "更新时间",
      dataIndex: "updateTime",
      key: "updateTime",
      width: 200,
      render: (text) => {
        return formatDateToChinese(text);
      },
    },
    {
      title: "操作",
      key: "action",
      width: 260,
      fixed: "end",
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
  const handleTableChange: TableProps<IMenu>["onChange"] = (pagination) => {
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
    menuRef.current?.openModal("create", { parentId: id });
  };
  const handleEdit = (record: IMenu) => {
    console.log(record);
    menuRef.current?.openModal("edit", record);
  };
  const handleDel = (id: string) => {
    Modal.confirm({
      title: "删除菜单",
      content: "确定删除该菜单吗？",
      okText: "确定",
      cancelText: "取消",
      onOk: () => {
        handleDelOk(id);
      },
    });
  };
  const handleDelOk = async (id: string) => {
    await api.deleteMenu({ _id: id });
    message.success("删除成功");
    getMenuList();
  };
  const handleReset = () => {
    form.resetFields();
    getMenuList();
  };
  const handleCreate = () => {
    menuRef.current?.openModal("create");
  };
  return (
    <div>
      <Form className="search-form" layout="inline" form={form}>
        <Form.Item name="menuName" label="菜单名称">
          <Input placeholder="请输入菜单名称" />
        </Form.Item>
        <Form.Item name="menuState" label="菜单状态">
          <Select placeholder="请选择菜单状态" allowClear>
            <Select.Option value={1}>启用</Select.Option>
            <Select.Option value={2}>禁用</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" className="mr10" onClick={getMenuList}>
            查询
          </Button>
          <Button type="primary" htmlType="submit" onClick={handleReset}>
            重置
          </Button>
        </Form.Item>
      </Form>
      <div className="wrap-table">
        <div className="header">
          <div className="title">菜单列表</div>
          <div className="action">
            <Button onClick={handleCreate}>新增</Button>
          </div>
        </div>
        <Table
          style={{ padding: " 0 15px", boxSizing: "border-box" }}
          rowKey="_id"
          bordered={true}
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
      <CreateMenu mref={menuRef} update={getMenuList} />
    </div>
  );
}
