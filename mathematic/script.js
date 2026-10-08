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
        id: "logic-1",
        title: "PEMDAS (Penting)",
        category: "Logika",
        summary: "Aturan dasar Matematika terkait urutan operasi bilangan Matematika.",
        content: String.raw`
            <div class="space-y-4">
                <h3 class="text-lg font-bold text-blue-600 dark:text-blue-400">1. Apa itu PEMDAS?</h3>
                <p><strong>PEMDAS</strong> atau kepanjangannya adalah <strong>P</strong>arentheses <strong>E</strong>xponents <strong>M</strong>ultiplication <strong>D</strong>ivision <strong>A</strong>ddition and <strong>S</strong>ubstraction merupakan aturan cara kita mengerjakan suatu operasi atau bilangan Matematika sesuai urutan PEMDAS, berikut adalah urutannya.</p>
                <div class="p-4 bg-slate-100 dark:bg-slate-900 rounded-xl border-l-4 border-blue-500 font-mono text-sm">
                    <p>1. Parentheses : $()$</p>
                    <p>2. Exponents : $x^y$</p>
                    <p>3. Multiplication, Division : $\times$ $\div$</p>
                    <p>4. Addition, Substraction : $+$ $-$</p>
                </div>
                <p>Jadi ketika kita menghadapi sebuah pertanyaan Matematika, kita harus mengerjakannya sesuai dengan urutan pada PEMDAS, kita lihat dulu apakah ada Parentheses(1)? Jika ada kita kerjakan Parenthesesnya terlebih dahulu, apakah ada Exponents(2)? Jika ada kita kerjakan Exponents(Bilangan Berpangkat)nya terlebih dahulu, apakah ada Multiplication atau Division(3)? Jika ada maka kita kerjakan Multiplication(Perkalian) dan Division(Pembagian)nya terlebih dahulu, apakah ada Addition and Substraction(4)? Jika iya maka kita kerjakan Addition(Pertambahan) and Substraction(Pengurangan)nya.</p>
                <div class="p-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl">
                    <h4 class="font-bold text-emerald-800 dark:text-emerald-300 mb-1"><i class="fa-solid fa-lightbulb mr-2"></i>Contoh Soal & Pembahasan</h4>
                    <p class="text-sm">Pertanyaan:<br>
                    $34+95-(9+53)+79\times3\div3+7^2-53$</p>
                    <p class="text-sm mt-2 font-mono">
                        Di dalam soal ada Parenthesesnya, yaitu $(9+53)$, maka kita kerjakan Parentheses tersebut<br>
                        $9+53$<br>
                        $=62$<br>
                        <br>
                        Maka $(9+53)$ di dalam soal kita ubah menjadi $62$.<br>
                        <br>
                        $34+95-62+79\times3\div3+7^2-53$<br>
                        <br>
                        Setelah itu karena di soal sudah tidak ada Parentheses, maka kita cari Exponents atau bilangan berpangkatnya, jika ada maka kita kerjakan bilangan berpangkatnya, dan di dalam soal, bilangan berpangkatnya adalah $7^2$.<br>
                        <br>
                        $7^2$<br>
                        $=7\times7$<br>
                        $=49$<br>
                        <br>
                        Maka $7^2$ di dalam soal kita ubah menjadi hasilnya, yaitu $49$.<br>
                        <br>
                        $34+95-62+79\times3\div3+49-53$<br>
                        <br>
                        Setelah itu karena di soal sudah tidak ada Exponents atau bilangan berpangkat lagi, kita cari Multiplication dan juga Division yaitu perkalian dan pembagian dan kita kerjakan secara bersamaan, dan di dalam soal, perkalian dan pembagiannya ada $79\times3\div3$, kita kerjakan dari kiri ke kanan.<br>
                        <br>
                        $79\times3\div3$<br>
                        $=237\div3$<br>
                        $=79$<br>
                        <br>
                        Maka $79\times3\div3$ di dalam soal kita ubah menjadi hasilnya, yaitu $79$.<br>
                        <br>
                        $34+95-62+79+49-53$<br>
                        <br>
                        Setelah itu karena di soal sudah tidak ada Multiplication dan Division yaitu perkalian dan pembagian, kita cari Addition and Substraction yaitu pertambahan dan pengurangan dan kita kerjakan secara bersamaan, dan di dalam soal, pertambahan dan pengurangan ada $34+95-62+79+49-53$, kita kerjakan dari kiri ke kanan.<br>
                        <br>
                        $34+95-62+79+49-53$<br>
                        $=129-62+79+49-63$<br>
                        $=67+79+49$<br>
                        $=146+49$<br>
                        $=195$
                    </p>
                </div>
            </div>`
    },
    {
        id: "arithmatic-1",
        title: "Aritmatika Dasar",
        category: "Aritmatika",
        summary: "Aritmatika Dasar adalah cabang Matematika fundamental, mempelajari pertambahan, pengurangan, perkalian, dan pembagian.",
        content: String.raw`<div class="space-y-4">
                <h3 class="text-lg font-bold text-blue-600 dark:text-blue-400">1. Apa itu Aritmatika Dasar?</h3>
                <p><strong>Aritmatika Dasar</strong> adalah cabang Matematika fundamental, cabang dasar dari Matematika ini mempelajari tentang pertambahan, pengurangan, perkalian, dan pembagian bilangan biasa, meskipun terdengar tidak berguna dan tidak serumit cabang lain, namun Aritmatika Dasar menjadi pondasi utama konsep di Matematika cabang lain, yang artinya untuk mempelajari bidang Matematika tingkat lanjut, sangat disarankan untuk menguasai Aritmatika Dasar terlebih dahulu.</p>
                <h3 class="text-lg font-bold text-blue-600 dark:text-blue-400">A. Pertambahan.</h3>
                <p><strong>Pertambahan</strong> di Matematika sering disimbolkan dengan $+$, serta dengan kedua bilangan atau angka berada di samping kiri dan samping kanan simbol tersebut($a+b$).<br>
                <br>
                Simplenya, pertambahan atau $+$, menambahkan suatu angka dengan angka penambah sesuai dengan urutannya, contohnya: <br>
                $10+2$<br>
                Angka 10 adalah urutan angka ke-10, maka kita tambahkan urutan angkanya dengan 2 langkah.<br>
                <br>
                Urutan angka ke-10 ditambah 1 sebanyak 2 kali, maka urutan angka selanjutnya adalah 11, ditambah lagi maka 12, maka kita mendapatkan hasilnya adalah <strong>12</strong>.</p>
                <h3 class="text-lg font-bold text-blue-600 dark:text-blue-400">B. Pengurangan.</h3>
                <p><strong>Pengurangan</strong> di Matematika sering disimbolkan dengan $-$, serta dengan kedua bilangan atau angka berada di samping kiri dan samping kana simbol tersebut($a-b$).<br>
                <br>
                Hampir mirip seperti <strong>Pertambahan</strong>, namun yang membedakannya, jika pertambahan melanjutkan urutan secara maju, maka pengurangan melanjutkan urutan ke belakang, contohnya seperti 5 ke 4, ke 3, dan seterusnya, contohnya lagi adalah seperti di bawah ini<br>
                $10-2$<br>
                Angka 10 adalah urutan angka ke-10, maka kita kurangkan urutan angkanya dengan 2 langkah.<br>
                <br>
                Urutan angka ke-10 dikurang 1 sebanyak 2 kali, maka urutan angka sebelum 10 adalah 9, dikurang lagi maka 8, maka kita mendapatkan hasilnya adalah <strong>8</strong>.</p>
                <h3 class="text-lg font-bold text-blue-600 dark:text-blue-400">C. Perkalian.</h3>
                <p><strong>Perkalian</strong> di Matematika sering disimbolkan dengan $\times$, serta dengan kedua bilangan atau angka berada di samping kiri dan samping kanan simbol tersebut($a\times b$).<br>
                <br>
                <strong>Perkalian</strong> ini bisa dibilang adalah <strong>Pertambahan</strong> yang berulang, karena angka di samping kiri simbol ditambahkan dengan dirinya sendiri sebanyak angka yang berada di samping kanan simbol, mari kita ambil contoh: <br>
                $10\times2$<br>
                Kalau kita sadar, pengucapan <strong>10 kali 2</strong> sendiri sudah jelas artinya apa, <strong>10 kali 2</strong> artinya memberi tahu bahwa angka 10 tersebut ada 2, maka..<br>
                $10\times2$<br>
                $=10+10$<br>
                $=20$<br>
                <br>
                Dan inilah kenapa <strong>Perkalian</strong> disebut sebagai <strong>Pertambahan</strong> yang berulang, dikarenakan memang bilangan yang ada pada samping kiri simbol ditambah dengan dirinya sendiri sebanyak angka atau nilai yang berada pada samping kanan simbol.</p>
                <h3 class="text-lg font-bold text-blue-600 dark:text-blue-400">D. Pembagian.</h3>
                <p><strong>Pembagian</strong> di Matematika sering disimbolkan dengan $\div$, serta dengan kedua bilangan atau angka berada di samping kiri dan samping kana simbol tersebut($a\div b$).<br>
                <br>
                <strong>Pembagian</strong> juga hampir sama seperti <strong>Perkalian</strong>, yang membedakannya adalah jika seandainya <strong>Perkalian</strong> adalah <strong>Pertambahan</strong> yang berulang, maka <strong>Pembagian</strong> adalah <strong>Pengurangan</strong> yang berulang, kita ambil contoh: <br>
                $10\div2$<br>
                Mari kita kurangi angka 10 dengan angka 2, hingga hasil akhirnya menjadi 0.<br>
                $10\div2$<br>
                $10-2$<br>
                $=8-2$<br>
                $=6-2$<br>
                $=4-2$<br>
                $=2-2$<br>
                $=0$<br>
                Nah, jika kita lihat, berapa kali kita mengurangi 10 hingga hasilnya menjadi 0? Betul, 5 kali, maka $10\div2$ hasilnya adalah <strong>5</strong>.</p>
            </div>`
    },
    {
        id: "arithmatic-2",
        title: "Aritmatika Bilangan Pecahan",
        category: "Aritmatika",
        summary: "Aritmatika bilangan pecahan adalah cabang yang mempelajari cara mengoperasikan bilangan pecahan biasa.",
        content: String.raw`<div class="space-y-4">
                <h3 class="text-lg font-bold text-blue-600 dark:text-blue-400">1. Apa itu Bilangan Pecahan?</h3>
                <p><strong>Bilangan Pecahan</strong> dalam Matematika adalah untuk menyatakan atau menulis suatu bilangan, angka, atau nilai yang tidak bulat(Contoh: $0,25$) dengan bentuk <strong>Perbandingan</strong>, contoh bilangan pecahan adalah sebagai berikut: <br>
                $\frac{1}{2}$</p>`
    },
];

let selectedGrade = 'Semua';
let selectedCategory = 'Semua';
let searchQuery = '';
const categories = ['Semua', 'Logika', 'Aritmatika'];

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
        const matchGrade = selectedGrade === 'Semua' || item.grade === selectedGrade;
        const matchCat = selectedCategory === 'Semua' || item.category === selectedCategory;
        const matchSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.summary.toLowerCase().includes(searchQuery.toLowerCase());
        return matchGrade && matchCat && matchSearch;
    });
    itemCount.textContent = `Menampilkan ${filtered.length} Materi`;
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
                    <!-- Read Button -->
                    <button onclick="openModal('${item.id}')" class="w-full py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-700/50 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white text-slate-700 dark:text-slate-200 font-medium text-sm transition-all duration-200 flex items-center justify-center space-x-2">
                        <span>Pelajari Materi</span>
                        <i class="fa-solid fa-arrow-right text-xs"></i>
                    </button>
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
    selectedGrade = 'Semua';
    selectedCategory = 'Semua';
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