console.log('%c[Copilot Desktop] 验证屏蔽脚本已加载', 'color:green;font-weight:bold');

const selectors = [
  '.captcha',
  '.g-recaptcha',
  '.hcaptcha-box',
  '#challenge-container',
  '.cf-challenge',
  '.turnstile-container',
  '.verify-box',
  '.modal',
  '.popup',
  '.overlay',
  '.human-check',
  '.captcha-container',
  '.captcha-box',
  '.cf-wrapper',
  '.cf-error-details',
  '.cf-captcha-container'
];

const hideElements = () => {
  selectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((el) => {
      el.style.display = 'none';
      console.log(`🔒 屏蔽元素: ${selector}`);
    });
  });
};

const observer = new MutationObserver(hideElements);
observer.observe(document.body, { childList: true, subtree: true });

document.addEventListener('DOMContentLoaded', hideElements);
setTimeout(hideElements, 3000); // 再次尝试隐藏，防止延迟加载
// css filter
document.addEventListener('DOMContentLoaded', () => {
    const targetNode = document.body
    // 配置观察选项
    const config = {
        childList: true,
        subtree: true,
    }
    const observer = new MutationObserver((mutationsList, observer) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                const element0 = document.querySelector('.captcha, .g-recaptcha, .hcaptcha-box, #challenge-container, .cf-challenge, .turnstile-container, .verify-box, .modal, .popup, .overlay, .human-check, .captcha-container, .captcha-box, .cf-wrapper, .cf-error-details, .cf-captcha-container');
                if (element0) {
                    element0.style.display = 'none';
                }
            }
        }
    })
    observer.observe(targetNode, config)
})
// end css filter
