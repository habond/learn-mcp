/* MCP Learning Guide - Interactive Features */

document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initCopyButtons();
    initLearnMore();
    initSyntaxHighlighting();
    initKeyboardNavigation();
});

/* ===== Mobile Menu ===== */
function initMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const sidebar = document.querySelector('.sidebar');

    if (!toggle || !sidebar) return;

    toggle.addEventListener('click', function() {
        sidebar.classList.toggle('open');
        toggle.textContent = sidebar.classList.contains('open') ? '\u2715' : '\u2630';
    });

    // Close sidebar when clicking outside
    document.addEventListener('click', function(e) {
        if (sidebar.classList.contains('open') &&
            !sidebar.contains(e.target) &&
            !toggle.contains(e.target)) {
            sidebar.classList.remove('open');
            toggle.textContent = '\u2630';
        }
    });
}

/* ===== Copy Buttons for Code Blocks ===== */
function initCopyButtons() {
    const codeBlocks = document.querySelectorAll('.code-block');

    codeBlocks.forEach(function(block) {
        const copyBtn = block.querySelector('.copy-button');
        const code = block.querySelector('code');

        if (!copyBtn || !code) return;

        copyBtn.addEventListener('click', async function() {
            try {
                await navigator.clipboard.writeText(code.textContent);
                copyBtn.textContent = 'Copied!';
                copyBtn.classList.add('copied');

                setTimeout(function() {
                    copyBtn.textContent = 'Copy';
                    copyBtn.classList.remove('copied');
                }, 2000);
            } catch (err) {
                console.error('Failed to copy:', err);
                copyBtn.textContent = 'Failed';
                setTimeout(function() {
                    copyBtn.textContent = 'Copy';
                }, 2000);
            }
        });
    });
}

/* ===== Learn More Expandables ===== */
function initLearnMore() {
    const learnMoreSections = document.querySelectorAll('.learn-more');

    learnMoreSections.forEach(function(section) {
        const header = section.querySelector('.learn-more-header');

        if (!header) return;

        header.addEventListener('click', function() {
            section.classList.toggle('open');
        });
    });
}

/* ===== Syntax Highlighting ===== */
function initSyntaxHighlighting() {
    // Check if highlight.js is loaded
    if (typeof hljs !== 'undefined') {
        hljs.highlightAll();
    } else {
        // Load highlight.js dynamically
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.min.css';
        document.head.appendChild(link);

        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js';
        script.onload = function() {
            // Load Python language support
            const pythonScript = document.createElement('script');
            pythonScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/python.min.js';
            pythonScript.onload = function() {
                hljs.highlightAll();
            };
            document.head.appendChild(pythonScript);
        };
        document.head.appendChild(script);
    }
}

/* ===== Keyboard Navigation ===== */
function initKeyboardNavigation() {
    document.addEventListener('keydown', function(e) {
        // Alt + Left Arrow = Previous
        if (e.altKey && e.key === 'ArrowLeft') {
            const prevBtn = document.querySelector('.nav-button.prev');
            if (prevBtn) {
                window.location.href = prevBtn.href;
            }
        }

        // Alt + Right Arrow = Next
        if (e.altKey && e.key === 'ArrowRight') {
            const nextBtn = document.querySelector('.nav-button.next');
            if (nextBtn) {
                window.location.href = nextBtn.href;
            }
        }

        // Alt + H = Home
        if (e.altKey && e.key === 'h') {
            window.location.href = '../index.html';
        }
    });
}

/* ===== Progress Tracking (Local Storage) ===== */
const ProgressTracker = {
    STORAGE_KEY: 'mcp-learning-progress',

    getProgress: function() {
        const stored = localStorage.getItem(this.STORAGE_KEY);
        return stored ? JSON.parse(stored) : {};
    },

    markComplete: function(lessonId, stepId) {
        const progress = this.getProgress();
        if (!progress[lessonId]) {
            progress[lessonId] = [];
        }
        if (!progress[lessonId].includes(stepId)) {
            progress[lessonId].push(stepId);
        }
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(progress));
    },

    isComplete: function(lessonId, stepId) {
        const progress = this.getProgress();
        return progress[lessonId] && progress[lessonId].includes(stepId);
    },

    getLessonProgress: function(lessonId, totalSteps) {
        const progress = this.getProgress();
        const completed = progress[lessonId] ? progress[lessonId].length : 0;
        return Math.round((completed / totalSteps) * 100);
    },

    reset: function() {
        localStorage.removeItem(this.STORAGE_KEY);
    }
};

/* ===== Auto-mark current step as visited ===== */
function markCurrentStepVisited() {
    const stepBadge = document.querySelector('.step-badge');
    if (stepBadge) {
        const match = stepBadge.textContent.match(/Lesson (\d+) - Step (\d+)/);
        if (match) {
            const lessonId = 'lesson-' + match[1];
            const stepId = 'step-' + match[2];
            ProgressTracker.markComplete(lessonId, stepId);
            updateProgressUI();
        }
    }
}

/* ===== Update Progress UI ===== */
function updateProgressUI() {
    const progressFill = document.querySelector('.progress-fill');
    const tocLinks = document.querySelectorAll('.toc-link');

    if (!progressFill) return;

    // Get current lesson info from the page
    const stepBadge = document.querySelector('.step-badge');
    if (!stepBadge) return;

    const match = stepBadge.textContent.match(/Lesson (\d+)/);
    if (!match) return;

    const lessonId = 'lesson-' + match[1];
    const totalSteps = tocLinks.length;
    const progress = ProgressTracker.getLessonProgress(lessonId, totalSteps);

    progressFill.style.width = progress + '%';

    // Mark completed steps in TOC (only steps BEFORE the active step)
    // Find the active step index
    let activeIndex = -1;
    tocLinks.forEach(function(link, index) {
        if (link.classList.contains('active')) {
            activeIndex = index;
        }
    });

    // Only mark steps before the active step as completed
    tocLinks.forEach(function(link, index) {
        if (index < activeIndex) {
            link.classList.add('completed');
        }
    });
}

// Initialize progress tracking if on a lesson page
if (document.querySelector('.step-badge')) {
    markCurrentStepVisited();
}
