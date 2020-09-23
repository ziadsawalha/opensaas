import React from 'react';
import Widget from '../Widget';
import RegularTableComponent from '../../../Components/RegularTableComponent';
import LineChartComponent from '../../../Components/Charts/LineChart';
import PieChartComponent from '../../../Components/Charts/PieChart';
import BarChartComponent from '../../../Components/Charts/BarChart';
import { columns, rows } from '../SidebarCategoryTablePage';
import { Props, SettingsProps } from '../../../Components/Charts/LineChart/lineChartDataDefault';
import { PieData, PieSettingsProps } from '../../../Components/Charts/PieChart/PieChartDataDefault';
import { BarData, BarSettingsProps } from '../../../Components/Charts/BarChart/BarChartDataDefault';
import ProjectStatusComponent from '../../../Components/ProjectStatusComponent';
import { IProjectStatus } from '../../../Components/ProjectStatusComponent/type';
import ActivitiesComponent from '../../../Components/ActivitiesComponent';
import { Row } from 'reactstrap';

const widgets = [
  {
    label: 'USERS',
    value: '588',
    icon: (
      <svg
        stroke='currentColor'
        fill='none'
        strokeWidth='2'
        viewBox='0 0 24 24'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='stroke-current text-grey-500'
        height='24'
        width='24'
        xmlns='http://www.w3.org/2000/svg'>
        <path d='M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' />
        <circle cx='9' cy='7' r='4' />
        <path d='M23 21v-2a4 4 0 0 0-3-3.87' />
        <path d='M16 3.13a4 4 0 0 1 0 7.75' />
      </svg>
    ),
    className: 'flex-row justify-content-between',
  },
  {
    label: 'SESSIONS',
    value: '435',
    icon: (
      <svg
        stroke='currentColor'
        fill='none'
        strokeWidth='2'
        viewBox='0 0 24 24'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='stroke-current text-grey-500'
        height='24'
        width='24'
        xmlns='http://www.w3.org/2000/svg'>
        <polyline points='22 12 18 12 15 21 9 3 6 12 2 12' />
      </svg>
    ),
    className: 'flex-row justify-content-between',
  },
  {
    label: 'BOUNCE RATE',
    value: '40.5%',
    icon: (
      <svg
        stroke='currentColor'
        fill='none'
        strokeWidth='2'
        viewBox='0 0 24 24'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='stroke-current text-grey-500'
        height='24'
        width='24'
        xmlns='http://www.w3.org/2000/svg'>
        <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6' />
        <polyline points='15 3 21 3 21 9' />
        <line x1='10' y1='14' x2='21' y2='3' />
      </svg>
    ),
    className: 'flex-row justify-content-between',
  },
  {
    label: 'SESSION DURATION',
    value: '1m 24s',
    icon: (
      <svg
        stroke='currentColor'
        fill='none'
        strokeWidth='2'
        viewBox='0 0 24 24'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='stroke-current text-grey-500'
        height='24'
        width='24'
        xmlns='http://www.w3.org/2000/svg'>
        <circle cx='12' cy='12' r='10' />
        <polyline points='12 6 12 12 16 14' />
      </svg>
    ),
    className: 'flex-row justify-content-between',
  },
];

const lineChartData: Props = [
  {
    name: 'sales',
    data: [
      { category: 'Jan', value: 4000 },
      { category: 'Feb', value: 3000 },
      { category: 'Mar', value: 2000 },
      { category: 'Apr', value: 2780 },
      { category: 'May', value: 1890 },
      { category: 'Jun', value: 2390 },
      { category: 'Jul', value: 3490 },
      { category: 'Aug', value: 1890 },
      { category: 'Sep', value: 2390 },
      { category: 'Oct', value: 2490 },
      { category: 'Nov', value: 2300 },
      { category: 'Dec', value: 1999 },
    ],
  },
  {
    name: 'conversions',
    data: [
      { category: 'Jan', value: 2400 },
      { category: 'Feb', value: 1398 },
      { category: 'Mar', value: 9800 },
      { category: 'Apr', value: 3908 },
      { category: 'May', value: 4800 },
      { category: 'Jun', value: 3800 },
      { category: 'Jul', value: 3490 },
      { category: 'Aug', value: 1290 },
      { category: 'Sep', value: 2290 },
      { category: 'Oct', value: 2420 },
      { category: 'Nov', value: 1300 },
      { category: 'Dec', value: 2099 },
    ],
  },
];

const lineChartRandomSettings: SettingsProps = {
  width: 400,
  height: 300,
  isEnableGrid: false,
  xaxis: {
    type: 'category',
  },
  line: {
    strokeWidth: 2,
    type: 'monotone',
    activeDot: {
      r: 6,
    },
  },
  colors: ['#90caf9', '#4ca5f5'],
};

const pieChartRandomData: PieData = [
  { name: 'Desktop', value: 200 },
  { name: 'Mobile', value: 200 },
  { name: 'Tablet', value: 200 },
];

