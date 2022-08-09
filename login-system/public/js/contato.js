axios({
    method: 'post',
    url: '/login',
    data: {
      login: 'teste',
      senha: '123'
    }
  })
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        // console.log(error);
    });