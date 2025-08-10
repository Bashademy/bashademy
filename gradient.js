// Mesh gradient animation (green theme)
class MeshGradient {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.animationId = null;
        this.time = 0;
        this.speed = 0.025;
        
        // Green color palette
        this.colors = [
            '#006400', // Dark green
            '#32CD32', // Lime green  
            '#14A085', // Teal green
            '#64FF96'  // Light green
        ];
        
        this.init();
    }

    init() {
        this.resize();
        this.animate();
        
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        const dpr = window.devicePixelRatio || 1;
        const rect = this.canvas.getBoundingClientRect();
        
        this.canvas.width = rect.width * dpr;
        this.canvas.height = rect.height * dpr;
        
        this.ctx.scale(dpr, dpr);
        
        this.canvas.style.width = rect.width + 'px';
        this.canvas.style.height = rect.height + 'px';
        
        this.width = rect.width;
        this.height = rect.height;
    }

    hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    createGradient(x, y, radius, color) {
        const gradient = this.ctx.createRadialGradient(x, y, 0, x, y, radius);
        const rgb = this.hexToRgb(color);
        
        gradient.addColorStop(0, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.8)`);
        gradient.addColorStop(0.5, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.4)`);
        gradient.addColorStop(1, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0)`);
        
        return gradient;
    }

    animate() {
        if (!this.width || !this.height) {
            this.animationId = requestAnimationFrame(() => this.animate());
            return;
        }

        this.ctx.clearRect(0, 0, this.width, this.height);
        
        // Create animated gradient blobs
        const blobs = [
            {
                x: this.width * 0.2 + Math.sin(this.time * 0.5) * 100,
                y: this.height * 0.3 + Math.cos(this.time * 0.3) * 80,
                radius: 200 + Math.sin(this.time * 0.4) * 50,
                color: this.colors[0]
            },
            {
                x: this.width * 0.8 + Math.cos(this.time * 0.4) * 120,
                y: this.height * 0.7 + Math.sin(this.time * 0.6) * 100,
                radius: 250 + Math.cos(this.time * 0.3) * 60,
                color: this.colors[1]
            },
            {
                x: this.width * 0.6 + Math.sin(this.time * 0.7) * 90,
                y: this.height * 0.2 + Math.cos(this.time * 0.5) * 70,
                radius: 180 + Math.sin(this.time * 0.6) * 40,
                color: this.colors[2]
            },
            {
                x: this.width * 0.3 + Math.cos(this.time * 0.3) * 110,
                y: this.height * 0.8 + Math.sin(this.time * 0.4) * 90,
                radius: 220 + Math.cos(this.time * 0.5) * 50,
                color: this.colors[3]
            }
        ];

        // Set blend mode for smooth color mixing
        this.ctx.globalCompositeOperation = 'screen';
        
        // Draw each blob
        blobs.forEach(blob => {
            const gradient = this.createGradient(blob.x, blob.y, blob.radius, blob.color);
            this.ctx.fillStyle = gradient;
            this.ctx.fillRect(0, 0, this.width, this.height);
        });
        
        // Reset blend mode
        this.ctx.globalCompositeOperation = 'source-over';
        
        this.time += this.speed;
        this.animationId = requestAnimationFrame(() => this.animate());
    }

    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
    }
}

// Initialize gradient when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('gradient-canvas');
    if (canvas) {
        new MeshGradient(canvas);
    }
});
