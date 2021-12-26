export const getData = async () => {
  try {
    const response = await fetch(process.env.REACT_APP_API_URL);
    const data = await response.json();
    return data;
  } catch (err) {
    return null;
  }
};
