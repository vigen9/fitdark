// تبديل اللغة بين عربي وإنجليزي
document.getElementById('langToggle').addEventListener('click',function(){
  const body = document.body;
  if(body.getAttribute('dir') === 'rtl'){
    body.setAttribute('dir','ltr');
    body.lang = 'en';
    this.textContent = 'العربية';
    document.querySelector('.hero h1').textContent = 'Start your journey with FitDark';
    document.querySelector('.hero p').textContent = 'Personal training & nutrition program';
  }else{
    body.setAttribute('dir','rtl');
    body.lang = 'ar';
    this.textContent = 'English';
    document.querySelector('.hero h1').innerHTML = 'ابدأ رحلتك مع <span class="highlight">FitDark</span>';
    document.querySelector('.hero p').textContent = 'برنامج تدريبي + برنامج تغذية مخصص لك';
  }
});
