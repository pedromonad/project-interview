import React from 'react';

import { Avatar, Card, CardHeader, Typography } from '@material-tailwind/react';

export type Props = {
  description: string;
  image: string;
  name: string;
};

export const UserCard = ({ description, image, name }: Props) => (
  <Card color="transparent" shadow={false} className="w-72">
    <CardHeader
      color="transparent"
      floated={false}
      shadow={false}
      className="mx-0 flex items-center gap-4 pt-0 pb-8"
    >
      <Avatar size="lg" variant="circular" src={image} />
      <div className="flex w-full flex-col gap-0.5">
        <div className="flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            {name}
          </Typography>
        </div>
        <Typography className="text-left" color="blue-gray">
          {description}
        </Typography>
      </div>
    </CardHeader>
  </Card>
);
