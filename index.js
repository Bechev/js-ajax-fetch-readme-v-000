const token = '50542b37dfa270136f18e9ccbc85ee09e67aa451'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
