const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

// serialized urd
console.log(myUrl.href);

// Host
console.log(myUrl.host);

// hostname, does not give port
console.log(myUrl.hostname);

// pathname
console.log(myUrl.pathname);

// serialized query
console.log(myUrl.search);

// params object
console.log(myUrl.searchParams);

// add params
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));