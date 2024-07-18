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


// worksスライド

document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector("#gallery");
  const scrollAmount = 1; 
  const scrollInterval = 45; 
  let isTouching = false; 

  // クローンを作成して無限ループ
  const clone = gallery.innerHTML;
  gallery.innerHTML += clone;

  // ギャラリーを自動でスクロールさせる
  function autoScroll() {
    if (!isTouching) { // スワイプ中でない場合にのみ自動スクロール
      gallery.scrollLeft += scrollAmount;

      // ギャラリーの端に達したらスクロールを最初の位置に戻す
      if (gallery.scrollLeft >= gallery.scrollWidth / 2) {
        gallery.scrollLeft = 0;
      }
    }
  }

  // タッチイベントを検知
  gallery.addEventListener('touchstart', () => {
    isTouching = true;
  });

  gallery.addEventListener('touchend', () => {
    isTouching = false;

    // スクロール位置をリセット
    if (gallery.scrollLeft >= gallery.scrollWidth / 2) {
      gallery.scrollLeft = gallery.scrollLeft % (gallery.scrollWidth / 2);
    }
  });

  // 一定の間隔でautoScroll関数を呼び出す
  setInterval(autoScroll, scrollInterval);
});