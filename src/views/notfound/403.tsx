import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  const handleBackHome = () => {
    navigate("/login");
  };
  return (
    <Result
      status={403}
      title="403"
      subTitle="抱歉，您当前没有权限访问此页面"
      extra={
        <Button type="primary" onClick={handleBackHome}>
          返回登录页
        </Button>
      }
    ></Result>
  );
};
export default NotFound;
