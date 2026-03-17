// ============================================
// NAVIGATION
// ============================================
function initNav() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 30);

        let current = '';
        sections.forEach(s => {
            if (window.scrollY >= s.offsetTop - 120) current = s.id;
        });

        navLinks.forEach(l => {
            l.classList.toggle('active', l.getAttribute('href').slice(1) === current);
        });
    });

    hamburger?.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    navLinks.forEach(l => l.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger?.classList.remove('active');
    }));

    // Close menu on outside click
    document.addEventListener('click', e => {
        if (!navbar.contains(e.target)) {
            navMenu.classList.remove('active');
            hamburger?.classList.remove('active');
        }
    });
}

// ============================================
// SMOOTH SCROLL
// ============================================
function initScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(a.getAttribute('href'));
            if (target) {
                window.scrollTo({ top: target.offsetTop - 64, behavior: 'smooth' });
            }
        });
    });
}

// ============================================
// COUNTERS
// ============================================
function initCounters() {
    const els = document.querySelectorAll('[data-count]');

    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (!e.isIntersecting) return;
            const el = e.target;
            const target = parseInt(el.dataset.count);
            const duration = 2000;
            const step = target / (duration / 16);
            let cur = 0;

            const tick = () => {
                cur += step;
                if (cur < target) {
                    el.textContent = Math.floor(cur);
                    requestAnimationFrame(tick);
                } else {
                    el.textContent = target + (target === 1000 ? '+' : '');
                }
            };
            tick();
            obs.unobserve(el);
        });
    }, { threshold: 0.5 });

    els.forEach(el => obs.observe(el));
}

// ============================================
// SKILL BARS
// ============================================
function initSkillBars() {
    const bars = document.querySelectorAll('.skill-fill');

    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.style.width = e.target.dataset.w + '%';
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.4 });

    bars.forEach(b => obs.observe(b));
}

// ============================================
// SCROLL REVEAL
// ============================================
function initReveal() {
    const items = document.querySelectorAll(
        '.exp-item, .cert-card, .strength-item, .skill-row, .contact-link, .tag-group, .grid-item'
    );

    const obs = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                entry.target.style.transitionDelay = (i * 0.04) + 's';
                entry.target.classList.add('revealed');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08 });

    items.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(18px)';
        item.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
        obs.observe(item);
    });
}

// ============================================
// CONTACT FORM
// ============================================
function initForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', () => {
        const btn = form.querySelector('.submit-btn');
        const span = btn.querySelector('span');
        btn.disabled = true;
        span.textContent = 'Sending...';

        setTimeout(() => {
            btn.disabled = false;
            span.textContent = 'Send Message';
        }, 3000);
    });
}

// ============================================
// SCROLL-TO-TOP BUTTON
// ============================================
function initScrollToTop() {
    const btn = document.createElement('button');
    btn.setAttribute('aria-label', 'Back to top');
    btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    Object.assign(btn.style, {
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        width: '42px',
        height: '42px',
        background: '#0a0a0a',
        border: 'none',
        color: '#f5f5f3',
        fontSize: '0.85rem',
        cursor: 'pointer',
        opacity: '0',
        visibility: 'hidden',
        transition: 'all 0.3s ease',
        zIndex: '998',
    });

    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        const show = window.scrollY > 500;
        btn.style.opacity = show ? '1' : '0';
        btn.style.visibility = show ? 'visible' : 'hidden';
    });

    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    btn.addEventListener('mouseenter', () => { btn.style.background = '#e63329'; });
    btn.addEventListener('mouseleave', () => { btn.style.background = '#0a0a0a'; });
}

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initNav();
    initScroll();
    initCounters();
    initSkillBars();
    initReveal();
    initForm();
    initScrollToTop();
});

console.log('%c Sai Manish — Threat Detection Engineer', 'color: #e63329; font-size: 16px; font-weight: bold;');
console.log('%c Reach out: saimanish041998@gmail.com', 'color: #8a8a8a; font-size: 12px;');
