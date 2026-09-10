/**
 * ==========================================================================
 * MEMESTUDIO PRO - CORE ENGINE
 * Interactive multi-layer canvas, vector templates, typography, and export.
 * ==========================================================================
 */

// --- Built-in Curated Meme Templates (Vector & High-Res Procedural Graphics) ---
const MEME_TEMPLATES = [
    {
        id: 'drake',
        name: 'Drake Hotline Bling',
        category: 'comparison',
        aspect: '1:1',
        defaultTexts: [
            { text: 'DOING WORK MANUALLY', yRatio: 0.25, xRatio: 0.72 },
            { text: 'BUILDING A PRO MEME STUDIO', yRatio: 0.75, xRatio: 0.72 }
        ],
        render: (ctx, w, h) => {
            // Draw 2x2 grid (Drake dislike top left, blank top right, Drake like bottom left, blank bottom right)
            ctx.fillStyle = '#f8fafc';
            ctx.fillRect(0, 0, w, h);
            ctx.fillStyle = '#f97316';
            ctx.fillRect(0, 0, w * 0.45, h * 0.5);
            ctx.fillStyle = '#10b981';
            ctx.fillRect(0, h * 0.5, w * 0.45, h * 0.5);

            // Drake Top: Dislike gesture emoji/silhouette
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.arc(w * 0.22, h * 0.22, w * 0.12, 0, Math.PI * 2);
            ctx.fill();
            ctx.font = `${w * 0.14}px sans-serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('✋😒', w * 0.22, h * 0.22);

            // Drake Bottom: Like gesture emoji/silhouette
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.arc(w * 0.22, h * 0.72, w * 0.12, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillText('👉😎', w * 0.22, h * 0.72);

            // Divider lines
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = Math.max(3, w * 0.006);
            ctx.beginPath();
            ctx.moveTo(w * 0.45, 0); ctx.lineTo(w * 0.45, h);
            ctx.moveTo(0, h * 0.5); ctx.lineTo(w, h * 0.5);
            ctx.stroke();
        }
    },
    {
        id: 'distracted_boyfriend',
        name: 'Distracted Boyfriend',
        category: 'reactions',
        aspect: '16:9',
        defaultTexts: [
            { text: 'NEW SHINY FRAMEWORK', yRatio: 0.35, xRatio: 0.2 },
            { text: 'ME', yRatio: 0.55, xRatio: 0.55 },
            { text: 'EXISTING STABLE CODEBASE', yRatio: 0.55, xRatio: 0.85 }
        ],
        render: (ctx, w, h) => {
            const grad = ctx.createLinearGradient(0, 0, w, h);
            grad.addColorStop(0, '#1e293b');
            grad.addColorStop(0.5, '#334155');
            grad.addColorStop(1, '#0f172a');
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, w, h);

            // Street scene silhouettes
            ctx.fillStyle = '#e2e8f0';
            ctx.font = `${w * 0.12}px sans-serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            // Girl in Red (Left)
            ctx.fillText('💃', w * 0.2, h * 0.6);
            // Distracted Boyfriend (Center Looking Left)
            ctx.fillText('👀🚶‍♂️', w * 0.55, h * 0.6);
            // Annoyed Girlfriend (Right)
            ctx.fillText('😠👩‍💼', w * 0.85, h * 0.6);

            // Street floor
            ctx.fillStyle = 'rgba(0,0,0,0.4)';
            ctx.fillRect(0, h * 0.8, w, h * 0.2);
        }
    },
    {
        id: 'two_buttons',
        name: 'Two Buttons Dilemma',
        category: 'dilemma',
        aspect: '1:1',
        defaultTexts: [
            { text: 'FIX 1 BUG', yRatio: 0.22, xRatio: 0.35 },
            { text: 'CREATE 5 NEW BUGS', yRatio: 0.18, xRatio: 0.65 },
            { text: 'DEVELOPER SWEATING', yRatio: 0.88, xRatio: 0.5 }
        ],
        render: (ctx, w, h) => {
            // Console background
            ctx.fillStyle = '#64748b';
            ctx.fillRect(0, 0, w, h);

            // Machine panel
            ctx.fillStyle = '#cbd5e1';
            ctx.beginPath();
            ctx.moveTo(w * 0.1, h * 0.1);
            ctx.lineTo(w * 0.9, h * 0.05);
            ctx.lineTo(w * 0.85, h * 0.45);
            ctx.lineTo(w * 0.05, h * 0.45);
            ctx.closePath();
            ctx.fill();
            ctx.strokeStyle = '#334155';
            ctx.lineWidth = 4;
            ctx.stroke();

            // Button 1 (Left Red Pill)
            ctx.fillStyle = '#ef4444';
            ctx.beginPath();
            ctx.ellipse(w * 0.35, h * 0.25, w * 0.14, h * 0.08, -0.1, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            // Button 2 (Right Red Pill)
            ctx.fillStyle = '#ef4444';
            ctx.beginPath();
            ctx.ellipse(w * 0.68, h * 0.22, w * 0.14, h * 0.08, 0.1, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            // Sweating character below
            ctx.fillStyle = '#1e293b';
            ctx.fillRect(0, h * 0.5, w, h * 0.5);
            ctx.font = `${w * 0.2}px sans-serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('😰💦', w * 0.5, h * 0.72);
        }
    },
    {
        id: 'buff_doge',
        name: 'Buff Doge vs Cheems',
        category: 'comparison',
        aspect: '16:9',
        defaultTexts: [
            { text: 'PROGRAMMERS IN 1970:\nWROTE ASSEMBLY & SENT MEN TO MOON', yRatio: 0.82, xRatio: 0.25 },
            { text: 'ME IN 2026:\nMY CSS DIV IS OFF BY 1 PIXEL', yRatio: 0.82, xRatio: 0.75 }
        ],
        render: (ctx, w, h) => {
            // Split background
            ctx.fillStyle = '#e0e7ff';
            ctx.fillRect(0, 0, w * 0.5, h);
            ctx.fillStyle = '#fee2e2';
            ctx.fillRect(w * 0.5, 0, w * 0.5, h);

            ctx.strokeStyle = '#475569';
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.moveTo(w * 0.5, 0); ctx.lineTo(w * 0.5, h);
            ctx.stroke();

            // Left: Giant Chad Doge Emoji
            ctx.font = `${w * 0.22}px sans-serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('🐕💪', w * 0.25, h * 0.4);

            // Right: Tiny Crying Doge
            ctx.font = `${w * 0.12}px sans-serif`;
            ctx.fillText('🥺🐶', w * 0.75, h * 0.45);
        }
    },
    {
        id: 'woman_cat',
        name: 'Woman Yelling at Cat',
        category: 'reactions',
        aspect: '16:9',
        defaultTexts: [
            { text: 'YOU SAID YOU WOULD FIX IT IN 5 MINUTES!', yRatio: 0.2, xRatio: 0.25 },
            { text: 'ME READING STACK OVERFLOW FOR 3 HOURS', yRatio: 0.2, xRatio: 0.75 }
        ],
        render: (ctx, w, h) => {
            ctx.fillStyle = '#334155';
            ctx.fillRect(0, 0, w * 0.5, h);
            ctx.fillStyle = '#1e293b';
            ctx.fillRect(w * 0.5, 0, w * 0.5, h);

            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.moveTo(w * 0.5, 0); ctx.lineTo(w * 0.5, h);
            ctx.stroke();

            ctx.font = `${w * 0.16}px sans-serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('👩‍🦰👉😭', w * 0.25, h * 0.6);
            ctx.fillText('🐱🥗🍽️', w * 0.75, h * 0.6);
        }
    },
    {
        id: 'roll_safe',
        name: 'Roll Safe (Thinking Guy)',
        category: 'smart',
        aspect: '1:1',
        defaultTexts: [
            { text: "YOU CAN'T HAVE BUGS IN YOUR CODE", yRatio: 0.15, xRatio: 0.5 },
            { text: "IF YOU NEVER WRITE ANY CODE", yRatio: 0.85, xRatio: 0.5 }
        ],
        render: (ctx, w, h) => {
            const grad = ctx.createRadialGradient(w * 0.5, h * 0.5, w * 0.1, w * 0.5, h * 0.5, w * 0.7);
            grad.addColorStop(0, '#38bdf8');
            grad.addColorStop(1, '#0369a1');
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, w, h);

            ctx.font = `${w * 0.3}px sans-serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('🧠👈😏', w * 0.5, h * 0.5);
        }
    },
    {
        id: 'spiderman_pointing',
        name: 'Spider-Man Pointing',
        category: 'comparison',
        aspect: '16:9',
        defaultTexts: [
            { text: 'FRONTEND BUG', yRatio: 0.3, xRatio: 0.25 },
            { text: 'BACKEND BUG', yRatio: 0.3, xRatio: 0.75 }
        ],
        render: (ctx, w, h) => {
            ctx.fillStyle = '#0f172a';
            ctx.fillRect(0, 0, w, h);

            // Ground & van outline
            ctx.fillStyle = '#1e293b';
            ctx.fillRect(0, h * 0.65, w, h * 0.35);

            ctx.font = `${w * 0.18}px sans-serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('👉🕷️', w * 0.3, h * 0.55);
            ctx.fillText('🕷️👈', w * 0.7, h * 0.55);
        }
    },
    {
        id: 'change_my_mind',
        name: 'Change My Mind',
        category: 'statement',
        aspect: '16:9',
        defaultTexts: [
            { text: 'DARK MODE MAKES YOU 200% BETTER AT CODING', yRatio: 0.65, xRatio: 0.5 },
            { text: 'CHANGE MY MIND', yRatio: 0.88, xRatio: 0.5 }
        ],
        render: (ctx, w, h) => {
            // Outdoor campus backdrop
            ctx.fillStyle = '#86efac';
            ctx.fillRect(0, 0, w, h * 0.6);
            ctx.fillStyle = '#3b82f6';
            ctx.fillRect(0, 0, w, h * 0.3);

            // Table with banner
            ctx.fillStyle = '#f8fafc';
            ctx.fillRect(w * 0.15, h * 0.5, w * 0.7, h * 0.45);
            ctx.strokeStyle = '#1e293b';
            ctx.lineWidth = 4;
            ctx.strokeRect(w * 0.15, h * 0.5, w * 0.7, h * 0.45);

            // Man sitting with coffee
            ctx.font = `${w * 0.15}px sans-serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('☕👨‍💼', w * 0.5, h * 0.4);
        }
    },
    {
        id: 'disaster_girl',
        name: 'Disaster Girl',
        category: 'chaos',
        aspect: '16:9',
        defaultTexts: [
            { text: 'DEPLOYING DIRECTLY TO PRODUCTION ON FRIDAY 5PM', yRatio: 0.15, xRatio: 0.5 },
            { text: 'GOING HOME FOR THE WEEKEND', yRatio: 0.88, xRatio: 0.5 }
        ],
        render: (ctx, w, h) => {
            // Burning house scene
            const fireGrad = ctx.createLinearGradient(0, 0, w, h);
            fireGrad.addColorStop(0, '#f97316');
            fireGrad.addColorStop(0.4, '#ef4444');
            fireGrad.addColorStop(1, '#7f1d1d');
            ctx.fillStyle = fireGrad;
            ctx.fillRect(0, 0, w, h);

            ctx.font = `${w * 0.18}px sans-serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('🏠🔥🚒', w * 0.65, h * 0.4);

            // Smiling girl in foreground
            ctx.font = `${w * 0.22}px sans-serif`;
            ctx.fillText('👧😏', w * 0.25, h * 0.65);
        }
    },
    {
        id: 'trade_offer',
        name: 'Trade Offer',
        category: 'dilemma',
        aspect: '9:16',
        defaultTexts: [
            { text: '⚠️ TRADE OFFER ⚠️', yRatio: 0.12, xRatio: 0.5 },
            { text: 'I RECEIVE:\n1 CUP OF COFFEE', yRatio: 0.4, xRatio: 0.5 },
            { text: 'YOU RECEIVE:\n10,000 LINES OF CODE', yRatio: 0.8, xRatio: 0.5 }
        ],
        render: (ctx, w, h) => {
            ctx.fillStyle = '#0f172a';
            ctx.fillRect(0, 0, w, h);

            // Title Banner
            ctx.fillStyle = '#dc2626';
            ctx.fillRect(0, 0, w, h * 0.18);

            // Trader Man in Suit
            ctx.font = `${w * 0.25}px sans-serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('🤵🤝', w * 0.5, h * 0.3);

            // Panels
            ctx.fillStyle = 'rgba(255,255,255,0.08)';
            ctx.roundRect(w * 0.08, h * 0.35, w * 0.84, h * 0.25, 12);
            ctx.fill();
            ctx.roundRect(w * 0.08, h * 0.65, w * 0.84, h * 0.25, 12);
            ctx.fill();
        }
    },
    {
        id: 'bernie_asking',
        name: 'Bernie Once Again Asking',
        category: 'reactions',
        aspect: '1:1',
        defaultTexts: [
            { text: 'I AM ONCE AGAIN ASKING', yRatio: 0.15, xRatio: 0.5 },
            { text: 'FOR YOU TO STAR THIS REPO', yRatio: 0.85, xRatio: 0.5 }
        ],
        render: (ctx, w, h) => {
            // Snowy cold background
            ctx.fillStyle = '#94a3b8';
            ctx.fillRect(0, 0, w, h);

            ctx.fillStyle = '#f8fafc';
            ctx.beginPath();
            ctx.ellipse(w * 0.5, h * 0.85, w * 0.6, h * 0.3, 0, 0, Math.PI * 2);
            ctx.fill();

            ctx.font = `${w * 0.28}px sans-serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('🧤👴🧣', w * 0.5, h * 0.5);
        }
    },
    {
        id: 'panik_kalm',
        name: 'Panik Kalm Panik',
        category: 'dilemma',
        aspect: '1:1',
        defaultTexts: [
            { text: 'TEST FAILS: PANIK', yRatio: 0.22, xRatio: 0.7 },
            { text: 'TEST PASSES: KALM', yRatio: 0.55, xRatio: 0.7 },
            { text: 'DID NOT WRITE ANY ASSERTIONS: PANIK', yRatio: 0.88, xRatio: 0.7 }
        ],
        render: (ctx, w, h) => {
            ctx.fillStyle = '#f1f5f9';
            ctx.fillRect(0, 0, w, h);

            // 3 vertical sections
            const sectionH = h / 3;
            ctx.strokeStyle = '#000';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(0, sectionH); ctx.lineTo(w, sectionH);
            ctx.moveTo(0, sectionH * 2); ctx.lineTo(w, sectionH * 2);
            ctx.moveTo(w * 0.4, 0); ctx.lineTo(w * 0.4, h);
            ctx.stroke();

            ctx.font = `${w * 0.16}px sans-serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('😱', w * 0.2, sectionH * 0.5);
            ctx.fillText('😌', w * 0.2, sectionH * 1.5);
            ctx.fillText('🤯', w * 0.2, sectionH * 2.5);
        }
    }
];

// --- Sticker Catalog ---
const STICKER_CATALOG = {
    memes: ['🔥', '😂', '🕶️', '👑', '💯', '💀', '👀', '🚀', '🧠', '🤡', '🧢', '💩', '🗿', '🍷', '⚡'],
    faces: ['😎', '🤓', '🤔', '🥶', '🥵', '😭', '🤯', '🥳', '🥺', '😈', '🤠', '🤐', '🤫', '😴', '🤑'],
    reactions: ['💥', '✨', '🎉', '🚨', '💣', '❤️‍🔥', '⚠️', '⭐', '🏆', '🎯', '💰', '📉', '📈', '❌', '✔️'],
    props: ['🎩', '🧢', '🕶️', '👓', '🪄', '🥊', '🍿', '☕', '🍔', '🍕', '🛡️', '⚔️', '🎸', '🎤', '💎'],
    badges: ['🔴', '⭕', '➡️', '⬆️', '⬇️', '👈', '👉', '💬', '🗯️', '💭', '🗯️', '🛑', '⛔', '🆒', '🆕']
};

// --- Layer Hierarchy System ---
class Layer {
    constructor(type) {
        this.id = 'layer_' + Math.random().toString(36).substring(2, 9);
        this.type = type;
        this.visible = true;
        this.locked = false;
        this.x = 0;
        this.y = 0;
        this.width = 100;
        this.height = 100;
        this.rotation = 0; // In radians
        this.scale = 1;
    }

    getBounds() {
        return {
            x: this.x - (this.width * this.scale) / 2,
            y: this.y - (this.height * this.scale) / 2,
            width: this.width * this.scale,
            height: this.height * this.scale
        };
    }

    containsPoint(px, py) {
        if (!this.visible) return false;
        // Transform point into local unrotated space
        const cos = Math.cos(-this.rotation);
        const sin = Math.sin(-this.rotation);
        const dx = px - this.x;
        const dy = py - this.y;
        const localX = (cos * dx - sin * dy) / this.scale;
        const localY = (sin * dx + cos * dy) / this.scale;

        return (
            localX >= -this.width / 2 &&
            localX <= this.width / 2 &&
            localY >= -this.height / 2 &&
            localY <= this.height / 2
        );
    }
}

class TextLayer extends Layer {
    constructor(text = 'MEME TEXT', x = 400, y = 100) {
        super('text');
        this.text = text;
        this.x = x;
        this.y = y;
        this.fontSize = 48;
        this.fontFamily = 'Impact';
        this.fill = '#ffffff';
        this.stroke = '#000000';
        this.strokeWidth = 5;
        this.align = 'center';
        this.allCaps = true;
        this.shadow = true;
        this.hasBg = false;
        this.bgColor = '#000000';
        this.bgOpacity = 0.75;
        this.letterSpacing = 1;
        this.width = 200;
        this.height = 60;
    }

    render(ctx) {
        if (!this.visible || !this.text) return;

        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.scale(this.scale, this.scale);

        const displayText = this.allCaps ? this.text.toUpperCase() : this.text;
        const lines = displayText.split('\n');
        
        ctx.font = `bold ${this.fontSize}px "${this.fontFamily}", Impact, sans-serif`;
        ctx.textAlign = this.align;
        ctx.textBaseline = 'middle';

        // Calculate text bounding dimensions
        let maxWidth = 0;
        const lineHeight = this.fontSize * 1.15;
        lines.forEach(line => {
            const metrics = ctx.measureText(line);
            if (metrics.width > maxWidth) maxWidth = metrics.width;
        });

        this.width = maxWidth + 40;
        this.height = lines.length * lineHeight + 20;

        // Render Background Banner Box if enabled
        if (this.hasBg) {
            ctx.save();
            ctx.globalAlpha = this.bgOpacity;
            ctx.fillStyle = this.bgColor;
            const startX = this.align === 'center' ? -this.width / 2 : this.align === 'left' ? -20 : -this.width + 20;
            ctx.fillRect(startX, -this.height / 2, this.width, this.height);
            ctx.restore();
        }

        // Render Shadows if enabled
        if (this.shadow) {
            ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
            ctx.shadowBlur = 10;
            ctx.shadowOffsetX = 3;
            ctx.shadowOffsetY = 3;
        }

        // Render Lines
        const startY = -(lines.length - 1) * lineHeight / 2;
        lines.forEach((line, i) => {
            const curY = startY + (i * lineHeight);

            // Stroke first for thick outline
            if (this.strokeWidth > 0) {
                ctx.strokeStyle = this.stroke;
                ctx.lineWidth = this.strokeWidth;
                ctx.lineJoin = 'miter';
                ctx.miterLimit = 2;
                ctx.strokeText(line, 0, curY);
            }

            // Fill text
            ctx.fillStyle = this.fill;
            ctx.fillText(line, 0, curY);
        });

        ctx.restore();
    }
}

class StickerLayer extends Layer {
    constructor(content, x = 400, y = 400, isEmoji = true) {
        super('sticker');
        this.content = content; // emoji character or HTMLImageElement
        this.isEmoji = isEmoji;
        this.x = x;
        this.y = y;
        this.fontSize = 80;
        this.width = 90;
        this.height = 90;
        this.flipH = false;
        this.flipV = false;
        this.opacity = 1;
    }

    render(ctx) {
        if (!this.visible) return;

        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.scale(this.scale * (this.flipH ? -1 : 1), this.scale * (this.flipV ? -1 : 1));
        ctx.globalAlpha = this.opacity;

        if (this.isEmoji) {
            ctx.font = `${this.fontSize}px "Segoe UI Emoji", "Apple Color Emoji", sans-serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(this.content, 0, 0);
        } else if (this.content instanceof Image || this.content instanceof HTMLCanvasElement) {
            ctx.drawImage(this.content, -this.width / 2, -this.height / 2, this.width, this.height);
        }

        ctx.restore();
    }
}

class ShapeLayer extends Layer {
    constructor(shapeType = 'arrow', x = 400, y = 400) {
        super('shape');
        this.shapeType = shapeType;
        this.x = x;
        this.y = y;
        this.width = 120;
        this.height = 120;
        this.color = '#ef4444';
        this.strokeWidth = 6;
    }

    render(ctx) {
        if (!this.visible) return;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.scale(this.scale, this.scale);

        ctx.strokeStyle = this.color;
        ctx.fillStyle = this.color;
        ctx.lineWidth = this.strokeWidth;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        if (this.shapeType === 'arrow') {
            // Draw prominent meme indicator arrow
            ctx.beginPath();
            ctx.moveTo(-this.width / 2, 0);
            ctx.lineTo(this.width / 4, 0);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(this.width / 4, -this.height / 3);
            ctx.lineTo(this.width / 2, 0);
            ctx.lineTo(this.width / 4, this.height / 3);
            ctx.closePath();
            ctx.fill();
        } else if (this.shapeType === 'circle') {
            ctx.beginPath();
            ctx.ellipse(0, 0, this.width / 2, this.height / 2, 0, 0, Math.PI * 2);
            ctx.stroke();
        } else if (this.shapeType === 'speech') {
            // Speech bubble
            ctx.fillStyle = '#ffffff';
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.roundRect(-this.width / 2, -this.height / 2, this.width, this.height * 0.75, 16);
            ctx.fill();
            ctx.stroke();
            // Tail
            ctx.beginPath();
            ctx.moveTo(-10, this.height * 0.25);
            ctx.lineTo(0, this.height * 0.5);
            ctx.lineTo(15, this.height * 0.25);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        }

        ctx.restore();
    }
}

// --- Main Application Controller ---
const MemeStudio = {
    canvas: null,
    ctx: null,
    stageWrapper: null,

    // Dimensions & Transform
    canvasWidth: 800,
    canvasHeight: 800,
    zoomLevel: 1.0,
    aspectRatio: 'original',

    // State
    backgroundImage: null,
    backgroundTemplate: null,
    layers: [],
    activeLayer: null,
    drawingPaths: [], // Freehand brush strokes { points: [], color, size }
    currentDrawingPath: null,

    // Interaction State
    dragMode: 'none', // 'none', 'move', 'rotate', 'scale', 'draw'
    activeHandle: null,
    dragStart: { x: 0, y: 0 },
    initialLayerProps: null,
    activeToolMode: 'select', // 'select', 'brush', 'laser'

    // History (Undo / Redo)
    history: [],
    historyIndex: -1,
    maxHistory: 30,

    // Filters
    filters: {
        brightness: 100,
        contrast: 100,
        saturation: 100,
        sepia: 0,
        blur: 0,
        invert: 0,
        flipH: false,
        flipV: false,
        rotationDeg: 0
    },

    init() {
        this.canvas = document.getElementById('memeCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.stageWrapper = document.getElementById('canvasStageWrapper');

        this.setupTemplates();
        this.setupStickers();
        this.bindEvents();
        this.bindShortcuts();
        
        // Load Starter Template on launch
        this.loadTemplate('drake');
        this.saveState();
    },

    // --- Templates & Asset Setup ---
    setupTemplates() {
        const grid = document.getElementById('templateGrid');
        grid.innerHTML = '';

        MEME_TEMPLATES.forEach(tmpl => {
            const card = document.createElement('div');
            card.className = 'template-card';
            card.dataset.id = tmpl.id;
            card.title = tmpl.name;

            // Generate miniature thumbnail canvas
            const thumb = document.createElement('canvas');
            thumb.width = 160;
            thumb.height = 160;
            const tCtx = thumb.getContext('2d');
            tmpl.render(tCtx, 160, 160);

            const title = document.createElement('div');
            title.className = 'template-card-title';
            title.textContent = tmpl.name;

            card.appendChild(thumb);
            card.appendChild(title);

            card.addEventListener('click', () => {
                document.querySelectorAll('.template-card').forEach(c => c.classList.remove('active'));
                card.classList.add('active');
                this.loadTemplate(tmpl.id);
            });

            grid.appendChild(card);
        });

        // Template Search Filter
        const searchInput = document.getElementById('templateSearchInput');
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            const cards = grid.querySelectorAll('.template-card');
            let count = 0;
            cards.forEach(card => {
                const title = card.title.toLowerCase();
                const match = title.includes(query);
                card.style.display = match ? 'flex' : 'none';
                if (match) count++;
            });
            document.getElementById('templateCountBadge').textContent = `${count} templates`;
        });
    },

    setupStickers() {
        const matrix = document.getElementById('stickerMatrix');
        const renderCategory = (category) => {
            matrix.innerHTML = '';
            const list = STICKER_CATALOG[category] || STICKER_CATALOG.memes;
            list.forEach(emoji => {
                const el = document.createElement('div');
                el.className = 'sticker-elem';
                el.textContent = emoji;
                el.addEventListener('click', () => {
                    this.addStickerLayer(emoji, true);
                });
                matrix.appendChild(el);
            });
        };

        renderCategory('memes');

        // Tab category buttons
        const catTabs = document.getElementById('stickerCategoryTabs');
        catTabs.addEventListener('click', (e) => {
            const btn = e.target.closest('.sticker-cat-btn');
            if (!btn) return;
            catTabs.querySelectorAll('.sticker-cat-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderCategory(btn.dataset.cat);
        });
    },

    // --- Template & Image Loading ---
    loadTemplate(templateId) {
        const tmpl = MEME_TEMPLATES.find(t => t.id === templateId);
        if (!tmpl) return;

        this.backgroundTemplate = tmpl;
        this.backgroundImage = null;

        // Set dimensions based on aspect ratio
        if (tmpl.aspect === '16:9') {
            this.setCanvasDimensions(960, 540);
        } else if (tmpl.aspect === '9:16') {
            this.setCanvasDimensions(540, 960);
        } else {
            this.setCanvasDimensions(800, 800);
        }

        // Clear existing layers and add template default texts
        this.layers = [];
        this.drawingPaths = [];

        tmpl.defaultTexts.forEach(dt => {
            const tl = new TextLayer(dt.text, this.canvasWidth * dt.xRatio, this.canvasHeight * dt.yRatio);
            if (this.canvasWidth < 600) tl.fontSize = 32;
            this.layers.push(tl);
        });

        this.activeLayer = this.layers[0] || null;
        this.hidePlaceholder();
        this.syncUIWithActiveLayer();
        this.updateLayersPanel();
        this.render();
        this.saveState();
        this.showToast(`Loaded "${tmpl.name}"`, 'info');
    },

    loadImageFromFile(file) {
        if (!file || !file.type.startsWith('image/')) {
            this.showToast('Please select a valid image file', 'warning');
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                this.backgroundImage = img;
                this.backgroundTemplate = null;

                // Scale canvas to image source up to max 1200px
                let w = img.width;
                let h = img.height;
                const maxDim = 1200;
                if (w > maxDim || h > maxDim) {
                    if (w > h) {
                        h = Math.round((h * maxDim) / w);
                        w = maxDim;
                    } else {
                        w = Math.round((w * maxDim) / h);
                        h = maxDim;
                    }
                }

                this.setCanvasDimensions(w, h);
                this.layers = [];
                this.drawingPaths = [];

                // Add Standard Top and Bottom Text Layers
                const topText = new TextLayer('TOP TEXT', w / 2, h * 0.12);
                topText.fontSize = Math.round(w * 0.08);
                const bottomText = new TextLayer('BOTTOM TEXT', w / 2, h * 0.88);
                bottomText.fontSize = Math.round(w * 0.08);

                this.layers.push(topText, bottomText);
                this.activeLayer = topText;

                this.hidePlaceholder();
                this.syncUIWithActiveLayer();
                this.updateLayersPanel();
                this.render();
                this.saveState();
                this.showToast('Custom image loaded successfully!', 'success');
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    },

    setCanvasDimensions(w, h) {
        this.canvasWidth = w;
        this.canvasHeight = h;
        this.canvas.width = w;
        this.canvas.height = h;
        this.canvas.style.width = `${w}px`;
        this.canvas.style.height = `${h}px`;
        if (this.stageWrapper) {
            this.stageWrapper.style.width = `${w}px`;
            this.stageWrapper.style.height = `${h}px`;
        }
        this.fitCanvasToScreen();
    },

    hidePlaceholder() {
        const overlay = document.getElementById('placeholderOverlay');
        if (overlay) overlay.style.display = 'none';
    },

    // --- Layer Operations ---
    addTextLayer(initialText = 'NEW CAPTION') {
        const x = this.canvasWidth / 2;
        const y = this.canvasHeight / 2 + (Math.random() * 40 - 20);
        const textLayer = new TextLayer(initialText, x, y);
        textLayer.fontSize = Math.round(this.canvasWidth * 0.07);
        this.layers.push(textLayer);
        this.activeLayer = textLayer;

        this.syncUIWithActiveLayer();
        this.updateLayersPanel();
        this.render();
        this.saveState();
        this.showToast('Text layer added', 'info');
    },

    addStickerLayer(content, isEmoji = true) {
        const x = this.canvasWidth / 2 + (Math.random() * 60 - 30);
        const y = this.canvasHeight / 2 + (Math.random() * 60 - 30);
        const sticker = new StickerLayer(content, x, y, isEmoji);
        sticker.fontSize = Math.round(this.canvasWidth * 0.14);
        sticker.width = sticker.fontSize * 1.1;
        sticker.height = sticker.fontSize * 1.1;

        this.layers.push(sticker);
        this.activeLayer = sticker;

        this.updateLayersPanel();
        this.render();
        this.saveState();
        this.showToast('Sticker added', 'info');
    },

    addShapeLayer(shapeType) {
        const x = this.canvasWidth / 2;
        const y = this.canvasHeight / 2;
        const shape = new ShapeLayer(shapeType, x, y);
        shape.width = Math.round(this.canvasWidth * 0.2);
        shape.height = Math.round(this.canvasWidth * 0.2);

        this.layers.push(shape);
        this.activeLayer = shape;

        this.updateLayersPanel();
        this.render();
        this.saveState();
        this.showToast(`${shapeType.toUpperCase()} added`, 'info');
    },

    deleteActiveLayer() {
        if (!this.activeLayer) return;
        const index = this.layers.indexOf(this.activeLayer);
        if (index > -1) {
            this.layers.splice(index, 1);
            this.activeLayer = this.layers[this.layers.length - 1] || null;
            this.syncUIWithActiveLayer();
            this.updateLayersPanel();
            this.render();
            this.saveState();
            this.showToast('Layer deleted', 'info');
        }
    },

    duplicateActiveLayer() {
        if (!this.activeLayer) return;
        const l = this.activeLayer;
        let clone;
        if (l instanceof TextLayer) {
            clone = new TextLayer(l.text, l.x + 20, l.y + 20);
            clone.fontSize = l.fontSize;
            clone.fontFamily = l.fontFamily;
            clone.fill = l.fill;
            clone.stroke = l.stroke;
            clone.strokeWidth = l.strokeWidth;
            clone.align = l.align;
            clone.allCaps = l.allCaps;
            clone.shadow = l.shadow;
            clone.hasBg = l.hasBg;
            clone.bgColor = l.bgColor;
            clone.bgOpacity = l.bgOpacity;
        } else if (l instanceof StickerLayer) {
            clone = new StickerLayer(l.content, l.x + 20, l.y + 20, l.isEmoji);
            clone.fontSize = l.fontSize;
            clone.width = l.width;
            clone.height = l.height;
            clone.flipH = l.flipH;
            clone.flipV = l.flipV;
        } else if (l instanceof ShapeLayer) {
            clone = new ShapeLayer(l.shapeType, l.x + 20, l.y + 20);
            clone.width = l.width;
            clone.height = l.height;
            clone.color = l.color;
            clone.strokeWidth = l.strokeWidth;
        }

        if (clone) {
            this.layers.push(clone);
            this.activeLayer = clone;
            this.syncUIWithActiveLayer();
            this.updateLayersPanel();
            this.render();
            this.saveState();
            this.showToast('Layer duplicated', 'info');
        }
    },

    // --- Rendering Pipeline ---
    render() {
        if (!this.ctx) return;

        // 1. Clear Stage
        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

        // 2. Draw Background with Filters
        this.ctx.save();
        this.applyCanvasFilters(this.ctx);

        if (this.backgroundTemplate) {
            this.backgroundTemplate.render(this.ctx, this.canvasWidth, this.canvasHeight);
        } else if (this.backgroundImage) {
            this.ctx.drawImage(this.backgroundImage, 0, 0, this.canvasWidth, this.canvasHeight);
        } else {
            // Dark checkerboard
            this.ctx.fillStyle = '#1e293b';
            this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
        }
        this.ctx.restore();

        // 3. Render Freehand Drawing Paths
        this.renderDrawings(this.ctx);

        // 4. Render Layers Stack
        this.layers.forEach(layer => {
            layer.render(this.ctx);
        });

        // 5. Render Active Layer Transform Handles (Overlay)
        if (this.activeLayer && this.activeToolMode === 'select') {
            this.renderTransformOverlay(this.ctx, this.activeLayer);
        }
    },

    applyCanvasFilters(ctx) {
        const f = this.filters;
        ctx.filter = `brightness(${f.brightness}%) contrast(${f.contrast}%) saturate(${f.saturation}%) sepia(${f.sepia}%) blur(${f.blur}px) invert(${f.invert}%)`;

        // Handle transforms (Flips & Rotations)
        if (f.flipH || f.flipV || f.rotationDeg !== 0) {
            ctx.translate(this.canvasWidth / 2, this.canvasHeight / 2);
            ctx.rotate((f.rotationDeg * Math.PI) / 180);
            ctx.scale(f.flipH ? -1 : 1, f.flipV ? -1 : 1);
            ctx.translate(-this.canvasWidth / 2, -this.canvasHeight / 2);
        }
    },

    renderDrawings(ctx) {
        ctx.save();
        this.drawingPaths.forEach(path => {
            if (path.points.length < 2) return;
            ctx.strokeStyle = path.color;
            ctx.lineWidth = path.size;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.beginPath();
            ctx.moveTo(path.points[0].x, path.points[0].y);
            for (let i = 1; i < path.points.length; i++) {
                ctx.lineTo(path.points[i].x, path.points[i].y);
            }
            ctx.stroke();
        });
        ctx.restore();
    },

    renderTransformOverlay(ctx, layer) {
        ctx.save();
        ctx.translate(layer.x, layer.y);
        ctx.rotate(layer.rotation);
        ctx.scale(layer.scale, layer.scale);

        const w = layer.width;
        const h = layer.height;
        const halfW = w / 2;
        const halfH = h / 2;

        // Bounding Box
        ctx.strokeStyle = '#ef4444';
        ctx.lineWidth = 2 / layer.scale;
        ctx.setLineDash([6 / layer.scale, 4 / layer.scale]);
        ctx.strokeRect(-halfW, -halfH, w, h);
        ctx.setLineDash([]);

        // Handle styling helper
        const handleSize = 10 / layer.scale;
        const drawHandle = (hx, hy) => {
            ctx.fillStyle = '#ffffff';
            ctx.strokeStyle = '#ef4444';
            ctx.lineWidth = 2 / layer.scale;
            ctx.beginPath();
            ctx.arc(hx, hy, handleSize / 2, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
        };

        // 4 Corner Handles
        drawHandle(-halfW, -halfH); // Top-Left
        drawHandle(halfW, -halfH);  // Top-Right
        drawHandle(-halfW, halfH);  // Bottom-Left
        drawHandle(halfW, halfH);   // Bottom-Right

        // Top Rotation Lever
        const leverY = -halfH - (25 / layer.scale);
        ctx.strokeStyle = '#ef4444';
        ctx.lineWidth = 1.5 / layer.scale;
        ctx.beginPath();
        ctx.moveTo(0, -halfH);
        ctx.lineTo(0, leverY);
        ctx.stroke();

        ctx.fillStyle = '#ef4444';
        ctx.strokeStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(0, leverY, (handleSize * 0.7) / 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.restore();
    },

    // --- Interactive Canvas Pointer Engine ---
    getCanvasPoint(e) {
        const rect = this.canvas.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;

        const scaleX = this.canvasWidth / rect.width;
        const scaleY = this.canvasHeight / rect.height;

        return {
            x: (clientX - rect.left) * scaleX,
            y: (clientY - rect.top) * scaleY
        };
    },

    handlePointerDown(e) {
        const pt = this.getCanvasPoint(e);

        if (this.activeToolMode === 'brush') {
            const brushColor = document.getElementById('brushColorPicker').value;
            const brushSize = parseInt(document.getElementById('brushSizeSlider').value, 10);
            this.dragMode = 'draw';
            this.currentDrawingPath = {
                color: brushColor,
                size: brushSize,
                points: [{ x: pt.x, y: pt.y }]
            };
            this.drawingPaths.push(this.currentDrawingPath);
            this.render();
            return;
        }

        if (this.activeToolMode === 'laser') {
            // Drop laser beam dot
            this.addStickerLayer('🔴', true);
            this.activeLayer.x = pt.x;
            this.activeLayer.y = pt.y;
            this.activeLayer.fontSize = 40;
            this.render();
            return;
        }

        // Check if clicked on rotation or scale handles of active layer
        if (this.activeLayer) {
            const handle = this.hitTestHandles(pt.x, pt.y, this.activeLayer);
            if (handle) {
                this.dragMode = handle.type; // 'rotate' or 'scale'
                this.activeHandle = handle;
                this.dragStart = pt;
                this.initialLayerProps = {
                    x: this.activeLayer.x,
                    y: this.activeLayer.y,
                    scale: this.activeLayer.scale,
                    rotation: this.activeLayer.rotation,
                    width: this.activeLayer.width,
                    height: this.activeLayer.height
                };
                return;
            }
        }

        // Hit test layers from top to bottom
        let clickedLayer = null;
        for (let i = this.layers.length - 1; i >= 0; i--) {
            if (this.layers[i].containsPoint(pt.x, pt.y)) {
                clickedLayer = this.layers[i];
                break;
            }
        }

        if (clickedLayer) {
            this.activeLayer = clickedLayer;
            this.dragMode = 'move';
            this.dragStart = pt;
            this.initialLayerProps = { x: clickedLayer.x, y: clickedLayer.y };
            this.syncUIWithActiveLayer();
            this.updateLayersPanel();
        } else {
            this.activeLayer = null;
        }

        this.render();
    },

    handlePointerMove(e) {
        if (this.dragMode === 'none') return;
        const pt = this.getCanvasPoint(e);

        if (this.dragMode === 'draw' && this.currentDrawingPath) {
            this.currentDrawingPath.points.push({ x: pt.x, y: pt.y });
            this.render();
            return;
        }

        if (!this.activeLayer || !this.initialLayerProps) return;

        if (this.dragMode === 'move') {
            const dx = pt.x - this.dragStart.x;
            const dy = pt.y - this.dragStart.y;
            this.activeLayer.x = this.initialLayerProps.x + dx;
            this.activeLayer.y = this.initialLayerProps.y + dy;
            this.render();
        } else if (this.dragMode === 'rotate') {
            const dx = pt.x - this.activeLayer.x;
            const dy = pt.y - this.activeLayer.y;
            let angle = Math.atan2(dy, dx) + Math.PI / 2;
            if (e.shiftKey) {
                // Snap to 15-degree increments
                const step = (15 * Math.PI) / 180;
                angle = Math.round(angle / step) * step;
            }
            this.activeLayer.rotation = angle;
            this.render();
        } else if (this.dragMode === 'scale') {
            const distCurrent = Math.hypot(pt.x - this.activeLayer.x, pt.y - this.activeLayer.y);
            const distInitial = Math.hypot(this.dragStart.x - this.activeLayer.x, this.dragStart.y - this.activeLayer.y);
            const ratio = distCurrent / (distInitial || 1);
            this.activeLayer.scale = Math.max(0.2, this.initialLayerProps.scale * ratio);
            this.render();
        }
    },

    handlePointerUp() {
        if (this.dragMode !== 'none') {
            this.dragMode = 'none';
            this.activeHandle = null;
            this.currentDrawingPath = null;
            this.saveState();
        }
    },

    hitTestHandles(px, py, layer) {
        const cos = Math.cos(-layer.rotation);
        const sin = Math.sin(-layer.rotation);
        const dx = px - layer.x;
        const dy = py - layer.y;
        const localX = (cos * dx - sin * dy) / layer.scale;
        const localY = (sin * dx + cos * dy) / layer.scale;

        const halfW = layer.width / 2;
        const halfH = layer.height / 2;
        const hitRadius = 16 / layer.scale;

        // Check Rotation Lever Handle (Top center)
        const leverY = -halfH - 25;
        if (Math.hypot(localX - 0, localY - leverY) < hitRadius) {
            return { type: 'rotate' };
        }

        // Check 4 corner scale handles
        const corners = [
            { x: -halfW, y: -halfH },
            { x: halfW, y: -halfH },
            { x: -halfW, y: halfH },
            { x: halfW, y: halfH }
        ];

        for (const c of corners) {
            if (Math.hypot(localX - c.x, localY - c.y) < hitRadius) {
                return { type: 'scale' };
            }
        }

        return null;
    },

    // --- History Stack (Undo / Redo) ---
    saveState() {
        const snapshot = JSON.stringify({
            canvasWidth: this.canvasWidth,
            canvasHeight: this.canvasHeight,
            templateId: this.backgroundTemplate ? this.backgroundTemplate.id : null,
            filters: { ...this.filters },
            layers: this.layers.map(l => ({
                type: l.type,
                text: l.text,
                content: l.content,
                isEmoji: l.isEmoji,
                shapeType: l.shapeType,
                x: l.x,
                y: l.y,
                width: l.width,
                height: l.height,
                fontSize: l.fontSize,
                fontFamily: l.fontFamily,
                fill: l.fill,
                stroke: l.stroke,
                strokeWidth: l.strokeWidth,
                align: l.align,
                allCaps: l.allCaps,
                shadow: l.shadow,
                hasBg: l.hasBg,
                bgColor: l.bgColor,
                bgOpacity: l.bgOpacity,
                scale: l.scale,
                rotation: l.rotation,
                visible: l.visible
            })),
            drawingPaths: JSON.parse(JSON.stringify(this.drawingPaths))
        });

        // Truncate forward history if any
        if (this.historyIndex < this.history.length - 1) {
            this.history = this.history.slice(0, this.historyIndex + 1);
        }

        this.history.push(snapshot);
        if (this.history.length > this.maxHistory) {
            this.history.shift();
        }
        this.historyIndex = this.history.length - 1;

        this.updateUndoRedoButtons();
    },

    undo() {
        if (this.historyIndex > 0) {
            this.historyIndex--;
            this.restoreState(this.history[this.historyIndex]);
            this.showToast('Undo', 'info');
        }
    },

    redo() {
        if (this.historyIndex < this.history.length - 1) {
            this.historyIndex++;
            this.restoreState(this.history[this.historyIndex]);
            this.showToast('Redo', 'info');
        }
    },

    restoreState(snapshotJson) {
        const state = JSON.parse(snapshotJson);
        this.canvasWidth = state.canvasWidth;
        this.canvasHeight = state.canvasHeight;
        this.canvas.width = state.canvasWidth;
        this.canvas.height = state.canvasHeight;
        this.filters = state.filters || this.filters;
        this.drawingPaths = state.drawingPaths || [];

        if (state.templateId) {
            this.backgroundTemplate = MEME_TEMPLATES.find(t => t.id === state.templateId) || null;
        }

        this.layers = state.layers.map(sl => {
            let l;
            if (sl.type === 'text') {
                l = new TextLayer(sl.text, sl.x, sl.y);
                l.fontSize = sl.fontSize;
                l.fontFamily = sl.fontFamily;
                l.fill = sl.fill;
                l.stroke = sl.stroke;
                l.strokeWidth = sl.strokeWidth;
                l.align = sl.align;
                l.allCaps = sl.allCaps;
                l.shadow = sl.shadow;
                l.hasBg = sl.hasBg;
                l.bgColor = sl.bgColor;
                l.bgOpacity = sl.bgOpacity;
            } else if (sl.type === 'sticker') {
                l = new StickerLayer(sl.content, sl.x, sl.y, sl.isEmoji);
                l.fontSize = sl.fontSize;
            } else if (sl.type === 'shape') {
                l = new ShapeLayer(sl.shapeType, sl.x, sl.y);
                l.color = sl.fill || '#ef4444';
            }
            if (l) {
                l.width = sl.width;
                l.height = sl.height;
                l.scale = sl.scale;
                l.rotation = sl.rotation;
                l.visible = sl.visible;
            }
            return l;
        }).filter(Boolean);

        this.activeLayer = this.layers[this.layers.length - 1] || null;
        this.syncUIWithActiveLayer();
        this.updateLayersPanel();
        this.updateUndoRedoButtons();
        this.render();
    },

    updateUndoRedoButtons() {
        const undoBtn = document.getElementById('undoBtn');
        const redoBtn = document.getElementById('redoBtn');
        if (undoBtn) undoBtn.disabled = this.historyIndex <= 0;
        if (redoBtn) redoBtn.disabled = this.historyIndex >= this.history.length - 1;
    },

    // --- UI Sync & Controls Binding ---
    syncUIWithActiveLayer() {
        if (!this.activeLayer) return;

        if (this.activeLayer instanceof TextLayer) {
            const textInput = document.getElementById('activeTextInput');
            if (textInput) textInput.value = this.activeLayer.text;

            const fontSizeSlider = document.getElementById('fontSizeSlider');
            if (fontSizeSlider) fontSizeSlider.value = this.activeLayer.fontSize;
            document.getElementById('fontSizeVal').textContent = `${this.activeLayer.fontSize}px`;

            const textColor = document.getElementById('textColorPicker');
            if (textColor) textColor.value = this.activeLayer.fill;

            const strokeColor = document.getElementById('strokeColorPicker');
            if (strokeColor) strokeColor.value = this.activeLayer.stroke;

            const strokeWidth = document.getElementById('strokeWidthSlider');
            if (strokeWidth) strokeWidth.value = this.activeLayer.strokeWidth;
            document.getElementById('strokeWidthVal').textContent = `${this.activeLayer.strokeWidth}px`;

            // Active Font Family Button
            document.querySelectorAll('#fontFamilyGroup .font-btn').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.font === this.activeLayer.fontFamily);
            });

            // Alignment & Style Buttons
            document.querySelectorAll('#alignLeftBtn, #alignCenterBtn, #alignRightBtn').forEach(b => b.classList.remove('active'));
            if (this.activeLayer.align === 'left') document.getElementById('alignLeftBtn').classList.add('active');
            if (this.activeLayer.align === 'center') document.getElementById('alignCenterBtn').classList.add('active');
            if (this.activeLayer.align === 'right') document.getElementById('alignRightBtn').classList.add('active');

            document.getElementById('allCapsBtn').classList.toggle('active', !!this.activeLayer.allCaps);
            document.getElementById('shadowToggleBtn').classList.toggle('active', !!this.activeLayer.shadow);

            // Background Banner
            const textBgToggle = document.getElementById('textBgToggle');
            const textBgColorRow = document.getElementById('textBgColorRow');
            const textBgColorPicker = document.getElementById('textBgColorPicker');
            const textBgOpacitySlider = document.getElementById('textBgOpacitySlider');

            if (textBgToggle) textBgToggle.checked = !!this.activeLayer.hasBg;
            if (textBgColorRow) textBgColorRow.style.display = this.activeLayer.hasBg ? 'flex' : 'none';
            if (textBgColorPicker) textBgColorPicker.value = this.activeLayer.bgColor || '#000000';
            if (textBgOpacitySlider) textBgOpacitySlider.value = this.activeLayer.bgOpacity !== undefined ? this.activeLayer.bgOpacity : 0.75;
        }
    },

    updateLayersPanel() {
        const list = document.getElementById('layersList');
        if (!list) return;
        list.innerHTML = '';

        if (this.layers.length === 0) {
            list.innerHTML = '<div style="color:var(--text-dim);font-size:0.8rem;text-align:center;padding:1rem;">No custom layers added</div>';
            return;
        }

        // Render in reverse order so topmost layer is at top of UI list
        for (let i = this.layers.length - 1; i >= 0; i--) {
            const layer = this.layers[i];
            const row = document.createElement('div');
            row.className = `layer-row ${layer === this.activeLayer ? 'active' : ''}`;

            const info = document.createElement('div');
            info.className = 'layer-info';

            const badge = document.createElement('span');
            badge.className = 'layer-type-badge';
            badge.textContent = layer.type.toUpperCase();

            const name = document.createElement('span');
            name.textContent = layer.type === 'text' ? `"${layer.text.substring(0, 16)}"` : layer.type === 'sticker' ? `Sticker: ${layer.content}` : `Shape: ${layer.shapeType}`;

            info.appendChild(badge);
            info.appendChild(name);

            const actions = document.createElement('div');
            actions.className = 'layer-actions';

            // Visibility toggle
            const visBtn = document.createElement('button');
            visBtn.className = 'layer-action-btn';
            visBtn.innerHTML = layer.visible ? '👁️' : '🙈';
            visBtn.title = 'Toggle Visibility';
            visBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                layer.visible = !layer.visible;
                visBtn.innerHTML = layer.visible ? '👁️' : '🙈';
                this.render();
            });

            // Delete button
            const delBtn = document.createElement('button');
            delBtn.className = 'layer-action-btn delete';
            delBtn.innerHTML = '🗑️';
            delBtn.title = 'Delete Layer';
            delBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.layers.splice(i, 1);
                if (this.activeLayer === layer) {
                    this.activeLayer = this.layers[this.layers.length - 1] || null;
                }
                this.syncUIWithActiveLayer();
                this.updateLayersPanel();
                this.render();
                this.saveState();
            });

            actions.appendChild(visBtn);
            actions.appendChild(delBtn);

            row.appendChild(info);
            row.appendChild(actions);

            row.addEventListener('click', () => {
                this.activeLayer = layer;
                this.syncUIWithActiveLayer();
                this.updateLayersPanel();
                this.render();
            });

            list.appendChild(row);
        }
    },

    fitCanvasToScreen() {
        const viewport = document.getElementById('canvasViewport');
        if (!viewport) return;
        const availableW = viewport.clientWidth - 40;
        const availableH = viewport.clientHeight - 80;

        const scaleW = availableW / this.canvasWidth;
        const scaleH = availableH / this.canvasHeight;
        this.zoomLevel = Math.min(1.0, Math.min(scaleW, scaleH));

        this.applyZoom();
    },

    applyZoom() {
        this.stageWrapper.style.transform = `scale(${this.zoomLevel})`;
        document.getElementById('zoomLevelText').textContent = `${Math.round(this.zoomLevel * 100)}%`;
    },

    // --- Export Engine ---
    exportMeme(format = 'png', scale = 2, quality = 0.92) {
        // Create high-res offscreen canvas
        const exportCanvas = document.createElement('canvas');
        exportCanvas.width = this.canvasWidth * scale;
        exportCanvas.height = this.canvasHeight * scale;
        const eCtx = exportCanvas.getContext('2d');

        eCtx.scale(scale, scale);

        // Apply filters & render background
        eCtx.save();
        this.applyCanvasFilters(eCtx);
        if (this.backgroundTemplate) {
            this.backgroundTemplate.render(eCtx, this.canvasWidth, this.canvasHeight);
        } else if (this.backgroundImage) {
            eCtx.drawImage(this.backgroundImage, 0, 0, this.canvasWidth, this.canvasHeight);
        } else {
            eCtx.fillStyle = '#1e293b';
            eCtx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
        }
        eCtx.restore();

        // Render drawings and layers
        this.renderDrawings(eCtx);
        this.layers.forEach(layer => {
            layer.render(eCtx);
        });

        const mimeType = format === 'jpeg' ? 'image/jpeg' : format === 'webp' ? 'image/webp' : 'image/png';
        const dataUrl = exportCanvas.toDataURL(mimeType, quality);

        return { dataUrl, exportCanvas };
    },

    downloadMeme() {
        const formatBtn = document.querySelector('#exportFormatSegmented .btn-seg-item.active');
        const scaleBtn = document.querySelector('#exportScaleSegmented .btn-seg-item.active');
        const filenameInput = document.getElementById('exportFilenameInput');

        const format = formatBtn ? formatBtn.dataset.format : 'png';
        const scale = scaleBtn ? parseInt(scaleBtn.dataset.scale, 10) : 2;
        const filename = (filenameInput ? filenameInput.value.trim() : 'MemeStudio-Meme') || 'MemeStudio-Meme';

        const { dataUrl } = this.exportMeme(format, scale);

        const link = document.createElement('a');
        link.download = `${filename}.${format === 'jpeg' ? 'jpg' : format}`;
        link.href = dataUrl;
        link.click();

        this.closeModal('exportModal');
        this.showToast('Meme exported and downloaded!', 'success');
    },

    async copyMemeToClipboard() {
        try {
            const { exportCanvas } = this.exportMeme('png', 2);
            exportCanvas.toBlob(async (blob) => {
                if (!blob) throw new Error('Blob creation failed');
                await navigator.clipboard.write([
                    new ClipboardItem({ 'image/png': blob })
                ]);
                this.showToast('Copied meme image directly to clipboard! Ready to paste.', 'success');
            }, 'image/png');
        } catch (err) {
            console.warn('Direct image clipboard failed, fallback to data url copying:', err);
            const { dataUrl } = this.exportMeme('png', 1);
            await navigator.clipboard.writeText(dataUrl);
            this.showToast('Copied Meme Data URL to clipboard!', 'info');
        }
    },

    // --- Toast & Notifications ---
    showToast(message, type = 'info') {
        const container = document.getElementById('toastContainer');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.textContent = message;

        container.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(10px)';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    },

    openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) modal.classList.add('open');
    },

    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) modal.classList.remove('open');
    },

    // --- Event Listeners Binding ---
    bindEvents() {
        // Tab Switcher
        const tabBtns = document.querySelectorAll('.tool-tabs-bar .tab-btn');
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                tabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const targetTab = btn.dataset.tab;
                document.querySelectorAll('.tool-tab-content').forEach(content => {
                    content.classList.toggle('active', content.id === `tab-${targetTab}`);
                });
            });
        });

        // Dropzone and Custom Image Upload
        const dropzone = document.getElementById('dropzoneUpload');
        const fileInput = document.getElementById('fileInput');

        dropzone.addEventListener('click', () => fileInput.click());
        fileInput.addEventListener('change', (e) => {
            if (e.target.files && e.target.files[0]) {
                this.loadImageFromFile(e.target.files[0]);
            }
        });

        // Drag & Drop onto dropzone and canvas
        ['dragenter', 'dragover'].forEach(name => {
            window.addEventListener(name, (e) => {
                e.preventDefault();
                dropzone.classList.add('dragover');
            });
        });

        ['dragleave', 'drop'].forEach(name => {
            window.addEventListener(name, (e) => {
                e.preventDefault();
                dropzone.classList.remove('dragover');
            });
        });

        window.addEventListener('drop', (e) => {
            if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                this.loadImageFromFile(e.dataTransfer.files[0]);
            }
        });

        // Global Paste Listener (Ctrl+V)
        window.addEventListener('paste', (e) => {
            const items = e.clipboardData.items;
            for (let i = 0; i < items.length; i++) {
                if (items[i].type.indexOf('image') !== -1) {
                    const blob = items[i].getAsFile();
                    this.loadImageFromFile(blob);
                    break;
                }
            }
        });

        // Canvas Pointer Listeners
        this.canvas.addEventListener('mousedown', (e) => this.handlePointerDown(e));
        window.addEventListener('mousemove', (e) => this.handlePointerMove(e));
        window.addEventListener('mouseup', () => this.handlePointerUp());

        // Touch Listeners
        this.canvas.addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.handlePointerDown(e);
        }, { passive: false });
        window.addEventListener('touchmove', (e) => this.handlePointerMove(e));
        window.addEventListener('touchend', () => this.handlePointerUp());

        // Text Editing Events
        const activeTextInput = document.getElementById('activeTextInput');
        activeTextInput.addEventListener('input', (e) => {
            if (this.activeLayer && this.activeLayer instanceof TextLayer) {
                this.activeLayer.text = e.target.value;
                this.render();
            }
        });

        document.getElementById('addTextLayerBtn').addEventListener('click', () => this.addTextLayer());

        // Quick Layout Buttons
        document.getElementById('quickTopBottomBtn').addEventListener('click', () => {
            const top = new TextLayer('TOP TEXT', this.canvasWidth / 2, this.canvasHeight * 0.12);
            top.fontSize = Math.round(this.canvasWidth * 0.08);
            const bottom = new TextLayer('BOTTOM TEXT', this.canvasWidth / 2, this.canvasHeight * 0.88);
            bottom.fontSize = Math.round(this.canvasWidth * 0.08);
            this.layers.push(top, bottom);
            this.activeLayer = top;
            this.syncUIWithActiveLayer();
            this.updateLayersPanel();
            this.render();
            this.saveState();
        });

        document.getElementById('quickHeaderBoxBtn').addEventListener('click', () => {
            const header = new TextLayer('BREAKING NEWS', this.canvasWidth / 2, this.canvasHeight * 0.15);
            header.hasBg = true;
            header.bgColor = '#ef4444';
            header.fontSize = Math.round(this.canvasWidth * 0.07);
            this.layers.push(header);
            this.activeLayer = header;
            this.syncUIWithActiveLayer();
            this.updateLayersPanel();
            this.render();
            this.saveState();
        });

        // Font Family Picker
        document.getElementById('fontFamilyGroup').addEventListener('click', (e) => {
            const btn = e.target.closest('.font-btn');
            if (!btn || !this.activeLayer || !(this.activeLayer instanceof TextLayer)) return;
            document.querySelectorAll('#fontFamilyGroup .font-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            this.activeLayer.fontFamily = btn.dataset.font;
            this.render();
            this.saveState();
        });

        // Font Size Slider
        const fontSizeSlider = document.getElementById('fontSizeSlider');
        fontSizeSlider.addEventListener('input', (e) => {
            if (this.activeLayer && this.activeLayer instanceof TextLayer) {
                this.activeLayer.fontSize = parseInt(e.target.value, 10);
                document.getElementById('fontSizeVal').textContent = `${e.target.value}px`;
                this.render();
            }
        });

        // Text Colors
        document.getElementById('textColorPicker').addEventListener('input', (e) => {
            if (this.activeLayer && this.activeLayer instanceof TextLayer) {
                this.activeLayer.fill = e.target.value;
                this.render();
            }
        });
        document.querySelectorAll('[data-color]').forEach(dot => {
            dot.addEventListener('click', () => {
                if (this.activeLayer && this.activeLayer instanceof TextLayer) {
                    this.activeLayer.fill = dot.dataset.color;
                    document.getElementById('textColorPicker').value = dot.dataset.color;
                    this.render();
                    this.saveState();
                }
            });
        });

        // Stroke Settings
        document.getElementById('strokeColorPicker').addEventListener('input', (e) => {
            if (this.activeLayer && this.activeLayer instanceof TextLayer) {
                this.activeLayer.stroke = e.target.value;
                this.render();
            }
        });
        document.getElementById('strokeWidthSlider').addEventListener('input', (e) => {
            if (this.activeLayer && this.activeLayer instanceof TextLayer) {
                this.activeLayer.strokeWidth = parseInt(e.target.value, 10);
                document.getElementById('strokeWidthVal').textContent = `${e.target.value}px`;
                this.render();
            }
        });

        // Preset Stroke Color Dots
        document.querySelectorAll('[data-stroke]').forEach(dot => {
            dot.addEventListener('click', () => {
                if (this.activeLayer && this.activeLayer instanceof TextLayer) {
                    this.activeLayer.stroke = dot.dataset.stroke;
                    document.getElementById('strokeColorPicker').value = dot.dataset.stroke;
                    this.render();
                    this.saveState();
                }
            });
        });

        // Alignment & Case Buttons
        document.getElementById('alignLeftBtn').addEventListener('click', () => this.setTextAlign('left'));
        document.getElementById('alignCenterBtn').addEventListener('click', () => this.setTextAlign('center'));
        document.getElementById('alignRightBtn').addEventListener('click', () => this.setTextAlign('right'));
        document.getElementById('allCapsBtn').addEventListener('click', (e) => {
            if (this.activeLayer && this.activeLayer instanceof TextLayer) {
                this.activeLayer.allCaps = !this.activeLayer.allCaps;
                e.target.classList.toggle('active', this.activeLayer.allCaps);
                this.render();
                this.saveState();
            }
        });

        // Drop Shadow Toggle
        document.getElementById('shadowToggleBtn').addEventListener('click', (e) => {
            if (this.activeLayer && this.activeLayer instanceof TextLayer) {
                this.activeLayer.shadow = !this.activeLayer.shadow;
                e.target.classList.toggle('active', this.activeLayer.shadow);
                this.render();
                this.saveState();
            }
        });

        // Text Background Banner Toggle
        const textBgToggle = document.getElementById('textBgToggle');
        const textBgColorRow = document.getElementById('textBgColorRow');
        const textBgColorPicker = document.getElementById('textBgColorPicker');
        const textBgOpacitySlider = document.getElementById('textBgOpacitySlider');

        textBgToggle.addEventListener('change', (e) => {
            if (this.activeLayer && this.activeLayer instanceof TextLayer) {
                this.activeLayer.hasBg = e.target.checked;
                textBgColorRow.style.display = e.target.checked ? 'flex' : 'none';
                this.render();
                this.saveState();
            }
        });

        textBgColorPicker.addEventListener('input', (e) => {
            if (this.activeLayer && this.activeLayer instanceof TextLayer) {
                this.activeLayer.bgColor = e.target.value;
                this.render();
            }
        });

        textBgOpacitySlider.addEventListener('input', (e) => {
            if (this.activeLayer && this.activeLayer instanceof TextLayer) {
                this.activeLayer.bgOpacity = parseFloat(e.target.value);
                this.render();
            }
        });

        // Shapes & Props
        document.getElementById('addRedArrowBtn').addEventListener('click', () => this.addShapeLayer('arrow'));
        document.getElementById('addRedCircleBtn').addEventListener('click', () => this.addShapeLayer('circle'));
        document.getElementById('addSpeechBubbleBtn').addEventListener('click', () => this.addShapeLayer('speech'));
        document.getElementById('addThugGlassesBtn').addEventListener('click', () => this.addStickerLayer('🕶️', true));

        // Draw Modes
        const drawSegmented = document.getElementById('drawModeSegmented');
        drawSegmented.addEventListener('click', (e) => {
            const btn = e.target.closest('.btn-seg-item');
            if (!btn) return;
            drawSegmented.querySelectorAll('.btn-seg-item').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            this.activeToolMode = btn.dataset.mode;
            this.canvas.style.cursor = this.activeToolMode === 'brush' ? 'crosshair' : 'default';
        });

        document.getElementById('clearDrawingBtn').addEventListener('click', () => {
            this.drawingPaths = [];
            this.render();
            this.saveState();
            this.showToast('Drawings cleared', 'info');
        });

        // Filter Sliders
        const bindFilterSlider = (id, key, unit, badgeId) => {
            const slider = document.getElementById(id);
            slider.addEventListener('input', (e) => {
                this.filters[key] = parseInt(e.target.value, 10);
                document.getElementById(badgeId).textContent = `${e.target.value}${unit}`;
                this.render();
            });
        };

        bindFilterSlider('filterBrightness', 'brightness', '%', 'valBrightness');
        bindFilterSlider('filterContrast', 'contrast', '%', 'valContrast');
        bindFilterSlider('filterSaturation', 'saturation', '%', 'valSaturation');
        bindFilterSlider('filterSepia', 'sepia', '%', 'valSepia');
        bindFilterSlider('filterBlur', 'blur', 'px', 'valBlur');
        bindFilterSlider('filterInvert', 'invert', '%', 'valInvert');

        // Filter Flips
        document.getElementById('flipHBtn').addEventListener('click', () => {
            this.filters.flipH = !this.filters.flipH;
            this.render();
            this.saveState();
        });
        document.getElementById('flipVBtn').addEventListener('click', () => {
            this.filters.flipV = !this.filters.flipV;
            this.render();
            this.saveState();
        });
        document.getElementById('rotate90Btn').addEventListener('click', () => {
            this.filters.rotationDeg = (this.filters.rotationDeg + 90) % 360;
            this.render();
            this.saveState();
        });

        document.getElementById('resetFiltersBtn').addEventListener('click', () => {
            this.filters = { brightness: 100, contrast: 100, saturation: 100, sepia: 0, blur: 0, invert: 0, flipH: false, flipV: false, rotationDeg: 0 };
            document.getElementById('filterBrightness').value = 100;
            document.getElementById('filterContrast').value = 100;
            document.getElementById('filterSaturation').value = 100;
            document.getElementById('filterSepia').value = 0;
            document.getElementById('filterBlur').value = 0;
            document.getElementById('filterInvert').value = 0;
            this.render();
            this.saveState();
            this.showToast('Filters reset', 'info');
        });

        // Filter Presets
        document.querySelectorAll('.filter-preset-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.filter-preset-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const p = btn.dataset.preset;
                if (p === 'deepfried') {
                    this.filters = { ...this.filters, brightness: 130, contrast: 220, saturation: 250, sepia: 20 };
                } else if (p === 'vintage') {
                    this.filters = { ...this.filters, brightness: 90, contrast: 120, saturation: 70, sepia: 60 };
                } else if (p === 'grayscale') {
                    this.filters = { ...this.filters, brightness: 100, contrast: 130, saturation: 0, sepia: 0 };
                } else if (p === 'cyberpunk') {
                    this.filters = { ...this.filters, brightness: 110, contrast: 160, saturation: 200, invert: 10 };
                } else if (p === 'warm') {
                    this.filters = { ...this.filters, brightness: 105, contrast: 110, saturation: 130, sepia: 30 };
                } else {
                    this.filters = { ...this.filters, brightness: 100, contrast: 100, saturation: 100, sepia: 0, blur: 0, invert: 0 };
                }
                this.render();
                this.saveState();
            });
        });

        // Zoom Controls
        document.getElementById('zoomInBtn').addEventListener('click', () => {
            this.zoomLevel = Math.min(2.5, this.zoomLevel + 0.15);
            this.applyZoom();
        });
        document.getElementById('zoomOutBtn').addEventListener('click', () => {
            this.zoomLevel = Math.max(0.3, this.zoomLevel - 0.15);
            this.applyZoom();
        });
        document.getElementById('zoomFitBtn').addEventListener('click', () => this.fitCanvasToScreen());

        // Quick & Modal Export Buttons
        document.getElementById('quickCopyBtn').addEventListener('click', () => this.copyMemeToClipboard());
        document.getElementById('openExportModalBtn').addEventListener('click', () => this.openModal('exportModal'));
        document.getElementById('closeExportModalBtn').addEventListener('click', () => this.closeModal('exportModal'));
        document.getElementById('modalDownloadBtn').addEventListener('click', () => this.downloadMeme());
        document.getElementById('modalCopyBtn').addEventListener('click', () => this.copyMemeToClipboard());

        // Segmented export options
        ['exportFormatSegmented', 'exportScaleSegmented'].forEach(id => {
            const seg = document.getElementById(id);
            seg.addEventListener('click', (e) => {
                const btn = e.target.closest('.btn-seg-item');
                if (!btn) return;
                seg.querySelectorAll('.btn-seg-item').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });

        // Layer Action Buttons in Floating Bar
        document.getElementById('deleteSelectedBtn').addEventListener('click', () => this.deleteActiveLayer());
        document.getElementById('duplicateLayerBtn').addEventListener('click', () => this.duplicateActiveLayer());

        // Undo & Redo
        document.getElementById('undoBtn').addEventListener('click', () => this.undo());
        document.getElementById('redoBtn').addEventListener('click', () => this.redo());

        // Reset All
        document.getElementById('clearAllBtn').addEventListener('click', () => {
            if (confirm('Are you sure you want to reset and start a fresh meme?')) {
                this.layers = [];
                this.drawingPaths = [];
                this.loadTemplate('drake');
                this.showToast('Studio reset', 'info');
            }
        });

        // Placeholder Screen Starter Actions
        document.getElementById('placeholderUploadBtn').addEventListener('click', () => fileInput.click());
        document.getElementById('placeholderStarterMemeBtn').addEventListener('click', () => this.loadTemplate('drake'));

        // Aspect Ratio Selector
        document.getElementById('aspectRatioSelect').addEventListener('change', (e) => {
            const val = e.target.value;
            if (val === '1:1') this.setCanvasDimensions(800, 800);
            else if (val === '9:16') this.setCanvasDimensions(540, 960);
            else if (val === '16:9') this.setCanvasDimensions(960, 540);
            else if (val === '4:5') this.setCanvasDimensions(800, 1000);
            this.render();
            this.saveState();
        });

        // Custom Sticker Upload
        const stickerFileInput = document.getElementById('stickerFileInput');
        document.getElementById('uploadCustomStickerBtn').addEventListener('click', () => stickerFileInput.click());
        stickerFileInput.addEventListener('change', (e) => {
            if (e.target.files && e.target.files[0]) {
                const file = e.target.files[0];
                const reader = new FileReader();
                reader.onload = (ev) => {
                    const img = new Image();
                    img.onload = () => {
                        this.addStickerLayer(img, false);
                    };
                    img.src = ev.target.result;
                };
                reader.readAsDataURL(file);
            }
        });

        // Random Meme Idea Generator
        document.getElementById('randomMemeBtn').addEventListener('click', () => {
            const randomTmpl = MEME_TEMPLATES[Math.floor(Math.random() * MEME_TEMPLATES.length)];
            this.loadTemplate(randomTmpl.id);
            this.showToast(`Switched to random template: ${randomTmpl.name}!`, 'info');
        });

        // Window Resize auto-fit
        window.addEventListener('resize', () => this.fitCanvasToScreen());
    },

    setTextAlign(align) {
        if (this.activeLayer && this.activeLayer instanceof TextLayer) {
            this.activeLayer.align = align;
            document.querySelectorAll('#alignLeftBtn, #alignCenterBtn, #alignRightBtn').forEach(b => b.classList.remove('active'));
            if (align === 'left') document.getElementById('alignLeftBtn').classList.add('active');
            if (align === 'center') document.getElementById('alignCenterBtn').classList.add('active');
            if (align === 'right') document.getElementById('alignRightBtn').classList.add('active');
            this.render();
            this.saveState();
        }
    },

    // --- Keyboard Shortcuts ---
    bindShortcuts() {
        window.addEventListener('keydown', (e) => {
            // Ignore if typing inside text input or textarea
            if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z') {
                if (e.shiftKey) this.redo();
                else this.undo();
                e.preventDefault();
            } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'y') {
                this.redo();
                e.preventDefault();
            } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'c') {
                this.copyMemeToClipboard();
                e.preventDefault();
            } else if (e.key === 'Delete' || e.key === 'Backspace') {
                this.deleteActiveLayer();
                e.preventDefault();
            } else if (e.key === 'd' && (e.ctrlKey || e.metaKey)) {
                this.duplicateActiveLayer();
                e.preventDefault();
            }
        });
    }
};

// Launch Studio when DOM is ready
window.addEventListener('DOMContentLoaded', () => {
    MemeStudio.init();
});