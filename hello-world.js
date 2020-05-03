const greeting = () => {
  return 'Hello World'
}

if (require.main  === module){
  console.log(greeting())
} else {
  module.exports = greeting 
}