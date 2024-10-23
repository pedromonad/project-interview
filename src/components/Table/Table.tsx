import React from 'react';
import { Card, Typography } from '@material-tailwind/react';

export type Props = {
  items: {
    key: string;
    value: string;
  }[];
};

export const Table = ({ items }: Props) => (
  <Card className="h-full w-full">
    <table className="w-full min-w-max table-auto text-left">
      <tbody>
        {items.map(({ key, value }) => {
          return (
            <tr key={key}>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-bold">
                  {key}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" className="font-normal text-gray-600">
                  {value}
                </Typography>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </Card>
);
