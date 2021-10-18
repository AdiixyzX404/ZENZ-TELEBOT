const fs = require('fs-extra')
const { prefix } = JSON.parse(fs.readFileSync('./config.json'))

// MAIN MENU
exports.menu = (jumlahUser, role, namaUserr, tgl, uptem, result) => {
    return `Hello ${namaUserr} 👋

Your role : ${role}

Ramadhan is coming in ${result} day

*MENU PLAYER*
⤷ ${prefix}me ? cek profile
⤷ ${prefix}level ? cek level
⤷ ${prefix}limit ? cek limit
⤷ ${prefix}cekpremium ? cek premium
⤷ ${prefix}leaderboard ? cek top 10
⤷ ${prefix}daftar ? total pendaftar
⤷ ${prefix}listpremium ? total premium

*MENU ISLAMIC*
⤷ ${prefix}audiosurah ? audio surah
⤷ ${prefix}audioayat ? audio ayat
⤷ ${prefix}quran ? random alquran
⤷ ${prefix}kisah ? kisah nabi
⤷ ${prefix}asmaul ? random asmaulhusna
⤷ ${prefix}jadwal ? cek jadwal
⤷ ${prefix}listsurah ? list surah
⤷ ${prefix}kota ? list kota

*MENU STICKER*
⤷ ${prefix}sticker ? sticker gambar
⤷ ${prefix}stickergif ? sticker video
⤷ ${prefix}stickerp ? sticker nocrop
⤷ ${prefix}scircle ? rounded sticker
⤷ ${prefix}emoji ? emoji to sticker
⤷ ${prefix}takestick ? ubah wm sticker
⤷ ${prefix}toimg ? sticker to image
⤷ ${prefix}tomedia ? sticker to video
 
*MENU HIBURAN*
⤷ ${prefix}zen ? chatt gabut
⤷ ${prefix}tebakgambar ? kuis tebakgambar
⤷ ${prefix}caklontong ? kuis caklontong
⤷ ${prefix}artinama ? artinama kamu
⤷ ${prefix}jodoh ? artinama jodoh
⤷ ${prefix}weton ? artinama weton
⤷ ${prefix}jadian ? arti tanggal jadian
⤷ ${prefix}tebakumur ? tebakumur kamu

*MENU RANDOM*
⤷ ${prefix}creepyfact ? random creepyfact
⤷ ${prefix}cerpen ? random cerita pendek
⤷ ${prefix}cerhor ? random cerita horror
⤷ ${prefix}puisi ? random puisi
⤷ ${prefix}funik ? fakta unik
⤷ ${prefix}fakta ? random fakta
⤷ ${prefix}pantun ? random pantun
⤷ ${prefix}katabijak ? random katabijak
⤷ ${prefix}meme ? random meme indo
⤷ ${prefix}darkjokes ? random meme dark
⤷ ${prefix}wancak ? random meme 1cak
⤷ ${prefix}lolivid ? random loli video
⤷ ${prefix}bts ? random bts
⤷ ${prefix}exo ? random exo
⤷ ${prefix}cecan ? random cecan
⤷ ${prefix}cogan ? random cogan
⤷ ${prefix}blackpink ? random blackpink

*MENU ANIME*
⤷ ${prefix}art ? random art
⤷ ${prefix}elf ? random elf
⤷ ${prefix}loli ? random loli
⤷ ${prefix}neko ? random neko
⤷ ${prefix}yuri ? random yuri
⤷ ${prefix}yaoi ? random yaoi
⤷ ${prefix}kanna ? random kanna
⤷ ${prefix}waifu ? random waifu
⤷ ${prefix}shota ? random shota
⤷ ${prefix}husbu ? random husbu
⤷ ${prefix}sagiri ? random sagiri
⤷ ${prefix}shinobu ? random shinobu
⤷ ${prefix}megumin ? random megumin
⤷ ${prefix}wallnime ? random wallnime

*MENU QUOTES*
⤷ ${prefix}quotes ? random quotes
⤷ ${prefix}bucin ? bucin quotes
⤷ ${prefix}dilan ? dilan quotes
⤷ ${prefix}kanye ? kanye quotes
⤷ ${prefix}quotenime ? anime quotes

*MENU STALKER*
⤷ ${prefix}igstalk ? stalk instagram
⤷ ${prefix}twitslak ? stalk twitter
⤷ ${prefix}github ? stalk github
⤷ ${prefix}ttstalk ? stalk tiktok
⤷ ${prefix}ytstalk ? youtube stalk

*MENU MEDIA*
⤷ ${prefix}wanted ? gtav effect
⤷ ${prefix}wasted ? gtav effect
⤷ ${prefix}gta5 ? gtav logo
⤷ ${prefix}ttefek ? tiktok logo
⤷ ${prefix}tahta ? hartatahta
⤷ ${prefix}nulis ? nulis di kertas
⤷ ${prefix}phlogo ? phlogo edit
⤷ ${prefix}smeme ? buat meme
⤷ ${prefix}trump ? twitter comment
⤷ ${prefix}phcomment ? ph comment
⤷ ${prefix}ytcomment ? youtube comment
⤷ ${prefix}cek ? nsfw checker
⤷ ${prefix}ocr ? image to text
⤷ ${prefix}qr ? qr reader

*MENU WEBZONE*
⤷ ${prefix}ssweb ? screenshots website
⤷ ${prefix}character ? character info
⤷ ${prefix}manga ? manga info
⤷ ${prefix}anime ? anime info
⤷ ${prefix}wait ? mencari source anime
⤷ ${prefix}kusonime ? kusonime info
⤷ ${prefix}otakudesu ? otakudesu info
⤷ ${prefix}nhsearch ? nhentai search
⤷ ${prefix}lk21 ? layarkaca21 search
⤷ ${prefix}drakorongoing ? drakorongoing result
⤷ ${prefix}wattpad ? wattpad result
⤷ ${prefix}wattpadsearch ? wattpad search
⤷ ${prefix}spamsms ? spamsms kenomor

*MENU INFORMATION*
⤷ ${prefix}heroml ? mlhero info
⤷ ${prefix}genshin ? genshin info
⤷ ${prefix}wiki ? wikipedia info
⤷ ${prefix}translate ? translate text
⤷ ${prefix}jadwaltv ? jadwaltv info
⤷ ${prefix}infogempa ? infogempa indo
⤷ ${prefix}lirik ? lirik music
⤷ ${prefix}cuaca ? infogempa indo
⤷ ${prefix}infogempa ? cuaca info
⤷ ${prefix}covidindo ? covidindo info

*MENU DOWNLOAD*
⤷ ${prefix}play ? youtube music
⤷ ${prefix}playvideo ? youtube video
⤷ ${prefix}pin ? pintereset image
⤷ ${prefix}pindl ? pintereset video
⤷ ${prefix}facebook ? facebook video
⤷ ${prefix}tiktok ? tiktok video
⤷ ${prefix}tiktokmusic ? tiktok music
⤷ ${prefix}twitter ? twitter video
⤷ ${prefix}igdl ? instagram video

*MENU ADMIN*
⤷ ${prefix}add ? add to group
⤷ ${prefix}kick ? kick from group
⤷ ${prefix}promote ? promote to admin
⤷ ${prefix}demote ? demote from admin
⤷ ${prefix}leave ? BOT keluar group
⤷ ${prefix}group ? group enable / disable
⤷ ${prefix}leveling ? leveling enable / disable
⤷ ${prefix}antilink ? antilink enable / disable
⤷ ${prefix}nsfw ? nsfw enable / disable

verified User : ${jumlahUser}
active : ${uptem}`
}