const pieChartRandomSettings: PieSettingsProps = {
  width: 300,
  height: 300,
  pie: {
    cx: 140,
    cy: 100,
    startAngle: 0,
    endAngle: 0,
    innerRadius: 60,
    outerRadius: 80,
    paddingAngle: 1,
  },
  customColors: ['#90caf9', '#4ca5f5', '#3d88e5'],
};

const barChartRandomData: BarData = [
  {
    name: 'Jan',
    uv: 140,
    pv: 240,
  },
  {
    name: 'Feb',
    uv: 67,
    pv: 85,
  },
  {
    name: 'May',
    uv: 54,
    pv: 23,
  },
  {
    name: 'Apr',
    uv: 67,
    pv: 90,
  },
  {
    name: 'Mar',
    uv: 35,
    pv: 67,
  },
  {
    name: 'Jun',
    uv: 12,
    pv: 43,
  },
  {
    name: 'Jul',
    uv: 56,
    pv: 87,
  },
  {
    name: 'Aug',
    uv: 69,
    pv: 78,
  },
  {
    name: 'Sep',
    uv: 22,
    pv: 32,
  },
  {
    name: 'Oct',
    uv: 45,
    pv: 12,
  },
  {
    name: 'Nov',
    uv: 64,
    pv: 89,
  },
  {
    name: 'Dec',
    uv: 22,
    pv: 99,
  },
];

const barChartRandomSettings: BarSettingsProps = {
  width: 500,
  height: 300,
  isEnableGrid: false,
  isEnableLegend: false,
  barSize: 10,
  colors: ['#90caf9', '#3d88e5'],
};

const ProjectStatusData: IProjectStatus[] = [
  {
    title: 'Harum quia vel vero id.',
    desc: 'Et odio facere in quis.',
    img:
      'https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
    value: 35,
  },
  {
    title: 'Qui itaque omnis distinctio commodi.',
    desc: 'Tempore quis omnis tempore et.',
    img:
      'https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
    value: 63,
  },
  {
    title: 'Nemo dolor reiciendis ut et.',
    desc: 'Nisi aut iure et modi.',
    img:
      'https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
    value: 100,
  },
  {
    title: 'Provident dignissimos sed non quia.',
    desc: 'Odit omnis enim sapiente labore.',
    img:
      'https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
    value: 26,
  },
];

const ActivitiesData = [
  {
    title: 'Perferendis dignissimos provident saepe in.',
    desc: 'Corporis in est quae exercitationem.',
    status: 'a few seconds ago',
    value: 1,
  },
  {
    title: 'Eos et aut perspiciatis et.',
    desc: 'Hic praesentium veritatis sapiente voluptatem.',
    status: 'a day ago',
    value: 2,
  },
  {
    title: 'Vero voluptatibus est voluptas quas.',
    desc: 'Ut iusto praesentium harum molestias.',
    status: '2 days ago',
    value: 3,
  },
  {
    title: 'Non maxime fuga nemo officiis.',
    desc: 'Dolore nam laudantium vel voluptatem.',
    status: '3 days ago',
    value: 4,
  },
];

const Dashboard: React.FC = () => {
  return (
    <div className='dashboard d-flex flex-row flex-wrap justify-content-start'>
      {widgets.map((item, index: number) => {
        return <Widget key={index} {...item} />;
      })}
      <Row className='mx-0 w-100'>
        <Widget col className='w-2/3 flex-shrink-0' style={{ minHeight: '320px' }}>
          <div className='w-100 text-sm font-light text-grey-500'>Conversions</div>
          <div className='w-100 text-sm font-bold'>
            <span>This year</span>
          </div>
          <BarChartComponent data={barChartRandomData} settings={barChartRandomSettings} />
        </Widget>
        <Widget col className='w-1/4 flex-shrink-0 justify-content-center'>
          <div className='text-sm font-light text-grey-500'>Sessions</div>
          <div className='text-sm font-bold'>
            <span>By device</span>
          </div>
          <div className='w-100 d-flex justify-content-center'>
            <PieChartComponent data={pieChartRandomData} settings={pieChartRandomSettings} />
          </div>
        </Widget>
      </Row>
      <Widget className='w-100'>
        <RegularTableComponent columns={columns} rows={rows} />
      </Widget>
      <Widget className='flex-grow-1 flex-shrink-0 w-2/3' style={{ minHeight: '320px' }}>
        <LineChartComponent data={lineChartData} settings={lineChartRandomSettings} />
      </Widget>
      <Widget className='flex-column' label='Project status' value='This week'>
        {ProjectStatusData.map((item: IProjectStatus, index: number) => (
          <ProjectStatusComponent {...item} key={index} />
        ))}
      </Widget>
      <Widget className='flex-column' label='Activities' value='Today'>
        {ActivitiesData.map((item, index: number) => (
          <ActivitiesComponent {...item} key={index} />
        ))}
      </Widget>
    </div>
  );
};
export default Dashboard;
