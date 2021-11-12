import { Button } from "antd";
import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

const TableBasis = () => {
  const dispatch = useDispatch();

  // 连接redux数据
  const { login } = useSelector(({
    root: {
      login,
    }
  }: any) => {
    return {
      login
    }
  }, shallowEqual);

  const changeLoginStatus = () => {
    dispatch({ type: 'root/changeLogin', payload: { key: 'login', data: true } });
  }

  useEffect(() => {
    console.log('login', login);
  }, [login])

  return (
    <div>
      我是基础表格
      <Button onClick={changeLoginStatus}>点击</Button>
    </div>
  );
}

export default TableBasis;