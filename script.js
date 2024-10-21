document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // 如果链接指向当前页面的某个部分，则使用平滑滚动
            const targetId = this.getAttribute('href').split('#')[1];
            if (targetId) {
                e.preventDefault();
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({behavior: 'smooth'});
                }
            }
            // 如果链接指向其他页面，则允许默认的导航行为
        });
    });
});
