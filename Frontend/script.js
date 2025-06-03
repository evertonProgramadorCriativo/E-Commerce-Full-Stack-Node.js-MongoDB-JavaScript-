fetch('http://localhost:3000/api')
  .then(res => res.text())
  .then(data => console.log(data));
