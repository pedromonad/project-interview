export const transformObjectInArrayOfKeyValue = (data: any) => {
  return Array.from(Object.entries(data), ([key, value]) => {
    return { key, value };
  });
};
