import logo from './logo.svg';
import './App.css';

function App() {
  /**Algorithm means steps 
   * define a variable
   * use a variable
   */


  const heading ="profiles";
  const age ="18";
  const verified = true;

  /**Algorithm
   * return name
   */

  // type1 
  function printname(){
    console.log("prince")
  }
  // printname()
  // type2 
  function getname(){
    const name ="prince";
    return name;
  }
  // type 3
  function printpassedname(name){
    console.log(name)
  }
  // printpassedname("ghost")
  // type 4

  function add(a,b){
    const result = a+b;
    return result;
  }
  function add(a,b){
    const result = a-b;
    return result;
  }
  function add(a,b){
    const result = a*b;
    return result;
  }
  function add(a,b){
    const result = a/b;
    return result;
  }

  /**
 * for ( initialization ; condition ; increment/dcreament){
 * statement
 * }
 */

  //  TERNARY operator
  //  syntax (condition) ? statement1 : statement2
 
  // map
  // number
  const numbers = [1,2,3,4,5];
  numbers.map((i)=>{
    // console.log(i)
  });

  // string
  const names =["p","m","s","n","b"];
  names.map((name)=>{
    // console.log(name)
  });

  // objects
  const profiles = [
    {
      name: "saad",
      age:19
    },
    {
      name: "basheer",
      age:19 
    },
    {
      name: "nawaf",
      age:19
    },
    {
      name: "prince",
      age:19
    },
  ];
  profiles.map((profiles)=>{
    console.log(profiles.name,profiles.age)
  });

  //function
  function add(a,b){
    const result = a+b;
    return result;
  }
  function sub(a,b){
    const result = a-b;
    return result;
  }
  function mul(a,b){
    const result = a*b;
    return result;
  }
  function div(a,b){
    const result = a/b;
    return result;
  }

  

  return (

    <div className="App">
      <h1>{heading}</h1>
      <p>Name:-{getname()}</p>
      <p>age:-{age}</p>
      <p>verified:-{(verified==true)? "yes" : "no"}</p>
      <p>result:-{add(10,10)}</p>
      <p>result add: {add(2,2)}</p>
      <p>result sub: {sub(2,2)}</p>
      <p>result mul: {mul(2,2)}</p>
      <p>result div: {div(2,2)}</p>
    </div>
  );
}

export default App;
