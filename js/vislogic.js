var vislogic = {};

/*
 initial AC
 -  f is tautology
 -  f is contraction

 - 1. assign truth values to variables
 - 2. convert syntax to expression and run with eval

*/

var formulas = [
 'P&&!P',  // contradiction
 'P||!P', // tautology
 'P&&Q'
];


function getVariables(formula){
	var variables = {}, i, fC, varib;
	for(i=0;i<formula.length;i++){
		fC    = formula[i];
		varib = fC.match(/[a-zA-Z]/g);
		if(varib !== null && !variables[varib]){
			variables[varib] = true;
		}
	}
	return variables;
}

function replaceVars(formula, variables){
	var finalFormula = [];
	var i, fC, varib;
	for(i=0;i<formula.length;i++){
		fC = formula[i];
		if(variables[fC] !== undefined){
			finalFormula.push(variables[fC] + '');
		} else {
			finalFormula.push(fC);
		}
	}
	return finalFormula.join('');
}

function tryAllVarValues(formula, variables){
	/*
	 start with object of latters
	 every letter having a value of true
	 */

	//create a binary number the same length as the number of variables

	 var i, bStr = '';
	 //count properties of object
	 for(i=0;i<variables.length;i++){
	 	bStr += '1';
	 }
	 console.log(bStr);
	 console.log(parseInt(bStr,2));
	 
	 /*
	 for example three variables would be '111'
	 then count down minary number modifying variables truth values and sending them to replaceVars and eval
	 if all variations are true = tautology
	 if all variations are false = contradiction
	*/
}

var variables = getVariables(formulas[2]);
var logicFormula = replaceVars(formulas[2], variables);
//console.log(eval(logicFormula));

tryAllVarValues(0,variables);
