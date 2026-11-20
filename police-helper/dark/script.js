tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                brand: {
                    50: '#eff6ff',
                    100: '#dbeafe',
                    500: '#3b82f6',
                    600: '#2563eb',
                    700: '#1d4ed8',
                },
                accent: {
                    500: '#10b981',
                    600: '#059669',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        }
    }
}

const materialsData = [
    {
        id: "charge-tools-1",
        title: "Penal Code Tools",
        category: "Charge",
        summary: "Dapat digunakan untuk memilih pasal, menghasilkan command /arrest, /ticket, /markimpound, dan hal lainnya.",
        toolUrl: "https://syahbich.github.io/police-helper/dark/penal-code/",
        guideUrl: "https://youtu.be/9PJ6pYMzsg0"
    },
    {
        id: "bbcode-generator-1",
        title: "Arrest Warrant",
        category: "BBCode Generator",
        summary: "Dapat digunakan untuk menghasilkan BBCode Arrest Warrant.",
        toolUrl: "https://syahbich.github.io/police-helper/dark/arrest-warrant/",
        guideUrl: "https://youtube.com/"
    },
    {
        id: "bbcode-generator-2",
        title: "Custody Warrant",
        category: "BBCode Generator",
        summary: "Dapat digunakan untuk menghasilkan BBCode Warrant Custody.",
        toolUrl: "https://syahbich.github.io/police-helper/dark/custody-warrant/",
        guideUrl: "https://youtube.com/"
    },
    {
        id: "bbcode-generator-3",
        title: "License Revocation",
        category: "BBCode Generator",
        summary: "Dapat digunakan untuk menghasilkan BBCode License Revocation.",
        toolUrl: "https://syahbich.github.io/police-helper/dark/license-revocation/",
        guideUrl: "https://youtube.com/"
    },
    {
        id: "bbcode-generator-4",
        title: "Manual Impound",
        category: "BBCode Generator",
        summary: "Dapat digunakan untuk menghasilkan BBCode Manual Impound.",
        toolUrl: "https://syahbich.github.io/police-helper/dark/manual-impound/",
        guideUrl: "https://youtube.com/"
    },
    {
        id: "bbcode-generator-5",
        title: "Incident Report",
        category: "Daily Operations - BBCode Generator",
        summary: "Dapat digunakan untuk menghasilkan BBCode Incident Report.",
        toolUrl: "https://syahbich.github.io/police-helper/dark/incident-report/",
        guideUrl: "https://youtube.com/"
    },
    {
        id: "bbcode-generator-6",
        title: "Flight Report",
        category: "Special Operations - BBCode Generator",
        summary: "Dapat digunakan oleh anggota Air Support Division untuk menghasilkan BBCode Flight Report.",
        toolUrl: "https://syahbich.github.io/police-helper/dark/flight-report/",
        guideUrl: "https://youtube.com/"
    },
];

let selectedGrade = 'All';
let selectedCategory = 'All';
let searchQuery = '';
const categories = ['All', 'Charge', 'Server Tools', 'BBCode Generator', 'Daily Operations - BBCode Generator', 'Special Operations - BBCode Generator'];

function initTheme() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        updateThemeIcon(true);
    } else {
        document.documentElement.classList.remove('dark');
        updateThemeIcon(false);
    }
}

function toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.theme = isDark ? 'dark' : 'light';
    updateThemeIcon(isDark);
}

function updateThemeIcon(isDark) {
    const icon = document.getElementById('themeIcon');
    if (isDark) {
        icon.className = 'fa-solid fa-sun text-yellow-400 text-lg';
    } else {
        icon.className = 'fa-solid fa-moon text-slate-600 text-lg';
    }
}

function renderFilters() {
    const categoryContainer = document.getElementById('categoryFilterContainer');
    categoryContainer.innerHTML = categories.map(cat => `
        <button onclick="setCategoryFilter('${cat}')" class="px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
            selectedCategory === cat 
            ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/20' 
            : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
        }">
            ${cat}
        </button>
    `).join('');
}

