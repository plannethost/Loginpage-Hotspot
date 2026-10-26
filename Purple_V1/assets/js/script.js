(function () {
    'use strict';
    /* ==================== CACHE DOM ELEMENTS ==================== */
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const tabNav = document.getElementById('tabNav');
    const voucherFields = document.getElementById('voucherFields');
    const userFields = document.getElementById('userFields');
    const voucherCode = document.getElementById('voucherCode');
    const voucherPassword = document.getElementById('voucherPassword');
    const userUsername = document.getElementById('userUsername');
    const userPassword = document.getElementById('userPassword');
    const toggleUserPassword = document.getElementById('toggleUserPassword');
    const loginForm = document.getElementById('loginForm');
    const submitBtn = document.getElementById('submitBtn');
    const btnText = document.getElementById('btnText');
    const loginCard = document.getElementById('loginCard');
    const memberLink = document.getElementById('memberLink');
    const vcLink = document.getElementById('vcLink');
    const errorAlert = document.getElementById('errorAlert');
    const currentYearEl = document.getElementById('current-year');
    const faqAccordion = document.getElementById('faqAccordion');
    const loadingOverlay = document.getElementById('loadingOverlay');
    const statusOverlay = document.getElementById('statusOverlay');
    const statusSpinner = document.getElementById('statusSpinner');
    const statusCheck = document.getElementById('statusCheck');
    const statusContent = document.getElementById('statusContent');

    /* ==================== HELPER FUNCTIONS ==================== */
    const addClass = (el, className) => el && el.classList.add(className);
    const removeClass = (el, className) => el && el.classList.remove(className);
    const toggleClass = (el, className) => el && el.classList.toggle(className);
    const setDisplay = (el, value) => { if (el) el.style.display = value; };
    const setInputName = (el, name) => { if (el) el.name = name; };
    const clearValue = (el) => { if (el) el.value = ''; };
    const focusElement = (el) => { if (el) el.focus(); };

    // Shake animation pada kartu login
    function shakeCard() {
        if (!loginCard) return;
        loginCard.style.transform = 'translateX(-20px)';
        setTimeout(() => { loginCard.style.transform = ''; }, 50);
        setTimeout(() => { loginCard.style.transform = 'translateX(20px)'; }, 50);
        setTimeout(() => { loginCard.style.transform = ''; }, 150);
    }
    function markInvalid(input) {
        if (!input) return;
        input.classList.add('is-invalid');
        input.style.borderColor = '#e74c3c';
    }
    function resetInputBorders() {
        document.querySelectorAll('input').forEach(input => {
            input.classList.remove('is-invalid');
            input.style.borderColor = '';
        });
    }
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => toggleClass(navLinks, 'open'));
    }

    /* ==================== TAB SWITCHING ==================== */
    let currentTab = 'voucher';

    const tabConfig = {
        voucher: {
            show: voucherFields,
            hide: userFields,
            codeName: 'username',
            passName: 'password',
            userCodeName: 'username_user',
            userPassName: 'password_user',
            registerDisplay: 'none',
            voucherLinksDisplay: 'block',
            clearUser: true,
            syncPassword: true
        },
        user: {
            show: userFields,
            hide: voucherFields,
            codeName: 'username_voucher',
            passName: 'password_voucher',
            userCodeName: 'username',
            userPassName: 'password',
            registerDisplay: 'block',
            voucherLinksDisplay: 'none',
            clearUser: false,
            syncPassword: false
        }
    };

    function switchTab(tab) {
        if (currentTab === tab) return;
        currentTab = tab;
        const cfg = tabConfig[tab];
        document.querySelectorAll('.tab-item').forEach(item => {
            item.classList.toggle('active', item.dataset.tab === tab);
        });
        setDisplay(cfg.hide, 'none');
        setDisplay(cfg.show, 'block');
        setInputName(voucherCode, cfg.codeName);
        setInputName(voucherPassword, cfg.passName);
        setInputName(userUsername, cfg.userCodeName);
        setInputName(userPassword, cfg.userPassName);
        setDisplay(memberLink, cfg.registerDisplay);
        setDisplay(vcLink, cfg.voucherLinksDisplay);
        if (cfg.clearUser) {
            clearValue(userUsername);
            clearValue(userPassword);
        } else {
            clearValue(voucherCode);
            clearValue(voucherPassword);
        }
        if (cfg.syncPassword && voucherPassword && voucherCode) {
            voucherPassword.value = voucherCode.value.trim();
        }
    }
    if (tabNav) {
        tabNav.addEventListener('click', (e) => {
            const tabItem = e.target.closest('.tab-item');
            if (tabItem) switchTab(tabItem.dataset.tab);
        });
    }
    switchTab('voucher');
    if (voucherCode) {
        voucherCode.addEventListener('input', () => {
            if (currentTab === 'voucher' && voucherPassword) {
                voucherPassword.value = voucherCode.value.trim();
            }
        });
    }
    if (toggleUserPassword && userPassword) {
        const eyeImg = toggleUserPassword.querySelector('img');
        toggleUserPassword.addEventListener('click', (e) => {
            e.preventDefault();
            const isPassword = userPassword.type === 'password';
            userPassword.type = isPassword ? 'text' : 'password';
            if (eyeImg) eyeImg.src = isPassword ? 'assets/svg/eye-off.svg' : 'assets/svg/eye.svg';
            focusElement(userPassword);
        });
        toggleUserPassword.addEventListener('mousedown', (e) => e.preventDefault());
    }
    if (submitBtn) {
        submitBtn.addEventListener('click', (e) => {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            const rect = submitBtn.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
            ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
            submitBtn.appendChild(ripple);
            ripple.addEventListener('animationend', () => ripple.remove());
        });
    }
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            if (currentTab === 'voucher') {
                if (!voucherCode || !voucherCode.value.trim()) {
                    e.preventDefault();
                    shakeCard();
                    markInvalid(voucherCode);
                    return;
                }
            } else {
                const u = userUsername ? userUsername.value.trim() : '';
                const p = userPassword ? userPassword.value.trim() : '';
                if (!u || !p) {
                    e.preventDefault();
                    shakeCard();
                    if (!u) markInvalid(userUsername);
                    if (!p) markInvalid(userPassword);
                    return;
                }
            }
            // Tampilkan status loading
            if (submitBtn) submitBtn.disabled = true;
            if (btnText) btnText.textContent = 'Connecting...';
        });
    }
    resetInputBorders();
    document.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', () => {
            input.classList.remove('is-invalid');
            input.style.borderColor = '';
        });
    });
    if (voucherCode && !voucherCode.value) {
        setTimeout(() => focusElement(voucherCode), 500);
    }
    window.addEventListener('pageshow', () => {
        if (submitBtn) submitBtn.disabled = false;
        if (btnText) btnText.textContent = 'Masuk';
    });
    if (errorAlert) {
        setTimeout(() => shakeCard(), 500);
    }
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }

    /* ==================== FAQ ACCORDION ==================== */
    if (faqAccordion) {
        faqAccordion.addEventListener('click', (e) => {
            const question = e.target.closest('.faq-question');
            if (!question) return;
            const item = question.closest('.faq-item');
            if (!item) return;
            document.querySelectorAll('.faq-item.active').forEach(activeItem => {
                if (activeItem !== item) removeClass(activeItem, 'active');
            });
            toggleClass(item, 'active');
        });
    }

    /* ==================== LOADING OVERLAY (HALAMAN) ==================== */
    if (loadingOverlay) {
        window.addEventListener('load', () => {
            setTimeout(() => addClass(loadingOverlay, 'fade-out'), 200);
        });
    }

    if (statusOverlay && statusSpinner && statusCheck && statusContent) {
        setDisplay(statusContent, 'none');
        setDisplay(statusSpinner, 'block');
        removeClass(statusCheck, 'show');
        setTimeout(() => {
            setDisplay(statusSpinner, 'none');
            addClass(statusCheck, 'show');
        }, 500);
        setTimeout(() => {
            addClass(statusOverlay, 'fade-out');
            setDisplay(statusContent, 'flex');
            addClass(statusContent, 'visible');
        }, 2000);
    }
})();