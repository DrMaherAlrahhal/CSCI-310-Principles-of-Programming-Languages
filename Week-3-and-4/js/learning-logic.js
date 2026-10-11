/* Shared learning rules, used by both the interface and regression checks. */
(() => {
  function createQuiz(){return {index:0,selected:null,checked:false,first:{},finished:false};}
  function selectAnswer(state,option){if(!Number.isInteger(option)||option<0||option>3)throw Error('Choose A, B, C, or D.');state.selected=option;state.checked=false;}
  function checkAnswer(state,questions){
    if(state.selected===null||state.finished)throw Error('Select an answer first.');
    const correct=state.selected===questions[state.index].answer;
    if(!Object.hasOwn(state.first,state.index))state.first[state.index]=correct;
    state.checked=true;return correct;
  }
  function nextQuestion(state,questions){
    if(!Object.hasOwn(state.first,state.index))throw Error('Check an answer first.');
    if(state.index===questions.length-1)state.finished=true;
    else{state.index++;state.selected=null;state.checked=false;}
  }
  const score=state=>Object.values(state.first).filter(Boolean).length;
  function searchTree(value){
    if(!Number.isFinite(value))throw Error('Enter a number.');
    const tree={50:[30,70],30:[20,40],70:[60,80],20:[],40:[],60:[],80:[]};
    let node=50;const steps=[];
    while(node!==undefined){
      if(node===value){steps.push({node,found:true,message:`Compare with ${node}. Found ${value}.`});return steps;}
      const right=value>node;
      steps.push({node,found:false,message:`Compare with ${node}. ${value} ${right?'>':'<'} ${node} → move ${right?'right':'left'}.`});node=tree[node][right?1:0];
    }
    steps.push({node:null,found:false,message:`No node remains. ${value} is not in this tree.`});return steps;
  }
  function listOperation(op){
    if(op==='CAR')return {values:[20],output:'20',explanation:'car gets the first item.'};
    if(op==='CDR')return {values:[30,40],output:'(30 40)',explanation:'cdr gets the remaining items.'};
    if(op==='CONS')return {values:[10,20,30,40],output:'(10 20 30 40)',explanation:'cons constructs a new list by adding 10 to the front.'};
    throw Error('Unknown list operation.');
  }
  window.Learning={createQuiz,selectAnswer,checkAnswer,nextQuestion,score,searchTree,listOperation};
})();
