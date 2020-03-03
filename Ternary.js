function ageVerification(age) {
    // if (age > 25) {
    //   console.log('can rent a car');
    // } else {
    //   console.log("can't rent a car");
    // }
  
    return age > 25 ? "can rent a car" : "can't rent a car"; // same as above conditional but with one line of code.
  }
  
  ageVerification(30); 
  ageVerification(10); 

  // Integrating Conditionals into JavaScript strings with Ternary Operators

const page = 'Home';
console.log(`class = ${ page === 'Home' ? 'master-layout' : 'secondary-layout'}`)

const page = 'about';
console.log(`class = ${ page === 'Home' ? 'master-layout' : 'secondary-layout'}`)
