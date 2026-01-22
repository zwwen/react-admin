import {
  Button,
  Table,
  Form,
  Input,
  Select,
  Space,
  Modal,
  message,
} from "antd";
import type { ColumnsType } from "antd/es/table";
import { useRef, useState } from "react";
import api from "@/apis";
import { formatDateToChinese } from "@/utils";
import { useAntdTable } from "ahooks";
import type { IUser, IUserSearchParams } from "@/types";
import CreateUser from "./CreateUser";
import SearchForm from "@/components/SearchForm";
const User = () => {
  const [form] = Form.useForm();
  const userRef = useRef<{
    openModal: (type: string, data?: IUser | { parentId: string }) => void;
  }>(null);
  const [userIds, setUserIds] = useState<number[]>([]);
  const columns: ColumnsType<IUser> = [
    {
      title: "用户ID",
      dataIndex: "userId",
      key: "userId",
    },
    {
      title: "用户名称",
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: "用户邮箱",
      dataIndex: "userEmail",
      key: "userEmail",
    },
    {
      title: "用户角色",
      dataIndex: "role",
      key: "role",
      render(role: number) {
        return {
          0: "超级管理员",
          1: "管理员",
          2: "体验管理员",
          3: "普通用户",
        }[role];
      },
    },
    {
      title: "用户状态",
      dataIndex: "state",
      key: "state",
      render(state: number) {
        return {
          1: "在职",
          2: "离职",
          3: "试用期",
        }[state];
      },
    },
    {
      title: "注册时间",
      dataIndex: "createTime",
      key: "createTime",
      render(createTime: string) {
        return formatDateToChinese(createTime);
      },
    },
    {
      title: "操作",
      key: "address",
      render(record: IUser) {
        return (
          <Space>
            <Button type="primary" onClick={() => handleEdit(record)}>
              编辑
            </Button>
            <Button
              type="primary"
              danger
              onClick={() => handleDel(record.userId)}
            >
              删除
            </Button>
          </Space>
        );
      },
    },
  ];
  const getTableData = (
    { current, pageSize }: { current: number; pageSize: number },
    formData: IUserSearchParams
  ) => {
    return api
      .getUserList({
        pageNum: current,
        pageSize: pageSize,
        ...formData,
      })
      .then((res) => {
        return {
          list: res.list || [],
          total: res?.page?.total || 0,
        };
      });
  };
  const { tableProps, search } = useAntdTable(getTableData, {
    form,
    defaultPageSize: 5,
  });

  // 编辑用户
  const handleEdit = (record: IUser) => {
    userRef.current?.openModal("edit", record);
  };
  // 删除用户
  const handleDel = (userId: number) => {
    Modal.confirm({
      title: "删除用户",
      content: "确定删除该用户吗？",
      okText: "确定",
      cancelText: "取消",
      onOk: async () => {
        await handleDelOk(userId);
      },
    });
  };
  // 删除用户确认弹窗回调函数
  const handleDelOk = async (userId: number) => {
    await api.deleteUser({ userIds: [userId] });
    message.success("删除成功");
    search.reset();
  };
  // 新增用户
  const handleCreate = () => {
    userRef.current?.openModal("create");
  };
  // 批量删除用户
  const handlePatchConfirm = () => {
    Modal.confirm({
      title: "批量删除用户",
      content: "确定删除选中的用户吗？",
      okText: "确定",
      cancelText: "取消",
      onOk: async () => {
        await handlePatchDelOk(userIds);
      },
    });
  };
  // 批量删除用户确认弹窗回调函数
  const handlePatchDelOk = async (userIds: number[]) => {
    await api.deleteUser({ userIds });
    message.success("删除成功");
    search.reset();
  };

  return (
    <div className="user-list">
      <SearchForm
        form={form}
        className="search-form"
        layout="inline"
        initialValues={{ state: 1 }}
        submit={search.submit}
        reset={search.reset}
      >
        <Form.Item label="用户ID" name="userId">
          <Input placeholder="请输入用户ID" />
        </Form.Item>
        <Form.Item label="用户名称" name="userName">
          <Input placeholder="请输入用户名称" />
        </Form.Item>
        <Form.Item label="状态" name="state">
          <Select placeholder="请选择状态">
            <Select.Option value={0}>所有</Select.Option>
            <Select.Option value={1}>在职</Select.Option>
            <Select.Option value={2}>离职</Select.Option>
            <Select.Option value={3}>试用期</Select.Option>
          </Select>
        </Form.Item>
      </SearchForm>
      <div className="wrap-table">
        <div className="header">
          <div className="title">角色列表</div>
          <div className="action">
            <Button type="primary" onClick={handleCreate}>
              新增
            </Button>
            <Button type="primary" danger onClick={handlePatchConfirm}>
              批量删除
            </Button>
          </div>
        </div>
        <Table
          style={{ padding: " 0 15px", boxSizing: "border-box" }}
          rowKey="userId"
          bordered={true}
          rowSelection={{
            type: "checkbox",
            selectedRowKeys: userIds,
            onChange: (selectedRowKeys: React.Key[]) => {
              setUserIds(selectedRowKeys as number[]);
            },
          }}
          columns={columns}
          {...tableProps}
          pagination={{
            showSizeChanger: true,
            defaultPageSize: 5,
            pageSizeOptions: ["5", "10", "20", "30", "50", "100"],
            locale: {
              items_per_page: "/ 条",
              jump_to: "跳转到第",
              page: "页",
            },
            total: tableProps.pagination?.total,
            showQuickJumper: true,
            showTotal: (total) => {
              return `共 ${total} 条`;
            },
          }}
        />
      </div>
      <CreateUser mref={userRef} update={search.reset} />
    </div>
  );
};
export default User;
