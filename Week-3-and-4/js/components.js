/* Reusable, dependency-free presentation components. */
(() => {
  const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const highlighted = text => {
    const tokens = /("[^"\n]*"|\b(?:define|lambda|let|def|if|else|return|print|car|cdr|cons)\b|\b\d+\b)/g;
    return text.split(tokens).map((part,i) => i % 2 ? `<span class="${/^"/.test(part) ? 'token-string' : /^\d/.test(part) ? 'token-number' : 'token-keyword'}">${escape(part)}</span>` : escape(part)).join('');
  };
  const CodeExample = (code, language = 'Scheme', output) => `<div class="code-block"><div class="code-toolbar"><span>${escape(language)}</span><button class="copy-code" type="button" aria-label="Copy ${escape(language)} code">Copy Code</button></div><pre><code>${highlighted(code)}</code></pre></div>${output !== undefined ? `<div class="output"><span>OUTPUT</span><code>${escape(output)}</code></div>` : ''}`;
  const Progress = (value, max, label='Topics completed') => `<div class="progress-caption"><span>${escape(label)}</span><strong>${value} / ${max}</strong></div><progress value="${value}" max="${max}" aria-label="${escape(label)}">${value} of ${max}</progress>`;
  const Header = (week) => `<header class="site-header"><a href="#/" class="brand" aria-label="CSCI 310 home"><span class="brand-mark" aria-hidden="true">λ</span><span><strong>CSCI 310</strong><span>Principles of Programming Languages</span></span></a><nav class="week-nav" aria-label="Week navigation"><a href="#/" ${!week?'aria-current="page"':''}>Overview</a><a href="#/week/3/0" ${week===3?'aria-current="page"':''}>Week 3</a><a href="#/week/4/0" ${week===4?'aria-current="page"':''}>Week 4</a></nav><div class="instructor"><span>YOUR INSTRUCTOR</span><strong>Dr. Maher Alrahhal</strong></div></header>`;
  const TopicNavigation = (week,index,completed) => `<aside class="sidebar"><div class="sidebar-heading"><span class="eyebrow">LEARNING PATH</span><strong>Week ${week}</strong></div><nav aria-label="Topic navigation">${COURSE[week].topics.map((topic,i) => `<a href="#/week/${week}/${i}" class="topic-link ${i===index?'active':''}" ${i===index?'aria-current="page"':''}><span class="topic-number ${completed.includes(`${week}-${i}`)?'done':''}">${completed.includes(`${week}-${i}`)?'✓':String(i+1).padStart(2,'0')}</span><span>${escape(topic.title)}</span>${completed.includes(`${week}-${i}`)?'<span class="sr-only">Completed</span>':''}</a>`).join('')}</nav><div class="sidebar-progress">${Progress(COURSE[week].topics.filter((_,i)=>completed.includes(`${week}-${i}`)).length,COURSE[week].topics.length)}<p>Progress is saved in this browser.</p></div></aside>`;
  const Question = (id, prompt, options, answer, explanation, heading='Check Your Understanding') => `<section class="understanding" data-question="${id}" data-answer="${answer}"><span class="eyebrow">${escape(heading)}</span><h3>${escape(prompt)}</h3><div class="choice-row">${options.map((o,i)=>`<button type="button" class="choice" data-choice="${i}" aria-pressed="false">${escape(o)}</button>`).join('')}</div><p class="feedback" role="status" data-explanation="${escape(explanation)}"></p></section>`;
  const Tree = (full=false) => `<div class="tree-diagram"><svg viewBox="0 0 600 ${full?'255':'185'}" role="img" aria-label="${full?'Binary search tree. Root 50; children 30 and 70; leaves 20, 40, 60 and 80.':'Binary tree. Root 50, left child 30, right child 70.'}"><g class="tree-lines"><path d="M300 45 L160 120 M300 45 L440 120"/>${full?'<path d="M160 120 L90 210 M160 120 L230 210 M440 120 L370 210 M440 120 L510 210"/>':''}</g>${[[50,300,40],[30,160,120],[70,440,120],...(full?[[20,90,210],[40,230,210],[60,370,210],[80,510,210]]:[])].map(([n,x,y])=>`<g class="tree-node" data-node="${n}"><circle cx="${x}" cy="${y}" r="25"/><text x="${x}" y="${y+6}" text-anchor="middle">${n}</text></g>`).join('')}${full?'':'<g class="tree-label"><text x="345" y="45">Root</text><text x="160" y="173" text-anchor="middle">Left child</text><text x="440" y="173" text-anchor="middle">Right child</text></g>'}</svg></div>`;
  function LessonContent(slide,week) {
    const p=slide.paragraphs;
    let html=`<section class="lesson-section" data-slide="${slide.number}"><h2>${escape(slide.subtitle)}</h2>`;
    for(let i=0;i<p.length;i++) {
      const t=p[i];
      if(t==='50' && p[i+1]?.includes('/')) {
        while(i+1<p.length && /^[\d\s/\\]+$/.test(p[i+1])) i++;
        html+=Tree(slide.title==='Binary Search Tree Abstraction'); continue;
      }
      if(t==='Global area') {
        while(i+1<p.length && /^(x =|outer\(\)|inner\(\)|print\(x\))/.test(p[i+1])) i++;
        html+='<div class="scope-map"><div><span>GLOBAL SCOPE</span><code>x = 100</code><div><span>outer()</span><code>x = 20</code><div><span>inner()</span><code>print(x)</code></div></div></div></div>'; continue;
      }
      if(/^(\(|'\(|x =|def |if mark|mark =|5 \+ 3)/.test(t)) {
        let code=t;
        if(code.startsWith('(')) {
          let balance=(code.match(/\(/g)||[]).length-(code.match(/\)/g)||[]).length;
          while(balance>0 && i+1<p.length) { const line=p[++i]; code+='\n  '+line; balance+=(line.match(/\(/g)||[]).length-(line.match(/\)/g)||[]).length; }
        }
        html+=CodeExample(code,/^(x =|def |if mark|mark =)/.test(code)?'Python':code==='5 + 3'?'Infix notation':'Scheme'); continue;
      }
      if(/^Answer:/.test(t)) { html+=`<details class="answer-reveal"><summary>Reveal answer</summary><p>${escape(t.slice(7))}</p></details>`; continue; }
      if(/^(Result:|Output:|returns:|produces \d+\.|\d+)$/.test(t)) {
        const label=/^(Result:|Output:|returns:)$/.test(t);
        const value=label && p[i+1] ? p[++i] : t;
        html+=`<div class="output"><span>OUTPUT</span><code>${escape(value)}</code></div>`; continue;
      }
      if(/^\(\d/.test(t)) {html+=`<div class="output"><span>OUTPUT</span><code>${escape(t)}</code></div>`;continue;}
      if(/^(Main idea:|The important idea is:|This shows an important functional idea:|The simple idea is:)/.test(t)) {
        const value=t.endsWith(':') && p[i+1] ? p[++i] : t.replace(/^Main idea: /,'');
        html+=`<div class="key-idea"><span class="eyebrow">IMPORTANT IDEA</span><p>${escape(value)}</p></div>`; continue;
      }
      if((week===4 && slide.number===12) && t==='Ask four questions.') {
        html+='<p>Ask four questions.</p><div class="practice-questions">';
        for(let j=0;j<4;j++) {let q=p[++i],a=p[++i];html+=`<details class="answer-reveal"><summary>${escape(q)}</summary><p>${escape(a)}</p></details>`;}
        html+='</div>';continue;
      }
      html+=`<p${t.includes('→')?' class="flow-text"':''}>${escape(t)}</p>`;
    }
    return html+'</section>';
  }
  window.UI = {escape,CodeExample,Progress,Header,TopicNavigation,Question,Tree,LessonContent};
})();
