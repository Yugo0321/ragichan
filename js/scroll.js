$(function(){
  // #で始まるリンクをクリックした場合
  $('a[href^="#"]').click(function() {
    // スクロールの速度
    let speed = 400;
    // スクロールタイプ
    let type = 'swing';
    // href属性の取得
    let href= $(this).attr("href");
    // 移動先の取得（hrefが#indexならトップ$(html)に、）
    let target = $(href == "#index" ? 'html' : href);
    // 移動先のポジション取得
    let position = target.offset().top;
    // animateでスムーススクロール
    $('body,html').animate({scrollTop:position}, speed, type);
    return false;
  });
});

// トップボタン
const pageTopBtn = document.querySelector('.page-top');
const footer = document.querySelector('#footer');


pageTopBtn.addEventListener('click', function () {

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

});


// accessが見えたら表示
const footerObserver = new IntersectionObserver(function (entries) {

  entries.forEach(function (entry) {

    if (entry.isIntersecting) {
      pageTopBtn.classList.add('show')
    }
    else {
      pageTopBtn.classList.remove('show');
    };
  });
}, {
  rootMargin: "0px 0px -200px 0px"
});

footerObserver.observe(footer);
