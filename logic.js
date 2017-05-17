var vislogic = {};


  var formula; // e.g P⊃Q,P:Q

//P⋁~(Q⋀R),P:Q
vislogic.logic = {

  setFormula: function(f){
    formula = f;
  },
  getFormula: function(){
    return formula;
  },
  getConclusion: function(f){
    return f.split(':')[1];
  },
  getPremises: function(f){
    return f.split(':')[0];
  },
  breakDown: function(f){
    console.log(f);
    //var reg = /([a-zA-z]+)([\u2283|\u2227|\u2228|\u2261]+)([a-zA-z]+)/;

  },
  bracketNegation: function(f){
    //~Pv~(~Qv~R) === (~(P))v(~((~(Q))v(~(R))))
  },
  expandFormula: function(f){
    //print(f);
    var finalFormula = {};
    console.log(f);
    function splitFormula(f, inner){
      var prev = '';
      for(var i=0,c,uC;i<f.length;i++){
        c = f[i];
        //console.log(c);
        if(c === '('){

          console.log('open bracket');
          var sub = splitFormula(f.substr(i+1,f.length), {
              'p': null,
              'c': null,
              'q': null
          });
          
          !inner.p ? inner.p = sub : inner.q = sub;
        }else if (c === ')'){
          //console.log('close bracket');
          return inner;
        }else if(c.charCodeAt(0) === 8897 || c.charCodeAt(0) === 8896){
          //console.log('connector');
          inner.c = c;
        }else{
          //it's a variable
          !inner.p ? inner.p = c : inner.q = c;
        }
        if(inner.p && inner.q){
          break;
        }
      }
      return inner;
    }

    finalFormula = splitFormula(f, {
        'p': null,
        'c': null,
        'q': null
    });

        //if(c.charCodeAt(0) === 8897){ console.log('disjunction'); }
        //if(c.charCodeAt(0) === 8896){ console.log('conjunction'); }
        //if(c.match(/([a-zA-Z]+)/)){ console.log('variable'); }
      
    
    console.log(finalFormula);
  },
  disjunction: function(a,b){
    return a || b;
  },
  conjunction: function(a,b){
    return a && b;
  },
  conditional: function(a,b){
    return !(a && !b);
  },
  biconditional: function(a,b){
    return a === b;
  },
  negation: function(a){
    return !a;
  },
  getTruthPermutations: function(num){
      var ttArr = [];
      var bstr = '';
      var ln;
      while(num > bstr.length){
              bstr += '1';
      }
      ln = parseInt(bstr, 2);

      for(var i=ln;i>-1;i--){
          var tAS = [];
          var bS = i.toString(2);
          if(bS.length<num){
              var bSd = num-bS.length;
              while(bSd > 0){
                  bS = '0'+bS;
                  bSd--;
              }
          }
          for(var j=0,lnj=bS.length;j<lnj;j++){
              tAS.push(parseInt(bS[j],10) === 1);
          }
          ttArr.push(tAS);
      }
      return ttArr;
  } 
};
};