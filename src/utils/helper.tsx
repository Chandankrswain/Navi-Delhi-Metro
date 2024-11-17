export const getISTTime = () => {
  const now = new Date();
  const offsetIST = 5.5 * 60 * 60 * 1000; // IST is UTC +5:30
  const istTime = new Date(
    now.getTime() + offsetIST - now.getTimezoneOffset() * 60 * 1000
  );
  return istTime.toISOString().slice(0, -1);
};
