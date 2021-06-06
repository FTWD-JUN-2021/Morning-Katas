// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).Examples:

// hello "john"   => "Hello, John!"
// hello "aliCE"  => "Hello, Alice!"
// hello          => "Hello, World!" # name not given
// hello ''       => "Hello, World!" # name is an empty String;

//https://www.codewars.com/kata/57e3f79c9cb119374600046b

//Solution 1
function hello(name) {
  if (!name) {
    return "Hello, World!";
  } else {
    return `Hello, ${name[0].toUpperCase() + name.substr(1).toLowerCase()}`;
  }
}

//Solution 2
function hello(name) {
  return name
    ? `Hello, ${name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}!`
    : `Hello, World!`;
}
