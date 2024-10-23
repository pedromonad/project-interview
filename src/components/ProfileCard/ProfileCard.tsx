import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Typography } from '@material-tailwind/react';

export type Props = {
  name: string;
  description: string;
  image: string;
  username: string;
};

export const ProfileCard = ({ name, description, image, username }: Props) => {
  return (
    <Card className="w-96">
      <CardHeader floated={false} className="h-80">
        <img src={image} alt="profile-picture" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {name}
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
          {description}
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">{username}</CardFooter>
    </Card>
  );
};
