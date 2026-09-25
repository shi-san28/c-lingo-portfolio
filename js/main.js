// ===== Nav Scroll Effect =====
const nav = document.querySelector('.nav');

function handleNavScroll() {
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', handleNavScroll, { passive: true });

// ===== Reveal on Scroll =====
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // 延迟错开动画
      const delay = (index % 3) * 100;
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, delay);
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

// ===== Gallery Thumbnail Switch =====
const mainImg = document.getElementById('gallery-main-img');
const thumbs = document.querySelectorAll('.thumb');
const tabs = document.querySelectorAll('.gallery-tab');

function switchImage(src) {
  if (!mainImg) return;
  
  mainImg.style.opacity = '0';
  setTimeout(() => {
    mainImg.src = src;
    mainImg.style.opacity = '1';
  }, 150);
}

thumbs.forEach(thumb => {
  thumb.addEventListener('click', () => {
    const imgSrc = thumb.dataset.img;
    switchImage(imgSrc);
    
    thumbs.forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
    
    // 同步tab
    tabs.forEach(tab => {
      if (tab.dataset.img === imgSrc) {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
      }
    });
  });
});

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const imgSrc = tab.dataset.img;
    switchImage(imgSrc);
    
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    
    // 同步thumb
    thumbs.forEach(thumb => {
      if (thumb.dataset.img === imgSrc) {
        thumbs.forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
      }
    });
  });
});

// ===== Smooth scroll for nav links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      const navHeight = nav.offsetHeight;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ===== Parallax effect for hero mockup =====
const heroMockup = document.querySelector('.hero-mockup');
if (heroMockup) {
  let ticking = false;
  
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        if (scrollY < window.innerHeight) {
          const yOffset = scrollY * 0.15;
          const rotateAmount = scrollY * 0.01;
          heroMockup.style.transform = `translateY(${yOffset}px) perspective(1000px) rotateY(${-5 + rotateAmount}deg)`;
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

// ===== Initialize: trigger first batch of reveals =====
window.addEventListener('load', () => {
  // 手动触发首屏元素的显示
  const heroReveals = document.querySelectorAll('.hero .reveal');
  heroReveals.forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 200 + i * 150);
  });
});
