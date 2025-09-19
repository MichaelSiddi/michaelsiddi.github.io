(function () {
    var root = document.documentElement;
    var toggle = document.querySelector('.theme-toggle');

    if (!root || !toggle) {
        return;
    }

    var storedTheme = null;
    try {
        storedTheme = localStorage.getItem('theme');
    } catch (err) {
        storedTheme = null;
    }

    var hasExplicitPreference = !!storedTheme;

    function currentTheme() {
        return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    }

    function syncButton(theme) {
        toggle.setAttribute('data-theme', theme);
        toggle.setAttribute('aria-pressed', theme === 'dark');
        toggle.setAttribute('aria-label', theme === 'dark' ? 'Activate light mode' : 'Activate dark mode');
    }

    function applyTheme(theme, persist) {
        root.setAttribute('data-theme', theme);
        if (persist) {
            try {
                localStorage.setItem('theme', theme);
                hasExplicitPreference = true;
            } catch (err) {
                hasExplicitPreference = true;
            }
        }
        syncButton(theme);
    }

    if (storedTheme && storedTheme !== currentTheme()) {
        applyTheme(storedTheme, false);
    } else {
        syncButton(currentTheme());
    }

    var markReady = function () {
        toggle.classList.add('is-ready');
    };

    if (typeof window.requestAnimationFrame === 'function') {
        window.requestAnimationFrame(markReady);
    } else {
        setTimeout(markReady, 0);
    }

    toggle.addEventListener('click', function () {
        var nextTheme = currentTheme() === 'dark' ? 'light' : 'dark';
        applyTheme(nextTheme, true);
    });

    var mql = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

    if (mql && !hasExplicitPreference) {
        var handlePreferenceChange = function (event) {
            if (hasExplicitPreference) {
                return;
            }
            applyTheme(event.matches ? 'dark' : 'light', false);
        };

        if (typeof mql.addEventListener === 'function') {
            mql.addEventListener('change', handlePreferenceChange);
        } else if (typeof mql.addListener === 'function') {
            mql.addListener(handlePreferenceChange);
        }
    }
})();
