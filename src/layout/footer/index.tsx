import stytles from "./index.module.less";

const Footer: React.FC = () => {
  return (
    <footer className={stytles.footer}>
      <div>
        <a
          href="https://www.douyin.com/user/MS4wLjABAAAA8QUJd4uIDW7LiACoHAqzoxRNDovw-9dttxAyBb6hIWI"
          target="_blank"
          rel="noreferrer"
        >
          React18/19全家桶+TS开发通用中后台管理系统
        </a>
        {/* <span className="gutter">|</span>
        <a
          href="https://www.douyin.com/user/MS4wLjABAAAA8QUJd4uIDW7LiACoHAqzoxRNDovw-9dttxAyBb6hIWI"
          target="_blank"
          rel="noreferrer"
        >
          Vue3+TS开发通用后台（新课）全栈后台
        </a> */}
      </div>
      <div>
        Copyright 前端技术©2025 企业级互联网大厂React18/19通用后台课程 All
        Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
