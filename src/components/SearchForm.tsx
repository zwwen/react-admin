import { Button, Form, Space } from "antd";

const SearchForm = (props: any) => {
  return (
    <Form
      form={props.form}
      className="search-form"
      layout="inline"
      initialValues={props.initialValues}
    >
      {props.children}
      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit" onClick={props.submit}>
            查询
          </Button>
          <Button type="primary" htmlType="submit" onClick={props.reset}>
            重置
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};
export default SearchForm;
