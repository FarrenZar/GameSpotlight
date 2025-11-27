// === DATABASE GAME (Mock Data) ===
// Ini adalah tempat data game disimpan. Di aplikasi nyata, ini berasal dari API.
const allGames = [
    {
        id: 1,
        title: "Cybernetic Dawn",
        coverArt: "https://placehold.co/500x700/1a202c/718096?text=Cybernetic+Dawn",
        genre: "RPG",
        platform: "PC",
        rating: 9.5,
        trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder video
        gallery: [
            "https://placehold.co/600x400/1a202c/718096?text=Gameplay+1",
            "https://placehold.co/600x400/1a202c/718096?text=City+View",
            "https://placehold.co/600x400/1a202c/718096?text=Combat",
            "https://placehold.co/600x400/1a202c/718096?text=Character"
        ],
        description: `
                    <p><strong>Cybernetic Dawn</strong> adalah RPG aksi cyberpunk yang berlatar di Neo-Kyoto tahun 2088. Anda bermain sebagai 'Zero', seorang tentara bayaran yang ditingkatkan secara cybernetic yang mengungkap konspirasi besar.</p>
                    <p>Jelajahi kota metropolitan neon yang luas, terima kontrak dari faksi-faksi yang saling bertentangan, dan sesuaikan tubuh Anda dengan ratusan augmentasi.</p>
                    <h4>Fitur Utama:</h4>
                    <ul>
                        <li>Dunia terbuka yang imersif dan reaktif.</li>
                        <li>Sistem pertarungan real-time yang cepat.</li>
                        <li>Kustomisasi karakter yang mendalam.</li>
                        <li>Alur cerita bercabang dengan banyak akhir.</li>
                    </ul>
                `
    },
    {
        id: 2,
        title: "Echoes of the Void",
        coverArt: "https://placehold.co/500x700/2c5282/a0aec0?text=Echoes+of+the+Void",
        genre: "Adventure",
        platform: "Console",
        rating: 8.8,
        trailerUrl: "https://www.youtube.com/embed/9G0k01BH01I", // Placeholder video
        gallery: [
            "https://placehold.co/600x400/2c5282/a0aec0?text=Station+Corridor",
            "https://placehold.co/600x400/2c5282/a0aec0?text=Anomaly",
            "https://placehold.co/600x400/2c5282/a0aec0?text=Puzzle"
        ],
        description: `
                    <p><strong>Echoes of the Void</strong> adalah game petualangan horor kosmik orang pertama. Anda terbangun sendirian di stasiun penelitian luar angkasa 'Astraea' yang sepi.</p>
                    <p>Cari tahu apa yang terjadi pada kru sambil dikejar oleh kehadiran yang tak terlukiskan. Pecahkan teka-teki lingkungan dan kelola sumber daya Anda untuk bertahan hidup.</p>
                    <h4>Fitur Utama:</h4>
                    <ul>
                        <li>Atmosfer yang mencekam dan desain suara yang imersif.</li>
                        <li>Cerita misteri sci-fi yang menarik.</li>
                        <li>Teka-teki berbasis fisika dan logika.</li>
                        <li>Tidak ada pertarungan, fokus pada stealth dan pemecahan masalah.</li>
                    </ul>
                `
    },
    {
        id: 3,
        title: "Apex Legends",
        coverArt: "https://placehold.co/500x700/e53e3e/fff5f5?text=Apex+Legends",
        genre: "FPS",
        platform: "PC",
        rating: 9.1,
        trailerUrl: "https://www.youtube.com/embed/Bbl5GOM-yE8", // Placeholder video
        gallery: [
            "https://placehold.co/600x400/e53e3e/fff5f5?text=Octane",
            "https://placehold.co/600x400/e53e3e/fff5f5?text=Worlds+Edge",
            "https://placehold.co/600x400/e53e3e/fff5f5?text=Team+Fight"
        ],
        description: `
                    <p><strong>Apex Legends</strong> adalah game tembak-menembak battle royale berbasis pahlawan pemenang penghargaan dari Respawn Entertainment. Kuasai daftar Legenda yang terus bertambah dengan kemampuan kuat, dan bertarung untuk ketenaran & kekayaan di perbatasan.</p>
                    <h4>Fitur Utama:</h4>
                    <ul>
                        <li>Battle Royale berbasis tim tiga orang.</li>
                        <li>Daftar Legenda yang unik dengan kemampuan taktis.</li>
                        <li>Sistem 'Ping' komunikasi yang revolusioner.</li>
                        <li>Musim reguler dengan konten baru.</li>
                    </ul>
                `
    },
    {
        id: 4,
        title: "Genshin Impact",
        coverArt: "https://placehold.co/500x700/319795/b2f5ea?text=Genshin+Impact",
        genre: "RPG",
        platform: "Mobile",
        rating: 9.0,
        trailerUrl: "https://www.youtube.com/embed/hl30aG4p8kY", // Placeholder video
        gallery: [
            "https://placehold.co/600x400/319795/b2f5ea?text=Mondstadt",
            "https://placehold.co/600x400/319795/b2f5ea?text=Liyue",
            "https://placehold.co/600x400/319795/b2f5ea?text=Exploration",
            "https://placehold.co/600x400/319795/b2f5ea?text=Gacha"
        ],
        description: `
                    <p><strong>Genshin Impact</strong> adalah RPG aksi dunia terbuka. Anda adalah seorang musafir, terpisah dari saudara kembar Anda dan terdampar di Teyvat. Jelajahi dunia yang luas, temui berbagai karakter, dan ungkap misteri Teyvat.</p>
                    <h4>Fitur Utama:</h4>
                    <ul>
                        <li>Dunia terbuka yang masif untuk dijelajahi.</li>
                        <li>Sistem pertarungan berbasis elemen yang dinamis.</li>
                        <li>Karakter yang beragam dengan cerita unik.</li>
                        <li>Gratis untuk dimainkan dengan pembaruan konten rutin.</li>
                    </ul>
                `
    },
    {
        id: 5,
        title: "Project Terraform",
        coverArt: "https://placehold.co/500x700/276749/9ae6b4?text=Project+Terraform",
        genre: "Strategy",
        platform: "PC",
        rating: 8.5,
        trailerUrl: "https://www.youtube.com/embed/6_KeWHgEkyI", // Placeholder video
        gallery: [
            "https://placehold.co/600x400/276749/9ae6b4?text=Base+Building",
            "https://placehold.co/600x400/276749/9ae6b4?text=Resource+Map",
            "https://placehold.co/600x400/276749/9ae6b4?text=Alien+Wildlife"
        ],
        description: `
                    <p><strong>Project Terraform</strong> adalah game simulasi koloni dan strategi real-time. Pimpin sekelompok penjajah yang terdampar di planet asing yang berbahaya.</p>
                    <p>Bangun markas Anda, kelola sumber daya, teliti teknologi baru, dan pertahankan koloni Anda dari ancaman lingkungan dan makhluk asing.</p>
                    <h4>Fitur Utama:</h4>
                    <ul>
                        <li>Simulasi koloni yang mendalam.</li>
                        <li>Manajemen sumber daya dan rantai produksi.</li>
                        <li>Pertahanan markas (Tower Defense).</li>
                        <li>Planet yang dihasilkan secara prosedural.</li>
                    </ul>
                `
    },
    {
        id: 6,
        title: "Horizon Forbidden West",
        coverArt: "https://placehold.co/500x700/dd6b20/fbd38d?text=Forbidden+West",
        genre: "Adventure",
        platform: "Console",
        rating: 9.3,
        trailerUrl: "https://www.youtube.com/embed/Lq594XmpjMw", // Placeholder video
        gallery: [
            "https://placehold.co/600x400/dd6b20/fbd38d?text=Aloy",
            "https://placehold.co/600x400/dd6b20/fbd38d?text=Thunderjaw",
            "https://placehold.co/600x400/dd6b20/fbd38d?text=Underwater"
        ],
        description: `
                    <p>Bergabunglah dengan Aloy saat ia menjelajahi <strong>Forbidden West</strong>, perbatasan mematikan yang menyembunyikan ancaman baru yang misterius.</p>
                    <p>Jelajahi daratan yang jauh, lawan mesin yang lebih besar dan lebih menakjubkan, dan temui suku-suku baru yang menakjubkan saat Anda kembali ke dunia Horizon pasca-apokaliptik yang jauh di masa depan.</p>
                    <h4>Fitur Utama:</h4>
                    <ul>
                        <li>Dunia terbuka yang sangat indah dan luas.</li>
                        <li>Pertarungan melawan mesin robot yang ikonik.</li>
                        <li>Cerita yang kaya dengan karakter yang tak terlupakan.</li>
                        <li>Eksplorasi bawah air dan terbang.</li>
                    </ul>
                `
    },
    {
        id: 7,
        title: "Elden Ring",
        coverArt: "https://placehold.co/500x700/c53030/feb2b2?text=Elden+Ring",
        genre: "RPG",
        platform: "Console",
        rating: 9.8,
        trailerUrl: "https://www.youtube.com/embed/K_03kFqWfSM", // Placeholder video
        gallery: [
            "https://placehold.co/600x400/c53030/feb2b2?text=The+Lands+Between",
            "https://placehold.co/600x400/c53030/feb2b2?text=Malenia",
            "https://placehold.co/600x400/c53030/feb2b2?text=Erdtree"
        ],
        description: `
                    <p>Bangkit, Ternished, dan dipandu oleh anugerah untuk mengacungkan kekuatan Elden Ring dan menjadi Elden Lord di Lands Between.</p>
                    <p><strong>Elden Ring</strong> adalah RPG aksi fantasi yang dikembangkan oleh FromSoftware Inc. dan diproduksi oleh BANDAI NAMCO Entertainment Inc., berlatar di dunia yang diciptakan oleh Hidetaka Miyazaki dan George R. R. Martin.</p>
                    <h4>Fitur Utama:</h4>
                    <ul>
                        <li>Dunia terbuka yang luas penuh rahasia.</li>
                        <li>Pertarungan yang menantang dan memuaskan.</li>
                        <li>Kustomisasi build karakter yang tak terbatas.</li>
                        <li>Cerita dan lore yang mendalam.</li>
                    </ul>
                `
    },
    {
        id: 8,
        title: "Valorant",
        coverArt: "https://placehold.co/500x700/805ad5/e9d8fd?text=Valorant",
        genre: "FPS",
        platform: "PC",
        rating: 8.9,
        trailerUrl: "https://www.youtube.com/embed/e_E9W2vsRbQ", // Placeholder video
        gallery: [
            "https://placehold.co/600x400/805ad5/e9d8fd?text=Jett",
            "https://placehold.co/600x400/805ad5/e9d8fd?text=Split+Map",
            "https://placehold.co/600x400/805ad5/e9d8fd?text=Gunplay"
        ],
        description: `
                    <p><strong>Valorant</strong> adalah game tembak-menembak taktis 5v5 berbasis karakter yang berlatar di panggung global. Tembak dan gunakan kemampuan taktis untuk mengalahkan lawan Anda.</p>
                    <p>Gabungkan keahlian menembak yang presisi dengan kemampuan agen yang unik untuk memenangkan ronde. Dengan 13 ronde untuk menyerang dan bertahan, Anda perlu berpikir lebih cepat daripada lawan.</p>
                    <h4>Fitur Utama:</h4>
                    <ul>
                        <li>Tembak-menembak taktis yang presisi.</li>
                        <li>Agen dengan kemampuan unik (Api, Racun, Angin, dll.).</li>
                        <li>Gratis untuk dimainkan.</li>
                        <li>Kancah Esports yang sangat kompetitif.</li>
                    </ul>
                `
    },
    {
        id: 9,
        title: "Stardew Valley",
        coverArt: "https://placehold.co/500x700/38a169/c6f6d5?text=Stardew+Valley",
        genre: "Strategy",
        platform: "Mobile",
        rating: 9.7,
        trailerUrl: "https://www.youtube.com/embed/ot7uXNQskhs", // Placeholder video
        gallery: [
            "https://placehold.co/600x400/38a169/c6f6d5?text=Farm",
            "https://placehold.co/600x400/38a169/c6f6d5?text=Mining",
            "https://placehold.co/600x400/38a169/c6f6d5?text=Festival"
        ],
        description: `
                    <p>Anda mewarisi sebidang tanah pertanian tua kakek Anda di <strong>Stardew Valley</strong>. Berbekal peralatan warisan dan sedikit uang, Anda memulai hidup baru.</p>
                    <p>Bisakah Anda belajar hidup dari tanah dan mengubah ladang yang ditumbuhi semak-semak ini menjadi rumah yang berkembang? Ini tidak akan mudah.</p>
                    <h4>Fitur Utama:</h4>
                    <ul>
                        <li>Simulasi pertanian yang santai dan adiktif.</li>
                        <li>Berinteraksi dengan penduduk kota dan membangun hubungan.</li>
                        <li>Menambang, memancing, memasak, dan membuat barang.</li>
                        <li>Gameplay open-ended yang tak terbatas.</li>
                    </ul>
                `
    },
    {
        id: 10,
        title: "The Witcher 3: Wild Hunt",
        coverArt: "https://placehold.co/500x700/7b341e/fde68a?text=The+Witcher+3",
        genre: "RPG",
        platform: "PC",
        rating: 9.9,
        trailerUrl: "https://www.youtube.com/embed/XHrRxQVU-1k", // Placeholder video
        gallery: [
            "https://placehold.co/600x400/7b341e/fde68a?text=Geralt",
            "https://placehold.co/600x400/7b341e/fde68a?text=Novigrad",
            "https://placehold.co/600x400/7b341e/fde68a?text=Griffin",
            "https://placehold.co/600x400/7b341e/fde68a?text=Ciri"
        ],
        description: `
                    <p><strong>The Witcher 3: Wild Hunt</strong> adalah RPG dunia terbuka berbasis cerita yang berlatar di alam semesta fantasi yang menakjubkan secara visual yang penuh dengan pilihan berarti dan konsekuensi yang berdampak.</p>
                    <p>Anda adalah Geralt of Rivia, seorang pemburu monster profesional, yang bertugas menemukan anak ramalan di dunia terbuka yang luas.</p>
                    <h4>Fitur Utama:</h4>
                    <ul>
                        <li>Dunia terbuka yang sangat besar dan hidup.</li>
                        <li>Cerita utama dan sampingan yang ditulis dengan ahli.</li>
                        <li>Sistem pertarungan yang dinamis.</li>
                        <li>Dua ekspansi besar yang diakui secara kritis.</li>
                    </ul>
                `
    },
    {
        id: 11,
        title: "Call of Duty: Mobile",
        coverArt: "https://placehold.co/500x700/1a202c/e2e8f0?text=COD+Mobile",
        genre: "FPS",
        platform: "Mobile",
        rating: 8.7,
        trailerUrl: "https://www.youtube.com/embed/A0KMO2vA85k", // Placeholder video
        gallery: [
            "https://placehold.co/600x400/1a202c/e2e8f0?text=Multiplayer",
            "https://placehold.co/600x400/1a202c/e2e8f0?text=Battle+Royale",
            "https://placehold.co/600x400/1a202c/e2e8f0?text=Loadout"
        ],
        description: `
                    <p>Rasakan pengalaman <strong>Call of Duty</strong> yang ikonik di ponsel Anda. Mainkan mode multiplayer klasik seperti Team Deathmatch, Domination, dan Kill-Confirmed di peta ikonik, atau terjun ke Battle Royale 100 pemain.</p>
                    <h4>Fitur Utama:</h4>
                    <ul>
                        <li>Mode Multiplayer dan Battle Royale.</li>
                        <li>Peta dan mode ikonik dari seri Call of Duty.</li>
                        <li>Kustomisasi loadout yang mendalam.</li>
                        <li>Grafik berkualitas konsol di ponsel.</li>
                    </ul>
                `
    },
    {
        id: 12,
        title: "God of War Ragnarök",
        coverArt: "https://placehold.co/500x700/0c4a6e/e0f2fe?text=Ragnarok",
        genre: "Adventure",
        platform: "Console",
        rating: 9.6,
        trailerUrl: "https://www.youtube.com/embed/EE-4GvjKcfs", // Placeholder video
        gallery: [
            "https://placehold.co/600x400/0c4a6e/e0f2fe?text=Kratos+%26+Atreus",
            "https://placehold.co/600x400/0c4a6e/e0f2fe?text=Thor",
            "https://placehold.co/600x400/0c4a6e/e0f2fe?text=Nine+Realms"
        ],
        description: `
                    <p>Kratos dan Atreus harus melakukan perjalanan ke masing-masing Sembilan Alam untuk mencari jawaban saat mereka mempersiapkan pertempuran yang diramalkan akan mengakhiri dunia.</p>
                    <p><strong>God of War Ragnarök</strong> adalah kesimpulan epik dari saga Norse, menampilkan pertarungan yang brutal, visual yang memukau, dan cerita yang emosional.</p>
                    <h4>Fitur Utama:</h4>
                    <ul>
                        <li>Kisah sinematik yang luar biasa.</li>
                        <li>Sistem pertarungan yang disempurnakan dengan Leviathan Axe dan Blades of Chaos.</li>
                        <li>Eksplorasi kesembilan alam mitologi Norse.</li>
                        <li>Karakter yang tak terlupakan dan pengembangan cerita yang kuat.</li>
                    </ul>
                `
    },
];

const upcomingGames = [
    { title: "Grand Theft Auto VI", developer: "Rockstar Games", releaseDate: "Kuartal 1 2026" },
    { title: "Project: Mara", developer: "Ninja Theory", releaseDate: "Kuartal 2 2026" },
    { title: "Starfield: Shattered Space (DLC)", developer: "Bethesda Game Studios", releaseDate: "Kuartal 1 2026" },
    { title: "The Elder Scrolls VI", developer: "Bethesda Game Studios", releaseDate: "TBA 2026+" },
    { title: "Wolverine", developer: "Insomniac Games", releaseDate: "Kuartal 4 2026" },
    { title: "Hades II (Full Release)", developer: "Supergiant Games", releaseDate: "Kuartal 1 2026" },
    { title: "Silksong", developer: "Team Cherry", releaseDate: "TBA 2026 (Semoga)" },
];
