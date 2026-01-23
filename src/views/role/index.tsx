import { useRef } from "react";
import { Button, Form, Input, Space, Table, Modal, message } from "antd";
import type { TableColumnsType } from "antd";
import api from "@/apis";
import type { IRole, IRoleSearchParams } from "@/types";
import { formatDateToChinese } from "@/utils";
import CreateRole from "./CreateRole";
import SetPermission from "./SetPermission";
import { useAntdTable } from "ahooks";
import styles from "./index.module.less";
const Role = () => {
  const [form] = Form.useForm();
  const roleRef = useRef<{
    openModal: (type: string, data?: IRole | { parentId: string }) => void;
  }>(null);
  const permissionRef = useRef<{
    openModal: (type: string, data?: IRole) => void;
  }>(null);
  // 查询角色列表
  const getRoleList = (
    { current, pageSize }: { current: number; pageSize: number },
    formData: IRoleSearchParams
  ) => {
    return api
      .getRoleList({ ...formData, pageNum: current, pageSize: pageSize })
      .then((data) => {
        return {
          list: data.list,
          total: data.page.total,
        };
      });
  };
  const { tableProps, search } = useAntdTable(getRoleList, {
    form,
    defaultCurrent: 1,
    defaultPageSize: 5,
  });
  const { reset, submit } = search;
  const columns: TableColumnsType<IRole> = [
    {
      title: "角色名称",
      dataIndex: "roleName",
      key: "roleName",
      width: 200,
    },
    {
      title: "备注",
      dataIndex: "remark",
      key: "remark",
      width: 200,
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
                handleEdit(record);
              }}
            >
              编辑
            </Button>
            <Button
              size="small"
              type="primary"
              onClick={() => {
                handleSetPermission(record);
              }}
            >
              设置权限
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
  // 设置角色权限
  const handleSetPermission = (record: IRole) => {
    permissionRef.current?.openModal("setPermission", record);
  };
  // 编辑角色信息
  const handleEdit = (record: IRole) => {
    roleRef.current?.openModal("edit", record);
  };
  // 删除角色
  const handleDel = (id: string) => {
    Modal.confirm({
      title: "删除角色",
      content: "确定删除该角色吗？",
      okText: "确定",
      cancelText: "取消",
      onOk: async () => {
        await handleDelOk(id);
      },
    });
  };
  // 删除角色确认弹窗回调函数
  const handleDelOk = async (id: string) => {
    await api.deleteRole({ _id: id });
    message.success("删除成功");
    submit();
  };
  //
  // 新增角色
  const handleCreate = () => {
    // 打开创建角色弹窗
    roleRef.current?.openModal("create");
  };
  return (
    <div className={styles["role-list"]}>
      <Form form={form} className="search-form" layout="inline">
        <Form.Item label="角色名称" name="roleName">
          <Input />
        </Form.Item>
        <Space>
          <Button type="primary" htmlType="submit" onClick={submit}>
            查询
          </Button>
          <Button type="primary" htmlType="submit" onClick={reset}>
            重置
          </Button>
        </Space>
      </Form>
      <div className="wrap-table">
        <div className="header">
          <div className="title">角色列表</div>
          <div className="action">
            <Button onClick={handleCreate}>新增</Button>
          </div>
        </div>
        <Table
          style={{ padding: " 0 15px", boxSizing: "border-box" }}
          rowKey="_id"
          bordered={true}
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
      <CreateRole mref={roleRef} update={submit} />
      <SetPermission mref={permissionRef} update={submit} />
    </div>
  );
};
export default Role;
