window.utils = {
  captureMouse: function(element) {
    // 捕获坐标的方法
    var mouse = { x: 0, y: 0 };
    // 绑定mousemove
    element.addEventListener('mousemove', function(event) {
      var x, y;
      // 获取鼠标位置，并作兼容处理
      if (event.pageX || event.pageY) {
        x = event.pageX;
        y = event.pageY;
      } else {
        x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
      }
      // 减去元素偏移的距离
      x -= element.offsetLeft;
      y -= element.offsetTop;
  
      mouse.x = x;
      mouse.y = y;
    }, false);
    // 返回
    return mouse;
  },
  // 触摸事件
  captureTouch: function(element) {
    var touch = {
      x: null,
      y: null,
      isPressed: false,
      event: null
    };
    var body_scrollLeft = document.body.scrollLeft,
      element_scrollLeft = document.documentElement.scrollLeft,
      body_scrollTop = document.body.scrollTop,
      element_scrollTop = document.documentElement.scrollTop,
      offsetLeft = element.offsetLeft,
      offsetTop = element.offsetTop;
    // 绑定touchstart事件
    element.addEventListener('touchstart', function(e) {
      touch.isPressed = true;
      touch.event = e;
    }, false);
    // 绑定touchend事件
    element.addEventListener('touchend', function(e) {
      touch.isPressed = false;
      touch.x = null;
      touch.y = null;
      touch.event = e;
    }, false);
    // 绑定touchmove事件
    element.addEventListener('touchmove', function(e) {
      var x, y, touch_event = e.touches[0];
      if (touch_event.pageX || touch_event.pageY) {
        x = touch_event.pageX;
        y = touch_event.pageY;
      } else {
        x = touch_event.clientX + body_scrollLeft + element_scrollLeft;
        y = touch_event.clientY + body_scrollTop + element_scrollTop;
      }
      x -= offsetLeft;
      y -= offsetTop;

      touch.x = x;
      touch.y = y;
      touch.event = event;
    }, false);
    return touch;
  }
};
