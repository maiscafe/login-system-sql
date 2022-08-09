axios({
    method: 'post',
    url: 'http://localhost:3001/register',
    data: {
      login: 'Fred',
      senha: 'Flintstone'
    }
  });