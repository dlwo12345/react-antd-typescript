import {Input, Table} from 'antd';
import React, {useState} from 'react';

const columns = [
  {
    title: '발전소명',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '지역',
    dataIndex: 'region',
    key: 'region',
  },
  {
    title: '설비용량 PV(kW)',
    dataIndex: 'pv',
    key: 'pv',
  },
  {
    title: '월발전량 계(kWh)',
    dataIndex: 'totalMonthPower',
    key: 'totalMonthPower',
  },
  {
    title: '평균 발전시간(h)',
    dataIndex: 'avgPowerHours',
    key: 'avgPowerHours',
  },
];

const Content = ({dataSource}: any) => {
  const [filterKeyWord, setFilterKeyword] = useState('');
  const onChange = (e: any) => setFilterKeyword(e.target.value);
  const filterData = dataSource?.filter((res: any) => !filterKeyWord || res.name.includes(filterKeyWord));
  return (
    <>
      <Input type="text" value={filterKeyWord} onChange={onChange} />
      {/* columns 정의하고 사용 */}
      <Table columns={columns} dataSource={filterData} size="small" />

      {/* columns tsx에 정의 */}
      <Table dataSource={dataSource} size="small">
        <Table.Column title="발전소명" dataIndex="name" key="name" />
        <Table.Column title="지역" dataIndex="region" key="region" />
        <Table.Column title="설비용량 PV(kW)" dataIndex="pv" key="pv" />
        <Table.Column title="월발전량 계(kWh)" dataIndex="totalMonthPower" key="totalMonthPower" />
        <Table.Column title="평균 발전시간(h)" dataIndex="avgPowerHours" key="avgPowerHours" />
      </Table>
    </>
  );
};

export default Content;
