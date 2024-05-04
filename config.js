import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'

global.owner = [['917605902011', 'GURU', true], ['27653224519', 'Kay⁹⁵', true], ['']] //Number of owners

//global.pairingNumber = "" //put your bot number here

global.mods = ['917605902011', '27653224519']
global.prems = ['917605902011', '32460248586', '27653224519']
global.allowed = ['917605902011', '32460248586', '27653224519']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = [
  '29d4b59a4aa687ca',
  '5LTV57azwaid7dXfz5fzJu',
  'cb15ed422c71a2fb',
  '5bd33b276d41d6b4',
  'HIRO',
  'kurrxd09',
  'ebb6251cc00f9c63',
]
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']

global.APIs = {
  // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net',
}
global.APIKeys = {
  // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`,
  'https://api-fgmods.ddns.net': 'fg-dylux',
}

// Sticker WM
global.botname = '「Ø₮Ⱡ」ØɄ₮Ⱡ₳₩Ƶ'
global.premium = 'true'
global.packname = '「Ø₮Ⱡ」ØɄ₮Ⱡ₳₩Ƶ-TOP 1 SA'
global.author = 'Kay⁹⁵'
global.menuvid = 'https://telegra.ph/file/4243a6ba2fc3257e9cc8e.mp4'
global.igfg = '▢ Follow on Instagram\nhttps://whatsapp.com/channel/0029VaYsAMI9sBI1dl0Oh03q\n'
global.dygp = 'https://whatsapp.com/channel/0029VaYsAMI9sBI1dl0Oh03q'
global.fgsc = 'https://whatsapp.com/channel/0029VaYsAMI9sBI1dl0Oh03q'
global.fgyt = 'https://whatsapp.com/channel/0029VaYsAMI9sBI1dl0Oh03q'
global.fgpyp = 'https://whatsapp.com/channel/0029VaYsAMI9sBI1dl0Oh03q'
global.fglog = 'https://raw.githubusercontent.com/Guru322/api/Guru/guru.jpg'
global.thumb = fs.readFileSync('./Assets/Gurulogo.jpg')

global.wait = '*⌛ 「Ø₮Ⱡ」_Charging..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌'
global.xmoji = '🔥'

global.multiplier = 69
global.maxwarn = '3'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
