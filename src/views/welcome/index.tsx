import styles from "./index.module.less";
const Welcome = () => {
  return (
    <div className={styles.welcome}>
      <div className={styles.content}>
        <div className={styles.subTitle}>欢迎使用</div>
        <div className={styles.title}>React Admin</div>
        <div className={styles.desc}>
          一个基于 React + TypeScript + Ant Design 的后台管理系统模板
        </div>
      </div>
      <div className={styles.img}></div>
    </div>
  );
};
export default Welcome;
