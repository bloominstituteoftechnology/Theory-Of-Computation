/*<expressions> := <expression+\>
<expression> := <type> <name> = <value>
                <while-loop>
                <print> <name>
                <print> <value>
<conditional> := <name> <lt> <value>
                 <name> <gt> <value>
                 <name> <eq> <value>
<while-loop> := <while> <conditional> <expressions> end
<while> := go bananas
<type> := make <name> be <value>
<name> := string
<value> := integer or a string 
<print> := console.log(<name>) | console.log(<value>)
<lt> := littler than
<gt> := bigger than
<eq> := same as
*/
const clean = (arr) => {
  
  for(let i = 0; i < arr.length; i++) {
    arr[i].trim();
  }
  return arr;
}
const bananaTranspiler = () => {
  const arr = ["make x be 5"];
  const make = "make";
  const whiel = "go bananas";
  const print = "mark territory";
  const lt = "littler than";
  const gt = "bigger than";
  const eq = "same as";
  const WHILE = "WHILE";
  const PRINT = "PRINT";
  const CONDITIONAL = "CONDITIONAL";
  const EXPRESSION = "EXPRESSION";
  const END = "END";
  const MAKE = "MAKE";
  let state = EXPRESSION;
  let js = "";
  let index = 0;
  const workingArr = [];
  while(arr[index] < arr.length) {
    workingArr = arr[index].split(" ");
    console.log(workingArr);
    if(workingArr[0] === make) {
      js += "let ";
      js += workingArr[1].trim();
      if(workingArr[2] === "be") {
        js += " = ";
        js += workingArr[4];
      }
    }
    index++;
  }
  return js;
}
console.log(bananaTranspiler());
return module.exports =  bananaTranspiler;