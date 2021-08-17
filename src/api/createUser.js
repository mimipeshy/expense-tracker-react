const createExpenditure = async (data) => {
  const url = 'https://peris-expense-track.herokuapp.com/users';
  const config = {
    mode: 'cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  const res = await fetch(url, config);
  const result = await res.json();
  if (result.id) {
    return ({
      error: false,
      payload: result,
    });
  }
  return ({
    error: result,
  });
};

export default createExpenditure;
