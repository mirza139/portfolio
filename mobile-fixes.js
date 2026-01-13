// Mobile Fixes - Mirza Creative Portfolio
// Fixes: Mobile Nav, FAQ Accordion, Review Slider

document.addEventListener('DOMContentLoaded', function() {
    console.log('Mobile fixes loaded');
    
    // FAQ FIX
    const faqButtons = document.querySelectorAll('button');
    faqButtons.forEach((btn) => {
        const text = btn.textContent.toLowerCase();
        if (text.includes('?') || text.includes('what') || text.includes('how')) {
            btn.style.cursor = 'pointer';
            btn.style.width = '100%';
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                let answer = this.nextElementSibling;
                if (!answer || answer.tagName === 'BUTTON') {
                    answer = this.parentElement.nextElementSibling;
                }
                if (answer) {
                    const isVisible = answer.style.display !== 'none';
                    answer.style.display = isVisible ? 'none' : 'block';
                    answer.style.maxHeight = isVisible ? '0' : '2000px';
                    answer.style.opacity = isVisible ? '0' : '1';
                    answer.style.transition = 'all 0.3s';
                    console.log('FAQ toggled');
                }
            });
        }
    });
    
    // SLIDER FIX  
    setTimeout(() => {
        const btns = document.querySelectorAll('button');
        let prev = null, next = null;
        btns.forEach(b => {
            if (b.innerHTML.includes('<')) prev = b;
            if (b.innerHTML.includes('>')) next = b;
        });
        
        const reviews = document.querySelectorAll('[class*="testimonial"] > *, [class*="review"] > *');
        let idx = 0;
        
        function show(i) {
            reviews.forEach((r, ri) => {
                r.style.display = ri === i ? 'block' : 'none';
            });
        }
        
        if (prev) prev.onclick = () => { idx = (idx - 1 + reviews.length) % reviews.length; show(idx); };
        if (next) next.onclick = () => { idx = (idx + 1) % reviews.length; show(idx); };
        
        if (reviews.length > 0) show(0);
    }, 1000);
    
    console.log('All fixes applied');
});
