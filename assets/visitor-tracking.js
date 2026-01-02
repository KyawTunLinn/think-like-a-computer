var script = document.createElement('script');
script.src = "https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js";
script.async = true;
document.head.appendChild(script);

window.addEventListener('load', function () {
    var footer = document.querySelector('.content main');
    if (footer) {
        var div = document.createElement('div');
        div.style.textAlign = 'center';
        div.style.marginTop = '50px';
        div.style.fontSize = '0.9em';
        div.style.color = '#888';
        div.innerHTML = `
            <span id="busuanzi_container_site_pv">
                Total Views: <span id="busuanzi_value_site_pv"></span>
            </span>
            <span style="margin: 0 10px;">|</span>
            <span id="busuanzi_container_site_uv">
                Visitors: <span id="busuanzi_value_site_uv"></span>
            </span>
        `;
        footer.appendChild(div);
    }
});
