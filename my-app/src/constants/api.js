/*const wpAdminApi = 'https://admin.bel-solar.com';
const otherLangWebLocation = 'https://bel-solar.by';
const BY = false;*/
const BY = true;
let waa, olw;
if (BY) {
  waa = 'https://admin.bel-solar.by';
  olw = 'https://bel-solar.com';
} else {
  waa = 'https://admin.bel-solar.com';
  olw = 'https://bel-solar.by';
}
const wpAdminApi = waa;
const otherLangWebLocation = olw;

const mailerLocation = 'https://bel-solar.by';
export { wpAdminApi, mailerLocation, otherLangWebLocation, BY };
