const WithAdminAccess = (WrappedComponent) => {
  return (props) => {
    const { username, role } = props;

    if (role !== "admin") {
      return (
        <div>
          <h3>Xin lỗi {username || "Bạn"} không có quyền truy cập</h3>
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
};

export default WithAdminAccess;
