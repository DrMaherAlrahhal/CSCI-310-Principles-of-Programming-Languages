(() => {
  'use strict';
  const {escape:E,CodeExample,Progress,Header,TopicNavigation,Question,Tree,LessonContent} = UI;
  const app=document.querySelector('#app');
  const storageKey='csci310-progress-v1';
  let completed=[];
  try {const saved=JSON.parse(localStorage.getItem(storageKey)||'[]');if(Array.isArray(saved))completed=saved.filter(x=>/^[34]-\d+$/.test(x));}catch{}
  const quizzes={};
  let current={week:null,index:0};
  let musicTimer=null;
  function save(){try{localStorage.setItem(storageKey,JSON.stringify(completed));}catch{}}
  function markComplete(week,index){const key=`${week}-${index}`;if(!completed.includes(key)){completed.push(key);save();}}
  function home(){
    document.title='CSCI 310 | Principles of Programming Languages';
    return `${Header()}<main id="main" class="home"><section class="hero"><div><span class="eyebrow">CSCI 310 · WEEKS 03 & 04</span><h1>Principles of<br>Programming <span>Languages</span></h1><p>Explore how programs are written, how functions transform data, and how languages give meaning to names.</p><div class="hero-instructor"><span class="avatar" aria-hidden="true">MA</span><span>Instructor: <strong>Dr. Maher Alrahhal</strong></span></div></div><div class="concept-board" aria-label="A Scheme function transforms input 5 into output 25"><div class="board-head"><span>THINK IN FUNCTIONS</span><span>SCHEME</span></div><pre>(<em>define</em> (square x)\n  (* x x))</pre><div class="board-flow"><div><small>INPUT</small><strong>5</strong></div><span aria-hidden="true">→</span><div><small>FUNCTION</small>square</div><span aria-hidden="true">→</span><div><small>OUTPUT</small><strong>25</strong></div></div></div></section><div class="section-heading"><div><span class="eyebrow">YOUR LEARNING PATH</span><h2>Choose your week</h2></div><span>Learn. Explore. Check your understanding.</span></div><section class="week-cards" aria-label="Course weeks">${[3,4].map(w=>{
      const count=COURSE[w].topics.filter((_,i)=>completed.includes(`${w}-${i}`)).length;
      return `<a class="week-card" href="#/week/${w}/0"><div class="card-top"><span class="week-badge">WEEK ${w}</span><span class="card-symbol" aria-hidden="true">${w===3?'(λ)':'{ x }'}</span></div><h3>${E(COURSE[w].title)}</h3><p class="description">${w===3?'Think in functions. Work with Scheme expressions, lists, trees, and local bindings.':'Connect code structure with meaning. Explore concurrency, syntax, scope, and binding.'}</p><div class="card-meta"><span>${COURSE[w].topics.length} topics</span><span>5 quiz questions</span><span>CLO ${w===3?1:2}</span></div>${Progress(count,COURSE[w].topics.length)}<div class="card-bottom"><span>${count?'Continue learning':'Start learning'}</span><span>Explore Week ${w}</span></div></a>`;
    }).join('')}</section><footer class="home-footer"><span>CSCI 310 · Dr. Maher Alrahhal</span><span>Interactive lessons · Progress saved on this device</span></footer></main>`;
  }
  function lab(week,index){
    const id=`${week}-${index}`;
    if(id==='3-2') return `<section class="lab"><span class="eyebrow">EXPRESSION EXPLORER</span><h3>Evaluate from the inside out</h3><div class="step-flow" id="expression-steps"><span>(+ 10 (* 2 5))</span></div><button type="button" id="evaluate-step">Evaluate inner expression</button><p class="feedback" id="expression-feedback" role="status"></p></section><section class="lab"><span class="eyebrow">INPUT · FUNCTION · OUTPUT</span><h3>Try the square function</h3><div class="choice-row"><button type="button" data-square="5">(square 5)</button><button type="button" data-square="10">(square 10)</button></div><p class="feedback" id="square-output" role="status"></p></section>`;
    if(id==='3-4') return `<section class="lab"><span class="eyebrow">LIST EXPLORER</span><h3>One list. Three operations.</h3><p>Each operation starts with <code>'(20 30 40)</code>. CONS adds 10 to the front.</p><div class="list-values" id="list-values"><span>20</span><span>30</span><span>40</span></div><div class="choice-row">${['CAR','CDR','CONS'].map(x=>`<button type="button" data-list="${x}" aria-pressed="false">${x}</button>`).join('')}</div><div id="list-result" aria-live="polite"></div></section>`;
    if(id==='3-6') return `<section class="lab" id="search-lab"><span class="eyebrow">SEARCH THE TREE</span><h3>Follow the comparisons</h3>${Tree(true)}<form id="search-form"><label for="search-value">Search for a value</label><div class="search-row"><input id="search-value" type="number" step="1" value="60" required aria-describedby="search-help"><button class="primary" type="submit">Start Search</button><button type="button" id="search-next" disabled>Next comparison</button></div><p id="search-help">Try 60, or a value that is not in the tree.</p></form><ol id="search-log" class="search-log" aria-live="polite"></ol></section>`;
    if(id==='4-2') return `<section class="lab"><span class="eyebrow">CONCURRENCY IN ACTION</span><h3>Two activities, overlapping progress</h3><p>Start the music progress simulation, then respond to a user action while it continues.</p><div class="concurrency-tracks"><label>Play music <progress id="music-progress" max="100" value="0"></progress></label><label>Respond to user actions <span id="action-count">0 actions handled</span></label></div><div class="choice-row"><button type="button" id="music-toggle">Start simulation</button><button type="button" id="user-action">Press app button</button></div><p class="feedback" id="concurrency-feedback" role="status"></p></section>`;
    if(id==='4-3') return Question('scope','Which x will be printed?',['100','10'],1,'The local x = 10 is defined inside calculate(), so print(x) uses that binding.','SCOPE EXPLORER')+`<div class="scope-map" id="local-map"><div><span>GLOBAL SCOPE</span><code>x = 100</code><div id="calculate-scope"><span>calculate()</span><code>x = 10<br>print(x)</code></div></div></div>`;
    if(id==='4-4'||id==='4-5') return `<section class="lab"><span class="eyebrow">LEXICAL SCOPE EXPLORER</span><h3>Which x does inner() use?</h3><div class="scope-map"><div><span>GLOBAL SCOPE</span><code>x = 100</code><div id="outer-scope"><span>outer()</span><code>x = 20</code><div><span>inner()</span><code>print(x)</code></div></div></div></div><div class="choice-row"><button type="button" data-scope="100">x = 100</button><button type="button" data-scope="20">x = 20</button></div><p id="scope-feedback" class="feedback" role="status"></p></section>`;
    if(id==='4-6') return `<section class="lab"><span class="eyebrow">VARIABLE EXPLORER</span><h3>Click a variable to find its binding</h3><div class="variable-code">(lambda (<button type="button" data-variable="x" aria-label="Explain bound variable x">x</button>)<br>  (+ <button type="button" data-variable="x" aria-label="Explain use of x">x</button> <button type="button" data-variable="y" aria-label="Explain free variable y">y</button>))</div><p id="variable-feedback" class="feedback" role="status"></p></section>`;
    if(id==='4-7') return `<section class="lab"><span class="eyebrow">SPOT THE SYNTAX ERROR</span><h3>What is wrong?</h3>${CodeExample('if mark >= 60\n    print("Pass")','Python')}<details class="answer-reveal syntax-reveal"><summary>Reveal the correction</summary><p>The colon <code>:</code> is missing.</p>${CodeExample('if mark >= 60:\n    print("Pass")','Python')}</details></section>`;
    if(id==='4-8') return Question('semantics-run','Does this code run?',['Yes','No'],0,'Yes. The syntax is valid. With mark = 75, the program prints Fail.','SYNTAX CHECK')+Question('semantics-rule','Does it express the intended rule correctly?',['Yes','No'],1,'No, if 60 or higher should mean Pass. It runs but expresses the wrong intended behavior.','MEANING CHECK');
    return '';
  }
  function quiz(week){
    const state=quizzes[week] ||= Learning.createQuiz();
    const questions=COURSE[week].quiz;
    if(state.finished){const score=Object.values(state.first).filter(Boolean).length;return `<section class="quiz-results"><span class="eyebrow">WEEK ${week} QUIZ COMPLETE</span><div class="score-ring" aria-label="Score ${score} out of ${questions.length}">${score}<span class="sr-only"> out of </span><small>/ ${questions.length}</small></div><h2>${score===questions.length?'Excellent work.':'Keep building your understanding.'}</h2><p>Final score: <strong>${score} / ${questions.length}</strong> (${Math.round(score/questions.length*100)}%)</p><p>Your score records the first checked answer to each question.<br>Retries help you learn without changing that score.</p><button type="button" class="primary" id="quiz-restart">Restart Quiz</button></section>`;}
    const q=questions[state.index];
    return `<section class="quiz" aria-label="Week ${week} quiz"><p>Choose A, B, C, or D, then check your answer. Your first checked answer counts toward your score; you can retry before continuing.</p><div class="quiz-meta"><span>Question ${state.index+1} of ${questions.length}</span><span>First-attempt score: ${Object.values(state.first).filter(Boolean).length} / ${questions.length}</span></div><progress aria-label="Quiz progress" value="${state.index}" max="${questions.length}"></progress><h2 class="quiz-question" id="quiz-prompt" tabindex="-1">${E(q.question)}</h2><div class="quiz-options" role="group" aria-labelledby="quiz-prompt">${q.options.map((o,i)=>`<button type="button" class="quiz-option" data-option="${i}" aria-pressed="${state.selected===i}"><span class="letter">${'ABCD'[i]}</span><span>${E(o)}</span></button>`).join('')}</div><p id="quiz-feedback" class="feedback" tabindex="-1" role="status">${state.checked?(state.selected===q.answer?'Correct. Well done!':'Try Again. Select another answer, or continue to the next question.'):''}</p><div class="quiz-actions"><button type="button" class="primary" id="quiz-check" ${state.selected===null?'disabled':''}>Check Answer</button><button type="button" id="quiz-next" ${Object.hasOwn(state.first,state.index)?'':'disabled'}>${state.index===questions.length-1?'Finish Quiz':'Next Question'}</button></div></section>`;
  }
  function lesson(week,index){
    const data=COURSE[week],topic=data.topics[index],isQuiz=index===data.topics.length-1;
    document.title=`${topic.title} · Week ${week} | CSCI 310`;
    const slides=topic.slides.map(n=>data.slides.find(s=>s.number===n));
    // Lead the introduction with the comparison explicitly requested by the instructor.
    if(week===3 && index===0) slides.reverse();
    let body=isQuiz?quiz(week):slides.map(s=>LessonContent(s,week)).join('')+lab(week,index);
    if(topic.check)body+=Question('check',...topic.check);
    const done=completed.includes(`${week}-${index}`);
    return `${Header(week)}<section class="course-strip"><span class="week-tag">WEEK ${week}</span><p>Week ${week} – ${E(data.title)}<span class="strip-instructor">Dr. Maher Alrahhal</span></p></section><div class="learning-layout">${TopicNavigation(week,index,completed)}<main id="main" class="lesson-main"><div class="mobile-topics"><label for="topic-select">WEEK ${week} TOPICS</label><select id="topic-select">${data.topics.map((t,i)=>`<option value="${i}" ${i===index?'selected':''}>${i+1}. ${E(t.title)}${completed.includes(`${week}-${i}`)?' ✓':''}</option>`).join('')}</select>${Progress(data.topics.filter((_,i)=>completed.includes(`${week}-${i}`)).length,data.topics.length)}</div><div class="breadcrumb"><a href="#/">Course overview</a><span>/</span><span>Week ${week}</span><span>/</span><span>${isQuiz?'Quiz':index===data.topics.length-2?'Practice':'Lesson '+String(index+1).padStart(2,'0')}</span></div><span class="eyebrow">${isQuiz?'TEST YOUR UNDERSTANDING':'LEARN & EXPLORE'} · TOPIC ${index+1} OF ${data.topics.length}</span><h1 class="lesson-title" tabindex="-1">${E(topic.title)}</h1><div class="clo"><strong>CLO ${week===3?1:2}</strong><p>${E(data.clo.replace(/^CLO \d: /,''))}</p></div><div class="lesson-body">${body}<footer class="topic-footer">${index>0?`<a href="#/week/${week}/${index-1}">Previous Topic</a>`:'<span class="disabled">Previous Topic</span>'}${!isQuiz?`<button type="button" class="primary" id="complete-topic" ${done?'disabled':''}>${done?'✓ Topic completed':'Mark as complete'}</button>`:''}${index<data.topics.length-1?`<a href="#/week/${week}/${index+1}">Next Topic</a>`:week===3?'<a href="#/week/4/0">Continue to Week 4</a>':'<a href="#/">Course overview</a>'}</footer></div></main></div>`;
  }
  function render(focus=false){
    clearInterval(musicTimer);musicTimer=null;
    const m=location.hash.match(/^#\/week\/([34])\/(\d+)$/);
    if(m && COURSE[m[1]].topics[Number(m[2])])current={week:Number(m[1]),index:Number(m[2])};
    else current={week:null,index:0};
    app.innerHTML=current.week?lesson(current.week,current.index):home();
    bind();
    if(focus){window.scrollTo(0,0);document.querySelector('.lesson-title')?.focus({preventScroll:true});}
  }
  function refreshQuiz(){
    const body=document.querySelector('.lesson-body');
    const footer=body.querySelector('.topic-footer');
    body.innerHTML=quiz(current.week);body.append(footer);bindQuiz();
    if(quizzes[current.week].finished){
      const sidebar=document.querySelector('.sidebar');
      sidebar.outerHTML=TopicNavigation(current.week,current.index,completed);
      const select=document.querySelector('#topic-select');
      select.options[current.index].textContent=`${current.index+1}. Quiz ✓`;
      const mobile=document.querySelector('.mobile-topics');
      mobile.querySelector('.progress-caption').nextElementSibling.remove();
      mobile.querySelector('.progress-caption').remove();
      mobile.insertAdjacentHTML('beforeend',Progress(COURSE[current.week].topics.filter((_,i)=>completed.includes(`${current.week}-${i}`)).length,COURSE[current.week].topics.length));
    }
  }
  function bindQuiz(){
    const state=quizzes[current.week];if(!state)return;
    document.querySelectorAll('[data-option]').forEach(b=>b.onclick=()=>{
      Learning.selectAnswer(state,Number(b.dataset.option));
      document.querySelectorAll('[data-option]').forEach(o=>o.setAttribute('aria-pressed',String(o===b)));
      document.querySelector('#quiz-check').disabled=false;document.querySelector('#quiz-feedback').textContent='';
    });
    document.querySelector('#quiz-check')?.addEventListener('click',()=>{
      if(state.selected===null)return;
      const correct=Learning.checkAnswer(state,COURSE[current.week].quiz);
      refreshQuiz();
      const feedback=document.querySelector('#quiz-feedback');feedback.classList.add(correct?'correct':'incorrect');feedback.focus({preventScroll:true});
    });
    document.querySelector('#quiz-next')?.addEventListener('click',()=>{
      if(!Object.hasOwn(state.first,state.index))return;
      Learning.nextQuestion(state,COURSE[current.week].quiz);
      if(state.finished)markComplete(current.week,current.index);
      refreshQuiz();
    });
    document.querySelector('#quiz-restart')?.addEventListener('click',()=>{delete quizzes[current.week];refreshQuiz();});
  }
  function bind(){
    document.querySelector('#topic-select')?.addEventListener('change',e=>location.hash=`/week/${current.week}/${e.target.value}`);
    document.querySelector('#complete-topic')?.addEventListener('click',()=>{markComplete(current.week,current.index);const y=scrollY;render();window.scrollTo(0,y);});
    document.querySelectorAll('.copy-code').forEach(b=>b.onclick=async()=>{
      const code=b.closest('.code-block').querySelector('code').textContent;
      try{
        if(navigator.clipboard && window.isSecureContext)await navigator.clipboard.writeText(code);
        else{const area=document.createElement('textarea');area.value=code;area.style.position='fixed';area.style.opacity='0';document.body.append(area);area.select();const ok=document.execCommand('copy');area.remove();if(!ok)throw Error('Copy unavailable');}
        b.textContent='Copied!';
      }catch{b.textContent='Select code to copy';const r=document.createRange();r.selectNodeContents(b.closest('.code-block').querySelector('code'));getSelection().removeAllRanges();getSelection().addRange(r);}
    });
    document.querySelectorAll('[data-question]').forEach(section=>section.querySelectorAll('[data-choice]').forEach(b=>b.onclick=()=>{
      const correct=Number(b.dataset.choice)===Number(section.dataset.answer);
      section.querySelectorAll('[data-choice]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));
      const f=section.querySelector('.feedback');f.textContent=correct?'Correct. '+f.dataset.explanation:'Try Again. Think about the example above.';f.className='feedback '+(correct?'correct':'incorrect');
      if(section.dataset.question==='scope')document.querySelector('#calculate-scope')?.classList.toggle('resolved',correct);
    }));
    let step=0;
    document.querySelector('#evaluate-step')?.addEventListener('click',e=>{
      step++;
      if(step===1){document.querySelector('#expression-steps').insertAdjacentHTML('beforeend','<span>(* 2 5) = 10</span>');e.target.textContent='Evaluate outer expression';document.querySelector('#expression-feedback').textContent='The inner multiplication produces 10.';}
      else if(step===2){document.querySelector('#expression-steps').insertAdjacentHTML('beforeend','<span>(+ 10 10) = 20</span>');e.target.textContent='Reset example';document.querySelector('#expression-feedback').textContent='Output: 20. The output of one function becomes the input of another.';}
      else{step=0;document.querySelector('#expression-steps').innerHTML='<span>(+ 10 (* 2 5))</span>';e.target.textContent='Evaluate inner expression';document.querySelector('#expression-feedback').textContent='';}
    });
    document.querySelectorAll('[data-square]').forEach(b=>b.onclick=()=>{const x=Number(b.dataset.square);document.querySelector('#square-output').textContent=`${x} → square → ${x*x}`;});
    document.querySelectorAll('[data-list]').forEach(b=>b.onclick=()=>{
      const op=b.dataset.list;const result=Learning.listOperation(op);const values=result.values;
      document.querySelectorAll('[data-list]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));
      document.querySelector('#list-values').innerHTML=values.map((n,i)=>`<span class="${op==='CAR'||(op==='CONS'&&i===0)?'selected':''}">${n}</span>`).join('');
      document.querySelector('#list-result').innerHTML=`<div class="output"><span>OUTPUT</span><code>${result.output}</code></div><p>${result.explanation}</p>`;
    });
    bindSearch();
    document.querySelectorAll('[data-scope]').forEach(b=>b.onclick=()=>{
      const correct=b.dataset.scope==='20';const f=document.querySelector('#scope-feedback');
      f.textContent=correct?'Correct. inner() → surrounding outer() → x = 20. Output: 20.':'Try Again. inner() is written inside outer(); inspect that surrounding scope.';f.className='feedback '+(correct?'correct':'incorrect');document.querySelector('#outer-scope').classList.toggle('resolved',correct);
    });
    document.querySelectorAll('[data-variable]').forEach(b=>b.onclick=()=>document.querySelector('#variable-feedback').textContent=b.dataset.variable==='x'?'x is bound because it is introduced as a parameter of this lambda expression.':'y is free in this expression because this lambda does not introduce y. Its binding must come from outside.');
    let music=0,actions=0;
    document.querySelector('#music-toggle')?.addEventListener('click',e=>{
      if(musicTimer){clearInterval(musicTimer);musicTimer=null;e.target.textContent='Resume simulation';return;}
      e.target.textContent='Pause simulation';musicTimer=setInterval(()=>{music=(music+1)%101;document.querySelector('#music-progress').value=music;},160);
    });
    document.querySelector('#user-action')?.addEventListener('click',()=>{document.querySelector('#action-count').textContent=`${++actions} actions handled`;document.querySelector('#concurrency-feedback').textContent=musicTimer?'The app handled your action while music continued to make progress.':'Action handled. Start the simulation to see overlapping progress.';});
    bindQuiz();
  }
  function bindSearch(){
    const form=document.querySelector('#search-form');if(!form)return;
    let steps=[],position=0;
    function next(){
      const log=document.querySelector('#search-log');
      const step=steps[position++];if(!step)return;
      if(step.node!==null){const circle=document.querySelector(`#search-lab [data-node="${step.node}"]`);circle.classList.add('visited');if(step.found)circle.classList.add('found');}
      log.insertAdjacentHTML('beforeend',`<li>${E(step.message)}</li>`);
      document.querySelector('#search-next').disabled=position===steps.length;
    }
    form.onsubmit=e=>{e.preventDefault();const value=Number(document.querySelector('#search-value').value);if(!Number.isFinite(value))return;steps=Learning.searchTree(value);position=0;document.querySelectorAll('#search-lab .tree-node').forEach(x=>x.classList.remove('visited','found'));document.querySelector('#search-log').innerHTML='';document.querySelector('#search-next').disabled=false;next();};
    document.querySelector('#search-next').onclick=next;
  }
  window.addEventListener('hashchange',()=>render(true));
  render();
})();
