import { es, en } from '../lib/multi-language/_default.js' 
export async function before(m,{ conn }) {
let idioma  = global.db.data.users[m.sender].midLanguage
let MID_GB
  
if (idioma == "es") {
MID_GB = es
} else {
MID_GB = mid || es
}
global.mid = MID_GB	
}
