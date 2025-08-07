// Theme management
class ThemeManager {
    constructor() {
        this.theme = this.getStoredTheme() || 'dark';
        this.init();
    }

    init() {
        this.applyTheme(this.theme);
        this.setupThemeButtons();
        this.setupNavigation();
        this.setupForm();
    }

    getStoredTheme() {
        return localStorage.getItem('theme');
    }

    setStoredTheme(theme) {
        localStorage.setItem('theme', theme);
    }

    getSystemTheme() {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    applyTheme(theme) {
        const html = document.documentElement;
        
        if (theme === 'system') {
            const systemTheme = this.getSystemTheme();
            html.className = systemTheme;
        } else {
            html.className = theme;
        }
        
        this.theme = theme;
        this.setStoredTheme(theme);
        this.updateThemeButtons();
    }

    updateThemeButtons() {
        const buttons = document.querySelectorAll('.theme-btn');
        buttons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.theme === this.theme);
        });
    }

    setupThemeButtons() {
        const buttons = document.querySelectorAll('.theme-btn');
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                this.applyTheme(btn.dataset.theme);
            });
        });

        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
            if (this.theme === 'system') {
                this.applyTheme('system');
            }
        });
    }

    setupNavigation() {
        // Update active nav link based on current page
        const currentPage = window.location.pathname.includes('manifesto') ? 'manifesto' : 'waitlist';
        const navLinks = document.querySelectorAll('.nav-link');
        const navBackground = document.querySelector('.nav-background');
        
        navLinks.forEach((link, index) => {
            const isActive = link.dataset.page === currentPage;
            link.classList.toggle('active', isActive);
            
            if (isActive && navBackground) {
                navBackground.style.left = `calc((${index} * 90px) + 4px)`;
            }
        });
    }

    setupForm() {
        const form = document.getElementById('messageForm');
        if (!form) return;

        const submitBtn = document.getElementById('submitBtn');
        const btnText = submitBtn.querySelector('.btn-text');
        const spinner = submitBtn.querySelector('.loading-spinner');
        const messageDiv = document.getElementById('formMessage');
        const messageInput = document.getElementById('message');

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const message = messageInput.value.trim();
            if (!message) {
                this.showMessage('Please enter a message', 'error');
                return;
            }

            // Show loading state
            this.setLoadingState(true, submitBtn, btnText, spinner);
            this.hideMessage();

            try {
                // Simulate form submission (replace with actual email service)
                await this.simulateMessageSend(message);
                
                // Show success
                this.showMessage('Message sent successfully! We\'ll get back to you soon.', 'success');
                messageInput.value = '';
                
                // Reset button after 2 seconds
                setTimeout(() => {
                    this.setLoadingState(false, submitBtn, btnText, spinner);
                }, 2000);
                
            } catch (error) {
                console.error('Error sending message:', error);
                this.showMessage('Failed to send message. Please try again.', 'error');
                this.setLoadingState(false, submitBtn, btnText, spinner);
            }
        });
    }

    setLoadingState(loading, btn, btnText, spinner) {
        btn.disabled = loading;
        btnText.textContent = loading ? 'Sending...' : 'Send Message';
        spinner.style.display = loading ? 'block' : 'none';
    }

    showMessage(text, type) {
        const messageDiv = document.getElementById('formMessage');
        if (!messageDiv) return;

        messageDiv.textContent = text;
        messageDiv.className = `form-message show ${type}`;
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            this.hideMessage();
        }, 5000);
    }

    hideMessage() {
        const messageDiv = document.getElementById('formMessage');
        if (!messageDiv) return;
        
        messageDiv.classList.remove('show');
    }

    async simulateMessageSend(message) {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // In a real implementation, you would send the message here
        console.log('Message to send:', message);
        
        // Simulate occasional failures for testing
        if (Math.random() < 0.1) {
            throw new Error('Simulated network error');
        }
    }
}

// Initialize theme manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
});
