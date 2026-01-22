import { Form, Input, message, Modal, Select, TreeSelect, Upload } from "antd";
import {
  useEffect,
  useImperativeHandle,
  useState,
  type RefObject,
} from "react";
import type { UploadChangeParam } from "antd/es/upload";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import api from "@/apis";
import type { IDept, IRole, IUser } from "@/types";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
interface IProps {
  mref: RefObject<{
    openModal: (type: string, data?: IUser | { parentId: string }) => void;
  }>;
  update: () => void;
}
export default function CreateUser(props: IProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [action, setAction] = useState<string>("create");
  const [form] = Form.useForm();
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);
  const [deptList, setDeptList] = useState<IDept[]>([]);
  const [roleList, setRoleList] = useState<IRole[]>([]);
  // 获取部门列表
  const getDeptList = async () => {
    const list = await api.getDeptList();
    setDeptList(list);
  };

  // 获取角色列表
  const getRoleList = async () => {
    const list = await api.getAllRoleList();
    setRoleList(list);
  };
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getDeptList();
    getRoleList();
  }, []);
  const handleOk = async () => {
    const valid = await form.validateFields();
    if (!valid) return;
    const params = {
      ...form.getFieldsValue(),
      userImg: img,
    };
    if (action === "create") {
      await api.createRole(params);
      message.success("创建成功");
    } else if (action === "edit") {
      await api.updateRole(params);
      message.success("编辑成功");
    }
    handleCancel();
    props.update();
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
    setImg("");
  };
  const openModal = (type: string, data?: IUser) => {
    setAction(type);
    setIsModalOpen(true);
    if (type === "edit" && data) {
      form.setFieldsValue(data);
      setImg(data.userImg);
    }
  };
  // 上传之前，接口处理
  const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("只能上传png或jpeg格式的图片");
      return false;
    }
    const limit500 = file.size / 1024 / 1024 < 0.5;
    if (!limit500) {
      message.error("图片不能超过500K");
    }
    return isJpgOrPng && limit500;
  };

  // 上传后，图片处理
  const handleChange: UploadProps["onChange"] = (
    info: UploadChangeParam<UploadFile>
  ) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      setLoading(false);
      const { code, data, msg } = info.file.response;
      if (code === 0) {
        setImg(data.file);
      } else {
        message.error(msg);
      }
    } else if (info.file.status === "error") {
      message.error("服务器异常，请稍后重试");
    }
  };
  useImperativeHandle(props.mref, () => ({ openModal }));
  return (
    <Modal
      title={action === "create" ? "创建用户" : "编辑用户"}
      open={isModalOpen}
      width={800}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="确认"
      cancelText="取消"
    >
      <Form form={form} labelAlign="right" labelCol={{ span: 4 }}>
        <Form.Item hidden name="userId">
          <Input />
        </Form.Item>
        <Form.Item
          label="用户名称"
          name="userName"
          rules={[
            { required: true, message: "请输入用户名称" },
            { min: 3, max: 20, message: "用户名称长度为3-20个字符" },
          ]}
        >
          <Input placeholder="请输入用户名称" />
        </Form.Item>
        <Form.Item
          label="用户邮箱"
          name="userEmail"
          rules={[
            { required: true, message: "请输入用户邮箱" },
            { type: "email", message: "请输入正确的邮箱格式" },
            {
              pattern: /^\w+@qq.com$/,
              message: "请输入qq邮箱",
            },
          ]}
        >
          <Input placeholder="请输入用户邮箱" />
        </Form.Item>
        <Form.Item
          label="手机号"
          name="mobile"
          rules={[
            { len: 11, message: "请输入11位手机号" },
            { pattern: /^1[3-9]\d{9}$/, message: "请输入正确的手机号" },
          ]}
        >
          <Input placeholder="请输入用户手机号" />
        </Form.Item>
        <Form.Item
          label="部门"
          name="deptId"
          rules={[{ required: true, message: "请选择部门" }]}
        >
          <TreeSelect
            placeholder="请选择部门"
            allowClear
            treeDefaultExpandAll
            showCheckedStrategy={TreeSelect.SHOW_ALL}
            fieldNames={{ label: "deptName", value: "_id" }}
            treeData={deptList}
          />
        </Form.Item>
        <Form.Item label="岗位" name="job">
          <Input placeholder="请输入用户岗位" />
        </Form.Item>
        <Form.Item label="状态" name="state">
          <Select placeholder="请选择状态">
            <Select.Option value={1}>在职</Select.Option>
            <Select.Option value={2}>离职</Select.Option>
            <Select.Option value={3}>试用期</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="系统角色" name="roleList">
          <Select placeholder="请选择角色">
            {roleList.map((item) => {
              return (
                <Select.Option value={item._id} key={item._id}>
                  {item.roleName}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item label="用户头像">
          <Upload
            listType="picture-circle"
            showUploadList={false}
            action="/api/users/upload"
            beforeUpload={beforeUpload}
            onChange={handleChange}
          >
            {img ? (
              <img src={img} style={{ width: "100%", borderRadius: "100%" }} />
            ) : (
              <div>
                {loading ? (
                  <LoadingOutlined rev={undefined} />
                ) : (
                  <PlusOutlined rev={undefined} />
                )}
                <div style={{ marginTop: 5 }}>上传头像</div>
              </div>
            )}
          </Upload>
        </Form.Item>
      </Form>
    </Modal>
  );
}
