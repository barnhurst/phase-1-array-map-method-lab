const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () =>  {
  return tutorials.map(title => title.split(' ').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)).join(' '))
  }
// const titleCased = array => {
//     let newArray = array.map(element => {
//       debugger
//       const words = element.split(" ");
  
//       words.map(word => {
//       
//         return word[0].toUpperCase() + word.substring(1).toLowerCase;
//       
//       }).join(" ")
//      
//     })
//     return newArray;
//   }

// const titleCased = tutorials => {
//   tutorials.map(function (element) {
//     const words = element.split(" ");
//     words.map((word) => {
//       return word[0].toUpperCase() + word.substring(1);
//     }).join(" "); 
//   })
// }

// const titleCased = (tutorials) => {
//   return tutorials.map(tutorials.split(' ').map(charAt(0).toUpperCase() + tutorials.substring(1)).join(' ')
//   ) 

// }

// const titleCased = tutorials => {
//   tutorials = el => 
//     el.map(word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase)
    
//   return tutorials;
// } 

// const titleCased = () => {
//   const word = tutorials.split(' ') 
//   word.map(first => first[0].toUpperCase())
//   word.join(' ')
//     return tutorials
// } 

// const titleCased = 
//   tutorials.map(titles => titles[0].toUpperCase())

// const titleCased = {tutorials.map(titles => titles[0].toUpperCase())}   
//   return tutorials


// const titleCased = () => {
//   return tutorials
// }