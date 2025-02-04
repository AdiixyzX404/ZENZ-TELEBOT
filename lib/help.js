const fs = require('fs')
const config = JSON.parse(fs.readFileSync(`./config.json`))

exports.start = async(zen, pushname) => {
    text = `Hello there ${pushname}! Im a Telegram bot build with Telegraf. Created by [Adyyzz](${config.ownerLink}).`
    await zen.replyWithMarkdown(text, { disable_web_page_preview: true })
}

exports.help = async(zen, pushname) => {
    text = `Hello ${pushname} 👋\n\nPrefix : /\nCommand : /help\nHere are the available commands you can use :`
    options = {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Islamic', callback_data: 'islami' },
                    { text: 'Downloader', callback_data: 'downloader' }
                ],

                [
                    { text: 'Text Pro Me', callback_data: 'textpro' },
                    { text: 'Photo Oxy', callback_data: 'phoxy' }
                ],

                [
                    { text: 'Ephoto 360', callback_data: 'ephoto' },
                    { text: 'Random Image', callback_data: 'randimage' }
                ],

                [
                    { text: 'Random Text', callback_data: 'randtext' },
                    { text: 'Anime', callback_data: 'anime' }
                ],

                [
                    { text: 'Movie & Story', callback_data: 'movie' }
                ],
            ]

        }
    }

    try {
        await zen.editMessageText(text, options)
    } catch {
        await zen.reply(text, options)
    }
}

exports.islami = async(zen) => {
    prefix = config.prefix
    text = `I S L A M  M E N U

${prefix}asmaulhusna
${prefix}kisahnabi
${prefix}listsurah
${prefix}alquran
${prefix}alquranaudio
${prefix}jadwalsholat
`
    await zen.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Back', callback_data: 'help' }
                ]
            ]
        }
    })
}

exports.download = async(zen) => {
    prefix = config.prefix
    text = `D O W N L O A D E R  M E N U

${prefix}play query
${prefix}ytsearch query
${prefix}ytmp3 link
${prefix}ytmp4 link
${prefix}tiktoknowm link
${prefix}tiktokmusic link
${prefix}spotify link
${prefix}spotifysearch query
${prefix}jooxplay query
${prefix}zippyshare link
${prefix}pinterest query
${prefix}pinterestdl link
${prefix}pixiv query
${prefix}pixivdl pixiv_id
`
    await zen.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Back', callback_data: 'help' }
                ]
            ]
        }
    })
}

exports.movie = async(zen) => {
    prefix = config.prefix
    text = `M O V I E  &  S T O R Y
M E N U

${prefix}drakorongoing
${prefix}lk21 query
${prefix}wattpad url_wattpad
${prefix}wattpadsearch query
${prefix}cerpen
${prefix}ceritahoror
`
    await zen.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Back', callback_data: 'help' }
                ]
            ]
        }
    })
}


exports.anime = async(zen) => {
    prefix = config.prefix
    text = `A N I M E  M E N U

${prefix}wait
${prefix}manga query
${prefix}anime query
${prefix}character query
${prefix}kusonime url_kusonime
${prefix}kusonimesearch query
${prefix}otakudesu url_otakudesu
${prefix}otakudesusearch query
`
    await zen.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Back', callback_data: 'help' }
                ]
            ]
        }
    })
}

exports.randtext = async(zen) => {
    prefix = config.prefix
    text = `R A N D O M  T E X T
M E N U

${prefix}quotes
${prefix}quotesdilan
${prefix}quotesanime
${prefix}quotesimage
${prefix}faktaunik
${prefix}katabijak
${prefix}pantun
${prefix}bucin
${prefix}randomnama
`
    await zen.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Back', callback_data: 'help' }
                ]
            ]
        }
    })
}

exports.randimage = async(zen) => {
    prefix = config.prefix
    text = `R A N D O M  I M A G E

${prefix}art
${prefix}bts
${prefix}exo
${prefix}elf
${prefix}loli
${prefix}neko
${prefix}waifu
${prefix}shota
${prefix}husbu
${prefix}sagiri
${prefix}shinobu
${prefix}megumin
${prefix}wallnime
${prefix}chiisaihentai
${prefix}trap
${prefix}blowjob
${prefix}yaoi
${prefix}ecchi
${prefix}hentai
${prefix}ahegao
${prefix}hololewd
${prefix}sideoppai
${prefix}animefeets
${prefix}animebooty
${prefix}animethighss
${prefix}hentaiparadise
${prefix}animearmpits
${prefix}hentaifemdom
${prefix}lewdanimegirls
${prefix}biganimetiddies
${prefix}animebellybutton
${prefix}hentai4everyone
${prefix}bj
${prefix}ero
${prefix}cum
${prefix}feet
${prefix}yuri
${prefix}trap
${prefix}lewd
${prefix}feed
${prefix}eron
${prefix}solo
${prefix}gasm
${prefix}poke
${prefix}anal
${prefix}holo
${prefix}tits
${prefix}kuni
${prefix}kiss
${prefix}erok
${prefix}smug
${prefix}baka
${prefix}solog
${prefix}feetg
${prefix}lewdk
${prefix}waifu
${prefix}pussy
${prefix}femdom
${prefix}cuddle
${prefix}hentai
${prefix}eroyuri
${prefix}cum_jpg
${prefix}blowjob
${prefix}erofeet
${prefix}holoero
${prefix}classic
${prefix}erokemo
${prefix}fox_girl
${prefix}futanari
${prefix}lewdkemo
${prefix}wallpaper
${prefix}pussy_jpg
${prefix}kemonomimi
${prefix}nsfw_avatar
`
    await zen.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Back', callback_data: 'help' }
                ]
            ]
        }
    })
}

