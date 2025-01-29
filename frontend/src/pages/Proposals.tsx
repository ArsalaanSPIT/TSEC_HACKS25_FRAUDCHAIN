import React from 'react';
import Sidebar from '../components/Sidebar';
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  getKeyValue,
} from '@heroui/react';
const rows = [
  {
    key: '1',
    title: 'Expand Renewable Energy Projects',
    by: 'EcoPower Inc.',
    status: 'Pending',
  },
  {
    key: '2',
    title: 'Blockchain for Agricultural Supply Chains',
    by: 'AgriChain Tech',
    status: 'High Risk',
  },
  {
    key: '3',
    title: 'Urban Vertical Farming Initiative',
    by: 'GreenSky Farms',
    status: 'Approved',
  },
  {
    key: '4',
    title: 'AI-Driven Healthcare Diagnostics',
    by: 'HealthIntel AI',
    status: 'Low Risk',
  },
  {
    key: '5',
    title: 'Development of Autonomous Delivery Drones',
    by: 'SkyLogistics',
    status: 'Rejected',
  },
  {
    key: '6',
    title: 'Virtual Reality Educational Platforms',
    by: 'EduVR Solutions',
    status: 'Pending',
  },
  {
    key: '7',
    title: 'Sustainable Urban Transportation',
    by: 'CityMover Ltd.',
    status: 'High Risk',
  },
  {
    key: '8',
    title: 'Water Purification Systems for Rural Areas',
    by: 'AquaPure Tech',
    status: 'Approved',
  },
  {
    key: '9',
    title: 'Smart Wearables for Health Monitoring',
    by: 'VitaBand Inc.',
    status: 'Low Risk',
  },
  {
    key: '10',
    title: 'Development of Eco-Friendly Packaging',
    by: 'GreenPack Solutions',
    status: 'Pending',
  },
  {
    key: '11',
    title: 'AI-Powered Cybersecurity Solutions',
    by: 'SecureAI Corp.',
    status: 'High Risk',
  },
  {
    key: '12',
    title: 'Renewable Energy Storage Systems',
    by: 'PowerStore Innovations',
    status: 'Approved',
  },
  {
    key: '13',
    title: 'Blockchain-Based Voting System',
    by: 'VoteChain Ltd.',
    status: 'Low Risk',
  },
  {
    key: '14',
    title: 'AI for Mental Health Support',
    by: 'MindfulAI',
    status: 'Pending',
  },
  {
    key: '15',
    title: 'Development of Hydrogen Fuel Cells',
    by: 'HydroGenix',
    status: 'Rejected',
  },
  {
    key: '16',
    title: 'Smart Home Automation Systems',
    by: 'HomeSmart Tech',
    status: 'High Risk',
  },
  {
    key: '17',
    title: 'AI-Driven Language Translation Tools',
    by: 'LinguaAI',
    status: 'Approved',
  },
  {
    key: '18',
    title: 'Sustainable Fashion Marketplace',
    by: 'EcoStyle Hub',
    status: 'Low Risk',
  },
  {
    key: '19',
    title: 'Development of Quantum Computing Hardware',
    by: 'QuantumCore',
    status: 'Pending',
  },
  {
    key: '20',
    title: 'AI for Wildlife Conservation',
    by: 'WildAI',
    status: 'High Risk',
  },
];

const columns = [
  {
    key: 'title',
    label: 'TITLE',
  },
  {
    key: 'by',
    label: 'BY',
  },
  {
    key: 'status',
    label: 'STATUS',
  },
];

const Proposals = () => {
  const red = ['Rejected', 'High Risk'];
  const green = ['Approved', 'Low Risk'];
  return (
    <div className="w-full h-screen flex flex-row">
      <Sidebar></Sidebar>
      <div className="w-full bg-secondary-100 p-10 text-lg flex flex-col gap-4 overflow-y-scroll">
        <h1 className="text-3xl font-semibold text-text-500">
          Recent proposals
        </h1>
        <Table
          aria-label="Current proposals"
          className="bg-background-50 rounded-3xl"
        >
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn
                key={column.key}
                className="bg-background-100 text-text-400"
              >
                {column.label}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={rows}>
            {(item) => (
              <TableRow key={item.key}>
                {(columnKey) => (
                  <TableCell
                    className={
                      red.includes(getKeyValue(item, columnKey))
                        ? 'text-red-600 font-bold'
                        : green.includes(getKeyValue(item, columnKey))
                        ? 'text-green-600 font-bold'
                        : 'text-gray-600'
                    }
                  >
                    {getKeyValue(item, columnKey)}
                  </TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Proposals;
