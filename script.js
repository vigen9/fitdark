// كشف العناصر أثناء التمرير
document.querySelectorAll('.fade').forEach(el=>{
  const reveal=()=>{
    const r=el.getBoundingClientRect();
    if(r.top<window.innerHeight-50) el.classList.add('show');
  };
  window.addEventListener('scroll',reveal);
  reveal();
});

// فورم التواصل (تجريبي)
document.getElementById('contactForm').addEventListener('submit',function(e){
  e.preventDefault();
  document.getElementById('formStatus').innerText='✅ تم إرسال رسالتك (تجريبي)';
  this.reset();
});

// زر الرجوع للأعلى
const backToTop=document.getElementById('backToTop');
window.addEventListener('scroll',()=>{
  if(window.scrollY>300){backToTop.style.display='block';}
  else{backToTop.style.display='none';}
});
backToTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

// تبديل الوضع (داكن/فاتح)
const toggleBtn=document.getElementById('toggleMode');
toggleBtn.addEventListener('click',()=>{
  document.body.classList.toggle('light');
  toggleBtn.textContent=document.body.classList.contains('light')?'☀️':'🌙';
});

// تغيير شكل النافبار عند التمرير
const navbar=document.querySelector('.navbar');
window.addEventListener('scroll',()=>{
  if(window.scrollY>50){navbar.classList.add('scrolled')}
  else{navbar.classList.remove('scrolled')}
});
