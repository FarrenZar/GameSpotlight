
tailwind.config = {
    darkMode: 'class', // Mengaktifkan dark mode berdasarkan class 'dark'
    theme: {
        extend: {
            fontFamily: {
                inter: ['Inter', 'sans-serif'], // Font profesional
            },
            colors: {
                primary: {
                    DEFAULT: 'hsl(210, 90%, 50%)', // Biru cerah
                    '50': 'hsl(210, 90%, 95%)',
                    '100': 'hsl(210, 90%, 90%)',
                    '200': 'hsl(210, 90%, 80%)',
                    '300': 'hsl(210, 90%, 70%)',
                    '400': 'hsl(210, 90%, 60%)',
                    '500': 'hsl(210, 90%, 50%)',
                    '600': 'hsl(210, 90%, 45%)',
                    '700': 'hsl(210, 90%, 40%)',
                    '800': 'hsl(210, 90%, 35%)',
                    '900': 'hsl(210, 90%, 30%)',
                    '950': 'hsl(210, 90%, 25%)',
                },
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideIn: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                }
            },
            animation: {
                fadeIn: 'fadeIn 0.5s ease-out',
                slideIn: 'slideIn 0.5s ease-out',
            }
        },
    },
};

/**
         * Membuka dan mengisi modal detail game.
         */
function openGameModal(gameId) {
    const game = allGames.find(g => g.id == gameId);
    if (!game) return;

    const modal = document.getElementById('game-detail-modal');

    // Isi data modal
    document.getElementById('modal-title').textContent = game.title;
    document.getElementById('modal-genre').textContent = game.genre;
    document.getElementById('modal-rating').textContent = game.rating;
    document.getElementById('modal-video').src = game.trailerUrl;
    document.getElementById('modal-description').innerHTML = game.description;

    // Isi galeri
    const galleryContainer = document.getElementById('modal-gallery');
    galleryContainer.innerHTML = '';
    game.gallery.forEach(imgUrl => {
        galleryContainer.innerHTML += `
                    <div class="rounded-lg overflow-hidden shadow-md aspect-video">
                        <img src="${imgUrl}" alt="Gallery Image" class="w-full h-full object-cover">
                    </div>
                `;
    });

    // Tampilkan modal
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden'; // Mencegah scroll di background
}

/**
 * Menutup modal detail game.
 */
function closeGameModal() {
    const modal = document.getElementById('game-detail-modal');

    // Hentikan video YouTube
    document.getElementById('modal-video').src = "";

    // Sembunyikan modal
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto'; // Mengembalikan scroll
}


// === Fungsi Setup ===

/**
 * Setup untuk Dark Mode.
 */
function setupDarkMode() {
    const toggleBtn = document.getElementById('theme-toggle');
    const sunIcon = document.getElementById('theme-icon-sun');
    const moonIcon = document.getElementById('theme-icon-moon');

    // Cek tema saat load
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
    } else {
        document.documentElement.classList.remove('dark');
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
    }

    // Listener untuk tombol toggle
    toggleBtn.addEventListener('click', () => {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
            sunIcon.classList.remove('hidden');
            moonIcon.classList.add('hidden');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
        }
    });
}

/**
 * Setup untuk Navbar Mobile.
 */
function setupMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const iconOpen = document.getElementById('mobile-menu-icon-open');
    const iconClose = document.getElementById('mobile-menu-icon-close');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        iconOpen.classList.toggle('hidden');
        iconClose.classList.toggle('hidden');
    });

    // Tutup menu saat link diklik
    document.querySelectorAll('.nav-link-mobile').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            iconOpen.classList.remove('hidden');
            iconClose.classList.add('hidden');
        });
    });
}

/**
 * Setup untuk Hero Carousel.
 */
function setupCarousel() {
    const carousel = document.getElementById('hero-carousel');
    if (!carousel) return;

    const items = carousel.querySelectorAll('.carousel-item');
    const dotsContainer = document.getElementById('carousel-dots');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    let currentIndex = 0;
    const totalItems = items.length;

    if (totalItems === 0) return;

    // Buat dots
    for (let i = 0; i < totalItems; i++) {
        const dot = document.createElement('button');
        dot.classList.add('carousel-dot', 'w-3', 'h-3', 'rounded-full', 'bg-white/50', 'hover:bg-white', 'transition');
        if (i === 0) dot.classList.add('active', 'bg-white');
        dot.dataset.index = i;
        dotsContainer.appendChild(dot);
    }

    const dots = dotsContainer.querySelectorAll('.carousel-dot');

    function showSlide(index) {
        // Pastikan index valid
        if (index >= totalItems) index = 0;
        if (index < 0) index = totalItems - 1;

        // Sembunyikan semua item dan non-aktifkan dots
        items.forEach(item => item.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active', 'bg-white'));

        // Tampilkan item dan dot yang aktif
        items[index].classList.add('active');
        dots[index].classList.add('active', 'bg-white');

        currentIndex = index;
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    // Event Listeners
    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetAutoplay();
    });
    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetAutoplay();
    });
    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            showSlide(parseInt(e.target.dataset.index));
            resetAutoplay();
        });
    });

    // Autoplay
    function startAutoplay() {
        carouselInterval = setInterval(nextSlide, 5000); // Ganti slide setiap 5 detik
    }

    function resetAutoplay() {
        clearInterval(carouselInterval);
        startAutoplay();
    }

    startAutoplay();
}

