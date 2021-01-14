import React, {FC, useState} from 'react';
import {Button, Modal} from 'antd';
import {WithFullLayout} from '@/layouts';
// import ModalTestComponent from './components/modalTestComponent';

const Container: FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="App">
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        {/* <ModalTestComponent /> */}
      </Modal>
    </div>
  );
};

export default WithFullLayout(Container);
