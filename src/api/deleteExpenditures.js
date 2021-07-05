const deleteExpenditures = async (id) => {
  // const url = `http://localhost:5000/expenditures/${id}`;
  const url = `https://peris-expense-track.herokuapp.com/expenditures/${id}`;
  const config = {
    mode: 'cors',
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = await fetch(url, config);
  const result = await res.json();
  if (result.errors) {
    return ({
      error: result.errors,
    });
  }
  return ({
    error: false,
  });
};

export default deleteExpenditures;