/**
 * Setup untuk sistem filter.
 */
function setupFilters() {
    const filterGroups = document.querySelectorAll('#filter-platform, #filter-genre');

    filterGroups.forEach(group => {
        group.addEventListener('click', (e) => {
            if (e.target.classList.contains('filter-btn')) {
                const btn = e.target;
                const filterGroup = btn.dataset.filterGroup;
                const filterValue = btn.dataset.filterValue;

                // Update state filter
                currentFilters[filterGroup] = filterValue;

                // Update UI Tombol
                group.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Re-render grid
                renderGameGrid();
            }
        });
    });

    // Style untuk tombol filter
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.add(
            'px-4', 'py-2', 'border', 'rounded-full', 'text-sm', 'font-medium', 'transition', 'duration-150',
            'border-gray-300', 'text-gray-700', 'hover:border-primary', 'hover:text-primary',
            'dark:border-gray-600', 'dark:text-gray-300', 'dark:hover:border-primary', 'dark:hover:text-primary'
        );
    });
}

/**
 * Setup untuk Modal.
 */
function setupModal() {
    const modal = document.getElementById('game-detail-modal');
    const closeBtn = document.getElementById('modal-close-btn');

    // Tutup saat tombol close diklik
    closeBtn.addEventListener('click', closeGameModal);

    // Tutup saat area luar modal diklik
    modal.addEventListener('click', (e) => {
        if (e.target === modal) { // Hanya jika klik di backdrop, bukan di konten
            closeGameModal();
        }
    });

    // Tutup saat tombol Escape ditekan
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeGameModal();
        }
    });
}

/**
 * Setup event listener untuk grid game (Event Delegation).
 */
function setupGridListener() {
    document.getElementById('game-grid').addEventListener('click', (e) => {
        const card = e.target.closest('.game-card');
        if (card) {
            const gameId = card.dataset.gameId;
            openGameModal(gameId);
        }
    });
}

// === Inisialisasi Aplikasi ===
document.addEventListener('DOMContentLoaded', () => {
    // Setup UI
    setupDarkMode();
    setupMobileMenu();
    setupCarousel();
    setupFilters();
    setupModal();
    setupGridListener();

    // Render Konten Dinamis
    renderGameGrid(); // Render awal
    renderUpcomingTable();

    // Render semua ikon lucide
    lucide.createIcons();
});

// === State Global ===
let currentFilters = {
    platform: 'all',
    genre: 'all'
};
let carouselInterval;


// === Fungsi Render ===

/**
 * Merender grid game berdasarkan filter saat ini.
 */
function renderGameGrid() {
    const grid = document.getElementById('game-grid');
    if (!grid) return;

    // 1. Filter game
    const filteredGames = allGames.filter(game => {
        const platformMatch = currentFilters.platform === 'all' || game.platform === currentFilters.platform;
        const genreMatch = currentFilters.genre === 'all' || game.genre === currentFilters.genre;
        return platformMatch && genreMatch;
    });

    // 2. Clear grid
    grid.innerHTML = '';

    // 3. Render game jika ada, jika tidak tampilkan pesan
    if (filteredGames.length > 0) {
        filteredGames.forEach(game => {
            grid.innerHTML += `
                        <div class="game-card bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.03] hover:shadow-primary/30 dark:hover:shadow-primary/20 cursor-pointer animate-slideIn" 
                             data-game-id="${game.id}">
                            <div class="relative h-64 w-full">
                                <img src="${game.coverArt}" alt="${game.title}" class="w-full h-64 object-cover object-top">
                                <div class="absolute top-4 right-4 bg-black/70 text-white rounded-full p-2 flex items-center">
                                    <i data-lucide="star" class="h-4 w-4 text-yellow-400 fill-current mr-1"></i>
                                    <span class="font-bold text-sm">${game.rating}</span>
                                </div>
                            </div>

                            <div class="p-5">
                                <h3 class="text-xl font-semibold mb-2 truncate">${game.title}</h3>
                                <div class="flex justify-between items-center text-sm text-gray-600 dark:text-gray-300">
                                    <span>${game.genre}</span>
                                    <span>${game.platform}</span>
                                </div>
                            </div>
                        </div>
                    `;
        });
    } else {
        grid.innerHTML = `
                    <div class="col-span-full text-center py-12 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                        <i data-lucide="search-x" class="h-12 w-12 mx-auto text-gray-400"></i>
                        <h3 class="mt-4 text-xl font-semibold">Tidak Ada Game Ditemukan</h3>
                        <p class="mt-2 text-gray-500">Coba ubah kriteria filter Anda.</p>
                    </div>
                `;
    }

    // Setelah merender, pastikan ikon diload
    lucide.createIcons();
}

/**
 * Merender tabel upcoming games.
 */
function renderUpcomingTable() {
    const tbody = document.getElementById('upcoming-games-tbody');
    if (!tbody) return;

    tbody.innerHTML = '';
    upcomingGames.forEach(game => {
        tbody.innerHTML += `
                    <tr class="transition-colors duration-150 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">${game.title}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">${game.developer}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">${game.releaseDate}</td>
                    </tr>
                `;
    });
}