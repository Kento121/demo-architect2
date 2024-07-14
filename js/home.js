(function(d) {
  var config = {
    kitId: 'wix0ywa',
    scriptTimeout: 3000,
    async: true
  },
  h=d.documentElement,
  t=setTimeout(function(){
    h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";
  }, config.scriptTimeout),
  tk=d.createElement("script"),
  f=false,
  s=d.getElementsByTagName("script")[0],
  a;

  h.className+=" wf-loading";
  tk.src='https://use.typekit.net/'+config.kitId+'.js';
  tk.async=true;
  tk.onload=tk.onreadystatechange=function(){
    a=this.readyState;
    if(f || a && a != "complete" && a != "loaded") return;
    f=true;
    clearTimeout(t);
    try {
      Typekit.load(config);
    } catch(e) {}
  };
  s.parentNode.insertBefore(tk, s);
})(document);


// ハンバーガーメニュー
document.addEventListener("DOMContentLoaded", function() {
  const humburger = document.querySelector('.humburger');
  const humburgerMenu = document.querySelector('.humburger_menu');
  const menuLinks = document.querySelectorAll('.humburger_menu-list a');

  humburger.addEventListener('click', function() {
    humburger.classList.toggle('active');
    humburgerMenu.classList.toggle('active');
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', function() {
      humburger.classList.remove('active');
      humburgerMenu.classList.remove('active');
    });
  });
});
