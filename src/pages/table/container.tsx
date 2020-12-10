import React, {useEffect} from 'react';
import {RecoilRoot} from 'recoil';
import {WithFullLayout} from '@/layouts';
import Content from './content';

// import data from './test.json';
import gqlData from './tempData.json';

const getData = () => {
  return gqlData;
};

const Container = () => {
  const {data}: any = getData();
  const dataSource = data.me.sites.map(({name, region, pv}: any) => {
    return {
      name: name,
      region: region?.name,
      pv: pv?.capacity?.value,
      totalMonthPower: pv?.power?.reduce((total: number, item: any) => total + item.value, 0),
      avgPowerHours: pv?.powerHours?.reduce((total: number, item: any) => total + item.value, 0) / pv?.powerHours?.length,
    };
  });

  return (
    <RecoilRoot>
      <Content dataSource={dataSource} />
    </RecoilRoot>
  );
};

export default WithFullLayout(Container);
