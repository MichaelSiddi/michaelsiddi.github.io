(function () {
    const trigger = document.querySelector('.smilecx-trigger');
    if (!trigger) {
        return;
    }

    const logo = trigger.querySelector('.smilecx-logo');
    if (!logo) {
        return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const state = {
        isAnimating: false,
        frameId: null,
    };

    const LOGO_SIZE = (() => {
        const graphic = logo.querySelector('img, svg');
        if (!graphic) {
            return 20;
        }
        if (graphic instanceof HTMLImageElement && graphic.naturalWidth > 0) {
            return graphic.naturalWidth;
        }
        const rect = graphic.getBoundingClientRect();
        if (rect.width > 0) {
            return rect.width;
        }
        const width = parseFloat(getComputedStyle(graphic).width);
        return Number.isFinite(width) && width > 0 ? width : 20;
    })();

    const HORIZONTAL_OFFSET = LOGO_SIZE * 0.18;
    const FADE_START = 0.94;
    const FADE_DURATION = 0.06;

    const cancelAnimation = () => {
        if (state.frameId !== null) {
            cancelAnimationFrame(state.frameId);
            state.frameId = null;
        }
    };

    const resetLogo = () => {
        cancelAnimation();
        logo.style.transition = 'none';
        logo.style.opacity = '0';
        logo.style.transform = 'translate3d(-9999px, -9999px, 0)';
        state.isAnimating = false;
        trigger.setAttribute('aria-expanded', 'false');
    };

    const playReducedMotion = () => {
        state.isAnimating = true;
        trigger.setAttribute('aria-expanded', 'true');
        logo.style.transition = 'transform 0.25s ease, opacity 0.25s ease';

        const centerX = trigger.offsetWidth / 2 - LOGO_SIZE / 2 + HORIZONTAL_OFFSET;
        const lift = LOGO_SIZE * 1.6;

        logo.style.opacity = '1';
        logo.style.transform = `translate3d(${centerX}px, ${-lift}px, 0)`;

        window.setTimeout(() => {
            resetLogo();
        }, 600);
    };

    const playBounceAnimation = () => {
        state.isAnimating = true;
        trigger.setAttribute('aria-expanded', 'true');
        logo.style.transition = 'none';
        logo.style.opacity = '1';

        const containerRect = trigger.getBoundingClientRect();
        const centerX = containerRect.width / 2 - LOGO_SIZE / 2 + HORIZONTAL_OFFSET;
        const baseY = -LOGO_SIZE * 0.4;
        const amplitude = containerRect.height * 0.7 + LOGO_SIZE * 0.6;
        const squishFactor = 0.18;
        const duration = 2500; // milliseconds
        const bounces = 5; // number of half-waves in the bounce curve

        const start = performance.now();
        let lastTime = start;
        let previousY = baseY;

        const step = (now) => {
            const elapsed = now - start;
            const dt = Math.max(now - lastTime, 16) / 1000;
            lastTime = now;

            const t = Math.min(elapsed / duration, 1);

            // Damped sine to simulate bouncing
            const envelope = Math.pow(1 - t, 1.2);
            const height = Math.abs(Math.sin(Math.PI * bounces * t)) * amplitude * envelope;
            const y = baseY - height;

            const velocityY = (y - previousY) / dt;
            previousY = y;

            const squash = Math.max(-squishFactor, Math.min(squishFactor, velocityY / 1600));
            const scaleX = 1 + squash;
            const scaleY = 1 - squash;

            const x = centerX;

            const opacity = t >= FADE_START
                ? 1 - Math.min((t - FADE_START) / FADE_DURATION, 1)
                : 1;

            logo.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scaleX}, ${scaleY})`;
            logo.style.opacity = String(Math.max(0, Math.min(1, opacity)));

            if (t >= 1) {
                resetLogo();
                return;
            }

            state.frameId = requestAnimationFrame(step);
        };

        state.frameId = requestAnimationFrame(step);
    };

    const playAnimation = () => {
        if (state.isAnimating) {
            return;
        }

        if (prefersReducedMotion.matches) {
            playReducedMotion();
        } else {
            playBounceAnimation();
        }
    };

    const handleTriggerKeydown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            playAnimation();
        }
    };

    const handleTriggerClick = (event) => {
        event.preventDefault();
        playAnimation();
    };

    trigger.addEventListener('click', handleTriggerClick);
    trigger.addEventListener('keydown', handleTriggerKeydown);
    window.addEventListener('blur', resetLogo);

    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') {
            resetLogo();
        }
    });
})();