exports.menun = (jumlahUser, role, namaUserr, tgl, uptem, tot, result) => {
    return `Hello ${namaUserr} 👋

Bot name : IAmAdyyyz Botz
Role : ${role}
Total Hit : ${tot}

Ramadhan is coming in ${result} day

*MENU PLAYER*
⤷ ${prefix}me ? cek profile
⤷ ${prefix}level ? cek level
⤷ ${prefix}limit ? cek limit
⤷ ${prefix}cekpremium ? cek premium
⤷ ${prefix}leaderboard ? cek top 10
⤷ ${prefix}daftar ? total pendaftar
⤷ ${prefix}listpremium ? total premium

*MENU ISLAMIC*
⤷ ${prefix}audiosurah ? audio surah
⤷ ${prefix}audioayat ? audio ayat
⤷ ${prefix}quran ? random alquran
⤷ ${prefix}kisah ? kisah nabi
⤷ ${prefix}asmaul ? random asmaulhusna
⤷ ${prefix}jadwal ? cek jadwal
⤷ ${prefix}listsurah ? list surah
⤷ ${prefix}kota ? list kota

*MENU STICKER*
⤷ ${prefix}sticker ? sticker gambar
⤷ ${prefix}stickergif ? sticker video
⤷ ${prefix}stickerp ? sticker nocrop
⤷ ${prefix}scircle ? rounded sticker
⤷ ${prefix}emoji ? emoji to sticker
⤷ ${prefix}takestick ? ubah wm sticker
⤷ ${prefix}toimg ? sticker to image
⤷ ${prefix}tomedia ? sticker to video
 
*MENU HIBURAN*
⤷ ${prefix}zen ? chatt gabut
⤷ ${prefix}tebakgambar ? kuis tebakgambar
⤷ ${prefix}caklontong ? kuis caklontong
⤷ ${prefix}artinama ? artinama kamu
⤷ ${prefix}jodoh ? artinama jodoh
⤷ ${prefix}weton ? artinama weton
⤷ ${prefix}jadian ? arti tanggal jadian
⤷ ${prefix}tebakumur ? tebakumur kamu

*MENU RANDOM*
⤷ ${prefix}creepyfact ? random creepyfact
⤷ ${prefix}cerpen ? random cerita pendek
⤷ ${prefix}cerhor ? random cerita horror
⤷ ${prefix}puisi ? random puisi
⤷ ${prefix}funik ? fakta unik
⤷ ${prefix}fakta ? random fakta
⤷ ${prefix}pantun ? random pantun
⤷ ${prefix}katabijak ? random katabijak
⤷ ${prefix}meme ? random meme indo
⤷ ${prefix}darkjokes ? random meme dark
⤷ ${prefix}wancak ? random meme 1cak
⤷ ${prefix}lolivid ? random loli video
⤷ ${prefix}bts ? random bts
⤷ ${prefix}exo ? random exo
⤷ ${prefix}cecan ? random cecan
⤷ ${prefix}cogan ? random cogan
⤷ ${prefix}blackpink ? random blackpink

*MENU ANIME*
⤷ ${prefix}art ? random art
⤷ ${prefix}elf ? random elf
⤷ ${prefix}loli ? random loli
⤷ ${prefix}neko ? random neko
⤷ ${prefix}yuri ? random yuri
⤷ ${prefix}yaoi ? random yaoi
⤷ ${prefix}kanna ? random kanna
⤷ ${prefix}waifu ? random waifu
⤷ ${prefix}shota ? random shota
⤷ ${prefix}husbu ? random husbu
⤷ ${prefix}sagiri ? random sagiri
⤷ ${prefix}shinobu ? random shinobu
⤷ ${prefix}megumin ? random megumin
⤷ ${prefix}wallnime ? random wallnime

*MENU QUOTES*
⤷ ${prefix}quotes ? random quotes
⤷ ${prefix}bucin ? bucin quotes
⤷ ${prefix}dilan ? dilan quotes
⤷ ${prefix}kanye ? kanye quotes
⤷ ${prefix}quotenime ? anime quotes

*MENU STALKER*
⤷ ${prefix}igstalk ? stalk instagram
⤷ ${prefix}twitslak ? stalk twitter
⤷ ${prefix}github ? stalk github
⤷ ${prefix}ttstalk ? stalk tiktok
⤷ ${prefix}ytstalk ? youtube stalk

*MENU MEDIA*
⤷ ${prefix}wanted ? gtav effect
⤷ ${prefix}wasted ? gtav effect
⤷ ${prefix}gta5 ? gtav logo
⤷ ${prefix}ttefek ? tiktok logo
⤷ ${prefix}tahta ? hartatahta
⤷ ${prefix}nulis ? nulis di kertas
⤷ ${prefix}phlogo ? phlogo edit
⤷ ${prefix}smeme ? buat meme
⤷ ${prefix}trump ? twitter comment
⤷ ${prefix}phcomment ? ph comment
⤷ ${prefix}ytcomment ? youtube comment
⤷ ${prefix}cek ? nsfw checker
⤷ ${prefix}ocr ? image to text
⤷ ${prefix}qr ? qr reader

*MENU WEBZONE*
⤷ ${prefix}ssweb ? screenshots website
⤷ ${prefix}character ? character info
⤷ ${prefix}manga ? manga info
⤷ ${prefix}anime ? anime info
⤷ ${prefix}wait ? mencari source anime
⤷ ${prefix}kusonime ? kusonime info
⤷ ${prefix}otakudesu ? otakudesu info
⤷ ${prefix}nhsearch ? nhentai search
⤷ ${prefix}lk21 ? layarkaca21 search
⤷ ${prefix}drakorongoing ? drakorongoing result
⤷ ${prefix}wattpad ? wattpad result
⤷ ${prefix}wattpadsearch ? wattpad search
⤷ ${prefix}spamsms ? spamsms kenomor

*MENU INFORMATION*
⤷ ${prefix}heroml ? mlhero info
⤷ ${prefix}genshin ? genshin info
⤷ ${prefix}wiki ? wikipedia info
⤷ ${prefix}translate ? translate text
⤷ ${prefix}jadwaltv ? jadwaltv info
⤷ ${prefix}infogempa ? infogempa indo
⤷ ${prefix}lirik ? lirik music
⤷ ${prefix}cuaca ? infogempa indo
⤷ ${prefix}infogempa ? cuaca info
⤷ ${prefix}covidindo ? covidindo info

*MENU DOWNLOAD*
⤷ ${prefix}play ? youtube music
⤷ ${prefix}playvideo ? youtube video
⤷ ${prefix}pin ? pintereset image
⤷ ${prefix}pindl ? pintereset video
⤷ ${prefix}facebook ? facebook video
⤷ ${prefix}tiktok ? tiktok video
⤷ ${prefix}tiktokmusic ? tiktok music
⤷ ${prefix}twitter ? twitter video
⤷ ${prefix}igdl ? instagram video

*MENU NSFW 18+*
⤷ ${prefix}yuri18 ? nsfw yuri
⤷ ${prefix}pussy ? nsfw pussy
⤷ ${prefix}nekos ? nsfw nekos
⤷ ${prefix}lesbian ? nsfw lesbian
⤷ ${prefix}kuni ? nsfw kuni
⤷ ${prefix}cumsluts ? nsfw cumsluts
⤷ ${prefix}classic ? nsfw classic
⤷ ${prefix}bj ? nsfw bj
⤷ ${prefix}trap ? nsfw trap
⤷ ${prefix}tits ? nsfw tits
⤷ ${prefix}pussyart ? nsfw pussyart
⤷ ${prefix}kemonomimi ? nsfw kemonomimi
⤷ ${prefix}kitsune ? nsfw kitsune
⤷ ${prefix}keta ? nsfw keta
⤷ ${prefix}holo ? nsfw holo
⤷ ${prefix}holoero ? nsfw holoero
⤷ ${prefix}hentai ? nsfw hentai
⤷ ${prefix}futanari ? nsfw futanari
⤷ ${prefix}femdom ? nsfw femdom
⤷ ${prefix}erofeet ? nsfw erofeet
⤷ ${prefix}feet ? nsfw feet
⤷ ${prefix}ero ? nsfw ero
⤷ ${prefix}erokitsune ? nsfw erokitsune
⤷ ${prefix}erokemonomimi ? nsfw erokemonomimi
⤷ ${prefix}eroneko ? nsfw eroneko
⤷ ${prefix}eroyuri ? nsfw eroyuri
⤷ ${prefix}cumarts ? nsfw cumarts
⤷ ${prefix}blowjob ? nsfw blowjob
⤷ ${prefix}spank ? nsfw spank
⤷ ${prefix}gasm ? nsfw gasm

*MENU ADMIN*
⤷ ${prefix}add ? add to group
⤷ ${prefix}kick ? kick from group
⤷ ${prefix}promote ? promote to admin
⤷ ${prefix}demote ? demote from admin
⤷ ${prefix}leave ? BOT keluar group
⤷ ${prefix}group ? group enable / disable
⤷ ${prefix}leveling ? leveling enable / disable
⤷ ${prefix}antilink ? antilink enable / disable
⤷ ${prefix}nsfw ? nsfw enable / disable

Verified User : ${jumlahUser}
Active : ${uptem}`
}

exports.menuOwner = () => {
    return `*MAIN OWNER*

⤷ ${prefix}broadcast ? bc all chatt
⤷ ${prefix}clear ? clear chatt
⤷ ${prefix}log ? log number
⤷ ${prefix}grouplog ? grouplog
⤷ ${prefix}. ? bug groupchatt`
}
exports.menuKerang = () => {
    return `
# MENU KERANG AJAIB
╭───────────────
│ *${prefix}gantengcek*
├───
│ *${prefix}cantikcek*
│ ⤷ _rate cantik_
├───────────────
│ *${prefix}pbucin*
│ ⤷ _rate kebucinan_
├───────────────
│ *${prefix}watak*
│ ⤷ _cek watak_
├───────────────
│ *${prefix}hobby*
│ ⤷ _cek hobby_
├───────────────
│ *${prefix}apakah*
│ ⤷ _ex: ${prefix}apakah kamu lesbi ?_
├───────────────
│ *${prefix}rate*
│ ⤷ _ex: ${prefix}rate seberapa bucin ?_
├───────────────
│ *${prefix}bisakah*
│ ⤷ _ex: ${prefix}bisakah doi ?_
├───────────────
│ *${prefix}kapankah*
│ ⤷ _ex: ${prefix}kapankah dia mati ?_
├───────────────
│ *${prefix}Kutuk*
│ ⤷ _ex: ${prefix}kutuk @tag | karena_
├───────────────
│ *${prefix}Santet*
│ ⤷ _ex: ${prefix}santet @tag | karena_
╰───────────────
	`
}

// USER
exports.wait = () => {
    return 'Give me process this shit!.'
}

exports.minimalDb = () => {
    return `_Perlu setidaknya 10 user yang memiliki level di database!_`
}

exports.wrongFormat = () => {
    return `Format salah.`
}

exports.limit = () => {
    return `Sayang sekali Limit yg kamu punya telah habis! Silakan

> *Tunggu hingga jam 04:00 WIB*
> *Atau Beli Premium*`
}

exports.notPremium = () => {
    return `perintah ini khusus premium.`
}

exports.doneOwner = () => {
    return `Sudah selesai, Owner-Adyy~`
}

exports.listBlock = (blockNumber) => {
    return `TOTAL USER YANG ADII BLOKIR
    
*${blockNumber.length} Pengguna :*\n\n`
}

exports.afkOn = (pushname, reason) => {
    return `Fitur AFK berhasil diaktifkan!\n\n*Nama*: ${pushname}\n*Alasan*: ${reason}`
}

exports.afkOnAlready = () => {
    return `Fitur AFK telah diaktifkan sebelumnya.`
}

exports.afkMentioned = (getReason, getTime) => {
    return `Sssttt! Orangnya lagi AFK, jangan diganggu dulu, panggil lagi nanti..\n\n*Alasanya :* ${getReason}\n*Sejak :* ${getTime}`
}

exports.afkDone = (pushname) => {
    return `*${pushname}* telah kembali dari AFK! Selamat datang kembali`
}


// NSFW
exports.notNsfw = () => {
    return `Command NSFW belum diaktifkan.`
}

exports.nsfwOn = () => {
    return `Command NSFW berhasil\nCek menu nsfw di ${prefix}menu\n\n*fitur nsfw akan di hapus pada awal bulan ramadhan / puasa, skrng puas"in dlu gapapa*`
}

exports.nsfwOff = () => {
    return `Command NSFW berhasil dinonaktifkan.`
}

exports.nsfwAlready = () => {
    return `Command NSFW sudah diaktifkan sebelumnya.`
}

// REGISTER
exports.notRegistered = () => {
    return `ketik ${prefix}verify untuk menggunakan BOT`
}

exports.registered = (namaUser, sender) => {
    return `
╭────────────────────
│ ⤷ Nama : ${namaUser}
│ ⤷ ID : ${sender}
╰────────────────────

Verifikasi selesai silahkan ketik
${prefix}help

Bila belum paham ketik 
${prefix}rules
    `
}

// GROUP
exports.addedGroup = () => {
    return `Halo Terima Kasih Telah Mengundangku Ke Group Ini, Para Member Silahkan Daftar Dengan Ketik ${prefix}register`
}

