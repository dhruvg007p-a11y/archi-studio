// ===== EDIT THIS FILE to replace studio details, photos and copy =====
// Photos: Unsplash photo IDs. Replace an ID with your own, or use a full URL / a /public path.
export const img=(id,w=1400)=>id.startsWith('http')||id.startsWith('/')?id:`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

// Confirmed business number (10 digits). WhatsApp and tap-to-call links are built from this.
const LOCAL_NUMBER='6398897967',COUNTRY_CODE='91';
export const waLink=(msg='Hello Archi Studio, I would like to enquire about wedding photography and videography.')=>`https://wa.me/${COUNTRY_CODE}${LOCAL_NUMBER}?text=${encodeURIComponent(msg)}`;

export const site={
  name:'Archi Studio',
  tagline:'Wedding photography & films',
  email:'',       // add the studio's real email here; email links appear automatically once set
  phone:`+${COUNTRY_CODE} ${LOCAL_NUMBER.slice(0,5)} ${LOCAL_NUMBER.slice(5)}`,
  phoneTel:LOCAL_NUMBER,   // used for tap-to-call links: tel:6398897967
  whatsapp:`${COUNTRY_CODE}${LOCAL_NUMBER}`,   // digits only, with country code (91 = India)
  instagram:'',   // add the real Instagram URL here; Instagram links appear automatically once set
  address:'Chandausi, Uttar Pradesh, India',
  map:'https://www.google.com/maps/search/?api=1&query=Chandausi,+Uttar+Pradesh,+India',
  hero:'1519741497674-611481863552',
  aboutImg:'1511285560929-80b456fea0bc',
  founders:'Dhruv Gupta',
};
export const nav=[{to:'/',label:'Home'},{to:'/portfolio',label:'Portfolio'},{to:'/services',label:'Services'},{to:'/stories',label:'Weddings'},{to:'/about',label:'About'},{to:'/contact',label:'Contact'}];

