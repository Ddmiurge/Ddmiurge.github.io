<!--浏览器搞笑标题-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/img/favicon.png");
         document.title = '这么下头，这就跑啦';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/img/favicon.png");
         document.title = '呃呃呃呃' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });
