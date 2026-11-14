// Accurate Image Mapping Dictionary including New Saree Varieties & Jewelry
const accurateVisuals = {
    // 1. Visual Style (45 Expanded Styles)
    "Realistic (বাস্তবসম্মত)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&vs=1", desc: "শার্প ফোকাস ও প্রাকৃতিক বাস্তবসম্মত পোর্ট্রেট ফটোগ্রাফি" },
    "Cinematic (সিনেমাটিক)": { img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&auto=format&fit=crop&q=80&vs=2", desc: "ড্রামাটিক আলো ও প্রফেশনাল কালার গ্রেডিং মুভি লুক" },
    "Hyper-Realistic (হাইপার-রিয়েলিস্টিক)": { img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80&vs=3", desc: "৮কে রেজোলিউশন ও অতি-সূক্ষ্ম নিখুঁত স্কিন টেক্সচার" },
    "Photorealistic 85mm Portrait (৮৫ মিমি লেন্স প্রফেশনাল পোর্ট্রেট)": { img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=80&vs=4", desc: "৮৫ মিমি প্রাইম লেন্সের অগভীর ডেপথ ও চোখধাঁধানো বোকাহ" },
    "Editorial High-Fashion Magazine (ভোগ ম্যাগাজিন হাই-ফ্যাশন কভার)": { img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=80&vs=5", desc: "ভোগ ও হার্পার্স বাজার স্টাইলের হাই-গ্ল্যামার ফ্যাশন কভার" },
    "35mm Vintage Analog Film (৩৫ মিমি ভিন্টেজ ফিল্ম ফটোগ্রাফি)": { img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=500&auto=format&fit=crop&q=80&vs=6", desc: "ক্লাসিক অ্যানালগ ক্যামেরার ফিল্ম গ্রেইন ও নস্টালজিক রঙ" },
    "Kodak Portra 400 Warm Film (কোডাক পোর্ট্রা ৪০০ ওয়ার্ম ফিল্ম টোন)": { img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&auto=format&fit=crop&q=80&vs=7", desc: "উষ্ণ স্কিন টোন ও প্রামাণিক কোডাক কালার প্যালেট" },
    "Polaroid Instant Vintage Print (পোলারয়েড ইনস্ট্যান্ট ফটো ফ্রেম)": { img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&auto=format&fit=crop&q=80&vs=8", desc: "পোলারয়েড সাদা বর্ডার ও ভিন্টেজ ফ্ল্যাশ লাইটের ফটো" },
    "Classic Black & White Monochrome (ক্লাসিক সাদা-কালো মনোক্রোম আর্ট)": { img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80&vs=9", desc: "উচ্চ বৈপরীত্য ও সমৃদ্ধ গ্রেডিয়েন্টের সাদা-কালো পোর্ট্রেট" },
    "Documentary Candid Photojournalism (ডকুমেন্টারি ফটোসাংবাদিকতা স্টাইল)": { img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=500&auto=format&fit=crop&q=80&vs=10", desc: "কৃত্রিমতাহীন আসল জীবনের স্বাভাবিক প্রাণবন্ত মুহূর্ত" },
    "National Geographic Wildlife & Culture (ন্যাট জিও প্রাকৃতিক লেন্স স্টাইল)": { img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&auto=format&fit=crop&q=80&vs=11", desc: "ন্যাট জিও ফটোগ্রাফারদের মতো রঙিন ও গভীর সাংস্কৃতিক দৃশ্য" },
    "Unreal Engine 5 Next-Gen 3D (আনরিয়েল ইঞ্জিন ৫ আধুনিক থ্রি-ডি)": { img: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=500&auto=format&fit=crop&q=80&vs=12", desc: "লুমেন লাইটিং ও ন্যানাইট জিওমেট্রির আধুনিক ৩ডি রেন্ডার" },
    "Octane Render 3D Ray-Traced (অকটেইন রেন্ডার গ্লোয়িং থ্রি-ডি)": { img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=500&auto=format&fit=crop&q=80&vs=13", desc: "রে-ট্রেসিং গ্লাস, সাবসারফেস স্ক্যাটারিং ও আলোর ঝলক" },
    "Digital Concept Art & Matte Painting (ডিজিটাল কনসেপ্ট আর্ট পেইন্টিং)": { img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&auto=format&fit=crop&q=80&vs=14", desc: "হলিউড ফিল্মের ভিজ্যুয়াল ডেভেলপমেন্ট ডিজিটাল আর্ট" },
    "Cyberpunk Neon Hologram Glow (সাইবারপাঙ্ক নিয়ন ও হোলোগ্রাফিক আর্ট)": { img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&auto=format&fit=crop&q=80&vs=15", desc: "ভবিষ্যতমুখী নিয়ন আলো, সাইবার আর্ট ও রাতের উজ্জ্বল আভা" },
    "Pixar 3D Stylized Character Animation (পিক্সার থ্রি-ডি অ্যানিমেশন স্টাইল)": { img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=500&auto=format&fit=crop&q=80&vs=16", desc: "পিক্সার ও ডিজনির মিষ্টি বড় চোখ ও নরম থ্রি-ডি রূপ" },
    "Fantasy RPG Character Game Art (ফ্যান্টাসি আরপিজি গেম ক্যারেক্টার আর্ট)": { img: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=500&auto=format&fit=crop&q=80&vs=17", desc: "এল্ডার স্ক্রোলস ও উইচার ধাঁচের গ্ল্যামারাস ফ্যান্টাসি আর্ট" },
    "Double Exposure Fine Art (ডাবল এক্সপোজার পরাবাস্তব আর্ট)": { img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=500&auto=format&fit=crop&q=80&vs=18", desc: "মানুষের অবয়ব ও প্রকৃতির অপূর্ব দ্বৈত এক্সপোজার সংমিশ্রণ" },
    "Oil Painting on Textured Canvas (ক্যানভাসে তেলরং চিত্রকর্ম)": { img: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=500&auto=format&fit=crop&q=80&vs=19", desc: "ভারী তুলির আঁচড় ও ক্যানভাসের টেক্সচারযুক্ত ক্লাসিক তেলরং" },
    "Soft Watercolor & Gouache Wash (কোমল জলরং ও গুয়াশ ইলাস্ট্রেশন)": { img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=500&auto=format&fit=crop&q=80&vs=20", desc: "কাগজে ছড়িয়ে পড়া নরম জলরং ও স্নিগ্ধ প্যাস্টেল ছোঁয়া" },
    "Renaissance Classic Masterpiece (রেনেসাঁ যুগের ধ্রুপদী মাস্টারপিস)": { img: "https://images.unsplash.com/photo-1582561424760-0321d75e81fa?w=500&auto=format&fit=crop&q=80&vs=21", desc: "লিওনার্দো ও রাফায়েলের আমলের দেবতুল্য ধ্রুপদী আলো-ছায়া" },
    "Baroque Dramatic Chiaroscuro (বারোক ক্লাসিক্যাল আলো-আঁধারি পেইন্টিং)": { img: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=500&auto=format&fit=crop&q=80&vs=22", desc: "কারাভাজ্জিও রীতির গাঢ় অন্ধকার ব্যাকগ্রাউন্ড ও নাটকীয় উজ্জ্বল আলো" },
    "Impressionism Claude Monet Style (ইমপ্রেশনিজম মোনে আলোকচিত্র আর্ট)": { img: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?w=500&auto=format&fit=crop&q=80&vs=23", desc: "ছোট ছোট ব্রাশ স্ট্রোক ও প্রাকৃতিক আলোর ক্ষণিক রূপ" },
    "Art Nouveau Alphonse Mucha (আর্ট নুভো আলফনস মুকা অলঙ্করণ)": { img: "https://images.unsplash.com/photo-1577083552427-4f6760f38b29?w=500&auto=format&fit=crop&q=80&vs=24", desc: "লতানো ফুলের নকশা, সোনার বর্ডার ও রোমান্টিক রেখাচিত্র" },
    "Surrealism Salvador Dali Style (স্যুররিয়ালিজম স্বপ্নিল পরাবাস্তব আর্ট)": { img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=500&auto=format&fit=crop&q=80&vs=25", desc: "স্বপ্নের মতো ভাসমান উপাদান ও রূপকধর্মী কল্পনা" },
    "Palette Knife Thick Impasto Oil (প্যালেট নাইফ টেক্সচার্ড পেইন্টিং)": { img: "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?w=500&auto=format&fit=crop&q=80&vs=26", desc: "ছুরি দিয়ে ক্যানভাসে মাখানো ঘন ত্রিমাত্রিক রঙের পরত" },
    "Charcoal & Graphite Sketch (চারকোল ও গ্রাফাইট পেনসিল স্কেচ)": { img: "https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?w=500&auto=format&fit=crop&q=80&vs=27", desc: "কাগজের ওপর চারকোল ডাস্ট ও তীক্ষ্ম পেনসিল শেডিং" },
    "Stained Glass Window Mosaic (ক্যাথেড্রাল স্টেইন্ড গ্লাস মোজাইক আর্ট)": { img: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=500&auto=format&fit=crop&q=80&vs=28", desc: "রঙিন কাচের মধ্য দিয়ে বিচ্ছুরিত আলো ও সীসার নকশা" },
    "Raja Ravi Varma Classic Royal Oil (রাজা রবি বর্মা রয়্যাল তৈলচিত্র রীতি)": { img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&auto=format&fit=crop&q=80&vs=29", desc: "ভারতীয় পৌরাণিক সৌন্দর্য, সোনার জরি শাড়ি ও রয়্যাল দীপ্তি" },
    "Mughal Miniature Intricate Painting (মুঘল মিনিয়েচার সূক্ষ্ম রাজকীয় চিত্রকলা)": { img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500&auto=format&fit=crop&q=80&vs=30", desc: "সোনার জল ও সূক্ষ্ম তুলির আঁকা মুঘল দরবার ও বাগান আর্ট" },
    "Tanjore Gold Leaf Foil Painting (তাঞ্জোর সোনার পাত খচিত ক্লাসিক চিত্র)": { img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&auto=format&fit=crop&q=80&vs=31", desc: "খাঁটি সোনার পাত ও রত্নখচিত প্রাচীন দক্ষিণ ভারতীয় চিত্রকলা" },
    "Madhubani & Mithila Folk Art (মধুবনী ও মিথিলা ঐতিহ্যবাহী ফোক আর্ট)": { img: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=500&auto=format&fit=crop&q=80&vs=32", desc: "জ্যামিতিক প্যাটার্ন, প্রাকৃতিক রং ও পৌরাণিক লোকচিত্র" },
    "Pattachitra Traditional Scroll Art (পটচিত্র সনাতন স্ক্রল আর্ট)": { img: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500&auto=format&fit=crop&q=80&vs=33", desc: "কাপড়ের পটে ভেষজ রঙের তৈরি নিখুঁত নকশাদার ওড়িশা পটচিত্র" },
    "Kalighat Pat Bengali Folk Art (কালীঘাট পট ঐতিহ্যবাহী বাংলা চিত্র)": { img: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500&auto=format&fit=crop&q=80&vs=34", desc: "উনিশ শতকের কলকাতার মোটা তুলির সাবলীল বাঙালি পটচিত্র" },
    "Japanese Ukiyo-e Woodblock Print (জাপানি উকিও-ই কাঠখোদাই প্রিন্ট)": { img: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=500&auto=format&fit=crop&q=80&vs=35", desc: "হোকুসাই ও হিরোশিগে ধাঁচের ক্লাসিক কাঠের ব্লকের জাপানি চিত্র" },
    "Chinese Ink Wash Sumi-e (চাইনিজ সুমি-ই কালি চিত্রকর্ম)": { img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=500&auto=format&fit=crop&q=80&vs=36", desc: "কালো কালির জলীয় ধোঁয়াশা ও মিনিমালিস্ট প্রাচ্য শিল্প" },
    "Anime Studio Ghibli Aesthetic (স্টুডিও ঘিবলি শান্ত নস্টালজিক অ্যানিমে)": { img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&auto=format&fit=crop&q=80&vs=37", desc: "হায়াও মিয়াজাকির হাতে আঁকা নরম মেঘ ও সবুজ প্রকৃতির রূপ" },
    "Makoto Shinkai Glowing Anime Sky (মাকোতো শিনকাই উজ্জ্বল অ্যানিমে আকাশ)": { img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=80&vs=38", desc: "ইয়োর নেম খ্যাত চোখ ধাঁধানো তারাভরা আকাশ ও রোদের প্রতিফলন" },
    "Japanese Manga Ink & Halftone Screen (জাপানি মাঙ্গা ব্ল্যাক অ্যান্ড হোয়াইট)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&vs=39", desc: "কালো কালির শার্প হ্যাচিং ও ডট স্ক্রিনটোন মাঙ্গা প্যানেল" },
    "Vintage Pop Art Andy Warhol (ভিন্টেজ পপ আর্ট ও অ্যান্ডি ওয়ারহল)": { img: "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?w=500&auto=format&fit=crop&q=80&vs=40", desc: "বোল্ড সিল্কস্ক্রিন কালার ব্লকিং ও ষাটের দশকের রেট্রো ভাইব" },
    "Comic Book Graphic Novel Ink (গ্রাফিক নভেল আমেরিকান কমিক আর্ট)": { img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&auto=format&fit=crop&q=80&vs=41", desc: "ডার্ক নাইট ধাঁচের গাঢ় কালি ও ড্রামাটিক প্যানেল আর্ট" },
    "Gothic Dark Fantasy Oil (গথিক ডার্ক ফ্যান্টাসি ভিক্টোরিয়ান আর্ট)": { img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=500&auto=format&fit=crop&q=80&vs=42", desc: "রহস্যময় অন্ধকার, ভিক্টোরিয়ান স্থাপত্য ও অভিজাত গথিক আভা" },
    "Art Deco 1920s Glamour (আর্ট ডেকো বিশের দশকের জ্যামিতিক গ্ল্যামার)": { img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=500&auto=format&fit=crop&q=80&vs=43", desc: "দ্য গ্রেট গ্যাটসবি ধাঁচের সোনা ও জ্যামিতিক নকশার আভিজাত্য" },
    "Cybernetic Vector Minimalist Flat (ভেক্টর ফ্ল্যাট মিনিমালিস্ট আর্ট)": { img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&auto=format&fit=crop&q=80&vs=44", desc: "ছায়াহীন ক্লিন লাইন ও মসৃণ আধুনিক কালার প্যালেট" },
    "Custom (কাস্টম ডেসক্রিপশন)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&vs=45", desc: "নিজের পছন্দমতো যেকোনো অনন্য ভিজ্যুয়াল আর্ট স্টাইল" },

    // 2. Outfit Types (Expanded Categories)
    "Saree (শাড়ি)": { img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&auto=format&fit=crop&q=80", desc: "ঐতিহ্যবাহী ও আধুনিক বিভিন্ন শাড়ি" },
    "Lehenga Choli (লেহেঙ্গা চোলি)": { img: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=500&auto=format&fit=crop&q=80", desc: "গর্জিয়াস ট্র্যাডিশনাল লেহেঙ্গা ও চোলি পোশাক" },
    "Ghagra Choli (ঐতিহ্যবাহী ঘাঘরা চোলি)": { img: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500&auto=format&fit=crop&q=80", desc: "রাজস্থানি ও গুজরাটি ঐতিহ্যবাহী ফোক ঘাঘরা চোলি" },
    "Salwar Kameez & Suit (সালোয়ার স্যুট)": { img: "https://images.unsplash.com/photo-1583391733975-04285b0d0999?w=500&auto=format&fit=crop&q=80", desc: "মার্জিত ও আরামদায়ক সালোয়ার কামিজ ও স্যুট" },
    "Anarkali Suit (আনারকলি স্যুট)": { img: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500&auto=format&fit=crop&q=80", desc: "ফ্লোয়িং রাজকীয় অনারকুলি ফ্রক স্টাইল স্যুট" },
    "Sharara & Gharara (শারারা ও ঘারারা)": { img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&auto=format&fit=crop&q=80", desc: "লখনউ ঘারারা ও ফ্লেয়ার্ড শারারা সেট" },
    "Regional Ethnic Wear (আঞ্চলিক ঐতিহ্যবাহী পোশাক)": { img: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=500&auto=format&fit=crop&q=80", desc: "মেখলা চাদর, পাবাড়াই হাফ-শাড়ি, কাশ্মীরি ফিরান" },
    "Indo-Western Fusion (ইন্দো-ওয়েস্টার্ন ফিউশন)": { img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=80", desc: "ইন্দো-ওয়েস্টার্ন শাড়ি গাউন, কেপ ও ধুতি প্যান্ট" },
    "Gown & Evening Wear (গাউন ও সান্ধ্য পোশাক)": { img: "https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?w=500&auto=format&fit=crop&q=80", desc: "বিলাসবহুল রয়্যাল বল গাউন ও ইভনিং স্লিট গাউন" },
    "Western Dresses (ওয়েস্টার্ন ওয়ান-পিস ড্রেস)": { img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=80", desc: "বডিকন, এ-লাইন, র‌্যাপ ও ককটেল পার্টি ড্রেস" },
    "Suits, Co-ords & Separates (প্যান্ট স্যুট ও কো-অর্ড)": { img: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&auto=format&fit=crop&q=80", desc: "ফর্মাল প্যান্ট স্যুট, ম্যাচিং কো-অর্ড ও স্কার্ট স্যুট" },
    "Jumpsuit, Romper & Dungaree (জাম্পস্যুট ও রম্পার)": { img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&auto=format&fit=crop&q=80", desc: "স্লিক জাম্পস্যুট, সামার রম্পার ও ডেনিম ডানগারি" },
    "Kaftan, Lounge & Resort Wear (কাফতান ও লাউঞ্জওয়্যার)": { img: "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=500&auto=format&fit=crop&q=80", desc: "রয়্যাল সিল্ক কাফতান, কিমোনো ও বিচ সারং ড্রেস" },
    "Custom (কাস্টম ডেসক্রিপশন)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80", desc: "নিজের ইচ্ছামতো কাস্টম পোশাক" },

    // 3. Saree Varieties & Styles
    "Satin Silk Saree (স্যাটিন সিল্ক)": { img: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500&auto=format&fit=crop&q=80", desc: "মসৃণ ও চকচকে স্যাটিন সিল্ক" },
    "Lycra Ready-to-Wear Saree (লাইক্রা রেডি-টু-ওয়্যার)": { img: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&auto=format&fit=crop&q=80", desc: "আধুনিক প্রি-স্টিচড রেডি শাড়ি" },
    "Organza Saree (অর্গানজা)": { img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500&auto=format&fit=crop&q=80", desc: "হালকা ও ট্রান্সপারেন্ট গর্জিয়াস শাড়ি" },
    "Tissue Silk Saree (টিস্যু সিল্ক)": { img: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=500&auto=format&fit=crop&q=80", desc: "মেটালিক শাইন টিস্যু সিল্ক" },
    "Chiffon Saree (শিফন)": { img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&auto=format&fit=crop&q=80", desc: "অত্যন্ত ফ্লোয়িং ও সফট শিফন" },
    "Kanjivaram Silk (কাঞ্জিভরম)": { img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500&auto=format&fit=crop&q=80", desc: "দক্ষিণ ভারতীয় রয়্যাল কাঞ্জিভরম" },
    "Banarasi Silk (বেনারসী)": { img: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=500&auto=format&fit=crop&q=80", desc: "বেনারসের ট্র্যাডিশনাল রয়্যাল সিল্ক" },
    "Sequin Work Saree (সিক্যুইন ওয়ার্ক)": { img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&auto=format&fit=crop&q=80", desc: "চকচকে সিক্যুইন এমব্রয়ডারি" },
    "Georgette Saree (জর্জেট)": { img: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=500&auto=format&fit=crop&q=80", desc: "ক্যাজুয়াল ও পার্টি রেডিশ জর্জেট" },
    "Cotton Jamdani (জামদানি)": { img: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=500&auto=format&fit=crop&q=80", desc: "ঐতিহ্যবাহী হাতে বোনা জামদানি" },
    "Bengali Style (আটপৌরে)": { img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=500&auto=format&fit=crop&q=80", desc: "দুই দিকে আঁচল ঝোলানো আটপৌরে ড্র্যাপ" },
    "Nivi Drape (নিভি)": { img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&auto=format&fit=crop&q=80", desc: "ক্লাসিক ট্র্যাডিশনাল নিভি ড্র্যাপ" },
    "Seedha Pallu (সোজা আঁচল)": { img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=80", desc: "সোজা আঁচলের মার্জিত স্টাইল" },
    "Pleated Drape (প্লিয়েটেড)": { img: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=500&auto=format&fit=crop&q=80", desc: "পিন করা পরিচ্ছন্ন প্লিয়েটেড বর্ডার" },
    "Ruffled Drape (রফলস)": { img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=500&auto=format&fit=crop&q=80", desc: "আধুনিক রফলড বর্ডার শাড়ি" },
    "Modern Belted Style (বেল্ট স্টাইল)": { img: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=500&auto=format&fit=crop&q=80", desc: "কোমরবন্ধ বা বেল্টযুক্ত শাড়ি লুক" },

    // 4. Dupatta / Veil / Orna (GUARANTEED 200 OK SPECIFIC DUPATTA PHOTOS)
    "Sheer Net Dupatta on Head (মাথায় ঘৌংঘাট / ওড়না)": { img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=500&auto=format&fit=crop&q=80", desc: "মাথার ওপর অলঙ্কৃত ব্রাইডাল ঘৌংঘাট / ওড়না" },
    "Draped over Both Shoulders (দুই কাঁধে ওড়না)": { img: "https://images.unsplash.com/photo-1606744888344-493238951221?w=500&auto=format&fit=crop&q=80", desc: "দুই কাঁধের ওপর দুপাশে বিস্তৃত রেশমি কারুকার্যময় ওড়না" },
    "One-Side Drape (একপাশে ওড়না)": { img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=500&auto=format&fit=crop&q=80", desc: "এক কাঁধে পিন করা স্টাইলিশ প্লিটেড ফ্লোয়িং ওড়না" },
    "Royal Long Veil / Train (রাজকীয় লম্বা ওড়না)": { img: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=500&auto=format&fit=crop&q=80", desc: "মেঝেতে ছড়ানো রাজকীয় দীর্ঘ ব্রাইডাল ভেইল বা লম্বা ওড়না" },
    "No Dupatta / Orna (ওড়না ছাড়া)": { img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&auto=format&fit=crop&q=80", desc: "ওড়না বা ঘৌংঘাট ছাড়া মার্জিত সিম্পল পোশাক" },

    // 5. Waist Accessories & Color Finishes
    "Classic Yellow Gold Kamarbandh (চকচকে সোনালী কোমরবন্ধ)": { img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&auto=format&fit=crop&q=80", desc: "ঐতিহ্যবাহী চকচকে খাঁটি সোনার শিকল কোমরবন্ধ" },
    "Antique Temple Gold Kamarbandh (অ্যান্টিক ম্যাট গোল্ড কোমরবন্ধ)": { img: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=500&auto=format&fit=crop&q=80", desc: "দক্ষিণ ভারতীয় টেম্পল খোদাই ম্যাট সোনালী কোমরবন্ধ" },
    "Rose Gold Kamarbandh (রোজ গোল্ড আধুনিক কোমরবন্ধ)": { img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&auto=format&fit=crop&q=80", desc: "আধুনিক সূক্ষ্ম রোজ গোল্ড ধাতব বেল্ট" },
    "Silver Metallic Kamarbandh (রূপালী জরির কোমরবন্ধ)": { img: "https://images.unsplash.com/photo-1611591475883-93836d5e7a96?w=500&auto=format&fit=crop&q=80", desc: "ঝলমলে রূপালী ধাতু বা জরির ঐতিহ্যবাহী কোমরবন্ধ" },
    "Oxydised Silver / German Silver Belt (অক্সিডাইজড রূপালী বোহো কোমরবন্ধ)": { img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&auto=format&fit=crop&q=80", desc: "বোহেমিয়ান ট্রাইবাল ও ঢাকাই জামদানির সাথে অক্সিডাইজড রুপা" },
    "Pearl White Multi-Layered Waist Chain (মুক্তা খচিত শুভ্র সাদা কোমরবন্ধ)": { img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&auto=format&fit=crop&q=80", desc: "শুভ্র সাদা খাঁটি মুক্তার মালা গাঁথা রাজকীয় কোমরবন্ধ" },
    "Ruby Red Gemstone Studded Kamarbandh (রুবি লাল রত্নখচিত কোমরবন্ধ)": { img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&auto=format&fit=crop&q=80", desc: "রক্তলাল রুবি পাথর ও কুন্দন খচিত জমকালো কোমরবন্ধ" },
    "Emerald Green Gemstone Kamarbandh (পান্না সবুজ রত্নখচিত কোমরবন্ধ)": { img: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=500&auto=format&fit=crop&q=80", desc: "পান্না সবুজ মূল্যবান রত্ন ও সোনার ফিনিশিং" },
    "Navratna Multi-Color Stone Kamarbandh (নবরত্ন বহু রঙের রত্ন কোমরবন্ধ)": { img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&auto=format&fit=crop&q=80", desc: "নয়টি ভিন্ন মূল্যবান রত্নের সনাতনী নবরত্ন কোমরবন্ধ" },
    "Red Velvet Embroidered Belt (লাল ভেলভেট এমব্রয়ডারি বেল্ট)": { img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=80", desc: "গাঢ় লাল ভেলভেট কাপড়ের ওপর সোনালী জরি ও সিক্যুইন বেল্ট" },
    "Maroon Zari Work Fabric Belt (মেরুন জরি কাজ করা ফ্যাব্রিক বেল্ট)": { img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=80", desc: "বেনারসী ও ব্রাইডাল লেহেঙ্গার সাথে ম্যাচিং মেরুন জরি বেল্ট" },
    "Rani Pink Silk Embroidered Belt (রানি গোলাপী সিল্ক বেল্ট)": { img: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=500&auto=format&fit=crop&q=80", desc: "উজ্জ্বল রানি পিঙ্ক সিল্ক ফ্যাব্রিক কোমরবন্ধ" },
    "Royal Blue Sequin Belt (রয়্যাল ব্লু সিক্যুইন বেল্ট)": { img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&auto=format&fit=crop&q=80", desc: "চকচকে নীল সিক্যুইন পার্টি বেল্ট" },
    "Emerald Green Zari Belt (সবুজ জরি বর্ডার বেল্ট)": { img: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500&auto=format&fit=crop&q=80", desc: "সবুজ সিল্ক কাপড়ের জরি কারুকার্যময় বেল্ট" },
    "Golden Sequin Shimmer Belt (চকচকে সোনালী সিক্যুইন বেল্ট)": { img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&auto=format&fit=crop&q=80", desc: "পুরো সোনালী সিক্যুইনে মোড়ানো ঝলমলে বেল্ট" },
    "Classic Jet Black Leather Belt with Gold Buckle (কালো চামড়ার আধুনিক গোল্ড বাকল বেল্ট)": { img: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=500&auto=format&fit=crop&q=80", desc: "বড় সোনালী বাকলযুক্ত জেট ব্ল্যাক লেদার বেল্ট" },
    "Tan / Camel Brown Leather Belt (ট্যান ব্রাউন লেদার বেল্ট)": { img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=80", desc: "ক্যাজুয়াল কুর্তি ও শাড়ির ফিউশন লুকের বাদামি চামড়ার বেল্ট" },
    "Ivory & Nude Slim Belt (আইভরি ও নিউড স্লিম বেল্ট)": { img: "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=500&auto=format&fit=crop&q=80", desc: "মিনিমালিস্ট আইভরি হোয়াইট স্লিম বেল্ট" },
    "No Waist Belt (কোমরবন্ধ ছাড়া স্বাভাবিক পোশাক)": { img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=80", desc: "কোনো অতিরিক্ত কোমরবন্ধ ছাড়া স্বাভাবিক ড্রেস" },

    // 6. Head Jewellery
    "Maang Tikka (মাংটিকা)": { img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&auto=format&fit=crop&q=80", desc: "সিঁথির মাঝখানে ঝুলানো মাংটিকা" },
    "Matha Patti (মাথা পট্টি)": { img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=80", desc: "কপালের দুপাশে বিস্তৃত মাথা পট্টি" },
    "Traditional Bengali Tiara & Tikli (ঐতিহ্যবাহী টায়রা ও টিকলি)": { img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&auto=format&fit=crop&q=80", desc: "বাঙালি কনেদের ঐতিহ্যবাহী সোনার সূক্ষ্ম টায়রা ও টিকলি সেট" },
    "Bridal Shola & Gold Mukut (বাঙালি ব্রাইডাল শোলার মুকুট)": { img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=500&auto=format&fit=crop&q=80", desc: "বাঙালি বিয়ের সনাতন সাদা শোলার রাজকীয় কারুকার্যময় কনের মুকুট" },
    "Rajasthani Borla (রাজস্থানি বোরলা মাংটিকা)": { img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&auto=format&fit=crop&q=80", desc: "রাজস্থানি মারওয়াড়ি গোলাকার ঘণ্টা আকারের রত্নখচিত বোরলা" },
    "Sheeshpatti Headband (রাজকীয় শীশপট্টি হেডব্যান্ড)": { img: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=500&auto=format&fit=crop&q=80", desc: "চুলের ওপর দিয়ে হেডব্যান্ড স্টাইলে পরা ভারী চওড়া রয়্যাল শীশপট্টি" },
    "Multi-Layered Royal Matha Patti (মাল্টি-লেয়ার্ড রাজকীয় মাথা পট্টি)": { img: "https://images.unsplash.com/photo-1611591475883-93836d5e7a96?w=500&auto=format&fit=crop&q=80", desc: "কপালের ওপর তিন থেকে পাঁচ স্তরের মুক্তা ও কুন্দনের ভারী মাথা পট্টি" },
    "Passa / Jhumar (পাশা / ঝুমার)": { img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80", desc: "মাথার বাম পাশে ঝুলানো রাজকীয় মুঘল পাশা / ঝুমার" },
    "Surya & Chandra Hair Brooches (দক্ষিণী সূর্য ও চন্দ্র হেয়ার ব্রোচ)": { img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&auto=format&fit=crop&q=80", desc: "মাথার দুই পাশে খোঁপার ওপরে সূর্য ও চাঁদের আকারের সোনার অলঙ্কার" },
    "South Indian Jada Billa (বেণীর জন্য রত্নখচিত চোট্টি ও বিল্লাই)": { img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500&auto=format&fit=crop&q=80", desc: "দক্ষিণ ভারতীয় লম্বা বেণীর ওপর পর্যায়ক্রমে বসানো সোনার চাকতি ও চোট্টি" },
    "Royal Hair Bun Juda Pin (সোনার ময়ূর জুদা পিন ও খোঁপার ব্রোচ)": { img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&auto=format&fit=crop&q=80", desc: "খোঁপার মাঝে বা পাশে আটকানো ময়ূর বা পদ্ম ফুলের খাঁটি সোনার জুদা পিন" },
    "Bridal Pearl Hair Vine (মুক্তা ও ক্রিস্টাল হেয়ার ভাইন)": { img: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=500&auto=format&fit=crop&q=80", desc: "খোলা চুল বা খোঁপার সাথে লতানো আধুনিক মুক্তা ও ক্রিস্টালের হেয়ার ভাইন" },
    "Floral Crown (ফুলের মুকুট)": { img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80", desc: "তাজা জুঁই, বেলি ও গোলাপ ফুলের উৎসবের মুকুট" },
    "No Head Jewellery (কিছুই না)": { img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&auto=format&fit=crop&q=80", desc: "মাথায় কোনো অলঙ্কার থাকবে না" },

    // 7. Nose Jewellery
    "Bengali Bridal Nath with Pearl Chain (বাঙালি ব্রাইডাল বড় নথ ও মুক্তার টানা শিকল)": { img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=80", desc: "বাঙালি কনেদের মুক্তার টানা শিকলযুক্ত রাজকীয় বড় সোনার নথ" },
    "Traditional Round Nath (ঐতিহ্যবাহী বৃত্তাকার বড় নথ)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80", desc: "ঐতিহ্যবাহী বৃত্তাকার বড় সোনার নথ" },
    "Marathi Motyanchi Nath (ঐতিহ্যবাহী মুক্তাখচিত মারাঠি নথ)": { img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=500&auto=format&fit=crop&q=80", desc: "ঐতিহ্যবাহী কাজুবাদাম আকৃতির মুক্তাখচিত মারাঠি নথ" },
    "Kumaoni / Tehri Royal Big Nath (উত্তরাখণ্ডের বিশাল কুমাওনি ময়ূর নথ)": { img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&auto=format&fit=crop&q=80", desc: "উত্তরাখণ্ডের বিশাল আকারের সোনার পাতে ময়ূর ও রুবি পাথর খোদাই করা নথ" },
    "Rajasthani Kundan Polki Nath (রাজস্থানি কুন্দন ও পোলকি নথ)": { img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&auto=format&fit=crop&q=80", desc: "রাজস্থানি রয়্যাল কুন্দন ও আনকাট পোলকি হীরার রাজকীয় নথ" },
    "Pearl & Stone Nolok (নাকের ঝুলন্ত নোলক দুল)": { img: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=500&auto=format&fit=crop&q=80", desc: "নাকের নিচে ঝুলানো মুক্তা বা রত্নখচিত সনাতন নোলক" },
    "Septum Ring / Bullak (মাঝের নাকের ঝুলন্ত রিং ও বুল্লাক)": { img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&auto=format&fit=crop&q=80", desc: "দুই নাকের মাঝখান থেকে ঝুলন্ত প্রাচীন বুল্লাক রিং" },
    "South Indian Mukku Pudaka (দক্ষিণ ভারতীয় দুই নাকের রত্নখচিত জোড়া নাকফুল)": { img: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=500&auto=format&fit=crop&q=80", desc: "দক্ষিণী ভারতনাট্যম ঐতিহ্যে দুই নাকেই পরা রুবি ও হিরের পদ্ম নাকফুল" },
    "Punjabi Laung Clove Stud (ঐতিহ্যবাহী সোনালী লবঙ্গ স্টাড)": { img: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=500&auto=format&fit=crop&q=80", desc: "পাঞ্জাবি ঐতিহ্যের লবঙ্গের আকৃতির খাঁটি সোনার নাকফুল" },
    "Diamond Floral Cluster Stud (হীরার ফুলের বড় নাকফুল)": { img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=500&auto=format&fit=crop&q=80", desc: "মাঝখানে বড় পাথর ও চারপাশে হীরা বসানো ফুলের মতো আধুনিক নাকফুল" },
    "Minimalist Slim Gold Nose Hoop (পাতলা মসৃণ স্লিম গোল্ড রিং)": { img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80", desc: "আধুনিক মসৃণ স্লিম পাতলা সোনার হুপ রিং" },
    "Single Diamond Nose Pin (এক পাথরের সূক্ষ্ম ডায়মন্ড নোজপিন)": { img: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=500&auto=format&fit=crop&q=80", desc: "একক জ্বলজ্বলে খাঁটি হিরের ক্লাসিক নোজপিন" },
    "Clip-on Non-Pierced Bridal Nath (নাক না ফোঁড়ানো ব্রাইডাল ক্লিপ-অন নথ)": { img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=80", desc: "নাক না ফোঁড়ানো মেয়েদের জন্য আরামদায়ক প্রেসার ক্লিপ নথ" },
    "No Nose Ring (কিছুই না)": { img: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=500&auto=format&fit=crop&q=80", desc: "নাকে কোনো নথ/নোলক থাকবে না" },

    // 8. Neck Jewellery
    "Royal Choker (গলার সাথে আঁটসাঁট রাজকীয় চোকার)": { img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop&q=80", desc: "গলার সাথে আঁটসাঁট বসা রত্ন ও সোনার রাজকীয় চোকার" },
    "Bengali Saat Noli Haar (বাঙালি সাতনরী রাজকীয় সোনার হার)": { img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=80", desc: "সাতটি পৃথক সোনার শিকলের স্তরে বুক পর্যন্ত বিস্তৃত অতি-ঐতিহ্যবাহী বাঙালি সাতনরী হার" },
    "Bengali Paati Chik (বাঙালি পাটি চিক / চওড়া সোনার চোকার)": { img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&auto=format&fit=crop&q=80", desc: "গলার সাথে ফিট হয়ে বসা চওড়া খাঁটি সোনার জালি কাজের ঐতিহ্যবাহী পাটি চিক" },
    "Layered Combo: Choker + Rani Haar (চোকার ও রানি হারের দ্বৈত কম্বিনেশন)": { img: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=500&auto=format&fit=crop&q=80", desc: "গলায় আঁটসাঁট চোকার এবং নিচে দীর্ঘ রানি হারের অপূর্ব দ্বৈত ব্রাইডাল কম্বিনেশন" },
    "Rani Haar (বহুস্তর বিশিষ্ট রাজকীয় রানি হার)": { img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=80", desc: "বহুস্তর বিশিষ্ট ঝুলন্ত রাজকীয় ব্রাইডাল রানি হার" },
    "Long Gold Necklace (বুক পর্যন্ত ঝুলানো দীর্ঘ সোনার হার)": { img: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=500&auto=format&fit=crop&q=80", desc: "বুক পর্যন্ত ঝুলানো খাঁটি সোনার ক্লাসিক দীর্ঘ নেকলেস" },
    "Traditional Hasli / Hansuli Collar (ঐতিহ্যবাহী ভারী খাঁটি হাঁসুলি হার)": { img: "https://images.unsplash.com/photo-1611591475883-93836d5e7a96?w=500&auto=format&fit=crop&q=80", desc: "কলার নেকলেসের আদলে তৈরি প্রাচীন রাজকীয় বাঁকানো সোনার হাঁসুলি" },
    "Kundan & Polki Royal Bridal Set (কুন্দন ও পোলকি ব্রাইডাল রত্ন নেকলেস)": { img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&auto=format&fit=crop&q=80", desc: "আনকাট হীরা, পান্না ও মুক্তার ঝালরযুক্ত জমকালো রাজস্থানি কুন্দন পোলকি সেট" },
    "South Indian Kasu Mala / Coin Necklace (দক্ষিণী পবিত্র লক্ষ্মী কাসু মালা / মোহর হার)": { img: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=500&auto=format&fit=crop&q=80", desc: "খাঁটি সোনার দেবী লক্ষ্মীর কয়েন বা মোহরে গাঁথা দক্ষিণ ভারতের বিখ্যাত কাসু মালা" },
    "Multi-Strand Pearl Ruffle Haar (বহু স্তরের রাজকীয় শুভ্র মুক্তার মালা)": { img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&auto=format&fit=crop&q=80", desc: "পাঁচ থেকে সাত স্তরের খাঁটি শুভ্র মুক্তার তৈরি নিজাম ও মহারানি স্টাইল মালা" },
    "Temple Jewellery Set (খোদাই করা দেব-দেবী টেম্পল জুয়েলারি সেট)": { img: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=500&auto=format&fit=crop&q=80", desc: "প্রাচীন মন্দির স্থাপত্যের দেব-দেবী খোদাই করা ম্যাট সোনার টেম্পল গয়না" },
    "Traditional Mangalsutra (কালো পুঁতি ও সোনার পবিত্র বৈবাহিক মঙ্গলসূত্র)": { img: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=500&auto=format&fit=crop&q=80", desc: "কালো পুঁতি ও সোনার লকেটযুক্ত সনাতনী বৈবাহিক শুভ মঙ্গলসূত্র" },
    "Diamond Solitaire Tennis Necklace (এক লাইনের খাঁটি হীরার টেনিস নেকলেস)": { img: "https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=500&auto=format&fit=crop&q=80", desc: "এক সারিতে সাজানো খাঁটি হীরার আধুনিক স্লিক পার্টি ও সান্ধ্য নেকলেস" },
    "Oxydised Silver Tribal Mirror Necklace (অক্সিডাইজড রূপালী ট্রাইবাল ও বোহো হার)": { img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&auto=format&fit=crop&q=80", desc: "সুতি শাড়ি ও ইন্দো-ওয়েস্টার্ন সাজের জন্য আয়না ও ঘুঙুর খচিত রূপালী বোহো হার" },
    "Navratna Royal Nine-Gem Necklace (নয়টি রত্নখচিত সনাতনী নবরত্ন হার)": { img: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=500&auto=format&fit=crop&q=80", desc: "নয়টি ভিন্ন মূল্যবান রত্নখচিত বৈদিক সনাতনী রয়্যাল হার" },
    "Minimalist Gold Pendant Set (সিম্পল এলিমেন্ট পেন্ডেন্ট ও চেইন)": { img: "https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=500&auto=format&fit=crop&q=80", desc: "পাতলা সোনার চেইনে ঝোলানো মার্জিত ক্লাসিক পেন্ডেন্ট" },
    "No Necklace (কিছুই না)": { img: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=500&auto=format&fit=crop&q=80", desc: "গলায় কোনো হার ছাড়া স্বাভাবিক রূপ" },

    // 9. Ear Jewellery
    "Traditional Gold Jhumka (ঐতিহ্যবাহী ঝুলন্ত সোনার ঝুমকা)": { img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=500&auto=format&fit=crop&q=80", desc: "ঘণ্টা আকারের ঐতিহ্যবাহী ঝুলন্ত খাঁটি সোনার ঝুমকা" },
    "Royal Chandbali (চাঁদের আকৃতির অলঙ্কৃত চাঁদবালি)": { img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&auto=format&fit=crop&q=80", desc: "অর্ধচন্দ্রাকার কুন্দন ও মুক্তার ঝালরযুক্ত রাজকীয় চাঁদবালি" },
    "Bengali Kaan Pasha (বাঙালি বড় লতি-ঢাকা সোনার কানপাশা)": { img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&auto=format&fit=crop&q=80", desc: "বাঙালি ঐতিহ্যের কানের লতি সম্পূর্ণ ঢেকে রাখা বড় সোনার জালি কাজের কানপাশা" },
    "Traditional Kaanbala (ঐতিহ্যবাহী সোনার কানবালা)": { img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&auto=format&fit=crop&q=80", desc: "ঝুলন্ত সোনার চাকা বা অর্ধচন্দ্রের নিখুঁত কারুকার্যময় কানবালা" },
    "Jhumka with Pearl Kaan-Taana (মুক্তার কানটানা শিকলযুক্ত ব্রাইডাল ঝুমকা)": { img: "https://images.unsplash.com/photo-1611591475883-93836d5e7a96?w=500&auto=format&fit=crop&q=80", desc: "ঝুমকা থেকে শুরু হয়ে চুলে বা খোঁপার দিকে যাওয়া তিন স্তরের মুক্তার কানটানা শিকল" },
    "Full Ear Cuff / Kaan Phool (পুরো কান-ঢাকা ময়ূর ও লতাপাতা কাফ)": { img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&auto=format&fit=crop&q=80", desc: "কানের লতি থেকে কার্টিলেজ পর্যন্ত সম্পূর্ণ কান জড়িয়ে রাখা সোনার ময়ূর নকশার কাফ" },
    "Kundan Polki Jhumka with Emerald Drops (কুন্দন ও পান্না ঝালরযুক্ত রাজস্থানি ঝুমকা)": { img: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=500&auto=format&fit=crop&q=80", desc: "আনকাট হীরা ও সবুজ পান্নার ড্রপসযুক্ত জমকালো রাজস্থানি কুন্দন ঝুমকা" },
    "Sui Dhaga / Long Threader (সরু সোনার চেইন সুইসুতো দুল)": { img: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=500&auto=format&fit=crop&q=80", desc: "কানের সামনে-পেছনে ঝুলন্ত অত্যন্ত মার্জিত ও স্লিম সোনার সুইসুতো দুল" },
    "Chandelier Dangler Earrings (কাঁধ ছোঁয়া গ্ল্যামারাস ঝাড়বাতি দুল)": { img: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=500&auto=format&fit=crop&q=80", desc: "বহুস্তর বিশিষ্ট কাঁধ ছোঁয়া ড্রামাটিক ও আকর্ষণীয় সান্ধ্য পার্টি ড্রপস" },
    "Traditional Gold Bali / Hoops (ঐতিহ্যবাহী সোনার বালি বা হুপ দুল)": { img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80", desc: "কারুকার্যময় খাঁটি সোনার গোলাকার ঐতিহ্যবাহী বালি দুল" },
    "Diamond Solitaire Studs (একক খাঁটি হীরার ক্লাসিক স্টাড)": { img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500&auto=format&fit=crop&q=80", desc: "কানের লতিতে উজ্জ্বল জ্বলজ্বলে খাঁটি হীরার একক সলিটায়ার স্টাড" },
    "Diamond Teardrop Danglers (অশ্রুবিন্দুর আকারের হীরার পার্টি ড্রপস)": { img: "https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=500&auto=format&fit=crop&q=80", desc: "অশ্রুবিন্দুর মতো ঝুলন্ত ডায়মন্ডের আধুনিক পার্টি ও রিসেপশন দুল" },
    "Oxydised Silver Tribal Danglers (অক্সিডাইজড রূপালী ঘুঙুর ও আয়না দুল)": { img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=500&auto=format&fit=crop&q=80", desc: "সুতি ও জামদানি শাড়ির সাথে মানানসই বোহেমিয়ান রূপালী ট্রাইবাল দুল" },
    "Pearl Drop Floral Tops (মুক্তা ড্রপ মিষ্টি ফুলের টপস)": { img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&auto=format&fit=crop&q=80", desc: "কানের লতিতে বসা ফুলের নকশায় ঝুলন্ত মুক্তার ক্লাসিক টপস" },
    "No Earring (কিছুই না)": { img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=500&auto=format&fit=crop&q=80", desc: "কানে কোনো দুল ছাড়া স্বাভাবিক রূপ" },

    // 10. Wrist Jewellery
    "Gold-Embossed Shakha & Pola (সোনা বাঁধানো খাঁটি শাঁখা ও পলা)": { img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&auto=format&fit=crop&q=80", desc: "বাঙালি সনাতন কনের চিরন্তন সোনা দিয়ে বাঁধানো খাঁটি শাঁখা ও লাল পলা" },
    "Classic White Shakha Bangles (ঐতিহ্যবাহী খাঁটি সাদা শাঁখা)": { img: "https://images.unsplash.com/photo-1611591475883-93836d5e7a96?w=500&auto=format&fit=crop&q=80", desc: "ঐতিহ্যবাহী সাদা শাঁখ বা শাঁখা চুড়ি" },
    "Bengali Ratanchur / Hathphool (বাঙালি রাজকীয় রতনচূড় / হাতফুল)": { img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&auto=format&fit=crop&q=80", desc: "কবজির ব্রেসলেট থেকে ৫টি সোনার শিকল আঙুলের আংটিতে গিয়ে যুক্ত হওয়া রাজকীয় হাতফুল" },
    "Bengali Mantasha / Broad Gold Cuff (বাঙালি চওড়া সোনার মান্তাশা)": { img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&auto=format&fit=crop&q=80", desc: "কবজিতে পরা চওড়া খাঁটি সোনার জালি কাজের নিখুঁত রাজকীয় মান্তাশা" },
    "Traditional Bengali Bauti (ঐতিহ্যবাহী সোনার বাউটি জোড়া)": { img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&auto=format&fit=crop&q=80", desc: "বিশেষ অর্ধ-গোলাকার খাঁটি সোনার ওপর সূক্ষ্ম নকশাদার ভারী সোনার বাউটি" },
    "Gold-Plated Loha Badhano / Noa (সোনা বাঁধানো মঙ্গলময় নোয়া)": { img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&auto=format&fit=crop&q=80", desc: "বাঙালি গৃহিণীদের পবিত্র মঙ্গলময় সোনা বাঁধানো নোয়া বালা" },
    "Heavy Bridal Choor Bangles (কনের কবজির ভারী নকশাদার সোনার চুড়)": { img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=80", desc: "কনের কবজিতে দুই পাশে পরা অত্যন্ত ভারী ও চওড়া সোনার চুড়" },
    "Kundan & Polki Bridal Kada (কুন্দন ও মুক্তা ঝালরযুক্ত রাজস্থানি কাড়া)": { img: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=500&auto=format&fit=crop&q=80", desc: "আনকাট হীরা, মীনাকারি ও মুক্তার ড্রপসযুক্ত রাজস্থানি রয়্যাল ব্রাইডাল কাড়া" },
    "Traditional Solid Gold Bangles (কারুকার্যময় খাঁটি সোনার চুড়ির গোছা)": { img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&auto=format&fit=crop&q=80", desc: "সূক্ষ্ম নকশাদার খাঁটি সোনার পাতলা ও ভারী চুড়ির গোছা" },
    "Vibrant Glass Bangles Stack (রঙিন কাচের রেশমি চুড়ির রিনঝিন গোছা)": { img: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=500&auto=format&fit=crop&q=80", desc: "উৎসবের উজ্জ্বল লাল, সবুজ ও কাঁচা হলুদ রঙের রেশমি কাচের চুড়ির গোছা" },
    "Punjabi Solid Gold Kada (পাঞ্জাবি ঐতিহ্যের শক্ত চওড়া সোনার কাড়া)": { img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80", desc: "পাঞ্জাবি ঐতিহ্যের শক্ত ও ভারী খাঁটি সোনার কাড়া" },
    "South Indian Temple Coin Kada (দক্ষিণী লক্ষ্মী কয়েন টেম্পল বালা)": { img: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=500&auto=format&fit=crop&q=80", desc: "দেবী লক্ষ্মীর স্বর্ণমুদ্রা ও টেম্পল খোদাই কাজের প্রাচীন দক্ষিণী বালা" },
    "Royal Armlet / Bajubandh (বাহুর রাজকীয় সোনার বাজুবন্ধ / অনন্ত)": { img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&auto=format&fit=crop&q=80", desc: "কনুইয়ের ওপরে বাহুতে পরা প্রাচীন রাজকীয় সোনার বাজুবন্ধ" },
    "Diamond Tennis Bracelet (এক লাইনের খাঁটি হীরার আধুনিক টেনিস ব্রেসলেট)": { img: "https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=500&auto=format&fit=crop&q=80", desc: "সারিবদ্ধ এক লাইনের খাঁটি হীরার আধুনিক স্লিক পার্টি ও সান্ধ্য ব্রেসলেট" },
    "Multi-Strand Pearl Bracelet with Gem Brooch (তিন স্তরের মুক্তার রাজকীয় ব্রেসলেট)": { img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&auto=format&fit=crop&q=80", desc: "খাঁটি শুভ্র মুক্তার তিন স্তরের রাজকীয় ব্রেসলেট যার মাঝে রত্নখচিত ব্রোচ রয়েছে" },
    "Oxydised Silver Chunky Kada (অক্সিডাইজড রূপালী ভারী ট্রাইবাল কাড়া)": { img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&auto=format&fit=crop&q=80", desc: "সুতি শাড়ি ও ইন্দো-ওয়েস্টার্ন সাজের সাথে মানানসই ভারী রূপালী বোহো কাড়া" },
    "None (কিছুই না)": { img: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=500&auto=format&fit=crop&q=80", desc: "হাতে কোনো চুড়ি বা ব্রেসলেট ছাড়া স্বাভাবিক রূপ" },

    // 11. Hairstyle (20 Distinct Styles)
    "Traditional Bun with Gajra (গজরা সজ্জিত ঐতিহ্যবাহী খোঁপা)": { img: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=500&auto=format&fit=crop&q=80", desc: "সাদা জুঁই ফুল বা গাজরা দিয়ে গোল করা রয়্যাল খোঁপা" },
    "Loose Wavy Waves (খোলা সফট ওয়েভি চুল)": { img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=500&auto=format&fit=crop&q=80", desc: "কাঁধের ওপর ছড়ানো ফ্লোয়িং প্রাকৃতিক ওয়েভি চুল" },
    "Classic South Indian Braid (ফুলের মালা সজ্জিত দীর্ঘ বেণী)": { img: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=500&auto=format&fit=crop&q=80", desc: "সোনার গয়না ও ফুল সজ্জিত কোমর ছোঁয়া লম্বা বেণী" },
    "Messy Textured Bun (মেসি টেক্সচার্ড খোঁপা)": { img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=500&auto=format&fit=crop&q=80", desc: "আধুনিক ট্রেন্ডি ক্যাজুয়াল মেসি খোঁপা" },
    "Half-Up Half-Down Drape (হাফ-আপ খোলা চুল)": { img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=500&auto=format&fit=crop&q=80", desc: "উপরে পিন করা এবং নিচে খোলা ওয়েভি চুল" },
    "French Braid (ফ্রাঞ্চ বেণী)": { img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&auto=format&fit=crop&q=80", desc: "মাথার ওপর থেকে ভাঁজ করা ক্লাসিক ফ্রেঞ্চ বেণী" },
    "Fishtail Braid (ফিশটেইল বেণী)": { img: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=500&auto=format&fit=crop&q=80", desc: "সূক্ষ্মভাবে বোনা স্টাইলিশ ফিশটেইল বেণী" },
    "High Sleek Ponytail (হাই স্লিক পনিটেল)": { img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=500&auto=format&fit=crop&q=80", desc: "উঁচু ও মসৃণভাবে বাঁধা হাই-ফ্যাশন পনিটেল" },
    "Crown Braid with Open Hair (ক্রাউন বেণীসহ খোলা চুল)": { img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=500&auto=format&fit=crop&q=80", desc: "মাথার চারপাশে মুকুটের মতো বেণী ও খোলা চুল" },
    "Side-Swept Curls (একপাশে ঝরনা কার্ল চুল)": { img: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=500&auto=format&fit=crop&q=80", desc: "এক কাঁধে নামানো বাউন্সি রয়্যাল কার্ল" },
    "Low Royal Chignon (লো রয়্যাল শিফন খোঁপা)": { img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&auto=format&fit=crop&q=80", desc: "ঘাড়ের কাছে নিচু রাজকীয় শিফন রোল্ড খোঁপা" },
    "Vintage Hollywood Waves (ভিনটেজ ওয়েভি কার্ল)": { img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=500&auto=format&fit=crop&q=80", desc: "৪০ দশকের গ্ল্যামারাস ওয়েভি কার্ল স্টাইল" },
    "Gajra Wrapped Braid (সম্পূর্ণ গজরা মোড়ানো দীর্ঘ বেণী)": { img: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=500&auto=format&fit=crop&q=80", desc: "সম্পূর্ণ বেণী জুড়ে জুঁই ফুলের ঘ্রাণযুক্ত গজরা" },
    "Voluminous Curls (ভলিউমিনাস রয়্যাল কার্ল)": { img: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=500&auto=format&fit=crop&q=80", desc: "ঘন ও কার্লি চুল যা কাঁধে ছড়ানো" },
    "Straight Sleek Hair (স্ট্রেইট সিল্কি সোজা চুল)": { img: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=500&auto=format&fit=crop&q=80", desc: "একদম সোজা ও মসৃণ সিল্কি শাইনি চুল" },
    "Boho Braided Bun (বোহো স্টাইল খোঁপা)": { img: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=500&auto=format&fit=crop&q=80", desc: "আলগা বেণী পেঁচিয়ে বানানো বোহো খোঁপা" },
    "Bubble Ponytail (বাবল পনিটেল)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=76", desc: "বাবেল শেপের আধুনিক ফ্যাশনেবল পনিটেল" },
    "Twisted Side Bun (টুইস্টেড সাইড খোঁপা)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=77", desc: "একপাশে টুইস্ট করা মার্জিত পার্টি খোঁপা" },
    "Bengali Bridal Red Rose Bun (বাঙালি কনের লাল গোলাপ সজ্জিত খোঁপা)": { img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=500&auto=format&fit=crop&q=80", desc: "বাঙালি বিয়ের সাজে তাজা লাল গোলাপের পাপড়িতে ঘেরা রাজকীয় খোঁপা" },
    "Rajputana Royal Bun with Gold Net (রাজপুতানা রয়্যাল খোঁপা ও সোনার জালি)": { img: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=500&auto=format&fit=crop&q=80", desc: "রানি পদ্মাবতী স্টাইলের সোনার জালি নেটে মোড়ানো রাজস্থানি রাজকীয় খোঁপা" },
    "Waterfall Braid with Pearls (মুক্তা ছড়ানো ওয়াটারফল ক্যাসকেডিং বেণী)": { img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&auto=format&fit=crop&q=80", desc: "জলপ্রপাতের মতো কাঁধে নামা আলগা বেণী যাতে সূক্ষ্ম মুক্তা বসানো" },
    "South Indian Poo Jadai Braid (দক্ষিণী পদ্ম ও বেলি ফুল মোড়ানো ব্রাইডাল বেণী)": { img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500&auto=format&fit=crop&q=80", desc: "দক্ষিণ ভারতীয় কনেদের সম্পূর্ণ বেণী জুড়ে তাজা পদ্ম ও বেলি ফুলের চাদর" },
    "Classic Front Puff with Flowing Curls (সামনে পাফ করা ক্লাসিক কার্লি চুল)": { img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80", desc: "সামনের দিকে ভলিউমিনাস পাফ করা এবং পেছনে ঢেউ খেলানো খোলা চুল" },
    "Short Curly Pixie (শর্ট কার্লি স্টাইল)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=78", desc: "আধুনিক শর্ট কার্লি পিক্স কাটিং" },

    // 12. Makeup & Bindi (Expanded Options)
    "Traditional Red Bindi & Kohl": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=79", desc: "ঐতিহ্যবাহী বড় লাল টিপ ও কাজল" },
    "Glamorous Nude Makeup": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=80", desc: "আধুনিক নিউড লিপস্টিক ও সফট গ্লো" },
    "Heavy Bridal Makeup": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=81", desc: "ব্রাইডাল লাল লিপস্টিক ও হাইলাইটার" },
    "Natural Gloss": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=82", desc: "সিম্পল নো-মেকআপ গ্লসি লুক" },
    "Traditional Big Red Kumkum Bindi & Kohl Eyes (ঐতিহ্যবাহী বড় লাল কুমকুম টিপ ও টানা কাজল)": { img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&auto=format&fit=crop&q=80", desc: "কপালে ঐতিহ্যবাহী ভেলভেটি লাল কুমকুম টিপ ও চোখে টানা কাজল" },
    "Bengali Bridal Chandan Art with Crimson Bindi (বাঙালি কনের কপালে চন্দন আঁকা ও গাঢ় লাল টিপ)": { img: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500&auto=format&fit=crop&q=80", desc: "কপালে সাদা-লাল কল্কা চন্দন আঁকা এবং ভ্রুর মাঝে উজ্জ্বল লাল সিঁদুর টিপ" },
    "Small Black Velvet Bindi with Smokey Eyes (ছোট কালো ভেলভেট টিপ ও স্মোকি চোখ)": { img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80", desc: "ভ্রুর মাঝে ছোট কালো ভেলভেট টিপ ও গাঢ় স্মোকি চোখের মেকআপ" },
    "Maharashtrian Chandrakor Crescent Bindi (মহারাষ্ট্রীয় অর্ধচন্দ্র চাঁদ টিপ)": { img: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=500&auto=format&fit=crop&q=80", desc: "মহারাষ্ট্রের ঐতিহ্যবাহী উল্টানো অর্ধচন্দ্রাকার চাঁদ টিপ ও নথ" },
    "Rajasthani Stone & Kundan Studded Bindi (রাজস্থানি কুন্দন ও রত্নখচিত টিপ)": { img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&auto=format&fit=crop&q=80", desc: "সোনার জরির বর্ডার ও কুন্দন-পাথর বসানো রয়্যাল রাজস্থানি টিপ" },
    "South Indian Temple Bindi with Gold Accents (দক্ষিণী টেম্পল কুন্দন ও সোনার টিপ)": { img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500&auto=format&fit=crop&q=80", desc: "দক্ষিণী কনের গোল কুমকুম টিপ ও সূক্ষ্ম সোনার বিন্দু অলঙ্করণ" },
    "Royal Glam Bridal Makeup with Crimson Red Lips (রয়্যাল গ্ল্যাম ব্রাইডাল মেকআপ ও লাল লিপস্টিক)": { img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=500&auto=format&fit=crop&q=80", desc: "গাঢ় রক্তিম লাল লিপস্টিক, সোনার গ্লিটার আইশ্যাডো ও ভারী ব্রাইডাল মেকআপ" },
    "Soft Dewy Nude Pink & Glass Skin Makeup (সফট ডিউই নিউড পিঙ্ক ও গ্লাস স্কিন মেকআপ)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80", desc: "চকচকে গ্লাস স্কিন হাইলাইট, সফট পিঙ্ক ব্লাশ ও নিউড গ্লসি লিপস্টিক" },
    "Sun-Kissed Golden Bronze Glow Makeup (সানকিসড গোল্ডেন ব্রোঞ্জ গ্লো মেকআপ)": { img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&auto=format&fit=crop&q=80", desc: "উষ্ণ সোনালী ব্রোঞ্জার, শিমারি আইলিড ও ন্যুড ব্রাউন গ্লসি ঠোঁট" },
    "Dramatic Arabic Winged Eyes & Deep Maroon Lips (ড্রামাটিক এরাবিক উইংড চোখ ও বোল্ড মেরুন লিপস)": { img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&auto=format&fit=crop&q=80", desc: "তীক্ষ্ম এরাবিক উইংড আইলাইনার, ভারী চোখের পাপড়ি ও গাঢ় মেরুন ম্যাট লিপস" },
    "Minimalist No-Makeup Natural Radiant Glow (মিনিমাল নো-মেকআপ ন্যাচারাল রেডিয়েন্ট লুক)": { img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=80", desc: "অত্যন্ত স্বাভাবিক ফ্রেশ স্কিন, টিন্টেড লিপবাম ও চোখের হালকা মাশকারা" },
    "Dramatic Smokey Kohl Eyes & Velvet Wine Lips (স্মোকি কাজল চোখ ও ভেলভেট ওয়াইন লিপস)": { img: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=500&auto=format&fit=crop&q=80", desc: "গাঢ় কালো ও চারকোল স্মোকি আইজ, তীব্র আকর্ষণীয় ওয়াইন রেড লিপস্টিক" },
    "Pastel Floral Fairy Makeup with Crystal Accents (প্যাস্টেল ফ্লোরাল ও ক্রিস্টাল মেকআপ)": { img: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=500&auto=format&fit=crop&q=80", desc: "নরম পিচ-ল্যাভেন্ডার আইশ্যাডো ও চোখের কোণে সূক্ষ্ম ক্রিস্টাল স্টোনের ছোঁয়া" },
    "Natural Gloss & Bare Skin (ন্যাচারাল গ্লস ও ময়েশ্চারাইজড ন্যাচারাল লুক)": { img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80", desc: "হালকা ময়েশ্চারাইজড স্কিন, ট্রান্সপারেন্ট লিপগ্লস ও সতেজ প্রাকৃতিকভাবে সুন্দর মুখশ্রী" },

    // 13. Pose & Expression
    "Graceful Gentle Smile": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=83", desc: "মিষ্টি ও মার্জিত হাসিমুখের পোজ" },
    "Royal Regal Stance": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=84", desc: "রাজকীয় সোজা ও আত্মবিশ্বাসী ভঙ্গি" },
    "Candid Elegant Glance": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=85", desc: "ন্যাচারাল ক্যান্ডিড ও মার্জিত চাহনি" },
    "Confident Fashion Pose": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=86", desc: "হাই-ফ্যাশন মডেল লুক ও পোজ" },

    // 14. Lighting Setup (26 Professional Lighting Styles)
    "Soft Golden Hour Sunset Light (সোনারাঙা গোধূলির নরম আলো)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&lt=1", desc: "সূর্যাস্তের উষ্ণ সোনারাঙা গোধূলির সফট আলো ও ব্যাকলাইট" },
    "Morning Sunbeams & Sun Flare (সকালের সোনালী রোদের আলো)": { img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&auto=format&fit=crop&q=80&lt=2", desc: "সকালের প্রথম মিষ্টি রোদের সোনালী সানফ্লেয়ার ও কুয়াশা" },
    "Bright Natural Outdoor Daylight (উজ্জ্বল দিনের স্বাভাবিক আলো)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&lt=3", desc: "উজ্জ্বল ও প্রাকৃতিক দিনের সরাসরি ছায়াহীন সূর্যালোক" },
    "Soft Overcast Diffused Daylight (মেঘলা দিনের সফট ডিফিউজড আলো)": { img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80&lt=4", desc: "ছায়াহীন সফট ও মসৃণ মেঘলা দিনের প্রাকৃতিক মৃদু আলো" },
    "Direct Midday Sun with Crisp Shadows (দুপুরের কড়া রোদ ও তীক্ষ্ম নাটকীয় ছায়া)": { img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=80&lt=5", desc: "দুপুরের খাড়া সূর্যরশ্মি ও জ্যামিতিক গভীর ছায়া" },
    "Studio Softbox Key & Fill Lighting (প্রফেশনাল ইনডোর স্টুডিও সফটবক্স আলো)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&lt=6", desc: "প্রফেশনাল ইনডোর সফটবক্স বিউটি লাইট ও রিফ্লেক্টর" },
    "Dramatic Cinematic Chiaroscuro (সিনেমাটিক আলো-ছায়ার বৈপরীত্য)": { img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&auto=format&fit=crop&q=80&lt=7", desc: "নাটকীয় ছায়া ও গ্ল্যামারাস সিনেমাটিক হাই-কনট্রাস্ট আলো" },
    "Warm Candlelight & Brass Diya Glow (উষ্ণ মোমবাতি ও প্রদীপের আলো)": { img: "https://images.unsplash.com/photo-1557683316-973673baf926?w=500&auto=format&fit=crop&q=80&lt=8", desc: "উৎসবের মাটির প্রদীপ ও মোমবাতির উষ্ণ হলুদ কাঁপাকাঁপা আভা" },
    "Volumetric God Rays Through Window (জানালার ফাঁক দিয়ে আসা রোদ)": { img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500&auto=format&fit=crop&q=80&lt=9", desc: "জানালার খড়খড়ি ভেঙে আসা ধূলিকণাময় রোদের স্পষ্ট আলোর রশ্মি" },
    "Moody Neon Night Cyber Glow (নাইট নিয়ন সাইবার গ্লো)": { img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=80&lt=10", desc: "রঙিন নিয়ন বাতি ও সাইবার নাইট মোডের আধুনিক আলো" },
    "Fairy Lights Ambient Dreamy Bokeh (হাজারো লাইটের বোকাহ আলো)": { img: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=500&auto=format&fit=crop&q=80&lt=11", desc: "ব্যাকগ্রাউন্ডে ফেয়ারি লাইটের মায়াবী নরম বোকাহ গ্লো" },
    "Twilight Blue Hour Ambient Glow (সন্ধ্যার নীল গোধূলি আলো)": { img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=80&lt=12", desc: "সূর্যাস্তের পরের গাঢ় নীল আকাশের মৃদু শীতল আলো" },
    "High-Key Pure White Studio Light (সম্পূর্ণ উজ্জ্বল সাদা আলো)": { img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&auto=format&fit=crop&q=80&lt=13", desc: "সম্পূর্ণ ছায়াহীন ব্রাইট হোয়াইট আধুনিক ফ্যাশন লাইট" },
    "Low-Key Moody Shadow & Rim Light (গাঢ় ছায়াময় ড্রামাটিক ডার্ক আলো)": { img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=500&auto=format&fit=crop&q=80&lt=14", desc: "ডার্ক মুডি আবহ, কালো ব্যাকগ্রাউন্ড ও একক রিম লাইট" },
    "Rembrandt Classic Triangle Lighting (রিমব্রান্ট ক্লাসিক্যাল পোর্ট্রেট আলো)": { img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=500&auto=format&fit=crop&q=80&lt=15", desc: "গালে ত্রিকোণাকৃতির আলোর ছোঁয়াযুক্ত বিশ্বখ্যাত ধ্রুপদী আলো" },
    "Butterfly / Paramount Beauty Light (প্যারামাউন্ট বাটারফ্লাই বিউটি আলো)": { img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=500&auto=format&fit=crop&q=80&lt=16", desc: "নাকের নিচে প্রজাপতি ছায়াযুক্ত গ্ল্যামারাস ফেস হাইলাইট" },
    "Dramatic Backlit Silhouette with Edge Glow (তীব্র ব্যাকলাইট সিল্যুয়েট আলো)": { img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&auto=format&fit=crop&q=80&lt=17", desc: "পেছন থেকে আসা তীব্র আলোয় চুলের সোনালী কিনারা আলো" },
    "Split Lighting Halved in Shadow (ড্রামাটিক স্প্লিট আলো-আঁধারি)": { img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80&lt=18", desc: "মুখের একপাশে তীব্র আলো ও অপরপাশে রহস্যময় অন্ধকার" },
    "Moonlit Silver Midnight Atmosphere (চাঁদের রুপালী স্নিগ্ধ আলো)": { img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=500&auto=format&fit=crop&q=80&lt=19", desc: "পূর্ণিমার চাঁদের স্নিগ্ধ রূপালী আলো ও শান্ত রাতের রূপ" },
    "Dappled Sunlight Through Tree Leaves (পাতার ফাঁক দিয়ে পড়া চঞ্চল রোদ)": { img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&auto=format&fit=crop&q=80&lt=20", desc: "গাছের পাতার ছায়ায় শরীরে পড়া আলো-ছায়ার প্রাকৃতিক নকশা" },
    "Dramatic Overhead Spotlight (থিয়েট্রিক্যাল ড্রামাটিক স্পটলাইট)": { img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500&auto=format&fit=crop&q=80&lt=21", desc: "সোজা ওপর থেকে মঞ্চে পড়া উজ্জ্বল নাটকীয় একক স্পটলাইট" },
    "Warm Fireplace / Bonfire Flicker Glow (আগুনের শিখার কাঁপাকাঁপা আলো)": { img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&auto=format&fit=crop&q=80&lt=22", desc: "হালকা আগুনের শিখার উষ্ণ লাল-কমলা নড়াচড়া করা আভা" },
    "Ring Light Catchlight Glow in Eyes (চোখে রিং লাইটের উজ্জ্বল ক্যাচলাইট)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&lt=23", desc: "চোখের মণির মধ্যে ফুটে ওঠা বৃত্তাকার উজ্জ্বল রিফ্লেকশন" },
    "Foggy Misty Diffused Haze Light (কুয়াশাময় রহস্যময় ডিফিউজড আলো)": { img: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500&auto=format&fit=crop&q=80&lt=24", desc: "ঘন কুয়াশা ও ধোঁয়ার চাদরে নরম হয়ে যাওয়া স্বপ্নিল আলো" },
    "Neon Dual-Tone Cyberpunk Cyan & Magenta (সায়ান ও ম্যাজেন্টা দ্বৈত আলো)": { img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&auto=format&fit=crop&q=80&lt=25", desc: "একপাশ থেকে নীল ও অন্যপাশ থেকে গোলাপি আলোর আধুনিক মেলবন্ধন" },
    "Custom (কাস্টম ডেসক্রিপশন)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&lt=26", desc: "নিজের পছন্দমতো যেকোনো বিশেষ লাইটিং সেটআপ" },
    "Bright Natural Daylight (উজ্জ্বল দিনের স্বাভাবিক আলো)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&lt=3", desc: "উজ্জ্বল ও প্রাকৃতিক দিনের সরাসরি ছায়াহীন সূর্যালোক" },
    "Soft Golden Hour Sunset (সোনারাঙা গোধূলির নরম আলো)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&lt=1", desc: "সূর্যাস্তের উষ্ণ সোনারাঙা গোধূলির সফট আলো ও ব্যাকলাইট" },

    // 15. Camera Framing & Angles (23 Comprehensive Framing Styles)
    "Full Body Standing with 15% Headroom (ফুল বডি - পা থেকে মাথা ও ১৫% হেডরুম)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&cam=1", desc: "মাথা থেকে পা পর্যন্ত সম্পূর্ণ অবয়ব ও মাথার ওপর ১৫% মার্জিন" },
    "Full Body Wide Cinematic Environment (ফুল বডি ওয়াইড - ৭০% সাবজেক্ট ও ৩০% পরিবেশ)": { img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&auto=format&fit=crop&q=80&cam=2", desc: "ওয়াইড শট যেখানে পুরো পোশাক ও চারপাশের ব্যাকগ্রাউন্ডের ৩০% সুন্দর মার্জিন দৃশ্যমান" },
    "Extreme Wide Shot / Environmental Landscape (এক্সট্রিম ওয়াইড - বিশাল স্থাপত্য ও প্রকৃতির মাঝে পূর্ণ অবয়ব)": { img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&auto=format&fit=crop&q=80&cam=3", desc: "বিশাল রাজপ্রাসাদ বা প্রকৃতির মাঝে সাবজেক্টের সম্পূর্ণ শরীর ও জমকালো ল্যান্ডস্কেপ" },
    "Half Body Waist-Up Classic Portrait (হাফ বডি - কোমর থেকে মাথা পর্যন্ত ক্লাসিক পোর্ট্রেট)": { img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80&cam=4", desc: "কোমর থেকে ওপরের অংশ, গহনা, ব্লাউজ ও ওড়নার নিখুঁত ডিটেইল দৃশ্যমান" },
    "Medium Shot / Knee-Up Cowboy Shot (মিডিয়াম শট - হাঁটু থেকে মাথা পর্যন্ত ফ্যাশন ফ্রেম)": { img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=80&cam=5", desc: "হাঁটু থেকে ওপরের অংশ, শাড়ির কুঁচি ও বডির কার্ভ স্পষ্টভাবে দেখার ফ্রেম" },
    "Tight Close-Up Face & Jewelry (টাইট ক্লোজ-আপ - মুখমণ্ডল, চোখ ও গহনার সূক্ষ্ম ডিটেইল)": { img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=80&cam=6", desc: "চোখ, নাকের নথ, কপালের টিপ ও কানের ঝুমকার অতি-স্পষ্ট ক্লোজ-আপ দৃশ্য" },
    "Extreme Macro Close-Up (এক্সট্রিম ম্যাক্রো - চোখ, কাজল ও নাকের নোলকের অতি-সূক্ষ্ম রূপ)": { img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&auto=format&fit=crop&q=80&cam=7", desc: "শুধুমাত্র চোখ, কাজল ও নাকের সূক্ষ্ম রত্নখচিত কাজের ডিটেইলড ম্যাক্রো শট" },
    "Low Angle Heroic Stance (লো-অ্যাঙ্গেল - নিচ থেকে তোলা রাজকীয় লম্বা পোজ)": { img: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=500&auto=format&fit=crop&q=80&cam=8", desc: "নিচু কোণ থেকে ক্যামেরা তাক করে তোলা রাজকীয়, দীর্ঘ ও মহিমান্বিত দৃশ্য" },
    "High Angle Looking Down (হাই-অ্যাঙ্গেল - ওপর থেকে তোলা নম্র লাবণ্যময় ভঙ্গি)": { img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=500&auto=format&fit=crop&q=80&cam=9", desc: "কিছুটা ওপর থেকে নিচে ক্যামেরার তাক করা কোমল ও নান্দনিক অ্যাঙ্গেল" },
    "Over-The-Shoulder Glance Framing (ওভার-দ্য-শোল্ডার - কাঁধের ওপর দিয়ে তাকানো সিনেমাটিক ফ্রেম)": { img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=80&cam=10", desc: "কাঁধ ও পিঠের ব্লাউজের নকশার ওপর দিয়ে পেছনে তাকানো সিনেমাটিক পোর্ট্রেট" },
    "Dutch Angle / Tilted Dynamic Frame (ডাচ অ্যাঙ্গেল - নাটকীয় হেলানো সিনেমাটিক ফ্রেম)": { img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500&auto=format&fit=crop&q=80&cam=11", desc: "ক্যামেরা কিছুটা একপাশে হেলিয়ে তোলা গতিশীল ও রোমাঞ্চকর নাচের ফ্রেম" },
    "Symmetrical Centered Architectural Framing (প্রতিসাম্য সেন্টার্ড - তোরণ বা খিলানের মাঝে সুষম পোজ)": { img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500&auto=format&fit=crop&q=80&cam=12", desc: "রাজপ্রাসাদের খিলান বা পিলারের ঠিক মাঝখানে নিখুঁত জ্যামিতিক প্রতিসাম্য" },
    "Rule of Thirds Off-Center Aesthetic (রুল অফ থার্ডস - ফ্রেমের এক-তৃতীয়াংশে মার্জিত অবস্থান)": { img: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=500&auto=format&fit=crop&q=80&cam=13", desc: "নান্দনিক ফটোগ্রাফির নিয়মে সাবজেক্ট একপাশে এবং ব্যাকগ্রাউন্ড অন্যপাশে উন্মুক্ত" },
    "Bust / Chest-Up Headshot (বাস্ট শট - বুক থেকে মাথা ও গলার হার ফোকাস)": { img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=500&auto=format&fit=crop&q=80&cam=14", desc: "গলার চোকার, রানি হার, কানের দুল ও মুখের নিখুঁত গ্ল্যামার হেডশট" },
    "Full Body Top-Down Flatlay / Bird's Eye View (টপ-ডাউন বার্ডস আই - ওপর থেকে শাড়ির গোল ঘেরের রূপ)": { img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&auto=format&fit=crop&q=80&cam=15", desc: "সম্পূর্ণ ওপর থেকে মেঝেতে বৃত্তাকারে ছড়িয়ে থাকা শাড়ির রূপের দৃশ্য" },
    "Profile / Side Silhouette View (প্রোফাইল সাইড ভিউ - পাশে থেকে শার্প জ-লাইন ও নাকের নথ)": { img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80&cam=16", desc: "পাশ থেকে তোলা ৯০ ডিগ্রি প্রোফাইল ভিউ, শার্প জ-লাইন ও কানের ঝুমকার রূপ" },
    "Three-Quarter Angle Portrait (থ্রি-কোয়ার্টার অ্যাঙ্গেল - ৪৫ ডিগ্রি মার্জিত কোণ)": { img: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=500&auto=format&fit=crop&q=80&cam=17", desc: "ক্লাসিক ৪৫ ডিগ্রি অ্যাঙ্গেল যা সবচেয়ে বেশি আকর্ষণীয় ও মার্জিত পোর্ট্রেট ফ্রেম" },
    "Depth of Field Leading Lines (লিডিং লাইনস - করিডোর বা সিঁড়ির রেখায় গভীর ফ্রেম)": { img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=500&auto=format&fit=crop&q=80&cam=18", desc: "করিডোরের পিলার বা সিঁড়ির রেখাগুলো সাবজেক্টের দিকে দৃষ্টি আকর্ষণ করার ফ্রেম" },
    "Cinematic Anamorphic Widescreen 2.39:1 (অ্যানামরফিক সিনেমাস্কোপ ওয়াইড ফ্রেম)": { img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&auto=format&fit=crop&q=80&cam=19", desc: "সিনেমা হলের বড় পর্দার মতো দুই পাশে বিস্তৃত সিনেমাটিক ফ্রেম" },
    "Framing Within a Frame / Archway Peeking (ফ্রেমের ভেতর ফ্রেম - জানালার ঝরোখা বা তোরণের আড়াল)": { img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500&auto=format&fit=crop&q=80&cam=20", desc: "কাঠের খোদাই করা ঝরোখা বা মার্বেল খিলানের ভেতর দিয়ে সাবজেক্টকে দেখা" },
    "Ground-Level Low Angle Tracking (গ্রাউন্ড লেভেল - একদম মেঝে থেকে আলতা রাঙা পা ও নূপুর ফ্রেম)": { img: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500&auto=format&fit=crop&q=80&cam=21", desc: "মেঝের কাছাকাছি ক্যামেরা রেখে আলতা রাঙা পা, সোনার নূপুর ও শাড়ির কুঁচির নিচু ফ্রেম" },
    "Golden Ratio Spiral Composition (গোল্ডেন রেশিও - সোনালী অনুপাতের নান্দনিক ভারসাম্য)": { img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500&auto=format&fit=crop&q=80&cam=22", desc: "ফিবোনাচ্চি স্পাইরালের নিয়মে চোখের দৃষ্টি সাবজেক্টের মুখের দিকে ঘোরানোর শিল্পিত ফ্রেম" },
    "Custom (কাস্টম ডেসক্রিপশন)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&cam=23", desc: "নিজের পছন্দমতো যেকোনো বিশেষ ক্যামেরা ফ্রেমিং ও অ্যাঙ্গেল" },
    "Full Body (মাথা থেকে পা পর্যন্ত সম্পূর্ণ ও মাথার উপর ১৫% ফাঁকা)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&cam=1", desc: "মাথা থেকে পা পর্যন্ত সম্পূর্ণ অবয়ব ও মাথার ওপর ১৫% মার্জিন" },
    "Full Body Wide (৭০% জুমড আউট - চারপাশে ৩০% মেঠো প্রান্তর)": { img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&auto=format&fit=crop&q=80&cam=2", desc: "ওয়াইড শট যেখানে পুরো পোশাক ও চারপাশের ব্যাকগ্রাউন্ডের ৩০% সুন্দর মার্জিন দৃশ্যমান" },
    "Half Body (কোমর থেকে ওপরের অংশ)": { img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80&cam=4", desc: "কোমর থেকে ওপরের অংশের ক্লাসিক হাফ-লেন্থ পোর্ট্রেট" },
    "Close-Up Portrait (মুখমণ্ডল ও গহনার ক্লোজ-আপ)": { img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=80&cam=6", desc: "মুখমণ্ডল, মেকআপ ও গহনার স্পষ্ট ক্লোজ-আপ পোর্ট্রেট" },

    // 100 Unique Background & Setting Visual Mappings
    "Royal Palace Corridor (রাজপ্রাসাদের কারুকার্যময় করিডোর)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=105", desc: "রাজপ্রাসাদের কারুকার্যময় খোদাই করা করিডোর" },
    "Zamindar Palace Thakur Dalan (জমিদার বাড়ির ঠাকুরদালান)": { img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500&auto=format&fit=crop&q=80", desc: "ঐতিহ্যবাহী জমিদার বাড়ির ঠাকুরদালান ও খাম্বা" },
    "Rajasthani Fort Courtyard (রাজস্থানি কেল্লার খোলা উঠান)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=107", desc: "রাজস্থানি কেল্লার খোলা অলঙ্কৃত উঠান" },
    "Mughal Marble Pavilion (মুঘল মার্বেল প্যাভিলিয়ন)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=108", desc: "সাদা মার্বেলের খোদাই করা মুঘল তোরণ" },
    "Heritage Marble Balcony (ঐতিহাসিক মার্বেল বেলকনি)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=109", desc: "প্রাসাদের উঁচু রাজকীয় মার্বেল বারান্দা" },
    "Grand Palace Ballroom (প্রাসাদের রাজকীয় বলরুম)": { img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=500&auto=format&fit=crop&q=80", desc: "বিলাসবহুল ঝাড়বাতি খচিত প্রাসাদ বলরুম" },
    "Vintage Palace Archways (খোদাই করা রাজকীয় তোরণ)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=111", desc: "খোদাই করা রাজকীয় তোরণ" },
    "Ancient Royal Garden Pavilion (রাজকীয় বাগান বাড়ি)": { img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&auto=format&fit=crop&q=80&bg_id=8", desc: "রাজকীয় বাগান বাড়ি" },
    "Royal Darbar Hall (রাজকীয় দরবার হল)": { img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&auto=format&fit=crop&q=80&bg_id=9", desc: "রাজকীয় দরবার হল" },
    "Historic Haveli Courtyard (ঐতিহ্যবাহী হাভেলি উঠান)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=114", desc: "ঐতিহ্যবাহী রাজস্থানি হাভেলি প্রাঙ্গণ" },
    "Luxury Palace Terrace (প্রাসাদের খোলা ছাদ)": { img: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=500&auto=format&fit=crop&q=80&bg_id=11", desc: "প্রাসাদের খোলা ছাদ" },
    "Carved Wooden Jharokha (খোদাই করা কাঠের ঝরোখা)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=116", desc: "ঐতিহ্যবাহী কাঠের কাজের সূক্ষ্ম ঝরোখা জানালা" },
    "Royal Pillar Hall (প্রাসাদের পিলারের হল)": { img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500&auto=format&fit=crop&q=80&bg_id=13", desc: "প্রাসাদের পিলারের হল" },
    "Heritage Museum Corridor (ঐতিহাসিক মিউজিয়াম গ্যালারি)": { img: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=500&auto=format&fit=crop&q=80&bg_id=14", desc: "ঐতিহাসিক মিউজিয়াম গ্যালারি" },
    "Royal Fountain Garden (রাজপ্রাসাদের ফোয়ারা বাগান)": { img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=500&auto=format&fit=crop&q=80&bg_id=15", desc: "রাজপ্রাসাদের ফোয়ারা বাগান" },
    "Traditional Bengali Village Home (গ্রামের মাটির বাড়ি ও উঠান)": { img: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=500&auto=format&fit=crop&q=80&bg_id=16", desc: "গ্রামের মাটির বাড়ি ও উঠান" },
    "Puja Mandap & Alpona Floor (পূজামণ্ডপ ও আলপনা আঁকা মেঝে)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=121", desc: "রঙিন শুভ আলপনা ও পূজামণ্ডপ" },
    "Terracotta Temple Courtyard (টেরাকোটা মন্দিরের উঠান)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=122", desc: "টেরাকোটা ইটের অলঙ্কৃত মন্দির প্রাঙ্গণ" },
    "Traditional Wooden Boat on River (নদীতে ঐতিহ্যবাহী কাঠের নৌকা)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=123", desc: "নদীর শান্ত পানিতে পালতোলা গ্রাম্য নৌকা" },
    "Rural Mustard Flower Field (সরিষে খেতের প্রাকৃতিক ব্যাকগ্রাউন্ড)": { img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&auto=format&fit=crop&q=80&rel_id=30", desc: "হলুদ সরিষা ফুলে ভরা দিগন্ত বিস্তৃত খেত" },
    "Jute & Bamboo Cottage (বাঁশ ও পাঠের গ্রাম্য ঘর)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=125", desc: "বাঁশ ও খড়ের তৈরি ঐতিহ্যবাহী কুটির" },
    "Vintage Kolkata Tram Track (পুরানো কলকাতার ট্রাম লাইন)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=126", desc: "ঐতিহ্যবাহী পুরানো কলকাতার ট্রাম পথ" },
    "Colonial Mansion Veranda (ঔপনিবেশিক জমিদার বাড়ির বারান্দা)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=127", desc: "উঁচু খাম্বা ও অলঙ্কৃত ঔপনিবেশিক বারান্দা" },
    "Traditional Clay Courtyard with Tulsi Manch (তুলসিমঞ্চসহ উঠান)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=128", desc: "তুলসিমঞ্চ ও শুভ প্রদীপ সজ্জিত উঠান" },
    "Rural Riverbank at Sunset (গ্রামের নদীর পাড়ে সূর্যাস্ত)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=129", desc: "নদীর পাড়ে সন্ধ্যার রক্তিম গোধূলি আলো" },
    "Traditional Handloom Village (ঐতিহ্যবাহী তাঁত পল্লি)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=130", desc: "রঙিন সুতা ও কাঠের তাঁতকলের ব্যাকগ্রাউন্ড" },
    "Heritage Ghat on River Ganges (গঙ্গার ঐতিহ্যবাহী বাঁধাল ঘাট)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=131", desc: "নদীর পাড়ে প্রদীপ ও ধাপযুক্ত সিঁড়ির ঘাট" },
    "Rural Paddy Field Trail (ধানখেতের সবুজ মেঠো পথ)": { img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&auto=format&fit=crop&q=80&rel_id=31", desc: "কচি ধানের খেতের সবুজ মেঠো পথ" },
    "Vintage Colonial Library (পুরানো ভিক্টোরিয়ান লাইব্রেরি)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=133", desc: "কাঠের র‍্যাক ও বই খচিত ভিক্টোরিয়ান লাইব্রেরি" },
    "Festive Clay Lamp Courtyard (প্রদীপ সজ্জিত উৎসবের উঠান)": { img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&auto=format&fit=crop&q=80&bg_id=30", desc: "প্রদীপ সজ্জিত উৎসবের উঠান" },
    "Minimalist Fashion Studio (মিনিমালিস্ট ফ্যাশন স্টুডিও)": { img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&auto=format&fit=crop&q=80&bg_id=31", desc: "মিনিমালিস্ট ফ্যাশন স্টুডিও" },
    "Velvet Luxury Lounge (ভেলভেট লাক্সারি লাউঞ্জ)": { img: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=500&auto=format&fit=crop&q=80&bg_id=32", desc: "ভেলভেট লাক্সারি লাউঞ্জ" },
    "Neon Cyberpunk Studio (আধুনিক নিয়ন ও গ্ল্যামার স্টুডিও)": { img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=80&bg_id=33", desc: "আধুনিক নিয়ন ও গ্ল্যামার স্টুডিও" },
    "Abstract Pastel Studio Background (প্যাস্টেল শেড ড্রপ ব্যাকগ্রাউন্ড)": { img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80&bg_id=34", desc: "প্যাস্টেল শেড ড্রপ ব্যাকগ্রাউন্ড" },
    "Luxury Penthouse Living Room (লাক্সারি পেন্টহাউস লিভিং রুম)": { img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&auto=format&fit=crop&q=80&bg_id=35", desc: "লাক্সারি পেন্টহাউস লিভিং রুম" },
    "High-Key White Studio Setup (ব্রাইট হোয়াইট স্টুডিও ব্যাকগ্রাউন্ড)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&bg_id=36", desc: "ব্রাইট হোয়াইট স্টুডিও ব্যাকগ্রাউন্ড" },
    "Dark Moody Portrait Backdrop (ডার্ক ড্রামাটিক পোর্ট্রেট ব্যাকড্রপ)": { img: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=500&auto=format&fit=crop&q=80&bg_id=37", desc: "ডার্ক ড্রামাটিক পোর্ট্রেট ব্যাকড্রপ" },
    "Modern Glass Window Loft (গ্লাস উইন্ডো আধুনিক লফ্ট)": { img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=80&bg_id=38", desc: "গ্লাস উইন্ডো আধুনিক লফ্ট" },
    "Marble & Brass Luxury Backdrop (মার্বেল ও ব্রাস অলঙ্কৃত ওয়াল)": { img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=500&auto=format&fit=crop&q=80&bg_id=39", desc: "মার্বেল ও ব্রাস অলঙ্কৃত ওয়াল" },
    "Boho Chic Studio Setup (বোহো ফ্যাশন স্টুডিও সেটআপ)": { img: "https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=500&auto=format&fit=crop&q=80&bg_id=40", desc: "বোহো ফ্যাশন স্টুডিও সেটআপ" },
    "Industrial Brick Wall Loft (ইন্ডাস্ট্রিয়াল রেড ব্রিক লফ্ট)": { img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=500&auto=format&fit=crop&q=80&bg_id=41", desc: "ইন্ডাস্ট্রিয়াল রেড ব্রিক লফ্ট" },
    "Luxury Hotel Suite (পাঁচ তারকা হোটেলের রয়্যাল স্যুট)": { img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&auto=format&fit=crop&q=80&bg_id=42", desc: "পাঁচ তারকা হোটেলের রয়্যাল স্যুট" },
    "Satin Curtain Fashion Backdrop (স্যাটিন পর্দা অলঙ্কৃত স্টুডিও)": { img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=500&auto=format&fit=crop&q=80&bg_id=43", desc: "স্যাটিন পর্দা অলঙ্কৃত স্টুডিও" },
    "Futuristic Metallic Studio (ফিউচারিস্টিক মেটালিক স্টুডিও)": { img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&auto=format&fit=crop&q=80&bg_id=44", desc: "ফিউচারিস্টিক মেটালিক স্টুডিও" },
    "Geometric Light Shadow Studio (জ্যামিতিক আলো-ছায়ার স্টুডিও)": { img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&auto=format&fit=crop&q=80&bg_id=45", desc: "জ্যামিতিক আলো-ছায়ার স্টুডিও" },
    "Grand Wedding Mandap with Marigold Flowers (গাঁদা ফুলে সাজানো মণ্ডপ)": { img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=500&auto=format&fit=crop&q=80&rel_id=35", desc: "গাঁদা ও গোলাপ ফুলে অলঙ্কৃত বিবাহ মণ্ডপ" },
    "Fairy Lights Canopy Night (হাজারো লাইটে সজ্জিত ছাদ)": { img: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=500&auto=format&fit=crop&q=80&bg_id=47", desc: "হাজারো লাইটে সজ্জিত ছাদ" },
    "Royal Sangeet Stage with Crystal Chandeliers (ঝাড়বাতি অলঙ্কৃত স্টেজ)": { img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=500&auto=format&fit=crop&q=80&bg_id=48", desc: "ঝাড়বাতি অলঙ্কৃত স্টেজ" },
    "Traditional Floral Tunnel (তাজা ফুলের সুসজ্জিত সুড়ঙ্গ)": { img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500&auto=format&fit=crop&q=80&bg_id=49", desc: "তাজা ফুলের সুসজ্জিত সুড়ঙ্গ" },
    "Haldi Ceremony Flower Backdrop (হলুদ উৎসবের গাঁদা ফুল ও বাঁশের ব্যাকড্রপ)": { img: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=500&auto=format&fit=crop&q=80&bg_id=50", desc: "হলুদ উৎসবের গাঁদা ফুল ও বাঁশের ব্যাকড্রপ" },
    "Reception Stage with Mirror Work (আয়না ও ফুল সজ্জিত স্টেজ)": { img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=500&auto=format&fit=crop&q=80&bg_id=51", desc: "আয়না ও ফুল সজ্জিত স্টেজ" },
    "Lantern Illuminated Night Garden (ফানুস ও লণ্ঠনে আলোকিত বাগান)": { img: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=500&auto=format&fit=crop&q=80&bg_id=52", desc: "ফানুস ও লণ্ঠনে আলোকিত বাগান" },
    "Rose Flower Wall Backdrop (গোলাপ ফুলের তৈরি ওয়াল ব্যাকড্রপ)": { img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&auto=format&fit=crop&q=80&bg_id=53", desc: "গোলাপ ফুলের তৈরি ওয়াল ব্যাকড্রপ" },
    "Royal Canopy Tent in Desert (মরুভূমির বিলাসবহুল রয়েল টেন্ট)": { img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&auto=format&fit=crop&q=80&bg_id=54", desc: "মরুভূমির বিলাসবহুল রয়েল টেন্ট" },
    "Diya Lighted Festival Courtyard (প্রদীপের আলোয় আলোকিত উঠান)": { img: "https://images.unsplash.com/photo-1557683316-973673baf926?w=500&auto=format&fit=crop&q=80&bg_id=55", desc: "প্রদীপের আলোয় আলোকিত উঠান" },
    "Traditional Brass Urli with Floating Flowers (ভাসমান ফুলসহ পিতলের পাত্র)": { img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=500&auto=format&fit=crop&q=80&bg_id=56", desc: "ভাসমান ফুলসহ পিতলের পাত্র" },
    "Crystal Chandelier Hall (ক্রিস্টাল ঝাড়বাতির ঝলমলে হল)": { img: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=500&auto=format&fit=crop&q=80&bg_id=57", desc: "ক্রিস্টাল ঝাড়বাতির ঝলমলে হল" },
    "Festive Carnival Fair (রঙিন আলোকসজ্জার মেলা)": { img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&auto=format&fit=crop&q=80&bg_id=58", desc: "রঙিন আলোকসজ্জার মেলা" },
    "Royal Wedding Entrance Gate (রাজকীয় তোরণ তোরণ)": { img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&auto=format&fit=crop&q=80&bg_id=59", desc: "রাজকীয় তোরণ তোরণ" },
    "Golden Sequin Shimmer Backdrop (চকচকে গোল্ডেন সিক্যুইন ওয়াল)": { img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500&auto=format&fit=crop&q=80&bg_id=60", desc: "চকচকে গোল্ডেন সিক্যুইন ওয়াল" },
    "Misty Pine Forest Trail (পাইন বনের কুয়াশাচ্ছন্ন পথ)": { img: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500&auto=format&fit=crop&q=80&bg_id=61", desc: "পাইন বনের কুয়াশাচ্ছন্ন পথ" },
    "Tropical Palm Resort Poolside (ট্রপিক্যাল রিসোর্টের পুলসাইড)": { img: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=500&auto=format&fit=crop&q=80&bg_id=62", desc: "ট্রপিক্যাল রিসোর্টের পুলসাইড" },
    "Sunset Beach with Soft Waves (সমুদ্রসৈকতে গোধূলির আলো)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=167", desc: "সমুদ্রের নরম ঢেউ ও সূর্যাস্তের আলো" },
    "Autumn Maple Leaf Forest (শরতের লাল-হলুদ পাতার বন)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=168", desc: "শরতের বর্ণিল লাল-হলুদ ঝরা পাতার পথ" },
    "Lavender Flower Field (সুগন্ধি ল্যাভেন্ডারের বিস্তৃত খেত)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=169", desc: "বেগুনি ল্যাভেন্ডার ফুলে ভরা খোলা প্রান্তর" },
    "Snowy Mountain Backdrop (তুষারাবৃত পর্বতের দৃশ্য)": { img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&auto=format&fit=crop&q=80&bg_id=66", desc: "তুষারাবৃত পর্বতের দৃশ্য" },
    "Exotic Botanical Greenhouse (কাচের তৈরি বহিরাগত বাগান)": { img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&auto=format&fit=crop&q=80&bg_id=67", desc: "কাচের তৈরি বহিরাগত বাগান" },
    "Cascading Waterfall Landscape (ঝরনার প্রাকৃতিক জলধারা)": { img: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=500&auto=format&fit=crop&q=80&bg_id=68", desc: "ঝরনার প্রাকৃতিক জলধারা" },
    "Blooming Cherry Blossom Park (চেরি ব্লসম সুসজ্জিত পার্ক)": { img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=80&bg_id=69", desc: "চেরি ব্লসম সুসজ্জিত পার্ক" },
    "Serene Lotus Lake (পদ্ম ফুলের শান্ত হ্রদ)": { img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80&bg_id=70", desc: "পদ্ম ফুলের শান্ত হ্রদ" },
    "Sunlit Meadow with Wildflowers (বুনো ফুলে ভরা খোলা প্রান্তর)": { img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&auto=format&fit=crop&q=80&bg_id=71", desc: "বুনো ফুলে ভরা খোলা প্রান্তর" },
    "High Cliff Ocean View (সমুদ্রের ওপর উঁচু পাহাড়ের চূড়া)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&bg_id=72", desc: "সমুদ্রের ওপর উঁচু পাহাড়ের চূড়া" },
    "Bamboo Forest Pathway (সবুজ বাঁশ বনের নির্জন পথ)": { img: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=500&auto=format&fit=crop&q=80&bg_id=73", desc: "সবুজ বাঁশ বনের নির্জন পথ" },
    "Sunset Desert Sand Dunes (মরুভূমির বালিয়াড়িতে সূর্যাস্ত)": { img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=80&bg_id=74", desc: "মরুভূমির বালিয়াড়িতে সূর্যাস্ত" },
    "European Vine Yard Hill (ইউরোপীয় দ্রাক্ষাক্ষেত্র পাহাড়)": { img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=500&auto=format&fit=crop&q=80&bg_id=75", desc: "ইউরোপীয় দ্রাক্ষাক্ষেত্র পাহাড়" },
    "French Renaissance Palace Garden (ফরাসি রাজপ্রাসাদের বাগান)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=180", desc: "সুসজ্জিত ফরাসি রেনেসাঁ বাগান" },
    "Classic Roman Colosseum Arches (রোমান খিলান ও স্তম্ভ)": { img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=500&auto=format&fit=crop&q=80&bg_id=77", desc: "রোমান খিলান ও স্তম্ভ" },
    "Venetian Canal & Gondola Bridge (ভেনিস খালের ঐতিহ্যবাহী ব্রিজ)": { img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&auto=format&fit=crop&q=80&bg_id=78", desc: "ভেনিস খালের ঐতিহ্যবাহী ব্রিজ" },
    "Victorian Cobblestone Street (ভিক্টোরিয়ান যুগের প্রাচীন রাস্তা)": { img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=500&auto=format&fit=crop&q=80&bg_id=79", desc: "ভিক্টোরিয়ান যুগের প্রাচীন রাস্তা" },
    "Greek Santorini White & Blue Street (গ্রিক সানতোরিনির সাদা পথ)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=184", desc: "সাদা দেয়াল ও নীল গম্বুজের সৌন্দর্য" },
    "English Castle Courtyard (ইংরেজ রাজপ্রাসাদের আঙিনা)": { img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&auto=format&fit=crop&q=80&bg_id=81", desc: "ইংরেজ রাজপ্রাসাদের আঙিনা" },
    "Italian Marble Cathedral Balcony (ইতালিয়ান ক্যাথেড্রালের মার্বেল বারান্দা)": { img: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=500&auto=format&fit=crop&q=80&bg_id=82", desc: "ইতালিয়ান ক্যাথেড্রালের মার্বেল বারান্দা" },
    "Vintage Opera House Box (অপেরা হাউসের ভেলভেট গ্যালারি)": { img: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=500&auto=format&fit=crop&q=80&bg_id=83", desc: "অপেরা হাউসের ভেলভেট গ্যালারি" },
    "Historic European Fountain Square (ইউরোপীয় প্রাচীন ফোয়ারা স্কয়ার)": { img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=500&auto=format&fit=crop&q=80&bg_id=84", desc: "ইউরোপীয় প্রাচীন ফোয়ারা স্কয়ার" },
    "Medieval Stone Castle Corridor (মধ্যযুগীয় পাথরের রাজপ্রাসাদ)": { img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500&auto=format&fit=crop&q=80&bg_id=85", desc: "মধ্যযুগীয় পাথরের রাজপ্রাসাদ" },
    "Spanish Courtyard with Floral Tiles (স্প্যানিশ টাইলস অলঙ্কৃত উঠান)": { img: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=500&auto=format&fit=crop&q=80&bg_id=86", desc: "স্প্যানিশ টাইলস অলঙ্কৃত উঠান" },
    "Old World Brick Arch Bridge (পুরানো পাথরের খিলান ব্রিজ)": { img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=500&auto=format&fit=crop&q=80&bg_id=87", desc: "পুরানো পাথরের খিলান ব্রিজ" },
    "Vintage Parisian Cafe Street (প্যারিসের ভিনটেজ ক্যাফে স্ট্রিট)": { img: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=500&auto=format&fit=crop&q=80&bg_id=88", desc: "প্যারিসের ভিনটেজ ক্যাফে স্ট্রিট" },
    "Gothic Stained Glass Window Cathedral (গথিক গ্লাস উইন্ডো মন্দির)": { img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&auto=format&fit=crop&q=80&bg_id=89", desc: "গথিক গ্লাস উইন্ডো মন্দির" },
    "Renaissance Art Gallery (রেনেসাঁ শিল্পকর্ম গ্যালারি)": { img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&auto=format&fit=crop&q=80&bg_id=90", desc: "রেনেসাঁ শিল্পকর্ম গ্যালারি" },
    "Celestial Starry Night Sky (তারকাময় রাতের আকাশ)": { img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=500&auto=format&fit=crop&q=80&rel_id=36", desc: "তারার আলোয় উজ্জ্বল খোলা আকাশের প্রাকৃতিক পরিবেশ" },
    "Fantasy Glowing Enchanted Forest (মায়াবী আলোর জাদুকরী বন)": { img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=500&auto=format&fit=crop&q=80&bg_id=92", desc: "মায়াবী আলোর জাদুকরী বন" },
    "Ethereal Cloud Kingdom (মেঘের ওপর রাজকীয় অট্টালিকা)": { img: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=500&auto=format&fit=crop&q=80&bg_id=93", desc: "মেঘের ওপর রাজকীয় অট্টালিকা" },
    "Dreamy Sunset Mirror Water Pool (পানিতে আকাশের প্রতিফলন)": { img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&auto=format&fit=crop&q=80&bg_id=94", desc: "পানিতে আকাশের প্রতিফলন" },
    "Floating Lantern Night Sky (রাতের আকাশে হাজারো উড়ন্ত ফানুস)": { img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&auto=format&fit=crop&q=80&rel_id=37", desc: "রাতের আকাশে ওড়া আলোকিত ফানুসের উৎসব" },
    "Surreal Gold Leaf Portal (সোনালী খোদাই করা মায়াবী তোরণ)": { img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500&auto=format&fit=crop&q=80&bg_id=96", desc: "সোনালী খোদাই করা মায়াবী তোরণ" },
    "Golden Sunset Horizon Mist (কুয়াশাচ্ছন্ন সোনালী দিগন্ত)": { img: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500&auto=format&fit=crop&q=80&bg_id=97", desc: "কুয়াশাচ্ছন্ন সোনালী দিগন্ত" },
    "Neon Holographic Cyber Tunnel (সায়েন্স ফিকশন সাইবার টানেল)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=202", desc: "হোলোগ্রাফিক নিয়ন আলোর সাইবার টানেল" },
    "Mystical Temple Crystal Cave (স্ফটিক খচিত জাদুকরী গুহা)": { img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&auto=format&fit=crop&q=80&bg_id=99", desc: "স্ফটিক খচিত জাদুকরী গুহা" },
    "Royal Starlight Galaxy Ballroom (মহাজাগতিক গ্যালাক্সি বলরুম)": { img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=500&auto=format&fit=crop&q=80&bg_id=100", desc: "মহাজাগতিক গ্যালাক্সি বলরুম" },
    "Custom (কাস্টম ডেসক্রিপশন)": { img: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500&auto=format&fit=crop&q=80&bg_id=101", desc: "কাস্টম ডেসক্রিপশন" },
    "Grand Royal Dance Stage with Spotlights (গ্ল্যামারাস রাজকীয় ড্যান্স স্টেজ)": { img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500&auto=format&fit=crop&q=80&rel_id=1", desc: "স্পটলাইটসহ অলঙ্কৃত রাজকীয় কনসার্ট ও ড্যান্স স্টেজ" },
    "Bollywood Musical Stage with Fog & Lights (বলিউড রয়্যাল ড্যান্স স্টেজ)": { img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&auto=format&fit=crop&q=80&rel_id=2", desc: "রঙিন আলো ও ফগ ধোঁয়াযুক্ত মিউজিক্যাল স্টেজ" },
    "Open Palace Courtyard for Kathak/Classical Dance (কথক ও ভারতনাট্যম নৃত্যমঞ্চ)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=208", desc: "ঐতিহাসিক রাজপ্রাসাদের খোলা পাথরের উঠান ও তোরণ" },
    "Festive Garba & Dandiya Raas Open Arena (উৎসবের ডান্ডিয়া ও গরবা ড্যান্স গ্রাউন্ড)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=209", desc: "উৎসবের আলো ও ফুলের সুসজ্জিত খোলা ড্যান্স প্রাঙ্গণ" },
    "Modern Mirror Dance Studio with Neon Glow (নিয়ন ড্যান্স স্টুডিও)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=210", desc: "আয়না ও নিয়ন গ্লো আলোয় উজ্জ্বল ড্যান্স স্টুডিও" },
    "Open Sunset Riverbank Folk Dance Stage (নদীর পাড়ে উন্মুক্ত ফোক ড্যান্স স্টেজ)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=211", desc: "গোধূলির সূর্যাস্তের আলোয় উন্মুক্ত গ্রাম্য নদীর পাড়" },
    "Glitz & Glamour Live Concert Stage (কনসার্ট ও মিউজিক্যাল ড্যান্স স্টেজ)": { img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&auto=format&fit=crop&q=80", desc: "গ্ল্যামারাস লাইভ কনসার্ট স্টেজ ও অডিয়েন্স স্পেস" },
    "Rainy Open Street Dance Floor (বৃষ্টিস্নাত ওপেন ড্যান্স ফ্লোর)": { img: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=500&auto=format&fit=crop&q=80&rel_id=6", desc: "রাতের আলোয় ভেজা বৃষ্টিস্নাত স্ট্রিট ড্যান্স ফ্লোর" },
    "Royal Marble Ballroom Dance Floor (রয়্যাল মার্বেল বলরুম ড্যান্স ফ্লোর)": { img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=500&auto=format&fit=crop&q=80&rel_id=7", desc: "ঝাড়বাতি ও চকচকে মার্বেল ড্যান্স বলরুম" },
    "Open Palace Courtyard Dance Stage (কথক ও ভারতনাট্যম নৃত্যমঞ্চ)": { img: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=500&auto=format&fit=crop&q=80&rel_id=3", desc: "ঐতিহাসিক রাজপ্রাসাদের খোলা পাথরের নৃত্যমঞ্চ" },
    "Festive Garba & Dandiya Arena (উৎসবের ডান্ডিয়া ও গরবা ড্যান্স গ্রাউন্ড)": { img: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=500&auto=format&fit=crop&q=80&rel_id=4", desc: "উৎসবের আলো ও ফুলের সুসজ্জিত খোলা ড্যান্স প্রাঙ্গণ" },
    "Modern Mirror Dance Studio (আয়না খচিত আধুনিক নিয়ন ড্যান্স স্টুডিও)": { img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=500&auto=format&fit=crop&q=80&rel_id=5", desc: "আয়না ও সফট আলোয় উজ্জ্বল প্রফেশনাল ড্যান্স স্টুডিও" },
    "Realistic Village Mud Trail (বাস্তবসম্মত গ্রামের মেঠো পথ)": { img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&auto=format&fit=crop&q=80&rel_id=8", desc: "সবুজ গাছপালায় ঘেরা মেঠো গ্রাম্য পথ" },
    "Traditional Village Concrete Road (গ্রামের বাঁধানো পাকা রাস্তা)": { img: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=500&auto=format&fit=crop&q=80&rel_id=9", desc: "গাছপালায় ছায়াময় সুন্দর পাকা গ্রাম্য রাস্তা" },
    "Rainy Village Road with Lush Greenery (বৃষ্টিভেজা রূপসী গ্রামের রাস্তা)": { img: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=500&auto=format&fit=crop&q=80&rel_id=10", desc: "বৃষ্টির পানিতে ভেজা সতেজ গ্রামের রাস্তা" },
    "Vintage City Street with Heritage Buildings (ঐতিহাসিক শহরের পুরানো রাস্তা)": { img: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=500&auto=format&fit=crop&q=80&rel_id=11", desc: "ঐতিহাসিক দালানকোঠাবেষ্টিত শহরের প্রাচীন রাস্তা" },
    "Modern City Boulevard at Dusk (আধুনিক আলোকসজ্জার শহরের রাস্তা)": { img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&auto=format&fit=crop&q=80&rel_id=12", desc: "সন্ধ্যার আলোয় আলোকিত আধুনিক শহরের রাস্তা" },
    "Rainy Monsoon Street with Reflections (বৃষ্টি আচ্ছন্ন শহরের রাস্তা ও পানির প্রতিফলন)": { img: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=500&auto=format&fit=crop&q=80&rel_id=13", desc: "বৃষ্টিভেজা শহরের রাস্তা ও বাতির সুন্দর প্রতিফলন" },
    "Vintage Kolkata Tram Track Street (পুরানো কলকাতার ট্রাম লাইন রাস্তা)": { img: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=500&auto=format&fit=crop&q=80&rel_id=14", desc: "ঐতিহ্যবাহী পুরানো কলকাতার ট্রাম পথ" },
    "Parisian Cobblestone Alley (প্যারিসের ভিনটেজ পাথরের গলি রাস্তা)": { img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500&auto=format&fit=crop&q=80&rel_id=15", desc: "ইউরোপীয় কায়দার ভিনটেজ পাথরের গলি রাস্তা" },
    "Open Rooftop Terrace with Sunset View (বাড়ির উন্মুক্ত ছাদ ও সূর্যাস্ত)": { img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=80&rel_id=16", desc: "বাড়ির খোলা ছাদে সন্ধ্যার গোধূলির সূর্যাস্ত" },
    "Festive Fairy-Lit Rooftop (হাজারো বাতিতে সাজানো উৎসবের ছাদ)": { img: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=500&auto=format&fit=crop&q=80&rel_id=17", desc: "ঝিকমিক ফেয়ারি লাইটে সুসজ্জিত উৎসবের ছাদ" },
    "Colonial Mansion Veranda (ঔপনিবেশিক জমিদার বাড়ির রাজকীয় বারান্দা)": { img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=500&auto=format&fit=crop&q=80&rel_id=18", desc: "উঁচু খাম্বা ও অলঙ্কৃত ঔপনিবেশিক বারান্দা" },
    "Modern High-Rise Penthouse Balcony (আধুনিক পেন্টহাউসের খোলা বেলকনি)": { img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=500&auto=format&fit=crop&q=80&rel_id=19", desc: "কাচের দেয়াল ও সিটি ভিউসহ আধুনিক বেলকনি" },
    "Traditional Clay Courtyard Veranda (মাটির তৈরি গ্রামের ঐতিহ্যবাহী বারান্দা)": { img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500&auto=format&fit=crop&q=80&rel_id=20", desc: "গ্রামের মাটির তৈরি শান্ত ও পরিচ্ছন্ন বারান্দা" },
    "Heritage Marble Archway Balcony (রাজকীয় মার্বেল বেলকনি)": { img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&auto=format&fit=crop&q=80&rel_id=21", desc: "মার্বেলের খোদাই করা প্রাসাদের বারান্দা" },
    "Traditional Bengali Living Room (ঐতিহ্যবাহী পালঙ্ক ও ঘর)": { img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&auto=format&fit=crop&q=80&rel_id=22", desc: "ঐতিহ্যবাহী কাঠের ফার্নিচার ও কার্পেট সজ্জিত ঘর" },
    "Modern Luxury Living Room (আধুনিক বিলাসবহুল ড্রয়িং রুম)": { img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&auto=format&fit=crop&q=80&rel_id=23", desc: "সোফা ও লাক্সারি ইন্টেরিয়র সজ্জিত ড্রয়িং রুম" },
    "Sunlit Bedroom Window Loft (জানালার মিষ্টি রোদসহ আরামদায়ক ঘর)": { img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500&auto=format&fit=crop&q=80&rel_id=24", desc: "বিশাল জানালা দিয়ে আসা প্রাকৃতিক রোদের ঘর" },
    "Vintage Victorian Library Room (কাষ্ঠমণ্ডিত পুরানো লাইব্রেরি ঘর)": { img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=500&auto=format&fit=crop&q=80&rel_id=25", desc: "কাঠের র‍্যাক ও বই খচিত অভিজাত ঘর" },
    "Serene Riverbank at Sunset (সূর্যাস্তের উন্মুক্ত নদীর পাড়)": { img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=80&rel_id=26", desc: "নদীর পাড়ে সন্ধ্যার রক্তিম গোধূলি আলো" },
    "Heritage Ghat on River Ganges (গঙ্গা নদীর প্রদীপ সজ্জিত বাঁধাল ঘাট)": { img: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=500&auto=format&fit=crop&q=80&rel_id=27", desc: "নদীর পাড়ে প্রদীপ ও ধাপযুক্ত সিঁড়ির ঘাট" },
    "Sunny Beach with Soft Golden Waves (সমুদ্রসৈকতে গোধূলির আলো ও নরম ঢেউ)": { img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=80&rel_id=28", desc: "সমুদ্রের নরম ঢেউ ও সূর্যাস্তের বালুচর" },
    "Tropical Resort Poolside (ট্রপিক্যাল রিসোর্টের পুলসাইড)": { img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&auto=format&fit=crop&q=80&rel_id=29", desc: "পাম গাছে ঘেরা রিসোর্টের সুইমিং পুলসাইড" },
    "Sunlit Wildflower Meadow (বুনো ফুলে ভরা খোলা মেঠো প্রান্তর)": { img: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=500&auto=format&fit=crop&q=80&rel_id=32", desc: "বুনো ফুলে ভরা প্রাকৃতিক উন্মুক্ত প্রান্তর" },
    "French Renaissance Palace Garden (ফরাসি রাজপ্রাসাদের সুসজ্জিত বাগান)": { img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=500&auto=format&fit=crop&q=80&rel_id=33", desc: "সুসজ্জিত রাজকীয় বাগান ও ফোয়ারা" },
    "Puja Mandap & Alpona Floor (পূজামণ্ডপ ও সুন্দর আলপনা আঁকা মেঝে)": { img: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=500&auto=format&fit=crop&q=80&rel_id=34", desc: "রঙিন আলপনা ও পূজামণ্ডপের মেঝে" },

    // 7 Key Elements Visual Mappings - 100+ Action & Movement Poses
    "Kathak Classical Dance Mudra (কথক নৃত্য মুদ্রা ও হাতের ভঙ্গি)": { img: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=500&auto=format&fit=crop&q=80&act=1", desc: "ঐতিহ্যবাহী কথক নৃত্য মুদ্রা ও শাস্ত্রীয় হস্তভঙ্গি" },
    "Kathak Dynamic Chakkars & Pirouettes (কথক নৃত্যের দ্রুত চক্কর ও ঘূর্ণন)": { img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500&auto=format&fit=crop&q=80&act=2", desc: "কথক নৃত্যের দ্রুত পদসঞ্চালন ও বৃত্তাকার ঘূর্ণন" },
    "Kathak Tatkar Footwork & Ankle Bells Pose (কথক নৃত্যের ঘুমুর ঝংকার ও তৎকার পদক্ষেপ)": { img: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=500&auto=format&fit=crop&q=80&act=3", desc: "পায়ে ঘুমুর বেঁধে তাল মিলিয়ে শাস্ত্রীয় তৎকার মুদ্রা" },
    "Bharatanatyam Aramandi Half-Sit Stance (ভারতনাট্যম আরামন্ডি অর্ধ-উপবিষ্ট ভঙ্গি)": { img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=500&auto=format&fit=crop&q=80&act=4", desc: "ভারতনাট্যমের মৌলিক আরামন্ডি ভারসাম্যপূর্ণ অর্ধ-বসা পোজ" },
    "Bharatanatyam Nataraja Cosmic Dance Pose (ভারতনাট্যম নটরাজ শিব নৃত্য ভঙ্গি)": { img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&auto=format&fit=crop&q=80&act=5", desc: "এক পায়ে দাঁড়িয়ে অপর পা তুলে নটরাজ শিবের ঐশ্বরিক নৃত্যভঙ্গি" },
    "Bharatanatyam Alarippu Opening Invocation (ভারতনাট্যম আলারিপ্পু বন্দনা মুদ্রা)": { img: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=500&auto=format&fit=crop&q=80&act=6", desc: "নৃত্যারম্ভে দেব-বন্দনার লাবণ্যময় আলারিপ্পু অঙ্গভঙ্গি" },
    "Bharatanatyam Mayura Mudra Peacock Gesture (ভারতনাট্যম ময়ূর মুদ্রা ও হস্তভঙ্গি)": { img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=500&auto=format&fit=crop&q=80&act=7", desc: "আঙুলের চমৎকার ভঙ্গিমায় ময়ূরের পেখম মেলার শাস্ত্রীয় মুদ্রা" },
    "Bharatanatyam Pataka Mudra Flowing Gesture (ভারতনাট্যম পতাকা মুদ্রা ও শাস্ত্রীয় অভিবাদন)": { img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=500&auto=format&fit=crop&q=80&act=8", desc: "খোলা সোজা হাতের তালু দিয়ে শাস্ত্রীয় পতাকা মুদ্রা" },
    "Odissi Tribhangi Three-Bend Graceful Posture (ওড়িশি ত্রিভঙ্গী তিন-বাঁকের লাবণ্যময় ভঙ্গি)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&act=9", desc: "মাথা, কোমর ও হাঁটুর তিন বাঁকে গড়া ওড়িশি শাস্ত্রীয় ত্রিভঙ্গী" },
    "Odissi Chauka Wide Square Stance (ওড়িশি চৌকা বলিষ্ঠ শাস্ত্রীয় ভঙ্গি)": { img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80&act=10", desc: "ভগবান জগন্নাথের আরাধনায় বলিষ্ঠ চতুষ্কোণ চৌকা ভঙ্গি" },
    "Odissi Lotus Bud Hand Gesture & Arch (ওড়িশি পদ্মকোরক মুদ্রা ও নম্র ভঙ্গি)": { img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=500&auto=format&fit=crop&q=80&act=11", desc: "পদ্মকলির মতো হাত ও নমনীয় কোমরের বাঁক" },
    "Mohiniyattam Enchanting Swaying Waves Gesture (মোহিনীঅট্টম তরঙ্গের মতো ছন্দময় দোলাচল)": { img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500&auto=format&fit=crop&q=80&act=12", desc: "সমুদ্রের ঢেউয়ের মতো কোমল ও মোহিত করা শরীরের ছন্দ" },
    "Mohiniyattam Swan Gliding Soft Movement (মোহিনীঅট্টম রাজহংসীর মতো কোমল পদক্ষেপ)": { img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=80&act=13", desc: "সাদা-সোনালী কাসাবু শাড়িতে রাজহংসীর মতো শান্ত পদচারণা" },
    "Kathakali Mudra & Dramatic Eye Darting (কথাকলি নাটকীয় চোখ ও হস্ত মুদ্রা)": { img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&auto=format&fit=crop&q=80&act=14", desc: "চোখের তীব্র নাটকীয় মুভমেন্ট ও গম্ভীর হস্তমুদ্রা" },
    "Manipuri Delicate Circular Floating Dance (মণিপুরী বৃত্তাকার নরম ভাসমান নৃত্যভঙ্গি)": { img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500&auto=format&fit=crop&q=80&act=15", desc: "মণিপুরী রাসনৃত্যের নরম ও অলৌকিক ভাসমান পদক্ষেপ" },
    "Kuchipudi Brass Plate Dance Balancing Stance (কুচিপুড়ি পিতলের থালায় পদরেখা নৃত্য মুদ্রা)": { img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&auto=format&fit=crop&q=80&act=16", desc: "পিতলের থালার কিনারায় পা রেখে অসাধারণ ভারসাম্যপূর্ণ নৃত্য" },
    "Classical Anjali Mudra Prayer Hand Offering (শাস্ত্রীয় অঞ্জলি মুদ্রা ও হাতজোড় প্রার্থনা)": { img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=80&act=17", desc: "বুকের সামনে দুই হাত জোড় করে নিবেদন ও অভিবাদন" },
    "Classical Hamsasya Swan-Beak Delicate Mudra (শাস্ত্রীয় হংসাস্য সূক্ষ্ম আঙুলের মুদ্রা)": { img: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=500&auto=format&fit=crop&q=80&act=18", desc: "হাঁসের চঞ্চুর মতো তর্জনী ও বৃদ্ধাঙ্গুলি স্পর্শ করা মুদ্রা" },
    "Classical Shikhara Sceptre Strong Royal Mudra (শাস্ত্রীয় শিখর দৃঢ় রাজকীয় হস্ত মুদ্রা)": { img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80&act=19", desc: "মুষ্টিবদ্ধ হাতে বৃদ্ধাঙ্গুলি খাড়া করে রাজকীয় তেজস্বী মুদ্রা" },
    "Classical Pushpaputa Flower Offering Gesture (শাস্ত্রীয় পুষ্পপুট অঞ্জলিভরা পুষ্পার্ঘ্য ভঙ্গি)": { img: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500&auto=format&fit=crop&q=80&act=20", desc: "দুই অঞ্জলি ভরে ফুলের পাপড়ি নিবেদন করার ভঙ্গি" },
    "Dynamic Saree Twirl & 360 Spin (শাড়ির ঘের ও আঁচল উড়িয়ে ৩৬০ ডিগ্রি ড্যান্স স্পিন)": { img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500&auto=format&fit=crop&q=80&act=21", desc: "নাচের তালে শাড়ির ঘের ও ওড়না ওড়ানোর দ্রুত ৩৬০ ডিগ্রি ঘূর্ণন" },
    "Graceful Flying Pallu Caught in Breeze (বাতাসে উড়ন্ত শাড়ির আঁচল ধরার লাবণ্যময় ভঙ্গি)": { img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&auto=format&fit=crop&q=80&act=22", desc: "বাতাসে শাড়ির আঁচল উড়ে যাওয়ার সময় আলতো হাতে ধরার ভঙ্গি" },
    "Holding Saree Pleats While Gliding Forward (কুঁচি আলতো হাতে ধরে সামনে এগোনোর ভঙ্গি)": { img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&auto=format&fit=crop&q=80&act=23", desc: "শাড়ির কুঁচি এক হাতে আলতো তুলে আত্মবিশ্বাসে এগিয়ে চলা" },
    "Dramatically Flicking Saree Pallu Over Shoulder (কাঁধের ওপর শাড়ির আঁচল নাটকীয়ভাবে ঘোরানোর ভঙ্গি)": { img: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=500&auto=format&fit=crop&q=80&act=24", desc: "এক ঝটকায় কাঁধের ওপর আঁচল ফেলে রাজকীয় ভঙ্গিমা" },
    "Swaying Saree Border with Gentle Hip Motion (কোমরের দোলায় শাড়ির চওড়া পাড় দোলানোর ভঙ্গি)": { img: "https://images.unsplash.com/photo-1583391733975-04285b0d0999?w=500&auto=format&fit=crop&q=80&act=25", desc: "কোমরের হালকা নাড়াচাড়ায় শাড়ির জরির পাড় দোলানো" },
    "Holding Dupatta Edges Like Fluttering Wings (দোপাট্টার দুই কোণ পাখির ডানার মতো মেলা ভঙ্গি)": { img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500&auto=format&fit=crop&q=80&act=26", desc: "দুই হাতে ওড়নার প্রান্ত ধরে ডানার মতো ছড়িয়ে দেওয়া" },
    "Lehenga Hem Lifting & Twirling Flare (লেহেঙ্গার ঘের দুই হাতে তুলে সুন্দর ঘূর্ণন)": { img: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500&auto=format&fit=crop&q=80&act=27", desc: "ভারী লেহেঙ্গার ঘের দুই হাতে তুলে বৃত্তাকার স্পিন" },
    "Swirling Anarkali Dress in Rapid Motion (আনারকলি ফ্রকের বৃত্তাকার দ্রুত নাচের ঘের)": { img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&auto=format&fit=crop&q=80&act=28", desc: "ফ্লোয়িং আনারকলি ড্রেসের বাতাসে ছড়িয়ে পড়া অপূর্ব ঘের" },
    "Draping Dupatta Over Forehead in Ghoonghat (লজ্জাবতী ওড়নার ঘোমটা কপালে টানার মধুর ভঙ্গি)": { img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=500&auto=format&fit=crop&q=80&act=29", desc: "আলতো হাতে স্বচ্ছ ওড়নার ঘোমটা টেনে লাজুক হাসিমুখ" },
    "Wind-Blown Chiffon Flowing in Horizon (বাতাসে শিফন শাড়ির দীর্ঘ আঁচল ওড়ার দৃশ্য)": { img: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=500&auto=format&fit=crop&q=80&act=30", desc: "খোলা আকাশের নিচে শিফন বা জর্জেটের দীর্ঘ আঁচল ওড়া" },
    "Holding Both Pallu Corners in Dramatic Flourish (শাড়ির আঁচলের দুই প্রান্ত মেলে রাজকীয় প্রকাশ)": { img: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&auto=format&fit=crop&q=80&act=31", desc: "আঁচলের দুই প্রান্ত দুই হাত দিয়ে মেলে ধরা রাজকীয় স্টাইল" },
    "Gracefully Adjusting Waist Kamarbandh and Pleats (কোমরবন্ধ ও শাড়ির কুঁচি ঠিক করার মার্জিত ভঙ্গি)": { img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&auto=format&fit=crop&q=80&act=32", desc: "কোমরে হাত দিয়ে সোনার কোমরবন্ধ ও কুঁচি বিন্যাস করা" },
    "Twirling with Trailing Silk Train (সিল্কের দীর্ঘ ট্রেইল বাতাসে উড়িয়ে ঘূর্ণন)": { img: "https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?w=500&auto=format&fit=crop&q=80&act=33", desc: "লম্বা ট্রেইলযুক্ত পোশাকের রোমাঞ্চকর ঘূর্ণন" },
    "Veil Flying Back in Dramatic Motion (বাতাসে ওড়না উড়ে গিয়ে প্রকাশ পাওয়া মুখশ্রী)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&act=34", desc: "বাতাসে ওড়না উড়ে গিয়ে প্রকাশ পাওয়া দীপ্তিময় মুখমণ্ডল" },
    "Gentle Saree Flutter in Slow Motion Breeze (মৃদু বাতাসে শাড়ির কাপড়ের ছন্দময় তরঙ্গ)": { img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80&act=35", desc: "ধীর বাতাসের দোলায় কাপড়ের নরম ও শান্ত আন্দোলন" },
    "Graceful Walking with Flowing Pallu (বাতাসে আঁচল উড়িয়ে ছন্দময় পদক্ষেপ)": { img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&auto=format&fit=crop&q=80&act=36", desc: "বাতাসে শাড়ির আঁচল উড়িয়ে ছন্দময় সাবলীল হাঁটার ভঙ্গি" },
    "Slow Elegant Runway Model Stride (র‍্যাম্প মডেলদের মতো ধীর আত্মবিশ্বাসী ক্যাটওয়াক)": { img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=80&act=37", desc: "হাই-ফ্যাশন মডেলদের সোজা ও ছন্দময় আত্মবিশ্বাসী ক্যাটওয়াক" },
    "Stepping Down Royal Marble Staircase (রাজপ্রাসাদের মার্বেল সিঁড়ি বেয়ে ধীর পায়ে নামা)": { img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=500&auto=format&fit=crop&q=80&act=38", desc: "কারুকার্যময় মার্বেল সিঁড়ি বেয়ে রাজকীয় মর্যাদায় নামার ভঙ্গি" },
    "Tiptoe Stepping Over Rain Puddles (বৃষ্টির জমা পানিতে আলতো পায়ের চঞ্চল টিপটো পদক্ষেপ)": { img: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=500&auto=format&fit=crop&q=80&act=39", desc: "বৃষ্টির পানিতে আলতো পদক্ষেপে হেঁটে যাওয়ার আনন্দঘন মুহূর্ত" },
    "Gliding Forward with Ankle Bells Jingling (পায়ে নূপুর ও ঘুমুরের ঝংকারে ছন্দময় অগ্রগমন)": { img: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=500&auto=format&fit=crop&q=80&act=40", desc: "রুনুঝুনু নূপুরের শব্দে ছন্দময় পদক্ষেপ" },
    "Stepping Out of Vintage Palanquin / Doli (ঐতিহাসিক রাজকীয় পালকি বা ডুলি থেকে নামার ভঙ্গি)": { img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500&auto=format&fit=crop&q=80&act=41", desc: "ঐতিহ্যবাহী কাঠের পালকি থেকে নামার রোমাঞ্চকর ক্ষণ" },
    "Casual Carefree Stroll in Green Meadow (সবুজ ঘাসের মাঠে উদাসীন মুক্ত বাতাসে হাঁটা)": { img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&auto=format&fit=crop&q=80&act=42", desc: "সবুজ খোলা মাঠে এলোমেলো চুলে মুক্ত হাঁটার রূপ" },
    "Turning Back Mid-Stride with Gentle Smile (হাঁটতে হাঁটতে পেছনে ফিরে মিষ্টি হাসির ভঙ্গি)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&act=43", desc: "হাঁটার মাঝে হঠাৎ পেছনে ফিরে মিষ্টি হাসির ক্যান্ডিড ভঙ্গি" },
    "Descending River Ghat Steps into Water (নদীর ঘাটের পাথুরে সিঁড়ি বেয়ে ধীর পায়ে নামা)": { img: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=500&auto=format&fit=crop&q=80&act=44", desc: "নদীর বাঁধানো ঘাটের সিঁড়ি বেয়ে পানিতে নামার শান্ত রূপ" },
    "Cross-Legged Fashion Model Pivot Stride (ফ্যাশন মডেলের পা ক্রস করে থামার পাওয়ার ওয়াক)": { img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=80&act=45", desc: "পা ক্রস করে নাটকীয়ভাবে এক জায়গায় থামার পাওয়ার পোজ" },
    "Walking Along Historic Palace Corridor (ঐতিহাসিক প্রাসাদের পিলারের করিডোরে ধীর পদচারণা)": { img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500&auto=format&fit=crop&q=80&act=46", desc: "পাথরের বিশাল খিলান ও পিলারের ছায়ায় রাজকীয় পদচারণা" },
    "Carefree Skipping on Golden Beach (সমুদ্রের সোনালী বালুকাবেলায় খুশির চঞ্চল পদক্ষেপ)": { img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=80&act=47", desc: "সমুদ্রের নরম ঢেউ ও বালুচরে চঞ্চল পদচারণা" },
    "Gracefully Walking While Holding Brass Urli (হাতে পিতলের মঙ্গলকলস নিয়ে রাজকীয় হাঁটা)": { img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=500&auto=format&fit=crop&q=80&act=48", desc: "কোমরে পিতলের কলস বা উরলি নিয়ে ঐতিহ্যবাহী হাঁটা" },
    "Midnight Promenade Under Lantern Glow (ফানুস ও লণ্ঠনের আলোয় নিশুতি রাতের মোহময় হাঁটা)": { img: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=500&auto=format&fit=crop&q=80&act=49", desc: "রাতের আলোয় মায়াবী স্নিগ্ধ পরিবেশে নিঃশব্দ পদচারণা" },
    "Brisk Confident Stride with Swaying Hips (আত্মবিশ্বাসী ক্ষিপ্র কদমে ছন্দময় শরীরী চলন)": { img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=80&act=50", desc: "দৃঢ় আত্মবিশ্বাস ও সৌন্দর্যে ভরা আধুনিক হাঁটার স্টাইল" },
    "Festive Dandiya Sticks Clashing Rhythm (উৎসবমুখর ডান্ডিয়া লাঠির ছন্দময় টক্কর ও নৃত্য)": { img: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=500&auto=format&fit=crop&q=80&act=51", desc: "দুই হাতে রঙিন ডান্ডিয়া লাঠি নিয়ে নাচের ছন্দময় পোজ" },
    "Garba Clap and Circular Spin (গরবা নাচের হাততালি ও আনন্দময় বৃত্তাকার স্পিন)": { img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&auto=format&fit=crop&q=80&act=52", desc: "গরবা নাচের দুই তালি দিয়ে বৃত্তাকারে ঘোরার ভঙ্গি" },
    "Rajasthani Ghoomar Swirling Veil Dance (রাজস্থানি ঘুমর নাচের ঘোমটা ও ঘেরের ঘূর্ণন)": { img: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500&auto=format&fit=crop&q=80&act=53", desc: "মাথায় ওড়নার ঘোমটা ও ঘাঘরা ছড়িয়ে দিয়ে ঐতিহ্যবাহী ঘুমর নাচ" },
    "Bengali Dhunuchi Dance with Smoldering Clay Incense (ধুনুচি হাতে দুর্গোৎসবের উল্লাসময় আরতি নৃত্য)": { img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&auto=format&fit=crop&q=80&act=54", desc: "ধোঁয়া ওঠা মাটির ধুনুচি দুই হাতে তুলে আরতি নৃত্য" },
    "Bengali Rabindra Nritya Lyrical Hand Posture (রবীন্দ্র নৃত্যের কাব্যিক ও লাবণ্যময় হস্তমুদ্রা)": { img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&auto=format&fit=crop&q=80&act=55", desc: "শান্তিনিকাতনী রবীন্দ্র নৃত্যের কোমল ও কাব্যিক হস্তভঙ্গি" },
    "Assamese Bihu Finger Clapping & Hip Sway (অসমীয়া বিহু নৃত্যের আঙুল নাচানো ও কোমরের ভঙ্গি)": { img: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=500&auto=format&fit=crop&q=80&act=56", desc: "বিহু নাচের চটুল কোমর দোলানো ও আঙুলের তালি" },
    "Maharashtrian Lavani Sensual Footwork Stance (মহারাষ্ট্রীয় লাবণী নাচের তীব্র ও আবেদনময় পদক্ষেপ)": { img: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=500&auto=format&fit=crop&q=80&act=57", desc: "নৌভারী শাড়িতে লাবণী নাচের গতিশীল ও চঞ্চল ভঙ্গি" },
    "Punjabi Giddha Clapping & Energetic Leap (পাঞ্জাবি গিদ্ধা নৃত্যের করতালি ও প্রাণোচ্ছল লাফ)": { img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=500&auto=format&fit=crop&q=80&act=58", desc: "পাঞ্জাবি গিদ্ধা নৃত্যের হাততালি ও আনন্দময় উদ্যম" },
    "Rajasthani Kalbelia Serpent Grace Twisting (রাজস্থানি কালবেলিয়া সাপের মতো নমনীয় শরীরের দোলা)": { img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=500&auto=format&fit=crop&q=80&act=59", desc: "কালো পোশাক ও আয়নার নকশায় কালবেলিয়া সাপুড়ে নৃত্যভঙ্গি" },
    "Kashmiri Rauf Women Interlocked Arm Dance (কাশ্মীরি রউফ নাচে বাহুতে বাহু জড়িয়ে নাচ)": { img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&auto=format&fit=crop&q=80&act=60", desc: "ফিরান পোশাকে কাশ্মীরি রউফ নাচের ছন্দময় দোলন" },
    "South Indian Kummi Folk Rhythmic Hand Claps (দক্ষিণভারতীয় কুম্মি নাচের তালি দেওয়ার ছন্দ)": { img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500&auto=format&fit=crop&q=80&act=61", desc: "বৃত্তাকারে দাঁড়িয়ে তালি দিয়ে লোকগীতি গাওয়া ও নাচ" },
    "Sufi Whirling Trance with Raised Palm (সুফি ডারভিসের মতো এক হাত আকাশে তুলে ধ্যানমগ্ন ঘূর্ণন)": { img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500&auto=format&fit=crop&q=80&act=62", desc: "এক হাত আসমানে ও এক হাত জমিনে রেখে আত্মহারা ঘূর্ণন" },
    "Holi Festival Throwing Gulal Color Cloud (হোলি উৎসবে দুই হাত ভরে আকাশে আবির ওড়ানোর ভঙ্গি)": { img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&auto=format&fit=crop&q=80&act=63", desc: "রঙিন আবির বাতাসে ছড়িয়ে দেওয়ার উল্লাসঘন মুহূর্ত" },
    "Diwali Sparkler Wand Twirling Joy (দীপাবলিতে হাতে জ্বলন্ত ফুলঝুরি ঘুরিয়ে আনন্দ উল্লাস)": { img: "https://images.unsplash.com/photo-1557683316-973673baf926?w=500&auto=format&fit=crop&q=80&act=64", desc: "জ্বলন্ত ফুলঝুরির আলোর ঝলকানিতে উৎসবের আনন্দ" },
    "Festive Dholak Drum Rhythmic Celebration Pose (ঢোলের বাদ্যে মেতে ওঠা বাঁধভাঙা উৎসবের নাচ)": { img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&auto=format&fit=crop&q=80&act=65", desc: "ঢোলের তালে আনন্দে মেতে ওঠা স্বতঃস্ফূর্ত নাচের পোজ" },
    "Expressive Eye & Facial Abhinaya (চোখ ও মুখের গভীর অভিব্যক্তিময় নৃত্য ভঙ্গি)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&act=66", desc: "শাস্ত্রীয় নৃত্যের ভাবপূর্ণ চোখ ও মুখের চমৎকার অভিনয়" },
    "Graceful Adjusting Bangles & Jhumka (স্মিত হাসিতে চুড়ি ও কানের ঝুমকা ছোঁয়ার ভঙ্গি)": { img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&auto=format&fit=crop&q=80&act=67", desc: "স্মিত মুখে হাতের চুড়ি ও কানের ঝুমকা স্পর্শ করার মার্জিত ভঙ্গি" },
    "Candid Gentle Laughter with Hand on Mouth (মুখে হাত চেপে লাজুক ও আন্তরিক হাসির ক্যান্ডিড ভঙ্গি)": { img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80&act=68", desc: "মুখে হাত দিয়ে প্রাণখোলা লাজুক হাসির আন্তরিক মুহূর্ত" },
    "Looking Back Over Shoulder with Coquettish Glance (কাঁধের ওপর দিয়ে পেছনে বাঁকা চোখে তাকানোর কটাক্ষ)": { img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=500&auto=format&fit=crop&q=80&act=69", desc: "কাঁধের ওপর দিয়ে পেছনে মায়াবী বাঁকা চাহনি" },
    "Peeking from Behind Wooden Jharokha Window (কাঠের খোদাই করা ঝরোখা জানালার আড়াল থেকে উঁকি)": { img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500&auto=format&fit=crop&q=80&act=70", desc: "ঝরোখা বা অলঙ্কৃত জানালার ফাঁক দিয়ে লাজুক উঁকিঝুঁকি" },
    "Tucking Loose Hair Strand Behind Ear (কানের পেছনে এলোমেলো চুল গোঁজার মিষ্টি আনমনা ভঙ্গি)": { img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=500&auto=format&fit=crop&q=80&act=71", desc: "বাতাসে ওড়া চুল কানের পেছনে গোঁজার মধুর ক্ষণ" },
    "Intense Piercing Eye Contact Portrait (সরাসরি ক্যামেরায় দৃষ্টি রেখে গভীর আকর্ষক চাহনি)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&act=72", desc: "তীক্ষ্ম ও আকর্ষণীয় দৃষ্টিতে সরাসরি ক্যামেরায় তাকানো" },
    "Touching Chin in Thoughtful Nostalgia (চিবুকে আঙুল ছুঁয়ে উদাস চিন্তামগ্ন মিষ্টি ভাব)": { img: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=500&auto=format&fit=crop&q=80&act=73", desc: "চিবুকে হাত দিয়ে আনমনা ভাবনায় হারিয়ে যাওয়ার ভঙ্গি" },
    "Biting Lower Lip with Shy Grin (লাজুক হাসিতে নিচের ঠোঁট আলতো কামড়ে ধরার মিষ্টি ভঙ্গি)": { img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80&act=74", desc: "লাজুক মিষ্টি হাসিতে আলতো ঠোঁট কামড়ে থাকা" },
    "Resting Face Gently on Palm (হাতের তালুতে গাল রেখে আনমনা বসে থাকার ভঙ্গি)": { img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80&act=75", desc: "হাতের তালুতে মুখ রেখে শান্ত দৃষ্টিতে বসে থাকা" },
    "Catching Falling Raindrops on Outstretched Palms (দুই হাত বাড়িয়ে বৃষ্টির প্রথম ফোঁটা ধরার অনুভূতি)": { img: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=500&auto=format&fit=crop&q=80&act=76", desc: "দুই হাত প্রসারিত করে বৃষ্টির ফোঁটা ছোঁয়ার রোমাঞ্চ" },
    "Breathing Scent of Fresh Red Rose (তাজা লাল গোলাপের ঘ্রাণ নেওয়ার স্নিগ্ধ রোমান্টিক ভঙ্গি)": { img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&auto=format&fit=crop&q=80&act=77", desc: "হাতে তাজা গোলাপ নিয়ে চোখ বুজে ঘ্রাণ নেওয়ার স্নিগ্ধ রূপ" },
    "Candid Fixing Matha Patti in Vintage Mirror (ভিন্টেজ রূপালী আয়নায় মাথা পট্টি ঠিক করার ক্যান্ডিড দৃশ্য)": { img: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=500&auto=format&fit=crop&q=80&act=78", desc: "আয়নায় তাকিয়ে গয়না ঠিক করার অসাধারণ ক্যান্ডিড মুহূর্ত" },
    "Looking Up Dreamily into Starlit Night (তারকাময় রাতের আকাশের দিকে মায়াবী দৃষ্টিতে তাকানো)": { img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=500&auto=format&fit=crop&q=80&act=79", desc: "উর্ধ্বমুখী দৃষ্টিতে রাতের তারার দিকে চেয়ে থাকা স্বপ্নিল ভঙ্গি" },
    "Whispering a Secret with Cupped Hand (হাতের আড়াল করে মিষ্টি হাসিতে ফিসফিস করে কথা বলার ভঙ্গি)": { img: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=500&auto=format&fit=crop&q=80&act=80", desc: "হাতে মুখ ঢেকে হাসিমুখের ক্যান্ডিড মুহূর্ত" },
    "Traditional Namaste with Folded Palms at Heart (বুকের কাছে দুই হাত জোড় করে সনাতন নমস্তে অভিবাদন)": { img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=80&act=81", desc: "নম্র বিনম্র চিত্তে সনাতন নমস্তে জানানো" },
    "Touching Feet in Reverent Pranam (শ্রদ্ধাবনত হয়ে গুরুজনদের চরণ স্পর্শ ও আশীর্বাদ নেওয়ার ভঙ্গি)": { img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&auto=format&fit=crop&q=80&act=82", desc: "শ্রদ্ধায় মাথা নত করে প্রণাম ও আশীর্বাদ গ্রহণ" },
    "Holding Glowing Brass Diya with Both Hands (দুই হাতে জ্বলন্ত পিতলের শুভ প্রদীপ ধরে রাখার ভঙ্গি)": { img: "https://images.unsplash.com/photo-1557683316-973673baf926?w=500&auto=format&fit=crop&q=80&act=83", desc: "জ্বলন্ত মাটির বা পিতলের প্রদীপ দুই হাতে তুলে ধরা" },
    "Performing Evening Ganga Aarti with Flame Lamp (গঙ্গার ঘাটে পঞ্চপ্রদীপ তুলে আরতি করার ভক্তিময় ভঙ্গি)": { img: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=500&auto=format&fit=crop&q=80&act=84", desc: "সন্ধ্যার গঙ্গা আরতির পঞ্চপ্রদীপের আগুনের শিখা ঘোরানো" },
    "Blowing Sacred Conch Shell Shankha (দুই হাতে পবিত্র শাঁখ তুলে ফুঁ দেওয়ার ঐশ্বরিক ভঙ্গি)": { img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&auto=format&fit=crop&q=80&act=85", desc: "পূজা ও শুভক্ষণে দুই হাতে শঙ্খ বাজানোর রূপ" },
    "Applying Red Sindoor in Hair Parting (আঙুলে করে সিঁথিতে সিঁদুর পরার চিরন্তন বাঙালি রূপ)": { img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=500&auto=format&fit=crop&q=80&act=86", desc: "সিঁথির মাঝে লাল সিঁদুরের ছোঁয়া দেওয়ার বিবাহিত রূপ" },
    "Sindoor Khela Festive Smearing on Cheeks (বিজয়া দশমীতে সিঁদুর খেলায় গালে লাল আবির ছোঁয়ানোর উল্লাস)": { img: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=500&auto=format&fit=crop&q=80&act=87", desc: "দশমীর সিঁদুর খেলায় গালে সিঁদুর মাখানোর আনন্দ" },
    "Admiring Intricate Mehendi on Both Palms (দুই হাতের মেহেদির সূক্ষ্ম নকশা মেলে ধরে দেখার ভঙ্গি)": { img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&auto=format&fit=crop&q=80&act=88", desc: "দুই হাতের লাল মেহেদি মেলে ধরে দেখার রাজকীয় পোজ" },
    "Splashing Water from Sacred Brass Urli (সুগন্ধি ফুলে ভরা পিতলের পাত্র থেকে পানি ছিটানোর ভঙ্গি)": { img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=500&auto=format&fit=crop&q=80&act=89", desc: "ফুলের পাপড়িযুক্ত জল আলতো হাতে ছিটানো" },
    "Kneeling in Prayer with Closed Eyes (চোখ বন্ধ করে গভীর প্রার্থনায় নতজানু হওয়ার শান্ত ভঙ্গি)": { img: "https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=500&auto=format&fit=crop&q=80&act=90", desc: "শান্ত মনে নতজানু হয়ে পরম প্রভুর প্রার্থনায় নিমগ্ন" },
    "Holding Puja Thali with Flowers and Incense (ফুল, চন্দন ও ধূপসহ পূজার থালা তুলে ধরার ভঙ্গি)": { img: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=500&auto=format&fit=crop&q=80&act=91", desc: "সাজানো পূজার থালা দুই হাতে ধরে মন্দিরের সামনে দাঁড়ানো" },
    "Tying Sacred Red Thread Kalawa on Wrist (হাতে লাল মঙ্গলসূত্র বা রাখি বাঁধার শুভ ভঙ্গি)": { img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&auto=format&fit=crop&q=80&act=92", desc: "হাতে পবিত্র লাল সুতো বা কালাওয়া বাঁধার শুভ দৃশ্য" },
    "Royal Regal Standing Stance (রাজকীয় মার্জিত স্থির পোজ)": { img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&auto=format&fit=crop&q=80&act=93", desc: "রাজকীয় আত্মবিশ্বাসী মার্জিত স্থির পোজ" },
    "Seated Elegantly on Velvet Royal Throne (ভেলভেটের কারুকার্যময় সিংহাসনে রাজকীয় ভঙ্গিতে উপবিষ্ট)": { img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500&auto=format&fit=crop&q=80&act=94", desc: "সোনার সিংহাসনে রাজরানীর মতো গম্ভীর ভঙ্গিমায় বসা" },
    "Resting Hand on Carved Marble Balustrade (মার্বেলের খোদাই করা বারান্দার রেলিংয়ে হাত রেখে দাঁড়ানো)": { img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=500&auto=format&fit=crop&q=80&act=95", desc: "প্রাসাদের বারান্দার রেলিংয়ে আলতো হাত রেখে দাঁড়ানো" },
    "Dramatic Silhouette Standing in Archway Frame (খিলানের তোরণে দাঁড়ানো আলো-ছায়ার ড্রামাটিক সিল্যুয়েট পোজ)": { img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=500&auto=format&fit=crop&q=80&act=96", desc: "প্রাসাদের উঁচু তোরণের আলো-আঁধারিতে নান্দনিক ছায়ামূর্তি" },
    "Leaning Gracefully Against Stone Palace Pillar (পাথরের কারুকার্যময় পিলারে হেলান দিয়ে ভাবুক দাঁড়ানো)": { img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&auto=format&fit=crop&q=80&act=97", desc: "প্রাচীন পিলারে পিঠ ঠেকিয়ে ভাবুক দৃষ্টিতে দাঁড়ানো" },
    "Looking Out Across Horizon from Palace Terrace (প্রাসাদের উন্মুক্ত ছাদ থেকে দিগন্তের পানে রাজকীয় দৃষ্টি)": { img: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=500&auto=format&fit=crop&q=80&act=98", desc: "খোলা ছাদ থেকে দূর দিগন্তে দৃষ্টি প্রসারিত করে দাঁড়ানো" },
    "Dramatic Cape / Dupatta Throw into Wind (বাতাসে ওড়না বা কেপ ছুড়ে দেওয়ার হাই-ফ্যাশন মডেল পোজ)": { img: "https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?w=500&auto=format&fit=crop&q=80&act=99", desc: "হাই-ফ্যাশন স্টাইলে বাতাসে ওড়না বা কেপ ছুড়ে দেওয়া" },
    "Sitting Cross-Legged on Silk Cushion Diwan (রেশমি গালিচা ও বালিশযুক্ত দিওয়ানে আলসে ভঙ্গিতে বসা)": { img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&auto=format&fit=crop&q=80&act=100", desc: "নবাবী কায়দায় আরামদায়ক দিওয়ানে উপবিষ্ট রূপ" },
    "High-Fashion Editorial Side Profile Pose (ম্যাগাজিনের কভারের মতো তীক্ষ্ম সাইড প্রোফাইল ফ্যাশন পোজ)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&act=101", desc: "শার্প জ-লাইন ও তীক্ষ্ম প্রোফাইল ফ্যাশন লুক" },
    "Holding Antique Hand Fan with Regal Elegance (ঐতিহাসিক কারুকার্যময় পাখা হাতে রাজকীয় শীতল ভঙ্গিমা)": { img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&auto=format&fit=crop&q=80&act=102", desc: "সূক্ষ্ম কাজের হাতপাখা আলতো করে ধরে রাখা" },
    "Gazing at Reflection in Palace Water Pool (প্রাসাদের শান্ত জলকুণ্ডে নিজের প্রতিবিম্ব দেখার মায়াবী ভঙ্গি)": { img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80&act=103", desc: "পানিতে ঝুঁকে নিজের প্রতিবিম্ব দেখার অপার্থিব দৃশ্য" },
    "Dynamic Floor Spread Pose with Saree Circle (মেঝেতে শাড়ির ঘের সম্পূর্ণ বৃত্তাকারে ছড়িয়ে বসে পোজ)": { img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&auto=format&fit=crop&q=80&act=104", desc: "মেঝেতে বসে শাড়ির পুরো ঘের গোল করে ছড়িয়ে দেওয়া রাজকীয় ভঙ্গি" },
    "Candid Gentle Dance Step (সাবলীল স্বাভাবিক নৃত্যের পদক্ষেপ)": { img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=500&auto=format&fit=crop&q=80&act=105", desc: "ক্যানডিড ও সাবলীল ঘরোয়া নাচের পদক্ষেপ" },

    // Overall Scene Color Palettes (26 Artistic Grading Palettes)
    "Rich Royal Jewel Tones (উজ্জ্বল রাজকীয় রত্ন রঙ)": { img: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&auto=format&fit=crop&q=80&col=1", desc: "রুবি লাল, পান্না সবুজ ও স্যাফায়ার নীলের রাজকীয় প্যালেট" },
    "Warm Golden & Earthy Tones (উষ্ণ সোনালী ও মাটির রঙ)": { img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&auto=format&fit=crop&q=80&col=2", desc: "উষ্ণ সোনালী হলুদ, টেরাকোটা ও মাটির প্রাকৃতিক রঙ" },
    "Cinematic Teal & Warm Amber (হলিউড সিনেমাটিক টিল ও উষ্ণ অ্যাম্বার)": { img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&auto=format&fit=crop&q=80&col=3", desc: "হলিউড ধাঁচের সিনেমাটিক টিল ও অ্যাম্বার টোন" },
    "Pastel Aesthetic Soft Tones (নরম স্নিগ্ধ প্যাস্টেল রঙ)": { img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500&auto=format&fit=crop&q=80&col=4", desc: "কোমল ল্যাভেন্ডার, পিচ ও পুদিনা পাতার শান্ত প্যাস্টেল শেড" },
    "Vibrant Festive Multi-Color (রঙিন বর্ণিল উৎসবের রঙ)": { img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&auto=format&fit=crop&q=80&col=5", desc: "উৎসবমুখর প্রাণবন্ত বহু রঙের ঝলমলে বিন্যাস" },
    "Muted Vintage Analog Film (ভিন্টেজ মৃদু ফিল্ম টোন)": { img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=500&auto=format&fit=crop&q=80&col=6", desc: "মৃদু কন্ট্রাস্ট ও ক্লাসিক রেট্রো অ্যানালগ ফিল্ম রঙ" },
    "Crisp High-Key Bright Clean Tones (উজ্জ্বল পরিচ্ছন্ন হাই-কী টোন)": { img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&auto=format&fit=crop&q=80&col=7", desc: "উজ্জ্বল শুভ্র ও স্বচ্ছ আধুনিক আলো-রঙের বিন্যাস" },
    "Deep Moody Low-Key Contrast (গভীর আলো-ছায়ার মুডি টোন)": { img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=500&auto=format&fit=crop&q=80&col=8", desc: "গাঢ় ছায়া ও উজ্জ্বল হাইলাইটের ড্রামাটিক মুডি রঙ" },
    "Monochromatic Royal Crimson & Gold (একক রক্তিম লাল ও খাঁটি সোনার আভা)": { img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&auto=format&fit=crop&q=80&col=9", desc: "ঐতিহ্যবাহী বেনারসী লাল ও খাঁটি জরির স্বর্ণালী টোন" },
    "Emerald Green & Antique Gold Harmony (পান্না সবুজ ও অ্যান্টিক গোল্ডেন মেলবন্ধন)": { img: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500&auto=format&fit=crop&q=80&col=10", desc: "গভীর সবুজ বনানী ও প্রাচীন রাজকীয় সোনার শান্ত মেলবন্ধন" },
    "Deep Midnight Sapphire Blue & Silver (নীলকান্তমণি স্যাফায়ার ব্লু ও রূপালী টোন)": { img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&auto=format&fit=crop&q=80&col=11", desc: "গভীর রাতের নীল আকাশ ও উজ্জ্বল রূপালী আলোর দ্যুতি" },
    "Sunset Coral, Rose Gold & Peach (সূর্যাস্তের কোরাল, রোজ গোল্ড ও পিচ প্যালেট)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&col=12", desc: "গোধূলির কোমল গোলাপি, পিচ ও রোজ গোল্ডেন স্নিগ্ধ আভা" },
    "Earthy Terracotta, Rust & Mustard (মাটির টেরাকোটা, রাস্ট ও কাঁচা হলুদ রঙ)": { img: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=500&auto=format&fit=crop&q=80&col=13", desc: "বাংলার মাটি, পোড়ামাটির ইট ও সরিষা হলুদ লোকজ প্যালেট" },
    "Moody Desaturated Cyberpunk Neon (ডেস্যাচুরেটেড ডার্ক ও নিয়ন গ্লো)": { img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=80&col=14", desc: "কালো অন্ধকার ব্যাকগ্রাউন্ড ও উজ্জ্বল নিয়ন আলোকচ্ছটা" },
    "Monochrome Sepia Antique Tone (অ্যান্টিক সেপিয়া ভিন্টেজ ব্রাউন টোন)": { img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&auto=format&fit=crop&q=80&col=15", desc: "উনিশ শতকের প্রাচীন ফটোগ্রাফির সোনালী সেপিয়া রূপ" },
    "Ethereal Dreamy Pastel Lavender & Lilac (স্বপ্নিল ল্যাভেন্ডার ও লাইলাক স্নিগ্ধ টোন)": { img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=500&auto=format&fit=crop&q=80&col=16", desc: "অপার্থিব স্নিগ্ধ বেগুনি ল্যাভেন্ডার ও নরম স্বপ্নিল প্যালেট" },
    "Warm Autumn Cinnamon & Maple Red (শরতের দারুচিনি, লাল মেপল ও ব্রোঞ্জ রঙ)": { img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=80&col=17", desc: "শরতের ঝরা পাতার রক্তিম কমলা, দারুচিনি ও ব্রোঞ্জ টোন" },
    "Nordic Minimalist Cool Muted Slate (মিনিমালিস্ট শীতল স্লেট ধূসর ও বরফ নীল)": { img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80&col=18", desc: "শান্ত স্নিগ্ধ বরফ নীল, স্লেট ধূসর ও শুভ্র মিনিমাল টোন" },
    "Baroque Rich Dark Burgundy & Amber (বারোক আমলের গাঢ় বারগান্ডি ও অ্যাম্বার টোন)": { img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=500&auto=format&fit=crop&q=80&col=19", desc: "ধ্রুপদী চিত্রকলার ভারী বারগান্ডি লাল ও উষ্ণ মোমের অ্যাম্বার" },
    "Tropical Vibrant Turquoise & Canary Yellow (ট্রপিক্যাল ফিরোজা ও উজ্জ্বল ক্যানারি হলুদ)": { img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=80&col=20", desc: "সমুদ্রের নীল জলরাশি ও উজ্জ্বল রৌদ্রকরোজ্জ্বল হলুদ" },
    "Classic Technicolor Film Saturation (ক্লাসিক টেকনিকালার ৫০ দশকের ভাইব্রেন্ট স্যাচুরেশন)": { img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500&auto=format&fit=crop&q=80&col=21", desc: "গোল্ডেন এজ হলিউডের অতি-উজ্জ্বল রঙিন টেকনিকালার ফিল্ম" },
    "Sun-Bleached Warm Mediterranean Tones (রোদপোড়া উষ্ণ বালুকা ও জলপাই সবুজ টোন)": { img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500&auto=format&fit=crop&q=80&col=22", desc: "ভূমধ্যসাগরীয় রোদেলা সাদা দেয়াল ও মাটির উষ্ণ টোন" },
    "Gothic Dark Noir Charcoal & Silver (গথিক নয়ার চারকোল ও রূপালী ঠান্ডা আলো)": { img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80&col=23", desc: "রহস্যময় চারকোল কালো ও রূপালী চাঁদের আলো" },
    "Forest Moss Green & Bark Brown (ঘন অরণ্যের শৈবাল সবুজ ও কাষ্ঠ বাদামী রঙ)": { img: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=500&auto=format&fit=crop&q=80&col=24", desc: "প্রকৃতির গভীর অরণ্য, সবুজ শেওলা ও ভেজা মাটির গন্ধ" },
    "Opulent Gold-on-Gold Royal Harmony (সর্বাঙ্গে খাঁটি সোনার ঝলমলে মনোক্রোম্যাটিক রূপ)": { img: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=500&auto=format&fit=crop&q=80&col=25", desc: "সোনার অলঙ্কার ও সোনালী জরির সর্বাঙ্গীন স্বর্ণালী দীপ্তি" },
    "Custom (কাস্টম ডেসক্রিপশন)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&col=26", desc: "নিজের পছন্দমতো কাস্টম কালার প্যালেট" },
    "Festive & Joyful Celebration (উৎসবমুখর ও আনন্দময় অনুভূতি)": { img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=500&auto=format&fit=crop&q=80&mood=1", desc: "আনন্দঘন, রঙিন ও উৎসবমুখর উচ্ছ্বাসের অনুভূতি" },
    "Energetic Rhythm & Dance Vibe (উচ্ছ্বল নৃত্য ও ছন্দের স্পন্দন)": { img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&auto=format&fit=crop&q=80&mood=2", desc: "প্রাণচঞ্চল নৃত্য ও দ্রুত ছন্দের গতিশীল স্পন্দন" },
    "Playful & Carefree Youthful Innocence (চঞ্চল, উচ্ছ্বল ও নিষ্পাপ খুশির মেজাজ)": { img: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=500&auto=format&fit=crop&q=80&mood=3", desc: "প্রাণবন্ত তারুণ্য, নির্মল হাসি ও চঞ্চল নিষ্পাপ উচ্ছ্বাস" },
    "Vibrant & Colorful Spring Cheer (বসন্তের রঙিন আনন্দ ও সজীবতা)": { img: "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=500&auto=format&fit=crop&q=80&mood=4", desc: "বসন্তের রঙে রাঙানো রঙিন আবির, ফুল ও সজীব আনন্দ" },
    "Ecstatic Triumph & Jubilant Victory (উল্লাসিত আনন্দ ও বিজয়ের দীপ্তি)": { img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&auto=format&fit=crop&q=80&mood=5", desc: "বিজয়োল্লাস, আলোকোজ্জ্বল আতশবাজি ও অপার গর্বের দীপ্তি" },
    "Cheerful Laughter & Spontaneous Delight (স্বতঃস্ফূর্ত হাসি ও আনন্দের মেজাজ)": { img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=80&mood=6", desc: "উন্মুক্ত উচ্ছ্বসিত হাসি ও হৃদয়ের স্নিগ্ধ আনন্দের বহিঃপ্রকাশ" },
    "Tranquil & Serene Atmosphere (শান্ত ও স্নিগ্ধ পরিবেশ)": { img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=80&mood=7", desc: "নীরব, পবিত্র ও হৃদয় জুড়ানো শান্ত স্নিগ্ধ পরিবেশ" },
    "Sacred Devotional Reverence & Bhakti (ভক্তিপূর্ণ, সমর্পিত ও পরম শ্রদ্ধাশীল ভাব)": { img: "https://images.unsplash.com/photo-1609137144822-4a9235e12ceb?w=500&auto=format&fit=crop&q=80&mood=8", desc: "ধূপের সুবাস, প্রদীপের শিখা ও পরম ভক্তিপূর্ণ সমর্পিত চিত্ত" },
    "Temple Puja Divine Sanctity & Aura (মন্দিরের পূজার পবিত্রতা ও ঐশ্বরিক সুবাস)": { img: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=500&auto=format&fit=crop&q=80&mood=9", desc: "মন্দিরের ঘণ্টার ধ্বনি, পূজার ফুল ও পবিত্র ঐশ্বরিক আবহ" },
    "Meditative Zen & Deep Introspection (গভীর ধ্যানমগ্ন ও আত্মমগ্ন প্রশান্তি)": { img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&auto=format&fit=crop&q=80&mood=10", desc: "মনের গভীর প্রশান্তি, আত্মমগ্ন নীরবতা ও আধ্যাত্মিক ধ্যান" },
    "Celestial Transcendence & Divine Grace (স্বর্গীয় আশীর্বাদ ও অপার্থিব জ্যোতি)": { img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&auto=format&fit=crop&q=80&mood=11", desc: "মেঘের ফাঁকে অপার্থিব স্বর্গীয় আলোর জ্যোতি ও দৈব মহিমা" },
    "Silent Midnight Meditation & Stillness (নিস্তব্ধ মধ্যরাতের গভীর ধ্যান ও স্থৈর্য)": { img: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&auto=format&fit=crop&q=80&mood=12", desc: "নিশীথ রাতের গভীর নীরবতা, পূর্ণ স্থৈর্য ও ধ্যানস্থ ভাব" },
    "Royal & Majestic Grandeur (রাজকীয় ও মহিমান্বিত ভাব)": { img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=500&auto=format&fit=crop&q=80&mood=13", desc: "অভিজাত ও অত্যন্ত মহিমান্বিত রাজকীয় গাম্ভীর্য" },
    "Majestic Courtly Elegance & Noble Demeanor (দরবারি আভিজাত্য ও রাজকীয় অহংকার)": { img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&auto=format&fit=crop&q=80&mood=14", desc: "দরবারের রাজকীয় শিষ্টাচার, মার্জিত চাহনি ও আভিজাত্যের তেজ" },
    "Glamorous High-Fashion Sophistication (অভিজাত হাই-ফ্যাশন গ্ল্যামার ও লাবণ্য)": { img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&auto=format&fit=crop&q=80&mood=15", desc: "আন্তর্জাতিক ফ্যাশন রানওয়ের চরম গ্ল্যামার ও স্মার্ট আত্মবিশ্বাস" },
    "Opulent Aristocratic Pride & Heritage (বংশমর্যাদা ও চরম ঐশ্বর্যপূর্ণ ঐতিহ্য)": { img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&auto=format&fit=crop&q=80&mood=16", desc: "ঐতিহাসিক জমিদারি বনেদিয়ানা ও অমূল্য অলঙ্কারের রাজকীয় গর্ব" },
    "Bold Heroic Valour & Sovereign Command (বীরত্বব্যঞ্জক তেজস্বী ও দৃঢ়চেতা মেজাজ)": { img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&auto=format&fit=crop&q=80&mood=17", desc: "অদম্য সাহস, দৃঢ় প্রতিজ্ঞা ও তেজোদৃপ্ত রাজকীয় দৃষ্টি" },
    "Romantic & Ethereal Glow (রোমান্টিক ও স্বর্গীয় অনুভূতি)": { img: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=500&auto=format&fit=crop&q=80&mood=18", desc: "নরম মিষ্টি ভালোবাসাময় ও স্বর্গীয় মোহনীয় আভা" },
    "Magical & Dreamlike Mood (মায়াবী ও স্বপ্নিল আবহ)": { img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=500&auto=format&fit=crop&q=80&mood=19", desc: "রূপকথার মতো মায়াবী ও অপার্থিব স্বপ্নিল পরিবেশ" },
    "Sensual Graceful Allure & Enchantment (লাবণ্যময় মোহনীয় আবেদন ও মোহিত ভাব)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&mood=20", desc: "অপরূপ লাবণ্য, কমনীয় অঙ্গভঙ্গি ও মুগ্ধকর চোখের চাহনি" },
    "Poetic Monsoon Rainy Yearning & Viraha (বৃষ্টিভেজা বিরহ ও কাব্যিক প্রেমের আকুলতা)": { img: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=500&auto=format&fit=crop&q=80&mood=21", desc: "ঝুম বৃষ্টি, জানালার কাচে জলবিন্দু ও বিরহী মনের কাব্যিক আকুলতা" },
    "Whispering Intimacy & Sweet Tenderness (ফিসফিস করা গোপন প্রণয় ও মিষ্টি অনুরাগ)": { img: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=500&auto=format&fit=crop&q=80&mood=22", desc: "গোপন ভালোবাসার উষ্ণ ফিসফিসানি ও নিবিড় মিষ্টি স্পর্শ" },
    "Whimsical Fairy Tale Wonder & Charm (রূপকথার বিস্ময় ও মিষ্টি মায়াবী অনুভূতি)": { img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&auto=format&fit=crop&q=80&mood=23", desc: "মায়াবী পরীর দেশের বিস্ময়, জোনাকির আলো ও মিষ্টি মুগ্ধতা" },
    "Moonlit Night Romance & Starlit Glow (চাঁদনি রাতের রোমাঞ্চ ও তারার আলো)": { img: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=500&auto=format&fit=crop&q=80&mood=24", desc: "জ্যোৎস্না প্লাবিত রাত, রূপালী চাঁদের আলো ও আকাশভরা তারার মেলা" },
    "Dramatic & Intense Emotion (ড্রামাটিক ও গভীর অনুভূতি)": { img: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&auto=format&fit=crop&q=80&mood=25", desc: "গভীর আবেগঘন ও শক্তিশালী ড্রামাটিক থিয়েট্রিক্যাল ভাব" },
    "Nostalgic Vintage Melancholy & Retro Longing (নস্টালজিক অতীতমুখী স্মৃতিকাতর ভাব)": { img: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=500&auto=format&fit=crop&q=80&mood=26", desc: "অতীতের মিষ্টি স্মৃতি, সেপিয়া রঙের বিষাদ ও স্মৃতিমেদুর আকুলতা" },
    "Mysterious Gothic Enigma & Shadow Play (রহস্যময়, কুয়াশাচ্ছন্ন ও গথিক ছায়ার আবহ)": { img: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=500&auto=format&fit=crop&q=80&mood=27", desc: "আলো-ছায়ার রহস্যময় খেলা, গভীর গথিক অন্ধকার ও অনবদ্য কৌতূহল" },
    "Eerie Haunting Fog & Mystical Mist (নিশুতি রাতের কুয়াশাচ্ছন্ন ভৌতিক ও রহস্যময় ছোঁয়া)": { img: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=500&auto=format&fit=crop&q=80&mood=28", desc: "ঘন কুয়াশার চাদরে ঢাকা অস্পষ্ট রহস্যময় ও রোমাঞ্চকর রাত" },
    "Moody Noir Suspense & Cinematic Tension (সিনেমাটিক নয়ার রহস্য ও টানটান নাটকীয়তা)": { img: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=500&auto=format&fit=crop&q=80&mood=29", desc: "সিনেমাটিক থ্রিলার মুভির মতো টানটান উত্তেজনা ও রহস্যঘেরা আবহ" },
    "Thunderous Storm Brewing Electric Tension (ঝড়ের পূর্বাভাস ও বিদ্যুৎ চমকানো থমথমে ভাব)": { img: "https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?w=500&auto=format&fit=crop&q=80&mood=30", desc: "কালো মেঘের ঘনঘটা, বিদ্যুতের চমক ও ঝড়ের তীব্র শিহরণ" },
    "Contemplative Solitude & Thoughtful Reflection (একাকী শান্ত ভাবনা ও নিঃসঙ্গতার সৌন্দর্য)": { img: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=500&auto=format&fit=crop&q=80&mood=31", desc: "নিস্তব্ধ জানালায় বসে একাকী ভাবনা ও নিজের সাথে নিবিড় সময়" },
    "Cozy Warm Intimacy by Firelight (উষ্ণ আন্তরিক ও মোলায়েম ঘরোয়া পরিবেশ)": { img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=500&auto=format&fit=crop&q=80&mood=32", desc: "আগুনের মৃদু উষ্ণতা, আরামদায়ক কোজি আবহ ও ঘরোয়া নিবিড়তা" },
    "Golden Twilight Nostalgia & Sunset Yearning (গোধূলির বিষাদমাখা মিষ্টি নস্টালজিয়া)": { img: "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=500&auto=format&fit=crop&q=80&mood=33", desc: "ডুবন্ত সূর্যের লাল-সোনালী আলো ও মন কেমন করা গোধূলিলগ্ন" },
    "Dewy Morning Freshness & Awakening Hope (শিশিরভেজা ভোরের তাজা স্নিগ্ধতা ও নতুন আশা)": { img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&auto=format&fit=crop&q=80&mood=34", desc: "ভোরের নরম মিষ্টি রোদ, দূর্বাঘাসে শিশিরবিন্দু ও সতেজ জাগরণ" },

    // 120 Categorized Background Visual Mappings
    "Royal Palace Grand Corridor (রাজপ্রাসাদের কারুকার্যময় করিডোর ও খিলান)": { img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500&auto=format&fit=crop&q=80&bg=1", desc: "কারুকার্যময় খোদাই করা পাথুরে খিলান ও রাজপ্রাসাদের করিডোর" },
    "Rajasthani Fort Courtyard with Jharokhas (রাজস্থানি কেল্লার খোলা অলঙ্কৃত উঠান ও ঝরোখা)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&bg=2", desc: "রাজস্থানি দুর্গের হলুদ বেলেপাথরের অলঙ্কৃত উঠান ও ঝরোখা" },
    "Mughal White Marble Pavilion (মুঘল সাদা মার্বেল প্যাভিলিয়ন ও তোরণ)": { img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&auto=format&fit=crop&q=80&bg=3", desc: "সাদা মার্বেলের খোদাই করা মুঘল রাজকীয় প্যাভিলিয়ন" },
    "Royal Darbar Hall with Golden Pillars (স্বর্ণপিলারে ঘেরা রাজকীয় দরবার হল)": { img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=500&auto=format&fit=crop&q=80&bg=4", desc: "বিলাসবহুল সোনার জল করা থাম ও রাজকীয় দরবার হল" },
    "Historic Haveli Courtyard with Carved Balconies (ঐতিহ্যবাহী হাভেলি প্রাঙ্গণ ও কাঠের কাজ)": { img: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=500&auto=format&fit=crop&q=80&bg=5", desc: "ঐতিহাসিক হাভেলির কারুকার্যময় কাঠের বারান্দা ও প্রাঙ্গণ" },
    "Luxury Palace Open Terrace at Sunset (সূর্যাস্তের সময় প্রাসাদের উন্মুক্ত মার্বেল ছাদ)": { img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=80&bg=6", desc: "গোধূলির আলোয় প্রাসাদের খোলা মার্বেল ছাদ ও দিগন্ত" },
    "Carved Wooden Jharokha Window of Fort (কেল্লার খোদাই করা কাঠের ঝরোখা জানালা)": { img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=500&auto=format&fit=crop&q=80&bg=7", desc: "কেল্লার অলঙ্কৃত কাঠের তৈরি অ্যান্টিক ঝরোখা জানালা" },
    "Ancient Royal Fountain Garden (রাজপ্রাসাদের ফোয়ারা বাগান ও পথ)": { img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=500&auto=format&fit=crop&q=80&bg=8", desc: "প্রাসাদের সুসজ্জিত ফোয়ারা ও মার্বেল বাধানো বাগান" },
    "Heritage Museum Corridor with Artifacts (ঐতিহাসিক মিউজিয়াম গ্যালারি ও তৈলচিত্র)": { img: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=500&auto=format&fit=crop&q=80&bg=9", desc: "প্রাচীন ভাস্কর্য, তৈলচিত্র ও ঝাড়বাতি খচিত গ্যালারি" },
    "Mughal Shalimar Garden Pathways (মুঘল শালিমার বাগানের নহবতখানা ও ঝরনা)": { img: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=500&auto=format&fit=crop&q=80&bg=10", desc: "মুঘল বাগান, বহমান পানির নালা ও রাজকীয় চিনার গাছ" },
    "Jaipur Hawa Mahal Pink Facade (জয়পুর হাওয়া মহলের গোলাপি মার্বেল নকশা)": { img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&auto=format&fit=crop&q=80&bg=11", desc: "জয়পুরের বিখ্যাত হাওয়া মহলের গোলাপি অলঙ্কৃত জালি জানালা" },
    "Udaipur Lake Palace Balcony View (উদয়পুর লেক প্যালেসের জলবেষ্টিত বারান্দা)": { img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&auto=format&fit=crop&q=80&bg=12", desc: "শান্ত হ্রদের ওপর ভাসমান সাদা মার্বেল রাজপ্রাসাদের ব্যালকনি" },
    "Ancient Fort Watchtower Overlooking Valley (উপত্যকার পানে চেয়ে থাকা প্রাচীন দুর্গ প্রাচীর)": { img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=500&auto=format&fit=crop&q=80&bg=13", desc: "পাহাড়ের বুকে পাথুরে কেল্লার প্রহরীকক্ষ ও দূর দিগন্ত" },
    "Royal Stepwell Baoli with Geometric Stairs (প্রাচীন রাজকীয় বাওলি ও জ্যামিতিক সিঁড়ি)": { img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&auto=format&fit=crop&q=80&bg=14", desc: "জ্যামিতিক সিঁড়িযুক্ত ঐতিহাসিক রাজস্থানি কুয়ো ও তোরণ" },
    "Ornate Gold-Leaf Palace Archway (সোনার পাত খচিত রাজকীয় প্রবেশদ্বার তোরণ)": { img: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=500&auto=format&fit=crop&q=80&bg=15", desc: "সোনার গিল্ট করা বিশাল রাজকীয় আর্চ তোরণ" },
    "Zamindar Palace Thakur Dalan (জমিদার বাড়ির ঐতিহ্যবাহী ঠাকুরদালান ও থাম)": { img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500&auto=format&fit=crop&q=80&bg=16", desc: "ঐতিহ্যবাহী জমিদার বাড়ির ঠাকুরদালান, অলঙ্কৃত স্তম্ভ ও খাম্বা" },
    "Colonial Zamindar Mansion Veranda (ঔপনিবেশিক জমিদার বাড়ির অলঙ্কৃত খাম্বার বারান্দা)": { img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=500&auto=format&fit=crop&q=80&bg=17", desc: "উঁচু করিডোর ও অলঙ্কৃত কলাম বিশিষ্ট ঔপনিবেশিক বারান্দা" },
    "Traditional Clay Courtyard with Tulsi Manch (তুলসিমঞ্চ ও শুভ আলপনা সজ্জিত উঠান)": { img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&auto=format&fit=crop&q=80&bg=18", desc: "তুলসিমঞ্চ, শুভ আলপনা ও মাটির শান্ত পরিচ্ছন্ন উঠান" },
    "Traditional Bengali Living Room with Antique Palanka (ঐতিহ্যবাহী সেগুন কাঠের খোদাই করা পালঙ্ক ও ঘর)": { img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&auto=format&fit=crop&q=80&bg=19", desc: "ঐতিহ্যবাহী কাঠের পালঙ্ক, গালিচা ও বনেদি অন্দরমহল" },
    "Vintage Victorian Library Room in Mansion (কাষ্ঠমণ্ডিত পুরানো লাইব্রেরি ও বইয়ের র্যাক)": { img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=500&auto=format&fit=crop&q=80&bg=20", desc: "সেগুন কাঠের আলমারি ও পুরানো বইয়ে ঘেরা বনেদি লাইব্রেরি" },
    "Zamidari Jalsaghar Music Room with Belgian Glass (বেলজিয়াম কাচ ও ঝাড়বাতি সজ্জিত জলসাঘর)": { img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=500&auto=format&fit=crop&q=80&bg=21", desc: "ঝাড়বাতি ও বেলজিয়াম কাচের আয়না খচিত জমিদার বাড়ির জলসাঘর" },
    "Heritage Inner Courtyard with Red Oxide Floor (লাল অক্সাইড মেঝে ও পাথরের স্তম্ভের অন্দরমহল)": { img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=500&auto=format&fit=crop&q=80&bg=22", desc: "মসৃণ লাল মেঝে ও খোদাই করা কাঠের স্তম্ভের চারকোনা উঠান" },
    "Zamindar Veranda Overlooking Lush Garden (সবুজ বাগানমুখী রাজকীয় খড়খড়িযুক্ত বারান্দা)": { img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&auto=format&fit=crop&q=80&bg=23", desc: "সবুজ বাগানমুখী কাঠের ভেনেশিয়ান খড়খড়ির বারান্দা" },
    "Vintage Grand Staircase with Iron Railing (কাস্ট আয়রনের কারুকার্যময় প্যাঁচানো বড় সিঁড়ি)": { img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=500&auto=format&fit=crop&q=80&bg=24", desc: "লোহার কারুকার্যময় রেলিং ও সেগুন কাঠের রাজকীয় সিঁড়ি" },
    "Old Kolkata Heritage Mansion Courtyard (পুরানো কলকাতার ঐতিহ্যবাহী বনেদি বাড়ির উঠান)": { img: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=500&auto=format&fit=crop&q=80&bg=25", desc: "পুরানো কলকাতার বনেদি পরিবারের বারান্দাঘেরা খোলা উঠান" },
    "Ruined Zamindar Mansion with Banyan Roots (বটগাছের শিকড়ে জড়ানো ঐতিহাসিক জমিদার বাড়ি)": { img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=500&auto=format&fit=crop&q=80&bg=26", desc: "প্রাচীন ইটের ধ্বংসাবশেষ ও বটগাছের শিকড়ে জড়ানো মায়াবী বাড়ি" },
    "Antique Marble Dining Hall with Stained Glass (রঙিন কাচের ক্যাবিনেটযুক্ত মার্বেল ডাইনিং হল)": { img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500&auto=format&fit=crop&q=80&bg=27", desc: "মার্বেল টেবিল ও প্রাচীন রঙিন কাচে সাজানো অভিজাত ডাইনিং হল" },
    "Heritage Rooftop Overlooking Ganga Ghat (গঙ্গার বাঁকে মুখ করা জমিদার বাড়ির খোলা ছাদ)": { img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=80&bg=28", desc: "নদীর বাঁক ও গঙ্গার ঘাটের পানে চেয়ে থাকা চুনকামের ছাদ" },
    "Traditional Clay Oven Kitchen Courtyard (গ্রামের বনেদি বাড়ির ঢেঁকি ও মাটির উনুনের উঠান)": { img: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=500&auto=format&fit=crop&q=80&bg=29", desc: "গ্রামের ঐতিহ্যবাহী মাটির উনুন ও ঢেঁকিঘরযুক্ত উঠান" },
    "Antique Sunlit Corridor with Green Louvre Windows (সবুজ কাঠের খড়খড়ি দেওয়া রোদের করিডোর)": { img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=80&bg=30", desc: "সবুজ কাঠের খড়খড়ির ফাঁক দিয়ে আসা সোনালী রোদের করিডোর" },
    "Heritage Ghat on River Ganges (গঙ্গার ঐতিহ্যবাহী বাঁধাল ঘাট ও প্রদীপ)": { img: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=500&auto=format&fit=crop&q=80&bg=31", desc: "গঙ্গা নদীর পাড়ে প্রদীপ ও ধাপযুক্ত পাথুরে বাঁধাল ঘাট" },
    "Serene Rural Riverbank at Sunset (সূর্যাস্তের উন্মুক্ত নদীর পাড় ও শান্ত ঢেউ)": { img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=80&bg=32", desc: "নদীর পাড়ে সন্ধ্যার রক্তিম গোধূলির নরম আলো ও ঢেউ" },
    "Traditional Wooden Boat on River (শান্ত নদীতে পালতোলা কাঠের দেশি নৌকা)": { img: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=500&auto=format&fit=crop&q=80&bg=33", desc: "শান্ত নদীর বুকে পালতোলা কাঠের দেশি ঐতিহ্যবাহী নৌকা" },
    "Realistic Village Mud Trail with Greenery (বাস্তবসম্মত সবুজ গাছপালায় ঘেরা মেঠো পথ)": { img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&auto=format&fit=crop&q=80&bg=34", desc: "দুপাশে বাঁশঝাড় ও কচি পাতার ঘেরা মাটির গ্রামীণ পথ" },
    "Traditional Village Concrete Road (ছায়াময় গ্রামের বাঁধানো পাকা রাস্তা)": { img: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=500&auto=format&fit=crop&q=80&bg=35", desc: "গাছপালায় ছায়াময় পরিচ্ছন্ন বাঁধানো গ্রাম্য রাস্তা" },
    "Rainy Village Road with Lush Wet Foliage (বৃষ্টিভেজা রূপসী গ্রামের রাস্তা ও সতেজ প্রকৃতি)": { img: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=500&auto=format&fit=crop&q=80&bg=36", desc: "বৃষ্টির পানিতে ধুয়ে যাওয়া সতেজ সবুজ গাছপালা ও ভেজা মেঠো পথ" },
    "Traditional Bengali Village Thatched Home (মাটির দেওয়াল ও খড়ের ছাওয়া গ্রামীণ উঠান)": { img: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=500&auto=format&fit=crop&q=80&bg=37", desc: "মাটির নিকানো উঠান, খড়ের ছাউনিযুক্ত ঘর ও শান্ত পরিবেশ" },
    "Bamboo & Jute Cottage in Forest Edge (বাঁশ ও পাটের তৈরি শান্ত প্রান্তিক কুটির)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&bg=38", desc: "বাঁশ ও পাটের ছাওয়া বনের ধারে গ্রামীণ স্নিগ্ধ কুটির" },
    "Traditional Handloom Weaving Village (ঐতিহ্যবাহী তাঁত পল্লি ও রঙিন সুতার রোদ্দুর)": { img: "https://images.unsplash.com/photo-1583391733975-04285b0d0999?w=500&auto=format&fit=crop&q=80&bg=39", desc: "রঙিন সুতা শুকানো ও কাঠের তাঁতকলের কর্মব্যস্ত গ্রামীণ পল্লি" },
    "Rural Paddy Field Trail (কচি ধানের সবুজ খেতের মেঠো আলপথ)": { img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&auto=format&fit=crop&q=80&bg=40", desc: "দিগন্তজোড়া কচি ধানের ঢেউ ও মেঠো আলপথের মনোরম দৃশ্য" },
    "Lotus Covered Village Pond at Morning (সকালের পদ্ম ও শাপলায় ভরা গ্রামের শান্ত দীঘি)": { img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80&bg=41", desc: "সকালের মিষ্টি রোদে লাল পদ্ম ও সাদা শাপলায় ভরা শান্ত পুকুর" },
    "Misty Riverbank with Kashbon White Feathers (শরতের সাদা কাশফুলে ভরা নদীর পাড়)": { img: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=500&auto=format&fit=crop&q=80&bg=42", desc: "শরতের মিষ্টি বাতাসে নদীর পাড়ে ফুটে থাকা ধবধবে কাশফুল" },
    "Rural Wooden Footbridge Over Canal (খাল বা বিলের ওপর বাঁশের সাঁকো ও হিজল বন)": { img: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=500&auto=format&fit=crop&q=80&bg=43", desc: "খালের শান্ত পানিতে গাছের ছায়া ও বাঁশের গ্রামীণ সাঁকো" },
    "Fishermen Boat Pier at Golden Hour (গোধূলির আলোয় জেলেদের নৌকার ঘাট)": { img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=80&bg=44", desc: "সূর্যাস্তের রক্তিম আলোয় নদীর তীরে বাঁধা জেলেদের নৌকা" },
    "Banyan Tree Chatal Village Gathering Spot (বটবৃক্ষের বাঁধানো শান্ত গ্রামীণ চাতাল)": { img: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=500&auto=format&fit=crop&q=80&bg=45", desc: "বিশাল ছায়াদায়ী প্রাচীন বটগাছের নিচে বাঁধানো শান্ত চত্বর" },
    "Puja Mandap with Intricate Alpona Floor (পূজামণ্ডপ ও আলপনা আঁকা মেঝে)": { img: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=500&auto=format&fit=crop&q=80&bg=46", desc: "সাদা পিটুলির শুভ আলপনা ও পূজামণ্ডপের অলঙ্কৃত চত্বর" },
    "Grand Wedding Mandap with Marigold Flowers (গাঁদা ও জুঁই ফুলে সাজানো বিবাহ মণ্ডপ)": { img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=500&auto=format&fit=crop&q=80&bg=47", desc: "হাজারো গাঁদা ফুল, জুঁই ফুলের মালা ও শুভ প্রদীপের মণ্ডপ" },
    "Fairy Lights Canopy Open Night Roof (হাজারো ফেয়ারি লাইটে সজ্জিত উৎসবের ছাদ)": { img: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=500&auto=format&fit=crop&q=80&bg=48", desc: "রাতের আঁধারে হাজারো ঝিকমিকে ফেয়ারি লাইটের মায়াবী ছাদ" },
    "Royal Sangeet Stage with Crystal Chandeliers (ঝাড়বাতি অলঙ্কৃত সঙ্গীত ও মেহেন্দির স্টেজ)": { img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500&auto=format&fit=crop&q=80&bg=49", desc: "ক্রিস্টাল ঝাড়বাতি, ফুল ও সোনালী ড্র্যাপারির সঙ্গীত মঞ্চ" },
    "Traditional Fresh Flower Tunnel Entrance (তাজা রজনীগন্ধা ও গাঁদা ফুলের তোরণ সুড়ঙ্গ)": { img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=500&auto=format&fit=crop&q=80&bg=50", desc: "তাজা ফুলের মিষ্টি সুবাসে ঘেরা প্রবেশপথের খিলান সুড়ঙ্গ" },
    "Haldi Ceremony Yellow Marigold & Bamboo Backdrop (হলুদ উৎসবের গাঁদা ফুল ও বাঁশের ব্যাকড্রপ)": { img: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=500&auto=format&fit=crop&q=80&bg=51", desc: "উজ্জ্বল হলুদ গাঁদা ফুল ও বাঁশের তৈরি ঐতিহ্যবাহী গায়ে হলুদের সেট" },
    "Royal Reception Stage with Mirror Work (আয়না ও ফুল সজ্জিত বিলাসবহুল রিসেপশন স্টেজ)": { img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=500&auto=format&fit=crop&q=80&bg=52", desc: "চকচকে আয়নার কাজ, ফুল ও মখমলের বিলাসবহুল স্টেজ" },
    "Lantern Illuminated Festival Night Garden (ফানুস ও লণ্ঠনে আলোকিত উৎসবের বাগান)": { img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&auto=format&fit=crop&q=80&bg=53", desc: "গাছে গাছে ঝুলানো লণ্ঠন ও মোমের আলোয় আলোকিত রাতের বাগান" },
    "Rose & Jasmine Wall Floral Backdrop (গোলাপ ও বেলি ফুলের তৈরি ওয়াল ব্যাকড্রপ)": { img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&auto=format&fit=crop&q=80&bg=54", desc: "গাঢ় লাল গোলাপ ও শুভ্র বেলি ফুলের ঘন ফুলের দেওয়াল" },
    "Diya Lighted Festival Courtyard with Rangoli (হাজারো মাটির প্রদীপ ও রঙিন রঙ্গোলির উঠান)": { img: "https://images.unsplash.com/photo-1557683316-973673baf926?w=500&auto=format&fit=crop&q=80&bg=55", desc: "দীপাবলির হাজারো মাটির প্রদীপের আলো ও রঙের উৎসব" },
    "Traditional Brass Urli with Floating Marigolds (ভাসমান গাঁদা ফুল ও প্রদীপের পিতলের পাত্র)": { img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=500&auto=format&fit=crop&q=80&bg=56", desc: "প্রবেশদ্বারে সুগন্ধি পানি, ভাসমান ফুল ও প্রদীপের পিতলের উরলি" },
    "Festive Carnival Fair with Ferris Wheel Lights (নাগরদোলা ও রঙিন আলোর মেলার মাঠ)": { img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&auto=format&fit=crop&q=80&bg=57", desc: "নাগরদোলার আলোর ঝলকানি ও উৎসবমুখর গ্রাম্য মেলার মাঠ" },
    "Grand Royal Wedding Entrance Floral Arch (রাজকীয় বিবাহের তাজা ফুলের তোরণ ফটক)": { img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&auto=format&fit=crop&q=80&bg=58", desc: "রাজকীয় বিয়ের প্রবেশদ্বারের বিশাল ফুলের তোরণ" },
    "Golden Sequin & Crystal Shimmer Stage (চকচকে গোল্ডেন সিক্যুইন ও ক্রিস্টাল ওয়াল)": { img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500&auto=format&fit=crop&q=80&bg=59", desc: "আলোর ঝলকানিতে ঝিকমিক করা সোনালী সিক্যুইন ব্যাকড্রপ" },
    "Bengali Sindoor Khela Puja Arena (বিজয়া দশমীর সিঁদুর খেলার আনন্দমুখর মণ্ডপ প্রাঙ্গণ)": { img: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=500&auto=format&fit=crop&q=80&bg=60", desc: "বিজয়া দশমীর ঢাকের আওয়াজ ও লাল আবিরে রাঙা মণ্ডপ চত্বর" },
    "Rural Mustard Flower Field (সরিষে খেতের দিগন্ত বিস্তৃত হলুদ প্রান্তর)": { img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&auto=format&fit=crop&q=80&bg=61", desc: "দিগন্তজোড়া উজ্জ্বল হলুদ সরিষা ফুলে ভরা রূপসী প্রকৃতি" },
    "Sunlit Wildflower Open Meadow (বুনো ফুলে ভরা প্রাকৃতিক উন্মুক্ত সবুজ প্রান্তর)": { img: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=500&auto=format&fit=crop&q=80&bg=62", desc: "খোলা নীল আকাশের নিচে বুনো ফুলে ভরা সবুজ উপত্যকা" },
    "Lavender Flower Field Horizon (সুগন্ধি বেগুনি ল্যাভেন্ডারের দিগন্ত বিস্তৃত খেত)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&bg=63", desc: "বেগুনি ল্যাভেন্ডার ফুলের সুবাস ও ইউরোপীয় ধাঁচের ল্যান্ডস্কেপ" },
    "Sunny Beach with Soft Golden Waves (সমুদ্রের নরম ঢেউ ও সূর্যাস্তের সোনালী বালুচর)": { img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=80&bg=64", desc: "সমুদ্রের নরম ঢেউ ও সূর্যাস্তের গোধূলিতে ভেজা সোনালী বালুকাবেলা" },
    "Autumn Maple Leaf Forest Trail (শরতের বর্ণিল লাল-হলুদ পাতার অরণ্য পথ)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&bg=65", desc: "শরতের বর্ণিল লাল-হলুদ পাতার অরণ্য ও ঝরা পাতার মেঠো পথ" },
    "Misty Pine Forest Pathway in Morning (পাইন বনের স্নিগ্ধ কুয়াশাচ্ছন্ন পাহাড়ি পথ)": { img: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500&auto=format&fit=crop&q=80&bg=66", desc: "সকালের কুয়াশায় ঢাকা পাইন বনের রহস্যময় শান্ত ছায়াবীথি" },
    "Blooming Cherry Blossom Pink Park (চেরি ব্লসম ফুলে সুসজ্জিত বসন্তের পার্ক)": { img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=80&bg=67", desc: "গোলাপি চেরি ব্লসম ফুলের পাপড়ি ঝরে পড়া রোমান্টিক পার্ক" },
    "Cascading Forest Waterfall Pool (ঝরনার স্ফটিক স্বচ্ছ জলধারা ও পাথুরে বেসিন)": { img: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=500&auto=format&fit=crop&q=80&bg=68", desc: "অরণ্যের মাঝে নেমে আসা ঝরনার স্ফটিক স্বচ্ছ পানির হ্রদ" },
    "Bamboo Forest Sunlit Canopy Trail (সবুজ বাঁশ বনের ছায়াময় নির্জন রোদের পথ)": { img: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=500&auto=format&fit=crop&q=80&bg=69", desc: "সবুজ বাঁশ বনের উঁচু ছাউনির ফাঁক দিয়ে আসা আলোর কিরণ" },
    "Snowy Mountain Peaks in Distance (দূর নীল তুষারাবৃত হিমালয়ের পর্বতমালা)": { img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&auto=format&fit=crop&q=80&bg=70", desc: "নীল আকাশের নিচে শুভ্র তুষারাবৃত পর্বতশৃঙ্গের মহিমান্বিত দৃশ্য" },
    "Exotic Botanical Garden Greenhouse (কাচের তৈরি বহিরাগত ভিক্টোরিয়ান গ্রিনহাউস)": { img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&auto=format&fit=crop&q=80&bg=71", desc: "কাচের তৈরি ভিক্টোরিয়ান বোটানিক্যাল গার্ডেন ও দুর্লভ উদ্ভিদ" },
    "High Cliff Ocean Sunset View (সমুদ্রের ওপর উঁচু পাহাড়ের চূড়া থেকে সূর্যাস্ত)": { img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=80&bg=72", desc: "উঁচু পাহাড়ের খাঁদ থেকে অনন্ত নীল সমুদ্রের বুকে সূর্যাস্ত" },
    "Tea Garden Slopes with Green Terrace (সবুজ ঢেউখেলানো পাহাড়ের চা বাগান)": { img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&auto=format&fit=crop&q=80&bg=73", desc: "পাহাড়ের ধাপে ধাপে সাজানো চিরসবুজ চা বাগান ও কুয়াশা" },
    "Lotus Lake in Morning Mist (সকালের কুয়াশায় পদ্মফুলের শান্ত হ্রদ)": { img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80&bg=74", desc: "সকালের নরম কুয়াশায় হাজারো ফুটে থাকা লাল পদ্মের হ্রদ" },
    "Sunlit Desert Dunes at Golden Hour (সূর্যাস্তের আলোয় সোনালী বালিয়াড়ির মরু প্রান্তর)": { img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&auto=format&fit=crop&q=80&bg=75", desc: "রাজস্থানের থর মরুভূমির বাতাসে ঢেউখেলানো সোনালী বালিয়াড়ি" },
    "Terracotta Temple Courtyard with Carvings (টেরাকোটা ইটের অলঙ্কৃত বিষ্ণুপুর মন্দির প্রাঙ্গণ)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&bg=76", desc: "পোড়ামাটির ইটে রামায়ণ-মহাভারতের খোদাই করা প্রাচীন মন্দির প্রাঙ্গণ" },
    "South Indian Granite Temple Corridor (বিশাল পাথুরে খোদাই করা দ্রাবিড় মন্দির করিডোর)": { img: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=500&auto=format&fit=crop&q=80&bg=77", desc: "হাজার স্তম্ভের দ্রাবিড় স্থাপত্যের কালো গ্রানাইট পাথরের করিডোর" },
    "Ancient Temple Sanctum with Brass Bell (পিতলের ঝুলন্ত ঘণ্টা ও প্রদীপের মন্দিরের গর্ভগৃহ)": { img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&auto=format&fit=crop&q=80&bg=78", desc: "পিতলের ঘণ্টা, চন্দন ও ঘৃতপ্রদীপে আলোকিত মন্দিরের পবিত্র স্থান" },
    "Stone Carved Temple Tank with Sacred Water (ঐতিহাসিক পাথরের তৈরি মন্দির পুষ্করিণী)": { img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=80&bg=79", desc: "চারপাশে ধাপযুক্ত পাথুরে সিঁড়ি ও শান্ত পবিত্র মন্দির পুষ্করিণী" },
    "Varanasi Ghat Stairs in Morning Fog (ভোরবেলার কুয়াশাচ্ছন্ন বারাণসীর গঙ্গা ঘাট)": { img: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=500&auto=format&fit=crop&q=80&bg=80", desc: "ভোরের আলোয় বারাণসীর গঙ্গার ঘাটের ভক্ত ও পূজারীদের শান্ত ক্ষণ" },
    "Ancient Cave Temple with Sculpted Pillars (পাহাড়ে খোদাই করা প্রাচীন গুহামন্দির ও স্তম্ভ)": { img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=500&auto=format&fit=crop&q=80&bg=81", desc: "অজন্তা ও ইলোরা ধাঁচের পাহাড় কেটে তৈরি ঐতিহাসিক গুহামন্দির" },
    "Khajuraho Stone Carved Monument (খোদাই করা প্রাচীন পাথুরে স্থাপত্য প্রাঙ্গণ)": { img: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=500&auto=format&fit=crop&q=80&bg=82", desc: "খোদাই করা দেব-দেবী ও অপ্সরাদের পাথুরে ক্লাসিক্যাল মন্দির" },
    "Golden Temple Sacred Pool Pier (অমৃতসরের স্বর্ণমন্দিরের চারপাশের পবিত্র সরোবর)": { img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&auto=format&fit=crop&q=80&bg=83", desc: "সোনার মন্দিরের আলোয় আলোকিত অমৃত সরোবরের মার্বেল পরিক্রমা" },
    "Kamakhya Hilltop Temple Terrace (পাহাড়ের চূড়ার পবিত্র কামাখ্যা মন্দিরের চাতাল)": { img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500&auto=format&fit=crop&q=80&bg=84", desc: "নীলাচল পাহাড়ের চূড়ায় অবস্থিত প্রাচীন শক্তিপীঠ মন্দিরের প্রাঙ্গণ" },
    "Konark Sun Temple Stone Chariot Wheels (কোণার্ক সূর্য মন্দিরের বিশাল পাথরের রথের চাকা)": { img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=500&auto=format&fit=crop&q=80&bg=85", desc: "কোণার্কের বিখ্যাত পাথুরে রথের চাকা ও সূক্ষ্ম খোদাই কাজ" },
    "Incense Smoke Filled Sacred Sanctum (ধূপের সুগন্ধি ধোঁয়া ও প্রদীপে আলোকিত দেবালয়)": { img: "https://images.unsplash.com/photo-1557683316-973673baf926?w=500&auto=format&fit=crop&q=80&bg=86", desc: "ধূপের মায়াবী ধোঁয়া ও অগুরু চন্দনে সুবাসিত পবিত্র দেবস্থান" },
    "Riverside Buddhist Monastery Veranda (নদীর পাড়ে বৌদ্ধ মঠের লাল থামযুক্ত বারান্দা)": { img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80&bg=87", desc: "পাহাড়ি নদীর ধারে প্রাচীন বৌদ্ধ মঠের লাল রঙের কাঠখোদাই বারান্দা" },
    "Himalayan Hilltop Shrine with Prayer Flags (রঙিন প্রেয়ার ফ্ল্যাগে ঘেরা পাহাড়ি মন্দির)": { img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=80&bg=88", desc: "বাতাসে ওড়া পঞ্চবর্ণের তিব্বতি প্রেয়ার ফ্ল্যাগ ও পাহাড়ি মন্দির" },
    "Ancient Stone Stupa Pathway (প্রাচীন পাথুরে স্তূপ ও শান্ত ধ্যানস্থ চত্বর)": { img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80&bg=89", desc: "সাঁচি স্তূপ ধাঁচের গোলাকার প্রাচীন বৌদ্ধ পাথুরে তোরণ চত্বর" },
    "Temple Courtyard Under Peepal Tree (অশ্বত্থ গাছের তলায় প্রদীপ খচিত মন্দিরের চাতাল)": { img: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=500&auto=format&fit=crop&q=80&bg=90", desc: "পবিত্র অশ্বত্থ গাছের তলায় লাল সুতো ও মাটির প্রদীপে সাজানো শান্ত চাতাল" },
    "Grand Palace Ballroom with Chandeliers (ঝাড়বাতি অলঙ্কৃত রাজকীয় মার্বেল বলরুম)": { img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=500&auto=format&fit=crop&q=80&bg=91", desc: "চকচকে মার্বেল মেঝে, সোনালী খোদাই ও স্ফটিক ঝাড়বাতির বলরুম" },
    "Modern Luxury Living Room with City Skyline View (আধুনিক বিলাসবহুল ড্রয়িং রুম ও স্কাইলাইন)": { img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&auto=format&fit=crop&q=80&bg=92", desc: "লাক্সারি সোফা সেট, কাচের দেয়াল ও শহরের রাতের স্কাইলাইন" },
    "Modern High-Rise Penthouse Open Balcony (পেন্টহাউসের কাচের রেলিংযুক্ত খোলা বেলকনি)": { img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=500&auto=format&fit=crop&q=80&bg=93", desc: "উঁচু পেন্টহাউসের আধুনিক কাচের বেলকনি থেকে পাখির চোখে শহর দর্শন" },
    "Five-Star Luxury Hotel Suite (পাঁচ তারকা হোটেলের রয়্যাল প্রেসিডেনশিয়াল স্যুট)": { img: "https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?w=500&auto=format&fit=crop&q=80&bg=94", desc: "বিলাসবহুল ইন্টেরিয়র, মখমল ও মার্বেলের প্রেসিডেনশিয়াল স্যুট" },
    "Vintage Kolkata Tram Track Street (পুরানো কলকাতার ট্রাম লাইন ও ঐতিহাসিক দালানকোঠা)": { img: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=500&auto=format&fit=crop&q=80&bg=95", desc: "পুরানো কলকাতার রাজপথ, ট্রামের লোহার লাইন ও ভিক্টোরিয়ান স্থাপত্য" },
    "Parisian Cobblestone Romantic Alley (প্যারিসের ভিনটেজ পাথরের গলি ও ক্যাফে)": { img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500&auto=format&fit=crop&q=80&bg=96", desc: "ইউরোপীয় পাথুরে গলি, বাতির আলো ও ফুলসজ্জিত রোমান্টিক ক্যাফে" },
    "Modern City Boulevard at Dusk (সন্ধ্যার আলোয় আলোকিত আধুনিক মেট্রোপলিটন শহরের পথ)": { img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&auto=format&fit=crop&q=80&bg=97", desc: "আধুনিক শহরের চওড়া রাস্তা, আলো ও কাচের বহুতল অট্টালিকা" },
    "Rainy Monsoon City Street with Reflections (বৃষ্টিভেজা শহরের রাস্তা ও নিয়ন বাতির প্রতিফলন)": { img: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=500&auto=format&fit=crop&q=80&bg=98", desc: "বৃষ্টিতে ভেজা পিচঢালা পথ ও পানিতে নিয়ন বাতির রঙিন প্রতিফলন" },
    "Minimalist High-Fashion Photo Studio (মিনিমালিস্ট হাই-কী ফ্যাশন স্টুডিও সেট)": { img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&auto=format&fit=crop&q=80&bg=99", desc: "ছায়াহীন পরিচ্ছন্ন সাদা স্টুডিও ও প্রফেশনাল সফটবক্স লাইট" },
    "Velvet Luxury Lounge with Brass Trim (ভেলভেট সোফা ও ব্রাস ফিনিশ লাক্সারি লাউঞ্জ)": { img: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=500&auto=format&fit=crop&q=80&bg=100", desc: "রয়্যাল ব্লু ভেলভেট আসবাব ও মেটালিক সোনালী ট্রিম লাউঞ্জ" },
    "Industrial Red Brick Wall Loft Studio (ইন্ডাস্ট্রিয়াল রেড ব্রিক ও বড় জানালার লফ্ট)": { img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=500&auto=format&fit=crop&q=80&bg=101", desc: "রেট্রো লাল ইটের দেয়াল ও বিশাল লোহার ফ্রেমের জানালার স্টুডিও" },
    "Tropical Resort Infinity Poolside (ইনফিনিটি সুইমিং পুল ও পাম গাছে ঘেরা লাক্সারি রিসোর্ট)": { img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&auto=format&fit=crop&q=80&bg=102", desc: "সমুদ্রমুখী ইনফিনিটি পুল, নীল জল ও পাম গাছের ছায়াময় রিসোর্ট" },
    "Marble & Brass Geometric Luxury Backdrop (মার্বেল ও সোনালী ব্রাসের আধুনিক লাক্সারি দেয়াল)": { img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=500&auto=format&fit=crop&q=80&bg=103", desc: "জ্যামিতিক সোনালী রেখা খচিত সাদা মার্বেলের ব্যাকড্রপ" },
    "Sunlit Loft Window with Sheer Drapes (বিশাল জানালার সূর্যালোক ও সাদা নরম পর্দা)": { img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500&auto=format&fit=crop&q=80&bg=104", desc: "সকালের মিষ্টি রোদ ও বাতাসে ওড়া নরম সাদা পর্দা" },
    "High-End Art Gallery with Spotlight Exhibits (স্পটলাইটে আলোকিত আর্ট গ্যালারির প্রদর্শনী হল)": { img: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=500&auto=format&fit=crop&q=80&bg=105", desc: "উজ্জ্বল স্পটলাইট ও আধুনিক চিত্রকর্ম প্রদর্শনীর নীরব হলঘর" },
    "Grand Royal Dance Stage with Spotlights (গ্ল্যামারাস রাজকীয় ড্যান্স স্টেজ)": { img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500&auto=format&fit=crop&q=80&bg=106", desc: "স্পটলাইটসহ অলঙ্কৃত রাজকীয় কনসার্ট ও ড্যান্স স্টেজ" },
    "Bollywood Musical Stage with Fog & Lights (বলিউড রয়্যাল ড্যান্স স্টেজ ও রঙিন আলো)": { img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&auto=format&fit=crop&q=80&bg=107", desc: "রঙিন আলো ও ফগ ধোঁয়াযুক্ত বলিউডি মিউজিক্যাল স্টেজ" },
    "Open Palace Courtyard Dance Stage (কথক ও ভারতনাট্যম নৃত্যের খোলা পাথুরে মঞ্চ)": { img: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=500&auto=format&fit=crop&q=80&bg=108", desc: "ঐতিহাসিক রাজপ্রাসাদের খোলা পাথরের নৃত্যমঞ্চ" },
    "Festive Garba & Dandiya Arena (উৎসবের ডান্ডিয়া ও গরবা ড্যান্স গ্রাউন্ড)": { img: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=500&auto=format&fit=crop&q=80&bg=109", desc: "উৎসবের আলো ও ফুলের সুসজ্জিত খোলা ড্যান্স প্রাঙ্গণ" },
    "Modern Mirror Dance Studio with Neon Glow (আয়না খচিত আধুনিক নিয়ন ড্যান্স স্টুডিও)": { img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=500&auto=format&fit=crop&q=80&bg=110", desc: "আয়না ও সফট আলোয় উজ্জ্বল প্রফেশনাল ড্যান্স স্টুডিও" },
    "Rainy Open Street Dance Floor with Backlight (বৃষ্টিস্নাত ওপেন ড্যান্স ফ্লোর ও ব্যাকলাইট)": { img: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=500&auto=format&fit=crop&q=80&bg=111", desc: "রাতের আলোয় ভেজা বৃষ্টিস্নাত স্ট্রিট ড্যান্স ফ্লোর" },
    "Royal Marble Ballroom Dance Floor (রয়্যাল মার্বেল বলরুম ড্যান্স ফ্লোর)": { img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=500&auto=format&fit=crop&q=80&bg=112", desc: "ঝাড়বাতি ও চকচকে মার্বেল ড্যান্স বলরুম" },
    "Neon Cyberpunk Night Studio (আধুনিক নিয়ন ও সাইবারপাঙ্ক গ্ল্যামার স্টুডিও)": { img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=80&bg=113", desc: "রঙিন নিয়ন বাতি ও সাইবার নাইট মোড স্টুডিও" },
    "Satin Curtain Runway Fashion Backdrop (স্যাটিন পর্দা অলঙ্কৃত ফ্যাশন র‍্যাম্প স্টেজ)": { img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=500&auto=format&fit=crop&q=80&bg=114", desc: "সিল্ক স্যাটিনের ঝুলন্ত পর্দা অলঙ্কৃত স্টুডিও সেট" },
    "Fairy Lights & Candlelit Bokeh Stage (হাজারো ফেয়ারি লাইট ও মোমবাতির বোকাহ মঞ্চ)": { img: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=500&auto=format&fit=crop&q=80&bg=115", desc: "হাজারো লাইট ও মোমবাতির মায়াবী বোকাহ আলোয় সাজানো মঞ্চ" },
    "Floating Lantern Night Sky Over Terrace (রাতের আকাশে হাজারো উড়ন্ত ফানুসের দৃশ্য)": { img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=500&auto=format&fit=crop&q=80&bg=116", desc: "রাতের আকাশে হাজারো আলোকিত উড়ন্ত ফানুসের অপার্থিব রূপ" },
    "Celestial Starry Milky Way Night Sky (তারাভরা ছায়াপথ ও নীহারিকাময় রাতের আকাশ)": { img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=80&bg=117", desc: "ছায়াপথের কোটি কোটি তারায় উজ্জ্বল স্বপ্নিল রাতের আকাশ" },
    "Geometric Light & Shadow Studio Setup (জ্যামিতিক আলো-ছায়ার ড্রামাটিক স্টুডিও সেটআপ)": { img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&auto=format&fit=crop&q=80&bg=118", desc: "জ্যামিতিক আলো ও ছায়ার নাটকীয় ফ্যাশন স্টুডিও" },
    "Abstract Pastel Drop Photography Studio (প্যাস্টেল শেড ব্যাকড্রপ পোর্ট্রেট স্টুডিও)": { img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80&bg=119", desc: "কোমল প্যাস্টেল রঙের মসৃণ পোর্ট্রেট ফটোগ্রাফি ড্রপ" },
    "Futuristic Metallic Glossy Stage (মেটালিক ও চকচকে ফিউচারিস্টিক স্টুডিও সেট)": { img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&auto=format&fit=crop&q=80&bg=120", desc: "মেটালিক প্যানেল ও আলোর প্রতিফলনে তৈরি আধুনিক সেট" },
    "Palaces, Forts & Royal Architecture (রাজপ্রাসাদ, দুর্গ ও ঐতিহাসিক স্থাপত্য)": { img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500&auto=format&fit=crop&q=80&cat=1", desc: "ঐতিহাসিক রাজপ্রাসাদ, খিলান, তোরণ ও কেল্লা" },
    "Zamindar Mansions & Thakur Dalan (ঐতিহ্যবাহী জমিদার বাড়ি ও ঠাকুরদালান)": { img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=500&auto=format&fit=crop&q=80&cat=2", desc: "ঐতিহ্যবাহী জমিদার বাড়ির ঠাকুরদালান, বারান্দা ও অন্দরমহল" },
    "Bengal Villages, Riverbanks & Ganga Ghats (বাংলার শান্ত গ্রাম, নদী ও গঙ্গার বাঁধাল ঘাট)": { img: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=500&auto=format&fit=crop&q=80&cat=3", desc: "গঙ্গার বাঁধাল ঘাট, মেঠো পথ, নদী ও শান্ত গ্রাম্য প্রকৃতি" },
    "Puja Mandaps & Festive Celebrations (পূজামণ্ডপ, বিবাহ ও বর্ণিল উৎসব)": { img: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=500&auto=format&fit=crop&q=80&cat=4", desc: "পূজামণ্ডপ, আলপনা মেঝে, বিবাহ ও আলোর উৎসব" },
    "Natural Landscapes & Scenic Open Air (উন্মুক্ত প্রকৃতি, সরিষা খেত ও বন)": { img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&auto=format&fit=crop&q=80&cat=5", desc: "সরিষা খেত, বুনো ফুল, সমুদ্র সৈকত ও পাহাড়ের দৃশ্য" },
    "Historic Temples & Sacred Heritage (ঐতিহাসিক প্রাচীন মন্দির ও আধ্যাত্মিক স্থান)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&cat=6", desc: "টেরাকোটা মন্দির, বারাণসী ঘাট ও প্রাচীন আধ্যাত্মিক স্থান" },
    "Modern Luxury, Ballrooms & Urban Spaces (আধুনিক বিলাসবহুল আর্কিটেকচার ও বলরুম)": { img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=500&auto=format&fit=crop&q=80&cat=7", desc: "বিলাসবহুল মার্বেল বলরুম, পেন্টহাউস ও আধুনিক সিটিস্কেপ" },
    "Cinematic Dance Stages, Studios & Night Sets (সিনেমাটিক ড্যান্স স্টেজ ও স্টুডিও)": { img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500&auto=format&fit=crop&q=80&cat=8", desc: "সিনেমাটিক ড্যান্স স্টেজ, নিয়ন স্টুডিও ও ফ্যান্টাসি নাইট" },
    "All Backgrounds (একসাথে সকল ১২০টি স্থান)": { img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=500&auto=format&fit=crop&q=80&cat=9", desc: "একসাথে সকল ১২০টি বাস্তবসম্মত স্থানের সংগ্রহ" },
};

// Exactly 100 Curated Outfit Colors for Saree, Ethnic & Fashion Outfits
const colorPalette = {
    // Group 1: Reds, Maroons & Burgundies (1-10)
    "Crimson Red (লাল)": "#DC2626", 
    "Ruby Red (রুবি লাল)": "#991B1B",
    "Scarlet Red (স্কারলেট লাল)": "#EF4444",
    "Vermilion / Sindoor Red (সিঁদুর লাল)": "#E11D48",
    "Royal Maroon (রয়্যাল মেরুন)": "#800000",
    "Deep Wine / Burgundy (ওয়াইন বারগান্ডি)": "#4C0519", 
    "Blood Red (রক্ত লাল)": "#7F1D1D",
    "Cherry Red (চেরি লাল)": "#B91C1C",
    "Garnet Red (গার্ণেট লাল)": "#881337",
    "Cranberry Red (ক্র্যানবেরি)": "#9E0142",

    // Group 2: Pinks, Corals & Peaches (11-20)
    "Hot Pink / Rani Pink (রানি গোলাপী)": "#EC4899",
    "Baby Pink (বেবি পিঙ্ক)": "#F472B6",
    "Blush Pink (ব্ল্যাশ পিঙ্ক)": "#FBCFE8",
    "Magenta (ম্যাজেন্টা)": "#BE185D",
    "Rose Gold Pink (রোজ গোল্ড)": "#B76E79",
    "Coral Pink (কোরাল পিঙ্ক)": "#FB7185",
    "Salmon Pink (স্যামন পিঙ্ক)": "#FDA4AF",
    "Fuchsia Pink (ফিউশা)": "#D946EF",
    "Dusty Rose (ডাস্টি রোজ)": "#D47385",
    "Peach Blossom (পীচ ব্লসম)": "#FED7AA",

    // Group 3: Yellows, Ochres & Mustards (21-30)
    "Basanti Yellow (বাসন্তী হলুদ)": "#FACC15", 
    "Mustard Yellow (সরিষা হলুদ)": "#D97706",
    "Turmeric / Haldi Yellow (কাঁচা হলুদ)": "#EAB308",
    "Lemon Yellow (লেমন হলুদ)": "#FEF08A",
    "Goldenrod Yellow (গোল্ডেনরড)": "#DAA520",
    "Ochre Yellow (গেরুয়া হলুদ)": "#B45309",
    "Pastel Butter Yellow (বাটার হলুদ)": "#FEF9C3",
    "Saffron Yellow (জাফরান হলুদ)": "#F59E0B",
    "Canary Yellow (ক্যানারি হলুদ)": "#FDE047",
    "Honey Gold Yellow (হানি গোল্ড)": "#CA8A04",

    // Group 4: Oranges, Terracottas & Rusts (31-40)
    "Bright Tangerine Orange (উজ্জ্বল কমলা)": "#F97316",
    "Rust Orange (রাস্ট অরেঞ্জ)": "#C2410C",
    "Terracotta (টেরাকোটা মাটির রঙ)": "#E07A5F",
    "Peach Orange (পীচ অরেঞ্জ)": "#FDBA74",
    "Burnt Orange (বার্নট অরেঞ্জ)": "#9A3412",
    "Coral Orange (কোরাল অরেঞ্জ)": "#FF6B6B",
    "Apricot Orange (অ্যাপ্রিকট)": "#FB923C",
    "Sunset Orange (সূর্যাস্ত কমলা)": "#EA580C",
    "Copper Orange (কপার অরেঞ্জ)": "#B45309",
    "Amber Orange (অ্যাম্বার কমলা)": "#D97706",

    // Group 5: Greens & Emeralds (41-50)
    "Emerald Green (পান্না সবুজ)": "#059669",
    "Bottle Green (বোতল সবুজ)": "#064E3B",
    "Olive Green (অলিভ সবুজ)": "#65A30D",
    "Mint Green (মিন্ট সবুজ)": "#6EE7B7",
    "Parrot Green (টিয়া সবুজ)": "#22C55E",
    "Sage Green (সেজ গ্রীন)": "#84A98C",
    "Forest Green (গাঢ় বনানী সবুজ)": "#14532D",
    "Moss Green (শ্যাওলা সবুজ)": "#4D7C0F",
    "Seafoam Green (সিফোম গ্রীন)": "#A7F3D0",
    "Jade Green (জেড গ্রীন)": "#047857",

    // Group 6: Teals, Turquoises & Aquas (51-60)
    "Peacock Blue / Teal (ময়ূরকণ্ঠী টিল)": "#0D9488",
    "Deep Teal (গাঢ় টিল)": "#115E59",
    "Turquoise (ফিরোজা / তারকিশ)": "#06B6D4",
    "Aqua Marine (অ্যাকোয়ামেরিন)": "#2DD4BF",
    "Cyan Blue (সায়ান ব্লু)": "#0891B2",
    "Dark Cyan (ডার্ক সায়ান)": "#155E75",
    "Ocean Blue (সমুদ্র নীল)": "#0284C7",
    "Sea Green (সমুদ্র সবুজ)": "#10B981",
    "Pastel Aqua (প্যাস্টেল অ্যাকোয়া)": "#99F6E4",
    "Petrol Blue (পেট্রোল ব্লু)": "#0F766E",

    // Group 7: Blues, Navies & Indigos (61-70)
    "Royal Blue (রয়্যাল নীল)": "#2563EB", 
    "Navy Blue (নেভি ব্লু)": "#1E3A8A",
    "Midnight Blue (মিডনাইট ব্লু)": "#0F172A",
    "Sky Blue (আকাশী নীল)": "#38BDF8",
    "Indigo Blue (নীলকান্তমণি / নীল)": "#4338CA",
    "Powder Blue (পাউডার ব্লু)": "#BAE6FD",
    "Cobalt Blue (কোবাল্ট ব্লু)": "#1D4ED8",
    "Sapphire Blue (নীলমণি নীল)": "#1E40AF",
    "Steel Blue (স্টিল ব্লু)": "#4682B4",
    "Ice Blue (আইস ব্লু)": "#E0F2FE",

    // Group 8: Purples, Violets & Lavenders (71-80)
    "Deep Royal Purple (রয়্যাল বেগুনি)": "#6B21A8",
    "Violet (ভাইওলেট)": "#7C3AED",
    "Pastel Lavender (ল্যাভেন্ডার)": "#DDD6FE",
    "Plum Purple (প্লাম বেগুনি)": "#4C1D95",
    "Lilac (লাইলাক)": "#C084FC",
    "Mauve (মভ)": "#A855F7",
    "Orchid Pink-Purple (অরকিড)": "#E879F9",
    "Amethyst Purple (অ্যামেথিস্ট রত্ন বেগুনি)": "#9933CC",
    "Mulberry (তুঁত বেগুনি)": "#701A75",
    "Grape Purple (আঙ্গুর বেগুনি)": "#581C87",

    // Group 9: Metallics, Golds & Bronzes (81-90)
    "Golden Zari (সোনালী জরি)": "#D97706", 
    "Champagne Gold (শ্যাম্পেইন গোল্ড)": "#FCD34D",
    "Antique Dull Gold (অ্যান্টিক গোল্ড)": "#B58900",
    "Metallic Silver (রূপালী জরি)": "#E2E8F0",
    "Metallic Bronze (ব্রোঞ্জ)": "#92400E",
    "Copper Zari (তামা জরি)": "#B45309",
    "Platinum White (প্লাটিনাম)": "#F1F5F9",
    "Rose Gold Metallic (রোজ মেটালিক)": "#FDA4AF",
    "Pewter Silver (পিউটার)": "#8E8D8A",
    "Shimmer Brass (ব্রাস সোনালী)": "#CA8A04",

    // Group 10: Neutrals, Browns, Whites & Darks (91-100)
    "Pure White (শুভ্র সাদা)": "#FFFFFF",
    "Off-White / Cream (অফ-হোয়াইট ক্রিম)": "#FEF3C7",
    "Ivory White (আইভরি এলিগ্যান্ট)": "#FFFBEB",
    "Nude Beige (নিউড বেইজ)": "#D4D4D8",
    "Classic Jet Black (জেট কালো)": "#000000", 
    "Charcoal Grey (চারকোল ছাই)": "#374151",
    "Slate Grey (স্লেট ধূসর)": "#64748B",
    "Chocolate Brown (চকলেট খয়েরি)": "#451A03",
    "Camel Tan (ট্যান ব্রাউন)": "#B45309",
    "Custom Color (কাস্টম কালার কোড)": "HEX_PICKER"
};

// Expanded Outfit Styles Mapping with 50+ Real Women's Styles
const outfitStylesMap = {
    "Saree (শাড়ি)": [
        "Satin Silk Saree (স্যাটিন সিল্ক)", 
        "Lycra Ready-to-Wear Saree (লাইক্রা রেডি-টু-ওয়্যার)", 
        "Organza Saree (অর্গানজা)", 
        "Tissue Silk Saree (টিস্যু সিল্ক)", 
        "Chiffon Saree (শিফন)", 
        "Kanjivaram Silk (কাঞ্জিভরম)", 
        "Banarasi Silk (বেনারসী)", 
        "Sequin Work Saree (সিক্যুইন ওয়ার্ক)", 
        "Georgette Saree (জর্জেট)", 
        "Cotton Jamdani (জামদানি)",
        "Tussar Silk Saree (তসর সিল্ক)",
        "Bengali Style (আটপৌরে)", 
        "Nivi Drape (নিভি)", 
        "Seedha Pallu (সোজা আঁচল)", 
        "Pleated Drape (প্লিয়েটেড)", 
        "Ruffled Drape (রফলস)", 
        "Modern Belted Style (বেল্ট স্টাইল)", 
        "Nauvari / Kaashta (নৌভারি মারাঠি ধুতি শাড়ি)",
        "Custom (কাস্টম ডেসক্রিপশন)"
    ],
    "Lehenga Choli (লেহেঙ্গা চোলি)": [
        "Circular Flared Lehenga (সার্কুলার বিপুল ঘের)", 
        "Mermaid / Fishtail Cut (মারমেইড ফিশটেইল কাট)", 
        "A-Line Bridal Lehenga (এ-লাইন ব্রাইডাল)", 
        "Panelled / Kalidar Lehenga (কলিদার প্যানেলড)", 
        "Ruffled Layered Lehenga (রফলড লেয়ার্ড)", 
        "Custom (কাস্টম ডেসক্রিপশন)"
    ],
    "Ghagra Choli (ঐতিহ্যবাহী ঘাঘরা চোলি)": [
        "Rajasthani Mirror Work Ghagra (রাজস্থানি আয়না কাজ)",
        "Gujarati Chaniya Choli (গুজরাটি চানিয়া চোলি)",
        "Bandhani Silk Ghagra (বান্ধনী সিল্ক ঘাঘরা)",
        "Gotapatti Work Ghagra (গোটাপট্টি কারুকার্য)",
        "Custom (কাস্টম ডেসক্রিপশন)"
    ],
    "Salwar Kameez & Suit (সালোয়ার স্যুট)": [
        "Patiala Shahi Suit (পাটিয়ালা শাহি স্যুট)", 
        "Churidar Suit (চুড়িদার স্যুট)", 
        "Straight Cut Suit (স্ট্রেইট কাট স্যুট)", 
        "Dhoti Salwar Suit (ধুতি স্টাইল সালোয়ার)",
        "Palazzo Suit (প্যালাজো স্যুট)", 
        "Custom (কাস্টম ডেসক্রিপশন)"
    ],
    "Anarkali Suit (আনারকলি স্যুট)": [
        "Floor Length Royal Anarkali (ফ্লোর লেন্থ আনারকলি)", 
        "Angrakha Cross-Tie Cut (অঙ্গারখা ক্রস কাট)", 
        "Jacket Style Anarkali (জ্যাকেট স্টাইল আনারকলি)", 
        "Tiered Kalidar Anarkali (লেয়ার্ড কলিদার)",
        "Custom (কাস্টম ডেসক্রিপশন)"
    ],
    "Sharara & Gharara (শারারা ও ঘারারা)": [
        "Flared Sharara Set (ফ্লেয়ার্ড শারারা স্যুট)", 
        "Royal Lucknowi Gharara (রয়্যাল লখনউ ঘারারা)", 
        "Peplum Kurti with Sharara (পেপলাম কুর্তি শারারা)", 
        "Tiered Ruffled Sharara (টিয়ার্ড রফলড শারারা)", 
        "Straight Cut Kurti Sharara (স্ট্রেইট কুর্তি শারারা)",
        "Custom (কাস্টম ডেসক্রিপশন)"
    ],
    "Regional Ethnic Wear (আঞ্চলিক ঐতিহ্যবাহী পোশাক)": [
        "Assamese Mekhela Chador (অসমের মেখলা চাদর)",
        "South Indian Pattu Pavadai / Half Saree (দাক্ষিণাত্যের পাবাড়াই / হাফ-শাড়ি)",
        "Kashmiri Pheran (কাশ্মীরি ফিরান)",
        "Manipuri Phanek & Innaphi (মণিপুরী ফানেক)",
        "Custom (কাস্টম ডেসক্রিপশন)"
    ],
    "Indo-Western Fusion (ইন্দো-ওয়েস্টার্ন ফিউশন)": [
        "Draped Saree Gown (ড্র্যাপড শাড়ি গাউন)",
        "Cape Top with Skirt (কেপ টপ ও স্কার্ট)", 
        "Dhoti Pants with Embroidered Jacket (ধুতি প্যান্ট ও জ্যাকেট)", 
        "Crop Top & Wide Palazzo (ক্রপ টপ ও ওয়াইড প্যান্টস)", 
        "Kurti with Denim / Jeans (কুর্তি উইথ ডেনিম জিন্স)", 
        "Ethnic Jumpsuit (এথনিক জাম্পস্যুট)",
        "Custom (কাস্টম ডেসক্রিপশন)"
    ],
    "Gown & Evening Wear (গাউন ও সান্ধ্য পোশাক)": [
        "Royal Ball Gown (রয়্যাল সিন্ডারেলা বল গাউন)", 
        "Mermaid Silhouette Gown (মারমেইড গাউন)",
        "Empire Waist Royal Gown (এম্পায়ার ওয়েস্ট গাউন)", 
        "High-Slit Evening Gown (হাই-স্লিট গ্ল্যামারাস গাউন)", 
        "Velvet & Sequin Flare Gown (ভেলভেট ও সিক্যুইন গাউন)", 
        "Custom (কাস্টম ডেসক্রিপশন)"
    ],
    "Western Dresses (ওয়েস্টার্ন ওয়ান-পিস ড্রেস)": [
        "Bodycon Dress (বডিকন ড্রেস)", 
        "A-Line Skater Dress (এ-লাইন স্ক্যাটার ড্রেস)", 
        "Wrap Dress (র‌্যাপ ড্রেস)", 
        "Cocktail Dress (ককটেল পার্টি ড্রেস)", 
        "Maxi Flowing Dress (ফ্লোয়িং ম্যাক্সি ড্রেস)",
        "Shirt Dress with Belt (শার্ট ড্রেস)",
        "Slip Satin Dress (স্লিপ স্যাটিন ড্রেস)",
        "Pencil Office Dress (পেন্সিল ফর্মাল ড্রেস)",
        "Off-Shoulder Tunic (অফ-শোল্ডার ড্রেস)",
        "Custom (কাস্টম ডেসক্রিপশন)"
    ],
    "Suits, Co-ords & Separates (প্যান্ট স্যুট ও কো-অর্ড)": [
        "Women's Formal Pantsuit (উইমেনস প্যান্ট স্যুট / ব্লেজার সেট)",
        "Matching Co-ord Set (ম্যাচিং প্রিন্ট কো-অর্ড টু-পিস)",
        "Skirt Suit (ব্লেজার ও স্কার্ট স্যুট)",
        "Top with Pleated Maxi Skirt (টপ ও প্লিটেড স্কার্ট)",
        "Top with Flare / Bell-Bottom Jeans (টপ ও বেল-বটম জিন্স)",
        "Custom (কাস্টম ডেসক্রিপশন)"
    ],
    "Jumpsuit, Romper & Dungaree (জাম্পস্যুট ও রম্পার)": [
        "Chic Full-Length Jumpsuit (স্লিক ফুল-লেন্থ জাম্পস্যুট)",
        "Casual Summer Romper (ক্যাজুয়াল সামার রম্পার)",
        "Denim Dungarees / Overalls (ডেনিম ডানগারি)",
        "Custom (কাস্টম ডেসক্রিপশন)"
    ],
    "Kaftan, Lounge & Resort Wear (কাফতান ও লাউঞ্জওয়্যার)": [
        "Silk Embroidered Royal Kaftan (রয়্যাল সিল্ক কাফতান)", 
        "Printed Georgette Resort Kaftan (রিসোর্ট জর্জেট কাফতান)", 
        "Belted Modern Kaftan (বেল্টযুক্ত আধুনিক কাফতান)", 
        "Kimono Wrap Robe Dress (কিমোনো ড্রেস)",
        "Sarong Beach Wrap Dress (সারং বিচ ড্রেস)",
        "Custom (কাস্টম ডেসক্রিপশন)"
    ],
    "Custom (কাস্টম ডেসক্রিপশন)": [
        "Standard Fit", 
        "Custom (কাস্টম ডেসক্রিপশন)"
    ]
};

// 100 Action & Movement Options Array
const actionOptions100 = [
    "Kathak Classical Dance Mudra (কথক নৃত্য মুদ্রা ও হাতের ভঙ্গি)",
    "Kathak Dynamic Chakkars & Pirouettes (কথক নৃত্যের দ্রুত চক্কর ও ঘূর্ণন)",
    "Kathak Tatkar Footwork & Ankle Bells Pose (কথক নৃত্যের ঘুমুর ঝংকার ও তৎকার পদক্ষেপ)",
    "Bharatanatyam Aramandi Half-Sit Stance (ভারতনাট্যম আরামন্ডি অর্ধ-উপবিষ্ট ভঙ্গি)",
    "Bharatanatyam Nataraja Cosmic Dance Pose (ভারতনাট্যম নটরাজ শিব নৃত্য ভঙ্গি)",
    "Bharatanatyam Alarippu Opening Invocation (ভারতনাট্যম আলারিপ্পু বন্দনা মুদ্রা)",
    "Bharatanatyam Mayura Mudra Peacock Gesture (ভারতনাট্যম ময়ূর মুদ্রা ও হস্তভঙ্গি)",
    "Bharatanatyam Pataka Mudra Flowing Gesture (ভারতনাট্যম পতাকা মুদ্রা ও শাস্ত্রীয় অভিবাদন)",
    "Odissi Tribhangi Three-Bend Graceful Posture (ওড়িশি ত্রিভঙ্গী তিন-বাঁকের লাবণ্যময় ভঙ্গি)",
    "Odissi Chauka Wide Square Stance (ওড়িশি চৌকা বলিষ্ঠ শাস্ত্রীয় ভঙ্গি)",
    "Odissi Lotus Bud Hand Gesture & Arch (ওড়িশি পদ্মকোরক মুদ্রা ও নম্র ভঙ্গি)",
    "Mohiniyattam Enchanting Swaying Waves Gesture (মোহিনীঅট্টম তরঙ্গের মতো ছন্দময় দোলাচল)",
    "Mohiniyattam Swan Gliding Soft Movement (মোহিনীঅট্টম রাজহংসীর মতো কোমল পদক্ষেপ)",
    "Kathakali Mudra & Dramatic Eye Darting (কথাকলি নাটকীয় চোখ ও হস্ত মুদ্রা)",
    "Manipuri Delicate Circular Floating Dance (মণিপুরী বৃত্তাকার নরম ভাসমান নৃত্যভঙ্গি)",
    "Kuchipudi Brass Plate Dance Balancing Stance (কুচিপুড়ি পিতলের থালায় পদরেখা নৃত্য মুদ্রা)",
    "Classical Anjali Mudra Prayer Hand Offering (শাস্ত্রীয় অঞ্জলি মুদ্রা ও হাতজোড় প্রার্থনা)",
    "Classical Hamsasya Swan-Beak Delicate Mudra (শাস্ত্রীয় হংসাস্য সূক্ষ্ম আঙুলের মুদ্রা)",
    "Classical Shikhara Sceptre Strong Royal Mudra (শাস্ত্রীয় শিখর দৃঢ় রাজকীয় হস্ত মুদ্রা)",
    "Classical Pushpaputa Flower Offering Gesture (শাস্ত্রীয় পুষ্পপুট অঞ্জলিভরা পুষ্পার্ঘ্য ভঙ্গি)",
    "Dynamic Saree Twirl & 360 Spin (শাড়ির ঘের ও আঁচল উড়িয়ে ৩৬০ ডিগ্রি ড্যান্স স্পিন)",
    "Graceful Flying Pallu Caught in Breeze (বাতাসে উড়ন্ত শাড়ির আঁচল ধরার লাবণ্যময় ভঙ্গি)",
    "Holding Saree Pleats While Gliding Forward (কুঁচি আলতো হাতে ধরে সামনে এগোনোর ভঙ্গি)",
    "Dramatically Flicking Saree Pallu Over Shoulder (কাঁধের ওপর শাড়ির আঁচল নাটকীয়ভাবে ঘোরানোর ভঙ্গি)",
    "Swaying Saree Border with Gentle Hip Motion (কোমরের দোলায় শাড়ির চওড়া পাড় দোলানোর ভঙ্গি)",
    "Holding Dupatta Edges Like Fluttering Wings (দোপাট্টার দুই কোণ পাখির ডানার মতো মেলা ভঙ্গি)",
    "Lehenga Hem Lifting & Twirling Flare (লেহেঙ্গার ঘের দুই হাতে তুলে সুন্দর ঘূর্ণন)",
    "Swirling Anarkali Dress in Rapid Motion (আনারকলি ফ্রকের বৃত্তাকার দ্রুত নাচের ঘের)",
    "Draping Dupatta Over Forehead in Ghoonghat (লজ্জাবতী ওড়নার ঘোমটা কপালে টানার মধুর ভঙ্গি)",
    "Wind-Blown Chiffon Flowing in Horizon (বাতাসে শিফন শাড়ির দীর্ঘ আঁচল ওড়ার দৃশ্য)",
    "Holding Both Pallu Corners in Dramatic Flourish (শাড়ির আঁচলের দুই প্রান্ত মেলে রাজকীয় প্রকাশ)",
    "Gracefully Adjusting Waist Kamarbandh and Pleats (কোমরবন্ধ ও শাড়ির কুঁচি ঠিক করার মার্জিত ভঙ্গি)",
    "Twirling with Trailing Silk Train (সিল্কের দীর্ঘ ট্রেইল বাতাসে উড়িয়ে ঘূর্ণন)",
    "Veil Flying Back in Dramatic Motion (বাতাসে ওড়না উড়ে গিয়ে প্রকাশ পাওয়া মুখশ্রী)",
    "Gentle Saree Flutter in Slow Motion Breeze (মৃদু বাতাসে শাড়ির কাপড়ের ছন্দময় তরঙ্গ)",
    "Graceful Walking with Flowing Pallu (বাতাসে আঁচল উড়িয়ে ছন্দময় পদক্ষেপ)",
    "Slow Elegant Runway Model Stride (র‍্যাম্প মডেলদের মতো ধীর আত্মবিশ্বাসী ক্যাটওয়াক)",
    "Stepping Down Royal Marble Staircase (রাজপ্রাসাদের মার্বেল সিঁড়ি বেয়ে ধীর পায়ে নামা)",
    "Tiptoe Stepping Over Rain Puddles (বৃষ্টির জমা পানিতে আলতো পায়ের চঞ্চল টিপটো পদক্ষেপ)",
    "Gliding Forward with Ankle Bells Jingling (পায়ে নূপুর ও ঘুমুরের ঝংকারে ছন্দময় অগ্রগমন)",
    "Stepping Out of Vintage Palanquin / Doli (ঐতিহাসিক রাজকীয় পালকি বা ডুলি থেকে নামার ভঙ্গি)",
    "Casual Carefree Stroll in Green Meadow (সবুজ ঘাসের মাঠে উদাসীন মুক্ত বাতাসে হাঁটা)",
    "Turning Back Mid-Stride with Gentle Smile (হাঁটতে হাঁটতে পেছনে ফিরে মিষ্টি হাসির ভঙ্গি)",
    "Descending River Ghat Steps into Water (নদীর ঘাটের পাথুরে সিঁড়ি বেয়ে ধীর পায়ে নামা)",
    "Cross-Legged Fashion Model Pivot Stride (ফ্যাশন মডেলের পা ক্রস করে থামার পাওয়ার ওয়াক)",
    "Walking Along Historic Palace Corridor (ঐতিহাসিক প্রাসাদের পিলারের করিডোরে ধীর পদচারণা)",
    "Carefree Skipping on Golden Beach (সমুদ্রের সোনালী বালুকাবেলায় খুশির চঞ্চল পদক্ষেপ)",
    "Gracefully Walking While Holding Brass Urli (হাতে পিতলের মঙ্গলকলস নিয়ে রাজকীয় হাঁটা)",
    "Midnight Promenade Under Lantern Glow (ফানুস ও লণ্ঠনের আলোয় নিশুতি রাতের মোহময় হাঁটা)",
    "Brisk Confident Stride with Swaying Hips (আত্মবিশ্বাসী ক্ষিপ্র কদমে ছন্দময় শরীরী চলন)",
    "Festive Dandiya Sticks Clashing Rhythm (উৎসবমুখর ডান্ডিয়া লাঠির ছন্দময় টক্কর ও নৃত্য)",
    "Garba Clap and Circular Spin (গরবা নাচের হাততালি ও আনন্দময় বৃত্তাকার স্পিন)",
    "Rajasthani Ghoomar Swirling Veil Dance (রাজস্থানি ঘুমর নাচের ঘোমটা ও ঘেরের ঘূর্ণন)",
    "Bengali Dhunuchi Dance with Smoldering Clay Incense (ধুনুচি হাতে দুর্গোৎসবের উল্লাসময় আরতি নৃত্য)",
    "Bengali Rabindra Nritya Lyrical Hand Posture (রবীন্দ্র নৃত্যের কাব্যিক ও লাবণ্যময় হস্তমুদ্রা)",
    "Assamese Bihu Finger Clapping & Hip Sway (অসমীয়া বিহু নৃত্যের আঙুল নাচানো ও কোমরের ভঙ্গি)",
    "Maharashtrian Lavani Sensual Footwork Stance (মহারাষ্ট্রীয় লাবণী নাচের তীব্র ও আবেদনময় পদক্ষেপ)",
    "Punjabi Giddha Clapping & Energetic Leap (পাঞ্জাবি গিদ্ধা নৃত্যের করতালি ও প্রাণোচ্ছল লাফ)",
    "Rajasthani Kalbelia Serpent Grace Twisting (রাজস্থানি কালবেলিয়া সাপের মতো নমনীয় শরীরের দোলা)",
    "Kashmiri Rauf Women Interlocked Arm Dance (কাশ্মীরি রউফ নাচে বাহুতে বাহু জড়িয়ে নাচ)",
    "South Indian Kummi Folk Rhythmic Hand Claps (দক্ষিণভারতীয় কুম্মি নাচের তালি দেওয়ার ছন্দ)",
    "Sufi Whirling Trance with Raised Palm (সুফি ডারভিসের মতো এক হাত আকাশে তুলে ধ্যানমগ্ন ঘূর্ণন)",
    "Holi Festival Throwing Gulal Color Cloud (হোলি উৎসবে দুই হাত ভরে আকাশে আবির ওড়ানোর ভঙ্গি)",
    "Diwali Sparkler Wand Twirling Joy (দীপাবলিতে হাতে জ্বলন্ত ফুলঝুরি ঘুরিয়ে আনন্দ উল্লাস)",
    "Festive Dholak Drum Rhythmic Celebration Pose (ঢোলের বাদ্যে মেতে ওঠা বাঁধভাঙা উৎসবের নাচ)",
    "Expressive Eye & Facial Abhinaya (চোখ ও মুখের গভীর অভিব্যক্তিময় নৃত্য ভঙ্গি)",
    "Graceful Adjusting Bangles & Jhumka (স্মিত হাসিতে চুড়ি ও কানের ঝুমকা ছোঁয়ার ভঙ্গি)",
    "Candid Gentle Laughter with Hand on Mouth (মুখে হাত চেপে লাজুক ও আন্তরিক হাসির ক্যান্ডিড ভঙ্গি)",
    "Looking Back Over Shoulder with Coquettish Glance (কাঁধের ওপর দিয়ে পেছনে বাঁকা চোখে তাকানোর কটাক্ষ)",
    "Peeking from Behind Wooden Jharokha Window (কাঠের খোদাই করা ঝরোখা জানালার আড়াল থেকে উঁকি)",
    "Tucking Loose Hair Strand Behind Ear (কানের পেছনে এলোমেলো চুল গোঁজার মিষ্টি আনমনা ভঙ্গি)",
    "Intense Piercing Eye Contact Portrait (সরাসরি ক্যামেরায় দৃষ্টি রেখে গভীর আকর্ষক চাহনি)",
    "Touching Chin in Thoughtful Nostalgia (চিবুকে আঙুল ছুঁয়ে উদাস চিন্তামগ্ন মিষ্টি ভাব)",
    "Biting Lower Lip with Shy Grin (লাজুক হাসিতে নিচের ঠোঁট আলতো কামড়ে ধরার মিষ্টি ভঙ্গি)",
    "Resting Face Gently on Palm (হাতের তালুতে গাল রেখে আনমনা বসে থাকার ভঙ্গি)",
    "Catching Falling Raindrops on Outstretched Palms (দুই হাত বাড়িয়ে বৃষ্টির প্রথম ফোঁটা ধরার অনুভূতি)",
    "Breathing Scent of Fresh Red Rose (তাজা লাল গোলাপের ঘ্রাণ নেওয়ার স্নিগ্ধ রোমান্টিক ভঙ্গি)",
    "Candid Fixing Matha Patti in Vintage Mirror (ভিন্টেজ রূপালী আয়নায় মাথা পট্টি ঠিক করার ক্যান্ডিড দৃশ্য)",
    "Looking Up Dreamily into Starlit Night (তারকাময় রাতের আকাশের দিকে মায়াবী দৃষ্টিতে তাকানো)",
    "Whispering a Secret with Cupped Hand (হাতের আড়াল করে মিষ্টি হাসিতে ফিসফিস করে কথা বলার ভঙ্গি)",
    "Traditional Namaste with Folded Palms at Heart (বুকের কাছে দুই হাত জোড় করে সনাতন নমস্তে অভিবাদন)",
    "Touching Feet in Reverent Pranam (শ্রদ্ধাবনত হয়ে গুরুজনদের চরণ স্পর্শ ও আশীর্বাদ নেওয়ার ভঙ্গি)",
    "Holding Glowing Brass Diya with Both Hands (দুই হাতে জ্বলন্ত পিতলের শুভ প্রদীপ ধরে রাখার ভঙ্গি)",
    "Performing Evening Ganga Aarti with Flame Lamp (গঙ্গার ঘাটে পঞ্চপ্রদীপ তুলে আরতি করার ভক্তিময় ভঙ্গি)",
    "Blowing Sacred Conch Shell Shankha (দুই হাতে পবিত্র শাঁখ তুলে ফুঁ দেওয়ার ঐশ্বরিক ভঙ্গি)",
    "Applying Red Sindoor in Hair Parting (আঙুলে করে সিঁথিতে সিঁদুর পরার চিরন্তন বাঙালি রূপ)",
    "Sindoor Khela Festive Smearing on Cheeks (বিজয়া দশমীতে সিঁদুর খেলায় গালে লাল আবির ছোঁয়ানোর উল্লাস)",
    "Admiring Intricate Mehendi on Both Palms (দুই হাতের মেহেদির সূক্ষ্ম নকশা মেলে ধরে দেখার ভঙ্গি)",
    "Splashing Water from Sacred Brass Urli (সুগন্ধি ফুলে ভরা পিতলের পাত্র থেকে পানি ছিটানোর ভঙ্গি)",
    "Kneeling in Prayer with Closed Eyes (চোখ বন্ধ করে গভীর প্রার্থনায় নতজানু হওয়ার শান্ত ভঙ্গি)",
    "Holding Puja Thali with Flowers and Incense (ফুল, চন্দন ও ধূপসহ পূজার থালা তুলে ধরার ভঙ্গি)",
    "Tying Sacred Red Thread Kalawa on Wrist (হাতে লাল মঙ্গলসূত্র বা রাখি বাঁধার শুভ ভঙ্গি)",
    "Royal Regal Standing Stance (রাজকীয় মার্জিত স্থির পোজ)",
    "Seated Elegantly on Velvet Royal Throne (ভেলভেটের কারুকার্যময় সিংহাসনে রাজকীয় ভঙ্গিতে উপবিষ্ট)",
    "Resting Hand on Carved Marble Balustrade (মার্বেলের খোদাই করা বারান্দার রেলিংয়ে হাত রেখে দাঁড়ানো)",
    "Dramatic Silhouette Standing in Archway Frame (খিলানের তোরণে দাঁড়ানো আলো-ছায়ার ড্রামাটিক সিল্যুয়েট পোজ)",
    "Leaning Gracefully Against Stone Palace Pillar (পাথরের কারুকার্যময় পিলারে হেলান দিয়ে ভাবুক দাঁড়ানো)",
    "Looking Out Across Horizon from Palace Terrace (প্রাসাদের উন্মুক্ত ছাদ থেকে দিগন্তের পানে রাজকীয় দৃষ্টি)",
    "Dramatic Cape / Dupatta Throw into Wind (বাতাসে ওড়না বা কেপ ছুড়ে দেওয়ার হাই-ফ্যাশন মডেল পোজ)",
    "Sitting Cross-Legged on Silk Cushion Diwan (রেশমি গালিচা ও বালিশযুক্ত দিওয়ানে আলসে ভঙ্গিতে বসা)",
    "High-Fashion Editorial Side Profile Pose (ম্যাগাজিনের কভারের মতো তীক্ষ্ম সাইড প্রোফাইল ফ্যাশন পোজ)",
    "Holding Antique Hand Fan with Regal Elegance (ঐতিহাসিক কারুকার্যময় পাখা হাতে রাজকীয় শীতল ভঙ্গিমা)",
    "Gazing at Reflection in Palace Water Pool (প্রাসাদের শান্ত জলকুণ্ডে নিজের প্রতিবিম্ব দেখার মায়াবী ভঙ্গি)",
    "Dynamic Floor Spread Pose with Saree Circle (মেঝেতে শাড়ির ঘের সম্পূর্ণ বৃত্তাকারে ছড়িয়ে বসে পোজ)",
    "Candid Gentle Dance Step (সাবলীল স্বাভাবিক নৃত্যের পদক্ষেপ)",
    "Custom (কাস্টম ডেসক্রিপশন)"
];

// Categorized Background Mapping (8 Themed Categories + All 120 Backgrounds)
const backgroundCategoryMap = {
    "Palaces, Forts & Royal Architecture (রাজপ্রাসাদ, দুর্গ ও ঐতিহাসিক স্থাপত্য)": [
        "Royal Palace Grand Corridor (রাজপ্রাসাদের কারুকার্যময় করিডোর ও খিলান)",
        "Rajasthani Fort Courtyard with Jharokhas (রাজস্থানি কেল্লার খোলা অলঙ্কৃত উঠান ও ঝরোখা)",
        "Mughal White Marble Pavilion (মুঘল সাদা মার্বেল প্যাভিলিয়ন ও তোরণ)",
        "Royal Darbar Hall with Golden Pillars (স্বর্ণপিলারে ঘেরা রাজকীয় দরবার হল)",
        "Historic Haveli Courtyard with Carved Balconies (ঐতিহ্যবাহী হাভেলি প্রাঙ্গণ ও কাঠের কাজ)",
        "Luxury Palace Open Terrace at Sunset (সূর্যাস্তের সময় প্রাসাদের উন্মুক্ত মার্বেল ছাদ)",
        "Carved Wooden Jharokha Window of Fort (কেল্লার খোদাই করা কাঠের ঝরোখা জানালা)",
        "Ancient Royal Fountain Garden (রাজপ্রাসাদের ফোয়ারা বাগান ও পথ)",
        "Heritage Museum Corridor with Artifacts (ঐতিহাসিক মিউজিয়াম গ্যালারি ও তৈলচিত্র)",
        "Mughal Shalimar Garden Pathways (মুঘল শালিমার বাগানের নহবতখানা ও ঝরনা)",
        "Jaipur Hawa Mahal Pink Facade (জয়পুর হাওয়া মহলের গোলাপি মার্বেল নকশা)",
        "Udaipur Lake Palace Balcony View (উদয়পুর লেক প্যালেসের জলবেষ্টিত বারান্দা)",
        "Ancient Fort Watchtower Overlooking Valley (উপত্যকার পানে চেয়ে থাকা প্রাচীন দুর্গ প্রাচীর)",
        "Royal Stepwell Baoli with Geometric Stairs (প্রাচীন রাজকীয় বাওলি ও জ্যামিতিক সিঁড়ি)",
        "Ornate Gold-Leaf Palace Archway (সোনার পাত খচিত রাজকীয় প্রবেশদ্বার তোরণ)",
        "Custom (কাস্টম ডেসক্রিপশন)"
    ],
    "Zamindar Mansions & Thakur Dalan (ঐতিহ্যবাহী জমিদার বাড়ি ও ঠাকুরদালান)": [
        "Zamindar Palace Thakur Dalan (জমিদার বাড়ির ঐতিহ্যবাহী ঠাকুরদালান ও থাম)",
        "Colonial Zamindar Mansion Veranda (ঔপনিবেশিক জমিদার বাড়ির অলঙ্কৃত খাম্বার বারান্দা)",
        "Traditional Clay Courtyard with Tulsi Manch (তুলসিমঞ্চ ও শুভ আলপনা সজ্জিত উঠান)",
        "Traditional Bengali Living Room with Antique Palanka (ঐতিহ্যবাহী সেগুন কাঠের খোদাই করা পালঙ্ক ও ঘর)",
        "Vintage Victorian Library Room in Mansion (কাষ্ঠমণ্ডিত পুরানো লাইব্রেরি ও বইয়ের র্যাক)",
        "Zamidari Jalsaghar Music Room with Belgian Glass (বেলজিয়াম কাচ ও ঝাড়বাতি সজ্জিত জলসাঘর)",
        "Heritage Inner Courtyard with Red Oxide Floor (লাল অক্সাইড মেঝে ও পাথরের স্তম্ভের অন্দরমহল)",
        "Zamindar Veranda Overlooking Lush Garden (সবুজ বাগানমুখী রাজকীয় খড়খড়িযুক্ত বারান্দা)",
        "Vintage Grand Staircase with Iron Railing (কাস্ট আয়রনের কারুকার্যময় প্যাঁচানো বড় সিঁড়ি)",
        "Old Kolkata Heritage Mansion Courtyard (পুরানো কলকাতার ঐতিহ্যবাহী বনেদি বাড়ির উঠান)",
        "Ruined Zamindar Mansion with Banyan Roots (বটগাছের শিকড়ে জড়ানো ঐতিহাসিক জমিদার বাড়ি)",
        "Antique Marble Dining Hall with Stained Glass (রঙিন কাচের ক্যাবিনেটযুক্ত মার্বেল ডাইনিং হল)",
        "Heritage Rooftop Overlooking Ganga Ghat (গঙ্গার বাঁকে মুখ করা জমিদার বাড়ির খোলা ছাদ)",
        "Traditional Clay Oven Kitchen Courtyard (গ্রামের বনেদি বাড়ির ঢেঁকি ও মাটির উনুনের উঠান)",
        "Antique Sunlit Corridor with Green Louvre Windows (সবুজ কাঠের খড়খড়ি দেওয়া রোদের করিডোর)",
        "Custom (কাস্টম ডেসক্রিপশন)"
    ],
    "Bengal Villages, Riverbanks & Ganga Ghats (বাংলার শান্ত গ্রাম, নদী ও গঙ্গার বাঁধাল ঘাট)": [
        "Heritage Ghat on River Ganges (গঙ্গার ঐতিহ্যবাহী বাঁধাল ঘাট ও প্রদীপ)",
        "Serene Rural Riverbank at Sunset (সূর্যাস্তের উন্মুক্ত নদীর পাড় ও শান্ত ঢেউ)",
        "Traditional Wooden Boat on River (শান্ত নদীতে পালতোলা কাঠের দেশি নৌকা)",
        "Realistic Village Mud Trail with Greenery (বাস্তবসম্মত সবুজ গাছপালায় ঘেরা মেঠো পথ)",
        "Traditional Village Concrete Road (ছায়াময় গ্রামের বাঁধানো পাকা রাস্তা)",
        "Rainy Village Road with Lush Wet Foliage (বৃষ্টিভেজা রূপসী গ্রামের রাস্তা ও সতেজ প্রকৃতি)",
        "Traditional Bengali Village Thatched Home (মাটির দেওয়াল ও খড়ের ছাওয়া গ্রামীণ উঠান)",
        "Bamboo & Jute Cottage in Forest Edge (বাঁশ ও পাটের তৈরি শান্ত প্রান্তিক কুটির)",
        "Traditional Handloom Weaving Village (ঐতিহ্যবাহী তাঁত পল্লি ও রঙিন সুতার রোদ্দুর)",
        "Rural Paddy Field Trail (কচি ধানের সবুজ খেতের মেঠো আলপথ)",
        "Lotus Covered Village Pond at Morning (সকালের পদ্ম ও শাপলায় ভরা গ্রামের শান্ত দীঘি)",
        "Misty Riverbank with Kashbon White Feathers (শরতের সাদা কাশফুলে ভরা নদীর পাড়)",
        "Rural Wooden Footbridge Over Canal (খাল বা বিলের ওপর বাঁশের সাঁকো ও হিজল বন)",
        "Fishermen Boat Pier at Golden Hour (গোধূলির আলোয় জেলেদের নৌকার ঘাট)",
        "Banyan Tree Chatal Village Gathering Spot (বটবৃক্ষের বাঁধানো শান্ত গ্রামীণ চাতাল)",
        "Custom (কাস্টম ডেসক্রিপশন)"
    ],
    "Puja Mandaps & Festive Celebrations (পূজামণ্ডপ, বিবাহ ও বর্ণিল উৎসব)": [
        "Puja Mandap with Intricate Alpona Floor (পূজামণ্ডপ ও আলপনা আঁকা মেঝে)",
        "Grand Wedding Mandap with Marigold Flowers (গাঁদা ও জুঁই ফুলে সাজানো বিবাহ মণ্ডপ)",
        "Fairy Lights Canopy Open Night Roof (হাজারো ফেয়ারি লাইটে সজ্জিত উৎসবের ছাদ)",
        "Royal Sangeet Stage with Crystal Chandeliers (ঝাড়বাতি অলঙ্কৃত সঙ্গীত ও মেহেন্দির স্টেজ)",
        "Traditional Fresh Flower Tunnel Entrance (তাজা রজনীগন্ধা ও গাঁদা ফুলের তোরণ সুড়ঙ্গ)",
        "Haldi Ceremony Yellow Marigold & Bamboo Backdrop (হলুদ উৎসবের গাঁদা ফুল ও বাঁশের ব্যাকড্রপ)",
        "Royal Reception Stage with Mirror Work (আয়না ও ফুল সজ্জিত বিলাসবহুল রিসেপশন স্টেজ)",
        "Lantern Illuminated Festival Night Garden (ফানুস ও লণ্ঠনে আলোকিত উৎসবের বাগান)",
        "Rose & Jasmine Wall Floral Backdrop (গোলাপ ও বেলি ফুলের তৈরি ওয়াল ব্যাকড্রপ)",
        "Diya Lighted Festival Courtyard with Rangoli (হাজারো মাটির প্রদীপ ও রঙিন রঙ্গোলির উঠান)",
        "Traditional Brass Urli with Floating Marigolds (ভাসমান গাঁদা ফুল ও প্রদীপের পিতলের পাত্র)",
        "Festive Carnival Fair with Ferris Wheel Lights (নাগরদোলা ও রঙিন আলোর মেলার মাঠ)",
        "Grand Royal Wedding Entrance Floral Arch (রাজকীয় বিবাহের তাজা ফুলের তোরণ ফটক)",
        "Golden Sequin & Crystal Shimmer Stage (চকচকে গোল্ডেন সিক্যুইন ও ক্রিস্টাল ওয়াল)",
        "Bengali Sindoor Khela Puja Arena (বিজয়া দশমীর সিঁদুর খেলার আনন্দমুখর মণ্ডপ প্রাঙ্গণ)",
        "Custom (কাস্টম ডেসক্রিপশন)"
    ],
    "Natural Landscapes & Scenic Open Air (উন্মুক্ত প্রকৃতি, সরিষা খেত ও বন)": [
        "Rural Mustard Flower Field (সরিষে খেতের দিগন্ত বিস্তৃত হলুদ প্রান্তর)",
        "Sunlit Wildflower Open Meadow (বুনো ফুলে ভরা প্রাকৃতিক উন্মুক্ত সবুজ প্রান্তর)",
        "Lavender Flower Field Horizon (সুগন্ধি বেগুনি ল্যাভেন্ডারের দিগন্ত বিস্তৃত খেত)",
        "Sunny Beach with Soft Golden Waves (সমুদ্রের নরম ঢেউ ও সূর্যাস্তের সোনালী বালুচর)",
        "Autumn Maple Leaf Forest Trail (শরতের বর্ণিল লাল-হলুদ পাতার অরণ্য পথ)",
        "Misty Pine Forest Pathway in Morning (পাইন বনের স্নিগ্ধ কুয়াশাচ্ছন্ন পাহাড়ি পথ)",
        "Blooming Cherry Blossom Pink Park (চেরি ব্লসম ফুলে সুসজ্জিত বসন্তের পার্ক)",
        "Cascading Forest Waterfall Pool (ঝরনার স্ফটিক স্বচ্ছ জলধারা ও পাথুরে বেসিন)",
        "Bamboo Forest Sunlit Canopy Trail (সবুজ বাঁশ বনের ছায়াময় নির্জন রোদের পথ)",
        "Snowy Mountain Peaks in Distance (দূর নীল তুষারাবৃত হিমালয়ের পর্বতমালা)",
        "Exotic Botanical Garden Greenhouse (কাচের তৈরি বহিরাগত ভিক্টোরিয়ান গ্রিনহাউস)",
        "High Cliff Ocean Sunset View (সমুদ্রের ওপর উঁচু পাহাড়ের চূড়া থেকে সূর্যাস্ত)",
        "Tea Garden Slopes with Green Terrace (সবুজ ঢেউখেলানো পাহাড়ের চা বাগান)",
        "Lotus Lake in Morning Mist (সকালের কুয়াশায় পদ্মফুলের শান্ত হ্রদ)",
        "Sunlit Desert Dunes at Golden Hour (সূর্যাস্তের আলোয় সোনালী বালিয়াড়ির মরু প্রান্তর)",
        "Custom (কাস্টম ডেসক্রিপশন)"
    ],
    "Historic Temples & Sacred Heritage (ঐতিহাসিক প্রাচীন মন্দির ও আধ্যাত্মিক স্থান)": [
        "Terracotta Temple Courtyard with Carvings (টেরাকোটা ইটের অলঙ্কৃত বিষ্ণুপুর মন্দির প্রাঙ্গণ)",
        "South Indian Granite Temple Corridor (বিশাল পাথুরে খোদাই করা দ্রাবিড় মন্দির করিডোর)",
        "Ancient Temple Sanctum with Brass Bell (পিতলের ঝুলন্ত ঘণ্টা ও প্রদীপের মন্দিরের গর্ভগৃহ)",
        "Stone Carved Temple Tank with Sacred Water (ঐতিহাসিক পাথরের তৈরি মন্দির পুষ্করিণী)",
        "Varanasi Ghat Stairs in Morning Fog (ভোরবেলার কুয়াশাচ্ছন্ন বারাণসীর গঙ্গা ঘাট)",
        "Ancient Cave Temple with Sculpted Pillars (পাহাড়ে খোদাই করা প্রাচীন গুহামন্দির ও স্তম্ভ)",
        "Khajuraho Stone Carved Monument (খোদাই করা প্রাচীন পাথুরে স্থাপত্য প্রাঙ্গণ)",
        "Golden Temple Sacred Pool Pier (অমৃতসরের স্বর্ণমন্দিরের চারপাশের পবিত্র সরোবর)",
        "Kamakhya Hilltop Temple Terrace (পাহাড়ের চূড়ার পবিত্র কামাখ্যা মন্দিরের চাতাল)",
        "Konark Sun Temple Stone Chariot Wheels (কোণার্ক সূর্য মন্দিরের বিশাল পাথরের রথের চাকা)",
        "Incense Smoke Filled Sacred Sanctum (ধূপের সুগন্ধি ধোঁয়া ও প্রদীপে আলোকিত দেবালয়)",
        "Riverside Buddhist Monastery Veranda (নদীর পাড়ে বৌদ্ধ মঠের লাল থামযুক্ত বারান্দা)",
        "Himalayan Hilltop Shrine with Prayer Flags (রঙিন প্রেয়ার ফ্ল্যাগে ঘেরা পাহাড়ি মন্দির)",
        "Ancient Stone Stupa Pathway (প্রাচীন পাথুরে স্তূপ ও শান্ত ধ্যানস্থ চত্বর)",
        "Temple Courtyard Under Peepal Tree (অশ্বত্থ গাছের তলায় প্রদীপ খচিত মন্দিরের চাতাল)",
        "Custom (কাস্টম ডেসক্রিপশন)"
    ],
    "Modern Luxury, Ballrooms & Urban Spaces (আধুনিক বিলাসবহুল আর্কিটেকচার ও বলরুম)": [
        "Grand Palace Ballroom with Chandeliers (ঝাড়বাতি অলঙ্কৃত রাজকীয় মার্বেল বলরুম)",
        "Modern Luxury Living Room with City Skyline View (আধুনিক বিলাসবহুল ড্রয়িং রুম ও স্কাইলাইন)",
        "Modern High-Rise Penthouse Open Balcony (পেন্টহাউসের কাচের রেলিংযুক্ত খোলা বেলকনি)",
        "Five-Star Luxury Hotel Suite (পাঁচ তারকা হোটেলের রয়্যাল প্রেসিডেনশিয়াল স্যুট)",
        "Vintage Kolkata Tram Track Street (পুরানো কলকাতার ট্রাম লাইন ও ঐতিহাসিক দালানকোঠা)",
        "Parisian Cobblestone Romantic Alley (প্যারিসের ভিনটেজ পাথরের গলি ও ক্যাফে)",
        "Modern City Boulevard at Dusk (সন্ধ্যার আলোয় আলোকিত আধুনিক মেট্রোপলিটন শহরের পথ)",
        "Rainy Monsoon City Street with Reflections (বৃষ্টিভেজা শহরের রাস্তা ও নিয়ন বাতির প্রতিফলন)",
        "Minimalist High-Fashion Photo Studio (মিনিমালিস্ট হাই-কী ফ্যাশন স্টুডিও সেট)",
        "Velvet Luxury Lounge with Brass Trim (ভেলভেট সোফা ও ব্রাস ফিনিশ লাক্সারি লাউঞ্জ)",
        "Industrial Red Brick Wall Loft Studio (ইন্ডাস্ট্রিয়াল রেড ব্রিক ও বড় জানালার লফ্ট)",
        "Tropical Resort Infinity Poolside (ইনফিনিটি সুইমিং পুল ও পাম গাছে ঘেরা লাক্সারি রিসোর্ট)",
        "Marble & Brass Geometric Luxury Backdrop (মার্বেল ও সোনালী ব্রাসের আধুনিক লাক্সারি দেয়াল)",
        "Sunlit Loft Window with Sheer Drapes (বিশাল জানালার সূর্যালোক ও সাদা নরম পর্দা)",
        "High-End Art Gallery with Spotlight Exhibits (স্পটলাইটে আলোকিত আর্ট গ্যালারির প্রদর্শনী হল)",
        "Custom (কাস্টম ডেসক্রিপশন)"
    ],
    "Cinematic Dance Stages, Studios & Night Sets (সিনেমাটিক ড্যান্স স্টেজ ও স্টুডিও)": [
        "Grand Royal Dance Stage with Spotlights (গ্ল্যামারাস রাজকীয় ড্যান্স স্টেজ)",
        "Bollywood Musical Stage with Fog & Lights (বলিউড রয়্যাল ড্যান্স স্টেজ ও রঙিন আলো)",
        "Open Palace Courtyard Dance Stage (কথক ও ভারতনাট্যম নৃত্যের খোলা পাথুরে মঞ্চ)",
        "Festive Garba & Dandiya Arena (উৎসবের ডান্ডিয়া ও গরবা ড্যান্স গ্রাউন্ড)",
        "Modern Mirror Dance Studio with Neon Glow (আয়না খচিত আধুনিক নিয়ন ড্যান্স স্টুডিও)",
        "Rainy Open Street Dance Floor with Backlight (বৃষ্টিস্নাত ওপেন ড্যান্স ফ্লোর ও ব্যাকলাইট)",
        "Royal Marble Ballroom Dance Floor (রয়্যাল মার্বেল বলরুম ড্যান্স ফ্লোর)",
        "Neon Cyberpunk Night Studio (আধুনিক নিয়ন ও সাইবারপাঙ্ক গ্ল্যামার স্টুডিও)",
        "Satin Curtain Runway Fashion Backdrop (স্যাটিন পর্দা অলঙ্কৃত ফ্যাশন র‍্যাম্প স্টেজ)",
        "Fairy Lights & Candlelit Bokeh Stage (হাজারো ফেয়ারি লাইট ও মোমবাতির বোকাহ মঞ্চ)",
        "Floating Lantern Night Sky Over Terrace (রাতের আকাশে হাজারো উড়ন্ত ফানুসের দৃশ্য)",
        "Celestial Starry Milky Way Night Sky (তারাভরা ছায়াপথ ও নীহারিকাময় রাতের আকাশ)",
        "Geometric Light & Shadow Studio Setup (জ্যামিতিক আলো-ছায়ার ড্রামাটিক স্টুডিও সেটআপ)",
        "Abstract Pastel Drop Photography Studio (প্যাস্টেল শেড ব্যাকড্রপ পোর্ট্রেট স্টুডিও)",
        "Futuristic Metallic Glossy Stage (মেটালিক ও চকচকে ফিউচারিস্টিক স্টুডিও সেট)",
        "Custom (কাস্টম ডেসক্রিপশন)"
    ],
    "All Backgrounds (একসাথে সকল ১২০টি স্থান)": [
        "Royal Palace Grand Corridor (রাজপ্রাসাদের কারুকার্যময় করিডোর ও খিলান)",
        "Rajasthani Fort Courtyard with Jharokhas (রাজস্থানি কেল্লার খোলা অলঙ্কৃত উঠান ও ঝরোখা)",
        "Mughal White Marble Pavilion (মুঘল সাদা মার্বেল প্যাভিলিয়ন ও তোরণ)",
        "Royal Darbar Hall with Golden Pillars (স্বর্ণপিলারে ঘেরা রাজকীয় দরবার হল)",
        "Historic Haveli Courtyard with Carved Balconies (ঐতিহ্যবাহী হাভেলি প্রাঙ্গণ ও কাঠের কাজ)",
        "Luxury Palace Open Terrace at Sunset (সূর্যাস্তের সময় প্রাসাদের উন্মুক্ত মার্বেল ছাদ)",
        "Carved Wooden Jharokha Window of Fort (কেল্লার খোদাই করা কাঠের ঝরোখা জানালা)",
        "Ancient Royal Fountain Garden (রাজপ্রাসাদের ফোয়ারা বাগান ও পথ)",
        "Heritage Museum Corridor with Artifacts (ঐতিহাসিক মিউজিয়াম গ্যালারি ও তৈলচিত্র)",
        "Mughal Shalimar Garden Pathways (মুঘল শালিমার বাগানের নহবতখানা ও ঝরনা)",
        "Jaipur Hawa Mahal Pink Facade (জয়পুর হাওয়া মহলের গোলাপি মার্বেল নকশা)",
        "Udaipur Lake Palace Balcony View (উদয়পুর লেক প্যালেসের জলবেষ্টিত বারান্দা)",
        "Ancient Fort Watchtower Overlooking Valley (উপত্যকার পানে চেয়ে থাকা প্রাচীন দুর্গ প্রাচীর)",
        "Royal Stepwell Baoli with Geometric Stairs (প্রাচীন রাজকীয় বাওলি ও জ্যামিতিক সিঁড়ি)",
        "Ornate Gold-Leaf Palace Archway (সোনার পাত খচিত রাজকীয় প্রবেশদ্বার তোরণ)",
        "Zamindar Palace Thakur Dalan (জমিদার বাড়ির ঐতিহ্যবাহী ঠাকুরদালান ও থাম)",
        "Colonial Zamindar Mansion Veranda (ঔপনিবেশিক জমিদার বাড়ির অলঙ্কৃত খাম্বার বারান্দা)",
        "Traditional Clay Courtyard with Tulsi Manch (তুলসিমঞ্চ ও শুভ আলপনা সজ্জিত উঠান)",
        "Traditional Bengali Living Room with Antique Palanka (ঐতিহ্যবাহী সেগুন কাঠের খোদাই করা পালঙ্ক ও ঘর)",
        "Vintage Victorian Library Room in Mansion (কাষ্ঠমণ্ডিত পুরানো লাইব্রেরি ও বইয়ের র্যাক)",
        "Zamidari Jalsaghar Music Room with Belgian Glass (বেলজিয়াম কাচ ও ঝাড়বাতি সজ্জিত জলসাঘর)",
        "Heritage Inner Courtyard with Red Oxide Floor (লাল অক্সাইড মেঝে ও পাথরের স্তম্ভের অন্দরমহল)",
        "Zamindar Veranda Overlooking Lush Garden (সবুজ বাগানমুখী রাজকীয় খড়খড়িযুক্ত বারান্দা)",
        "Vintage Grand Staircase with Iron Railing (কাস্ট আয়রনের কারুকার্যময় প্যাঁচানো বড় সিঁড়ি)",
        "Old Kolkata Heritage Mansion Courtyard (পুরানো কলকাতার ঐতিহ্যবাহী বনেদি বাড়ির উঠান)",
        "Ruined Zamindar Mansion with Banyan Roots (বটগাছের শিকড়ে জড়ানো ঐতিহাসিক জমিদার বাড়ি)",
        "Antique Marble Dining Hall with Stained Glass (রঙিন কাচের ক্যাবিনেটযুক্ত মার্বেল ডাইনিং হল)",
        "Heritage Rooftop Overlooking Ganga Ghat (গঙ্গার বাঁকে মুখ করা জমিদার বাড়ির খোলা ছাদ)",
        "Traditional Clay Oven Kitchen Courtyard (গ্রামের বনেদি বাড়ির ঢেঁকি ও মাটির উনুনের উঠান)",
        "Antique Sunlit Corridor with Green Louvre Windows (সবুজ কাঠের খড়খড়ি দেওয়া রোদের করিডোর)",
        "Heritage Ghat on River Ganges (গঙ্গার ঐতিহ্যবাহী বাঁধাল ঘাট ও প্রদীপ)",
        "Serene Rural Riverbank at Sunset (সূর্যাস্তের উন্মুক্ত নদীর পাড় ও শান্ত ঢেউ)",
        "Traditional Wooden Boat on River (শান্ত নদীতে পালতোলা কাঠের দেশি নৌকা)",
        "Realistic Village Mud Trail with Greenery (বাস্তবসম্মত সবুজ গাছপালায় ঘেরা মেঠো পথ)",
        "Traditional Village Concrete Road (ছায়াময় গ্রামের বাঁধানো পাকা রাস্তা)",
        "Rainy Village Road with Lush Wet Foliage (বৃষ্টিভেজা রূপসী গ্রামের রাস্তা ও সতেজ প্রকৃতি)",
        "Traditional Bengali Village Thatched Home (মাটির দেওয়াল ও খড়ের ছাওয়া গ্রামীণ উঠান)",
        "Bamboo & Jute Cottage in Forest Edge (বাঁশ ও পাটের তৈরি শান্ত প্রান্তিক কুটির)",
        "Traditional Handloom Weaving Village (ঐতিহ্যবাহী তাঁত পল্লি ও রঙিন সুতার রোদ্দুর)",
        "Rural Paddy Field Trail (কচি ধানের সবুজ খেতের মেঠো আলপথ)",
        "Lotus Covered Village Pond at Morning (সকালের পদ্ম ও শাপলায় ভরা গ্রামের শান্ত দীঘি)",
        "Misty Riverbank with Kashbon White Feathers (শরতের সাদা কাশফুলে ভরা নদীর পাড়)",
        "Rural Wooden Footbridge Over Canal (খাল বা বিলের ওপর বাঁশের সাঁকো ও হিজল বন)",
        "Fishermen Boat Pier at Golden Hour (গোধূলির আলোয় জেলেদের নৌকার ঘাট)",
        "Banyan Tree Chatal Village Gathering Spot (বটবৃক্ষের বাঁধানো শান্ত গ্রামীণ চাতাল)",
        "Puja Mandap with Intricate Alpona Floor (পূজামণ্ডপ ও আলপনা আঁকা মেঝে)",
        "Grand Wedding Mandap with Marigold Flowers (গাঁদা ও জুঁই ফুলে সাজানো বিবাহ মণ্ডপ)",
        "Fairy Lights Canopy Open Night Roof (হাজারো ফেয়ারি লাইটে সজ্জিত উৎসবের ছাদ)",
        "Royal Sangeet Stage with Crystal Chandeliers (ঝাড়বাতি অলঙ্কৃত সঙ্গীত ও মেহেন্দির স্টেজ)",
        "Traditional Fresh Flower Tunnel Entrance (তাজা রজনীগন্ধা ও গাঁদা ফুলের তোরণ সুড়ঙ্গ)",
        "Haldi Ceremony Yellow Marigold & Bamboo Backdrop (হলুদ উৎসবের গাঁদা ফুল ও বাঁশের ব্যাকড্রপ)",
        "Royal Reception Stage with Mirror Work (আয়না ও ফুল সজ্জিত বিলাসবহুল রিসেপশন স্টেজ)",
        "Lantern Illuminated Festival Night Garden (ফানুস ও লণ্ঠনে আলোকিত উৎসবের বাগান)",
        "Rose & Jasmine Wall Floral Backdrop (গোলাপ ও বেলি ফুলের তৈরি ওয়াল ব্যাকড্রপ)",
        "Diya Lighted Festival Courtyard with Rangoli (হাজারো মাটির প্রদীপ ও রঙিন রঙ্গোলির উঠান)",
        "Traditional Brass Urli with Floating Marigolds (ভাসমান গাঁদা ফুল ও প্রদীপের পিতলের পাত্র)",
        "Festive Carnival Fair with Ferris Wheel Lights (নাগরদোলা ও রঙিন আলোর মেলার মাঠ)",
        "Grand Royal Wedding Entrance Floral Arch (রাজকীয় বিবাহের তাজা ফুলের তোরণ ফটক)",
        "Golden Sequin & Crystal Shimmer Stage (চকচকে গোল্ডেন সিক্যুইন ও ক্রিস্টাল ওয়াল)",
        "Bengali Sindoor Khela Puja Arena (বিজয়া দশমীর সিঁদুর খেলার আনন্দমুখর মণ্ডপ প্রাঙ্গণ)",
        "Rural Mustard Flower Field (সরিষে খেতের দিগন্ত বিস্তৃত হলুদ প্রান্তর)",
        "Sunlit Wildflower Open Meadow (বুনো ফুলে ভরা প্রাকৃতিক উন্মুক্ত সবুজ প্রান্তর)",
        "Lavender Flower Field Horizon (সুগন্ধি বেগুনি ল্যাভেন্ডারের দিগন্ত বিস্তৃত খেত)",
        "Sunny Beach with Soft Golden Waves (সমুদ্রের নরম ঢেউ ও সূর্যাস্তের সোনালী বালুচর)",
        "Autumn Maple Leaf Forest Trail (শরতের বর্ণিল লাল-হলুদ পাতার অরণ্য পথ)",
        "Misty Pine Forest Pathway in Morning (পাইন বনের স্নিগ্ধ কুয়াশাচ্ছন্ন পাহাড়ি পথ)",
        "Blooming Cherry Blossom Pink Park (চেরি ব্লসম ফুলে সুসজ্জিত বসন্তের পার্ক)",
        "Cascading Forest Waterfall Pool (ঝরনার স্ফটিক স্বচ্ছ জলধারা ও পাথুরে বেসিন)",
        "Bamboo Forest Sunlit Canopy Trail (সবুজ বাঁশ বনের ছায়াময় নির্জন রোদের পথ)",
        "Snowy Mountain Peaks in Distance (দূর নীল তুষারাবৃত হিমালয়ের পর্বতমালা)",
        "Exotic Botanical Garden Greenhouse (কাচের তৈরি বহিরাগত ভিক্টোরিয়ান গ্রিনহাউস)",
        "High Cliff Ocean Sunset View (সমুদ্রের ওপর উঁচু পাহাড়ের চূড়া থেকে সূর্যাস্ত)",
        "Tea Garden Slopes with Green Terrace (সবুজ ঢেউখেলানো পাহাড়ের চা বাগান)",
        "Lotus Lake in Morning Mist (সকালের কুয়াশায় পদ্মফুলের শান্ত হ্রদ)",
        "Sunlit Desert Dunes at Golden Hour (সূর্যাস্তের আলোয় সোনালী বালিয়াড়ির মরু প্রান্তর)",
        "Terracotta Temple Courtyard with Carvings (টেরাকোটা ইটের অলঙ্কৃত বিষ্ণুপুর মন্দির প্রাঙ্গণ)",
        "South Indian Granite Temple Corridor (বিশাল পাথুরে খোদাই করা দ্রাবিড় মন্দির করিডোর)",
        "Ancient Temple Sanctum with Brass Bell (পিতলের ঝুলন্ত ঘণ্টা ও প্রদীপের মন্দিরের গর্ভগৃহ)",
        "Stone Carved Temple Tank with Sacred Water (ঐতিহাসিক পাথরের তৈরি মন্দির পুষ্করিণী)",
        "Varanasi Ghat Stairs in Morning Fog (ভোরবেলার কুয়াশাচ্ছন্ন বারাণসীর গঙ্গা ঘাট)",
        "Ancient Cave Temple with Sculpted Pillars (পাহাড়ে খোদাই করা প্রাচীন গুহামন্দির ও স্তম্ভ)",
        "Khajuraho Stone Carved Monument (খোদাই করা প্রাচীন পাথুরে স্থাপত্য প্রাঙ্গণ)",
        "Golden Temple Sacred Pool Pier (অমৃতসরের স্বর্ণমন্দিরের চারপাশের পবিত্র সরোবর)",
        "Kamakhya Hilltop Temple Terrace (পাহাড়ের চূড়ার পবিত্র কামাখ্যা মন্দিরের চাতাল)",
        "Konark Sun Temple Stone Chariot Wheels (কোণার্ক সূর্য মন্দিরের বিশাল পাথরের রথের চাকা)",
        "Incense Smoke Filled Sacred Sanctum (ধূপের সুগন্ধি ধোঁয়া ও প্রদীপে আলোকিত দেবালয়)",
        "Riverside Buddhist Monastery Veranda (নদীর পাড়ে বৌদ্ধ মঠের লাল থামযুক্ত বারান্দা)",
        "Himalayan Hilltop Shrine with Prayer Flags (রঙিন প্রেয়ার ফ্ল্যাগে ঘেরা পাহাড়ি মন্দির)",
        "Ancient Stone Stupa Pathway (প্রাচীন পাথুরে স্তূপ ও শান্ত ধ্যানস্থ চত্বর)",
        "Temple Courtyard Under Peepal Tree (অশ্বত্থ গাছের তলায় প্রদীপ খচিত মন্দিরের চাতাল)",
        "Grand Palace Ballroom with Chandeliers (ঝাড়বাতি অলঙ্কৃত রাজকীয় মার্বেল বলরুম)",
        "Modern Luxury Living Room with City Skyline View (আধুনিক বিলাসবহুল ড্রয়িং রুম ও স্কাইলাইন)",
        "Modern High-Rise Penthouse Open Balcony (পেন্টহাউসের কাচের রেলিংযুক্ত খোলা বেলকনি)",
        "Five-Star Luxury Hotel Suite (পাঁচ তারকা হোটেলের রয়্যাল প্রেসিডেনশিয়াল স্যুট)",
        "Vintage Kolkata Tram Track Street (পুরানো কলকাতার ট্রাম লাইন ও ঐতিহাসিক দালানকোঠা)",
        "Parisian Cobblestone Romantic Alley (প্যারিসের ভিনটেজ পাথরের গলি ও ক্যাফে)",
        "Modern City Boulevard at Dusk (সন্ধ্যার আলোয় আলোকিত আধুনিক মেট্রোপলিটন শহরের পথ)",
        "Rainy Monsoon City Street with Reflections (বৃষ্টিভেজা শহরের রাস্তা ও নিয়ন বাতির প্রতিফলন)",
        "Minimalist High-Fashion Photo Studio (মিনিমালিস্ট হাই-কী ফ্যাশন স্টুডিও সেট)",
        "Velvet Luxury Lounge with Brass Trim (ভেলভেট সোফা ও ব্রাস ফিনিশ লাক্সারি লাউঞ্জ)",
        "Industrial Red Brick Wall Loft Studio (ইন্ডাস্ট্রিয়াল রেড ব্রিক ও বড় জানালার লফ্ট)",
        "Tropical Resort Infinity Poolside (ইনফিনিটি সুইমিং পুল ও পাম গাছে ঘেরা লাক্সারি রিসোর্ট)",
        "Marble & Brass Geometric Luxury Backdrop (মার্বেল ও সোনালী ব্রাসের আধুনিক লাক্সারি দেয়াল)",
        "Sunlit Loft Window with Sheer Drapes (বিশাল জানালার সূর্যালোক ও সাদা নরম পর্দা)",
        "High-End Art Gallery with Spotlight Exhibits (স্পটলাইটে আলোকিত আর্ট গ্যালারির প্রদর্শনী হল)",
        "Grand Royal Dance Stage with Spotlights (গ্ল্যামারাস রাজকীয় ড্যান্স স্টেজ)",
        "Bollywood Musical Stage with Fog & Lights (বলিউড রয়্যাল ড্যান্স স্টেজ ও রঙিন আলো)",
        "Open Palace Courtyard Dance Stage (কথক ও ভারতনাট্যম নৃত্যের খোলা পাথুরে মঞ্চ)",
        "Festive Garba & Dandiya Arena (উৎসবের ডান্ডিয়া ও গরবা ড্যান্স গ্রাউন্ড)",
        "Modern Mirror Dance Studio with Neon Glow (আয়না খচিত আধুনিক নিয়ন ড্যান্স স্টুডিও)",
        "Rainy Open Street Dance Floor with Backlight (বৃষ্টিস্নাত ওপেন ড্যান্স ফ্লোর ও ব্যাকলাইট)",
        "Royal Marble Ballroom Dance Floor (রয়্যাল মার্বেল বলরুম ড্যান্স ফ্লোর)",
        "Neon Cyberpunk Night Studio (আধুনিক নিয়ন ও সাইবারপাঙ্ক গ্ল্যামার স্টুডিও)",
        "Satin Curtain Runway Fashion Backdrop (স্যাটিন পর্দা অলঙ্কৃত ফ্যাশন র‍্যাম্প স্টেজ)",
        "Fairy Lights & Candlelit Bokeh Stage (হাজারো ফেয়ারি লাইট ও মোমবাতির বোকাহ মঞ্চ)",
        "Floating Lantern Night Sky Over Terrace (রাতের আকাশে হাজারো উড়ন্ত ফানুসের দৃশ্য)",
        "Celestial Starry Milky Way Night Sky (তারাভরা ছায়াপথ ও নীহারিকাময় রাতের আকাশ)",
        "Geometric Light & Shadow Studio Setup (জ্যামিতিক আলো-ছায়ার ড্রামাটিক স্টুডিও সেটআপ)",
        "Abstract Pastel Drop Photography Studio (প্যাস্টেল শেড ব্যাকড্রপ পোর্ট্রেট স্টুডিও)",
        "Futuristic Metallic Glossy Stage (মেটালিক ও চকচকে ফিউচারিস্টিক স্টুডিও সেট)",
        "Custom (কাস্টম ডেসক্রিপশন)"
    ]
};

const backgroundOptions120 = backgroundCategoryMap["All Backgrounds (একসাথে সকল ১২০টি স্থান)"];


// Complete Input Option Cards mapped directly to the 7 Key Elements of a Great AI Prompt
const elementMeta = {
    all: { name: "All (20)", icon: "✨" },
    1: { name: "1. Subject (12)", icon: "👤", label: "Element 1: Subject", class: "tag-1" },
    2: { name: "2. Action (1)", icon: "💃", label: "Element 2: Action", class: "tag-2" },
    3: { name: "3. Style (1)", icon: "🎨", label: "Element 3: Style", class: "tag-3" },
    4: { name: "4. Background (2)", icon: "🏛️", label: "Element 4: Background", class: "tag-4" },
    5: { name: "5. Color (2)", icon: "🌈", label: "Element 5: Color & Light", class: "tag-5" },
    6: { name: "6. Framing (1)", icon: "📐", label: "Element 6: Framing", class: "tag-6" },
    7: { name: "7. Mood (1)", icon: "✨", label: "Element 7: Mood", class: "tag-7" }
};

let activeElementFilter = 'all';

// Professional Camera Framing & Shot Composition Prompt Mapping
const cameraFramingPrompts = {
    "Full Body Standing with 15% Headroom (ফুল বডি - পা থেকে মাথা ও ১৫% হেডরুম)": "Full body standing shot, complete view from head to toe including feet, 15% headroom margin above the head, centered subject",
    "Full Body Wide Cinematic Environment (ফুল বডি ওয়াইড - ৭০% সাবজেক্ট ও ৩০% পরিবেশ)": "Wide-angle full body shot, subject occupies 70% frame center, 30% margin on all sides, complete view from head to toe visible with 15% headroom above head, centered composition",
    "Extreme Wide Shot / Environmental Landscape (এক্সট্রিম ওয়াইড - বিশাল স্থাপত্য ও প্রকৃতির মাঝে পূর্ণ অবয়ব)": "Extreme wide environmental shot, full body subject nestled gracefully within expansive monumental architectural landscape",
    "Half Body Waist-Up Classic Portrait (হাফ বডি - কোমর থেকে মাথা পর্যন্ত ক্লাসিক পোর্ট্রেট)": "Classic half-body waist-up portrait shot, sharp focus on costume details, jewelry and facial expression, centered framing",
    "Medium Shot / Knee-Up Cowboy Shot (মিডিয়াম শট - হাঁটু থেকে মাথা পর্যন্ত ফ্যাশন ফ্রেম)": "Medium shot, framed from just above the knees to head, capturing body curves, saree pleats, and elegant posture",
    "Tight Close-Up Face & Jewelry (টাইট ক্লোজ-আপ - মুখমণ্ডল, চোখ ও গহনার সূক্ষ্ম ডিটেইল)": "Intimate close-up portrait, tightly framed on expressive face, sharp focus on eyes, bindi, nose ring (nath) and earrings",
    "Extreme Macro Close-Up (এক্সট্রিম ম্যাক্রো - চোখ, কাজল ও নাকের নোলকের অতি-সূক্ষ্ম রূপ)": "Extreme macro detail shot, hyper-focused on eyes, kohl eyeliner texture, eyelashes and intricate nose ring gemstone details",
    "Low Angle Heroic Stance (লো-অ্যাঙ্গেল - নিচ থেকে তোলা রাজকীয় লম্বা পোজ)": "Dramatic low-angle upward perspective shot, empowering regal towering silhouette, emphasizing statuesque presence and flowing garments",
    "High Angle Looking Down (হাই-অ্যাঙ্গেল - ওপর থেকে তোলা নম্র লাবণ্যময় ভঙ্গি)": "High-angle perspective looking gently down, soft flattering facial angles, emphasizing floor drape of saree and delicate posture",
    "Over-The-Shoulder Glance Framing (ওভার-দ্য-শোল্ডার - কাঁধের ওপর দিয়ে তাকানো সিনেমাটিক ফ্রেম)": "Cinematic over-the-shoulder framing, capturing coy glance backward, shallow depth of field with soft bokeh background",
    "Dutch Angle / Tilted Dynamic Frame (ডাচ অ্যাঙ্গেল - নাটকীয় হেলানো সিনেমাটিক ফ্রেম)": "Dynamic Dutch angle framing, slightly tilted horizon creating cinematic tension, artistic rhythm and fluid dance motion",
    "Symmetrical Centered Architectural Framing (প্রতিসাম্য সেন্টার্ড - তোরণ বা খিলানের মাঝে সুষম পোজ)": "Perfect symmetrical centered composition, framed symmetrically within ornate palace archway and majestic architectural pillars",
    "Rule of Thirds Off-Center Aesthetic (রুল অফ থার্ডস - ফ্রেমের এক-তৃতীয়াংশে মার্জিত অবস্থান)": "Artistic Rule of Thirds off-center composition, subject gracefully placed along the right vertical third, negative space in the backdrop",
    "Bust / Chest-Up Headshot (বাস্ট শট - বুক থেকে মাথা ও গলার হার ফোকাস)": "Bust headshot framed from mid-chest to head, highlighting intricate necklace jewelry, neckline embroidery and radiant smile",
    "Full Body Top-Down Flatlay / Bird's Eye View (টপ-ডাউন বার্ডস আই - ওপর থেকে শাড়ির গোল ঘেরের রূপ)": "Direct overhead bird's eye view perspective, full body seated gracefully with full circular spread of saree fabric and floral floor",
    "Profile / Side Silhouette View (প্রোফাইল সাইড ভিউ - পাশে থেকে শার্প জ-লাইন ও নাকের নথ)": "Side profile silhouette view, sharply defined jawline, classical Indian facial profile featuring nath, jhumka and hair braid",
    "Three-Quarter Angle Portrait (থ্রি-কোয়ার্টার অ্যাঙ্গেল - ৪৫ ডিগ্রি মার্জিত কোণ)": "Classic three-quarter 45-degree angle portrait, beautifully accentuating facial cheekbones, body posture and saree drape",
    "Depth of Field Leading Lines (লিডিং লাইনস - করিডোর বা সিঁড়ির রেখায় গভীর ফ্রেম)": "Leading lines composition, palace corridor pillars and floor patterns converging toward the subject, deep cinematic perspective",
    "Cinematic Anamorphic Widescreen 2.39:1 (অ্যানামরফিক সিনেমাস্কোপ ওয়াইড ফ্রেম)": "Cinematic anamorphic widescreen composition, widescreen letterbox feel, horizontal flare and professional cinema depth",
    "Framing Within a Frame / Archway Peeking (ফ্রেমের ভেতর ফ্রেম - জানালার ঝরোখা বা তোরণের আড়াল)": "Framed-within-a-frame composition, naturally framed by ornate carved wooden jharokha window borders, creating depth and intimacy",
    "Ground-Level Low Angle Tracking (গ্রাউন্ড লেভেল - একদম মেঝে থেকে আলতা রাঙা পা ও নূপুর ফ্রেম)": "Ground-level low angle perspective, camera positioned near the floor capturing red alta feet, ankle bells, and flowing saree hemline",
    "Golden Ratio Spiral Composition (গোল্ডেন রেশিও - সোনালী অনুপাতের নান্দনিক ভারসাম্য)": "Golden ratio Fibonacci spiral composition, natural harmonious visual flow leading the viewer's eye across flowing fabric to the face",
    "Custom (কাস্টম ডেসক্রিপশন)": "Custom artistic camera framing and perspective",
    "Full Body (মাথা থেকে পা পর্যন্ত সম্পূর্ণ ও মাথার উপর ১৫% ফাঁকা)": "Full body standing shot, complete view from head to toe including feet, 15% headroom margin above the head, centered subject",
    "Full Body Wide (৭০% জুমড আউট - চারপাশে ৩০% মেঠো প্রান্তর)": "Wide-angle full body shot, subject occupies 70% frame center, 30% margin on all sides, complete view from head to toe visible with 15% headroom above head, centered composition",
    "Half Body (কোমর থেকে ওপরের অংশ)": "Classic half-body waist-up portrait shot, sharp focus on costume details, jewelry and facial expression, centered framing",
    "Close-Up Portrait (মুখমণ্ডল ও গহনার ক্লোজ-আপ)": "Close-up facial portrait framing, centered composition"
};

const dropdownData = {
    // Element 1: Subject (Character, Outfits, Draping, Jewelry, Hair, Makeup)
    outfitType: { element: 1, label: "Outfit Category (পোশাকের ধরন)", options: Object.keys(outfitStylesMap) },
    outfitStyle: { element: 1, label: "Style / Drape / Fabric (কাপড় ও পরার ধরন)", options: outfitStylesMap["Saree (শাড়ি)"] },
    outfitColor: { element: 1, label: "Outfit Color (১০০টি পোশাকের রঙ)", options: Object.keys(colorPalette) },
    dupattaStyle: { element: 1, label: "Dupatta / Veil / Orna (ওড়না বা ওড়নার স্টাইল)", options: ["Sheer Net Dupatta on Head (মাথায় ঘৌংঘাট / ওড়না)", "Draped over Both Shoulders (দুই কাঁধে ওড়না)", "One-Side Drape (একপাশে ওড়না)", "Royal Long Veil / Train (রাজকীয় লম্বা ওড়না)", "No Dupatta / Orna (ওড়না ছাড়া)", "Custom (কাস্টম ডেসক্রিপশন)"] },
    waistAccessory: { element: 1, label: "Waist Belt / Kamarbandh (কোমরবন্ধ ও রঙের ভ্যারাইটি)", options: [
        "Classic Yellow Gold Kamarbandh (চকচকে সোনালী কোমরবন্ধ)",
        "Antique Temple Gold Kamarbandh (অ্যান্টিক ম্যাট গোল্ড কোমরবন্ধ)",
        "Rose Gold Kamarbandh (রোজ গোল্ড আধুনিক কোমরবন্ধ)",
        "Silver Metallic Kamarbandh (রূপালী জরির কোমরবন্ধ)",
        "Oxydised Silver / German Silver Belt (অক্সিডাইজড রূপালী বোহো কোমরবন্ধ)",
        "Pearl White Multi-Layered Waist Chain (মুক্তা খচিত শুভ্র সাদা কোমরবন্ধ)",
        "Ruby Red Gemstone Studded Kamarbandh (রুবি লাল রত্নখচিত কোমরবন্ধ)",
        "Emerald Green Gemstone Kamarbandh (পান্না সবুজ রত্নখচিত কোমরবন্ধ)",
        "Navratna Multi-Color Stone Kamarbandh (নবরত্ন বহু রঙের রত্ন কোমরবন্ধ)",
        "Red Velvet Embroidered Belt (লাল ভেলভেট এমব্রয়ডারি বেল্ট)",
        "Maroon Zari Work Fabric Belt (মেরুন জরি কাজ করা ফ্যাব্রিক বেল্ট)",
        "Rani Pink Silk Embroidered Belt (রানি গোলাপী সিল্ক বেল্ট)",
        "Royal Blue Sequin Belt (রয়্যাল ব্লু সিক্যুইন বেল্ট)",
        "Emerald Green Zari Belt (সবুজ জরি বর্ডার বেল্ট)",
        "Golden Sequin Shimmer Belt (চকচকে সোনালী সিক্যুইন বেল্ট)",
        "Classic Jet Black Leather Belt with Gold Buckle (কালো চামড়ার আধুনিক গোল্ড বাকল বেল্ট)",
        "Tan / Camel Brown Leather Belt (ট্যান ব্রাউন লেদার বেল্ট)",
        "Ivory & Nude Slim Belt (আইভরি ও নিউড স্লিম বেল্ট)",
        "No Waist Belt (কোমরবন্ধ ছাড়া স্বাভাবিক পোশাক)",
        "Custom (কাস্টম ডেসক্রিপশন)"
    ] },
    headJewellery: { element: 1, label: "Head Jewellery (মাথার গয়না ও অলঙ্কার)", options: [
        "Maang Tikka (মাংটিকা)",
        "Matha Patti (মাথা পট্টি)",
        "Traditional Bengali Tiara & Tikli (ঐতিহ্যবাহী টায়রা ও টিকলি)",
        "Bridal Shola & Gold Mukut (বাঙালি ব্রাইডাল শোলার মুকুট)",
        "Rajasthani Borla (রাজস্থানি বোরলা মাংটিকা)",
        "Sheeshpatti Headband (রাজকীয় শীশপট্টি হেডব্যান্ড)",
        "Multi-Layered Royal Matha Patti (মাল্টি-লেয়ার্ড রাজকীয় মাথা পট্টি)",
        "Passa / Jhumar (পাশা / ঝুমার)",
        "Surya & Chandra Hair Brooches (দক্ষিণী সূর্য ও চন্দ্র হেয়ার ব্রোচ)",
        "South Indian Jada Billa (বেণীর জন্য রত্নখচিত চোট্টি ও বিল্লাই)",
        "Royal Hair Bun Juda Pin (সোনার ময়ূর জুদা পিন ও খোঁপার ব্রোচ)",
        "Bridal Pearl Hair Vine (মুক্তা ও ক্রিস্টাল হেয়ার ভাইন)",
        "Floral Crown (ফুলের মুকুট)",
        "No Head Jewellery (কিছুই না)",
        "Custom (কাস্টম ডেসক্রিপশন)"
    ] },
    noseJewellery: { element: 1, label: "Nose Jewellery / Nath (নাকের গয়না ও নথ)", options: [
        "Bengali Bridal Nath with Pearl Chain (বাঙালি ব্রাইডাল বড় নথ ও মুক্তার টানা শিকল)",
        "Traditional Round Nath (ঐতিহ্যবাহী বৃত্তাকার বড় নথ)",
        "Marathi Motyanchi Nath (ঐতিহ্যবাহী মুক্তাখচিত মারাঠি নথ)",
        "Kumaoni / Tehri Royal Big Nath (উত্তরাখণ্ডের বিশাল কুমাওনি ময়ূর নথ)",
        "Rajasthani Kundan Polki Nath (রাজস্থানি কুন্দন ও পোলকি নথ)",
        "Pearl & Stone Nolok (নাকের ঝুলন্ত নোলক দুল)",
        "Septum Ring / Bullak (মাঝের নাকের ঝুলন্ত রিং ও বুল্লাক)",
        "South Indian Mukku Pudaka (দক্ষিণভারতীয় দুই নাকের রত্নখচিত জোড়া নাকফুল)",
        "Punjabi Laung Clove Stud (ঐতিহ্যবাহী সোনালী লবঙ্গ স্টাড)",
        "Diamond Floral Cluster Stud (হীরার ফুলের বড় নাকফুল)",
        "Minimalist Slim Gold Nose Hoop (পাতলা মসৃণ স্লিম গোল্ড রিং)",
        "Single Diamond Nose Pin (এক পাথরের সূক্ষ্ম ডায়মন্ড নোজপিন)",
        "Clip-on Non-Pierced Bridal Nath (নাক না ফোঁড়ানো ব্রাইডাল ক্লিপ-অন নথ)",
        "No Nose Ring (কিছুই না)",
        "Custom (কাস্টম ডেসক্রিপশন)"
    ] },
    neckJewellery: { element: 1, label: "Neck Jewellery (গলার হার ও অলঙ্কার)", options: [
        "Royal Choker (গলার সাথে আঁটসাঁট রাজকীয় চোকার)",
        "Bengali Saat Noli Haar (বাঙালি সাতনরী রাজকীয় সোনার হার)",
        "Bengali Paati Chik (বাঙালি পাটি চিক / চওড়া সোনার চোকার)",
        "Layered Combo: Choker + Rani Haar (চোকার ও রানি হারের দ্বৈত কম্বিনেশন)",
        "Rani Haar (বহুস্তর বিশিষ্ট রাজকীয় রানি হার)",
        "Long Gold Necklace (বুক পর্যন্ত ঝুলানো দীর্ঘ সোনার হার)",
        "Traditional Hasli / Hansuli Collar (ঐতিহ্যবাহী ভারী খাঁটি হাঁসুলি হার)",
        "Kundan & Polki Royal Bridal Set (কুন্দন ও পোলকি ব্রাইডাল রত্ন নেকলেস)",
        "South Indian Kasu Mala / Coin Necklace (দক্ষিণী পবিত্র লক্ষ্মী কাসু মালা / মোহর হার)",
        "Multi-Strand Pearl Ruffle Haar (বহু স্তরের রাজকীয় শুভ্র মুক্তার মালা)",
        "Temple Jewellery Set (খোদাই করা দেব-দেবী টেম্পল জুয়েলারি সেট)",
        "Traditional Mangalsutra (কালো পুঁতি ও সোনার পবিত্র বৈবাহিক মঙ্গলসূত্র)",
        "Diamond Solitaire Tennis Necklace (এক লাইনের খাঁটি হীরার টেনিস নেকলেস)",
        "Oxydised Silver Tribal Mirror Necklace (অক্সিডাইজড রূপালী ট্রাইবাল ও বোহো হার)",
        "Navratna Royal Nine-Gem Necklace (নয়টি রত্নখচিত সনাতনী নবরত্ন হার)",
        "Minimalist Gold Pendant Set (সিম্পল এলিমেন্ট পেন্ডেন্ট ও চেইন)",
        "No Necklace (কিছুই না)",
        "Custom (কাস্টম ডেসক্রিপশন)"
    ] },
    earJewellery: { element: 1, label: "Ear Jewellery (কানের গয়না ও দুল)", options: [
        "Traditional Gold Jhumka (ঐতিহ্যবাহী ঝুলন্ত সোনার ঝুমকা)",
        "Royal Chandbali (চাঁদের আকৃতির অলঙ্কৃত চাঁদবালি)",
        "Bengali Kaan Pasha (বাঙালি বড় লতি-ঢাকা সোনার কানপাশা)",
        "Traditional Kaanbala (ঐতিহ্যবাহী সোনার কানবালা)",
        "Jhumka with Pearl Kaan-Taana (মুক্তার কানটানা শিকলযুক্ত ব্রাইডাল ঝুমকা)",
        "Full Ear Cuff / Kaan Phool (পুরো কান-ঢাকা ময়ূর ও লতাপাতা কাফ)",
        "Kundan Polki Jhumka with Emerald Drops (কুন্দন ও পান্না ঝালরযুক্ত রাজস্থানি ঝুমকা)",
        "Sui Dhaga / Long Threader (সরু সোনার চেইন সুইসুতো দুল)",
        "Chandelier Dangler Earrings (কাঁধ ছোঁয়া গ্ল্যামারাস ঝাড়বাতি দুল)",
        "Traditional Gold Bali / Hoops (ঐতিহ্যবাহী সোনার বালি বা হুপ দুল)",
        "Diamond Solitaire Studs (একক খাঁটি হীরার ক্লাসিক স্টাড)",
        "Diamond Teardrop Danglers (অশ্রুবিন্দুর আকারের হীরার পার্টি ড্রপস)",
        "Oxydised Silver Tribal Danglers (অক্সিডাইজড রূপালী ঘুঙুর ও আয়না দুল)",
        "Pearl Drop Floral Tops (মুক্তা ড্রপ মিষ্টি ফুলের টপস)",
        "No Earring (কিছুই না)",
        "Custom (কাস্টম ডেসক্রিপশন)"
    ] },
    wristJewellery: { element: 1, label: "Wrist Jewellery (হাতের অলঙ্কার ও চুড়ি)", options: [
        "Gold-Embossed Shakha & Pola (সোনা বাঁধানো খাঁটি শাঁখা ও পলা)",
        "Classic White Shakha Bangles (ঐতিহ্যবাহী খাঁটি সাদা শাঁখা)",
        "Bengali Ratanchur / Hathphool (বাঙালি রাজকীয় রতনচূড় / হাতফুল)",
        "Bengali Mantasha / Broad Gold Cuff (বাঙালি চওড়া সোনার মান্তাশা)",
        "Traditional Bengali Bauti (ঐতিহ্যবাহী সোনার বাউটি জোড়া)",
        "Gold-Plated Loha Badhano / Noa (সোনা বাঁধানো মঙ্গলময় নোয়া)",
        "Heavy Bridal Choor Bangles (কনের কবজির ভারী নকশাদার সোনার চুড়)",
        "Kundan & Polki Bridal Kada (কুন্দন ও মুক্তা ঝালরযুক্ত রাজস্থানি কাড়া)",
        "Traditional Solid Gold Bangles (কারুকার্যময় খাঁটি সোনার চুড়ির গোছা)",
        "Vibrant Glass Bangles Stack (রঙিন কাচের রেশমি চুড়ির রিনঝিন গোছা)",
        "Punjabi Solid Gold Kada (পাঞ্জাবি ঐতিহ্যের শক্ত চওড়া সোনার কাড়া)",
        "South Indian Temple Coin Kada (দক্ষিণী লক্ষ্মী কয়েন টেম্পল বালা)",
        "Royal Armlet / Bajubandh (বাহুর রাজকীয় সোনার বাজুবন্ধ / অনন্ত)",
        "Diamond Tennis Bracelet (এক লাইনের খাঁটি হীরার আধুনিক টেনিস ব্রেসলেট)",
        "Multi-Strand Pearl Bracelet with Gem Brooch (তিন স্তরের মুক্তার রাজকীয় ব্রেসলেট)",
        "Oxydised Silver Chunky Kada (অক্সিডাইজড রূপালী ভারী ট্রাইবাল কাড়া)",
        "None (কিছুই না)",
        "Custom (কাস্টম ডেসক্রিপশন)"
    ] },
    hairstyle: { element: 1, label: "Hairstyle (চুলের স্টাইল - ২৫টি ভ্যারাইটি)", options: [
        "Traditional Bun with Gajra (গজরা সজ্জিত ঐতিহ্যবাহী খোঁপা)",
        "Bengali Bridal Red Rose Bun (বাঙালি কনের লাল গোলাপ সজ্জিত খোঁপা)",
        "Rajputana Royal Bun with Gold Net (রাজপুতানা রয়্যাল খোঁপা ও সোনার জালি)",
        "Low Royal Chignon (লো রয়্যাল শিফন খোঁপা)",
        "Messy Textured Bun (মেসি টেক্সচার্ড খোঁপা)",
        "Boho Braided Bun (বোহো স্টাইল খোঁপা)",
        "Twisted Side Bun (টুইস্টেড সাইড খোঁপা)",
        "Classic South Indian Braid (ফুলের মালা সজ্জিত দীর্ঘ বেণী)",
        "Gajra Wrapped Braid (সম্পূর্ণ গজরা মোড়ানো দীর্ঘ বেণী)",
        "South Indian Poo Jadai Braid (দক্ষিণী পদ্ম ও বেলি ফুল মোড়ানো ব্রাইডাল বেণী)",
        "Waterfall Braid with Pearls (মুক্তা ছড়ানো ওয়াটারফল ক্যাসকেডিং বেণী)",
        "French Braid (ফ্রাঞ্চ বেণী)",
        "Fishtail Braid (ফিশটেইল বেণী)",
        "Crown Braid with Open Hair (ক্রাউন বেণীসহ খোলা চুল)",
        "Loose Wavy Waves (খোলা সফট ওয়েভি চুল)",
        "Straight Sleek Hair (স্ট্রেইট সিল্কি সোজা চুল)",
        "Side-Swept Curls (একপাশে ঝরনা কার্ল চুল)",
        "Voluminous Curls (ভলিউমিনাস রয়্যাল কার্ল)",
        "Vintage Hollywood Waves (ভিনটেজ ওয়েভি কার্ল)",
        "Half-Up Half-Down Drape (হাফ-আপ খোলা চুল)",
        "Classic Front Puff with Flowing Curls (সামনে পাফ করা ক্লাসিক কার্লি চুল)",
        "High Sleek Ponytail (হাই স্লিক পনিটেল)",
        "Bubble Ponytail (বাবল পনিটেল)",
        "Short Curly Pixie (শর্ট কার্লি স্টাইল)",
        "Custom (কাস্টম ডেসক্রিপশন)"
    ] },
    makeupStyle: { element: 1, label: "Makeup & Bindi (মেকআপ ও টিপ)", options: [
        "Traditional Big Red Kumkum Bindi & Kohl Eyes (ঐতিহ্যবাহী বড় লাল কুমকুম টিপ ও টানা কাজল)",
        "Bengali Bridal Chandan Art with Crimson Bindi (বাঙালি কনের কপালে চন্দন আঁকা ও গাঢ় লাল টিপ)",
        "Small Black Velvet Bindi with Smokey Eyes (ছোট কালো ভেলভেট টিপ ও স্মোকি চোখ)",
        "Maharashtrian Chandrakor Crescent Bindi (মহারাষ্ট্রীয় অর্ধচন্দ্র চাঁদ টিপ)",
        "Rajasthani Stone & Kundan Studded Bindi (রাজস্থানি কুন্দন ও রত্নখচিত টিপ)",
        "South Indian Temple Bindi with Gold Accents (দক্ষিণী টেম্পল কুন্দন ও সোনার টিপ)",
        "Royal Glam Bridal Makeup with Crimson Red Lips (রয়্যাল গ্ল্যাম ব্রাইডাল মেকআপ ও লাল লিপস্টিক)",
        "Soft Dewy Nude Pink & Glass Skin Makeup (সফট ডিউই নিউড পিঙ্ক ও গ্লাস স্কিন মেকআপ)",
        "Sun-Kissed Golden Bronze Glow Makeup (সানকিসড গোল্ডেন ব্রোঞ্জ গ্লো মেকআপ)",
        "Dramatic Arabic Winged Eyes & Deep Maroon Lips (ড্রামাটিক এরাবিক উইংড চোখ ও বোল্ড মেরুন লিপস)",
        "Minimalist No-Makeup Natural Radiant Glow (মিনিমাল নো-মেকআপ ন্যাচারাল রেডিয়েন্ট লুক)",
        "Dramatic Smokey Kohl Eyes & Velvet Wine Lips (স্মোকি কাজল চোখ ও ভেলভেট ওয়াইন লিপস)",
        "Pastel Floral Fairy Makeup with Crystal Accents (প্যাস্টেল ফ্লোরাল ও ক্রিস্টাল মেকআপ)",
        "Natural Gloss & Bare Skin (ন্যাচারাল গ্লস ও ময়েশ্চারাইজড ন্যাচারাল লুক)",
        "Custom (কাস্টম ডেসক্রিপশন)"
    ] },

    // Element 2: Action (Movement, Dance, Pose - 100 Options)
    actionPose: { element: 2, label: "Action & Movement (অ্যাকশন ও নৃত্য ভঙ্গি - ১০০টি ভ্যারাইটি)", options: actionOptions100 },

    // Element 3: Style (Visual Medium & Aesthetic - 45 Styles)
    visualStyle: { element: 3, label: "Visual Style (ভিজ্যুয়াল স্টাইল ও মাধ্যম)", options: [
        "Realistic (বাস্তবসম্মত)",
        "Cinematic (সিনেমাটিক)",
        "Hyper-Realistic (হাইপার-রিয়েলিস্টিক)",
        "Photorealistic 85mm Portrait (৮৫ মিমি লেন্স প্রফেশনাল পোর্ট্রেট)",
        "Editorial High-Fashion Magazine (ভোগ ম্যাগাজিন হাই-ফ্যাশন কভার)",
        "35mm Vintage Analog Film (৩৫ মিমি ভিন্টেজ ফিল্ম ফটোগ্রাফি)",
        "Kodak Portra 400 Warm Film (কোডাক পোর্ট্রা ৪০০ ওয়ার্ম ফিল্ম টোন)",
        "Polaroid Instant Vintage Print (পোলারয়েড ইনস্ট্যান্ট ফটো ফ্রেম)",
        "Classic Black & White Monochrome (ক্লাসিক সাদা-কালো মনোক্রোম আর্ট)",
        "Documentary Candid Photojournalism (ডকুমেন্টারি ফটোসাংবাদিকতা স্টাইল)",
        "National Geographic Wildlife & Culture (ন্যাট জিও প্রাকৃতিক লেন্স স্টাইল)",
        "Unreal Engine 5 Next-Gen 3D (আনরিয়েল ইঞ্জিন ৫ আধুনিক থ্রি-ডি)",
        "Octane Render 3D Ray-Traced (অকটেইন রেন্ডার গ্লোয়িং থ্রি-ডি)",
        "Digital Concept Art & Matte Painting (ডিজিটাল কনসেপ্ট আর্ট পেইন্টিং)",
        "Cyberpunk Neon Hologram Glow (সাইবারপাঙ্ক নিয়ন ও হোলোগ্রাফিক আর্ট)",
        "Pixar 3D Stylized Character Animation (পিক্সার থ্রি-ডি অ্যানিমেশন স্টাইল)",
        "Fantasy RPG Character Game Art (ফ্যান্টাসি আরপিজি গেম ক্যারেক্টার আর্ট)",
        "Double Exposure Fine Art (ডাবল এক্সপোজার পরাবাস্তব আর্ট)",
        "Oil Painting on Textured Canvas (ক্যানভাসে তেলরং চিত্রকর্ম)",
        "Soft Watercolor & Gouache Wash (কোমল জলরং ও গুয়াশ ইলাস্ট্রেশন)",
        "Renaissance Classic Masterpiece (রেনেসাঁ যুগের ধ্রুপদী মাস্টারপিস)",
        "Baroque Dramatic Chiaroscuro (বারোক ক্লাসিক্যাল আলো-আঁধারি পেইন্টিং)",
        "Impressionism Claude Monet Style (ইমপ্রেশনিজম মোনে আলোকচিত্র আর্ট)",
        "Art Nouveau Alphonse Mucha (আর্ট নুভো আলফনস মুকা অলঙ্করণ)",
        "Surrealism Salvador Dali Style (স্যুররিয়ালিজম স্বপ্নিল পরাবাস্তব আর্ট)",
        "Palette Knife Thick Impasto Oil (প্যালেট নাইফ টেক্সচার্ড পেইন্টিং)",
        "Charcoal & Graphite Sketch (চারকোল ও গ্রাফাইট পেনসিল স্কেচ)",
        "Stained Glass Window Mosaic (ক্যাথেড্রাল স্টেইন্ড গ্লাস মোজাইক আর্ট)",
        "Raja Ravi Varma Classic Royal Oil (রাজা রবি বর্মা রয়্যাল তৈলচিত্র রীতি)",
        "Mughal Miniature Intricate Painting (মুঘল মিনিয়েচার সূক্ষ্ম রাজকীয় চিত্রকলা)",
        "Tanjore Gold Leaf Foil Painting (তাঞ্জোর সোনার পাত খচিত ক্লাসিক চিত্র)",
        "Madhubani & Mithila Folk Art (মধুবনী ও মিথিলা ঐতিহ্যবাহী ফোক আর্ট)",
        "Pattachitra Traditional Scroll Art (পটচিত্র সনাতন স্ক্রল আর্ট)",
        "Kalighat Pat Bengali Folk Art (কালীঘাট পট ঐতিহ্যবাহী বাংলা চিত্র)",
        "Japanese Ukiyo-e Woodblock Print (জাপানি উকিও-ই কাঠখোদাই প্রিন্ট)",
        "Chinese Ink Wash Sumi-e (চাইনিজ সুমি-ই কালি চিত্রকর্ম)",
        "Anime Studio Ghibli Aesthetic (স্টুডিও ঘিবলি শান্ত নস্টালজিক অ্যানিমে)",
        "Makoto Shinkai Glowing Anime Sky (মাকোতো শিনকাই উজ্জ্বল অ্যানিমে আকাশ)",
        "Japanese Manga Ink & Halftone Screen (জাপানি মাঙ্গা ব্ল্যাক অ্যান্ড হোয়াইট)",
        "Vintage Pop Art Andy Warhol (ভিন্টেজ পপ আর্ট ও অ্যান্ডি ওয়ারহল)",
        "Comic Book Graphic Novel Ink (গ্রাফিক নভেল আমেরিকান কমিক আর্ট)",
        "Gothic Dark Fantasy Oil (গথিক ডার্ক ফ্যান্টাসি ভিক্টোরিয়ান আর্ট)",
        "Art Deco 1920s Glamour (আর্ট ডেকো বিশের দশকের জ্যামিতিক গ্ল্যামার)",
        "Cybernetic Vector Minimalist Flat (ভেক্টর ফ্ল্যাট মিনিমালিস্ট আর্ট)",
        "Custom (কাস্টম ডেসক্রিপশন)"
    ] },

    // Element 4: Background (Category-wise 120 Realistic Settings)
    backgroundCategory: { element: 4, label: "Background Category (স্থানের থিম ও ক্যাটাগরি)", options: Object.keys(backgroundCategoryMap) },
    backgroundSetting: { element: 4, label: "Background & Setting (বাস্তবসম্মত স্থান - ১২০টি অপশন)", options: backgroundCategoryMap["Palaces, Forts & Royal Architecture (রাজপ্রাসাদ, দুর্গ ও ঐতিহাসিক স্থাপত্য)"] },

    // Element 5: Color & Lighting (Color Palette & Lighting - 26 Palettes & 26 Lighting Setups)
    sceneColorPalette: { element: 5, label: "Overall Color Palette (ছবির কালার টোন)", options: [
        "Rich Royal Jewel Tones (উজ্জ্বল রাজকীয় রত্ন রঙ)",
        "Warm Golden & Earthy Tones (উষ্ণ সোনালী ও মাটির রঙ)",
        "Cinematic Teal & Warm Amber (হলিউড সিনেমাটিক টিল ও উষ্ণ অ্যাম্বার)",
        "Pastel Aesthetic Soft Tones (নরম স্নিগ্ধ প্যাস্টেল রঙ)",
        "Vibrant Festive Multi-Color (রঙিন বর্ণিল উৎসবের রঙ)",
        "Muted Vintage Analog Film (ভিন্টেজ মৃদু ফিল্ম টোন)",
        "Crisp High-Key Bright Clean Tones (উজ্জ্বল পরিচ্ছন্ন হাই-কী টোন)",
        "Deep Moody Low-Key Contrast (গভীর আলো-ছায়ার মুডি টোন)",
        "Monochromatic Royal Crimson & Gold (একক রক্তিম লাল ও খাঁটি সোনার আভা)",
        "Emerald Green & Antique Gold Harmony (পান্না সবুজ ও অ্যান্টিক গোল্ডেন মেলবন্ধন)",
        "Deep Midnight Sapphire Blue & Silver (নীলকান্তমণি স্যাফায়ার ব্লু ও রূপালী টোন)",
        "Sunset Coral, Rose Gold & Peach (সূর্যাস্তের কোরাল, রোজ গোল্ড ও পিচ প্যালেট)",
        "Earthy Terracotta, Rust & Mustard (মাটির টেরাকোটা, রাস্ট ও কাঁচা হলুদ রঙ)",
        "Moody Desaturated Cyberpunk Neon (ডেস্যাচুরেটেড ডার্ক ও নিয়ন গ্লো)",
        "Monochrome Sepia Antique Tone (অ্যান্টিক সেপিয়া ভিন্টেজ ব্রাউন টোন)",
        "Ethereal Dreamy Pastel Lavender & Lilac (স্বপ্নিল ল্যাভেন্ডার ও লাইলাক স্নিগ্ধ টোন)",
        "Warm Autumn Cinnamon & Maple Red (শরতের দারুচিনি, লাল মেপল ও ব্রোঞ্জ রঙ)",
        "Nordic Minimalist Cool Muted Slate (মিনিমালিস্ট শীতল স্লেট ধূসর ও বরফ নীল)",
        "Baroque Rich Dark Burgundy & Amber (বারোক আমলের গাঢ় বারগান্ডি ও অ্যাম্বার টোন)",
        "Tropical Vibrant Turquoise & Canary Yellow (ট্রপিক্যাল ফিরোজা ও উজ্জ্বল ক্যানারি হলুদ)",
        "Classic Technicolor Film Saturation (ক্লাসিক টেকনিকালার ৫০ দশকের ভাইব্রেন্ট স্যাচুরেশন)",
        "Sun-Bleached Warm Mediterranean Tones (রোদপোড়া উষ্ণ বালুকা ও জলপাই সবুজ টোন)",
        "Gothic Dark Noir Charcoal & Silver (গথিক নয়ার চারকোল ও রূপালী ঠান্ডা আলো)",
        "Forest Moss Green & Bark Brown (ঘন অরণ্যের শৈবাল সবুজ ও কাষ্ঠ বাদামী রঙ)",
        "Opulent Gold-on-Gold Royal Harmony (সর্বাঙ্গে খাঁটি সোনার ঝলমলে মনোক্রোম্যাটিক রূপ)",
        "Custom (কাস্টম ডেসক্রিপশন)"
    ] },
    lightingStyle: { element: 5, label: "Lighting Setup (আলোর বিন্যাস)", options: [
        "Soft Golden Hour Sunset Light (সোনারাঙা গোধূলির নরম আলো)",
        "Morning Sunbeams & Sun Flare (সকালের সোনালী রোদের আলো)",
        "Bright Natural Outdoor Daylight (উজ্জ্বল দিনের স্বাভাবিক আলো)",
        "Soft Overcast Diffused Daylight (মেঘলা দিনের সফট ডিফিউজড আলো)",
        "Direct Midday Sun with Crisp Shadows (দুপুরের কড়া রোদ ও তীক্ষ্ম নাটকীয় ছায়া)",
        "Studio Softbox Key & Fill Lighting (প্রফেশনাল ইনডোর স্টুডিও সফটবক্স আলো)",
        "Dramatic Cinematic Chiaroscuro (সিনেমাটিক আলো-ছায়ার বৈপরীত্য)",
        "Warm Candlelight & Brass Diya Glow (উষ্ণ মোমবাতি ও প্রদীপের আলো)",
        "Volumetric God Rays Through Window (জানালার ফাঁক দিয়ে আসা রোদ)",
        "Moody Neon Night Cyber Glow (নাইট নিয়ন সাইবার গ্লো)",
        "Fairy Lights Ambient Dreamy Bokeh (হাজারো লাইটের বোকাহ আলো)",
        "Twilight Blue Hour Ambient Glow (সন্ধ্যার নীল গোধূলি আলো)",
        "High-Key Pure White Studio Light (সম্পূর্ণ উজ্জ্বল সাদা আলো)",
        "Low-Key Moody Shadow & Rim Light (গাঢ় ছায়াময় ড্রামাটিক ডার্ক আলো)",
        "Rembrandt Classic Triangle Lighting (রিমব্রান্ট ক্লাসিক্যাল পোর্ট্রেট আলো)",
        "Butterfly / Paramount Beauty Light (প্যারামাউন্ট বাটারফ্লাই বিউটি আলো)",
        "Dramatic Backlit Silhouette with Edge Glow (তীব্র ব্যাকলাইট সিল্যুয়েট আলো)",
        "Split Lighting Halved in Shadow (ড্রামাটিক স্প্লিট আলো-আঁধারি)",
        "Moonlit Silver Midnight Atmosphere (চাঁদের রুপালী স্নিগ্ধ আলো)",
        "Dappled Sunlight Through Tree Leaves (পাতার ফাঁক দিয়ে পড়া চঞ্চল রোদ)",
        "Dramatic Overhead Spotlight (থিয়েট্রিক্যাল ড্রামাটিক স্পটলাইট)",
        "Warm Fireplace / Bonfire Flicker Glow (আগুনের শিখার কাঁপাকাঁপা আলো)",
        "Ring Light Catchlight Glow in Eyes (চোখে রিং লাইটের উজ্জ্বল ক্যাচলাইট)",
        "Foggy Misty Diffused Haze Light (কুয়াশাময় রহস্যময় ডিফিউজড আলো)",
        "Neon Dual-Tone Cyberpunk Cyan & Magenta (সায়ান ও ম্যাজেন্টা দ্বৈত আলো)",
        "Custom (কাস্টম ডেসক্রিপশন)"
    ] },

    // Element 6: Framing (Framing & Composition - 23 Professional Camera Options)
    cameraDistance: { element: 6, label: "Camera Framing (ক্যামেরা ফ্রেমিং ও অ্যাঙ্গেল - ২৩টি ভ্যারাইটি)", options: [
        "Full Body Standing with 15% Headroom (ফুল বডি - পা থেকে মাথা ও ১৫% হেডরুম)",
        "Full Body Wide Cinematic Environment (ফুল বডি ওয়াইড - ৭০% সাবজেক্ট ও ৩০% পরিবেশ)",
        "Extreme Wide Shot / Environmental Landscape (এক্সট্রিম ওয়াইড - বিশাল স্থাপত্য ও প্রকৃতির মাঝে পূর্ণ অবয়ব)",
        "Half Body Waist-Up Classic Portrait (হাফ বডি - কোমর থেকে মাথা পর্যন্ত ক্লাসিক পোর্ট্রেট)",
        "Medium Shot / Knee-Up Cowboy Shot (মিডিয়াম শট - হাঁটু থেকে মাথা পর্যন্ত ফ্যাশন ফ্রেম)",
        "Tight Close-Up Face & Jewelry (টাইট ক্লোজ-আপ - মুখমণ্ডল, চোখ ও গহনার সূক্ষ্ম ডিটেইল)",
        "Extreme Macro Close-Up (এক্সট্রিম ম্যাক্রো - চোখ, কাজল ও নাকের নোলকের অতি-সূক্ষ্ম রূপ)",
        "Low Angle Heroic Stance (লো-অ্যাঙ্গেল - নিচ থেকে তোলা রাজকীয় লম্বা পোজ)",
        "High Angle Looking Down (হাই-অ্যাঙ্গেল - ওপর থেকে তোলা নম্র লাবণ্যময় ভঙ্গি)",
        "Over-The-Shoulder Glance Framing (ওভার-দ্য-শোল্ডার - কাঁধের ওপর দিয়ে তাকানো সিনেমাটিক ফ্রেম)",
        "Dutch Angle / Tilted Dynamic Frame (ডাচ অ্যাঙ্গেল - নাটকীয় হেলানো সিনেমাটিক ফ্রেম)",
        "Symmetrical Centered Architectural Framing (প্রতিসাম্য সেন্টার্ড - তোরণ বা খিলানের মাঝে সুষম পোজ)",
        "Rule of Thirds Off-Center Aesthetic (রুল অফ থার্ডস - ফ্রেমের এক-তৃতীয়াংশে মার্জিত অবস্থান)",
        "Bust / Chest-Up Headshot (বাস্ট শট - বুক থেকে মাথা ও গলার হার ফোকাস)",
        "Full Body Top-Down Flatlay / Bird's Eye View (টপ-ডাউন বার্ডস আই - ওপর থেকে শাড়ির গোল ঘেরের রূপ)",
        "Profile / Side Silhouette View (প্রোফাইল সাইড ভিউ - পাশে থেকে শার্প জ-লাইন ও নাকের নথ)",
        "Three-Quarter Angle Portrait (থ্রি-কোয়ার্টার অ্যাঙ্গেল - ৪৫ ডিগ্রি মার্জিত কোণ)",
        "Depth of Field Leading Lines (লিডিং লাইনস - করিডোর বা সিঁড়ির রেখায় গভীর ফ্রেম)",
        "Cinematic Anamorphic Widescreen 2.39:1 (অ্যানামরফিক সিনেমাস্কোপ ওয়াইড ফ্রেম)",
        "Framing Within a Frame / Archway Peeking (ফ্রেমের ভেতর ফ্রেম - জানালার ঝরোখা বা তোরণের আড়াল)",
        "Ground-Level Low Angle Tracking (গ্রাউন্ড লেভেল - একদম মেঝে থেকে আলতা রাঙা পা ও নূপুর ফ্রেম)",
        "Golden Ratio Spiral Composition (গোল্ডেন রেশিও - সোনালী অনুপাতের নান্দনিক ভারসাম্য)",
        "Custom (কাস্টম ডেসক্রিপশন)"
    ] },

    // Element 7: Mood (Atmosphere & Emotion)
    moodAtmosphere: { element: 7, label: "Mood & Atmosphere (মুড ও পরিবেশের অনুভূতি)", options: [
        "Festive & Joyful Celebration (উৎসবমুখর ও আনন্দময় অনুভূতি)",
        "Energetic Rhythm & Dance Vibe (উচ্ছ্বল নৃত্য ও ছন্দের স্পন্দন)",
        "Playful & Carefree Youthful Innocence (চঞ্চল, উচ্ছ্বল ও নিষ্পাপ খুশির মেজাজ)",
        "Vibrant & Colorful Spring Cheer (বসন্তের রঙিন আনন্দ ও সজীবতা)",
        "Ecstatic Triumph & Jubilant Victory (উল্লাসিত আনন্দ ও বিজয়ের দীপ্তি)",
        "Cheerful Laughter & Spontaneous Delight (স্বতঃস্ফূর্ত হাসি ও আনন্দের মেজাজ)",
        "Tranquil & Serene Atmosphere (শান্ত ও স্নিগ্ধ পরিবেশ)",
        "Sacred Devotional Reverence & Bhakti (ভক্তিপূর্ণ, সমর্পিত ও পরম শ্রদ্ধাশীল ভাব)",
        "Temple Puja Divine Sanctity & Aura (মন্দিরের পূজার পবিত্রতা ও ঐশ্বরিক সুবাস)",
        "Meditative Zen & Deep Introspection (গভীর ধ্যানমগ্ন ও আত্মমগ্ন প্রশান্তি)",
        "Celestial Transcendence & Divine Grace (স্বর্গীয় আশীর্বাদ ও অপার্থিব জ্যোতি)",
        "Silent Midnight Meditation & Stillness (নিস্তব্ধ মধ্যরাতের গভীর ধ্যান ও স্থৈর্য)",
        "Royal & Majestic Grandeur (রাজকীয় ও মহিমান্বিত ভাব)",
        "Majestic Courtly Elegance & Noble Demeanor (দরবারি আভিজাত্য ও রাজকীয় অহংকার)",
        "Glamorous High-Fashion Sophistication (অভিজাত হাই-ফ্যাশন গ্ল্যামার ও লাবণ্য)",
        "Opulent Aristocratic Pride & Heritage (বংশমর্যাদা ও চরম ঐশ্বর্যপূর্ণ ঐতিহ্য)",
        "Bold Heroic Valour & Sovereign Command (বীরত্বব্যঞ্জক তেজস্বী ও দৃঢ়চেতা মেজাজ)",
        "Romantic & Ethereal Glow (রোমান্টিক ও স্বর্গীয় অনুভূতি)",
        "Magical & Dreamlike Mood (মায়াবী ও স্বপ্নিল আবহ)",
        "Sensual Graceful Allure & Enchantment (লাবণ্যময় মোহনীয় আবেদন ও মোহিত ভাব)",
        "Poetic Monsoon Rainy Yearning & Viraha (বৃষ্টিভেজা বিরহ ও কাব্যিক প্রেমের আকুলতা)",
        "Whispering Intimacy & Sweet Tenderness (ফিসফিস করা গোপন প্রণয় ও মিষ্টি অনুরাগ)",
        "Whimsical Fairy Tale Wonder & Charm (রূপকথার বিস্ময় ও মিষ্টি মায়াবী অনুভূতি)",
        "Moonlit Night Romance & Starlit Glow (চাঁদনি রাতের রোমাঞ্চ ও তারার আলো)",
        "Dramatic & Intense Emotion (ড্রামাটিক ও গভীর অনুভূতি)",
        "Nostalgic Vintage Melancholy & Retro Longing (নস্টালজিক অতীতমুখী স্মৃতিকাতর ভাব)",
        "Mysterious Gothic Enigma & Shadow Play (রহস্যময়, কুয়াশাচ্ছন্ন ও গথিক ছায়ার আবহ)",
        "Eerie Haunting Fog & Mystical Mist (নিশুতি রাতের কুয়াশাচ্ছন্ন ভৌতিক ও রহস্যময় ছোঁয়া)",
        "Moody Noir Suspense & Cinematic Tension (সিনেমাটিক নয়ার রহস্য ও টানটান নাটকীয়তা)",
        "Thunderous Storm Brewing Electric Tension (ঝড়ের পূর্বাভাস ও বিদ্যুৎ চমকানো থমথমে ভাব)",
        "Contemplative Solitude & Thoughtful Reflection (একাকী শান্ত ভাবনা ও নিঃসঙ্গতার সৌন্দর্য)",
        "Cozy Warm Intimacy by Firelight (উষ্ণ আন্তরিক ও মোলায়েম ঘরোয়া পরিবেশ)",
        "Golden Twilight Nostalgia & Sunset Yearning (গোধূলির বিষাদমাখা মিষ্টি নস্টালজিয়া)",
        "Dewy Morning Freshness & Awakening Hope (শিশিরভেজা ভোরের তাজা স্নিগ্ধতা ও নতুন আশা)",
        "Custom (কাস্টম ডেসক্রিপশন)"
    ] }
};

// Sub-Category Definitions for All Visual Selectors
const subCategoryDefinitions = {
    actionPose: {
        "Classical Dance (কথক, ভরতনাট্যম ও ওড়িশি)": dropdownData.actionPose.options.slice(0, 20),
        "Saree Twirls & Drape (শাড়ির ঘূর্ণন, আঁচল ও স্পিন)": dropdownData.actionPose.options.slice(20, 35),
        "Royal Walks & Runway (রাজকীয় পদক্ষেপ ও রানওয়ে)": dropdownData.actionPose.options.slice(35, 50),
        "Folk Dance & Festivals (গরবা, ধুনুচি ও লোকনৃত্য)": dropdownData.actionPose.options.slice(50, 65),
        "Expressions & Abhinaya (লাজুক চাহনি, হাসি ও মুখভঙ্গি)": dropdownData.actionPose.options.slice(65, 80),
        "Puja & Sacred Rituals (আরতি, প্রদীপ ও পুজো)": dropdownData.actionPose.options.slice(80, 92),
        "Royal Poses & Architecture (রাজকীয় আয়েশ ও পোজ)": dropdownData.actionPose.options.slice(92, 106)
    },
    visualStyle: {
        "Photography & Cinematic (ফটোগ্রাফি ও সিনেমাটিক)": dropdownData.visualStyle.options.slice(0, 11),
        "3D, Digital & Game Art (থ্রিডি ও ডিজিটাল কনসেপ্ট)": dropdownData.visualStyle.options.slice(11, 18),
        "Classical Fine Art (অয়েল পেইন্টিং ও রেনেসাঁ)": dropdownData.visualStyle.options.slice(18, 28),
        "Indian Heritage Art (রাজা রবি বর্মা ও ঐতিহ্য)": dropdownData.visualStyle.options.slice(28, 34),
        "Anime, Manga & Asian (অ্যানিমে, মাঙ্গা ও এশিয়ান আর্ট)": dropdownData.visualStyle.options.slice(34, 39),
        "Modern Pop & Graphic (পপ আর্ট ও কমিক)": dropdownData.visualStyle.options.slice(39, 45)
    },
    backgroundSetting: {
        "Palaces & Forts (রাজপ্রাসাদ ও কেল্লা)": backgroundCategoryMap["Palaces, Forts & Royal Architecture (রাজপ্রাসাদ, দুর্গ ও ঐতিহাসিক স্থাপত্য)"] || [],
        "Zamindar & Thakur Dalan (জমিদার বাড়ি ও ঠাকুরদালান)": backgroundCategoryMap["Zamindar Mansions & Thakur Dalan (ঐতিহ্যবাহী জমিদার বাড়ি ও ঠাকুরদালান)"] || [],
        "Bengal Villages & Ghats (বাংলার গ্রাম ও ঘাট)": backgroundCategoryMap["Bengal Villages, Riverbanks & Ganga Ghats (বাংলার শান্ত গ্রাম, নদী ও গঙ্গার বাঁধাল ঘাট)"] || [],
        "Puja Mandaps & Festivals (পূজামণ্ডপ ও উৎসব)": backgroundCategoryMap["Puja Mandaps & Festive Celebrations (পূজামণ্ডপ, বিবাহ ও বর্ণিল উৎসব)"] || [],
        "Nature & Mustard Fields (সরিষা খেত ও প্রকৃতি)": backgroundCategoryMap["Natural Landscapes & Scenic Open Air (উন্মুক্ত প্রকৃতি, সরিষা খেত ও বন)"] || [],
        "Historic Sacred Temples (ঐতিহাসিক প্রাচীন মন্দির)": backgroundCategoryMap["Historic Temples & Sacred Heritage (ঐতিহাসিক প্রাচীন মন্দির ও আধ্যাত্মিক স্থান)"] || [],
        "Modern Luxury Ballrooms (বিলাসবহুল বলরুম)": backgroundCategoryMap["Modern Luxury, Ballrooms & Urban Spaces (আধুনিক বিলাসবহুল আর্কিটেকচার ও বলরুম)"] || [],
        "Cinematic Dance Stages (সিনেমাটিক স্টেজ ও সেট)": backgroundCategoryMap["Cinematic Dance Stages, Studios & Night Sets (সিনেমাটিক ড্যান্স স্টেজ ও স্টুডিও)"] || []
    },
    hairstyle: {
        "Traditional Buns (গজরা সজ্জিত খোঁপা)": dropdownData.hairstyle.options.slice(0, 7),
        "Royal Long Braids (দীর্ঘ বেণী ও পরান্দি)": dropdownData.hairstyle.options.slice(7, 14),
        "Open Hair & Curls (খোলা চুল ও ওয়েভি কার্ল)": dropdownData.hairstyle.options.slice(14, 21),
        "Contemporary & Ponytails (আধুনিক ও পনিটেল)": dropdownData.hairstyle.options.slice(21, 25)
    },
    makeupStyle: {
        "Traditional Bindi & Chandan (টিপ ও চন্দন আর্ট)": dropdownData.makeupStyle.options.slice(0, 6),
        "Royal Bridal & Glamour (ব্রাইডাল গ্ল্যামার)": dropdownData.makeupStyle.options.slice(6, 10),
        "Dewy, Nude & Minimal (নিউড ও স্নিগ্ধ মেকআপ)": dropdownData.makeupStyle.options.slice(10, 15)
    },
    sceneColorPalette: {
        "Royal Jewel & Gold (রাজকীয় রত্ন ও সোনা)": [
            dropdownData.sceneColorPalette.options[0], dropdownData.sceneColorPalette.options[1],
            dropdownData.sceneColorPalette.options[8], dropdownData.sceneColorPalette.options[9],
            dropdownData.sceneColorPalette.options[10], dropdownData.sceneColorPalette.options[18],
            dropdownData.sceneColorPalette.options[24]
        ].filter(Boolean),
        "Cinematic & Moody (সিনেমাটিক ও মুডি ডার্ক)": [
            dropdownData.sceneColorPalette.options[2], dropdownData.sceneColorPalette.options[7],
            dropdownData.sceneColorPalette.options[13], dropdownData.sceneColorPalette.options[14],
            dropdownData.sceneColorPalette.options[17], dropdownData.sceneColorPalette.options[21],
            dropdownData.sceneColorPalette.options[23]
        ].filter(Boolean),
        "Earthy & Terracotta (মাটির রঙ ও অরণ্য)": [
            dropdownData.sceneColorPalette.options[11], dropdownData.sceneColorPalette.options[12],
            dropdownData.sceneColorPalette.options[16], dropdownData.sceneColorPalette.options[22]
        ].filter(Boolean),
        "Pastel & Vibrant (স্নিগ্ধ প্যাস্টেল ও বসন্ত)": [
            dropdownData.sceneColorPalette.options[3], dropdownData.sceneColorPalette.options[4],
            dropdownData.sceneColorPalette.options[5], dropdownData.sceneColorPalette.options[6],
            dropdownData.sceneColorPalette.options[15], dropdownData.sceneColorPalette.options[19],
            dropdownData.sceneColorPalette.options[20], dropdownData.sceneColorPalette.options[25]
        ].filter(Boolean)
    },
    lightingStyle: {
        "Natural Daylight & Sunset (সূর্যাস্ত ও দিনের আলো)": [
            dropdownData.lightingStyle.options[0], dropdownData.lightingStyle.options[1],
            dropdownData.lightingStyle.options[2], dropdownData.lightingStyle.options[3],
            dropdownData.lightingStyle.options[4], dropdownData.lightingStyle.options[11],
            dropdownData.lightingStyle.options[19], dropdownData.lightingStyle.options[23]
        ].filter(Boolean),
        "Studio & Beauty Portrait (স্টুডিও সফটবক্স ও রিমব্রান্ট)": [
            dropdownData.lightingStyle.options[5], dropdownData.lightingStyle.options[12],
            dropdownData.lightingStyle.options[14], dropdownData.lightingStyle.options[15],
            dropdownData.lightingStyle.options[17], dropdownData.lightingStyle.options[24]
        ].filter(Boolean),
        "Candlelight, Diya & Glow (মোমবাতি, প্রদীপ ও বোকাহ)": [
            dropdownData.lightingStyle.options[7], dropdownData.lightingStyle.options[8],
            dropdownData.lightingStyle.options[9], dropdownData.lightingStyle.options[10],
            dropdownData.lightingStyle.options[18], dropdownData.lightingStyle.options[21]
        ].filter(Boolean),
        "Cinematic Dramatic Shadows (সিনেমাটিক আলো-ছায়া ও স্পটলাইট)": [
            dropdownData.lightingStyle.options[6], dropdownData.lightingStyle.options[13],
            dropdownData.lightingStyle.options[16], dropdownData.lightingStyle.options[20],
            dropdownData.lightingStyle.options[22], dropdownData.lightingStyle.options[25]
        ].filter(Boolean)
    },
    cameraDistance: {
        "Full Body & Environmental (ফুল বডি শট)": [
            dropdownData.cameraDistance.options[0], dropdownData.cameraDistance.options[1],
            dropdownData.cameraDistance.options[2], dropdownData.cameraDistance.options[3],
            dropdownData.cameraDistance.options[4], dropdownData.cameraDistance.options[5],
            dropdownData.cameraDistance.options[12]
        ].filter(Boolean),
        "Half Body & Portrait (হাফ বডি ও মিড শট)": [
            dropdownData.cameraDistance.options[6], dropdownData.cameraDistance.options[7],
            dropdownData.cameraDistance.options[8], dropdownData.cameraDistance.options[11]
        ].filter(Boolean),
        "Close-Up & Macro (ক্লোজ-আপ ও অলঙ্কার)": [
            dropdownData.cameraDistance.options[9], dropdownData.cameraDistance.options[10],
            dropdownData.cameraDistance.options[20], dropdownData.cameraDistance.options[21]
        ].filter(Boolean),
        "Cinematic Angles & Composition (সিনেমাটিক দৃষ্টিকোণ)": [
            dropdownData.cameraDistance.options[13], dropdownData.cameraDistance.options[14],
            dropdownData.cameraDistance.options[15], dropdownData.cameraDistance.options[16],
            dropdownData.cameraDistance.options[17], dropdownData.cameraDistance.options[18],
            dropdownData.cameraDistance.options[19], dropdownData.cameraDistance.options[22]
        ].filter(Boolean)
    },
    moodAtmosphere: {
        "Festive & Joyful (উৎসবমুখর ও আনন্দময়)": dropdownData.moodAtmosphere.options.slice(0, 6),
        "Spiritual & Devotional (আধ্যাত্মিক ও ভক্তিপূর্ণ)": dropdownData.moodAtmosphere.options.slice(6, 12),
        "Royal & Majestic (রাজকীয় ও মহিমান্বিত)": dropdownData.moodAtmosphere.options.slice(12, 17),
        "Romantic & Ethereal (রোমান্টিক ও মায়াবী)": dropdownData.moodAtmosphere.options.slice(17, 24),
        "Dramatic & Mysterious (নাটকীয় ও রহস্যময়)": dropdownData.moodAtmosphere.options.slice(24, 30),
        "Calm & Solitude (শান্ত, উষ্ণ ও একাকী)": dropdownData.moodAtmosphere.options.slice(30, 35)
    },
    outfitColor: {
        "Reds, Crimson & Maroon (লাল ও মেরুন)": dropdownData.outfitColor.options.slice(0, 15),
        "Gold, Yellow & Ochre (সোনালী ও হলুদ)": dropdownData.outfitColor.options.slice(15, 30),
        "Greens & Emerald (সবুজ ও পান্না)": dropdownData.outfitColor.options.slice(30, 45),
        "Blues & Peacock Indigo (নীল ও ময়ূরকণ্ঠী)": dropdownData.outfitColor.options.slice(45, 60),
        "Pinks, Magenta & Purple (গোলাপী ও বেগুনী)": dropdownData.outfitColor.options.slice(60, 75),
        "Pastels, Ivories & Whites (প্যাস্টেল ও সাদা)": dropdownData.outfitColor.options.slice(75, 90),
        "Neutrals, Metallics & Black (কালো ও মেটালিক)": dropdownData.outfitColor.options.slice(90, 100)
    }
};

// Global App State
const selectionsState = {};
let activeCharacter = {
    name: "Avya Lumina",
    desc: "proportionately full and wider waist-hip ratio, gracefully curvaceous hourglass silhouette, accentuated wide hips, not overweight"
};
let savedPrompts = JSON.parse(localStorage.getItem('saved_prompts_v48') || '[]');
let activeKey = null;
let activeSubcategory = "All";

function renderSubcategoryTabs(key) {
    const tabsContainer = document.getElementById('modalSubcatTabs');
    if (!tabsContainer) return;
    tabsContainer.innerHTML = "";
    activeSubcategory = "All";

    let subcats = subCategoryDefinitions[key];

    // If outfitStyle, build subcategories from outfitStylesMap
    if (key === 'outfitStyle') {
        const outfit = selectionsState['outfitType'] || "Saree (শাড়ি)";
        const styles = outfitStylesMap[outfit] || [];
        subcats = {
            "Traditional Classic": styles.filter(s => s.includes("Silk") || s.includes("Jamdani") || s.includes("Kanjivaram") || s.includes("Banarasi")),
            "Modern & Contemporary": styles.filter(s => !s.includes("Silk") && !s.includes("Jamdani") && !s.includes("Kanjivaram") && !s.includes("Banarasi"))
        };
    }

    if (!subcats || Object.keys(subcats).length === 0) {
        tabsContainer.classList.add('hidden');
        return;
    }
    tabsContainer.classList.remove('hidden');

    let totalCount = 0;
    if (key === 'backgroundSetting') {
        totalCount = backgroundOptions120.length;
    } else {
        const baseField = dropdownData[key];
        totalCount = baseField ? baseField.options.length : 0;
    }

    // "All" tab
    const allTab = document.createElement('button');
    allTab.className = "modal-subcat-chip active";
    allTab.innerHTML = `🌟 All (${totalCount})`;
    allTab.onclick = () => {
        document.querySelectorAll('.modal-subcat-chip').forEach(c => c.classList.remove('active'));
        allTab.classList.add('active');
        activeSubcategory = "All";
        filterModalOptions();
    };
    tabsContainer.appendChild(allTab);

    // Individual category tabs
    Object.keys(subcats).forEach(catName => {
        const chip = document.createElement('button');
        chip.className = "modal-subcat-chip";
        const count = subcats[catName] ? subcats[catName].length : 0;
        chip.innerHTML = `${catName} (${count})`;
        chip.onclick = () => {
            document.querySelectorAll('.modal-subcat-chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            activeSubcategory = catName;
            filterModalOptions();
        };
        tabsContainer.appendChild(chip);
    });
}


// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    initElementsFilter();
    initGrid();
    updateHistoryBadge();
    updatePrompt();
});

// Render 7 Key Elements Filter Chips
function initElementsFilter() {
    const container = document.getElementById('elementsFilterChips');
    if (!container) return;
    container.innerHTML = "";

    Object.keys(elementMeta).forEach(key => {
        const item = elementMeta[key];
        const btn = document.createElement('button');
        btn.className = `element-filter-chip ${activeElementFilter === key ? 'active' : ''}`;
        btn.innerHTML = `${item.icon} ${item.name}`;
        btn.onclick = () => filterByElement(key);
        container.appendChild(btn);
    });
}

function filterByElement(elemKey) {
    activeElementFilter = elemKey;
    initElementsFilter();

    const cards = document.querySelectorAll('.selector-card');
    cards.forEach(card => {
        const cardElem = card.getAttribute('data-element');
        if (elemKey === 'all' || cardElem === elemKey) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// Toggle 7 Key Elements Guide Modal
function toggleElementsModal() {
    const modal = document.getElementById('elementsModal');
    if (!modal) return;
    if (modal.classList.contains('hidden')) {
        modal.classList.remove('hidden');
    } else {
        modal.classList.add('hidden');
    }
}

// Render Selector Grid
function initGrid() {
    const grid = document.getElementById('selectorsGrid');
    grid.innerHTML = "";

    Object.keys(dropdownData).forEach(key => {
        const field = dropdownData[key];
        selectionsState[key] = key === 'cameraDistance' ? "Full Body Standing with 15% Headroom (ফুল বডি - পা থেকে মাথা ও ১৫% হেডরুম)" : field.options[0];

        const card = document.createElement('div');
        card.className = "selector-card";
        card.setAttribute('data-element', field.element);

        // Calculate count and sub-category badge text
        let countText = "";
        const subcats = subCategoryDefinitions[key];
        if (key === 'backgroundSetting') {
            countText = "121 Options • 8 Categories";
        } else if (key === 'outfitType') {
            countText = "14 Categories • 65+ Fabrics";
        } else if (key === 'outfitStyle') {
            const currentOutfit = selectionsState['outfitType'] || "Saree (শাড়ি)";
            const styles = outfitStylesMap[currentOutfit] || [];
            countText = `${styles.length} Varieties`;
        } else if (subcats) {
            const subcatCount = Object.keys(subcats).length;
            countText = `${field.options.length} Options • ${subcatCount} Sub-Categories`;
        } else {
            countText = `${field.options.length} Curated Options`;
        }

        card.innerHTML = `
            <div class="selector-header">
                <div>
                    <label class="selector-label">${field.label}</label>
                    <span class="subcat-count-badge">${countText}</span>
                </div>
                <span class="element-tag tag-${field.element}">Element ${field.element}</span>
            </div>
            <button onclick="openModal('${key}')" class="selector-trigger">
                <div class="trigger-left">
                    <div id="${key}VisualBox" class="visual-box"></div>
                    <span id="${key}ValText" class="trigger-value"></span>
                </div>
                <span class="trigger-arrow">Change ▼</span>
            </button>
            <input type="text" id="${key}CustomInput" placeholder="Enter custom ${field.label.toLowerCase()}..." class="custom-input hidden" oninput="updatePrompt()">
        `;
        grid.appendChild(card);
        updateSelectorUI(key);
    });
}

function getVisualObj(opt) {
    if (!opt || typeof opt !== 'string') {
        return {
            img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&auto=format&fit=crop&q=80",
            desc: "স্টাইলিশ ভিজ্যুয়াল ডেসক্রিপশন"
        };
    }
    if (accurateVisuals[opt]) return accurateVisuals[opt];

    // Match exact base string ignoring parenthetical text (e.g. "Bengali Style" from "Bengali Style (আটপৌরে)")
    const baseOpt = opt.split('(')[0].trim().toLowerCase();
    const keys = Object.keys(accurateVisuals);
    
    let foundKey = keys.find(k => k && typeof k === 'string' && k.split('(')[0].trim().toLowerCase() === baseOpt);
    if (foundKey) return accurateVisuals[foundKey];

    // Handle "No ..." or "None" items cleanly
    if (opt.toLowerCase().startsWith("no ") || opt.toLowerCase().includes("none")) {
        return {
            img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80",
            desc: "কোনো অতিরিক্ত আইটেম থাকবে না"
        };
    }

    // Smart fallback image if custom or unmatched
    return {
        img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&auto=format&fit=crop&q=80",
        desc: "স্টাইলিশ ভিজ্যুয়াল ডেসক্রিপশন"
    };
}

function updateSelectorUI(key) {
    const val = selectionsState[key];
    const textEl = document.getElementById(`${key}ValText`);
    const visualBox = document.getElementById(`${key}VisualBox`);

    if (!textEl || !visualBox) return;

    textEl.innerText = val;

    if (key === 'outfitColor') {
        const hex = colorPalette[val] || "#FFFFFF";
        visualBox.style.backgroundColor = val.includes("Custom") ? "transparent" : hex;
        visualBox.innerHTML = val.includes("Custom") ? "🎨" : "";
    } else {
        const vis = getVisualObj(val);
        visualBox.style.backgroundColor = "transparent";
        visualBox.innerHTML = `<img src="${vis.img}" alt="${val}" onerror="this.onerror=null; this.style.display='none';">`;
    }
}

function openModal(key) {
    activeKey = key;
    const field = dropdownData[key];
    document.getElementById('modalTitle').innerText = `SELECT ${field.label.toUpperCase()}`;
    document.getElementById('modalSearchInput').value = "";
    
    renderSubcategoryTabs(key);

    let initialOptions = field.options;
    if (key === 'outfitStyle') {
        const outfit = selectionsState['outfitType'] || "Saree (শাড়ি)";
        initialOptions = outfitStylesMap[outfit] || ["Standard Fit", "Custom (কাস্টম ডেসক্রিপশন)"];
    } else if (key === 'backgroundSetting') {
        initialOptions = backgroundOptions120;
    }

    renderModalOptions(initialOptions);
    document.getElementById('visualModal').classList.remove('hidden');
}

function renderModalOptions(optionsList) {
    const container = document.getElementById('modalOptionsContainer');
    container.innerHTML = "";

    if (activeKey === 'outfitStyle') {
        const outfit = selectionsState['outfitType'];
        optionsList = outfitStylesMap[outfit] || ["Standard Fit", "Custom (কাস্টম ডেসক্রিপশন)"];
    } else if (activeKey === 'backgroundSetting') {
        const cat = selectionsState['backgroundCategory'];
        optionsList = backgroundCategoryMap[cat] || backgroundOptions120;
    }

    optionsList.forEach(opt => {
        const isSelected = selectionsState[activeKey] === opt;
        const card = document.createElement('div');
        card.className = `option-card ${isSelected ? 'selected' : ''}`;
        
        let cardVisual = "";
        let descText = "";

        if (activeKey === 'outfitColor') {
            const hex = colorPalette[opt] || "#FFFFFF";
            cardVisual = opt.includes("Custom") 
                ? `<div class="card-visual" style="height:100px; background:#1e293b"><span style="font-size:32px">🎨</span></div>` 
                : `<div class="card-visual" style="height:100px; background-color: ${hex}"><div class="card-visual-gradient"></div></div>`;
            descText = hex === "HEX_PICKER" ? "নিজের মতো রঙ বেছে নিন" : `রঙের কোড: ${hex}`;
        } else {
            const vis = getVisualObj(opt);
            const offlineSvg = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><rect width='100%25' height='100%25' fill='%231e293b'/><text x='50%25' y='50%25' fill='%2394a3b8' font-size='28' text-anchor='middle' dy='.3em'>✨</text></svg>`;
            cardVisual = `<div class="card-visual">
                <img src="${vis.img}" alt="${opt}" loading="lazy" onerror="this.onerror=null; this.src='${offlineSvg}';">
                <div class="card-visual-gradient"></div>
            </div>`;
            descText = vis ? vis.desc : "";
        }

        card.innerHTML = `
            ${cardVisual}
            <div class="card-details">
                <span class="card-title">${opt}</span>
                ${descText ? `<span class="card-desc">${descText}</span>` : ''}
            </div>
            ${isSelected ? '<div class="check-badge">✓</div>' : ''}
        `;
        card.onclick = () => selectOption(opt);
        container.appendChild(card);
    });
}

function filterModalOptions() {
    const query = document.getElementById('modalSearchInput').value.toLowerCase().trim();
    const field = dropdownData[activeKey];
    let baseList = field.options;
    
    if (activeKey === 'outfitStyle') {
        const outfit = selectionsState['outfitType'] || "Saree (শাড়ি)";
        baseList = outfitStylesMap[outfit] || ["Standard Fit", "Custom (কাস্টম ডেসক্রিপশন)"];
    } else if (activeKey === 'backgroundSetting') {
        baseList = backgroundOptions120;
    }

    // Filter by activeSubcategory if active
    const subcats = subCategoryDefinitions[activeKey];
    if (subcats && activeSubcategory && activeSubcategory !== "All" && subcats[activeSubcategory]) {
        baseList = subcats[activeSubcategory];
    }

    const filtered = baseList.filter(opt => {
        const matchesQuery = opt.toLowerCase().includes(query) || (accurateVisuals[opt]?.desc && accurateVisuals[opt].desc.toLowerCase().includes(query));
        return matchesQuery;
    });
    renderModalOptions(filtered);
}

function closeModal() {
    document.getElementById('visualModal').classList.add('hidden');
}

function selectOption(val) {
    selectionsState[activeKey] = val;
    
    const customInput = document.getElementById(`${activeKey}CustomInput`);
    if (val.includes("Custom")) {
        customInput.classList.remove('hidden');
        customInput.focus();
    } else {
        customInput.classList.add('hidden');
    }

    if (activeKey === 'outfitType') {
        const styles = outfitStylesMap[val] || ["Standard Fit", "Custom (কাস্টম ডেসক্রিপশন)"];
        selectionsState['outfitStyle'] = styles[0];
        updateSelectorUI('outfitStyle');
        initGrid(); // Refresh cards to update count badges
    } else if (activeKey === 'backgroundCategory') {
        const settings = backgroundCategoryMap[val] || backgroundOptions120;
        selectionsState['backgroundSetting'] = settings[0];
        updateSelectorUI('backgroundSetting');
    } else if (activeKey === 'backgroundSetting') {
        // Automatically sync backgroundCategory
        for (let cat in backgroundCategoryMap) {
            if (cat !== 'All Backgrounds (একসাথে সকল ১২০টি স্থান)' && backgroundCategoryMap[cat].includes(val)) {
                selectionsState['backgroundCategory'] = cat;
                updateSelectorUI('backgroundCategory');
                break;
            }
        }
    }

    updateSelectorUI(activeKey);
    closeModal();
    updatePrompt();
}

function getValue(key) {
    const val = selectionsState[key];
    if (val && val.includes("Custom")) {
        const customInput = document.getElementById(`${key}CustomInput`);
        const customVal = customInput ? customInput.value.trim() : "";
        return customVal !== "" ? customVal : "Custom Style";
    }
    return val;
}

function cleanPromptText(val) {
    if (!val || val === "HEX_PICKER") return "";
    let clean = val;
    if (val.includes("(")) {
        clean = val.split("(")[0];
    }
    clean = clean.replace(/[\u0980-\u09FF]+/g, "");
    clean = clean.trim().replace(/\s+/g, " ");
    return clean;
}

function updatePrompt() {
    let attrs = {};
    Object.keys(dropdownData).forEach(key => attrs[key] = cleanPromptText(getValue(key)));
    
    const aspectRatio = document.getElementById('aspectRatioSelect')?.value || '9:16';

    let prompt = `REFERENCE IMAGES:\n1. Face Reference: Use for identity. 2. Body Reference: Use for build.\n\nSCENE DESCRIPTION (STRUCTURED BY THE 7 KEY ELEMENTS OF A GREAT AI PROMPT):\n`;
    
    // Element 1: Subject (Identity, Body Anatomy, Costume, Draping, Jewelry, Hair, Makeup, Permanent details)
    prompt += `[1. SUBJECT]: Focus on character identity: ${activeCharacter.name}, ${activeCharacter.desc}. `;
    prompt += `Body build & silhouette: well-proportioned aesthetic hourglass silhouette, comparatively wider and gracefully full waist and hips, curvy body structure, strictly not overweight. `;
    
    // Navel positioning rule: ALWAYS 3 inches below the navel for Saree, Lehenga & Ghagra outfits
    const rawOutfit = selectionsState.outfitType || "";
    const isMidriffExposedOutfit = rawOutfit.includes("Saree") || 
                                   rawOutfit.includes("Lehenga") || 
                                   rawOutfit.includes("Ghagra") || 
                                   rawOutfit.includes("Indo-Western");
    
    if (isMidriffExposedOutfit) {
        prompt += `Outfit positioning: lower-waist saree/lehenga/ghagra drape worn strictly 3 inches below the navel, revealing midriff. `;
    }

    // Permanent Fixed Traditional Details
    prompt += `Permanent traditional details: authentic Red Sindoor along hair parting (Sinthi), white conch-shell bangles (Shakha) on both wrists, intricate Henna/Mehendi pattern on hands, vibrant Red Alta dye on feet, direct eye contact. `;
    prompt += `Costume: ${attrs.outfitType} - ${attrs.outfitStyle} in ${attrs.outfitColor}. `;
    prompt += `Dupatta/Orna: ${attrs.dupattaStyle}. `;
    prompt += `Waist Belt: ${attrs.waistAccessory}. `;
    prompt += `Hairstyle: ${attrs.hairstyle}. `;
    prompt += `Makeup & Bindi: ${attrs.makeupStyle}. `;
    prompt += `Complete Jewellery Set: ${attrs.headJewellery}, ${attrs.noseJewellery}, ${attrs.neckJewellery}, ${attrs.earJewellery}, ${attrs.wristJewellery}. `;

    // Element 2: Action (Dynamic verbs and movement)
    prompt += `\n\n[2. ACTION]: Dynamic movement & gesture: ${attrs.actionPose}. `;

    // Element 3: Style (Visual medium and aesthetic)
    prompt += `\n\n[3. STYLE]: Visual medium & aesthetic: ${attrs.visualStyle}. `;

    // Element 4: Background (Environment, setting, architecture & time of day)
    const bgCatClean = cleanPromptText(attrs.backgroundCategory || "");
    const bgSetClean = cleanPromptText(attrs.backgroundSetting || "");
    const bgCombined = (!bgCatClean || bgCatClean.includes("All Backgrounds") || bgSetClean.includes(bgCatClean)) 
        ? bgSetClean 
        : `${bgCatClean}, ${bgSetClean}`;
    prompt += `\n\n[4. BACKGROUND]: Environment, architectural setting & scene: ${bgCombined}. `;

    // Element 5: Color & Lighting (Color palette and lighting setup)
    prompt += `\n\n[5. COLOR & LIGHTING]: Overall color palette & tonal harmony: ${attrs.sceneColorPalette}. Lighting setup: ${attrs.lightingStyle}. `;

    // Element 6: Framing (Framing and composition)
    const rawFraming = selectionsState.cameraDistance || "";
    let framingText = cameraFramingPrompts[rawFraming] || cleanPromptText(attrs.cameraDistance || rawFraming);
    if (rawFraming.includes("Custom")) {
        const customVal = getValue("cameraDistance");
        framingText = (customVal && customVal !== "Custom Style") ? customVal : "Custom artistic camera framing and composition";
    }
    prompt += `\n\n[6. FRAMING & COMPOSITION]: Framing: ${framingText}. Aspect Ratio: ${aspectRatio}. `;

    // Element 7: Mood (Atmosphere and emotion)
    prompt += `\n\n[7. MOOD]: Atmospheric mood & emotional feel: ${attrs.moodAtmosphere}. `;

    // Video motion optimization tag
    prompt += `\n\n[AI Video Motion Optimization]: High subject-to-background depth separation, wide 360-degree dance floor clearance for fluid spins and arm motion, clean edge isolation for video generation.`;
    
    const textarea = document.getElementById('positivePrompt');
    if (textarea) textarea.value = prompt;
}

// Preset Manager
function applyPreset(presetKey) {
    if (presetKey === 'bengaliPuja') {
        selectionsState.outfitType = "Saree (শাড়ি)";
        selectionsState.outfitStyle = "Cotton Jamdani (জামদানি)";
        selectionsState.outfitColor = "Crimson Red (লাল)";
        selectionsState.headJewellery = "Maang Tikka (মাংটিকা)";
        selectionsState.neckJewellery = "Choker (চোকার)";
        selectionsState.earJewellery = "Jhumka (ঝুমকা)";
        selectionsState.wristJewellery = "Shakha (শাখা)";
        selectionsState.hairstyle = "Traditional Bun with Gajra (গজরা সজ্জিত ঐতিহ্যবাহী খোঁপা)";
        selectionsState.makeupStyle = "Bengali Bridal Chandan Art with Crimson Bindi (বাঙালি কনের কপালে চন্দন আঁকা ও গাঢ় লাল টিপ)";
        selectionsState.backgroundCategory = "Zamindar Mansions & Thakur Dalan (ঐতিহ্যবাহী জমিদার বাড়ি ও ঠাকুরদালান)";
        selectionsState.backgroundSetting = "Zamindar Palace Thakur Dalan (জমিদার বাড়ির ঐতিহ্যবাহী ঠাকুরদালান ও থাম)";
    } else if (presetKey === 'royalBanarasi') {
        selectionsState.outfitType = "Saree (শাড়ি)";
        selectionsState.outfitStyle = "Banarasi Silk (বেনারসী)";
        selectionsState.outfitColor = "Maroon (মেরুন)";
        selectionsState.headJewellery = "Matha Patti (মাথা পট্টি)";
        selectionsState.neckJewellery = "Rani Haar (রানি হার)";
        selectionsState.earJewellery = "Jhumka (ঝুমকা)";
        selectionsState.wristJewellery = "Gold Bangles (সোনার চুড়ি)";
        selectionsState.hairstyle = "Rajputana Royal Bun with Gold Net (রাজপুতানা রয়্যাল খোঁপা ও সোনার জালি)";
        selectionsState.makeupStyle = "Royal Glam Bridal Makeup with Crimson Red Lips (রয়্যাল গ্ল্যাম ব্রাইডাল মেকআপ ও লাল লিপস্টিক)";
    } else if (presetKey === 'organzaGlam') {
        selectionsState.outfitType = "Saree (শাড়ি)";
        selectionsState.outfitStyle = "Organza Saree (অর্গানজা)";
        selectionsState.outfitColor = "Pastel Lavender (ল্যাভেন্ডার)";
        selectionsState.headJewellery = "No Head Jewellery (কিছুই না)";
        selectionsState.neckJewellery = "Choker (চোকার)";
        selectionsState.earJewellery = "Chandbali (চাঁদবালি)";
        selectionsState.wristJewellery = "None (কিছুই না)";
        selectionsState.hairstyle = "Loose Wavy Waves (খোলা সফট ওয়েভি চুল)";
        selectionsState.makeupStyle = "Soft Dewy Nude Pink & Glass Skin Makeup (সফট ডিউই নিউড পিঙ্ক ও গ্লাস স্কিন মেকআপ)";
    } else if (presetKey === 'kanjivaramBride') {
        selectionsState.outfitType = "Saree (শাড়ি)";
        selectionsState.outfitStyle = "Kanjivaram Silk (কাঞ্জিভরম)";
        selectionsState.outfitColor = "Golden Zari (সোনালী জরি)";
        selectionsState.headJewellery = "Matha Patti (মাথা পট্টি)";
        selectionsState.neckJewellery = "Temple Jewellery Set (টেম্পল গয়না)";
        selectionsState.earJewellery = "Jhumka (ঝুমকা)";
        selectionsState.wristJewellery = "Gold Bangles (সোনার চুড়ি)";
        selectionsState.hairstyle = "Classic South Indian Braid (ফুলের মালা সজ্জিত দীর্ঘ বেণী)";
        selectionsState.makeupStyle = "South Indian Temple Bindi with Gold Accents (দক্ষিণী টেম্পল কুন্দন ও সোনার টিপ)";
    } else if (presetKey === 'cocktailLycra') {
        selectionsState.outfitType = "Saree (শাড়ি)";
        selectionsState.outfitStyle = "Lycra Ready-to-Wear Saree (লাইক্রা রেডি-টু-ওয়্যার)";
        selectionsState.outfitColor = "Classic Black (কালো)";
        selectionsState.headJewellery = "No Head Jewellery (কিছুই না)";
        selectionsState.neckJewellery = "Pendant Set (পেন্ডেন্ট)";
        selectionsState.earJewellery = "Studs (দানা)";
        selectionsState.wristJewellery = "None (কিছুই না)";
        selectionsState.hairstyle = "Side-Swept Curls (একপাশে ঝরনা কার্ল চুল)";
        selectionsState.makeupStyle = "Dramatic Smokey Kohl Eyes & Velvet Wine Lips (স্মোকি কাজল চোখ ও ভেলভেট ওয়াইন লিপস)";
    }

    Object.keys(dropdownData).forEach(updateSelectorUI);
    updatePrompt();
    showToast("Preset Applied!");
}

// Copy & Download Actions
async function copyPrompt(e) {
    const textarea = document.getElementById('positivePrompt');
    if (!textarea || !textarea.value) {
        showToast("No prompt text to copy!");
        return;
    }
    
    const textToCopy = textarea.value;
    let copied = false;

    // Method 1: Modern Clipboard API (works on HTTPS / localhost)
    if (navigator.clipboard) {
        try {
            await navigator.clipboard.writeText(textToCopy);
            copied = true;
        } catch (err) {
            console.warn("Clipboard API failed, trying fallback...", err);
        }
    }

    // Method 2: Fallback for HTTP / Mobile IP access
    if (!copied) {
        try {
            textarea.removeAttribute('readonly');
            textarea.select();
            textarea.setSelectionRange(0, 99999); // Mobile selection
            copied = document.execCommand('copy');
            textarea.setAttribute('readonly', 'true');
            if (window.getSelection) {
                window.getSelection().removeAllRanges();
            }
        } catch (err) {
            console.error("execCommand fallback failed:", err);
        }
    }

    // UI Toast & Button Feedback
    if (copied) {
        showToast("✓ Master Prompt Copied to Clipboard!");
        if (e && e.currentTarget) {
            const btn = e.currentTarget;
            const origHTML = btn.innerHTML;
            btn.innerHTML = `<span class="btn-icon">✓</span> Copied!`;
            btn.style.backgroundColor = "#10b981";
            setTimeout(() => {
                btn.innerHTML = origHTML;
                btn.style.backgroundColor = "";
            }, 1800);
        }
    } else {
        textarea.select();
        showToast("Selected text - Press Ctrl+C / long press to copy!");
    }
}

function downloadPrompt() {
    const blob = new Blob([document.getElementById('positivePrompt').value], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `Master_Prompt_Saree_v48_${Date.now()}.txt`;
    a.click();
    showToast("Prompt Downloaded!");
}

// Saved Prompts History
function saveCurrentPrompt() {
    const promptText = document.getElementById('positivePrompt').value;
    const newItem = {
        id: Date.now(),
        date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        outfit: selectionsState.outfitStyle || "Custom",
        color: selectionsState.outfitColor || "",
        text: promptText
    };
    savedPrompts.unshift(newItem);
    localStorage.setItem('saved_prompts_v48', JSON.stringify(savedPrompts));
    updateHistoryBadge();
    showToast("Saved to History!");
}

function updateHistoryBadge() {
    const badge = document.getElementById('historyBadge');
    if (badge) badge.innerText = savedPrompts.length;
}

function toggleHistoryDrawer() {
    const drawer = document.getElementById('historyDrawer');
    if (drawer.classList.contains('hidden')) {
        renderHistoryList();
        drawer.classList.remove('hidden');
    } else {
        drawer.classList.add('hidden');
    }
}

function renderHistoryList() {
    const container = document.getElementById('historyListContainer');
    container.innerHTML = "";

    if (savedPrompts.length === 0) {
        container.innerHTML = `<p style="text-align:center; color:#94a3b8; font-size:12px; padding:20px;">No saved prompts yet.</p>`;
        return;
    }

    savedPrompts.forEach(item => {
        const div = document.createElement('div');
        div.className = "history-item";
        div.innerHTML = `
            <div class="history-meta">
                <span>${item.outfit} (${item.color})</span>
                <span>${item.date}</span>
            </div>
            <div class="history-text">${item.text}</div>
            <div class="history-actions">
                <button onclick="copyHistoryItem(${item.id})" class="btn-tool">📋 Copy</button>
                <button onclick="deleteHistoryItem(${item.id})" class="btn-tool danger">🗑️ Delete</button>
            </div>
        `;
        container.appendChild(div);
    });
}

function copyHistoryItem(id) {
    const item = savedPrompts.find(p => p.id === id);
    if (item) {
        navigator.clipboard.writeText(item.text);
        showToast("History Item Copied!");
    }
}

function deleteHistoryItem(id) {
    savedPrompts = savedPrompts.filter(p => p.id !== id);
    localStorage.setItem('saved_prompts_v48', JSON.stringify(savedPrompts));
    updateHistoryBadge();
    renderHistoryList();
    showToast("Item Deleted");
}

// Character Profile Modal
function toggleCharacterModal() {
    const modal = document.getElementById('characterModal');
    if (modal.classList.contains('hidden')) {
        document.getElementById('charNameInput').value = activeCharacter.name;
        document.getElementById('charDescInput').value = activeCharacter.desc;
        modal.classList.remove('hidden');
    } else {
        modal.classList.add('hidden');
    }
}

function saveCharacterProfile() {
    const name = document.getElementById('charNameInput').value.trim();
    const desc = document.getElementById('charDescInput').value.trim();

    if (name) activeCharacter.name = name;
    if (desc) activeCharacter.desc = desc;

    document.getElementById('currentCharName').innerText = activeCharacter.name;
    document.getElementById('currentCharDesc').innerText = activeCharacter.desc;

    toggleCharacterModal();
    updatePrompt();
    showToast("Character Profile Updated!");
}

function clearAllSelections() {
    Object.keys(dropdownData).forEach(key => {
        const field = dropdownData[key];
        selectionsState[key] = field.options[0];
        const customInput = document.getElementById(`${key}CustomInput`);
        if (customInput) {
            customInput.value = "";
            customInput.classList.add('hidden');
        }
        updateSelectorUI(key);
    });
    updatePrompt();
    showToast("Selections Reset");
}

function showToast(msg) {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = "toast";
    toast.innerText = msg;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
}