export const categories=['All','Weddings','Pre-Weddings','Engagements','Wedding Films','Couples','Events'];
const p=(id,title,location,desc,cat)=>({id,title,location,desc,cat});
export const portfolio=[
  p('1519741497674-611481863552','The first look','Lake Como, Italy','Quiet seconds before the aisle.','Weddings'),
  p('1511285560929-80b456fea0bc','Golden hour vows','Big Sur, California','Late light over the cliffs.','Weddings'),
  p('1606216794074-735e91aa2c92','Together at last','Udaipur, India','A palace courtyard celebration.','Couples'),
  p('1583939003579-730e3918a45a','Veil in the wind','Amalfi Coast, Italy','Coastal pre-wedding portraits.','Pre-Weddings'),
  p('1465495976277-4387d4b0b4c6','Garden ceremony','Provence, France','Soft florals and long tables.','Weddings'),
  p('1522673607200-164d1b6ce486','The proposal walk','Santorini, Greece','An engagement at sunrise.','Engagements'),
  p('1469371670807-013ccf25f16a','Reception glow','Napa Valley, California','Candlelight and the first dance.','Events'),
  p('1460978812857-470ed1c77af0','Film: Elena & James','Lake Como, Italy','Cinematic highlight film stills.','Wedding Films'),
  p('1537633552985-df8429e8048b','Rings and details','Tuscany, Italy','The small things that matter.','Engagements'),
  p('1520854221256-17451cc331bf','Morning light','Kyoto, Japan','Getting ready, unhurried.','Pre-Weddings'),
  p('1519225421980-715cb0215aed','Film: Sofia & Arjun','Udaipur, India','Three-day celebration, in motion.','Wedding Films'),
  p('1529634806980-85c3dd6d34ac','Quiet together','Lisbon, Portugal','An evening session for two.','Couples'),
];
export const stories=[
 {slug:'elena-and-james',couple:'Elena & James',location:'Lake Como, Italy',date:'14 June 2025',cat:'Weddings',cover:'1519741497674-611481863552',
  story:'Elena and James planned a small wedding for thirty guests on the shore of Lake Como. Rain was forecast all week and cleared an hour before the ceremony. We spent the day following the two of them, and their families, as they slowed down and enjoyed it.',
  gallery:['1519741497674-611481863552','1465495976277-4387d4b0b4c6','1537633552985-df8429e8048b','1469371670807-013ccf25f16a','1583939003579-730e3918a45a','1460978812857-470ed1c77af0'],video:'https://www.youtube.com/embed/LXb3EKWsInQ'},
 {slug:'sofia-and-arjun',couple:'Sofia & Arjun',location:'Udaipur, India',date:'2 February 2025',cat:'Weddings',cover:'1606216794074-735e91aa2c92',
  story:'Two cultures, three days, and one very long dance floor. Sofia and Arjun asked us to capture the rituals as they felt, not as a checklist. The result is a film and a gallery full of colour, music and grandparents laughing.',
  gallery:['1606216794074-735e91aa2c92','1519225421980-715cb0215aed','1520854221256-17451cc331bf','1522673607200-164d1b6ce486','1529634806980-85c3dd6d34ac','1511285560929-80b456fea0bc'],video:'https://www.youtube.com/embed/LXb3EKWsInQ'},
 {slug:'claire-and-noah',couple:'Claire & Noah',location:'Big Sur, California',date:'21 September 2024',cat:'Weddings',cover:'1511285560929-80b456fea0bc',
  story:'Claire and Noah eloped with their closest friends on a clifftop above the Pacific. No schedule, no stage: just vows at sunset and dinner outdoors. We kept the camera low and the day unforced.',
  gallery:['1511285560929-80b456fea0bc','1460978812857-470ed1c77af0','1469371670807-013ccf25f16a','1465495976277-4387d4b0b4c6','1583939003579-730e3918a45a','1537633552985-df8429e8048b'],video:'https://www.youtube.com/embed/LXb3EKWsInQ'},
];
export const services=[
 {title:'Wedding Photography',img:'1465495976277-4387d4b0b4c6',desc:'Honest, light-filled coverage from getting ready to the last dance.',inc:['Up to 10 hours of coverage','Two photographers','Online gallery, 600+ edited images','Print release']},
 {title:'Wedding Videography',img:'1469371670807-013ccf25f16a',desc:'Your day told through real sound, real faces and unhurried frames.',inc:['Full-day coverage','Vows and speeches recorded','Highlight film (4–6 min)','Ceremony edit']},
 {title:'Pre-Wedding Photography',img:'1583939003579-730e3918a45a',desc:'A relaxed session in a place that means something to you both.',inc:['2 hour session','Location guidance','40+ edited images','Outfit change']},
 {title:'Engagement Photography',img:'1522673607200-164d1b6ce486',desc:'Get comfortable in front of the camera before the big day.',inc:['1.5 hour session','Styling tips','30+ edited images','Save-the-date files']},
 {title:'Cinematic Wedding Films',img:'1460978812857-470ed1c77af0',desc:'A full short film with score, voice-over and slow motion.',inc:['8–12 min feature film','Licensed music','Drone footage where permitted','Social teaser']},
 {title:'Albums & Prints',img:'1537633552985-df8429e8048b',desc:'Archival, hand-bound heirlooms for the years ahead.',inc:['Linen or leather covers','Fine-art paper','Parent copies','Framed prints']},
];
export const testimonials=[
 {name:'Elena & James',text:'We forgot the camera was there, and yet every important moment was kept. Our families cried at the film.'},
 {name:'Sofia & Arjun',text:'Calm, kind and incredibly talented. They understood the traditions and made three loud days feel effortless.'},
 {name:'Claire & Noah',text:'The photographs feel like us. Not posed, not stiff. We still look at them every week.'},
];
