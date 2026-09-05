/* Static adaptation of the supplied React Bits DepthCarousel.
   requestAnimationFrame supplies the interpolation in this no-build site. */
(() => {
  'use strict';
  const hobbies = [
    {
      key:'music', id:'musicHobbyModal', name:'音乐', english:'MUSIC / 01', icon:'♫',
      headline:'把喜欢的旋律，<br><em>弹成自己的表达。</em>',
      intro:'擅长吉他、钢琴弹唱，也喜欢从熟悉的歌出发做一点新的尝试。对我来说，音乐既是演奏与歌唱，也是理解一首歌、重新表达一首歌的过程。',
      facts:['吉他 / 钢琴弹唱','级数谱 · 首调思维','歌曲创编'],
      images:[
        ['吉他.jpg','吉他｜用琴弦为歌声铺陈情绪'],
        ['钢琴.jpg','钢琴｜在和声与旋律之间寻找平衡'],
        ['视频号主页.jpg','视频号主页｜我的音乐记录','contain'],
        ['乐器.jpg','乐器｜不同声音，同一种热爱'],
        ['作曲.jpg','创编｜把音乐想法慢慢写下来']
      ],
      stories:[
        ['01 / PLAY & SING','弹奏，也歌唱','吉他与钢琴是我最熟悉的音乐伙伴。我喜欢弹唱中伴奏与人声相互呼应的感觉：让和声托住旋律，让节奏服务于歌词，把注意力放在整首歌的情绪与表达上。'],
        ['02 / HEAR IN DEGREES','用首调理解音乐','比起只记住固定的音名，我更习惯从级数谱出发，以首调思维理解音与音之间的关系。这种方式让我更愿意听清旋律的走向、感受和声的张力，也为移调与弹唱提供思路。'],
        ['03 / MAKE IT PERSONAL','给熟悉的歌一点新意','进行过部分歌曲创编，也持续尝试音乐创作与简单编曲。我喜欢在保留一首歌情感核心的同时，探索旋律、伴奏与乐器组合的不同可能，让熟悉的声音多一点个人表达。']
      ],
      ending:'如果你也喜欢弹唱、首调或歌曲创编，期待一起交流喜欢的音乐。'
    },
    {
      key:'sports', id:'sportsHobbyModal', name:'运动', english:'MOVEMENT / 02', icon:'◎',
      headline:'认真投入每一场，<br><em>也享受每一次配合。</em>',
      intro:'中学阶段曾在足球运动中获得最具价值球员。比起只关注结果，我也珍惜运动中的专注、判断与协作：在一次次跑动和配合中，找到自己与团队的节奏。',
      facts:['中学足球 · 最具价值球员','团队协作','多项球类兴趣'],
      images:[
        ['足球.jpg','足球｜关于投入，也关于团队'],
        ['网球.jpg','网球｜在来回之间保持专注'],
        ['乒乓球.jpg','乒乓球｜小球里的节奏与判断'],
        ['篮球.jpg','篮球｜在跑动与配合中找到默契']
      ],
      stories:[
        ['01 / ON THE PITCH','属于球场的高光','中学阶段的足球最具价值球员，是我运动经历中值得珍藏的一段记忆。它提醒我，个人发挥离不开队友的支持；努力争取机会，也要理解自己在团队中的位置。'],
        ['02 / FIND THE RHYTHM','不同球类，不同乐趣','足球与篮球让我感受到团队配合的魅力；网球与乒乓球则让我享受对节奏、落点和反应的观察。不同运动各有吸引力，也给忙碌的学习生活提供了切换状态的空间。'],
        ['03 / KEEP MOVING','让行动带来好状态','我喜欢运动带来的直接反馈：专注当下，接住变化，再做下一次尝试。认真对待每一次参与，也接受发挥有起伏，把投入、协作与调整的习惯带回日常生活。']
      ],
      ending:'场上认真配合，场下轻松交流。共同的运动兴趣，也是认识朋友的好起点。'
    },
    {
      key:'life', id:'lifeHobbyModal', name:'生活', english:'EVERYDAY / 03', icon:'↗',
      headline:'走出去看看，<br><em>把好奇留在日常。</em>',
      intro:'喜欢旅行，也喜欢观察平常生活中容易被忽略的细节。换一个地方、走一段路，让熟悉的节奏暂时慢下来，也给思考留一点新的空间。',
      facts:['旅行与记录','日常观察','保持好奇'],
      images:[
        ['旅行.jpg','旅行片段 01｜出发，给生活换一个视角'],
        ['旅行1.jpg','旅行片段 02｜把途中值得记住的瞬间留下'],
        ['旅行2.jpg','旅行片段 03｜带着新的感受回到日常']
      ],
      stories:[
        ['01 / GO SOMEWHERE','让风景打开视野','旅行吸引我的地方，是它让人有机会走出熟悉的路线。沿途的风景、街道与生活气息，都可以成为重新观察世界的起点；有时，一段没有急着赶路的时间就很珍贵。'],
        ['02 / NOTICE MORE','为小事停留片刻','我愿意为一处光影、一段声音或一个有趣的细节多停留一会儿。记录不一定需要宏大的主题，能让自己再次想起当时的感受，就已经有意义。'],
        ['03 / STAY CURIOUS','认真生活，也留些余地','学习与实践之外，我希望保留探索新鲜事物的好奇心。给兴趣一点时间，给生活一点留白，让每一次出发带回的新感受，慢慢融入自己的思考与表达。']
      ],
      ending:'期待在共同的兴趣里交换见闻，也在普通的日子里发现新的可能。'
    }
  ];
  const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  hobbies.forEach(data => {
    const modal = document.createElement('div');
    modal.id = data.id;
    modal.className = 'module-modal hobby-modal';
    modal.dataset.hobby = data.key;
    modal.setAttribute('role','dialog');
    modal.setAttribute('aria-modal','true');
    modal.setAttribute('aria-hidden','true');
    modal.setAttribute('aria-labelledby',data.id + '-title');
    const photos = data.images.map((im,i) =>
      '<figure class="depth-carousel__card" data-fit="' + (im[2] || 'cover') + '" aria-label="第 ' + (i+1) + ' 张，共 ' + data.images.length + ' 张" aria-hidden="' + (i!==0) + '">' +
      '<img class="depth-carousel__img" src="' + im[0] + '" alt="' + esc(im[1]) + '" draggable="false" loading="lazy" decoding="async"><span class="depth-carousel__tint"></span></figure>').join('');
    const dots = data.images.map((im,i) => '<button class="depth-carousel__dot" type="button" aria-label="查看' + esc(im[1]) + '" aria-current="' + (i===0) + '"></button>').join('');
    const stories = data.stories.map(s => '<article class="hobby-story border-glow-card hobby-reveal" data-border-glow><span class="edge-light" aria-hidden="true"></span><small>' + s[0] + '</small><h3>' + s[1] + '</h3><p>' + s[2] + '</p></article>').join('');
    modal.innerHTML =
      '<div class="modal-inner"><div class="modal-topbar">' +
      '<div class="modal-heading"><div class="modal-heading-icon" aria-hidden="true">' + data.icon + '</div>' +
      '<div class="modal-heading-text"><small>' + data.english + '</small><strong id="' + data.id + '-title">' + data.name + ' · 我的爱好</strong></div></div>' +
      '<button class="modal-close" type="button" aria-label="关闭' + data.name + '详情">×</button></div>' +
      '<div class="hobby-detail"><header class="hobby-intro hobby-reveal"><div><div class="hobby-eyebrow">INTEREST JOURNAL / ' + data.english + '</div><h2>' + data.headline + '</h2></div><p class="hobby-lead">' + data.intro + '</p></header>' +
      '<div class="hobby-facts hobby-reveal">' + data.facts.map(f => '<span>' + esc(f) + '</span>').join('') + '</div>' +
      '<section class="hobby-gallery hobby-reveal" aria-label="' + data.name + '照片">' +
      '<div class="hobby-gallery-label"><strong>PHOTO JOURNAL</strong><span>左右滑动，翻阅片段</span></div>' +
      '<div class="depth-carousel" role="group" aria-roledescription="照片轮播" aria-label="' + data.name + '照片，使用左右方向键切换" tabindex="0"><div class="depth-carousel__stage">' + photos + '</div></div>' +
      '<div class="hobby-gallery-controls"><button class="depth-carousel__prev" type="button" aria-label="上一张照片">←</button><div class="depth-carousel__dots" role="group" aria-label="选择照片">' + dots + '</div>' +
      '<button class="depth-carousel__next" type="button" aria-label="下一张照片">→</button><button class="depth-carousel__pause" type="button" aria-label="暂停自动播放">暂停</button></div>' +
      '<div class="hobby-photo-caption"><span class="hobby-photo-count"></span><span class="hobby-photo-title"></span></div><span class="hobby-live" role="status" aria-live="polite" style="position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%)"></span></section>' +
      '<div class="hobby-stories">' + stories + '</div><p class="hobby-signoff hobby-reveal">' + data.ending + '</p></div></div>';
    document.body.append(modal);
    setup(modal,data);
  });

  function setup(modal,data) {
    const root = modal.querySelector('.depth-carousel');
    const gallery = modal.querySelector('.hobby-gallery');
    const cards = Array.from(root.querySelectorAll('.depth-carousel__card'));
    const dots = Array.from(modal.querySelectorAll('.depth-carousel__dot'));
    const pause = modal.querySelector('.depth-carousel__pause');
    const inner = modal.querySelector('.modal-inner');
    const count = cards.length;
    let active=0, pos=0, frame=0, timer=0, opened=false, busy=false;
    let drag=null, moved=false, hovering=false, paused=reduced.matches, photoVisible=false;
    const mod = n => ((n%count)+count)%count;
    function layout(p) {
      const width = root.clientWidth;
      if (!width) return;
      const cardWidth=Math.min(290,width*.72), cardHeight=Math.min(370,cardWidth*1.28);
      cards.forEach((card,i) => {
        let d=mod(i-p);
        if(d>count/2) d-=count;
        const back=Math.max(0,d), alpha=d<0?Math.max(0,1+d):1;
        card.style.width=cardWidth+'px';
        card.style.height=cardHeight+'px';
        card.style.transform='translate(-50%, -50%) translateX('+(cardWidth*.30*d)+'px) translateZ('+(-220*d)+'px) rotateY('+(22*Math.min(back,1))+'deg)';
        card.style.opacity=alpha;
        card.style.filter='brightness('+Math.max(.15,1-back*.2)+') blur('+Math.min(6,back*1.5)+'px)';
        card.style.zIndex=Math.round(2000-d*20);
        card.style.pointerEvents=alpha>.05?'auto':'none';
        card.querySelector('.depth-carousel__tint').style.opacity=Math.min(.86,back*.25);
      });
    }
    function caption(announce) {
      dots.forEach((dot,i)=>dot.setAttribute('aria-current',String(i===active)));
      cards.forEach((card,i)=>card.setAttribute('aria-hidden',String(i!==active)));
      modal.querySelector('.hobby-photo-count').textContent=String(active+1).padStart(2,'0')+' / '+String(count).padStart(2,'0');
      modal.querySelector('.hobby-photo-title').textContent=data.images[active][1];
      if(announce) modal.querySelector('.hobby-live').textContent=data.images[active][1]+'，第 '+(active+1)+' 张';
    }
    function go(raw,announce=true) {
      cancelAnimationFrame(frame);
      active=mod(raw);
      let delta=mod(active-pos);
      if(delta>count/2) delta-=count;
      const from=pos, target=pos+delta, start=performance.now();
      caption(announce);
      if(reduced.matches) { pos=active; layout(pos); return; }
      busy=true;
      function tick(now) {
        const t=Math.min(1,(now-start)/700);
        pos=from+(target-from)*(1-Math.pow(1-t,4));
        layout(pos);
        if(t<1) frame=requestAnimationFrame(tick);
        else {pos=active;busy=false;layout(pos);}
      }
      frame=requestAnimationFrame(tick);
    }
    function playLabel() {pause.textContent=paused?'播放':'暂停';pause.setAttribute('aria-label',paused?'开始自动播放':'暂停自动播放');}
    modal.querySelector('.depth-carousel__prev').addEventListener('click',()=>go(active-1));
    modal.querySelector('.depth-carousel__next').addEventListener('click',()=>go(active+1));
    dots.forEach((dot,i)=>dot.addEventListener('click',()=>go(i)));
    cards.forEach((card,i)=>card.addEventListener('click',()=>{if(!moved)go(i);}));
    pause.addEventListener('click',()=>{paused=!paused;playLabel();});
    root.addEventListener('keydown',e=>{
      if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();go(active+(e.key==='ArrowLeft'?-1:1));}
    });
    root.addEventListener('pointerdown',e=>{
      if(e.pointerType==='mouse'&&e.button!==0)return;
      cancelAnimationFrame(frame);busy=false;moved=false;
      drag={x:e.clientX,y:e.clientY,start:pos,id:e.pointerId};
    });
    root.addEventListener('pointermove',e=>{
      if(!drag||e.pointerId!==drag.id)return;
      const dx=e.clientX-drag.x,dy=e.clientY-drag.y;
      if(!moved&&Math.abs(dy)>Math.abs(dx)&&Math.abs(dy)>8){drag=null;return;}
      if(!moved&&Math.abs(dx)>8){moved=true;root.setPointerCapture(e.pointerId);}
      if(!moved)return;
      pos=drag.start-dx/Math.max(root.clientWidth*.4,80);layout(pos);
    });
    const finishDrag=e=>{
      if(!drag)return;
      const id=drag.id;drag=null;
      if(root.hasPointerCapture(id))root.releasePointerCapture(id);
      if(e.type==='pointercancel')go(active,false);
      else if(moved)go(Math.round(pos));
    };
    root.addEventListener('pointerup',finishDrag);
    root.addEventListener('pointercancel',finishDrag);
    gallery.addEventListener('mouseenter',()=>{hovering=true;});
    gallery.addEventListener('mouseleave',()=>{hovering=false;});
    let wheelTotal=0;
    root.addEventListener('wheel',e=>{
      if(Math.abs(e.deltaX)<=Math.abs(e.deltaY))return;
      e.preventDefault();if(busy)return;
      wheelTotal+=e.deltaX;
      if(Math.abs(wheelTotal)>35){go(active+Math.sign(wheelTotal));wheelTotal=0;}
    },{passive:false});
    new ResizeObserver(()=>layout(pos)).observe(root);
    new IntersectionObserver(entries=>{photoVisible=entries[0].isIntersecting;},{root:inner,threshold:.15}).observe(root);
    const reveals=Array.from(modal.querySelectorAll('.hobby-reveal'));
    const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(opened&&entry.isIntersecting){
        entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target);
        if(entry.target.hasAttribute('data-border-glow')&&typeof runBorderGlowSweep==='function')runBorderGlowSweep(entry.target);
      }
    }),{root:inner,threshold:.08});
    new MutationObserver(()=>{
      const next=modal.classList.contains('active');
      if(next===opened)return;
      opened=next;clearInterval(timer);
      if(opened){
        inner.scrollTop=0;layout(pos);
        reveals.forEach(el=>revealObserver.observe(el));
        modal.querySelector('.modal-close').focus({preventScroll:true});
        timer=setInterval(()=>{
          if(!paused&&!reduced.matches&&!document.hidden&&photoVisible&&!hovering&&!gallery.contains(document.activeElement)&&!drag&&!busy)go(active+1,false);
        },3200);
      }else{
        cancelAnimationFrame(frame);busy=false;drag=null;pos=active;
        revealObserver.disconnect();reveals.forEach(el=>el.classList.remove('is-visible'));
        const trigger=document.querySelector('[data-modal="'+modal.id+'"]');
        if(modal.contains(document.activeElement))trigger?.focus({preventScroll:true});
      }
    }).observe(modal,{attributes:true,attributeFilter:['class']});
    modal.addEventListener('keydown',e=>{
      if(e.key!=='Tab'||!opened)return;
      const elements=Array.from(modal.querySelectorAll('button:not([disabled]), [tabindex="0"]'));
      const first=elements[0],last=elements[elements.length-1];
      if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
      else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
    });
    reduced.addEventListener('change',()=>{
      if(reduced.matches){paused=true;cancelAnimationFrame(frame);pos=active;busy=false;layout(pos);}
      playLabel();
    });
    caption(false);playLabel();layout(pos);
  }
})();

