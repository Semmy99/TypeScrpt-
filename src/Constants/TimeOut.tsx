const timeout = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const putTableOneRow = async (newRow?: any) => {
  await timeout(1000);

  return 12345;
};
