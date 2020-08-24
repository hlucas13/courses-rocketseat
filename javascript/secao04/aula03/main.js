axios
  .get('https://api.github.com/users/hlucas13')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.warn(error);
  });
