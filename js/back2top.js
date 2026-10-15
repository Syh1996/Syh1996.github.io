KEEP.initBack2Top = () => {

  KEEP.utils = {

    ...KEEP.utils,

    back2BottomButton_dom: document.querySelector('.tool-scroll-to-bottom'),

    back2top() {
      // 设置全局标记，通知其他组件（如无限滚动）暂停
      window.__isScrollingByButton = true;
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // 监听滚动结束后清除标记
      var checkTimer = null;
      var lastScrollTop = -1;
      function checkScrollEnd() {
        var currentTop = document.body.scrollTop || document.documentElement.scrollTop;
        if (currentTop === lastScrollTop) {
          // 滚动已停止
          clearInterval(checkTimer);
          window.__isScrollingByButton = false;
        }
        lastScrollTop = currentTop;
      }
      checkTimer = setInterval(checkScrollEnd, 100);
    },

    back2Bottom() {
      // 设置全局标记，通知其他组件（如无限滚动）暂停
      window.__isScrollingByButton = true;
      let scrollHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
      window.scrollTo({ top: scrollHeight, behavior: 'smooth' });

      // 监听滚动结束后清除标记
      var checkTimer = null;
      var lastScrollTop = -1;
      function checkScrollEnd() {
        var currentTop = document.body.scrollTop || document.documentElement.scrollTop;
        if (currentTop === lastScrollTop) {
          clearInterval(checkTimer);
          window.__isScrollingByButton = false;
        }
        lastScrollTop = currentTop;
      }
      checkTimer = setInterval(checkScrollEnd, 100);
    },

    initBack2Top() {
      this.back2TopButton_dom.addEventListener('click', () => {
        this.back2top();
      });
    },

    initBack2Bottom() {
      this.back2BottomButton_dom.addEventListener('click', () => {
        this.back2Bottom();
      });
    },
  }

  KEEP.utils.initBack2Top();
  KEEP.utils.initBack2Bottom();

}
