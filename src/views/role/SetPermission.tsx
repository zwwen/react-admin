import {
  Form,
  Tree,
  message,
  Modal,
  type TreeProps,
  type TreeDataNode,
  Input,
} from "antd";
import {
  useEffect,
  useImperativeHandle,
  useState,
  type RefObject,
} from "react";
import api from "@/apis";
import type { IMenu, IPermission, IRole } from "@/types";
interface IProps {
  mref: RefObject<{
    openModal: (type: string, data?: IRole | { parentId: string }) => void;
  }>;
  update: () => void;
}
const SetPermission = (props: IProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [menuList, setMenuList] = useState<IMenu[]>([]);
  const [checkedKeys, setCheckKeys] = useState<string[]>([]);
  const [permission, setPermission] = useState<IPermission>();
  const [roleInfo, setRoleInfo] = useState<IRole>();
  const [form] = Form.useForm();
  // 获取菜单
  const getMenuList = async () => {
    const data = await api.getMenuList({});
    setMenuList(data);
  };
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getMenuList();
  }, []);
  const handleOk = async () => {
    if (permission) {
      await api.setPermission(form.getFieldsValue());
      message.success("设置成功");
    }

    handleCancel();
    props.update();
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };
  const openModal = (type: string, data?: IRole) => {
    setRoleInfo(data as IRole);
    setIsModalOpen(true);
    setCheckKeys(data?.permissionList.checkedKeys || []);
    if (data) {
      form.setFieldsValue(data);
    }
  };
  useImperativeHandle(props.mref, () => ({ openModal }));
  const onCheck: TreeProps["onCheck"] = (checkedKeys: any, info: any) => {
    setCheckKeys(checkedKeys);
    console.log("onCheck", checkedKeys, info);
    const checkedKeysTemp: string[] = [];
    const halfCheckedKeysTemp: string[] = [];
    info.checkedNodes.map((node: IMenu) => {
      if (node.menuType === 2) {
        checkedKeysTemp.push(node._id);
      } else {
        halfCheckedKeysTemp.push(node._id);
      }
    });
    setPermission({
      _id: roleInfo?._id || "",
      permissionList: {
        checkedKeys: checkedKeysTemp,
        halfCheckedKeys: halfCheckedKeysTemp.concat(info.halfCheckedKeys),
      },
    });
  };

  return (
    <Modal
      title="设置权限"
      open={isModalOpen}
      width={600}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="确认"
      cancelText="取消"
    >
      <Form form={form} labelAlign="right" labelCol={{ span: 4 }}>
        <Form.Item label="角色名称">
          <Input disabled variant="borderless" value={roleInfo?.roleName} />
        </Form.Item>
        <Form.Item label="权限">
          <Tree
            checkable
            onCheck={onCheck}
            defaultExpandAll
            checkedKeys={checkedKeys}
            fieldNames={{
              key: "_id",
              children: "children",
              title: "menuName",
            }}
            treeData={menuList as unknown as TreeDataNode[]}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default SetPermission;