exports.groupOnly = () => {
    return `Perintah ini khusus didalam group.`
}

exports.adminOnly = () => {
    return `Perintah ini khusus admin group.`
}

exports.profile = (username, namer, namek, premi, level, requiredXp, xp, limitnya) => {
    return `USER INFO
╭───────────
│ Name : ${username}
│ Username : ${namer}
│ ID : ${namek}
│ Premium : ${premi}
│
│ Level : ${level}
│ Limit : ${limitnya}
│ Xp : ${xp} / ${requiredXp}
╰───────────`
}

exports.linkDetected = () => {
    return `Kamu mengirim link Group Lain, di group chat ini!\n\nBOT Akan mengeluarkan mu..`
}

exports.botNotAdmin = () => {
    return `Jadikan adyy admin group.`
}

exports.detectorOnAlready = () => {
    return `Fitur antilink telah diaktifkan sebelumnya.`
}

exports.detectorOn = () => {
    return `Fitur antilink berhasil diaktifkan.`
}

exports.detectorOff = () => {
    return `Fitur antilink berhasil dimatikan.`
}


// LEVELING
exports.levelingOn = () => {
    return `Fitur leveling berhasil diaktifkan.`
}
exports.levelingOff = () => {
    return `Fitur leveling berhasil dimatikan.`
}
exports.levelingOnAlready = () => {
    return `Fitur leveling telah diaktifkan sebelumnya.`
}
exports.levelingNotOn = () => {
    return `Fitur leveling belum diaktifkan!
aktifkan ${prefix}leveling enable`
}

exports.levelNull = () => {
    return `Kamu belum memiliki level!`
}

exports.rules = () => {
    return `
❏ *R U L E S*
══════════════════
1. Dilarang spam bot. 
2. Dilarang mengeksploitasi bot.

Sanksi: *BLOCKED*

Jika sudah dipahami rules-nya
silakan lanjut baca biar paham !
══════════════════

sisa limit yg kamu punya hanya 20 perhari dan otomatis reset pada jam 04:00 WIB

*UPDATE* : limit di reset 2x tiap jam 04:00 & 15:00 WIB
Jadi Kalian Punya 50 Limit dalam sehari, harap gunakan dengan bijak

*Cara menggunakan Bot*

Prefux BOT adalah : [ *${prefix}* ] Untuk membuka menu ketik ${prefix}help

jika ada error harap hubungi owner bot
dengan ketik ${prefix}owner.

dan jika masih bingung cara menggunakan bot silakan join group bot di bawah ini.

-Adyy's`
}

exports.beliPrem = () => {
    return `
╭──「 I N F O 」
│
├ • Premium
│
│ ⤷ Price : 15k / 30 day
│ ⤷ Khusus Pulsa Jadi : 20k
│
├ • Feature
│
│ ⤷ Unlimited Limit
│ ⤷ Unlock All Command
│ ⤷ BOT Join Group
│ ⤷ No Cooldown
│ ⤷ 24h Online
│ ⤷ Get XP
│
├ • Pembayaran
│
│ ⤷ Gopay ( Diutamakan )
│ ⤷ Dana
│ ⤷ OvO
│ ⤷ Pulsa Telkomsel
│
├ • Ke nomor : 081288339373
│
├ • Contact owner :
│   wa.me/6281288820823
│
╰──「 Arigathanks 」`
}
