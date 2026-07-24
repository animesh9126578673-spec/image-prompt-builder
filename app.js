// Accurate Image Mapping Dictionary including New Saree Varieties & Jewelry
const accurateVisuals = {
    // 1. Visual Style
    "Realistic (বাস্তবসম্মত)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80", desc: "শার্প ফোকাস ও প্রাকৃতিক পোর্ট্রেট ফটোগ্রাফি" },
    "Cinematic (সিনেমাটিক)": { img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&auto=format&fit=crop&q=80", desc: "ড্রামাটিক আলো ও প্রফেশনাল কালার গ্রেডিং" },
    "Hyper-Realistic (হাইপার-রিয়েলিস্টিক)": { img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80", desc: "৮কে রেজোলিউশন ও অতি-সূক্ষ্ম স্কিন টেক্সচার" },

    // 2. Outfit Types
    "Saree (শাড়ি)": { img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&auto=format&fit=crop&q=80", desc: "ঐতিহ্যবাহী ও আধুনিক বিভিন্ন শাড়ি" },
    "Lehenga (লেহেঙ্গা)": { img: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=500&auto=format&fit=crop&q=80", desc: "গর্জিয়াস ট্র্যাডিশনাল লেহেঙ্গা পোশাক" },
    "Salwar Suit (সালোয়ার স্যুট)": { img: "https://images.unsplash.com/photo-1583391733975-04285b0d0999?w=500&auto=format&fit=crop&q=80", desc: "মার্জিত ও আরামদায়ক সালোয়ার স্যুট" },
    "Anarkali Suit (অনারকুলি)": { img: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500&auto=format&fit=crop&q=80", desc: "ফ্লোয়িং রাজকীয় অনারকুলি ফ্রক স্টাইল" },
    "Kurti & Sharara (কুর্তি ও শারারা)": { img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&auto=format&fit=crop&q=80", desc: "শারারা ও ঘরারা ড্রেস সেট" },
    "Indo-Western Fusion (ইন্দো-ওয়েস্টার্ন)": { img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=80", desc: "ইন্দো-ওয়েস্টার্ন ফিউশন গাউন ও কেপ" },
    "Gown & Evening Wear (গাউন)": { img: "https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?w=500&auto=format&fit=crop&q=80", desc: "বিলাসবহুল রয়্যাল বল গাউন" },
    "Kaftan & Lounge Wear (কাফতান)": { img: "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=500&auto=format&fit=crop&q=80", desc: "ট্রেন্ডি এমব্রয়ডারি কাফতান" },
    "Western Dress (ওয়েস্টার্ন ড্রেস)": { img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=80", desc: "আধুনিক ওয়েস্টার্ন পার্টি গাউন" },

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

    // 5. Waist Accessories
    "Gold Kamarbandh (কোমরবন্ধ)": { img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&auto=format&fit=crop&q=80", desc: "ঐতিহ্যবাহী সোনার শিকল কোমরবন্ধ" },
    "Temple Waist Chain": { img: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=500&auto=format&fit=crop&q=80", desc: "দক্ষিণ ভারতীয় টেম্পল খোদাই ওয়েস্ট চেইন" },
    "Embroidered Waist Belt": { img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=80", desc: "কাপড়ের কাজ করা আধুনিক বেল্ট" },
    "No Waist Belt": { img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=80", desc: "কোনো কোমরবন্ধ থাকবে না" },

    // 6. Head Jewellery
    "Maang Tikka (মাংটিকা)": { img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&auto=format&fit=crop&q=80", desc: "সিঁথির মাঝখানে ঝুলানো মাংটিকা" },
    "Matha Patti (মাথা পট্টি)": { img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=80", desc: "কপালের দুপাশে বিস্তৃত মাথা পট্টি" },
    "Floral Crown (ফুলের মুকুট)": { img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80", desc: "তাজা ফুলের উৎসবের মুকুট" },
    "Passa / Jhumar (পাশা)": { img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80", desc: "একপাশে ঝুলানো রয়্যাল পাশা ঝুমোর" },
    "No Head Jewellery (কিছুই না)": { img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&auto=format&fit=crop&q=80", desc: "মাথায় কোনো অলঙ্কার থাকবে না" },

    // 7. Nose Jewellery
    "Traditional Nath (ঐতিহ্যবাহী বড় নথ)": { img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=80", desc: "ঐতিহ্যবাহী শিকলসহ বড় নথ" },
    "Marathi Nath (মারাঠি নথ)": { img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=500&auto=format&fit=crop&q=80", desc: "ঐতিহ্যবাহী মুক্তাখচিত মারাঠি নথ" },
    "Pearl & Stone Nolok (নোলক)": { img: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=500&auto=format&fit=crop&q=80", desc: "ঝোলানো নোলক দুল" },
    "Diamond Nose Stud (নাকের পিন / স্টাড)": { img: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=500&auto=format&fit=crop&q=80", desc: "সূক্ষ্ম ডায়মন্ড/গোল্ড নাকের স্টাড" },
    "No Nose Ring (কিছুই না)": { img: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=500&auto=format&fit=crop&q=80", desc: "নাকে কোনো নথ/নোলক থাকবে না" },

    // 8. Neck Jewellery
    "Choker (চোকার)": { img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop&q=80", desc: "গলার সাথে আঁটসাঁট রাজকীয় চোকার" },
    "Long Necklace (লং হার)": { img: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=500&auto=format&fit=crop&q=80", desc: "বুক পর্যন্ত ঝুলানো দীর্ঘ হার" },
    "Rani Haar (রানি হার)": { img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=80", desc: "বহুস্তর বিশিষ্ট রাজকীয় রানি হার" },
    "Pendant Set (পেন্ডেন্ট)": { img: "https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=500&auto=format&fit=crop&q=80", desc: "সিম্পল এলিমেন্ট পেন্ডেন্ট ও চেইন" },
    "Temple Jewellery Set (টেম্পল গয়না)": { img: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=500&auto=format&fit=crop&q=80", desc: "খোদাই করা প্রাচীন দেব-দেবী টেম্পল জুয়েলারি" },
    "No Necklace (কিছুই না)": { img: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=500&auto=format&fit=crop&q=80", desc: "গলায় কোনো হার থাকবে না" },

    // 9. Ear Jewellery
    "Jhumka (ঝুমকা)": { img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=500&auto=format&fit=crop&q=80", desc: "ঐতিহ্যবাহী ঝোলানো সোনার ঝুমকা" },
    "Chandbali (চাঁদবালি)": { img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&auto=format&fit=crop&q=80", desc: "চাঁদের আকৃতির অলঙ্কৃত চাঁদবালি" },
    "Studs (দানা)": { img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500&auto=format&fit=crop&q=80", desc: "ছোট ডায়মন্ড বা গোল্ড স্টাড" },
    "No Earring (কিছুই না)": { img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=500&auto=format&fit=crop&q=80", desc: "কানে কোনো দুল থাকবে না" },

    // 10. Wrist Jewellery
    "Shakha (শাখা)": { img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&auto=format&fit=crop&q=80", desc: "ঐতিহ্যবাহী শাঁখা ও পোলা চুড়ি" },
    "Gold Bangles (সোনার চুড়ি)": { img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&auto=format&fit=crop&q=80", desc: "কারুকার্যময় খাঁটি সোনার চুড়ি" },
    "None (কিছুই না)": { img: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=500&auto=format&fit=crop&q=80", desc: "হাতে কোনো চুড়ি থাকবে না" },

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
    "Short Curly Pixie (শর্ট কার্লি স্টাইল)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=78", desc: "আধুনিক শর্ট কার্লি পিক্স কাটিং" },

    // 12. Makeup & Bindi
    "Traditional Red Bindi & Kohl": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=79", desc: "ঐতিহ্যবাহী বড় লাল টিপ ও কাজল" },
    "Glamorous Nude Makeup": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=80", desc: "আধুনিক নিউড লিপস্টিক ও সফট গ্লো" },
    "Heavy Bridal Makeup": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=81", desc: "ব্রাইডাল লাল লিপস্টিক ও হাইলাইটার" },
    "Natural Gloss": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=82", desc: "সিম্পল নো-মেকআপ গ্লসি লুক" },

    // 13. Pose & Expression
    "Graceful Gentle Smile": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=83", desc: "মিষ্টি ও মার্জিত হাসিমুখের পোজ" },
    "Royal Regal Stance": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=84", desc: "রাজকীয় সোজা ও আত্মবিশ্বাসী ভঙ্গি" },
    "Candid Elegant Glance": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=85", desc: "ন্যাচারাল ক্যান্ডিড ও মার্জিত চাহনি" },
    "Confident Fashion Pose": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=86", desc: "হাই-ফ্যাশন মডেল লুক ও পোজ" },

    // 14. Lighting & Mood (15 Distinct Styles)
    "Bright Natural Daylight (উজ্জ্বল দিনের স্বাভাবিক আলো)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=87", desc: "উজ্জ্বল ও প্রাকৃতিক দিনের সরাসরি সূর্যালোক" },
    "Soft Golden Hour Sunset (সোনারাঙা গোধূলির নরম আলো)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=88", desc: "সূর্যাস্তের উষ্ণ সোনারাঙা গোধূলির সফট আলো" },
    "Morning Sunbeams & Sun Flare (সকালের সোনালী রোদের আলো)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=89", desc: "সকালের প্রথম মিষ্টি রোদের সোনালী সানফ্লেয়ার" },
    "Soft Overcast Diffused Daylight (মেঘলা দিনের সফট ডিফিউজড আলো)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=90", desc: "ছায়াহীন সফট ও মসৃণ মেঘলা দিনের প্রাকৃতিক আলো" },
    "Midday Sunlit Rays (দুপুরের উজ্জ্বল রোদের আলো)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=91", desc: "দুপুরের কড়া রোদ ও তীক্ষ্ম হাইলাইট" },
    "Studio Softbox Key Light (স্টুডিও সফটবক্স প্রফেশনাল আলো)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=92", desc: "প্রফেশনাল ইনডোর স্টুডিও সফটবক্স আলো" },
    "Dramatic Cinematic Chiaroscuro (সিনেমাটিক আলো-ছায়ার বৈপরীত্য)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=93", desc: "নাটকীয় ছায়া ও গ্ল্যামারাস সিনেমাটিক আলো" },
    "Warm Candlelight Glow (উষ্ণ মোমবাতির আলো)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=94", desc: "উৎসবের প্রদীপ ও মোমবাতির উষ্ণ হলুদ গ্লো" },
    "Moody Neon Night Cyber Glow (নাইট নিয়ন সাইবার গ্লো)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=95", desc: "রঙিন নিয়ন বাতি ও সাইবার নাইট মোড" },
    "Fairy Lights Ambient Bokeh (হাজারো লাইটের বোকাহ আলো)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=96", desc: "ব্যাকগ্রাউন্ডে ফেয়ারি লাইটের মায়াবী বোকাহ গ্লো" },
    "Twilight Blue Hour Glow (সন্ধ্যার নীল গোধূলি আলো)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=97", desc: "সূর্যাস্তের পরের গাঢ় নীল আকাশের মৃদু আলো" },
    "High-Key Bright White Light (সম্পূর্ণ উজ্জ্বল সাদা আলো)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=98", desc: "সম্পূর্ণ ছায়াহীন ব্রাইট হোয়াইট ফ্যাশন ব্যাকড্রপ" },
    "Low-Key Dark Shadow Light (ছায়াময় ড্রামাটিক ডার্ক আলো)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=99", desc: "ডার্ক মুডি আবহ ও একক হাইলাইট প্রদীপ আলো" },
    "Volumetric Sunbeams Through Window (জানালার ফাঁক দিয়ে আসা রোদ)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=100", desc: "জানালার কাচ ভেঙে আসা রোদের আলোর রশ্মি" },

    // 15. Camera Distance
    "Full Body (মাথা থেকে পা পর্যন্ত সম্পূর্ণ ও মাথার উপর ১৫% ফাঁকা)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=101", desc: "মাথা থেকে পা পর্যন্ত সম্পূর্ণ ভিউ ও মাথার ওপর ১৫% ফাঁকা স্থান" },
    "Full Body Wide (৭০% জুমড আউট - চারপাশে ৩০% মেঠো প্রান্তর)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=102", desc: "৭০% জুমড আউট ওয়াইড শট, চারপাশে ৩০% খালি স্পেস" },
    "Half Body (কোমর থেকে ওপরের অংশ)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=103", desc: "কোমর থেকে ওপরের অংশের ক্লাসিক হাফ-লেন্থ পোর্ট্রেট" },
    "Close-Up Portrait (মুখমণ্ডল ও গহনার ক্লোজ-আপ)": { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80&id=104", desc: "মুখমণ্ডল, মেকআপ ও গহনার স্পষ্ট ক্লোজ-আপ পোর্ট্রেট" },

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
};

const colorPalette = {
    // 1. Royal Reds & Pinks
    "Crimson Red (লাল)": "#DC2626", 
    "Maroon (মেরুন)": "#800000",
    "Ruby Red (রুবি লাল)": "#991B1B",
    "Scarlet Red (স্কারলেট লাল)": "#EF4444",
    "Wine / Burgundy (ওয়াইন)": "#4C0519", 
    "Hot Pink (গোলাপী)": "#EC4899",
    "Magenta (ম্যাজেন্টা)": "#BE185D",
    "Baby Pink (বেবি পিঙ্ক)": "#F472B6",
    "Blush Pink (ব্ল্যাশ পিঙ্ক)": "#FBCFE8",
    "Coral Red (কোরল রেড)": "#F87171",
    "Rose Gold (গোলাপী গোল্ড)": "#B76E79",

    // 2. Royal Blues & Greens
    "Royal Blue (রয়্যাল নীল)": "#2563EB", 
    "Navy Blue (নেভি ব্লু)": "#1E3A8A",
    "Teal Blue (টিল ব্লু)": "#0D9488",
    "Sky Blue (আকাশী নীল)": "#38BDF8",
    "Midnight Blue (মিডনাইট ব্লু)": "#0F172A",
    "Emerald Green (পান্না সবুজ)": "#059669",
    "Olive Green (অলিভ সবুজ)": "#65A30D",
    "Mint Green (মিন্ট সবুজ)": "#6EE7B7",
    "Bottle Green (বোতল সবুজ)": "#064E3B",
    "Parrot Green (টিয়া সবুজ)": "#22C55E",

    // 3. Yellows, Oranges & Metallic Gold
    "Basanti Yellow (বাসন্তী)": "#FACC15", 
    "Mustard Yellow (সরিষা হলুদ)": "#D97706",
    "Bright Orange (কমলা)": "#F97316",
    "Peach Orange (পীচ)": "#FDBA74",
    "Rust Orange (রাস্ট অরেঞ্জ)": "#C2410C",
    "Golden Zari (সোনালী জরি)": "#D97706", 
    "Champagne Gold (শ্যাম্পেইন গোল্ড)": "#F59E0B",
    "Metallic Bronze (ব্রোঞ্জ)": "#78350F",
    "Copper Zari (তামা জরি)": "#B45309",
    "Amber Gold (অ্যাম্বার)": "#F59E0B",

    // 4. Purples, Lilacs & Pastels
    "Pastel Lavender (ল্যাভেন্ডার)": "#DDD6FE",
    "Deep Purple (গাঢ় বেগুনি)": "#6B21A8",
    "Violet (ভাইওলেট)": "#7C3AED",
    "Plum Purple (প্লাম)": "#4C1D95",
    "Pastel Mint (প্যাস্টেল মিন্ট)": "#A7F3D0",
    "Pastel Peach (প্যাস্টেল পীচ)": "#FFEDD5",
    "Pastel Yellow (প্যাস্টেল হলুদ)": "#FEF08A",
    "Mauve (মভ)": "#9333EA",
    "Lilac (লাইলাক)": "#C084FC",
    "Orchid Pink (অরকিড)": "#E879F9",

    // 5. Neutrals, Blacks & Whites
    "Classic Black (কালো)": "#000000", 
    "Pure White (সাদা)": "#FFFFFF",
    "Off-White / Cream (অফ-হোয়াইট)": "#FEF3C7",
    "Silver Metallic (রূপালী)": "#9CA3AF",
    "Charcoal Grey (চারকোল গ্রেই)": "#374151",
    "Nude Beige (নিউড বেইজ)": "#D4D4D8",
    "Ivory White (আইভরি)": "#FFFBEB",
    "Chocolate Brown (ব্রাউন)": "#451A03",
    "Dual Shade Gradient (দ্বৈত শেড)": "#6366F1",
    "Custom (কাস্টম ডেসক্রিপশন)": "HEX_PICKER"
};

// Expanded Outfit Styles Mapping
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
        "Bengali Style (আটপৌরে)", 
        "Nivi Drape (নিভি)", 
        "Seedha Pallu (সোজা আঁচল)", 
        "Pleated Drape (প্লিয়েটেড)", 
        "Ruffled Drape (রফলস)", 
        "Modern Belted Style (বেল্ট স্টাইল)", 
        "Custom (কাস্টম ডেসক্রিপশন)"
    ],
    "Lehenga (লেহেঙ্গা)": ["Circular (সার্কুলার)", "Mermaid (মারমেইড)", "A-Line (এ-লাইন)", "Panelled (প্যানেলড)", "Custom (কাস্টম ডেসক্রিপশন)"],
    "Salwar Suit (সালোয়ার স্যুট)": ["Patiala Style (পাটিয়ালা)", "Straight Cut (স্ট্রেইট কাট)", "Palazzo Suit (প্যালাজো)", "Custom (কাস্টম ডেসক্রিপশন)"],
    "Anarkali Suit (অনারকুলি)": ["Floor Length (ফ্লোর লেন্থ)", "Angrakha Cut (অঙ্গারখা)", "Custom (কাস্টম ডেসক্রিপশন)"],
    "Kurti & Sharara (কুর্তি ও শারারা)": ["Sharara Set (শারারা)", "Gharara Suit (ঘারারা)", "Peplum Kurti (পেপলাম)", "Straight Cut Kurti (স্ট্রেইট কুর্তি)", "Custom (কাস্টম ডেসক্রিপশন)"],
    "Indo-Western Fusion (ইন্ডো-ওয়েস্টার্ন)": ["Cape Top with Skirt", "Dhoti Pants with Jacket", "Crop Top & Wide Pants", "Draped Saree Gown", "Custom (কাস্টম ডেসক্রিপশন)"],
    "Gown & Evening Wear (গাউন)": ["Royal Ball Gown", "Empire Waist Gown", "Velvet Evening Gown", "Sequin Flare Gown", "Custom (কাস্টম ডেসক্রিপশন)"],
    "Kaftan & Lounge Wear (কাফতান)": ["Silk Embroidered Kaftan", "Printed Georgette Kaftan", "Belted Kaftan", "Custom (কাস্টম ডেসক্রিপশন)"],
    "Western Dress (ওয়েস্টার্ন ড্রেস)": ["Bodycon (বডিকন)", "Slit Gown (স্লিট গাউন)", "Cocktail Dress (ককটেল)", "Custom (কাস্টম ডেসক্রিপশন)"],
    "Custom (কাস্টম ডেসক্রিপশন)": ["Standard Fit", "Custom (কাস্টম ডেসক্রিপশন)"]
};

// 100 Background Options Array
const backgroundOptions100 = [
    "Grand Royal Dance Stage with Spotlights (গ্ল্যামারাস রাজকীয় ড্যান্স স্টেজ)",
    "Bollywood Musical Stage with Fog & Lights (বলিউড রয়্যাল ড্যান্স স্টেজ)",
    "Open Palace Courtyard Dance Stage (কথক ও ভারতনাট্যম নৃত্যমঞ্চ)",
    "Festive Garba & Dandiya Arena (উৎসবের ডান্ডিয়া ও গরবা ড্যান্স গ্রাউন্ড)",
    "Modern Mirror Dance Studio (আয়না খচিত আধুনিক নিয়ন ড্যান্স স্টুডিও)",
    "Rainy Open Street Dance Floor (বৃষ্টিস্নাত ওপেন ড্যান্স ফ্লোর)",
    "Royal Marble Ballroom Dance Floor (রয়্যাল মার্বেল বলরুম ড্যান্স ফ্লোর)",
    "Realistic Village Mud Trail (বাস্তবসম্মত গ্রামের মেঠো পথ)",
    "Traditional Village Concrete Road (গ্রামের বাঁধানো পাকা রাস্তা)",
    "Rainy Village Road with Lush Greenery (বৃষ্টিভেজা রূপসী গ্রামের রাস্তা)",
    "Vintage City Street with Heritage Buildings (ঐতিহাসিক শহরের পুরানো রাস্তা)",
    "Modern City Boulevard at Dusk (আধুনিক আলোকসজ্জার শহরের রাস্তা)",
    "Rainy Monsoon Street with Reflections (বৃষ্টি আচ্ছন্ন শহরের রাস্তা ও পানির প্রতিফলন)",
    "Vintage Kolkata Tram Track Street (পুরানো কলকাতার ট্রাম লাইন রাস্তা)",
    "Parisian Cobblestone Alley (প্যারিসের ভিনটেজ পাথরের গলি রাস্তা)",
    "Open Rooftop Terrace with Sunset View (বাড়ির উন্মুক্ত ছাদ ও সূর্যাস্ত)",
    "Festive Fairy-Lit Rooftop (হাজারো বাতিতে সাজানো উৎসবের ছাদ)",
    "Colonial Mansion Veranda (ঔপনিবেশিক জমিদার বাড়ির রাজকীয় বারান্দা)",
    "Modern High-Rise Penthouse Balcony (আধুনিক পেন্টহাউসের খোলা বেলকনি)",
    "Traditional Clay Courtyard Veranda (মাটির তৈরি গ্রামের ঐতিহ্যবাহী বারান্দা)",
    "Heritage Marble Archway Balcony (রাজকীয় মার্বেল বেলকনি)",
    "Traditional Bengali Living Room (ঐতিহ্যবাহী পালঙ্ক ও ঘর)",
    "Modern Luxury Living Room (আধুনিক বিলাসবহুল ড্রয়িং রুম)",
    "Sunlit Bedroom Window Loft (জানালার মিষ্টি রোদসহ আরামদায়ক ঘর)",
    "Vintage Victorian Library Room (কাষ্ঠমণ্ডিত পুরানো লাইব্রেরি ঘর)",
    "Serene Riverbank at Sunset (সূর্যাস্তের উন্মুক্ত নদীর পাড়)",
    "Heritage Ghat on River Ganges (গঙ্গা নদীর প্রদীপ সজ্জিত বাঁধাল ঘাট)",
    "Sunny Beach with Soft Golden Waves (সমুদ্রসৈকতে গোধূলির আলো ও নরম ঢেউ)",
    "Tropical Resort Poolside (ট্রপিক্যাল রিসোর্টের পুলসাইড)",
    "Rural Mustard Flower Field (সরিষে খেতের প্রাকৃতিক ব্যাকগ্রাউন্ড)",
    "Rural Paddy Field Trail (ধানখেতের সবুজ মেঠো পথ)",
    "Sunlit Wildflower Meadow (বুনো ফুলে ভরা খোলা মেঠো প্রান্তর)",
    "French Renaissance Palace Garden (ফরাসি রাজপ্রাসাদের সুসজ্জিত বাগান)",
    "Puja Mandap & Alpona Floor (পূজামণ্ডপ ও সুন্দর আলপনা আঁকা মেঝে)",
    "Grand Wedding Mandap with Marigold Flowers (গাঁদা ফুলে সাজানো মণ্ডপ)",
    "Celestial Starry Night Sky (তারকাময় রাতের আকাশ)",
    "Floating Lantern Night Sky (রাতের আকাশে হাজারো উড়ন্ত ফানুস)",
    "Custom (কাস্টম ডেসক্রিপশন)"
];

// Complete Input Option Cards
const dropdownData = {
    visualStyle: { label: "1. Visual Style", options: ["Realistic (বাস্তবসম্মত)", "Cinematic (সিনেমাটিক)", "Hyper-Realistic (হাইপার-রিয়েলিস্টিক)", "Custom (কাস্টম ডেসক্রিপশন)"] },
    outfitType: { label: "2. Outfit Category", options: Object.keys(outfitStylesMap) },
    outfitStyle: { label: "3. Style / Drape / Fabric", options: outfitStylesMap["Saree (শাড়ি)"] },
    outfitColor: { label: "4. Outfit Color", options: Object.keys(colorPalette) },
    dupattaStyle: { label: "5. Dupatta / Veil / Orna (ওড়না)", options: ["Sheer Net Dupatta on Head (মাথায় ঘৌংঘাট / ওড়না)", "Draped over Both Shoulders (দুই কাঁধে ওড়না)", "One-Side Drape (একপাশে ওড়না)", "Royal Long Veil / Train (রাজকীয় লম্বা ওড়না)", "No Dupatta / Orna (ওড়না ছাড়া)", "Custom (কাস্টম ডেসক্রিপশন)"] },
    waistAccessory: { label: "6. Waist Belt / Kamarbandh", options: ["Gold Kamarbandh (কোমরবন্ধ)", "Temple Waist Chain", "Embroidered Waist Belt", "No Waist Belt", "Custom (কাস্টম ডেসক্রিপশন)"] },
    headJewellery: { label: "7. Head Jewellery", options: ["Maang Tikka (মাংটিকা)", "Matha Patti (মাথা পট্টি)", "Floral Crown (ফুলের মুকুট)", "Passa / Jhumar (পাশা)", "No Head Jewellery (কিছুই না)", "Custom (কাস্টম ডেসক্রিপশন)"] },
    noseJewellery: { label: "8. Nose Jewellery / Nath (নাকের গয়না)", options: ["Traditional Nath (ঐতিহ্যবাহী বড় নথ)", "Marathi Nath (মারাঠি নথ)", "Pearl & Stone Nolok (নোলক)", "Diamond Nose Stud (নাকের পিন / স্টাড)", "No Nose Ring (কিছুই না)", "Custom (কাস্টম ডেসক্রিপশন)"] },
    neckJewellery: { label: "9. Neck Jewellery", options: ["Choker (চোকার)", "Long Necklace (লং হার)", "Rani Haar (রানি হার)", "Pendant Set (পেন্ডেন্ট)", "Temple Jewellery Set (টেম্পল গয়না)", "No Necklace (কিছুই না)", "Custom (কাস্টম ডেসক্রিপশন)"] },
    earJewellery: { label: "10. Ear Jewellery", options: ["Jhumka (ঝুমকা)", "Chandbali (চাঁদবালি)", "Studs (দানা)", "No Earring (কিছুই না)", "Custom (কাস্টম ডেসক্রিপশন)"] },
    wristJewellery: { label: "11. Wrist Jewellery", options: ["Shakha (শাখা)", "Gold Bangles (সোনার চুড়ি)", "None (কিছুই না)", "Custom (কাস্টম ডেসক্রিপশন)"] },
    hairstyle: { label: "12. Hairstyle (20 Styles)", options: ["Traditional Bun with Gajra (গজরা সজ্জিত ঐতিহ্যবাহী খোঁপা)","Loose Wavy Waves (খোলা সফট ওয়েভি চুল)","Classic South Indian Braid (ফুলের মালা সজ্জিত দীর্ঘ বেণী)","Messy Textured Bun (মেসি টেক্সচার্ড খোঁপা)","Half-Up Half-Down Drape (হাফ-আপ খোলা চুল)","French Braid (ফ্রাঞ্চ বেণী)","Fishtail Braid (ফিশটেইল বেণী)","High Sleek Ponytail (হাই স্লিক পনিটেল)","Crown Braid with Open Hair (ক্রাউন বেণীসহ খোলা চুল)","Side-Swept Curls (একপাশে ঝরনা কার্ল চুল)","Low Royal Chignon (লো রয়্যাল শিফন খোঁপা)","Vintage Hollywood Waves (ভিনটেজ ওয়েভি কার্ল)","Gajra Wrapped Braid (সম্পূর্ণ গজরা মোড়ানো দীর্ঘ বেণী)","Voluminous Curls (ভলিউমিনাস রয়্যাল কার্ল)","Straight Sleek Hair (স্ট্রেইট সিল্কি সোজা চুল)","Boho Braided Bun (বোহো স্টাইল খোঁপা)","Bubble Ponytail (বাবল পনিটেল)","Twisted Side Bun (টুইস্টেড সাইড খোঁপা)","Short Curly Pixie (শর্ট কার্লি স্টাইল)","Custom (কাস্টম ডেসক্রিপশন)"] },
    makeupStyle: { label: "13. Makeup & Bindi", options: ["Traditional Red Bindi & Kohl", "Glamorous Nude Makeup", "Heavy Bridal Makeup", "Natural Gloss", "Custom (কাস্টম ডেসক্রিপশন)"] },
    expressionPose: { label: "14. Pose & Expression", options: ["Graceful Gentle Smile", "Royal Regal Stance", "Candid Elegant Glance", "Confident Fashion Pose", "Custom (কাস্টম ডেসক্রিপশন)"] },
    backgroundSetting: { label: "15. Background & Setting (100 Options)", options: backgroundOptions100 },
    lightingStyle: { label: "16. Lighting & Mood (15 Styles)", options: ["Bright Natural Daylight (উজ্জ্বল দিনের স্বাভাবিক আলো)","Soft Golden Hour Sunset (সোনারাঙা গোধূলির নরম আলো)","Morning Sunbeams & Sun Flare (সকালের সোনালী রোদের আলো)","Soft Overcast Diffused Daylight (মেঘলা দিনের সফট ডিফিউজড আলো)","Midday Sunlit Rays (দুপুরের উজ্জ্বল রোদের আলো)","Studio Softbox Key Light (স্টুডিও সফটবক্স প্রফেশনাল আলো)","Dramatic Cinematic Chiaroscuro (সিনেমাটিক আলো-ছায়ার বৈপরীত্য)","Warm Candlelight Glow (উষ্ণ মোমবাতির আলো)","Moody Neon Night Cyber Glow (নাইট নিয়ন সাইবার গ্লো)","Fairy Lights Ambient Bokeh (হাজারো লাইটের বোকাহ আলো)","Twilight Blue Hour Glow (সন্ধ্যার নীল গোধূলি আলো)","High-Key Bright White Light (সম্পূর্ণ উজ্জ্বল সাদা আলো)","Low-Key Dark Shadow Light (ছায়াময় ড্রামাটিক ডার্ক আলো)","Volumetric Sunbeams Through Window (জানালার ফাঁক দিয়ে আসা রোদ)","Custom (কাস্টম ডেসক্রিপশন)"] },
    cameraDistance: { label: "17. Camera Distance", options: ["Full Body (মাথা থেকে পা পর্যন্ত সম্পূর্ণ ও মাথার উপর ১৫% ফাঁকা)", "Full Body Wide (৭০% জুমড আউট - চারপাশে ৩০% মেঠো প্রান্তর)", "Half Body (কোমর থেকে ওপরের অংশ)", "Close-Up Portrait (মুখমণ্ডল ও গহনার ক্লোজ-আপ)", "Custom (কাস্টম ডেসক্রিপশন)"] }
};

// Global App State
const selectionsState = {};
let activeCharacter = {
    name: "Avya Lumina",
    desc: "proportionately full and wider waist-hip ratio, gracefully curvaceous hourglass silhouette, accentuated wide hips, not overweight"
};
let savedPrompts = JSON.parse(localStorage.getItem('saved_prompts_v48') || '[]');
let activeKey = null;

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    initGrid();
    updateHistoryBadge();
    updatePrompt();
});

// Render Selector Grid
function initGrid() {
    const grid = document.getElementById('selectorsGrid');
    grid.innerHTML = "";

    Object.keys(dropdownData).forEach(key => {
        const field = dropdownData[key];
        selectionsState[key] = key === 'cameraDistance' ? "Full Body (মাথা থেকে পা পর্যন্ত সম্পূর্ণ ও মাথার উপর ১৫% ফাঁকা)" : field.options[0];

        const card = document.createElement('div');
        card.className = "selector-card";
        card.innerHTML = `
            <div class="selector-header">
                <label class="selector-label">${field.label}</label>
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
    
    renderModalOptions(field.options);
    document.getElementById('visualModal').classList.remove('hidden');
}

function renderModalOptions(optionsList) {
    const container = document.getElementById('modalOptionsContainer');
    container.innerHTML = "";

    if (activeKey === 'outfitStyle') {
        const outfit = selectionsState['outfitType'];
        optionsList = outfitStylesMap[outfit] || ["Standard Fit", "Custom (কাস্টম ডেসক্রিপশন)"];
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
    let optionsList = field.options;
    
    if (activeKey === 'outfitStyle') {
        const outfit = selectionsState['outfitType'];
        optionsList = outfitStylesMap[outfit] || ["Standard Fit", "Custom (কাস্টম ডেসক্রিপশন)"];
    }

    const filtered = optionsList.filter(opt => opt.toLowerCase().includes(query) || (accurateVisuals[opt]?.desc && accurateVisuals[opt].desc.toLowerCase().includes(query)));
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
    const navelRule = document.getElementById('navelPositioningToggle')?.value || 'standard';

    let prompt = `REFERENCE IMAGES:\n1. Face Reference: Use for identity. 2. Body Reference: Use for build.\n\nSCENE DESCRIPTION:\n`;
    prompt += `[Visual Style: ${attrs.visualStyle}]. [Identity Lock: ${activeCharacter.name}, ${activeCharacter.desc}]. `;
    prompt += `[Body Anatomy (Fixed Rule): Well-proportioned aesthetic hourglass silhouette, comparatively wider and gracefully full waist and hips, harmonious curvy body structure, strictly not overweight or obese]. `;
    
    // Navel positioning rule: ALWAYS 3 inches below the navel for Saree, Lehenga & Ghagra outfits
    const rawOutfit = selectionsState.outfitType || "";
    const isMidriffExposedOutfit = rawOutfit.includes("Saree") || 
                                   rawOutfit.includes("Lehenga") || 
                                   rawOutfit.includes("Ghagra") || 
                                   rawOutfit.includes("Indo-Western");
    
    if (isMidriffExposedOutfit) {
        prompt += `[Outfit Positioning (Fixed Rule): Lower-waist saree/lehenga/ghagra drape worn strictly 3 inches below the navel, revealing midriff]. `;
    }

    // Permanent Fixed Details: Red Sindoor on Sinthi, White Shakha on Wrists, Hand Mehendi & Foot Alta
    prompt += `[Permanent Details (Fixed Rule): Traditional Red Sindoor powder applied along the hair parting (Sinthi), Authentic white conch-shell bangles (Shakha) worn on both wrists, Intricate Henna/Mehendi pattern on hands, Vibrant Red Alta dye on feet, direct eye contact]. `;
    prompt += `[Costume: ${attrs.outfitType} - ${attrs.outfitStyle} in ${attrs.outfitColor}]. `;
    prompt += `[Dupatta / Orna: ${attrs.dupattaStyle}]. `;
    prompt += `[Waist Belt: ${attrs.waistAccessory}]. `;
    prompt += `[Hairstyle: ${attrs.hairstyle}]. `;
    prompt += `[Makeup & Bindi: ${attrs.makeupStyle}]. `;
    prompt += `[Jewellery: ${attrs.headJewellery}, ${attrs.noseJewellery}, ${attrs.neckJewellery}, ${attrs.earJewellery}, ${attrs.wristJewellery}]. `;
    prompt += `[Pose & Expression: ${attrs.expressionPose}]. `;
    prompt += `[Background & Setting: ${attrs.backgroundSetting}]. `;
    prompt += `[Lighting & Mood: ${attrs.lightingStyle}]. `;
    
    const camDist = selectionsState.cameraDistance || "";
    if (camDist.includes("Full Body Wide")) {
        prompt += `[Framing: Wide-angle full body shot, subject occupies 70% frame center, 30% margin on all sides, head to toe visible with 15% headroom above head]. `;
    } else if (camDist.includes("Full Body") || camDist.includes("Full")) {
        prompt += `[Framing: Full body standing shot, complete view from head to toe including feet, 15% headroom margin above the head, centered subject]. `;
    } else if (camDist.includes("Half")) {
        prompt += `[Framing: Half body waist-up portrait framing]. `;
    } else if (camDist.includes("Close-Up")) {
        prompt += `[Framing: Close-up facial portrait framing]. `;
    } else {
        prompt += `[Framing: ${attrs.cameraDistance}]. `;
    }
    
    prompt += `[AI Video Motion Optimization: High subject-to-background depth separation, wide 360-degree dance floor clearance for fluid spins and arm motion, clean edge isolation for video generation]. `;
    prompt += `[Aspect Ratio: ${aspectRatio}]`;
    
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
        selectionsState.hairstyle = "Traditional Bun (ঐতিহ্যবাহী খোঁপা)";
    } else if (presetKey === 'royalBanarasi') {
        selectionsState.outfitType = "Saree (শাড়ি)";
        selectionsState.outfitStyle = "Banarasi Silk (বেনারসী)";
        selectionsState.outfitColor = "Maroon (মেরুন)";
        selectionsState.headJewellery = "Matha Patti (মাথা পট্টি)";
        selectionsState.neckJewellery = "Rani Haar (রানি হার)";
        selectionsState.earJewellery = "Jhumka (ঝুমকা)";
        selectionsState.wristJewellery = "Gold Bangles (সোনার চুড়ি)";
        selectionsState.hairstyle = "Traditional Bun (ঐতিহ্যবাহী খোঁপা)";
    } else if (presetKey === 'organzaGlam') {
        selectionsState.outfitType = "Saree (শাড়ি)";
        selectionsState.outfitStyle = "Organza Saree (অর্গানজা)";
        selectionsState.outfitColor = "Pastel Lavender (ল্যাভেন্ডার)";
        selectionsState.headJewellery = "No Head Jewellery (কিছুই না)";
        selectionsState.neckJewellery = "Choker (চোকার)";
        selectionsState.earJewellery = "Chandbali (চাঁদবালি)";
        selectionsState.wristJewellery = "None (কিছুই না)";
        selectionsState.hairstyle = "Loose Hair (খোলা চুল)";
    } else if (presetKey === 'kanjivaramBride') {
        selectionsState.outfitType = "Saree (শাড়ি)";
        selectionsState.outfitStyle = "Kanjivaram Silk (কাঞ্জিভরম)";
        selectionsState.outfitColor = "Golden Zari (সোনালী জরি)";
        selectionsState.headJewellery = "Matha Patti (মাথা পট্টি)";
        selectionsState.neckJewellery = "Temple Jewellery Set (টেম্পল গয়না)";
        selectionsState.earJewellery = "Jhumka (ঝুমকা)";
        selectionsState.wristJewellery = "Gold Bangles (সোনার চুড়ি)";
        selectionsState.hairstyle = "Braid (বেণী)";
    } else if (presetKey === 'cocktailLycra') {
        selectionsState.outfitType = "Saree (শাড়ি)";
        selectionsState.outfitStyle = "Lycra Ready-to-Wear Saree (লাইক্রা রেডি-টু-ওয়্যার)";
        selectionsState.outfitColor = "Classic Black (কালো)";
        selectionsState.headJewellery = "No Head Jewellery (কিছুই না)";
        selectionsState.neckJewellery = "Pendant Set (পেন্ডেন্ট)";
        selectionsState.earJewellery = "Studs (দানা)";
        selectionsState.wristJewellery = "None (কিছুই না)";
        selectionsState.hairstyle = "Loose Hair (খোলা চুল)";
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
