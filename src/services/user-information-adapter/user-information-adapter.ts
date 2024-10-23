import { transformObjectInArrayOfKeyValue } from '../transform-object-in-array-of-key-value/transform-object-in-array-of-key-value';

export const userInformationAdapter = (data: any) => {
  const dataTransformed = transformObjectInArrayOfKeyValue(data);
  const propertiesAllowed = [
    'company',
    'email',
    'followers',
    'location',
    'public_gists',
    'public_repos'
  ];

  return dataTransformed.filter((item) => propertiesAllowed.includes(item.key));
};
