  var prompt = require('prompt');
/*
  prompt.override = {
    username:'test',
    email:'test@test.com'
  }

  //
  // Start the prompt
  //
  prompt.start();

  //
  // Get two properties from the user: username and email
  //
  prompt.get(['username', 'email'], function (err, result) {
    //
    // Log the results.
    //
    console.log('Command-line input received:');
    console.log('  username: ' + result.username);
    console.log('  email: ' + result.email);
  });*/

/*var schema = {
  properties: {
    proxy: {
      description: 'Proxy url',
    },
    proxyCredentials: {
      description: 'Proxy credentials',
      ask: function() {
        // only ask for proxy credentials if a proxy was set
        return prompt.history('proxy').value > 0;
      }
    }
  }
};

//
// Start the prompt
//
prompt.start();

//
// Get one or two properties from the user, depending on
// what the user answered for proxy
//
prompt.get(schema, function (err, result) {
  //
  // Log the results.
  //
  console.log('Command-line input received:');
  console.log('  proxy: ' + result.proxy);
  console.log('  credentials: ' + result.proxyCredentials);
});*/

/*var obj = {
  password: 'lamepassword',
  mindset: 'NY'
}

//
// Log the initial object.
//
console.log('Initial object to be extended:');
console.dir(obj);

//
// Add two properties to the empty object: username and email
//
prompt.addProperties(obj, ['username', 'email'], function (err) {
  //
  // Log the results.
  //
  console.log('Updated object received:');
  console.dir(obj);
});*/

/*prompt.get([{
  name: 'name',
  description: 'Your name',
  type: 'string',
  required: true
}, {
  name: 'surname',
  description: 'Your surname',
  type: 'string',
  required: true,
  message: 'Please dont use the demo credentials',
  conform: function(surname) {
    var name = prompt.history('name').value;
    return (name !== 'John' || surname !== 'Smith');
  }
}], function(err, results) {
  console.log(results);
});*/

var prompt = require("prompt");
//
// Setting these properties customizes the prompt.
//
prompt.message = "";
prompt.delimiter = "";

prompt.start();

prompt.get({
  properties: {
    name: {
      description: "What is your name?"
    }
  }
}, function (err, result) {
  console.log("You said your name is: " + result.name);
});