(function () {
    var phone = document.getElementById('phone');
    var icon = document.getElementById('springboard-icon');
    var iconArt = document.getElementById('springboard-icon-art');

    function updateClocks() {
        var els = document.querySelectorAll('.app-statusbar__time');
        var now = new Date();
        var hh = String(now.getHours()).padStart(2, '0');
        var mm = String(now.getMinutes()).padStart(2, '0');
        var label = hh + ':' + mm;
        els.forEach(function (el) {
            el.textContent = label;
        });
    }

    updateClocks();
    setInterval(updateClocks, 15000);

    if (!phone || !icon || !iconArt) {
        return;
    }

    function openApp() {
        if (phone.classList.contains('is-open') || phone.classList.contains('is-opening')) {
            return;
        }

        var screen = phone.querySelector('.phone-screen');
        var iconRect = iconArt.getBoundingClientRect();
        var screenRect = screen.getBoundingClientRect();

        var clone = document.createElement('div');
        clone.className = 'launch-clone';
        clone.style.top = (iconRect.top - screenRect.top) + 'px';
        clone.style.left = (iconRect.left - screenRect.left) + 'px';
        clone.style.width = iconRect.width + 'px';
        clone.style.height = iconRect.height + 'px';
        clone.style.borderRadius = '22%';
        screen.appendChild(clone);

        phone.classList.add('is-opening');

        requestAnimationFrame(function () {
            requestAnimationFrame(function () {
                clone.style.top = '0px';
                clone.style.left = '0px';
                clone.style.width = screenRect.width + 'px';
                clone.style.height = screenRect.height + 'px';
                clone.style.borderRadius = '0%';
                clone.classList.add('is-fading');
            });
        });

        clone.addEventListener('transitionend', function onEnd(e) {
            if (e.propertyName !== 'opacity') {
                return;
            }
            clone.removeEventListener('transitionend', onEnd);
            phone.classList.remove('is-opening');
            phone.classList.add('is-open');
            clone.remove();
        });
    }

    icon.addEventListener('click', openApp);

    var mql = window.matchMedia ? window.matchMedia('(max-width: 600px)') : null;
    if (!mql || !mql.matches) {
        setTimeout(openApp, 1000);
    }

    var tabButtons = document.querySelectorAll('.tab-bar__item');
    var tabPanels = document.querySelectorAll('.tab-panel');

    tabButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var target = btn.getAttribute('data-tab-target');

            tabButtons.forEach(function (b) {
                b.classList.toggle('is-active', b === btn);
            });
            tabPanels.forEach(function (panel) {
                panel.classList.toggle('is-active', panel.getAttribute('data-tab') === target);
            });
        });
    });

    tabPanels.forEach(function (panel) {
        var isDown = false;
        var startY = 0;
        var startScroll = 0;
        var moved = false;

        panel.addEventListener('pointerdown', function (e) {
            if (e.pointerType === 'touch') {
                return;
            }
            isDown = true;
            moved = false;
            startY = e.clientY;
            startScroll = panel.scrollTop;
            panel.classList.add('is-dragging');
        });

        panel.addEventListener('pointermove', function (e) {
            if (!isDown) {
                return;
            }
            var dy = e.clientY - startY;
            if (Math.abs(dy) > 3) {
                moved = true;
            }
            panel.scrollTop = startScroll - dy;
        });

        function endDrag() {
            isDown = false;
            panel.classList.remove('is-dragging');
        }

        panel.addEventListener('pointerup', endDrag);
        panel.addEventListener('pointerleave', endDrag);
        panel.addEventListener('pointercancel', endDrag);

        panel.addEventListener('click', function (e) {
            if (moved) {
                e.preventDefault();
                e.stopPropagation();
                moved = false;
            }
        }, true);
    });
})();