function renderCards() {
    const grid = document.getElementById('materialGrid');
    const emptyState = document.getElementById('emptyState');
    const itemCount = document.getElementById('itemCount');
    const filtered = materialsData.filter(item => {
        const matchGrade = selectedGrade === 'All' || item.grade === selectedGrade;
        const matchCat = selectedCategory === 'All' || item.category === selectedCategory;
        const matchSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.summary.toLowerCase().includes(searchQuery.toLowerCase());
        return matchGrade && matchCat && matchSearch;
    });
    itemCount.textContent = `Menampilkan ${filtered.length} Tools`;
    if (filtered.length === 0) {
        grid.innerHTML = '';
        emptyState.classList.remove('hidden');
        return;
    }
    emptyState.classList.add('hidden');
    grid.innerHTML = filtered.map(item => {
        return `
            <div class="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                <div>
                    <!-- Header Badges -->
                    <div class="flex items-center justify-between gap-2 mb-3">
                        <span class="px-2.5 py-1 rounded-lg text-xs font-semibold bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300">
                            ${item.category}
                        </span>
                    </div>
                    <!-- Title -->
                    <h3 class="text-lg font-bold text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 mb-2">
                        ${item.title}
                    </h3>
                    <!-- Summary -->
                    <p class="text-sm text-slate-500 dark:text-slate-400 line-clamp-3 mb-4">
                        ${item.summary}
                    </p>
                </div>
                <div>
                    <!-- Info Footer -->
                    <div class="flex items-center justify-between text-xs text-slate-400 dark:text-slate-500 pt-3 border-t border-slate-100 dark:border-slate-700/50 mb-4">
                    </div>
                    <!-- Use Button -->
                    <a href="${item.toolUrl || '#'}" target="_blank" class="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white font-medium text-sm transition-all duration-200 flex items-center justify-center space-x-2 shadow-md shadow-emerald-500/20">
                        <span>Gunakan Tools</span>
                        <i class="fa-solid fa-arrow-right text-xs"></i>
                    </a>
                    <br>
                    <!-- Read Button -->
                    <a href="${item.guideUrl || '#'}" target="_blank" class="w-full py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-700/50 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white text-slate-700 dark:text-slate-200 font-medium text-sm transition-all duration-200 flex items-center justify-center space-x-2">
                        <span>Pelajari Tools</span>
                        <i class="fa-solid fa-arrow-right text-xs"></i>
                    </a>
                </div>
            </div>
        `;
    }).join('');
}

function setGradeFilter(grade) {
    selectedGrade = grade;
    renderFilters();
    renderCards();
}

function setCategoryFilter(category) {
    selectedCategory = category;
    renderFilters();
    renderCards();
}

function filterMaterials() {
    const input = document.getElementById('searchInput');
    const clearBtn = document.getElementById('clearSearchBtn');
    searchQuery = input.value;
    
    if (searchQuery.length > 0) {
        clearBtn.classList.remove('hidden');
    } else {
        clearBtn.classList.add('hidden');
    }
    renderCards();
}

function clearSearch() {
    const input = document.getElementById('searchInput');
    input.value = '';
    searchQuery = '';
    document.getElementById('clearSearchBtn').classList.add('hidden');
    renderCards();
}

function resetFilters() {
    selectedGrade = 'All';
    selectedCategory = 'All';
    clearSearch();
    renderFilters();
    renderCards();
}

function openModal(id) {
    const item = materialsData.find(m => m.id === id);
    if (!item) return;
    document.getElementById('modalTitle').textContent = item.title;
    document.getElementById('modalGradeBadge').textContent = item.grade || '-';
    document.getElementById('modalCategoryBadge').textContent = item.category;
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = item.content;
    const modal = document.getElementById('readerModal');
    const container = document.getElementById('modalContainer');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
        container.classList.remove('scale-95', 'opacity-0');
        container.classList.add('scale-100', 'opacity-100');
        if (window.MathJax && window.MathJax.typesetPromise) {
            window.MathJax.typesetPromise([modalBody]).catch(err => console.error(err));
        }
    }, 10);
}

function closeModal() {
    const modal = document.getElementById('readerModal');
    const container = document.getElementById('modalContainer');
    container.classList.remove('scale-100', 'opacity-100');
    container.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }, 200);
}

document.getElementById('readerModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

window.onload = function() {
    initTheme();
    renderFilters();
    renderCards();
}
