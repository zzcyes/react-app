import React from 'react';
import { Popover } from 'antd';
import './listWithMore.css';

// 示例数据
const data = [
  {
    id: '1',
    name: 'Kennedy',
    job: 'Chief Mobility Orchestrator',
    city: 'North Alec',
  },
  {
    id: '2',
    name: 'Lucius',
    job: 'Internal Research Manager',
    city: 'Littleland',
  },
  {
    id: '3',
    name: 'Carlos',
    job: 'Lead Configuration Analyst',
    city: 'South Lillian',
  },
  {
    id: '4',
    name: 'Urban',
    job: 'Chief Operations Agent',
    city: 'Shieldshaven',
  },
  {
    id: '5',
    name: 'Katrine',
    job: 'Legacy Solutions Orchestrator',
    city: 'South Kyleigh',
  },
  {
    id: '6',
    name: 'Kennedi',
    job: 'Global Assurance Developer',
    city: 'East Jaunitaville',
  },
  {
    id: '7',
    name: 'Mariah',
    job: 'Forward Functionality Administrator',
    city: 'West Kody',
  },
  {
    id: '8',
    name: 'Danika',
    job: 'Forward Applications Developer',
    city: 'Lake Max',
  },
  {
    id: '9',
    name: 'Freeda',
    job: 'Legacy Tactics Officer',
    city: 'North Brandonview',
  },
  {
    id: '10',
    name: 'Lila',
    job: 'Future Research Coordinator',
    city: 'South Helenabury',
  },
];

interface ListWithMoreProps {
  renderItem: (item: any, index: number, data: any[]) => void;
  data: any[];
  max: number;
}

function ListWithMore({ renderItem, data, max }: ListWithMoreProps) {
  const elements = data.map((item, index) => renderItem(item, index, data));
  const show = elements.slice(0, max);
  const hide = elements.slice(max);
  return (
    <span>
      {show}
      {hide.length > 0 && (
        <Popover content={<div style={{ maxWidth: 500 }}>{hide}</div>}>
          <span>
            and
            <span className="more-items-trigger"> {hide.length} more...</span>
          </span>
        </Popover>
      )}
    </span>
  );
}

export default function ListWithMoreExample() {
  return (
    <div>
      <h1>User Names</h1>
      <div className="user-names">
        Liked by:
        <ListWithMore
          renderItem={user => {
            return <span className="user-name">{user.name}</span>;
          }}
          data={data}
          max={3}
        />
      </div>
      <br />
      <br />
      <h1>User List</h1>
      <div>
        <div className="user-list-row user-list-row-head">
          <span>Name</span>
          <span>City</span>
          <span>Job Title</span>
        </div>
        <ListWithMore
          renderItem={user => {
            return (
              <div className="user-list-row">
                <span>{user.name}</span>
                <span>{user.city}</span>
                <span>{user.job}</span>
              </div>
            );
          }}
          data={data}
          max={5}
        />
      </div>
    </div>
  );
}