exports.textpro = async(zen) => {
    prefix = config.prefix
    text = `T E X T  P R O  M E
M E N U

${prefix}blackpink text
${prefix}neon text
${prefix}greenneon text
${prefix}advanceglow text
${prefix}futureneon text
${prefix}sandwriting text
${prefix}sandsummer text
${prefix}sandengraved text
${prefix}metaldark text
${prefix}neonlight text
${prefix}holographic text
${prefix}text1917 text
${prefix}minion text
${prefix}deluxesilver text
${prefix}newyearcard text
${prefix}bloodfrosted text
${prefix}halloween text
${prefix}jokerlogo text
${prefix}fireworksparkle text
${prefix}natureleaves text
${prefix}bokeh text
${prefix}toxic text
${prefix}strawberry text
${prefix}box3d text
${prefix}roadwarning text
${prefix}breakwall text
${prefix}icecold text
${prefix}luxury text
${prefix}cloud text
${prefix}summersand text
${prefix}horrorblood text
${prefix}thunder text
${prefix}pornhub text1 text2
${prefix}glitch text1 text2
${prefix}avenger text1 text2
${prefix}space text1 text2
${prefix}ninjalogo text1 text2
${prefix}marvelstudio text1 text2
${prefix}lionlogo text1 text2
${prefix}wolflogo text1 text2
${prefix}steel3d text1 text2
${prefix}wallgravity text1 text2
`
    await zen.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Back', callback_data: 'help' }
                ]
            ]
        }
    })
}


exports.phoxy = async(zen) => {
    prefix = config.prefix
    text = `P H O T O  O X Y

${prefix}shadow text
${prefix}cup text
${prefix}cup1 text
${prefix}romance text
${prefix}smoke text
${prefix}burnpaper text
${prefix}lovemessage text
${prefix}undergrass text
${prefix}love text
${prefix}coffe text
${prefix}woodheart text
${prefix}woodenboard text
${prefix}summer3d text
${prefix}wolfmetal text
${prefix}nature3d text
${prefix}underwater text
${prefix}golderrose text
${prefix}summernature text
${prefix}letterleaves text
${prefix}glowingneon text
${prefix}fallleaves text
${prefix}flamming text
${prefix}harrypotter text
${prefix}carvedwood text
${prefix}tiktok text1 text2
${prefix}arcade8bit text1 text2
${prefix}battlefield4 text1 text2
${prefix}pubg text1 text2
`
    await zen.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Back', callback_data: 'help' }
                ]
            ]
        }
    })
}


exports.ephoto = async(zen) => {
    prefix = config.prefix
    text = `E P H O T O  3 6 0

${prefix}wetglass text
${prefix}multicolor3d text
${prefix}watercolor text
${prefix}luxurygold text
${prefix}galaxywallpaper text
${prefix}lighttext text
${prefix}beautifulflower text
${prefix}puppycute text
${prefix}royaltext text
${prefix}heartshaped text
${prefix}birthdaycake text
${prefix}galaxystyle text
${prefix}hologram3d text
${prefix}greenneon text
${prefix}glossychrome text
${prefix}greenbush text
${prefix}metallogo text
${prefix}noeltext text
${prefix}glittergold text
${prefix}textcake text
${prefix}starsnight text
${prefix}wooden3d text
${prefix}textbyname text
${prefix}writegalacy text
${prefix}galaxybat text
${prefix}snow3d text
${prefix}birthdayday text
${prefix}goldplaybutton text
${prefix}silverplaybutton text
${prefix}freefire text

`
    await zen.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Back', callback_data: 'help' }
                ]
            ]
        }
    })
}

exports.messageError = async(zen) => {
    await zen.reply(`Error! Please report to the [${config.owner}](${config.ownerLink}) about this`, { parse_mode: "Markdown", disable_web_page_preview: true })
}
