const PROFILE_API = {
  development: '',
  beta: 'http://user.spdb.com',
  production: 'http://user.spdb.com'
};

module.exports = function ({htmlWebpackPlugin}) {
  const {debug, env} = htmlWebpackPlugin.options;
  const {PROFILE = 'development'} = env;

  const api = debug ? `http://' + location.hostname + ':' + location.port + '/api` : PROFILE_API[PROFILE];
  return `
<!DOCTYPE html>
<html lang="zh-cn">
<head>
  <title id="htmlTitle"></title>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  <meta id="eqMobileViewport" name="viewport"
        content="width=320, initial-scale=1, maximum-scale=1, user-scalable=no"/>
  <script type="text/javascript">
    // 媒体查询
    (function (doc, win) {
      let docEl = doc.documentElement,
        docTitle = doc.getElementById('htmlTitle');
      // orientationchange 事件是在用户水平或者垂直翻转设备（即方向发生变化）时触发的事件。
      // onresize 事件会在窗口或框架被调整大小时发生。
      resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
        recalc = function () {
          window.clientWidth = docEl.clientWidth;
          docTitle.innerHTML = "${htmlWebpackPlugin.options.title}";
          if (!window.clientWidth) return;
          // 大于移动端最大尺寸，就使用原始大小
          if (window.clientWidth > 414) return;
          docEl.style.fontSize = 40 * (window.clientWidth / 640) + "px";
          window.base = 40 * (window.clientWidth / 640);
        };
      if (!doc.addEventListener) return;
      win.addEventListener(resizeEvt, recalc, false);
      doc.addEventListener("DOMContentLoaded", recalc, false);
    })(document, window);
    window.config = {
      api: '${api}'
    };
  </script>
</head>
<body>
<noscript>
  您的浏览器需要启用JavaScript才能访问该网页.<br/>
  You need to enable JavaScript to this app.
</noscript>
<div id="application">正在加载...</div>
</body>
</html>
`;
};
