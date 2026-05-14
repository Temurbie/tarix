interface IJavob {
  matn: string;
  correct: boolean;
}

export interface ITest {
  id: number;
  savol: string;
  img?: string;
  javob: IJavob[];
}

export const DATATEST: ITest[] = [
  {
    id: 1,
    savol: "Ahamoniylardan kimlarning hukmronligi davrida O‘rta Osiyo xalqlari yunon-fors urushlarida qatnashgan edilar?",
    javob: [
      { matn: "Kambiz II va Doro I davrida", correct: false },
      { matn: "Doro I va Doro III davrida", correct: false },
      { matn: "Doro I va Kserks davrida", correct: true },
      { matn: "Kir II va Doro I davrida", correct: false }
    ]
  },
  {
    id: 2,
    savol: "Bosib olingan mamlakatlarni itoatda tutmoq uchun ahamoniylar yagona davlatni alohida viloyatlarga bo‘lib tashlagan edilar. Bu viloyatlar qanday atalgan?",
    javob: [
      { matn: "Sagaris", correct: false },
      { matn: "satraplik", correct: true },
      { matn: "Jogir", correct: false },
      { matn: "Iqto", correct: false }
    ]
  },
  {
    id: 3,
    savol: "Aleksandr qachon Makedoniya podshosi bo‘lgan edi?",
    javob: [
      { matn: "milavv340-yil", correct: false },
      { matn: "milavv326-yil", correct: false },
      { matn: "milavv336-yil", correct: true },
      { matn: "milavv330-yil", correct: false }
    ]
  },
  {
    id: 4,
    savol: "Makedoniya podshosi Aleksandr nechanchi yilda Sharqqa yurish boshladi?",
    javob: [
      { matn: "Milavv 330-yil", correct: false },
      { matn: "Milavv 334-yilda", correct: true },
      { matn: "Milavv 329-yil", correct: false },
      { matn: "Milavv 336-yil", correct: false }
    ]
  },
  {
    id: 5,
    savol: "Qachon O‘qtoyning vafot etishi munosabati bilan Botuxon Volgabo‘yi dashtlariga qaytadi?",
    javob: [
      { matn: "1253-yil", correct: false },
      { matn: "1273-yil", correct: false },
      { matn: "1243-yil", correct: true },
      { matn: "1263-yil", correct: false }
    ]
  },
  {
    id: 6,
    savol: "Mo‘g‘ullar imperiyasi asoschisi … barcha diniy e’tiqodlarga birday munosabatda bo‘lishni vasiyat qilgan edi",
    javob: [
      { matn: "Jonibek", correct: false },
      { matn: "Berkaxon", correct: false },
      { matn: "Chingizxon", correct: true },
      { matn: "O‘zbekxon", correct: false }
    ]
  },
  {
    id: 7,
    savol: "Dehli sultonligi qaysi yillari hikm surgan?",
    javob: [
      { matn: "1208-1526", correct: false },
      { matn: "1206-1540 yy", correct: false },
      { matn: "1206-1526 yy", correct: true },
      { matn: "1210-1527", correct: false }
    ]
  },
  {
    id: 8,
    savol: "Sayyidlar sulolasi Hindistonda qaysi yillari hukmronlik qildilar?",
    javob: [
      { matn: "1414-1453 yy", correct: false },
      { matn: "1414-1451 yy", correct: true },
      { matn: "1410-1445 yy", correct: false },
      { matn: "1408-1453 yy", correct: false }
    ]
  },
  {
    id: 9,
    savol: "Hindistonga kirib kelgan Z M Bobur kim bilan jang olib bordi?",
    javob: [
      { matn: "Muhamad Tug‘luq", correct: false },
      { matn: "Ibrohim Lodiyga", correct: true },
      { matn: "Sulton Mahmud", correct: false },
      { matn: "Bahlul Lodiy", correct: false }
    ]
  },
  {
    id: 10,
    savol: "Demokratiya so‘zining ma’nosi nima ?",
    javob: [
      { matn: "davlat boshqaruvi", correct: false },
      { matn: "xalq hokimyati", correct: true },
      { matn: "oliy boshqaruv", correct: false },
      { matn: "podsho hokimyati", correct: false }
    ]
  },
  {
  id: 11,
  savol: "Afina hukmdori etib saylangan Solon nechanchi yilda xalq boshqaruv tizimidagi aristokratiya tizimini demokratiya tizimiga almashtirdi ?",
  javob: [
    { matn: "Mil avv294 yilda", correct: false },
    { matn: "Mil avv794 yilda", correct: false },
    { matn: "Mil avv594 yilda", correct: true },
    { matn: "Mil avv194 yilda", correct: false }
  ]
},
{
  id: 12,
  savol: "Qadimgi Yunonistonning shimolidan janubiga olib boradigan birdan-bir yo‘l qayerdan o‘tgan?",
  javob: [
    { matn: "Peloponnesdan", correct: false },
    { matn: "Fermopil darasidan", correct: true },
    { matn: "Attikadan", correct: false },
    { matn: "Egey dengizidan", correct: false }
  ]
},
{
  id: 13,
  savol: "Yunonlar va forslar o‘rtasida Marafon jangi qachon bo‘lib o‘tgan?",
  javob: [
    { matn: "milavv480-yil", correct: false },
    { matn: "milavv490-yil", correct: true },
    { matn: "milavv409-yil", correct: false },
    { matn: "milavv479-yil", correct: false }
  ]
},
{
  id: 14,
  savol: "«Uch yuz spartalik jasorati» voqeasi qaysi jangda bo‘lganligini aniqlang",
  javob: [
    { matn: "Plateya jangi", correct: false },
    { matn: "Kann yonidagi jang", correct: false },
    { matn: "Fermopil jangi", correct: true },
    { matn: "Marafon jangi", correct: false }
  ]
},
{
  id: 15,
  savol: "O‘rta Osiyo hududini bosib olishga harakat qilib ko‘rgan dastlabki fors podshosi kim bo‘lgan?",
  javob: [
    { matn: "Doro II", correct: false },
    { matn: "Kserks", correct: false },
    { matn: "Kir II", correct: true },
    { matn: "Doro I", correct: false }
  ]
},
{
  id: 16,
  savol: "Fors shohi Kir II qachon ulkan lashkar bilan massagetlar ustiga yurish qiladi?",
  javob: [
    { matn: "milavv545-yil", correct: false },
    { matn: "milavv522-yil", correct: false },
    { matn: "milavv530-yil", correct: true },
    { matn: "milavv540-yil", correct: false }
  ]
},
{
  id: 17,
  savol: "Qadimda kim “tarix otasi” deya yuritilgan?",
  javob: [
    { matn: "Platon", correct: false },
    { matn: "Gerodot", correct: true },
    { matn: "Gomer", correct: false },
    { matn: "Poliyen", correct: false }
  ]
},
{
  id: 18,
  savol: "Fors shohi Kir II ning massagetlar ustiga yurishi haqida qaysi tarixchi yozib qoldirgan?",
  javob: [
    { matn: "Gomer", correct: false },
    { matn: "Poliyen", correct: false },
    { matn: "Gerodot", correct: true },
    { matn: "Platon", correct: false }
  ]
},
{
  id: 19,
  savol: "Kir II massagetlar ustiga yurish qilganda massagetlar malikasi kim bo‘lgan?",
  javob: [
    { matn: "Parangiz", correct: false },
    { matn: "Tug‘shoda", correct: false },
    { matn: "To‘maris", correct: true },
    { matn: "Ravshanak", correct: false }
  ]
},
{
  id: 20,
  savol: "Fors podshosi Doro I qachon saklar ustiga yurish qilgan edi?",
  javob: [
    { matn: "milavv510-yil", correct: false },
    { matn: "milavv549-yil", correct: false },
    { matn: "milavv519-yil", correct: true },
    { matn: "milavv529-yil", correct: false }
  ]
},
{
  id: 21,
  savol: "Ahamoniylar sulolasidan bo‘lgan oxirgi shohni aniqlang?",
  javob: [
    { matn: "Kserks", correct: false },
    { matn: "Doro II", correct: false },
    { matn: "Doro III", correct: true },
    { matn: "Doro I", correct: false }
  ]
},
{
  id: 22,
  savol: "Maroqanda shahri hozirgi qaysi shahar hisoblanadi?",
  javob: [
    { matn: "Marg‘ilon", correct: false },
    { matn: "Samarqand", correct: true },
    { matn: "Buxoro", correct: false },
    { matn: "Marv", correct: false }
  ]
},
{
  id: 23,
  savol: "Makedoniyalik Aleksandr bilan Spitaman o‘rtasidagi hal qiluvchi jang qachon bo‘lib o‘tgan edi?",
  javob: [
    { matn: "milavv320-yil kuzida", correct: false },
    { matn: "milavv338-yil kuzida", correct: false },
    { matn: "milavv328-yil kuzida", correct: true },
    { matn: "milavv318-yil kuzida", correct: false }
  ]
},
{
  id: 24,
  savol: "O‘rta Osiyoda Aleksandrga qarshi ko‘tarilgan qo‘zg‘olonga kim rahbarlik qilgan?",
  javob: [
    { matn: "Bess", correct: false },
    { matn: "Spitaman", correct: true },
    { matn: "Sparangiz", correct: false },
    { matn: "Oksiart", correct: false }
  ]
},
{
  id: 25,
  savol: "Makedoniyalik Aleksandr qachon vafot etadi?",
  javob: [
    { matn: "Mil avv 312-yil", correct: false },
    { matn: "Mil avv 323-yil", correct: true },
    { matn: "Mil avv 313-yil", correct: false },
    { matn: "Mil avv 318-yil", correct: false }
  ]
},
{
  id: 26,
  savol: "Qaysi bo‘g‘ozdagi Vizantiy shahri Rim imperiyasining poytaxti deb e’lon qilindi?",
  javob: [
    { matn: "Foros", correct: false },
    { matn: "Gibraltar", correct: false },
    { matn: "Bosfor", correct: true },
    { matn: "Elbrun", correct: false }
  ]
},
{
  id: 27,
  savol: "Mamlakatni markazlashtirish maqsadida Chingizxon qayerdagi qal’ani o‘z davlatining poytaxtiga aylantiradi?",
  javob: [
    { matn: "Sharqiy Turkiston", correct: false },
    { matn: "Qoraqurum", correct: true },
    { matn: "Turfan", correct: false },
    { matn: "O‘tukan", correct: false }
  ]
},
{
  id: 28,
  savol: "Bosh shomon butun xalq oldida Temuchinga Chingizxon unvonini qaysi daryo bo‘yida beradi?",
  javob: [
    { matn: "Irtish", correct: false },
    { matn: "Tiger", correct: false },
    { matn: "Onon", correct: true },
    { matn: "Dnepr", correct: false }
  ]
},
{
  id: 29,
  savol: "Muhim masalalarni hal etish uchun … chaqirilgan",
  javob: [
    { matn: "Yasoq", correct: false },
    { matn: "Devon", correct: false },
    { matn: "qurultoy", correct: true },
    { matn: "Majlis", correct: false }
  ]
},
{
  id: 30,
  savol: "Qachon qadimgi dunyo tarixining yakunlanish sanasi sifatida qayd qilindi?",
  javob: [
    { matn: "Milodiy 452-yilda", correct: false },
    { matn: "milodiy 476-yil", correct: true },
    { matn: "Milodiy 455-yilda", correct: false },
    { matn: "milav476-yil", correct: false }
  ]
},
{
  id: 31,
  savol: "Rim imperiyasining G‘arbiy va Sharqiy imperiyalarga bo‘linishi sababi nimada?",
  javob: [
    { matn: "Bo‘linmagan", correct: false },
    { matn: "dushman hujumi", correct: false },
    { matn: "Feodesiyning o‘limi", correct: true },
    { matn: "gotlarning hujumi", correct: false }
  ]
},
{
  id: 32,
  savol: "Rimning eng katta amfi teatri qaysi?",
  javob: [
    { matn: "Afina", correct: false },
    { matn: "Kolizey", correct: true },
    { matn: "Artemida", correct: false },
    { matn: "Akropol", correct: false }
  ]
},
{
  id: 33,
  savol: "Manchjou-Go qo‘g‘irchoq davlatinio qaysi davlat tuzgan edi?",
  javob: [
    { matn: "Fransiya", correct: false },
    { matn: "AQSh", correct: false },
    { matn: "Yaponiya", correct: true },
    { matn: "Buyuk Britaniya", correct: false }
  ]
},
{
  id: 34,
  savol: "1933-yili qaysi davlat Millatlar Ligasidan chiqdi?",
  javob: [
    { matn: "Buyuk Britaniya", correct: false },
    { matn: "Yaponiya", correct: true },
    { matn: "Fransiya", correct: false },
    { matn: "AQSh", correct: false }
  ]
},
{
  id: 35,
  savol: "Nechanchi yillarda imzolangan shartnomalar va jahondagi kuchlarning yangi nisbati xalqaro munosabatlarning Versal-Vashington tizimi nomini oldi?",
  javob: [
    { matn: "1920-1930-yillar", correct: false },
    { matn: "1914-1918-yillar", correct: false },
    { matn: "1919-1923-yillar", correct: true },
    { matn: "1929-1933-yillar", correct: false }
  ]
},
{
  id: 36,
  savol: "Versal tinchlik shartnomasiga ko‘ra Birinchi jahon urushining boshlanishiga yagona javobgar deb qaysi davlat e’lon qilindi?",
  javob: [
    { matn: "Fransiya", correct: false },
    { matn: "Buyuk Britaniya", correct: false },
    { matn: "Germaniya", correct: true },
    { matn: "AQSh", correct: false }
  ]
},
{
  id: 37,
  savol: "1921-yil dekabrda Vashington konferensiyasida qaysi davlatlar o‘rtasida shartnoma imzolanib ushbu davlatlarning Tinch okeani havzasidagi o‘z orollariga egalik qilish huquqlari kafolatlandi?",
  javob: [
    { matn: "AQSH, Germaniya, Fransiya, Yaponiya", correct: false },
    { matn: "Italiya, Buyuk Britaniya, Fransiya, Yaponiya", correct: false },
    { matn: "AQSH, Buyuk Britaniya, Fransiya, Yaponiya", correct: true },
    { matn: "AQSH, Buyuk Britaniya, Turkiya, Yaponiya", correct: false }
  ]
},
{
  id: 38,
  savol: "Buyuk Britaniyaning ikkinchi jahon urushi oldidan olib borgan siyosati tarixga qanday nom bilan kiradi?",
  javob: [
    { matn: "“taslimchilik” siyosati", correct: false },
    { matn: "“do‘stlik” siyosati", correct: false },
    { matn: "“tajovuzkorga yon berish” siyosati", correct: true },
    { matn: "“qo‘shilmaslik” siyosati", correct: false }
  ]
},
{
  id: 39,
  savol: "Jahon iqtisodiy inqirozi qachon boshlandi?",
  javob: [
    { matn: "1940-1960", correct: false },
    { matn: "1920-1929", correct: false },
    { matn: "1929-1933", correct: true },
    { matn: "1933-1938", correct: false }
  ]
},
{
  id: 40,
  savol: "Arab halifaligi hukmronlik qilgan yillar qaysi qatorda to‘g‘ri ko‘rsatilgan?",
  javob: [
    { matn: "630-1252yy", correct: false },
    { matn: "632-1258yy", correct: true },
    { matn: "630-1268yy", correct: false },
    { matn: "632-1252yy", correct: false }
  ]
},
{
  id: 41,
  savol: "Ummaviylar sulolasi qaysi yillari hukmronlik qilgan?",
  javob: [
    { matn: "662-748yy", correct: false },
    { matn: "660-755yy", correct: false },
    { matn: "661-750yy", correct: true },
    { matn: "663-758yy", correct: false }
  ]
},
{
  id: 42,
  savol: "Abbosiylar sulolasi qaysi yillari hukmronlik qilgan?",
  javob: [
    { matn: "758-1252yy", correct: false },
    { matn: "750-1258yy", correct: true },
    { matn: "755-1256yy", correct: false },
    { matn: "748-1258yy", correct: false }
  ]
},
{
  id: 43,
  savol: "Arab xalifaligiga qarshi Sug‘diyonada bo‘lib o‘tgan halq qo‘zg‘oloniga kim boshchilik qilgan?",
  javob: [
    { matn: "Tohir Husan", correct: false },
    { matn: "Bobek", correct: false },
    { matn: "Muqanna", correct: true },
    { matn: "Toriq ibn Said", correct: false }
  ]
},
{
  id: 44,
  savol: "Arab xalifaligiga qarshi Ozarbayjonda bo‘lib o‘tgan halq qo‘z’oloniga kim boshchilik qildi?",
  javob: [
    { matn: "Muqanna", correct: false },
    { matn: "Bobek", correct: true },
    { matn: "Abu Muslim", correct: false },
    { matn: "Toriq", correct: false }
  ]
},
{
  id: 45,
  savol: "Bayt ul-hikma” qachon tashkil topgan?",
  javob: [
    { matn: "VII asr o‘rtalari", correct: false },
    { matn: "IX asr boshlari", correct: true },
    { matn: "VIII asr oxiri", correct: false },
    { matn: "XII asr oxiri", correct: false }
  ]
},
{
  id: 46,
  savol: "Qurdoba nomi bilan atalgan amirlik qaysi davlatda tashkil topgan?",
  javob: [
    { matn: "Iroq", correct: false },
    { matn: "Ispaniya", correct: true },
    { matn: "Italiya", correct: false },
    { matn: "Xuroson", correct: false }
  ]
},
{
  id: 47,
  savol: "Arab xalifaligi davlati qaysi tarixiy voqeadan keyin butunlay barham topdi?",
  javob: [
    { matn: "Chingizxon O‘rta Osiyoni bosib olgach", correct: false },
    { matn: "Qurdoba amirligi tashkil topgach", correct: false },
    { matn: "Xulaku Iroqqa harbiy yurish qilib, Bag‘dodni egallagach", correct: true },
    { matn: "Xorazmshohlar hokimiyat tepasiga kelgach", correct: false }
  ]
},
{
  id: 48,
  savol: "Hasan masjidi qaysi shaharda barpo etilgan?",
  javob: [
    { matn: "Samarqand", correct: false },
    { matn: "Buxoro", correct: false },
    { matn: "Qohira", correct: true },
    { matn: "Tunis", correct: false }
  ]
},
{
  id: 49,
  savol: "Qadimgi Xan quldorlik imperiyasi qachon inqirozga uchradi?",
  javob: [
    { matn: "I asrda", correct: false },
    { matn: "IV asrda", correct: false },
    { matn: "III asrda", correct: true },
    { matn: "II asrda", correct: false }
  ]
},
{
  id: 50,
  savol: "Xitoyda 618-907-yillarda qaysi sulola hukumronlik qilgan?",
  javob: [
    { matn: "Suy", correct: false },
    { matn: "Tan", correct: true },
    { matn: "U Day", correct: false },
    { matn: "Sun", correct: false }
  ]
},
{
  id: 51,
  savol: "Saljuqiylar davlati qachon tashkil topgan?",
  javob: [
    { matn: "1308", correct: false },
    { matn: "938", correct: false },
    { matn: "1038", correct: true },
    { matn: "1135", correct: false }
  ]
},
{
  id: 52,
  savol: "Amir Temur va Boyazid o‘rtasidagi jang qachon bo‘lib o‘tadi?",
  javob: [
    { matn: "1401-yilning kuzida", correct: false },
    { matn: "1403-yilning yozida", correct: false },
    { matn: "1402-yilning yozida", correct: true },
    { matn: "1400-yilning kuzida", correct: false }
  ]
},
{
  id: 53,
  savol: "Umoniylar imperiyasiga qachon asos solingan?",
  javob: [
    { matn: "1399-yil", correct: false },
    { matn: "1299-yil", correct: true },
    { matn: "1269-yil", correct: false },
    { matn: "1290-yil", correct: false }
  ]
},
{
  id: 54,
  savol: "Usmonli Turklar imperiyasi qaysi yillarda hukmronlik qilgan?",
  javob: [
    { matn: "1295-1926 yillar", correct: false },
    { matn: "1239-1829 yillar", correct: false },
    { matn: "1299-1922 yillar", correct: true },
    { matn: "1299-1940 yillar", correct: false }
  ]
},
{
  id: 55,
  savol: "Mo‘g‘ullar hayotida qadimgi udumlar, diniy tasavvurlarida esa ajdodlar ruhiga sig‘inish, ………… e’tiqodlari yaxshi saqlanib qolgan. Nuqtalar o‘rniga kerakli so‘zni toping?",
  javob: [
    { matn: "Buddaviylik", correct: false },
    { matn: "Otashparastlik", correct: false },
    { matn: "Shomonlik", correct: true },
    { matn: "Zardushtiylik", correct: false }
  ]
},
{
  id: 56,
  savol: "Mamlakatni markazlashtirish maqsadida Chingizxon qayerni qal’asini o‘z davlatining poytaxtiga aylantiradi",
  javob: [
    { matn: "Sharqiy Turkiston", correct: false },
    { matn: "Turfan", correct: false },
    { matn: "Qoraqurum", correct: true },
    { matn: "O‘tukan", correct: false }
  ]
},
{
  id: 57,
  savol: "Qachon tampliyerlar ordenining «buyuk magistri» o`limga hukm etiladi?",
  javob: [
    { matn: "1293 yilda", correct: false },
    { matn: "1307 yilda", correct: false },
    { matn: "1314 yilda", correct: true },
    { matn: "1293 yilda", correct: false }
  ]
},
{
  id: 58,
  savol: "Nechanchi yillar Rim cherkovi tarixida «papalarning Avinon tutquni» nomini oladi?",
  javob: [
    { matn: "1187-1293 yillar", correct: false },
    { matn: "1202-1214 yillar", correct: false },
    { matn: "1309-1377 yillar", correct: true },
    { matn: "1261-1394 yillar", correct: false }
  ]
},
{
  id: 59,
  savol: "Yuz yillik urush qachon bo‘lib o‘tgan?",
  javob: [
    { matn: "1337-1447- yillarda", correct: false },
    { matn: "1330- 1446—yillarda", correct: false },
    { matn: "1337-1453- yillarda", correct: true },
    { matn: "1337- 1437- yillarda", correct: false }
  ]
},
{
  id: 60,
  savol: "Ispaniyada arablarga qarshi jangda Buyuk Karlning jiyani, graf … halok bo`ladi?",
  javob: [
    { matn: "Lotar", correct: false },
    { matn: "Roland", correct: true },
    { matn: "Lyudovik", correct: false },
    { matn: "Xilperik", correct: false }
  ]
},
{
  id: 61,
  savol: "Buyuk Karlning keyingi yurishlari davomida Pireneya yarimorolining arablardan tortib olingan hududlarida nima tashkil etilgan?",
  javob: [
    { matn: "Italiya davlati", correct: false },
    { matn: "Langobardlar qirolligi", correct: false },
    { matn: "Mustaqil qirollik", correct: false },
    { matn: "Ispan markasi", correct: true }
  ]
},
{
  id: 62,
  savol: "Verden shartnomasi qachon imzolangan?",
  javob: [
    { matn: "643 yilda", correct: false },
    { matn: "743 yilda", correct: false },
    { matn: "843 yilda", correct: true },
    { matn: "533 yilda", correct: false }
  ]
},
{
  id: 63,
  savol: "Rim legionlari qachon Britaniyani tashlab Italiyaga qaytadi?",
  javob: [
    { matn: "207 yilda", correct: false },
    { matn: "607 yilda", correct: false },
    { matn: "807 yilda", correct: false },
    { matn: "407 yilda", correct: true }
  ]
},
{
  id: 64,
  savol: "Qachon o‘z qo‘shini bilan Rimga kelgan Otton I ga papa Ioann XII imperatorilik tojini kiydiradi?",
  javob: [
    { matn: "862", correct: false },
    { matn: "952", correct: false },
    { matn: "1062", correct: false },
    { matn: "962", correct: true }
  ]
},
{
  id: 65,
  savol: "Germaniyada 936-973-yillarda kim hukmronlik qilgan?",
  javob: [
    { matn: "Ioann XII", correct: false },
    { matn: "Genrix", correct: false },
    { matn: "Otton", correct: true },
    { matn: "Otton III", correct: false }
  ]
},
{
  id: 66,
  savol: "527-565-yillarda Vizantiya imperiyasida kim hukmronlik qilgan?",
  javob: [
    { matn: "Konstantin", correct: false },
    { matn: "Feodesiy", correct: false },
    { matn: "Yustinian", correct: true },
    { matn: "Konstantin", correct: false }
  ]
},
{
  id: 67,
  savol: "Vizantiyaning oltin asri kimning davriga to‘g‘ri keladi?",
  javob: [
    { matn: "Feodesiy", correct: false },
    { matn: "Konstantin II", correct: false },
    { matn: "Yustinian I", correct: true },
    { matn: "Konstantin", correct: false }
  ]
},
{
  id: 68,
  savol: "Buyuk Karl joriy etgan maktablar … qoshida ochilgan edi",
  javob: [
    { matn: "maxsus maktablar", correct: false },
    { matn: "amaldorlar uylari", correct: false },
    { matn: "ibodatxona", correct: true },
    { matn: "Rasadxona", correct: false }
  ]
},
{
  id: 69,
  savol: "«Fanlar onasi “ deb atalgan shaharni aniqlang",
  javob: [
    { matn: "Novgorod", correct: false },
    { matn: "Rim", correct: false },
    { matn: "Afina", correct: true },
    { matn: "Nankin", correct: false }
  ]
},
{
  id: 70,
  savol: "Milavv IV asrda vujudga kelgan Afina akademiyasiga kim asos solgan edi?",
  javob: [
    { matn: "Suqrot", correct: false },
    { matn: "Demokrit", correct: false },
    { matn: "Sitsiron", correct: false },
    { matn: "Platon", correct: true }
  ]
},
{
  id: 71,
  savol: "O`rta asrlarda Vizantiyaning dengiz janglardagi muvaffaqiyatini ta`minlagan ixtironi aniqlang",
  javob: [
    { matn: "Katapulta", correct: false },
    { matn: "Mortira", correct: false },
    { matn: "Porox", correct: false },
    { matn: "grek olovi", correct: true }
  ]
},
{
  id: 72,
  savol: "Tan imperatori qo‘shinlarining Koreyaga qarshi urushi uning qaysi poytaxti olinishi bilan yakunlanadi?",
  javob: [
    { matn: "Panjop", correct: false },
    { matn: "Panminchjon", correct: false },
    { matn: "Pexche", correct: false },
    { matn: "Pxenyan", correct: true }
  ]
},
{
  id: 73,
  savol: "Xitoyda qaysi sulola imperatorlari shaharlarda kechasi ko‘chaga chiqishni taqiqlardi",
  javob: [
    { matn: "Suy", correct: false },
    { matn: "Sun", correct: false },
    { matn: "U Day", correct: false },
    { matn: "Tan", correct: true }
  ]
},
{
  id: 74,
  savol: "Yuz yillik urushning sababi nima edi ?",
  javob: [
    { matn: "Ikki davlat o‘rtasidagi savdo yo‘llarining talashuvi", correct: false },
    { matn: "Angliya taxtiga kimni o‘tqazish masalasi", correct: false },
    { matn: "Fransiya taxtiga kimni o‘tqazish masalasi", correct: true },
    { matn: "Ikki davlat o‘rtasidagi mustamlaka xududlarning talashuvi", correct: false }
  ]
},
{
  id: 75,
  savol: "Fransiya qirollarining an`anaviy tоj kiyadigan shahri to`g`ri berilgan javobni aniqlang",
  javob: [
    { matn: "Tuluza", correct: false },
    { matn: "Parij", correct: false },
    { matn: "Rеyms", correct: true },
    { matn: "Оrlеan", correct: false }
  ]
},
{
  id: 76,
  savol: "Botuxon yangi bosib olingan hududlarda qanday davlat tuzadi?",
  javob: [
    { matn: "Oq O‘rda xonligi", correct: false },
    { matn: "Chag‘atoy ulusi", correct: false },
    { matn: "Dachti Qipchoq", correct: false },
    { matn: "Oltin O‘rda xonligi", correct: true }
  ]
},
{
  id: 77,
  savol: "O‘rta Osiyoda Saljuqbek asos solgan sulola boshchiligida qaysi qabilalar Old Osiyoga harbiy yurish qilgan?",
  javob: [
    { matn: "Qarluq", correct: false },
    { matn: "Yag‘mo", correct: false },
    { matn: "Chigil", correct: false },
    { matn: "O‘guz", correct: true }
  ]
},
{
  id: 78,
  savol: "Saljuqiylar davlatiga kim asos solgan?",
  javob: [
    { matn: "Sulton Sanjar", correct: false },
    { matn: "Alp Arslon", correct: false },
    { matn: "El Arslon", correct: false },
    { matn: "Sulton To‘g‘rulbek", correct: true }
  ]
},
{
  id: 79,
  savol: "Arabiston yarim orolining ko`pchilik aholisi tomonidan yangi vujudga kelgan «Islom» dini qaysi yildan qabul qilindi?",
  javob: [
    { matn: "722-yil", correct: false },
    { matn: "630-yil", correct: false },
    { matn: "632-yil", correct: false },
    { matn: "610-yil", correct: true }
  ]
},
{
  id: 80,
  savol: "Eron hukmdori Xisrav I tomonidan Yamanni egallanishi natijasida karvon yo`li o`z yo`lini qaysi hududga o`zgartiradi",
  javob: [
    { matn: "Misr", correct: false },
    { matn: "Karfagenga", correct: false },
    { matn: "Dayoning nariga tomoniga", correct: false },
    { matn: "Ikki daryo oralig‘iga", correct: true }
  ]
},
{
  id: 81,
  savol: "“Xalifa” so‘zi qanday ma’noni anglatadi?",
  javob: [
    { matn: "Safdosh", correct: false },
    { matn: "Elchi", correct: false },
    { matn: "Vazir", correct: false },
    { matn: "O‘rinbosar", correct: true }
  ]
},
{
  id: 82,
  savol: "Xalifa Abu Bakr hukmronlik qilgan yillar qaysi qatorda to‘g‘ri ko‘rsatilgan?",
  javob: [
    { matn: "630-632yy", correct: false },
    { matn: "634-636yy", correct: false },
    { matn: "632-634yy", correct: true },
    { matn: "634-636yy", correct: false }
  ]
},
{
  id: 83,
  savol: "Arab xalifaligiga qarshi Ozarbayjonda milliy-ozodlik kurashi qachon bo‘lib o‘tdi?",
  javob: [
    { matn: "822-yil", correct: false },
    { matn: "894-yil", correct: true },
    { matn: "815-yil", correct: false },
    { matn: "894-yil", correct: false }
  ]
},
{
  id: 84,
  savol: "Arab xalifaligidan birinchi bo‘lib ajralib chiqqan amirlik qaysi yili tashkil topgan edi?",
  javob: [
    { matn: "756-yil", correct: true },
    { matn: "762-yil", correct: false },
    { matn: "772-yil", correct: false },
    { matn: "756-yil", correct: false }
  ]
},
{
  id: 85,
  savol: "Xulaku Bag‘dod shaharini qaysi yili egalladi?",
  javob: [
    { matn: "1252", correct: false },
    { matn: "1250", correct: false },
    { matn: "1251", correct: false },
    { matn: "1258", correct: true }
  ]
},
{
  id: 86,
  savol: "Algebra faninig asoschisi qaysi buyuk alloma nomi bilan bog‘liq?",
  javob: [
    { matn: "Al-Farg‘oniy", correct: false },
    { matn: "Pifagor", correct: false },
    { matn: "Arhimed", correct: false },
    { matn: "Al-Xorazmiy", correct: true }
  ]
},
{
  id: 87,
  savol: "Musulmonlar san’atining asosini qaysi san’at tashkil etadi?",
  javob: [
    { matn: "Musiqa", correct: false },
    { matn: "Rassomchilik", correct: false },
    { matn: "Naqqoshlik", correct: false },
    { matn: "Xattotlik", correct: true }
  ]
},
{
  id: 88,
  savol: "VI asrning ikkinchi yarmida Xitoyning birlashuviga nima turtki bo‘ladi?",
  javob: [
    { matn: "Yaponiyaning Xitoyni bosib olishi xavfi", correct: false },
    { matn: "Koreya Xitoyni bosib olishi xavfi", correct: false },
    { matn: "Tabiiy ofatlar", correct: false },
    { matn: "Turk xoqonligi istilosi xavfi", correct: true }
  ]
},
{
  id: 89,
  savol: "Xitoyda Suy sulolasi hukmronligi davri?",
  javob: [
    { matn: "907-960-yillar", correct: false },
    { matn: "618-907-yillar", correct: false },
    { matn: "589-618-yillar", correct: true },
    { matn: "960-1279-yillar", correct: false }
  ]
},
{
  id: 90,
  savol: "Xitoyda Tan sulolasi hukmronligi davri?",
  javob: [
    { matn: "907-960-yillar", correct: false },
    { matn: "618-907-yillar", correct: true },
    { matn: "589-618-yillar", correct: false },
    { matn: "960-1279-yillar", correct: false }
  ]
},
{
  id: 91,
  savol: "Xitoy Sun sulolasi davrida qaysi davlatlar bilan savdo olib boradi?",
  javob: [
    { matn: "Koreya, Bolgariya, Fransiya", correct: false },
    { matn: "Arab xalifaligi, Vizantiya, Kiyev Rusi", correct: false },
    { matn: "O‘rta Osiyo, Hindiston, Hindixitoy", correct: true },
    { matn: "Oltin O‘rda, Eron Germaniya", correct: false }
  ]
},
{
  id: 92,
  savol: "“Baytul-hikmat” – “donishmandlik uyi” kimning saroyida tashkil etiladi?",
  javob: [
    { matn: "Mansur", correct: false },
    { matn: "Sayid", correct: false },
    { matn: "Abul Abbos Abdulloh", correct: false },
    { matn: "Horun ar-Rashid", correct: true }
  ]
},
{
  id: 93,
  savol: "Ismoil Somoniy maqbarasi qayerda bunyod etilgan?",
  javob: [
    { matn: "Kordova", correct: false },
    { matn: "Granada", correct: false },
    { matn: "Qohira", correct: false },
    { matn: "Buxoro", correct: true }
  ]
},
{
  id: 94,
  savol: "Qaysi din uchun eng muqaddas tasvir xochdagi xudo siymosi bo‘lgan?",
  javob: [
    { matn: "Buddaviylik", correct: false },
    { matn: "Yahudiylik", correct: false },
    { matn: "Islom", correct: false },
    { matn: "Xristianlik", correct: true }
  ]
},
{
  id: 95,
  savol: "Yevropaliklar uchun birinchi bo‘lib Xitoyning sirli o‘lkalarini o‘z kitobida tavsiflagan sayyoh kim?",
  javob: [
    { matn: "Xristofor Kolumb", correct: false },
    { matn: "Charliz Darvin", correct: false },
    { matn: "Mendesh Pintu", correct: false },
    { matn: "Marko Polo", correct: true }
  ]
},
{
  id: 96,
  savol: "Sarrof do‘konidagi o‘rindiq nomidan kelib chiqqan atama qaysi?",
  javob: [
    { matn: "Bozor", correct: false },
    { matn: "Birja", correct: false },
    { matn: "Faktoriya", correct: false },
    { matn: "Bank", correct: true }
  ]
},
{
  id: 97,
  savol: "Venetsiyalik savdogar Marko Polo qaysi mo‘g‘ul xoni xizmatida bo‘lgan?",
  javob: [
    { matn: "Chingizxon", correct: false },
    { matn: "O‘qtoy", correct: false },
    { matn: "Chig‘atoy", correct: false },
    { matn: "Xubilay", correct: true }
  ]
},
{
  id: 98,
  savol: "1189–1192-yillarda nechanchi salib yurishi bo‘lgan?",
  javob: [
    { matn: "5", correct: false },
    { matn: "12", correct: false },
    { matn: "3", correct: true },
    { matn: "5", correct: false }
  ]
},
{
  id: 99,
  savol: "Yevropada qaysi ordenning boyliklari haqida afsonalar to‘qilgan?",
  javob: [
    { matn: "Iyezuitlar", correct: false },
    { matn: "Gospitalyerlar", correct: false },
    { matn: "Tevton(Nemis)", correct: false },
    { matn: "tampliyerlar", correct: true }
  ]
},
{
  id: 100,
  savol: "Salohiddin Ayubiy kim edi?",
  javob: [
    { matn: "Fransiya qiroli", correct: false },
    { matn: "Turkiya sultoni", correct: false },
    { matn: "Fransiya qiroli", correct: false },
    { matn: "Misr sultoni", correct: true }
  ]
},
{
  id: 101,
  savol: "Fransiya qiroli Filipp IVning yashagan yillarini aniqlang?",
  javob: [
    { matn: "1294–1303-y", correct: false },
    { matn: "1309–1377-y", correct: false },
    { matn: "1269–1270-y", correct: false },
    { matn: "1285–1314-y", correct: true }
  ]
},
{
  id: 102,
  savol: "Fransiyada General shtatlarini ilk bor kim chaqirgan?",
  javob: [
    { matn: "FilippII", correct: false },
    { matn: "Lyudovik IX", correct: false },
    { matn: "Lyudovik VI", correct: false },
    { matn: "Filipp IV", correct: true }
  ]
},
{
  id: 103,
  savol: "Yaponiyada “olti islohot” kimning davrida amalga oshirilgan?",
  javob: [
    { matn: "Meziy", correct: false },
    { matn: "Yasuga", correct: false },
    { matn: "Takugava", correct: false },
    { matn: "Ryutaro Xasimoto", correct: true }
  ]
},
{
  id: 104,
  savol: "Milodiy V asr oxiridan – XV asrning oxirigacha bo‘lgan davr nima deb ataladi?",
  javob: [
    { matn: "\"Yangi tarix\"", correct: false },
    { matn: "\"Eng yangi tarix\"", correct: false },
    { matn: "\"Qadimgi dunyo taixi”", correct: false },
    { matn: "“O‘rta asrlar tarixi”", correct: true }
  ]
},
{
  id: 105,
  savol: "Yevropada II asrdan iqlimning soviy boshlashi V asrga kelib ekinzorlarni qo‘riqqa, suv havzalari va ularga yaqin yerlarni esa botqoqlikka aylantirdi. Bu nimaga sabab bo‘ldi?",
  javob: [
    { matn: "\"Buyuk geografik kashfiyotlar\"", correct: false },
    { matn: "\"Yuz yillik urush\"", correct: false },
    { matn: "\"Sovuq urush\"", correct: false },
    { matn: "\"Xalqlarning buyuk ko‘chishlari\"", correct: true }
  ]
},
{
  id: 106,
  savol: "Germanlarda nima mehnat unumdorligini va olinadigan hosilni oshirgan?",
  javob: [
    { matn: "Bosqinchilik urushlari", correct: false },
    { matn: "Fosfor topilishi", correct: false },
    { matn: "Davlatning vujudga", correct: false },
    { matn: "Omochdan temir plugga", correct: true }
  ]
},
{
  id: 107,
  savol: "Angl-sakslar qayerni bosib olib o‘z davlatlarini tuzganlar?",
  javob: [
    { matn: "Italiya", correct: false },
    { matn: "Galliya", correct: false },
    { matn: "Shimoliy Afrika", correct: false },
    { matn: "Britaniya", correct: true }
  ]
},
{
  id: 108,
  savol: "Kimlarda faqat qirol oilasiga mansub kishilargina uzun soch bilan yurishlari mumkin bo‘lgan?",
  javob: [
    { matn: "Sakslar", correct: false },
    { matn: "Vandallar", correct: false },
    { matn: "Alernanlar", correct: false },
    { matn: "Franklar", correct: true }
  ]
},
{
  id: 109,
  savol: "Franklarning Galliyaga hujumiga kim boshchilik qiladi?",
  javob: [
    { matn: "Buyuk Karl", correct: false },
    { matn: "Pipin Pakana", correct: false },
    { matn: "Karl Martell", correct: false },
    { matn: "Xlodvig", correct: true }
  ]
},
{
  id: 110,
  savol: "742-814 yillarda kim yashagan?",
  javob: [
    { matn: "Xilperik", correct: false },
    { matn: "Pipin Pakana", correct: false },
    { matn: "Xlodvig", correct: false },
    { matn: "Buyuk Karl", correct: true }
  ]
},
{
  id: 111,
  savol: "G‘arbiy Yevropa mamlakatlarida bir feodalning boshqa feodalga bo‘ysinish tartibi qanday atalgan?",
  javob: [
    { matn: "Separatchilik", correct: false },
    { matn: "Gegemonlik", correct: false },
    { matn: "Monarxlik", correct: false },
    { matn: "Vassallik", correct: true }
  ]
},
{
  id: 112,
  savol: "800 yildan Franklar imperiyasini kim boshqargan?",
  javob: [
    { matn: "Pipin Pakana", correct: false },
    { matn: "Xlodvig", correct: false },
    { matn: "Xilperik", correct: false },
    { matn: "Buyuk Karl", correct: true }
  ]
},
{
  id: 113,
  savol: "“Sali haqiqati” kimlarning qonuni to‘plami hisoblanadi?",
  javob: [
    { matn: "Alernanlar", correct: false },
    { matn: "Sakslar", correct: false },
    { matn: "Vandallar", correct: false },
    { matn: "Franklar", correct: true }
  ]
},
{
  id: 114,
  savol: "Buyuk Britaniyaning qaysi bosh vaziri amerikaparast siyosat yuritdi ?",
  javob: [
    { matn: "Jon Meyjor", correct: false },
    { matn: "Kemeron", correct: false },
    { matn: "G Braun", correct: false },
    { matn: "E Bler", correct: true }
  ]
},
{
  id: 115,
  savol: "Kim oʻz siyosatini Fransiyaga Yevropa ittifoqining \"yetakchisi\" va butun dunyo uchun \"erk mayogʻi\" rolini qaytarish bolgan",
  javob: [
    { matn: "Nikolya Sarkozi", correct: false },
    { matn: "Fransua Olland", correct: false },
    { matn: "Fransua Mitteran", correct: false },
    { matn: "Jak Shirak", correct: true }
  ]
},
{
  id: 116,
  savol: "Parjda sodir etilgan terroristik aktni qaysi guruh oʻz zimmasiga oldi?",
  javob: [
    { matn: "Al Qoida", correct: false },
    { matn: "Hizbut Tahrir", correct: false },
    { matn: "Tolibon", correct: false },
    { matn: "ISHID", correct: true }
  ]
},
{
  id: 117,
  savol: "Parijdagi sodir etilgan terroristik akt oqibatida qancha kishi halok boʻldi?",
  javob: [
    { matn: "1000 dan ortiq kishi", correct: false },
    { matn: "500 dan ortiq kishi", correct: false },
    { matn: "10 dan ortiq kishi", correct: false },
    { matn: "100 dan ortiq kishi", correct: true }
  ]
},
{
  id: 118,
  savol: "Italiyada postindustrial jamiyatning asoslari qachon shakillandi?",
  javob: [
    { matn: "50-yillarida", correct: false },
    { matn: "70-yillarida", correct: false },
    { matn: "60-yillarida", correct: false },
    { matn: "80-yillarida", correct: true }
  ]
},
{
  id: 119,
  savol: "Italiyada postindustrial jamiyatning asoslari qachon shakillandi?",
  javob: [
    { matn: "1999-yil", correct: false },
    { matn: "1989-yil", correct: false },
    { matn: "2000-yil", correct: false },
    { matn: "1993-yil", correct: true }
  ]
},
{
  id: 120,
  savol: "Italiya hukumatniga Matteo Rensi qanchan keldi?",
  javob: [
    { matn: "2019-dekabr", correct: false },
    { matn: "2000-yil aprel", correct: false },
    { matn: "2005-yil aprel", correct: false },
    { matn: "2014-yil fevral", correct: true }
  ]
},
{
  id: 121,
  savol: "Eronda Islom inqilobi qachon bo`lib o`tgan?",
  javob: [
    { matn: "1960-yil", correct: false },
    { matn: "1989-yil", correct: false },
    { matn: "1999-yil", correct: false },
    { matn: "1979-yil", correct: true }
  ]
},
{
  id: 122,
  savol: "Dunyoda energetika inqirozi nechanchi yilda boshlangan",
  javob: [
    { matn: "2000 yil", correct: false },
    { matn: "2005 yil", correct: false },
    { matn: "1990 yil", correct: false },
    { matn: "2014 yil", correct: true }
  ]
},
{
  id: 123,
  savol: "1990-yil Quvayt qaysi davlat tomonidan anneksiya qilingan",
  javob: [
    { matn: "SSSR", correct: false },
    { matn: "Yaponiya", correct: false },
    { matn: "AQSH", correct: false },
    { matn: "Iroq", correct: true }
  ]
},
{
  id: 124,
  savol: "Yaponiyada “olti islohot” kimning davrida amalga oshirilgan",
  javob: [
    { matn: "Meziya", correct: false },
    { matn: "Yasuga", correct: false },
    { matn: "Takugava", correct: false },
    { matn: "Ryutaro Xasimoto", correct: true }
  ]
},
{
  id: 125,
  savol: "Milodiy V asr oxiridan – XV asrning oxirigacha bo‘lgan davr nima deb ataladi?",
  javob: [
    { matn: "Yangi tarix", correct: false },
    { matn: "Eng yangi tarix", correct: false },
    { matn: "Qadimgi dunyo taixi", correct: false },
    { matn: "O‘rta asrlar tarixi", correct: true }
  ]
},
{
  id: 126,
  savol: "Yevropada II asrdan iqlimning soviy boshlashi V asrga kelib ekinzorlarni qo‘riqqa, suv havzalari va ularga yaqin yerlarni esa botqoqlikka aylantirdi. Bu nimaga sabab bo‘ldi?",
  javob: [
    { matn: "\"Buyuk geografik kashfiyotlar\"", correct: false },
    { matn: "\"Yuz yillik urush\"", correct: false },
    { matn: "\"Sovuq urush\"", correct: false },
    { matn: "\"Xalqlarning buyuk ko‘chishlari\"", correct: true }
  ]
},
{
  id: 127,
  savol: "Qadimgi german qabilalari (franklar, vestgotlar, ostgotlar, vandallar, burgundlar, langobardlar) qayerda joylashganlar?",
  javob: [
    { matn: "Amudaryo va Sirdaryo havzasida", correct: false },
    { matn: "Volga va Ural daryolari havzasida", correct: false },
    { matn: "Frot va Dajla daryolari havzasida", correct: false },
    { matn: "Reyn va Elba daryolari havzasida", correct: true }
  ]
},
{
  id: 128,
  savol: "Rimliklar Rimdan chetda yashab, noma’lum tilde gaplashadigan barcha xalqlarni nima deb ataganlar?",
  javob: [
    { matn: "Vikinglar", correct: false },
    { matn: "Jaklar", correct: false },
    { matn: "Varyaglar", correct: false },
    { matn: "Varvarlar", correct: true }
  ]
},
{
  id: 129,
  savol: "Kim varvar qabilalari yo‘lboshchilari ichida birinchi bo‘lib xristianlik Rimdan qabul qiladi?",
  javob: [
    { matn: "Pipin Pakana", correct: false },
    { matn: "Buyuk Karl", correct: false },
    { matn: "Xilperik", correct: false },
    { matn: "Xlodvig", correct: true }
  ]
},
{
  id: 130,
  savol: "“Sali haqiqati” kimlarning qonuni to‘plami hisoblanadi?",
  javob: [
    { matn: "Alernanlar", correct: false },
    { matn: "Vandallar", correct: false },
    { matn: "Sakslar", correct: false },
    { matn: "Franklar", correct: true }
  ]
},
{
  id: 131,
  savol: "Kimning ismidan «korol», ya’ni «qirol» unvoni kelib chiqqan?",
  javob: [
    { matn: "Karl X", correct: false },
    { matn: "Karl VI", correct: false },
    { matn: "Pipin Pakana", correct: false },
    { matn: "Buyuk Karl", correct: true }
  ]
},
{
  id: 132,
  savol: "Buyuk Karlning dastlabki harbiy yurishlari qayerda boshlanadi?",
  javob: [
    { matn: "Britaniyadan", correct: false },
    { matn: "Galliyadan", correct: false },
    { matn: "Bolqondan", correct: false },
    { matn: "Ispaniyadan", correct: true }
  ]
},
{
  id: 133,
  savol: "Buyuk Alfred qachon daniyaliklar bilan tinchlik sulhini tuzadi?",
  javob: [
    { matn: "900 yilda", correct: false },
    { matn: "779 yilda", correct: false },
    { matn: "989 yilda", correct: false },
    { matn: "879 yilda", correct: true }
  ]
},
{
  id: 134,
  savol: "Qachon o‘z qo‘shini bilan Rimga kelgan Otton I ga papa Ioann XII imperatorilik tojini kiydiradi?",
  javob: [
    { matn: "938", correct: false },
    { matn: "980", correct: false },
    { matn: "1024", correct: false },
    { matn: "962", correct: true }
  ]
},
{
  id: 135,
  savol: "Zamondoshlari kimni “dunyo mo‘jizasi” deb nomlagan?",
  javob: [
    { matn: "Genrix I ni", correct: false },
    { matn: "Genrix X ni", correct: false },
    { matn: "Ioann XII ni", correct: false },
    { matn: "Otton III ni", correct: true }
  ]
},
{
  id: 136,
  savol: "Vladimir vorislari orasidagi taxt uchun kurashlarda kim g‘olib chiqqan?",
  javob: [
    { matn: "Oleg", correct: false },
    { matn: "Vladimir Monamax", correct: false },
    { matn: "Sivitaslab", correct: false },
    { matn: "Yaroslav", correct: true }
  ]
},
{
  id: 137,
  savol: "23 yil davomida nozil bo`lgan diniy kitobni aniqlang",
  javob: [
    { matn: "Bibliya", correct: false },
    { matn: "Tavrot", correct: false },
    { matn: "Injil", correct: false },
    { matn: "« Qur`on»", correct: true }
  ]
},
{
  id: 138,
  savol: "Xalifa Abu Bakr hukmronlik qilgan yillar qaysi qatorda to‘g‘ri ko‘rsatilgan?",
  javob: [
    { matn: "636-638yy", correct: false },
    { matn: "630-632yy", correct: false },
    { matn: "634-636yy", correct: false },
    { matn: "632-634yy", correct: true }
  ]
},
{
  id: 139,
  savol: "“Qur’oni Karim” kitobining oyatlarini to‘plab, yagona kitob holatga keltirgan xalifa kim?",
  javob: [
    { matn: "Xalifa Ali", correct: false },
    { matn: "Xalifa Umar", correct: false },
    { matn: "Xalifa Morut", correct: false },
    { matn: "Xalifa Usmon", correct: true }
  ]
},
{
  id: 140,
  savol: "711-yili Arab xalifaligi tomonidan bosib olingan hudud",
  javob: [
    { matn: "Iroq", correct: false },
    { matn: "Italiya", correct: false },
    { matn: "Eron", correct: false },
    { matn: "Ispaniya", correct: true }
  ]
},
{
  id: 141,
  savol: "“Qirq yil qul bo‘lib yashagandan kun ozod bo‘lib yashagan ma’qul!” degan shior qaysi yurt vatanparvarlariga tegishli?",
  javob: [
    { matn: "Kufa", correct: false },
    { matn: "Marv", correct: false },
    { matn: "Sug‘diyona", correct: false },
    { matn: "Ozarbayjon", correct: true }
  ]
},
{
  id: 142,
  savol: "Xulaku Bag‘dod shaharini qaysi yili egalladi?",
  javob: [
    { matn: "1528-yil", correct: false },
    { matn: "1285-yil", correct: false },
    { matn: "D1246-yil", correct: false },
    { matn: "1258-yil", correct: true }
  ]
},
{
  id: 143,
  savol: "Qadimgi Xan quldorlik imperiyasi inqirozga uchrab, uning o‘rnida qaysi mustaqil davlatlar vujudga keladi?",
  javob: [
    { matn: "Shan, Chjou, Sin", correct: false },
    { matn: "Suy, Tan, Sun", correct: false },
    { matn: "Yuan, Min, Chu", correct: false },
    { matn: "Vey, Shu, U", correct: true }
  ]
},
{
  id: 144,
  savol: "Xitoyda Tan sulolasi hukmronligiga kim asos slogan?",
  javob: [
    { matn: "Sinshuhuandi", correct: false },
    { matn: "Yuan shikay", correct: false },
    { matn: "Mauzedo", correct: false },
    { matn: "Li Yuan", correct: true }
  ]
},
{
  id: 145,
  savol: "“Baytul-hikmat” – “donishmandlik uyi” kimning saroyida tashkil etiladi?",
  javob: [
    { matn: "Abul Abbos Abdulloh", correct: false },
    { matn: "Umar ibn Abdulaziz", correct: false },
    { matn: "Mansur", correct: false },
    { matn: "Horun ar-Rashid", correct: true }
  ]
},
{
  id: 146,
  savol: "Salib yurishlari – G‘arbiy Yevropa feodallarining qayerdagi bosqinchilik va talonchilik urushlari edi?",
  javob: [
    { matn: "Uzoq sharqdagi", correct: false },
    { matn: "O‘rta Osiyodagi", correct: false },
    { matn: "Yevropadagi", correct: false },
    { matn: "Yaqin Sharqdagi", correct: true }
  ]
},
{
  id: 147,
  savol: "Salibchilar qayerni egallashda ko‘pgina musulmonlarni o‘ldiradilar ?",
  javob: [
    { matn: "Xotan", correct: false },
    { matn: "Kashmir", correct: false },
    { matn: "Tibilis", correct: false },
    { matn: "Quddusni", correct: true }
  ]
},
{
  id: 148,
  savol: "Dastlabki diniy-ritsarlik ordeni qaysi orden bo‘lgan?",
  javob: [
    { matn: "Iyezuitlar", correct: false },
    { matn: "Tampliyerlar", correct: false },
    { matn: "Tevton", correct: false },
    { matn: "Gospitalyerlar", correct: true }
  ]
},
{
  id: 149,
  savol: "To`rtinchi salib yurishi yillarini aniqlang?",
  javob: [
    { matn: "1206-1210-yillar", correct: false },
    { matn: "1119-1137-yillar", correct: false },
    { matn: "1189-1190-yillar", correct: false },
    { matn: "1202-1204-yillar", correct: true }
  ]
},
{
  id: 150,
  savol: "Fransiyaning shimolidagi yirik savdo-hunarmandchilik shaharlarini birlashtirgan viloyat qaysi?",
  javob: [
    { matn: "Normandiya", correct: false },
    { matn: "Marsel", correct: false },
    { matn: "Andaus", correct: false },
    { matn: "Flandriya", correct: true }
  ]
},
{
  id: 151,
  savol: "O‘rta asrlarda G‘arbiy Yevropa me’morchiligida dastlab roman uslubi qaysi davlatlarda hukmron edi?",
  javob: [
    { matn: "Angliya va Polsha", correct: false },
    { matn: "Fransiya, Italiya, Avstriya", correct: false },
    { matn: "Chexiya, Italiya va Polsha", correct: false },
    { matn: "Fransiya, Italiya, Germaniya", correct: true }
  ]
},
{
  id: 152,
  savol: "O‘rta Osiyoda Saljuqbek asos solgan sulola boshchiligida qaysi qabilalar Old Osiyoga harbiy yurish qilgan?",
  javob: [
    { matn: "Qipchoq", correct: false },
    { matn: "Barlos", correct: false },
    { matn: "Ming", correct: false },
    { matn: "O‘guz", correct: true }
  ]
},
{
  id: 153,
  savol: "Amir Temur va Boyazid o‘rtasidagi jang qachon bo‘lib o‘tadi?",
  javob: [
    { matn: "1406", correct: false },
    { matn: "1399", correct: false },
    { matn: "1404", correct: false },
    { matn: "1402", correct: true }
  ]
},
{
  id: 154,
  savol: "Usmonli Turklar imperiyasi qaysi yillarda hukmronlik qilgan?",
  javob: [
    { matn: "1289-1822 yillar", correct: false },
    { matn: "1299-1960 yillar", correct: false },
    { matn: "1266-1922 yillar", correct: false },
    { matn: "1299-1922 yillar", correct: true }
  ]
},
{
  id: 155,
  savol: "1224-yil Jo`ji ulusi qayerlardan iborat edi?",
  javob: [
    { matn: "Shimoliy Xorazm", correct: false },
    { matn: "Yettisuv", correct: false },
    { matn: "O‘rta osiyo", correct: false },
    { matn: "Shimoliy Kavkaz", correct: true }
  ]
},
{
  id: 156,
  savol: "Qaysi Angliya hukmdori o‘zining cherkov boshligd ekanligidan foydalanib, protestantlikni shakkoklik deb e’lon qildi va katolik cherkovini tiklashga kirishdi?",
  javob: [
    { matn: "Genrix VIII", correct: false },
    { matn: "Yelizavetta I", correct: false },
    { matn: "Yakov I", correct: false },
    { matn: "Mariya Tyudor", correct: true }
  ]
},
{
  id: 157,
  savol: "Millatlar Ligasi kimning tashabbusi bilan tashkil qilingan?",
  javob: [
    { matn: "Eduard Dalad’e", correct: false },
    { matn: "Jorj Klemanso", correct: false },
    { matn: "Devid Lloyd Jorj", correct: false },
    { matn: "Vudro Vilson", correct: true }
  ]
},
{
  id: 158,
  savol: "Birinchi jahon urushidan so‘ng bo‘lgan “Katta uchlik” davlatlarini sanab bering",
  javob: [
    { matn: "Yaponiya, AQSH, Fransiya", correct: false },
    { matn: "AQSH, Fransiya, Rossiya", correct: false },
    { matn: "Germaniya, Avstriya-Vengriya, Turkiya", correct: false },
    { matn: "AQSH, Fransiya,Buyuk Britaniya", correct: true }
  ]
},
{
  id: 159,
  savol: "Manchjou-Go qo‘g‘irchoq davlatinio qaysi davlat tuzgan edi?",
  javob: [
    { matn: "AQSH", correct: false },
    { matn: "Buyuk Britaniya", correct: false },
    { matn: "Fransiya", correct: false },
    { matn: "Yaponiya", correct: true }
  ]
},
{
  id: 160,
  savol: "Nechanchi yillarda imzolangan shartnomalar va jahondagi kuchlarning yangi nisbati xalqaro munosabatlarning Versal-Vashington tizimi nomini oldi?",
  javob: [
    { matn: "1919-1928-yillar", correct: false },
    { matn: "1925-1930-yillar", correct: false },
    { matn: "1915-1918-yillar", correct: false },
    { matn: "1919-1923-yillar", correct: true }
  ]
},
{
  id: 161,
  savol: "Qaysi davrga kelib rivojlangan mamlakatlar sanoatining katta qismi elektrlashtirildi?",
  javob: [
    { matn: "1910-yillarning oxiri", correct: false },
    { matn: "1918-yillarning oxiri", correct: false },
    { matn: "1900-yillarning oxiri", correct: false },
    { matn: "1930-yillarning oxiri", correct: true }
  ]
},
{
  id: 162,
  savol: "Buyuk Britaniyada 1937-1940-yillari hukumatni boshqargan konservatorlar yetakchisini toping?",
  javob: [
    { matn: "Heys", correct: false },
    { matn: "Jak shirak", correct: false },
    { matn: "Benito Mussolini", correct: false },
    { matn: "Nevill Chemberlen", correct: true }
  ]
},
{
  id: 163,
  savol: "1922-yili inglizlar qaysi davlatning mustaqilligini tan olishga majbur bo‘ldi?",
  javob: [
    { matn: "Hindiston", correct: false },
    { matn: "Kanada", correct: false },
    { matn: "Pokiston", correct: false },
    { matn: "Misr", correct: true }
  ]
},
{
  id: 164,
  savol: "Myunxen kelishuvi bo‘yicha, Chexoslovakiyaning, asosan, nemis millatiga mansub aholi yashaydigan … Germaniyaga berildi",
  javob: [
    { matn: "Elzas viloyati", correct: false },
    { matn: "Lotaringiya viloyati", correct: false },
    { matn: "Vena viloyati", correct: false },
    { matn: "Sudet viloyati", correct: true }
  ]
},
{
  id: 165,
  savol: "1-jahon urushidan so‘ng qaysi davlat o‘zining ashaddiy dushmani bo‘lgan Germaniyani tor-mor qildi, qit’ada boshqa jiddiy raqibi qolmadi",
  javob: [
    { matn: "Britaniya", correct: false },
    { matn: "Rossiya", correct: false },
    { matn: "Italiya", correct: false },
    { matn: "Fransiya", correct: true }
  ]
},
{
  id: 166,
  savol: "Eduard Dalad’e hukumati qachon Myunxen kelishuvini imzolagan",
  javob: [
    { matn: "1942-yil kuzida", correct: false },
    { matn: "1930-yil kuzida", correct: false },
    { matn: "1925-yil kuzida", correct: false },
    { matn: "1938-yil kuzida", correct: true }
  ]
},
{
  id: 167,
  savol: "“Men Amerika xalqiga yangi kurs va’da qilaman” ushbu gap qaysi AQSH prezidentiga tegishli?",
  javob: [
    { matn: "Trumen", correct: false },
    { matn: "Kulij", correct: false },
    { matn: "Barak Abama", correct: false },
    { matn: "F Ruzvelt", correct: true }
  ]
},
{
  id: 168,
  savol: "AQSHda fuqarolar urushi nechanchi yillarda bo`lib o`tgan?",
  javob: [
    { matn: "1850-1865", correct: false },
    { matn: "1855-1870", correct: false },
    { matn: "1861-1870", correct: false },
    { matn: "1861-1865", correct: true }
  ]
},
{
  id: 169,
  savol: "Germaniyada “Pivo isyoni” qaysi shahardagi pivaxonada odamlar yig‘ilishidan boshlangan?",
  javob: [
    { matn: "Parijda", correct: false },
    { matn: "Londonda", correct: false },
    { matn: "Kashmirda", correct: false },
    { matn: "Myunxen", correct: true }
  ]
},
{
  id: 170,
  savol: "Germaniyadagi totalitar rejimga ittifoqchi bo‘lgan totalitar davlatlarni toping",
  javob: [
    { matn: "Angliya va Fransiya", correct: false },
    { matn: "AQSH va Buyuk Britaniya", correct: false },
    { matn: "AQSH va Buyuk Britaniya", correct: false },
    { matn: "Italiya va Yaponiya", correct: true }
  ]
},
{
  id: 171,
  savol: "Prezident Paul fon Gindenburg reyxstagda eng katta fraksiyaga ega bo‘lgan natsionalsotsialistlar yo‘lboshchisi A Gitlerni qachon reyxkansler lavozimiga tayinlaydi?",
  javob: [
    { matn: "1939-yil 30-yanvarda", correct: false },
    { matn: "1930-yil 20-aprelda", correct: false },
    { matn: "1929-yil 20-aprelda", correct: false },
    { matn: "1933-yil 30-yanvarda", correct: true }
  ]
},
{
  id: 172,
  savol: "Germaniyaning fyureri deb e’lon qilindi?",
  javob: [
    { matn: "1925", correct: false },
    { matn: "1930", correct: false },
    { matn: "1939", correct: false },
    { matn: "1934", correct: true }
  ]
},
{
  id: 173,
  savol: "Ikkinchi jahon urushi arafasida Yevropadagi eng katta armiyani shakllantira olgan davlat qaysi?",
  javob: [
    { matn: "Yaponiya", correct: false },
    { matn: "AQSh", correct: false },
    { matn: "Angliya", correct: false },
    { matn: "Germaniya", correct: true }
  ]
},
{
  id: 174,
  savol: "Germaniyada fashizm ommalashgan davr to‘g ‘ri berilgan javobni belgilang",
  javob: [
    { matn: "XIX asrning 20-yillari", correct: false },
    { matn: "XVIII asrning 70-yillari", correct: false },
    { matn: "XX asming 20-yillari", correct: false },
    { matn: "XX asrning 30-yillari", correct: true }
  ]
},
{
  id: 175,
  savol: "Yaponiya SSSR hududiga qachon bostirib keldi?",
  javob: [
    { matn: "1930", correct: false },
    { matn: "1933", correct: false },
    { matn: "1944", correct: false },
    { matn: "1938", correct: true }
  ]
},
{
  id: 176,
  savol: "Jahon iqtisodiy inqirozi qachon bo‘lgan",
  javob: [
    { matn: "1925-1928-yy", correct: false },
    { matn: "1985-1996-yy", correct: false },
    { matn: "1920-1925-yy", correct: false },
    { matn: "1929-1933-yy", correct: true }
  ]
},
{
  id: 177,
  savol: "Jahon urushlari oralig‘ida Lotin Amerikasi davlatlari uchun muhim muammo ularning qaysi davlat bilan munosabatlari bo‘ldi",
  javob: [
    { matn: "Britaniya", correct: false },
    { matn: "Fransiya", correct: false },
    { matn: "Ispaniya", correct: false },
    { matn: "AQSH", correct: true }
  ]
},
{
  id: 178,
  savol: "1920-1930-yillarda qaysi davlat Xitoyni, Uzoq Sharqni, keyin esa butun Osiyoni bosib olishni, Tinch okeani havzasida o‘z hukmronligini o‘rnatishni rejalashtirayotgan edi?",
  javob: [
    { matn: "SSSR", correct: false },
    { matn: "AQSH", correct: false },
    { matn: "Germaniya", correct: false },
    { matn: "Yaponiya", correct: true }
  ]
},
{
  id: 179,
  savol: "“Antikomintern pakti”ga qachon Italiya ham qo‘shildi?",
  javob: [
    { matn: "1930-yil", correct: false },
    { matn: "1933-yil", correct: false },
    { matn: "1943-yil", correct: false },
    { matn: "1937-yil", correct: true }
  ]
},
{
  id: 180,
  savol: "G`arb davlatlari tomonidan qurollantirilgan qaysi davlat Turkiyaga bostirib kirgan?",
  javob: [
    { matn: "Italiya", correct: false },
    { matn: "Armaniston", correct: false },
    { matn: "SSSR", correct: false },
    { matn: "Gretsiya", correct: true }
  ]
},
{
  id: 181,
  savol: "Ikkinchi Jahon urishi necha yil davom etdi?",
  javob: [
    { matn: "10 yil", correct: false },
    { matn: "4 yil", correct: false },
    { matn: "8 yil", correct: false },
    { matn: "6 yil", correct: true }
  ]
},
{
  id: 182,
  savol: "Ittifoqchilar 1943-yil may oyida Italiyan–German qo‘shinlarini qayerdan to‘liq quvib chiqarishga erishdilar?",
  javob: [
    { matn: "Hindistondan", correct: false },
    { matn: "Avstriyadan", correct: false },
    { matn: "AQSH", correct: false },
    { matn: "Afrikadan", correct: true }
  ]
},
{
  id: 183,
  savol: "Yaponiyaning so‘zsiz taslim bo‘lishi to‘g‘risidagi pakt imzolanishi bilan ikkinchi jahon urushi tugadi. Bu voqea qachon sodir bo‘ldi?",
  javob: [
    { matn: "1946-yil 2-sentabr", correct: false },
    { matn: "1945-yil 9-may", correct: false },
    { matn: "1945-yil 30-may", correct: false },
    { matn: "1945-yil 2-sentabr", correct: true }
  ]
},
{
  id: 184,
  savol: "Referendum nima?",
  javob: [
    { matn: "Mitinglar o‘tkazish", correct: false },
    { matn: "Saylovga chaqirish", correct: false },
    { matn: "To‘g‘ri javob yo‘q", correct: false },
    { matn: "Umumxalq so‘rovi", correct: true }
  ]
},
{
  id: 185,
  savol: "Rasman GFR tashkil topgan sanani aniqlang?",
  javob: [
    { matn: "1952- yilda", correct: false },
    { matn: "1945- yilda", correct: false },
    { matn: "1955- yilda", correct: false },
    { matn: "1949- yilda", correct: true }
  ]
},
{
  id: 186,
  savol: "Buyuk Britaniya qanday asos bo‘yicha Hindistonni ikki qismga bo‘lib yubordi?",
  javob: [
    { matn: "Mamlakatda islohotlarni amalga oshirishda murakkabliklarni hisobga olgan holda", correct: false },
    { matn: "Parlamentning Hindiston haqidagi yangi deklaratsiyasi bo‘yicha milliy mansublik asosida", correct: false },
    { matn: "Hindistonni bo‘lishda sobiq SSSR va AQSHnin aralashi va ta’siri asosida", correct: false },
    { matn: "Aholining hind va musulmon diniy jamoalariga mansubligi asosida", correct: true }
  ]
},
{
  id: 187,
  savol: "Sobiq sovet respublikalari asosiy qismi iqtisodiy rivojlanishda qaysi yo‘lni tanladi?",
  javob: [
    { matn: "sovet rejali iqtisodiyoti", correct: false },
    { matn: "monopoliya", correct: false },
    { matn: "ko‘rinmas qo‘l", correct: false },
    { matn: "bozor iqtisodiyoti", correct: true }
  ]
},
{
  id: 188,
  savol: "2014-yil qayerda «rangli inqilob» bo‘lib o‘tdi?",
  javob: [
    { matn: "Angliya", correct: false },
    { matn: "Belorusiya", correct: false },
    { matn: "Rossiya", correct: false },
    { matn: "Ukraina", correct: true }
  ]
},
{
  id: 189,
  savol: "Viktor Yushchenko qaysi blok yetakchisi hisoblangan?",
  javob: [
    { matn: "”Yashasin Ukraina”", correct: false },
    { matn: "“Olg‘a Ukraina”", correct: false },
    { matn: "“Ozod Ukraina”", correct: false },
    { matn: "”Bizning Ukraina”", correct: true }
  ]
},
{
  id: 190,
  savol: "Belarus Konstitutsiyasi qachon qabul qilindi?",
  javob: [
    { matn: "1989", correct: false },
    { matn: "2000", correct: false },
    { matn: "1999", correct: false },
    { matn: "1994", correct: true }
  ]
},
{
  id: 191,
  savol: "Latviya mustaqilligi uchun kurashgan tashkilotni toping?",
  javob: [
    { matn: "Sayudis", correct: false },
    { matn: "Oliy Sovet", correct: false },
    { matn: "Milliy birlik", correct: false },
    { matn: "Xalq fronti", correct: true }
  ]
},
{
  id: 192,
  savol: "“Sayudis” tashkiloti qaysi davlatda tuzildi?",
  javob: [
    { matn: "Ukraina", correct: false },
    { matn: "AQSH", correct: false },
    { matn: "GDR", correct: false },
    { matn: "Litva", correct: true }
  ]
},
{
  id: 193,
  savol: "Ma’lumki, 2003-yili Gruziyda prezidentlik saylovlari o‘tkaziladi va bu saylovlarda Mixail Saakashvili g‘olib chiqadi. Aytingchi mamlakatdagi bu jarayonlar Gruziya va G‘arb matbuotida qanday nom bilan ataldi?",
  javob: [
    { matn: "“Sariq bahor”", correct: false },
    { matn: "“ Kavkaz inqilobi”", correct: false },
    { matn: "“ Lola inqilobi”", correct: false },
    { matn: "“Atirgullar inqilobi”", correct: true }
  ]
},
{
  id: 194,
  savol: "Markaziy Osiyo davlatiga kirmaydigan davlatni aniqlang",
  javob: [
    { matn: "Qozog‘iston", correct: false },
    { matn: "Tojikiston", correct: false },
    { matn: "Turkmaniston", correct: false },
    { matn: "Afg‘oniston", correct: true }
  ]
},
{
  id: 195,
  savol: "Turkmanistonda qachon referendum o‘tkazilib mamlakat mustaqilligi uchun ovoz berildi?",
  javob: [
    { matn: "1990-yil 16-dekabr", correct: false },
    { matn: "1989-yil 9-sentabr", correct: false },
    { matn: "1987-yil 9-sentabr", correct: false },
    { matn: "1991-yil 26-oktabr", correct: true }
  ]
},
{
  id: 196,
  savol: "Ashxobod shahrida qachon Osiyo o‘yinlari o‘tkazildi?",
  javob: [
    { matn: "2010- yil oktabr oyida", correct: false },
    { matn: "2010- yil avgust oyida", correct: false },
    { matn: "2011-yil may oyida", correct: false },
    { matn: "2017- yil sentabr oyida", correct: true }
  ]
},
{
  id: 197,
  savol: "Tojikiston konstitutsiyasi qachon qabul qilingan?",
  javob: [
    { matn: "1990-yil 26-oktabr", correct: false },
    { matn: "1999-yil 16-dekabr", correct: false },
    { matn: "1998-yil 31-avgust", correct: false },
    { matn: "1994-yil 6-noyabr", correct: true }
  ]
},
{
  id: 198,
  savol: "Qachon Kataloniya mustaqil bo‘ldi?",
  javob: [
    { matn: "2000 yil", correct: false },
    { matn: "2021yil", correct: false },
    { matn: "2010 yil", correct: false },
    { matn: "2017 yil", correct: true }
  ]
},
{
  id: 199,
  savol: "Quyidagi qaysi davlatda ”Yashillar “ partiyasi faoliyat olib borgan?",
  javob: [
    { matn: "Fransiya", correct: false },
    { matn: "AQSH", correct: false },
    { matn: "Angliya", correct: false },
    { matn: "Germaniya", correct: true }
  ]
},
{
  id: 200,
  savol: "Qachon Germaniya Yevropada eng kuchli iqtisodiy imkoniyatlarga ega bo‘lib, YIM hajmi bo‘yicha AQSH va Yaponiyadan keyin dunyoda uchinchi o‘rinni egalladi?",
  javob: [
    { matn: "XXI – asr oxiri", correct: false },
    { matn: "XIX – asr boshlari", correct: false },
    { matn: "XVIII – asr boshlari", correct: false },
    { matn: "XXI – asr boshlari", correct: true }
  ]
},
{
  id: 201,
  savol: "Nima sababdan A Merkel boshqa Yevropa mamlakatlari qatori Rossiyaga qarshi sanksiyalar e’lon qildi? Merkelning Rossiya rahbarlari bilan munosabati murakkabligicha qolmoqda?",
  javob: [
    { matn: "Yevropa davlatlari bilan shartnoma imzolagani uchun", correct: false },
    { matn: "Iqtisodiy jihatdan Ukrainadan manfaatdor edi", correct: false },
    { matn: "Qrimni ozi olmoqchi edi", correct: false },
    { matn: "2014-yil Rossiyaning Qrimni qo‘shib olgani uchun", correct: true }
  ]
},
{
  id: 202,
  savol: "……-yil sentabrda bo‘lib o‘tgan parlament saylovlarida A Merkel boshchiligidagi koalitsiya 33% ovoz oldi?",
  javob: [
    { matn: "2000", correct: false },
    { matn: "2010", correct: false },
    { matn: "2006", correct: false },
    { matn: "2017", correct: true }
  ]
},
{
  id: 203,
  savol: "2014-yilda quyidagi qaysi davlatda hokimiyat almashuvi yuz berdi?",
  javob: [
    { matn: "Gruziya", correct: false },
    { matn: "Germaniya", correct: false },
    { matn: "Ozarbayjon", correct: false },
    { matn: "Ukraina", correct: true }
  ]
},
{
  id: 204,
  savol: "Indoneziya tomonidan Gollandiyadan tortib olingan Sharqiy Timor nechanchi yil mustaqillikka erishdi?",
  javob: [
    { matn: "1993-yilda", correct: false },
    { matn: "1968-yilda", correct: false },
    { matn: "1957-yilda", correct: false },
    { matn: "1975-yilda", correct: true }
  ]
},
{
  id: 205,
  savol: "Buyuk Britaniya mustamlakasi bo‘lgan Myanmani 1942-yilda qaysi davlat bosib oldi?",
  javob: [
    { matn: "Buyuk Britaniya", correct: false },
    { matn: "AQSH", correct: false },
    { matn: "Fransiya", correct: false },
    { matn: "Yaponiya", correct: true }
  ]
},
{
  id: 206,
  savol: "1962-yil martda harbiylar general Ne Vin boshchiligida davlat to‘ntarishini o‘tkazdilar. 1947-yilgi Konstitutsiya bekor qilindi. Endi mamlakat ….. deb atala boshladi.",
  javob: [
    { matn: "Birma Demokratik Respublikasi", correct: false },
    { matn: "Birma va Myanma birlashgan Ittifoqi", correct: false },
    { matn: "To‘g’ro javob berilmagan", correct: false },
    { matn: "Birma Ittifoqi Sotsialistik Respublikasi", correct: true }
  ]
},
{
  id: 207,
  savol: "Nechanchi yildan Birma Myanma Ittifoqi deb ataldigan bo‘ldi?",
  javob: [
    { matn: "1979-yildan", correct: false },
    { matn: "1985-yildan", correct: false },
    { matn: "1993-yildan", correct: false },
    { matn: "1988-yildan", correct: true }
  ]
},
{
  id: 208,
  savol: "1948-yil 1-fevralda ……..",
  javob: [
    { matn: "Malayziya Konstitutsiyasi qabul qilindi", correct: false },
    { matn: "Singapur Malayziyadan ajralib chiqdi", correct: false },
    { matn: "Singapurda iqtisodiy inqiroz yuz berdi", correct: false },
    { matn: "Malayziya Federatsiyasi tuzildi", correct: true }
  ]
},
{
  id: 209,
  savol: "Malayziya iqtisodining asosini qaysi sohalar tashkil etadi?",
  javob: [
    { matn: "avtomobil, trikataj, qishloq xo‘jaligi", correct: false },
    { matn: "kon sanoati, trikataj va kemasozlik", correct: false },
    { matn: "kemasozlik, oziq-ovqat, turistik soha", correct: false },
    { matn: "qayta ishlash, tog‘-kon sanoati va qishloq xo‘jaligi", correct: true }
  ]
},
{
  id: 210,
  savol: "Malayziya jahonning …. foiz kauchugini, ….foiz qalayini ishlab chiqaradi.",
  javob: [
    { matn: "40, 50", correct: false },
    { matn: "50, 25", correct: false },
    { matn: "90, 15", correct: false },
    { matn: "50, 40", correct: true }
  ]
},
{
  id: 211,
  savol: "Hozirgi G‘arbiy Malayziya qachon mustaqil deb e’lon qilindi?",
  javob: [
    { matn: "1963-yil", correct: false },
    { matn: "1967-yil", correct: false },
    { matn: "1948-yil", correct: false },
    { matn: "1957-yil", correct: true }
  ]
},
{
  id: 212,
  savol: "“Yaqin Sharq” masalasi deyilganda nima tushuniladi?",
  javob: [
    { matn: "Buyuk davlatlarning Turkiya imperiyasiga qaram o‘lkalarga ega bo‘lib olish uchun olib borgan o‘zaro kurashi", correct: false },
    { matn: "Isroil-arab munosabatlari hamda barcha arab davlatlarini yagona islom davlati ostida birlashtirish", correct: false },
    { matn: "Yahudiylarni G’azo sektoridan ko‘chirib olib chiqib ketish va Falastin milliy avtonomiyasini tuzish", correct: false },
    { matn: "Isroil-arab munosabatlari, Isroilning bosib olgan arab davlatlari yerlarini qaytarib berishi hamda mustaqil Falastin arab davlatini tashkil etish bilan bog‘liq muammolar", correct: true }
  ]
},
{
  id: 213,
  savol: "Versal shartnomasida Falastinni boshqarish va u yerda yahudiylar davlatini tashkil etish mandati qaysi davlatga berilgan edi?",
  javob: [
    { matn: "Italiya", correct: false },
    { matn: "AQSH", correct: false },
    { matn: "Fransiya", correct: false },
    { matn: "Buyuk Britaniya", correct: true }
  ]
},
{
  id: 214,
  savol: "Nechanchi yili BMT Falastinda ikki davlat — Isroil yahudiy va Falastin-arab davlati tashkil etish haqida qaror qabul qildi?",
  javob: [
    { matn: "1948-yil 6-noyabr", correct: false },
    { matn: "1946-yil sentabr", correct: false },
    { matn: "1949-yil 29-oktabr", correct: false },
    { matn: "1947-yil 29-noyabr", correct: true }
  ]
},
{
  id: 215,
  savol: "Versal konferensiyasida Falastinda yahudiylar soni taxminan qancha edi?",
  javob: [
    { matn: "0,5 mln", correct: false },
    { matn: "850 mingdan ortiq", correct: false },
    { matn: "5 mlnga yaqin", correct: false },
    { matn: "100 mingga yaqin", correct: true }
  ]
},
{
  id: 216,
  savol: "Dunyo bo‘ylab tarqalib ketgan yahudiylarni bir joyga — Falastinga to‘plashda qaysi tashkilotning roli katta bo‘ldi?",
  javob: [
    { matn: "BMT", correct: false },
    { matn: "FOT", correct: false },
    { matn: "Milliy ozodlik fronti", correct: false },
    { matn: "Sion", correct: true }
  ]
},
{
  id: 217,
  savol: "Sionizm g‘oyasining mohiyatini aniqlang.",
  javob: [
    { matn: "Isroil-arab muammosini tinchitish, hududlarni qaytarish", correct: false },
    { matn: "Ommaviy qirg‘in qurollarini yo‘q qilish", correct: false },
    { matn: "Arab davlatlari bilan muzokara qilmaslik siyosati", correct: false },
    { matn: "Falastin hududida yahudiylar davlatini tuzish va barcha yahudiylarni bir joyga to‘plash", correct: true }
  ]
},
{
  id: 218,
  savol: "1942-yilga kelib Falastin hududidagi yahudiylar soni qanchaga yetdi?",
  javob: [
    { matn: "2 mln", correct: false },
    { matn: "1 mln", correct: false },
    { matn: "5 mln", correct: false },
    { matn: "0,5 mln", correct: true }
  ]
},
{
  id: 219,
  savol: "Falastin hududidagi yahudiylar qaysi davlatlar tomonidan zamonaviy qurollar bilan ta’minlangan?",
  javob: [
    { matn: "SSSR va Yaponiya", correct: false },
    { matn: "Fransiya va Italiya", correct: false },
    { matn: "AQSH va SSSR", correct: false },
    { matn: "AQSH va Buyuk Britaniya", correct: true }
  ]
},
{
  id: 220,
  savol: "Mustaqil Isroil davlati qachon tuzildi?",
  javob: [
    { matn: "1947-yil 4-iyul", correct: false },
    { matn: "1945-yil 16-fevral", correct: false },
    { matn: "1949-yil 31-avgust", correct: false },
    { matn: "1948-yil 14-may", correct: true }
  ]
},
{
  id: 221,
  savol: "Birinchi Isroil-arab urushi qachon yuz berdi?",
  javob: [
    { matn: "1947-yil", correct: false },
    { matn: "1949-yil", correct: false },
    { matn: "1953-yil", correct: false },
    { matn: "1948-yil", correct: true }
  ]
},
{
  id: 222,
  savol: "Isroil davlati tuzilgandan so‘ng poytaxt etib qaysi shahar e’lon qilindi?",
  javob: [
    { matn: "Quddus", correct: false },
    { matn: "Tripoli", correct: false },
    { matn: "Damshaq", correct: false },
    { matn: "Tel-Aviv", correct: true }
  ]
},
{
  id: 223,
  savol: "Birinchi Isroil-Arab urushi nima sababdan yuz berdi?",
  javob: [
    { matn: "Falastin ozodlik tashkiloti tuzilganligi oqibatida", correct: false },
    { matn: "Isroilning Misrga hujumi oqibatida", correct: false },
    { matn: "Falastin ikki davlat tuzish qarori oqibatida", correct: false },
    { matn: "Isroil davlati tuzilganligi va Falastin arab davlati tuzilmay qolganligi oqibatida", correct: true }
  ]
},
{
  id: 224,
  savol: "Arab-isroil urushi oqibatida 0,5 mln falastinlik arablar qaysi davlatga qochib o‘tishga majbur bo‘ldi?",
  javob: [
    { matn: "Suriya", correct: false },
    { matn: "Misr", correct: false },
    { matn: "Iordaniya", correct: false },
    { matn: "Livan", correct: true }
  ]
},
{
  id: 225,
  savol: "Ikkinchi jahon urushidan keyin Germaniya Isroilga qancha miqdorda tovon to‘ladi?",
  javob: [
    { matn: "2 mlrd $", correct: false },
    { matn: "4,5 mlrd$", correct: false },
    { matn: "3 mlrd $", correct: false },
    { matn: "1 mlrd $", correct: true }
  ]
},
{
  id: 226,
  savol: "Yaqin Sharq strategik xomashyo — neftga boy o‘lka. U yerda jahon neft zaxirasining necha foizi mavjud?",
  javob: [
    { matn: "35 %", correct: false },
    { matn: "65 %", correct: false },
    { matn: "44 %", correct: false },
    { matn: "50 %", correct: true }
  ]
},
{
  id: 227,
  savol: "Birinchi Isroil-Arab urushi ishtirok etgan arab davlati armiyasi yengildi. Bunga sabab nima edi?",
  javob: [
    { matn: "1, 4", correct: false },
    { matn: "2, 4", correct: false },
    { matn: "1, 3, 4", correct: false },
    { matn: "1, 2", correct: true }
  ]
},
{
  id: 228,
  savol: "1956-yil Misrga qarshi qaysi davlatlar agressiya uyushtirdilar?",
  javob: [
    { matn: "Falastin, SSSR va Isroil", correct: false },
    { matn: "AQSH, Fransiya va Isroil", correct: false },
    { matn: "Buyuk Britaniya, Fransiya va Falastin", correct: false },
    { matn: "Buyuk Britaniya, Fransiya va Isroil", correct: true }
  ]
},
{
  id: 229,
  savol: "1956-yil Misrga qarshi agressiya nima sababdan barbod bo‘ladi?",
  javob: [
    { matn: "Misrning tovon to‘lashi oqibatida", correct: false },
    { matn: "AQSHning aralashuvi oqibatida", correct: false },
    { matn: "Agressor davlatlar ittifoqining yo‘qligi", correct: false },
    { matn: "SSSRning Yaqin Sharqda tinchlikni tiklash uchun kuch ishlatishga tayyorligi haqidagi qattiq bayonoti", correct: true }
  ]
},
{
  id: 230,
  savol: "Falastin ozodlik Tashkiloti (FOT) qachon tuzildi?",
  javob: [
    { matn: "1958-yil", correct: false },
    { matn: "1961-yil", correct: false },
    { matn: "1967-yil", correct: false },
    { matn: "1964-yil", correct: true }
  ]
},
{
  id: 231,
  savol: "Qachon SSSR siyosiy birlik sifatida tugatilganligi va MDH tuzilganligi tasdiqlandi?",
  javob: [
    { matn: "1991-yil 10-dekabr", correct: false },
    { matn: "1992-yil 8-dekabr", correct: false },
    { matn: "1992-yil 10-dekabr", correct: false },
    { matn: "1991-yil 8-dekabr", correct: true }
  ]
},
{
  id: 232,
  savol: "Qachon M. Gorbachyov SSSR prezidenti vakolatlarini topshirgani haqida bayonot berdi?",
  javob: [
    { matn: "1991-yil 8-dekabr", correct: false },
    { matn: "1991-yil 10-dekabr", correct: false },
    { matn: "1991-yil 27-dekabr", correct: false },
    { matn: "1991-yil 25-dekabr", correct: true }
  ]
},
{
  id: 233,
  savol: "1991-yil dekabrda Markaziy Osiyo respublikalari rahbarlari uchrashuvi qayerda bo‘lib o‘tdi?",
  javob: [
    { matn: "Dushanbe", correct: false },
    { matn: "Toshkent", correct: false },
    { matn: "Olmaota", correct: false },
    { matn: "Ashxobot", correct: true }
  ]
},
{
  id: 234,
  savol: "SSSR xalqaro huquq subyekti sifatida tugatilganligi qayerda ta’kidlandi?",
  javob: [
    { matn: "Dushanbe", correct: false },
    { matn: "Ashxobot", correct: false },
    { matn: "Toshkent", correct: false },
    { matn: "Olmaota", correct: true }
  ]
},
{
  id: 235,
  savol: "Qaysi sobiq sovet respublikalaridan tashqari barcha davlatlar MDHga qabul qilingan?",
  javob: [
    { matn: "Ukraina, Gruziya, Tojikiston", correct: false },
    { matn: "O’zbekiston, Qozog’iston, Litva", correct: false },
    { matn: "Estoniya, Gruziya, Ozarbayjon", correct: false },
    { matn: "Latviya, Litva, Estoniya", correct: true }
  ]
},
{
  id: 236,
  savol: "1999-yilga kelib Rossiyaning tashqi qarzi qancha dollardan oshib ketdi?",
  javob: [
    { matn: "140 mlrd", correct: false },
    { matn: "150 mlrd", correct: false },
    { matn: "120 mlrd", correct: false },
    { matn: "130 mlrd", correct: true }
  ]
},
{
  id: 237,
  savol: "Neoliberal islohotlar oqibatida eng og‘ir zarba olgan yirik davlatlar qaysilar edi?",
  javob: [
    { matn: "Peru, Boliviya", correct: false },
    { matn: "Meksika, Chili", correct: false },
    { matn: "Argentina, Meksika", correct: false },
    { matn: "Braziliya, Argentina", correct: true }
  ]
},
{
  id: 238,
  savol: "Misr sivilizatsiyaviy jihatdan ko‘proq ... mansub bo‘lsa-da, Afrikaning arab mamlakatlari hayotida katta rol o‘ynaydi",
  javob: [
    { matn: "Janubiy Afrikaga", correct: false },
    { matn: "G‘arbiy O‘rtayer dengiziga", correct: false },
    { matn: "Shimoliy-sharqiy Afrikaga", correct: false },
    { matn: "Sharqiy O‘rtayer dengiziga", correct: true }
  ]
},
{
  id: 239,
  savol: "XXI asrda afrikaliklar oldida turgan eng katta muammo ...",
  javob: [
    { matn: "Qashshoqlik", correct: false },
    { matn: "Qullik", correct: false },
    { matn: "Korrupsiya", correct: false },
    { matn: "Demografik muammo", correct: true }
  ]
},
{
  id: 240,
  savol: "Argentina milliy harakatiga kim rahbarlik qilgan?",
  javob: [
    { matn: "Xose Morelos", correct: false },
    { matn: "Migel Idalgo", correct: false },
    { matn: "Sukre", correct: false },
    { matn: "Xose San Martin", correct: true }
  ]
},
{
  id: 241,
  savol: "Boltiqbo‘yi respublikalari deganda qaysi davlatlar tushuniladi?",
  javob: [
    { matn: "Norvegiya, Shvetsiya, Finlandiya", correct: false },
    { matn: "Belarus, Polsha, Ukraina", correct: false },
    { matn: "Gruziya, Ozarbayjon, Armaniston", correct: false },
    { matn: "Latviya, Litva, Estoniya", correct: true }
  ]
},
// tarix uqitish metodikasi fani
{
    id: 242,
    savol: "Tarix o‘qitish jarayonining tarkibiy qismlariga quydagilardan qaysi biri tegishli?",
    javob: [
      { matn: "Ta’lim bosqichlari.", correct: false },
      { matn: "Ta’limning maqsadi, mazmuni va taelim natijalari.", correct: true },
      { matn: "Ta’limning vazifalari.", correct: false },
      { matn: "O‘qitish usullari, va ta’lim natijalari.", correct: false }
    ]
  },
  {
    id: 243,
    savol: "Tarix o‘qitish jarayoni qanday yo‘llar bilan o‘rganiladi?",
    javob: [
      { matn: "Tadqiqot usuli bilan.", correct: false },
      { matn: "Savol-javob usuli bilan.", correct: false },
      { matn: "Kuzatish va tadqiqot usuli bilan.", correct: true },
      { matn: "Kuzatish usuli bilan.", correct: false }
    ]
  },
  {
    id: 244,
    savol: "“Men tarbiyachining so‘zidagi qudrati, cheksiz kuchiga ishonaman. So‘z eng nozik va eng o‘tkir quroldir”-Ushbu so‘zlar qaysi mashhur pedagogik faoliyatiga tegishli",
    javob: [
      { matn: "V.A.Suxomlinskiy.", correct: true },
      { matn: "Abdulla Avloniy.", correct: false },
      { matn: "Munavvar Qori.", correct: false },
      { matn: "Ya.A.Komenskiy.", correct: false }
    ]
  },
  {
    id: 245,
    savol: "Darsning optimal varianti nima?",
    javob: [
      { matn: "Bilish faoliyatini takomillashtirish.", correct: false },
      { matn: "Ilmiy-usulubiy va didaktik natijalar.", correct: true },
      { matn: "Darsga bo‘lgan asosiy talablar.", correct: false },
      { matn: "Samaradorlikning ta’minlash.", correct: false }
    ]
  },
  {
    id: 246,
    savol: "Tarixiy bilimlarni shakllantirish qanday yo‘llar bilan amalga oshiriladi?",
    javob: [
      { matn: "Soddalashtirilgan yo‘llar bilan.", correct: false },
      { matn: "Qisqartirilgan va soddalashtirilgan yo‘llar bilan.", correct: true },
      { matn: "Umumlashtirilgan yo‘llar bilan.", correct: false },
      { matn: "Qisqartirilgan yo‘llar bilan.", correct: false }
    ]
  },
  {
    id: 247,
    savol: "Dars tahlilining manbalari nimalarga asoslanadi?",
    javob: [
      { matn: "Pedagoglar maxoratiga.", correct: false },
      { matn: "Pedagogika fanining yutuqlariga va psixologiya fan asoslariga.", correct: false },
      { matn: "Metodologik adabiyotlarga, pedagogika fanining yutuqlariga va ilg‘or pedagoglar tajribalariga.", correct: true },
      { matn: "Amaliyot usullari.", correct: false }
    ]
  },
  {
    id: 248,
    savol: "O‘qitish usuli deganda.........",
    javob: [
      { matn: "O‘qitish usuli o‘qituvchi tomonidan zarur tarixiy bilimlarni shunchaki bayon etish holati deb tushuniladi.", correct: false },
      { matn: "O‘qitish usuli deganda tarix o‘qitish jarayonida yoshlarning bilish faoliyatini faollashtirish tushuniladi.", correct: false },
      { matn: "Ta’lim jarayonida o‘qituvchi va o‘quvchilarning ma’lum maqsadlariga erishishga qaratilgan birgalikdagi faoliyat usullari tushuniladi.", correct: true },
      { matn: "O‘qituvchi usuli har ikkala faoliyatining tarix ta’limini o‘zlashtirish jarayoni tushuniladi.", correct: false }
    ]
  },
  {
    id: 249,
    savol: "Ekologik ta’lim-tarbiya nimalarga asoslanadi?",
    javob: [
      { matn: "Ekologik tarbiya o‘quvchilarda faqat ekologik madaniyatni shakllantiradi.", correct: false },
      { matn: "Ekologik ta’lim-tarbiya umumiy ta’limning o‘zaro aloqadorligida asoslangan.", correct: true },
      { matn: "Ekologik ta’lim-tarbiya insonni o‘rab turgan tabiatga nisbatan ma’suliyatni oshirishga asoslanmagangan.", correct: false },
      { matn: "O‘quvchilarni tevarak–muxitga nisbatan munosabatlariga asoslangan.", correct: false }
    ]
  },
  {
    id: 250,
    savol: "Psixologik tahlil bu ......",
    javob: [
      { matn: "O‘qituvchining nazorati tashkil etadi.", correct: false },
      { matn: "Psixologik tahlil takomillashgan psixologik asoslarga suyanmagan holda tekshiruvchi jarayondir.", correct: false },
      { matn: "O‘quvchi va o‘qituvchining qobiliyati, qiziqishi, temperamenti, diqqat, idrok kabilarni o‘rganuvchi holat.", correct: true },
      { matn: "Boshqa fanlardan o‘zining murakkabligi bilan farq qilmaydigan fan.", correct: false }
    ]
  },
  {
    id: 251,
    savol: "Tarixiy tushunchalarni shakllantirish nimalarni bilishni taqazo etadi.",
    javob: [
      { matn: "Tarixiy faktlarni bilishni .", correct: true },
      { matn: "Tarixiy faktlarni o‘zlashtirishni.", correct: false },
      { matn: "Tarixiy jarayon qonuniyatlarini bilishni.", correct: false },
      { matn: "Tarixiy voqealarni og‘zaki bayon etish.", correct: false }
    ]
  },
  {
    id: 252,
    savol: "Ma’lumki tarixni yangi yo‘nalishlar bo‘yicha o‘qitishdan maqsad o‘quvchilarga bilim berish va malakalar hosil qilish bilan birga juda murakkab va ma’suliyatli vazifalar ham amalga oshirishdir. Ana shunda ko‘proq qaysi holatlar muhim o‘rin tutadi.",
    javob: [
      { matn: "Faqat bilim saviyasi.", correct: false },
      { matn: "O‘qituvchining g‘oyaviy-siyosiy tayorgarligi ahloqiy qiyofasi, madaniyati.", correct: true },
      { matn: "Ahloqiy qiyofasi.", correct: false },
      { matn: "O‘qituvchining hoyaviy-siyosiy tayorganligi.", correct: false }
    ]
  },
  {
    id: 253,
    savol: "Ta’lim-tarbiya jarayonida ijtimoiy-siyosiy, ma’naviy va mafkuraviy jihatdan yetuk shaxsni kamol toptirish ko‘p qirrali jarayon bo‘lib, unda birinchi galda......",
    javob: [
      { matn: "Ta’limni insonparvarlashtirish, asosiy omil hisoblanadi.", correct: false },
      { matn: "Demokratlashtirish asosiy omil hisoblanadi.", correct: false },
      { matn: "Insonparvarlashtirish, demokratlashtirish va integratsiyalashtirish asosiy omil hisoblanadi.", correct: true },
      { matn: "integratsiyalashtirish asosiy omil hisoblanadi.", correct: false }
    ]
  },
  {
    id: 254,
    savol: "“Chuqur tahlil, mantiqqa asoslanmagan biryoqlama fikr odamlarni, eng avvalo tarix o‘qituvchilarni chalg‘itadi”- Ushbu so‘zlar O‘zbekiston Respublikasi Prezidenti I.A.Karimovning qaysi kitoblarida keltirilgan.",
    javob: [
      { matn: "“Vatan ravnaqi uchun har birimiz ma’sulmiz” kitobida.", correct: false },
      { matn: "“Tarixiy xotirasiz kelajak yo‘q” kitobida.", correct: true },
      { matn: "“O‘zbekistonning o‘z istiqlol va taraqqiyot yo‘li” kitobida.", correct: false },
      { matn: "“Barkamol avlod-O‘zbekiston taraqqiyotining poydevori” kitobida.", correct: false }
    ]
  },
  {
    id: 255,
    savol: "O‘qituvchining jonli nutqi qanday ahamiyatga ega?",
    javob: [
      { matn: "O‘qituvchining jonli nutqi puxta bilim va malaka manbai bo‘lish bilan birga, juda katta tarbiyalovchi kuchga ega.", correct: true },
      { matn: "O‘qituvchining jonli nutqi o‘quvchilarga tarixiy materiallarni osongina umumlashtirishga yordam beruvchi omildir.", correct: false },
      { matn: "Jonli nutq o‘quvchilarni ishontiruvchi kuchga ega.", correct: false },
      { matn: "O‘qituvchining jonli nutqi o‘quvchilar ko‘z o‘ngida o‘tmish va zamanaviy tarixni yaqqol gavdalantira oluvchi kuchga ega.", correct: false }
    ]
  },
  {
    id: 256,
    savol: "Didaktik tahlil nima?",
    javob: [
      { matn: "O‘qituvchi bayoning o‘quvchilar jamoasiga to‘la tushunarli bo‘lishi va o‘quvchilarning o‘zlashtirishi.", correct: false },
      { matn: "O‘qituvchining dars o‘tishiga, o‘quvchilarning bilishni o‘zlashtirish qobilyatiga ahamiyat berilishi.", correct: false },
      { matn: "Ta’lim turlarining samaradorligini va samaradorlikni belgilovchi qonunlarni darsda qanchalik to‘g‘ri va mukammal bajarilganligi tahlil etilishi.", correct: true },
      { matn: "O‘qituvchi fikrining g‘oyaviy jixatdan zamonaviy tarbiya talabiga mos bo‘lish.", correct: false }
    ]
  },
  {
    id: 257,
    savol: "Tarix ta’limidagi hikoya uslubi qanday hollarda qo‘llaniladi.",
    javob: [
      { matn: "Tarixiy voqealarni tarixiy faktlar asosida bayon qilishda.", correct: false },
      { matn: "O‘quvchilirda yangi tarixiy hodisalar haqida mazmunli va aniq tasavvur yaratish zarur bo‘lgan paytda.", correct: false },
      { matn: "Tarixiy voqeaning to‘liq manzarasi berilgan xolatda qo‘llaniladi.", correct: false },
      { matn: "Ta’lim-tarbiya jixatidan muxim va ularni o‘rganish o‘quvchilar ongida chuqur va yorqin iz qoldirgan yirik tarihiy voqealarni bayon qilishda.", correct: true }
    ]
  },
  {
    id: 258,
    savol: "“Metodologiya” tushunchasi deb.......",
    javob: [
      { matn: "Fan sohasida amalga oshirilib boriladigan ma’lum yo‘llar, operatsiyalar tizimi va shu tizim to‘g‘risidagi ta’limot, metod nazariyasiga aytiladi.", correct: true },
      { matn: "Har bir fanga xos metodlar majmuiga aytiladi.", correct: false },
      { matn: "Tarixiy bilimlarning tuzilishi prinsiplariga aytiladi.", correct: false },
      { matn: "Tarix fanning nazariy-metodologik asoslari va qonuniyatlariga aytiladi.", correct: false }
    ]
  },
  {
    id: 259,
    savol: "Oliy maktab ma’ruzasi nima?",
    javob: [
      { matn: "Faqat ajratilgan vaqtning ko‘p yoki ozligi bilan emas, balki o‘zining mazmuni, o‘qitish va o‘rganishning usullari jihatidan farq qilishdan iborat.", correct: false },
      { matn: "Aniq tarixiy material ustida keng nazariy muxokama yuritishi, uni ilmiy chuqur tahlil qilish va umumlashtirishdan iborat.", correct: true },
      { matn: "Tahlil qilish, umumlashtirish, tizimga solish va muxokama yuritishdan iborat.", correct: false },
      { matn: "Ma’ruza o‘quvchilarni fikrlashga o‘rgatishi, tarixiy voqealarni taxlil qilish va umumlashtirish namunasini ko‘rsatish lozim.", correct: false }
    ]
  },
  {
    id: 260,
    savol: "Tarix darslarining mohiyatini nima tashkil etadi?",
    javob: [
      { matn: "Asosiy tarixiy faktlar va tushunchalar tashkil etadi.", correct: false },
      { matn: "Ta’lim jarayoni tashkil etadi.", correct: true },
      { matn: "Tarix darslarini turlarga bo‘linishi tashkil etadi.", correct: false },
      { matn: "Tarixiy materialni taxlil etish tashkil etadi.", correct: false }
    ]
  },
  {
    id: 261,
    savol: "“Xaftalik dars tahlili jadvali” necha ish kuniga mo‘ljallangan bo‘ladi?",
    javob: [
      { matn: "Bir o‘quv yiliga muljallangan.", correct: false },
      { matn: "Faqat o‘qituvchining bir kunlik metod kuniga mo‘ljallangan.", correct: false },
      { matn: "Asosan uch oyga mo‘ljallangan.", correct: false },
      { matn: "Olti ish kuniga mo‘ljallangan.", correct: true }
    ]
  },
  {
    id: 262,
    savol: "Tarixiy hujjatlar ustida ishlashning qanday usullari mavjud.",
    javob: [
      { matn: "Tarixiy hujjatlarni o‘qituvchining bevosita rahbarligida o‘quvchilar darsda tahlil qilish mumkin.", correct: false },
      { matn: "Tarixiy hujjatlar ustida ishlashning yuqorida keltirilgan har uchchala holatni ham tug‘ri hisoblanadi.", correct: true },
      { matn: "O‘qituvchi o‘quvchilarga ma’lum hujjatlarni uyda mustaqil tahlil qilib kelishni topshirishi mumkin.", correct: false },
      { matn: "O‘qituvchi tarixiy hujjatni o‘zi tahlil qilib berishi mumkin.", correct: false }
    ]
  },
  {
    id: 263,
    savol: "Tarix ta’limida kursatmali vositalardan foydalanish.....",
    javob: [
      { matn: "Tarixiy hodisalarning tashqi ko‘rinishi anglashga yordam beradi.", correct: false },
      { matn: "O‘quvchilarning bilish faoliyatini kengaytiradi.", correct: false },
      { matn: "O‘quvchilarning murakkab tarixiy hodisalarni, tarixiy tushunchalarnini ma’nosini osonroq tushunib olishlariga yordam beradi.", correct: true },
      { matn: "Tarixiy hujjatlar va badiy adabiyotlardan unumli foydalanishga o‘rgatiladi.", correct: false }
    ]
  },
  {
    id: 264,
    savol: "Og‘zaki uslubga nimalar kiradi?",
    javob: [
      { matn: "Darsda ovoz chiqarib o‘qish.", correct: false },
      { matn: "O‘qituvchining xikoyasi, ovoz chiqarib o‘qishi, darsdan keyin bo‘ladigan ma’ruzasi.", correct: true },
      { matn: "O‘qituvchining darsdan keyin bo‘ladigan ma’ruzasi.", correct: false },
      { matn: "Dars davomida o‘qituvchining hikoya qilib berish.", correct: false }
    ]
  },
  {
    id: 265,
    savol: "Tarix ta’limida tarixiy hujjatlar bilan ishlash usuli qanday imkoniyatlarga ega?",
    javob: [
      { matn: "O‘qituvchi bayonining ishonchli va emotsional bo‘lishini ta’minlamaydi.", correct: false },
      { matn: "Tarixiy hujjat o‘qituvchining bayonini aniqlashtirish chuqurlashtirish va aniqlik kiritish uchun hizmat qiladi.", correct: true },
      { matn: "O‘tmishning yorqin obrazlarini, tarixiy voqealarning xususiyatlarini anglab olishga yordam beradi.", correct: false },
      { matn: "Tarixiy hujjatlar faqat qo'shimcha ma'lumot sifatida qaraladi.", correct: false }
    ]
  },
  {
    id: 266,
    savol: "Tarix ta’limida maktab maruzasining Oliy maktab maruzasidan farqli tomonlari nimada?",
    javob: [
      { matn: "Maktab ma’ruzasi faqat ajratilgan vaqtning ko‘p yoki ozligi bilan emas, balki o‘zining mazmuni o‘qitish va o‘rganishning metodlari jihatidan ham oliy maktablardagi ma’ruzalardan farq qiladi. Maktab ma’ruzasida hikoya va tavsiya etilgan tarixiy material tahlil qilish va umumlashtirish vazifasini o‘taydi.", correct: true },
      { matn: "Maktab ma’ruzasi tarixiy material ustida keng nazariy muhokama yuritishdan iboratdir.", correct: false },
      { matn: "Tahlil etish umumlashtirish, tizimga solish va muhakama yuritish maktab ma’ruzasini asosini tashkil etadi.", correct: false },
      { matn: "Oliy maktab ma'ruzasi maktab ma'ruzasidan qisqaroq bo'lishi bilan farqlanadi.", correct: false }
    ]
  },
  {
    id: 267,
    savol: "Tarix darslarida o‘quvchilar tarixiy bilimlarni qanday yo‘llar bilan o‘zlashtira oladilar?",
    javob: [
      { matn: "Ma’ruzaga tegishli darsliklar yordamida.", correct: false },
      { matn: "Tarixiy-badiy adabiyotlarni mustaqil o‘rganish yordamida.", correct: false },
      { matn: "O‘qituvchining bayoni va suhbati yordamida.", correct: true },
      { matn: "Xronologiya materiallari yordamida.", correct: false }
    ]
  },
  {
    id: 268,
    savol: "Tarix o‘qitish jarayonida tarixiy xujjatlar...",
    javob: [
      { matn: "O‘quvchilar bilimini mustahkamlashga qo‘shimcha asos bo‘lib xizmat qiladi.", correct: false },
      { matn: "O‘qituvchi bayonini aniqlashtirish, chuqurlashtirish va unga yanada aniqlik kiritishga xizmat qiladi.", correct: true },
      { matn: "O‘qituvchi bayonini yanada osonlashtiradi va xulosa chiqarishda yordam beradi.", correct: false },
      { matn: "Tarixiy xujjatlarni o‘quvchilarning o‘zlari tahlil qilishadi.", correct: false }
    ]
  },
  {
    id: 269,
    savol: "Ta’lim metodlarini tahlil etishda nimalarga e’tibor qaratiladi.",
    javob: [
      { matn: "Darsda ko‘rgazmali qurrollarning tanlanishi.", correct: false },
      { matn: "O‘qituvchi qo‘llayotgan uslubning o‘quv materialining xarakteriga mosligiga.", correct: true },
      { matn: "Amaliy ishlarining bajarilishidagi o‘quvchilar faoliyatiga.", correct: false },
      { matn: "Ta’lim metodlarini tahlil etishda e’tibor qaratilmaydi.", correct: false }
    ]
  },
  {
    id: 270,
    savol: "Pedagog texnologiya nima?",
    javob: [
      { matn: "O‘qituvchining kasbiy faoliyatini yangilovchi va ta’limda yakuniy natijani kafolatlaydigan muolajalar yig‘indisidir.", correct: false },
      { matn: "O‘qituvchining o‘qitish vositalari yordamida o‘quvchilarga muayyan sharoitda ta’sir kursatishi.", correct: true },
      { matn: "O‘qituvchining jamiyatimizning har bir a’zosini tarbiya asoslari bilan tanishtirishdir.", correct: false },
      { matn: "Tegishli boshqaruv organlari tomonidan yangi uslublarni tatbiq etilishi.", correct: false }
    ]
  },
  {
    id: 271,
    savol: "Zamonaviy Pedagogik texnologiyaning eng asosiy belgilaridan birini aniqlang.",
    javob: [
      { matn: "O‘qituvchilarning o‘z amaliy faoliyalarida texnik vositalar va didaktik materiallardan metodik jixatdan to‘g‘ri foydalana olish tayyorgarligini tekshirish.", correct: false },
      { matn: "Axborot texnologiyasi va texnik vositalar samarasini belgilashdigan didaktik materiallardan keng foydalanishi. O‘qituvchilarning o‘z amaliy faoliyalarida texnik vositalar va didaktik materiallardan metodik jixatdan to‘g‘ri foydalana olish tayyorgarligini tekshirish.", correct: true },
      { matn: "O‘quv jarayoni uchun axborot vositali samara beradigan mavzuni aniqlaydigan didaktik materiallarni ishlab chiqish.", correct: false },
      { matn: "O‘quv-tarbiya jarayoni natijalarini ob’ektiv nazorat qilish va sifatli baholash.", correct: false }
    ]
  },
  {
    id: 272,
    savol: "O‘qituvchining tarix darsiga tayyorgarlik ko‘rishida tematik rejalashtirishning roli nimadan iborat?",
    javob: [
      { matn: "Tematik rejalashtirishda o‘qituvchi darslikda nimalar ortiqcha-yu? nimalar yetishmasligi va uni qanday to‘ldirish lozimligi muammolarini hal etadi.", correct: false },
      { matn: "Har bir darsni sifatli o‘tish o‘qituvchining unga qanday tayyorgarlik ko‘rishi va rejalashtirishga bog‘liqdir.", correct: false },
      { matn: "Tarix darsida tematik rejalashtirish o‘qituvchining darsga tayyorgarlik ko‘rinishining birinchi bosqichi bo‘lib, bu bosqichda o‘qituvchi dastur, darslik va o‘quv qo‘llanmalarni o‘rganadi.", correct: true },
      { matn: "O‘qituvchi tematik rejalashtirishda takomillashgan dasturlar joriy etilishi munosabati bilan taqvim tematik rejalashtirishga qo‘yilgan talablarni ham hisobga oldi.", correct: false }
    ]
  },
  {
    id: 273,
    savol: "Tarixiy bilimlarni shakllanishida tarixiy faktlar kanday namoyon bo‘ladi",
    javob: [
      { matn: "Tarixiy bilimlarni shakllanishi tarixiy faktlarni o‘rganishni qiyinlashtiradi.", correct: false },
      { matn: "Tarixiy xodisalar gnezisi, ya’ni ularni vujudga kelishi va rivojlanishida, hamda ijtimoiy xayotda o‘ziga xoslik va umumiylikda.", correct: true },
      { matn: "Tarixiy jarayon va boshka shunga o‘xshash bilimlar konuniyatlarini tarix fani tomonidan ochilishida.", correct: false },
      { matn: "O‘qish jarayonida o‘quvchilar tomonidan o‘zlashtirilib olinmasligida.", correct: false }
    ]
  },
  {
    id: 274,
    savol: "O‘quvchilar tomonidan tarixiy bilimlarni o‘zlashtirishning asosiy shartlari nima hisoblanadi.",
    javob: [
      { matn: "Tarixiy bilimlarni o‘zlpshtirishga, idrok etishga o‘qituvchiga bevosita va sistemali rahbarlik qilinishi mazkur muammoni ijobiy hal etishning asosiy shartlaridan hisoblanadi.", correct: true },
      { matn: "O‘quvchilarning tarixiy bilimlarni o‘zlashtirishida o‘quv faoliyatlariga o‘qituvchi tomonidan mohirlik bilan rahbarlik qilish asosiiy omil hisoblanadi.", correct: false },
      { matn: "O‘qituvchi o‘quvchi dars jarayonida o‘rganilayotgan mavzudagi asosiy masalani alohida qayd etishlari muhim hisoblanadi.", correct: false },
      { matn: "O‘qituvchi bu jarayonda o‘quvchilarning tarixiy xujjatlar va badiy adabiyot asarlarini mustaqil tahlil etishni faollashtirmog‘i lozim.", correct: false }
    ]
  },
  {
    id: 275,
    savol: "Dars samaradorligini oshira bilmaslik sabablari nimalarda aks etadi?",
    javob: [
      { matn: "O‘tilgan mavzular yuzasidan muammoli emas, dialog sifatida berilgan savollarga og‘zaki javoblarni eshitish natijasida.", correct: false },
      { matn: "Darsda faol ishtirok etishga qaratilgan metodlardan umuman darak bo‘lmasligi natijasida.", correct: false },
      { matn: "O‘qituvchilarning zarur ilmiy-nazariy va metodik talablarni o‘z o‘rniga qo‘llay bilmasligi natijasida.", correct: true },
      { matn: "O‘quvchilar bilimini baholash uchun berilgan savollarni ba’zi hollarda o‘rinsiz va asossiz bo‘lishi natijasida.", correct: false }
    ]
  },
  {
    id: 276,
    savol: "Tarix ta’limida ko‘rsatmalilik uslubining yordamchi tomonlari nimalardan iborat bo‘ladi.",
    javob: [
      { matn: "Tarixiy tasavvurlarni real tushunishga yordam bo‘ladi.", correct: false },
      { matn: "Tarixni bilimlarining asosiy manbalaridan biri bo‘lib hizmat qiladi, va o‘qituvchi bayonining obrazli va emotsional bo‘lishini ta’minlaydi.", correct: true },
      { matn: "O‘quv materialining ta’lim-tarbiya vazifalarini muvaffaqiyatli amalga oshirishga yordam bermaydi.", correct: false },
      { matn: "Ko‘rsatmalar faqat tarixiy faktlarga asoslanadi.", correct: false }
    ]
  },
  {
    id: 277,
    savol: "Ma’lumki tarix ta’limida ko‘rsatmali qurollar o‘zining mazmuni va foydalanish usullariga qarab bir necha turlarga bo‘linadi. Ana shulardan quyidagi qaysi xolatlar predmet ko‘rsatmalilik turiga kiradi?",
    javob: [
      { matn: "O‘qitishda foydalanish uchun ishlatiladigan tarixiy suratlar va albomlar, san’at asarlari, rasmlar, foto hujjatlar.", correct: false },
      { matn: "Tarixiy va belgilik xaritalari, tarixiy atlaslar, chizmalar, pedagogik rasmlar va boshqalar.", correct: false },
      { matn: "Tarixiy yodgorliklar, esdalik joylari, arxitektura yodgorliklari, mehnat qurollari, qurol-yarog‘lari, ro‘zg‘or buyumlari.", correct: true },
      { matn: "O‘tmishdan qolgan haqiqiy asl nusxa hujjatlar asosida yaratilgan tasviriy ko‘rsatmalar.", correct: false }
    ]
  },
  {
    id: 278,
    savol: "Tarix o‘qitishni tashkil qilish deganda nimani tushunasiz?",
    javob: [
      { matn: "Tarixni o‘qitish va o‘rganishni tashkil etish, o‘quvchilardagi mavjud bilimlarni ishga solish va ularni ijodiy bilishga yo‘naltiradigan topshiriqlar tizimi hamda ta’limning turli xil formalari tushiniladi.", correct: true },
      { matn: "Tarixni o‘qitish va o‘quvchilarning uni o‘rganishni tashkil etishi tushuniladi.", correct: false },
      { matn: "Ta’limning turli xil formalari, dars, amaliyot, mashg‘ulotlar va boshqalar tushuniladi.", correct: false },
      { matn: "Tarixiy bilimlarni qo‘llash tushiniladi.", correct: false }
    ]
  },
  {
    id: 279,
    savol: "Tarix o‘qitishning natijalari deganda qanday holatlar nazarda tutiladi?",
    javob: [
      { matn: "Tarix o‘qitishning natijalarida faqat o‘quvchilarning qobiliyatlari nazarda tutiladi.", correct: false },
      { matn: "O‘quvchilarning tarix fani asoslarini, tarixiy materialga mos samarali metodlarini bilish va bilimlardan foydalana bilish malakalarini puxta o‘zlashtirishlarni nazarda tutiladi.", correct: true },
      { matn: "Zaruriy sifatlarini tarbiyalash, ular nazarda tutilishi mumkin.", correct: false },
      { matn: "Tarix o‘qitishning maqsad va vazifalarini muvaffaqiyatli amalga oshira olmasligi nazarda tutiladi.", correct: false }
    ]
  },
  {
    id: 280,
    savol: "Tarix kursining ta’limiy vazifalarini belgilashda quyidagi javoblarning qaysi birini to‘g‘ri deb hisoblaysiz ?",
    javob: [
      { matn: "O‘quvchilar uchun faqat zamonaviy tarixiy bilimlar yetarli deb hisoblasa bo‘ladi.", correct: false },
      { matn: "O‘quvchilarni maktab tarix kursidagi muhim tarixiy tushunchalarni puxta o‘zlashtirishlari, yetarli deb xisoblanadi.", correct: false },
      { matn: "O‘quvchilar tarixiy jarayonni va ijtimoiy hayotning turli tomonlarini xarakterlab beruvchi muhim tarixiy faktlarni puxta o‘zlashtirib olgan bo‘lishlari zarur.", correct: true },
      { matn: "O‘quvchilar tarix kursidan olgan bilimlarni kundalik ijtimoiy ishlarda qo‘llay bilishlari shart emas.", correct: false }
    ]
  },
  {
    id: 281,
    savol: "Tarix ta’limining amaliy metodi qanday ahamiyatga ega ?",
    javob: [
      { matn: "Tarix ta’limining amaliy metodi hamma bosqichlarda ham o‘quvchilarning mustaqil ishlashlari mumkinligini ko‘rsatadi.", correct: false },
      { matn: "Amaliy metod juda katta ta’limiy va tarbiyaviy ahamiyatga ega bo‘lib, tarix o‘qitishni hayot bilan bog‘lashga yordam beradi hamda o‘quvchi yoshlarni fuqarolik burchini tushunib, xayotda o‘z o‘rnilarini topib olishlariga yordamlashadi.", correct: true },
      { matn: "Amaliy metod faqat o‘qituvchining ish usullaridangina iborat bo‘lib qolmay, balki o‘quvchilarning ham ish metodlarini o‘z ichiga oladi.", correct: false },
      { matn: "Amaliy metod tarixning asosiy kurslarini o‘rganishda hamda fakultativ mashg‘ulotlarda asosiy rol uynaydi.", correct: false }
    ]
  },
  {
    id: 282,
    savol: "Tarixiy tushunchalarni shakllantirish nimalarni bilishni taqazo etadi.",
    javob: [
      { matn: "Tarixiy voqealarni og‘zaki bayon etish.", correct: false },
      { matn: "Tarixiy faktlarni o‘zlashtirishni.", correct: false },
      { matn: "Tarixiy faktlarni bilishni.", correct: true },
      { matn: "Tarixiy jarayon qonuniyatlarini bilishni.", correct: false }
    ]
  },
  {
    id: 283,
    savol: "Ma’lumki tarixni yangi yo‘nalishlar bo‘yicha o‘qitishdan maqsad o‘quvchilarga bilim berish va malakalar hosil qilish bilan birga juda murakkab va ma’suliyatli vazifalar ham amalga oshirishdir. Ana shunda ko‘proq qaysi holatlar muhim o‘rin tutadi.",
    javob: [
      { matn: "O‘qituvchining g‘oyaviy-siyosiy tayyorgarligi.", correct: true },
      { matn: "Ahloqiy qiyofasi.", correct: false },
      { matn: "Faqat bilim saviyasi.", correct: false },
      { matn: "O‘qituvchining g‘oyaviy-siyosiy tayyorgarligiahloqiy qiyofasi, madaniyati.", correct: false }
    ]
  },
  {
    id: 284,
    savol: "Ta’lim-tarbiya jarayonida ijtimoiy-siyosiy, ma’naviy va mafkuraviy jihatdan yetuk shaxsni kamol toptirish ko‘p qirrali jarayon bo‘lib, unda birinchi galda......",
    javob: [
      { matn: "Demokratlashtirish asosiy omil hisoblanadi.", correct: false },
      { matn: "Ta’limni insonparvarlashtirish, asosiy omil hisoblanadi.", correct: false },
      { matn: "Insonparvarlashtirish, demokratlashtirish va integratsiyalashtirish asosiy omil hisoblanadi.", correct: true },
      { matn: "integratsiyalashtirish asosiy omil hisoblanadi.", correct: false }
    ]
  },
  {
    id: 285,
    savol: "“Chuqur tahlil, mantiqqa asoslanmagan biryoqlama fikr odamlarni, eng avvalo tarix o‘qituvchilarni chalg‘itadi”- Ushbu so‘zlar O‘zbekiston Respublikasi Prezidenti I.A.Karimovning qaysi kitoblarida keltirilgan.",
    javob: [
      { matn: "“Vatan ravnaqi uchun har birimiz ma’sulmiz” kitobda.", correct: false },
      { matn: "“O‘zbekistonning o‘z istiqlol va taraqqiyot yo‘li” kitobda.", correct: false },
      { matn: "“Barkamol avlod-O‘zbekiston taraqqiyotining poydevori” kitobida.", correct: false },
      { matn: "“Tarixiy xotirasiz kelajak yo‘q” kitobda.", correct: true }
    ]
  },
  {
    id: 286,
    savol: "O‘qituvchining jonli nutqi qanday ahamiyatga ega?",
    javob: [
      { matn: "O‘qituvchining jonli nutqi o‘quvchilar ko‘z o‘ngida o‘tmish va zamanaviy tarixni yaqqol gavdalantira oluvchi kuchga ega.", correct: false },
      { matn: "O‘qituvchining jonli nutqi kuch bilim va malaka manbai bo‘lish bilan birga, juda katta tarbiyalovchi kuchga ega.", correct: true },
      { matn: "Jonli nutq o‘quvchilarni ishontiruvchi kuchga ega.", correct: false },
      { matn: "O‘qituvchining jonli nutqi O‘quvchilarga tarixiy materiallarni osongina umumlashtirishga yordam beruvchi omildir.", correct: false }
    ]
  },
  {
    id: 287,
    savol: "Didaktik tahlil nima?",
    javob: [
      { matn: "O‘qituvchi bayonining O‘quvchilar jamoasiga to‘la tushunarli bo‘lishi va o‘quvchilarning o‘zlashtirish.", correct: false },
      { matn: "Ta’lim turlarining samaradorligini va samaradorlikni belgilovchi qonunlarni darsda qanchalik to‘g‘ri va mukammal bajarilganligi tahlil etilishi.", correct: true },
      { matn: "O‘qituvchining dars o‘tishiga, o‘quvchilarning bilishni o‘zlashtirish qobilyatiga ahamiyat berilishi.", correct: false },
      { matn: "O‘qituvchi fikrining g‘oyaviy jixatdan zamonaviy tarbiya talabiga mos bo‘lish.", correct: false }
    ]
  },
  {
    id: 288,
    savol: "“Xaftalik dars tahlil jadvali” nega ish kuniga mo‘ljallangan bo‘ladi?",
    javob: [
      { matn: "Asosan uch oyga mo‘ljallangan.", correct: false },
      { matn: "Olti ish kuniga mo‘ljallangan.", correct: true },
      { matn: "Bir o‘quv yiliga muljallangan.", correct: false },
      { matn: "Faqat o‘qituvchining bir kunlik metod kuniga mo‘ljallangan.", correct: false }
    ]
  },
  {
    id: 289,
    savol: "O‘zbekiston tarixi fanini o‘qitishning asosiy maqsadi nima?",
    javob: [
      { matn: "O‘quvchi yoshlarda mamlakatimiz hududida bo‘lib o‘tgan o‘tmish tarixni yorqin gavdalantirishdan iboratdir.", correct: false },
      { matn: "O‘zbekiston davlatining o‘tmish tarixini o‘rganish va Vatanga sodiq jamiyat kishisini tarbiyalashdan iboratdir.", correct: true },
      { matn: "O‘quvchilarda yurtimizning millimy qadriyatlari va ma’naviy merosini o‘rganishi haqida taasurot uyg‘otish.", correct: false },
      { matn: "Tashqi dushmanlarga qarshi kurashgan milliy qahramonlarimiz bilan tanishtirish.", correct: false }
    ]
  },
  {
    id: 290,
    savol: "Tarix ta’limida ko‘rsatmali vositalardan foydalanish.....",
    javob: [
      { matn: "Tarixiy hodisalarning tashqi ko‘rinishi anglashga yordam beradi.", correct: false },
      { matn: "O‘quvchilarning murakkab tarixiy hodisalarni, tarixiy tushunchalarini ma’nosini osonroq tushunib olishlariga yordam beradi.", correct: true },
      { matn: "O‘quvchilarning bilish faoliyatini kengaytiradi.", correct: false },
      { matn: "Tarixiy hujjatlar va badiiy adabiyotlardan unumli foydalanishga o‘rgatiladi.", correct: false }
    ]
  },
  {
    id: 291,
    savol: "Og‘zaki uslubga nimalar kiradi?",
    javob: [
      { matn: "Darsda ovoz chiqarib o‘qish.", correct: false },
      { matn: "O‘qituvchining darsdan keyin bo‘ladigan ma’ruzasi.", correct: false },
      { matn: "O‘qituvchining xikoyasi, ovoz chiqarib o‘qishi, darsdan keyin bo‘ladigan ma’ruzisi.", correct: true },
      { matn: "Dars davomida o‘qituvchining hikoya qilib berish.", correct: false }
    ]
  },
  {
    id: 292,
    savol: "Metod deganda nima tushuniladi?",
    javob: [
      { matn: "Bilimlarni egallash.", correct: false },
      { matn: "Malaka va ko‘nikmalar hosil qilish.", correct: false },
      { matn: "Ta’limda maqsadga erishish, masalalarini hal qilish yo‘llari, usullari tushuniladi.", correct: true },
      { matn: "Ta’limda maqsadga erishish.", correct: false }
    ]
  },
  {
    id: 293,
    savol: "Hozirgi davrda quyidagi an’anaviy metodlardan qaysi birlari inobatga olingan?",
    javob: [
      { matn: "Amaliy, ko‘rgazmali, ifodali, kitob bilan ishlash, video metodlari.", correct: true },
      { matn: "Ko‘rgazmali ishlash usulida.", correct: false },
      { matn: "Kutubxonada ishlash.", correct: false },
      { matn: "Faqat slaydlar asosida.", correct: false }
    ]
  },
  {
    id: 294,
    savol: "Tadqiqiy metod nima?",
    javob: [
      { matn: "Yangi bilimlarni mustaxkamlash.", correct: false },
      { matn: "Muammoning belgilab olinishi va muammoning tadqiqoti jarayonida bilim egallanishi.", correct: true },
      { matn: "Mustaqil fikr yuritish.", correct: false },
      { matn: "Bilimlarni qayta tahlil etish.", correct: false }
    ]
  },
  {
    id: 295,
    savol: "Ma’lumki Akad.Yu.K.Babanskiy o‘qitish metodlarining uchta guruhini alohida belgilab bergan. Quyidagilardan qaysi biri oxirgi(uchinchi) guruxni tashkil etadi?",
    javob: [
      { matn: "O‘quv bilish faoliyatini motivatsiyalash va stimullash metodlari.", correct: false },
      { matn: "O‘quv bilish faoliyatini tashkil etish va amalga oshirish metodlari.", correct: false },
      { matn: "Bilimlar va e’tiqodlarni shakllantirish metodlari.", correct: false },
      { matn: "O‘quv bilish faoliyatining samaradorligini nazorat qilishi va o‘z-o‘zini nazorat qilish.", correct: true }
    ]
  },
  {
    id: 296,
    savol: "Amaliyot nima?",
    javob: [
      { matn: "O‘qitish jarayonida tuzatish va yangiliklar kiritish.", correct: false },
      { matn: "O‘quvchilarning auditoriyada mavzu bo‘yicha o‘quv unsurlarini tushuntirish maqsadida bajargan ishlarning yig‘indisi bo‘lib, o‘qitish jarayonini ushbu bosqichida tugallangan qismini tashkil etadi.", correct: true },
      { matn: "O‘qitishda nazariy materiallarni hisobga olmaslik.", correct: false },
      { matn: "Ta’lim jarayonini yuqori darajada axborotlashtirish.", correct: false }
    ]
  },
  {
    id: 297,
    savol: "Muammoli o‘qitish texnologiyasini aniqlashtirib berish...",
    javob: [
      { matn: "Bo‘lg‘usi pedagogik kadrlarning texnologik tayyorgarligini va uni dars jarayonida qo‘llashidir.", correct: false },
      { matn: "Oliy o‘quv yurt o‘qituvchilarning dasturlashtirilgan o‘qitish texnologiyasidan foydalanishidir.", correct: false },
      { matn: "Hozirgi, oliy o‘quv yurtlaridagi samarali o‘qitish texnologiyasi-bu muammoli o‘qitishdir.", correct: true },
      { matn: "Ta’lim jarayonini hamma usullaridan dars jarayonida foydalanilishidir.", correct: false }
    ]
  },
  {
    id: 298,
    savol: "Ilg‘or pedagogik texnologiyalarni o‘zlashtirish va qo‘llashda quyidagi qaysi tavsiyalar o‘rinlidir?",
    javob: [
      { matn: "Oliy o‘quv yurtining ilmiy kengashlarida pedagogik taxnologiyalarni qo‘llashga qaratilgan tajribalar rejasini muxokama qilib, uni amalga oshirish hamdaprofessor-o‘qituvuchilarni o‘quv adabiyotlari va uslubiy qo‘llanmalar bilan ta’minlash.", correct: true },
      { matn: "Faqat elektron darsliklar bilan ta’minlashni yo‘lga qo‘yish kerak.", correct: false },
      { matn: "Professor-o‘qituvchilar uchun ko‘proq video va slaydlardan foydalanishni tavsiya etish.", correct: false },
      { matn: "Professor-o‘qituvchilar uchun yangi pedagogik texnologiyalarni o‘rganishning zamonaviy yo‘nalishlarini tavsiya etish.", correct: false }
    ]
  },
  {
    id: 299,
    savol: "Ta’limni insonparvarlashtirish va insoniylashtirish tamoyili nimalarni anglatadi?",
    javob: [
      { matn: "O‘quvchi yoshlarda mustaqil tafakkur etish vositalari va qobiliyatlarini rivojlantirishni anglatadi.", correct: false },
      { matn: "Insonparvarlashtirish-bu inson va ijetimoiy jamiyat bilan bog‘liq barcha munosabatlar jarayonida inson omili, uning qadr-qiymati, shani, or-nomusi, xuquq va burchlarini hurmatlashga asoslanuvchi faoliyat jarayoni ekanligini anglatadi.", correct: true },
      { matn: "Yoshlarning dunyoqarashini shakllantirishni anglatadi.", correct: false },
      { matn: "Ta’lim-tarbiya jarayonida ijtimoiy-siyosiy ma’naviy mafkuraviy jihatdan yetuk shaxsni kamol toptirishni anglatadi.", correct: false }
    ]
  },
  {
    id: 300,
    savol: "XVII asrning 70-yillarida yaratilgan dastlabki o‘quv qo‘llanmasi qanday nomlangan?",
    javob: [
      { matn: "Uslubiy to‘plam.", correct: false },
      { matn: "Metodika.", correct: false },
      { matn: "“Sinopsis”-ya’ni tarixiy voqealarni sharxlash.", correct: true },
      { matn: "Qisqacha yilnoma.", correct: false }
    ]
  },
  {
    id: 301,
    savol: "Turkistondagi dastlabki rus-tuzem maktablarida tarix o‘qitishda o‘qush kitobi sifatida asosan qanday kitoblardan foydalanilgan?",
    javob: [
      { matn: "Blinovning “Pchelka” (Asalarich kitobidan va Aristovning “Rossiya tarixidan hikoyalar” kitobidan.", correct: true },
      { matn: "M.V.Lomonosovning “Rossiyaning qisqacha yilnomasi” kitobidan.", correct: false },
      { matn: "S.M.Solovyovning “Rossiya tarixi” kitobidan.", correct: false },
      { matn: "Aristovning “Rossiya tarixidan hikoyalar” kitobidan.", correct: false }
    ]
  },
  {
    id: 302,
    savol: "“Tarixning haqiqiy yaratuvchisi ilohiy kuchdir” degan fikrni kim aytgan?",
    javob: [
      { matn: "V.O.Klyuchevskiy.", correct: false },
      { matn: "A.Toynbi.", correct: true },
      { matn: "M.A.Barg.", correct: false },
      { matn: "N.M.Karamzin.", correct: false }
    ]
  },
  {
    id: 303,
    savol: "Tarix darslarida rivojlantirilib boriladigan ta’limning nazariy g‘oyasi birinchi marta o‘z ifodasini topgan darslik?",
    javob: [
      { matn: "A.V.Mishulinning “Qadimgi dunyo tarixi” darsligi.", correct: false },
      { matn: "M.V.Lomonosovningsh “Rossiyaning qisqacha yilnomasi” darsligi.", correct: false },
      { matn: "Y.A. Kosminskiyning “O‘rta asrlar tarixi” darsligi.", correct: false },
      { matn: "F.P.Korovkin va G.M.Donskoylarning “O‘rta asrlar tarixi” darsligi.", correct: true }
    ]
  },
  {
    id: 304,
    savol: "Nazariya nima?",
    javob: [
      { matn: "Nazariya-bu ilmiy bilimlarning tuzilishi va rivojlanishi.", correct: false },
      { matn: "Nazariya-bu ilmiy bilimlar yig‘indisi bo‘lib, u yoki bu fanning shakllanish qonuniyatlari va boshqa fanlar bilan mavjud bo‘lgan aloqadorlikni bilish jarayonidir", correct: true },
      { matn: "Nazariya-bu tarix ta’limining o‘ziga xos xususiyatlari.", correct: false },
      { matn: "Nazariya-bu fan sohasida amalga oshirib boriladigan yo‘llar.", correct: false }
    ]
  },
  {
    id: 305,
    savol: "Metodika nima?",
    javob: [
      { matn: "Metodika-bu tarix o‘qitish jarayoni qonuniyatlarini takomillashtiradigan fandir.", correct: false },
      { matn: "Metodika-bu tarixiy materiallarni umumlashtirib, izohlaydigan fandir.", correct: false },
      { matn: "Metodika-bu pedagogik fan bo‘lib, ma’lum o‘quv predmetini o‘qitish qonuniyatlarini tadqiq etadigan maxsus fandir.", correct: true },
      { matn: "Metodika-bu tarixiy faktlarni amaliyatga qo‘llab o‘rganiladigan fandir.", correct: false }
    ]
  },
  {
    id: 306,
    savol: "20-yillarda Turkistonda tarix o‘qitish uslubiyatini pedagogik fan sifatida shakllanishiga katta hissa qo‘shgan pedagog olim?",
    javob: [
      { matn: "N.P.Arxangelskiy.", correct: true },
      { matn: "A.M.Pankratova.", correct: false },
      { matn: "Ye.A.Kosminskiy.", correct: false },
      { matn: "V.N.Bernadskiy.", correct: false }
    ]
  },
  {
    id: 307,
    savol: "Mashhur o‘qituvchi V.F.Shatalov tomonidan targ‘ib etilgan metod qanday nomlangan?",
    javob: [
      { matn: "“Ekspress-qo‘llanma” metodi.", correct: false },
      { matn: "Tarix o‘qitish innovatsiya metodi.", correct: false },
      { matn: "“Tayanch signallar” metodi.", correct: true },
      { matn: "Predmetlararo bog‘lanish metodi.", correct: false }
    ]
  },
  {
    id: 308,
    savol: "“Dars-bu o‘quvchilarning hayoti”-ushbu so‘zlar qaysi olimga tegishli?",
    javob: [
      { matn: "A.Toynbiga.", correct: false },
      { matn: "V.M.Koratovga.", correct: true },
      { matn: "K.Skryabinga.", correct: false },
      { matn: "M.M.Stasyulevichga.", correct: false }
    ]
  },
  {
    id: 309,
    savol: "Sotsial ekologiya qanday qoidalarga asoslanadi?",
    javob: [
      { matn: "“Tabiat-Jamiyat-Inson”-degan bir butunlik qoidasiga.", correct: true },
      { matn: "“Biz tabiatni o‘zimizga bo‘ysundiramiz”-degan qoidaga.", correct: false },
      { matn: "“Tabiat in’omidan to‘la foydalashin kerak”-degan qoidaga.", correct: false },
      { matn: "“Halq” “Vatan” “Tabiat”-degan qoidaga asoslangan.", correct: false }
    ]
  },
  {
    id: 310,
    savol: "Xalqimizning sof ekologik mazmunga ega tarixiy udumlari qaysi javobga to‘g‘ri ko‘rsatilgan?",
    javob: [
      { matn: "Hashar.", correct: false },
      { matn: "Taganak.", correct: false },
      { matn: "Navro‘z.", correct: false },
      { matn: "Navro‘z, Taganak.", correct: true }
    ]
  },
  {
    id: 311,
    savol: "Milliy qadriyat nima?",
    javob: [
      { matn: "Milliy qadriyat-Vatanni anglashdir.", correct: false },
      { matn: "Milliy qadriyat-vatanparvarlikning asosidir.", correct: false },
      { matn: "Milliy qadriyat-ma’naviyat, madaniyat, umumbashariy qadriyat, ma’naviyatva madaniyatning sarchashmasidir.", correct: true },
      { matn: "Milliy qadriyat-shu vatanda tug‘ilib o‘tgan farzandlar ko‘rsatgan jasorat.", correct: false }
    ]
  },
  {
    id: 312,
    savol: "Tarix o‘qituvchisi har bir dars mavzusini aniqlashda nimalarga e’tibor berishi lozim?",
    javob: [
      { matn: "Mavzu materialida tarixiy faktlarga ko‘proq bo‘lishini e’tiborga olishi lozim.", correct: false },
      { matn: "O‘qituvchi o‘quv dasturi va darslik mazmuniga qarab mavzuni aniqlaydi, hamdatarixiylik va izchillikka doimo ijodiy yondashib bormog‘i lozim .", correct: true },
      { matn: "O‘qituvchi alohida olingan har bir dars mavzusiga ham e’tibor qaratishi lozim.", correct: false },
      { matn: "O‘qituvchi mavzuni aniqlashda ta’limiy va tarbiyaviy jihatlarga ko‘proq e’tibor berishi kerak.", correct: false }
    ]
  },
  {
    id: 313,
    savol: "Dars namunalarini turlarga ajratish masalasida quyidagi qaysi metodist olimlarning fikrlarini to‘g‘ri deb xisoblaysiz?",
    javob: [
      { matn: "A.A.Vagin va N.V.Speranskaya tadqiqotlarini.", correct: false },
      { matn: "V.N.Bernadskiy, V.G.Karsev, M.A.Zinovev, P.S.Leybengrub, A.A.Vagin tadqiqotlarini.", correct: true },
      { matn: "Faqat V.N.Bernadskiy tadqiqotlariga ko‘proq e’tibor berish kerak.", correct: false },
      { matn: "Dars namunalari ichida I.N.Kazansevning dars namunalari ahamiyatlidir.", correct: false }
    ]
  },
  {
    id: 314,
    savol: "“Odamlarda fanga bo‘lgan chuqur hurmat-ehtiromni shakllantirmasdan turib, ularni samarali o‘qitish mumkin emas”-degan so‘zlar quyidagi qaysi olim yozgan kitobga tegishli?",
    javob: [
      { matn: "A.A.Vaginning “Metodika prepodavaniya istorii v sredney shkole” kitobida.", correct: false },
      { matn: "Toynbining “Postijenie istorii” kitobiga.", correct: false },
      { matn: "K.Skryabinning “Uchitel v moey jizni” kitobiga.", correct: true },
      { matn: "M.A.Zinovevning “Osnovnыe voprosы metodika predpodavaniya istorii” kitobiga.", correct: false }
    ]
  },
  {
    id: 315,
    savol: "DARS-nima?",
    javob: [
      { matn: "Ilmiy nazariy va uslubiy bog‘lanishlar.", correct: false },
      { matn: "Ta’lim-tarbiya sohasining barcha elementlarini o‘z ichiga olgan jarayon.", correct: true },
      { matn: "Zamonaviy darsga bo‘lgan ilmiy-metodik talablar.", correct: false },
      { matn: "Predmetlararo aloqa bog‘lanish metodlari.", correct: false }
    ]
  },
  {
    id: 316,
    savol: "Dars samaradorligini oshirishga salbiy ta’sir ko‘rsatayotgan asosiy kamchiliklardan biri- bu?",
    javob: [
      { matn: "Dars jarayonida tarixiy faktlardan foydalanishni bilmaslik.", correct: false },
      { matn: "Dars jarayonida davriy matbuot va badiy adabiyotlardan o‘z o‘rnida foydalana bilishlik.", correct: false },
      { matn: "Mavzu nisbatan integratsion yondashuvning sustligi.", correct: false },
      { matn: "Dars jarayonida o‘quvchilar faolliklarini oshirish uchun aynan mavzu bo‘yicha muammoli ta’limni tashkil eta bilmaslik.", correct: true }
    ]
  },
  {
    id: 317,
    savol: "Muammoli talim nima?",
    javob: [
      { matn: "Amaliyotga ajratilgan vaqtdan unumli foydalanish.", correct: false },
      { matn: "Talim-tarbiyaning ilg‘or pedagogik amaliyoti va nazariyasining ananaviy ta’limotning yahlitligi natijasida qo‘lga kiritilgan yutuq.", correct: true },
      { matn: "O‘quvchilarning mustaqil tahliliy tafakkur qobiliyatlarini rivojlantirib bormaslik.", correct: false },
      { matn: "O‘qish uchun ajratilgan vaqtning har bir soniyasidan samarali foydanishiga harakat qilish.", correct: false }
    ]
  },
  {
    id: 318,
    savol: "Tarixiy faktlarining o‘ziga hos hususiyatlari nimada deb bilasiz?",
    javob: [
      { matn: "Tarixiy faktlar hech qachon aynan takrorlanmaydi.", correct: true },
      { matn: "Tarixiy faktlarni bilish-tarixni o‘zlashtiradi degan tushunchani ifoda etmaydi.", correct: false },
      { matn: "Tarixiy faktlar majmuasi bilimlarni birxillashtiradi.", correct: false },
      { matn: "Tarixiy faktlar-tarixiy materiallarni o‘zlashtirilishiga halaqit beradi.", correct: false }
    ]
  },
  {
    id: 319,
    savol: "Tarixni o‘rganish samaradorligini oshirilishi asosan quyidagi qaysi holatlarni o‘z ichiga oladi?",
    javob: [
      { matn: "O‘quvchilarning tarixiy bilimlarini hamda aqliy kamolotlarini oddiydan murakkabga qarab muttasil rivojlanib borish holatlarini o‘z ichiga oladi.", correct: false },
      { matn: "Tarixiy hodisalarni atroflicha ochib berish, tarixiy voqealarning keltirib chiqargan sabablar va voqealarning mohiyatini o‘rganishni o‘z ichiga oladi.", correct: false },
      { matn: "O‘quvchilarni bilish faoliyatlarini tarixiy bilash manbalari bilan taminlash, o‘rganiladigan tarixiy materialga nisbatan ruhiy holatlarni yo‘naltira bilish, o‘quvchilar bilimlarini mustahkamlash uchun ularni darsda va uy vazifalarni bajarishdagi faoliyatlariga rahbarlik qilish va xokazolarni o‘z ichiga oladi.", correct: true },
      { matn: "Ilmiy uslubiy va didaktik jihatdan to‘g‘ri tashkil etilgan ta’lim jarayonida o‘quvchilarning tarixiy bilimlarini o‘rganishga bo‘lgan ehtiyojlarini o‘z ichiga oladi.", correct: false }
    ]
  },
  {
    id: 320,
    savol: "Ekologik ta’lim tarbiyaning maqsad va vazifalarini amalga oshirish talablari.",
    javob: [
      { matn: "Tabiiy muhit va uni yaxshilash bo‘yicha amaliy faoliyatni ma’naviy va emotsional jihatdan uzviy birligini idrok etish hamda ana shular bilan bir vaqtda milliy va o‘lkashunoslik harakter kasb etishini hisobga olgan holda faoliyat ko‘rsatish .", correct: true },
      { matn: "Tabiat bilan jamiyat o‘rtasidagi o‘zaro aloqadorlikni ko‘rsatish.", correct: false },
      { matn: "O‘quvchilarda tabiatni tushunish u bilan muloqatda bo‘lish, insonparvarlik hususiyatlarini ko‘rsatish.", correct: false },
      { matn: "O‘quvchilarni o‘rab olgan tabiat muhitga nisbatan javobgarlik munosabatida bo‘lish his tuyg‘ularni shakllatirish borish, ularga tabiat doimo-Ona ekanligini ko‘rsatish.", correct: false }
    ]
  },
  {
    id: 321,
    savol: "Prezident I.A.Karimovning “O‘zbekistonning o‘z istiqlol va taraqqiyot yo‘li” asarida O‘zbekiston Respublikasini rivojlantirishning ma’naviy-ahloqiy negizlarini ko‘rsatib bergan edi. Quyidagi qaysi javoblarda u o‘z aksini topgan?",
    javob: [
      { matn: "“Bugun hayot qanchalik og‘ir bo‘lmasin, ma’naviyatimiz va madaniyatimizni unutmaylik”.", correct: false },
      { matn: "Milliy qadriyat va madaniyat bevosita vatanparvarlik bilan uzviy aloqadorlikdadir.", correct: false },
      { matn: "Umuminsoniy qadriyatlarga sodiqlik., Xalqimizning ma’naviy merosini mustahkamlash va rivojlantirish., Insonning o‘z imkoniyatlarini erkin namoyon qilish vatanparvarlik.", correct: true },
      { matn: "Milliy qadriyat, ma’naviyat, madaniyat, umumbashariy qadriyat va vatanparvarlikni namoyon eta olishlik.", correct: false }
    ]
  },
  {
    id: 322,
    savol: "Tarix darslarida fuqarolik tarbiyasini tizimli tashkil etishda nimalarga etibor berish kerak.",
    javob: [
      { matn: "O‘quvchilarda fuqarolik tarbiyasini amalga oshirishdagi nazariy va uslubiy jihatlarga.", correct: false },
      { matn: "Huquqiy sohadagi ta’lim ishlarini uslubiy jihatdan taminlash, huquqiy tarbiya va ta’limninig zamonaviy turlarini tadbiq etish borasida tavsiyalar ishlab chiqishda va huquqiy ta’limning holatini umumlashtirish yuzasidan takliflar ishlab chiqishga.", correct: true },
      { matn: "Tarix darslarida o‘quvchilar orasida fuqarolik tarbiyasini tizimli ravishda amalga oshirib borishda tarix o‘qituvchisida cheksiz ilmiy uslubiy imkoniyatlar yaratishga.", correct: false },
      { matn: "Tarix darslarida fuqarolik tarbiyasini sobitqadamlik bilan amalga oshirish uchun ob’ektib imkoniyatlaridan foydalanishga.", correct: false }
    ]
  },
  {
    id: 323,
    savol: "Tarix ta’limiga integratsion yondashishning ahamiyati quyidagi qaysi javobda to‘g‘ri ifodalangan deb o‘ylaysiz.",
    javob: [
      { matn: "Integratsion yondashuv yoshlarimizda milliy mafkurani faol shakllantirishda katta nazariy va amaliy ahamiyat kasb etdi.", correct: false },
      { matn: "Bu yondashuv o‘quvchilar bilim saviyalari va tahliliy tafakkur qobiliyatlarining rivojlantirib borishda tarix o‘qitish metodikasi fanining ijtimoiy fanlar tizimidagi o‘rni va rolini to‘g‘ri belgilash va baholashda alohida ahamiyat kasb etadi.", correct: true },
      { matn: "Yoshlarimizda har qanday tarixiy voqea va hodisalarni atroflicha idrok etish qobiliyatlarini shakllantirib borishga katta imkoniyatlar yaratish.", correct: false },
      { matn: "O‘quvchilarga O‘zbekiston Respublikasining o‘zining o‘z istiqlol va taraqqiyot yo‘lini kashf etish bilan jahon davlatchiligi qurilishida o‘zining betakror o‘rnini egallagani bilan abadiylikka qolganini tushuntirish.", correct: false }
    ]
  },
  {
    id: 324,
    savol: "Tarix darslarida tarixiy faktlarni tanlashda qanday talablarga rioya etiladi?",
    javob: [
      { matn: "Tarixiy bilimlarni umulashtirib borish kerak.", correct: false },
      { matn: "Tanlangan faktlar maksimum aniq va obrazli bo‘lishi va o‘quvchilarni mustaqil tafakkur etishga yo‘naltigan bo‘lmog‘i kerak.", correct: false },
      { matn: "Faktlar ilmiy jihatdan atroflicha asoslangan bo‘lishi kerak, faktlar tarixiy jarayonni tushuntirishda ilmiy ahamiyat kasb etmog‘i kerak.", correct: true },
      { matn: "Alohida olingan va takrorlanmaydigan tarixiy faktlar va voqealarni o‘rganish alohida ahamiyat kasb etadi.", correct: false }
    ]
  },
  {
    id: 325,
    savol: "Dars tuzilishida asosan nimalarga e’tibor beriladi?",
    javob: [
      { matn: "Darsning ta’limiy maqsadi, darsning tarbiyaviy maqsadi. Darsda rivojlantirib boriladigan ta’lim degan talablarga.", correct: true },
      { matn: "Har bir darsda oldinga darslardan o‘rgangan faktlardan kelib chiqadigan nazariy xulosalarga.", correct: false },
      { matn: "Tarixiy tasavvurlarning roli va turlariga.", correct: false },
      { matn: "Ko‘rgazmali qurollar, turli xil chizmalar, mavzubop haritalar va texnik vositalarga.", correct: false }
    ]
  },
  {
    id: 326,
    savol: "O‘quvchilarga tarixiy tasavvurlarni shakllantirishda..?",
    javob: [
      { matn: "Darsning ta’limiy va tarbiyaviy maqsadi hamda tasavvurlarning o‘rni kattadir.", correct: false },
      { matn: "Tarixiy bilmilarni umumlashtirish va tizimlashtirishning roli kattadir.", correct: false },
      { matn: "Ilmiy-metodik didaktik va pedagogik jarayonlarning ta’siri juda kattadir.", correct: false },
      { matn: "Ko‘rgazmali qurollar, illustrasiyalar, sxemalar shuningdek mavzubop xaritalar roli beqiyos kattadir.", correct: true }
    ]
  },
  {
    id: 327,
    savol: "Tayanch sanalar nimani ifodalaydi?",
    javob: [
      { matn: "Tarix faninig ma’lum davrini o‘rganishda esda saqlab qolish uchun zarur bo‘lgan sanalar.", correct: true },
      { matn: "Tarix ta’limini bir butun xolat o‘zlashtirishga yordam beruvchi faktlar.", correct: false },
      { matn: "O‘quvchilar xotirasida saqlanib turuvchi tarixiy asoslar.", correct: false },
      { matn: "Tarixiy bilim zaxiralari bir muncha sayoz bo‘lgan o‘quvchilar uchun yordamchi materiallar.", correct: false }
    ]
  },
  {
    id: 328,
    savol: "Maktabdan tashqari ta’limni rivojlantirish, uning tuzilmasi va mazmun darajasini takomillashtirish vazifalarini amalga oshirish uchun.",
    javob: [
      { matn: "O‘quvchilarni darsdan tashqari faoliyatlariga ko‘proq e’tibor qaratish kerak.", correct: false },
      { matn: "Ta’lim berish va kamol toptirishga yo‘naltirilgan hizmatlar ko‘rsatuvchi muassasalar tarmog‘ini kengaytirish kerak.", correct: true },
      { matn: "Jahondagi ilg‘or tajribani inobatga oluvchi dasturlar va uslubiy materiallar ishlab chiqish ga e’tibor qaratish shart emas.", correct: false },
      { matn: "O‘quvchilarning bo‘sh vaqtini tashkil etishning, shu jumladan xalq hunarmandchiligini mavjud turlari va shakllarini tiklash va amaliyotga joriy etish kerakligini inobatga olmasa ham bo‘ladi.", correct: false }
    ]
  },
  {
    id: 329,
    savol: "Pedagogik hamkorlik jarayonining o‘ziga hos hususiyatlari.",
    javob: [
      { matn: "Ta’lim jarayonidagi muammolarni o‘rganyotgan o‘qituvchilar, ilmiy-tadqiqotchilar va amaliyotchilarning hamkorligi.", correct: false },
      { matn: "Hozirgi ijtimoiy-iqtisodiy sharoitda mehnat qila oladigan mutahassis kadrlarning yangi avlodini shakllantirish.", correct: false },
      { matn: "O‘quvchi talabalarning mutaqil fikrlash, ijod etish va izlanishga majbur etish hamda ularni bilishga bo‘lgan qiziqishlarini doimiy ravishda bo‘lishini ta’minlash shuningdek pedagogik va o‘quvchininig hamisha hamkorlikdagi faoliyatini tashkillashtirish.", correct: true },
      { matn: "Tarix ta’limida ta’lim sifatini baholash mezonlari va tartiblarini birgalikda yaratish.", correct: false }
    ]
  },
  {
    id: 330,
    savol: "Ta’lim metodi tushunchasi nimani anglatadi?",
    javob: [
      { matn: "O‘quvchini samarali faoliyat ko‘rsatishga undovchi darsning metodik ishlanmasi.", correct: false },
      { matn: "Ta’lim jarayonini yaxlit tizim asosida, bosqichma-bosqich amalga oshirish.", correct: false },
      { matn: "O‘quv jarayonining majmuaviy vazifalarini yechishga yo‘naltirilgan o‘qituvchi va o‘quvchilarning birgalikdagi faoliyati.", correct: true },
      { matn: "ta’lim jarayonini yuqori darajada boshqarish.", correct: false }
    ]
  },
  {
    id: 331,
    savol: "Ma’ruza nima?",
    javob: [
      { matn: "Ma’ruza faqat fan o‘quv predmeti asoslari borasida ma’lumotlar bera oladi.", correct: false },
      { matn: "Ma’ruza o‘quv materialini o‘quvchilar tomonidan yordam vosita sifatida qabul qilinishi.", correct: false },
      { matn: "Ma’ruza o‘quvchilarga nazariy bilimlarni og‘zaki yetkazib berish shakllaridan biri bo‘lib, ko‘p mehnat talab qiladi.", correct: true },
      { matn: "Ma’ruza asosan ijtimoiy fanlarni o‘qitish jarayonida qo‘llanuvchi vosita.", correct: false }
    ]
  },
  {
    id: 332,
    savol: "20-yillarda Turkistonda tarix o‘qitish uslubiyatini pedagogik fan sifatida shakllanishiga katta hissa qo‘shgan pedagog olim?",
    javob: [
      { matn: "V.N.Bernadskiy.", correct: false },
      { matn: "N.P.Arxangelskiy.", correct: true },
      { matn: "A.M.Pankratova.", correct: false },
      { matn: "Ye.A.Kosminskiy.", correct: false }
    ]
  },
  {
    id: 333,
    savol: "Mashhur o‘qituvchi V.F.Shatalov tomonidan targ‘ib etilgan metod qanday nomlangan?",
    javob: [
      { matn: "Tarix o‘qitish innovatsiya metodi.", correct: false },
      { matn: "Predmetlararo bog‘lanish metodi.", correct: false },
      { matn: "“Ekspress-qo‘llanma” metodi.", correct: false },
      { matn: "“Tayanch signallar” metodi.", correct: true }
    ]
  },
  {
    id: 334,
    savol: "93.“Dars-bu o‘quvchilarning hayoti”-ushbu so‘zlar qaysi olimga tegishli?",
    javob: [
      { matn: "V.M.Koratovga.", correct: true },
      { matn: "K.Skryabinga.", correct: false },
      { matn: "A.Toynbiga.", correct: false },
      { matn: "M.M.Stasyulevichga.", correct: false }
    ]
  },
  {
    id: 335,
    savol: "Sotsial ekologiya qanday qoidalarga asoslanadi?",
    javob: [
      { matn: "“Biz tabiatni o‘zimizga bo‘ysundiramiz”-degan qoidaga.", correct: false },
      { matn: "“Tabiat-Jamiyat-Inson”-degan bir butunlik qoidasiga.", correct: true },
      { matn: "“Tabiat in’omidan to‘la foydalashin kerak”-degan qoidaga.", correct: false },
      { matn: "“Halq” “Vatan” “Tabiat”-degan qoidaga asoslangan.", correct: false }
    ]
  },
  {
    id: 336,
    savol: "Xalqimizning sof ekologik mazmunga ega tarixiy udumlari qaysi javobga to‘g‘ri ko‘rsatilgan?",
    javob: [
      { matn: "Hashar.", correct: false },
      { matn: "Taganak.", correct: false },
      { matn: "Navro‘z, Taganak.", correct: true },
      { matn: "Navro‘z.", correct: false }
    ]
  },
  {
    id: 337,
    savol: "Milliy qadriyat nima?",
    javob: [
      { matn: "Milliy qadriyat-ma’naviyat, madaniyat, umumbashariy qadriyat, ma’naviyatva madaniyatning sarchashmasidir.", correct: true },
      { matn: "Milliy qadriyat-vatanparvarlikning asosidir.", correct: false },
      { matn: "Milliy qadriyat-shu vatanda tug‘ilib o‘tgan farzandlar ko‘rsatgan jasorat.", correct: false },
      { matn: "Milliy qadriyat-Vatanni anglashdir.", correct: false }
    ]
  },
  {
    id: 338,
    savol: "Tarix o‘qituvchisi har bir dars mavzusini aniqlashda nimalarga e’tibor berishi lozim?",
    javob: [
      { matn: "Mavzu materialida tarixiy faktlarga ko‘proq bo‘lishini e’tiborga olishi lozim.", correct: false },
      { matn: "O‘qituvchi alohida olingan har bir dars mavzusiga ham e’tibor qaratishi lozim.", correct: false },
      { matn: "O‘qituvchi mavzuni aniqlashda ta’limiy va tarbiyaviy jihatlarga ko‘proq e’tibor berishi kerak.", correct: false },
      { matn: "O‘qituvchi o‘quv dasturi va darslik mazmuniga qarab mavzuni aniqlaydi, hamdatarixiylik va izchillikka doimo ijodiy yondashib bormog‘i lozim .", correct: true }
    ]
  },
  {
    id: 339,
    savol: "Dars namunalarini turlarga ajratish masalasida quyidagi qaysi metodist olimlarning fikrlarini to‘g‘ri deb xisoblaysiz?",
    javob: [
      { matn: "V.N.Bernadskiy, V.G.Karsev, M.A.Zinovev, P.S.Leybengrub, A.A.Vagin tadqiqotlarini.", correct: true },
      { matn: "A.A.Vagin va N.V.Speranskaya tadqiqotlarini.", correct: false },
      { matn: "Faqat V.N.Bernadskiy tadqiqotlariga ko‘proq e’tibor berish kerak.", correct: false },
      { matn: "Dars namunalari ichida I.N.Kazansevning dars namunalari ahamiyatlidir.", correct: false }
    ]
  },
  {
    id: 340,
    savol: "“Odamlarda fanga bo‘lgan chuqur hurmat-ehtiromni shakllantirmasdan turib, ularni samarali o‘qitish mumkin emas”-degan so‘zlar quyidagi qaysi olim yozgan kitobga tegishli?",
    javob: [
      { matn: "A.A.Vaginning “Metodika prepodavaniya istorii v sredney shkole” kitobida.", correct: false },
      { matn: "K.Skryabinning “Uchitel v moey jizni” kitobiga.", correct: true },
      { matn: "Toynbining “Postijenie istorii” kitobiga.", correct: false },
      { matn: "M.A.Zinovevning “Osnovnыe voprosы metodika predpodavaniya istorii” kitobiga.", correct: false }
    ]
  },
  {
    id: 341,
    savol: "DARS-nima?",
    javob: [
      { matn: "Ilmiy nazariy va uslubiy bog‘lanishlar.", correct: false },
      { matn: "Zamonaviy darsga bo‘lgan ilmiy-metodik talablar.", correct: false },
      { matn: "ta’lim-tarbiya sohasining barcha elementlarini o‘z ichiga olgan jarayon.", correct: true },
      { matn: "Predmetlararo aloqa bog‘lanish metodlari.", correct: false }
    ]
  },
  {
    id: 342,
    savol: "Mavzubop xaritalar qanday tarixiy jarayonlarga bag‘ishlanadi.",
    javob: [
      { matn: "Ma’lum tarixiy voqealarga yoki tarixiy jarayonning ayrim tomonlariga bag‘ishlanadi.", correct: true },
      { matn: "Xarita tarix darsining ma’lum bir bosqichiga bag‘ishlanadi.", correct: false },
      { matn: "Ularda bir mamlakat yoki bir gurux mamlakatlardagi tarixiy voqealar aks ettiriladi.", correct: false },
      { matn: "Xaritalarda o‘rganiladigan voqealar rivojlanishining izchilligi aks ettiriladi.", correct: false }
    ]
  },
  {
    id: 343,
    savol: "Tarix o‘qituvchilari egallashlari zarur bo‘lgan bilim va metodik mahorat xususida tarixchi metodist olim A.I.Strajyov nima degan edi?",
    javob: [
      { matn: "Faqat tarix o‘qitish metodikasini chuqur tahlil eta oladigan mutaxassis bo‘lishi kerak degan edi.", correct: false },
      { matn: "Tarixni ilmiy-metodologik jihatdan batafsil o‘zlashtirib olish, aniq tarixiy bilimlar bilan qurollanish hamda umumma’naviy, umumbashariy dunyoqarashga ega bo‘lmoq kerak degan edi.", correct: true },
      { matn: "Tarix o‘qituvchisi tarixiy bilimlarni o‘quvchilar ongiga singdira oladigan ustoz bo‘lishi kerak degan edi.", correct: false },
      { matn: "Tarix o‘qituvchisi pedagogik va psixologik bilimlarni to‘liq o‘zlashtirgan bo‘lishi kerak degan edi.", correct: false }
    ]
  },
  {
    id: 344,
    savol: "“O‘quvchilar tarixni oz bo‘lsa-da o‘rgansalar-u, lekin har tomonlama asoslangan bo‘lsin”- degan so‘zlar kimga tegishli edi?",
    javob: [
      { matn: "Turkistondagi dastlabki rus-tuzem maktablari asoschisi V.P.Nalivkin.", correct: false },
      { matn: "Rossiya xalq maorifi vaziri, graf S.S.Uvarov.", correct: false },
      { matn: "Turkiston gimnaziya maktabining direktori I.P.Ostroumov.", correct: true },
      { matn: "Rossiya xalq ta’limi vaziri M.I.Kratkov.", correct: false }
    ]
  },
  {
    id: 345,
    savol: "Tarix fanini o‘qitish metodikasi va mazmunini umuman qayta ko‘rib chiqib, ta’lim-tarbiya tizimiga joriy etish g‘oyasi bilan chiqqan olimlar?",
    javob: [
      { matn: "M.V.Lomonosov, N.A.Rojkov, M.M.Kovalevskiylar.", correct: false },
      { matn: "M.N.Pokrovskiy, N.A.Rojkov, M.M.Kovalevskiy, R.Yu.Vipperlar .", correct: true },
      { matn: "S.M.Solovyov, R.Yu.Vipper, M.N.Kovalenkolar.", correct: false },
      { matn: "M.M.Stasyulevich, M.N.Pokrovskiy, G.M.Donskoylar.", correct: false }
    ]
  },
  {
    id: 346,
    savol: "Tarixchi-metodist olimlar F.P.Korovkin va G.M.Donskoylar “O‘rta asrlar tarixi” darsliklarida qanday g‘oyani ifodalab berdilar?",
    javob: [
      { matn: "“Darsning ta’limiy maqsadi” g‘oyasini.", correct: false },
      { matn: "Tarix darslarida rivojlantirilib boriladigan ta’limning nazariy g‘oyasini.", correct: true },
      { matn: "Tarix ta’limining hayot bilan aloqasini bog‘lash g‘oyasini.", correct: false },
      { matn: "Tarixiy va zamonaviy hujjatlar bilan ishlash g‘oyasini.", correct: false }
    ]
  },
  {
    id: 347,
    savol: "“Metodologiya” tushunchasi deb.......",
    javob: [
      { matn: "Fan sohasida amalga oshirilib boriladigan ma’lun yo‘llar, operatsiyalar tizimi va shu tizim to‘g‘risidagi ta’limot, metod nazariyasiga aytiladi. Tarix fanning nazariy-metodologik asoslari va qonuniyatlariga aytiladi.", correct: true },
      { matn: "Tarixiy bilimlarning tuzilishi prinsiplariga aytiladi.", correct: false },
      { matn: "Har bir fanga xos metodlar majmuiga aytiladi.", correct: false }
    ]
  },
  {
    id: 348,
    savol: "Tarix fanini o‘qitish metodologiyasi deganda?......",
    javob: [
      { matn: "Tarixning fan sifatida nazariy-metodologik asoslari o‘zida mazkur fanning qonuniyatlari va prinsiplarini o‘z ichiga olishiga aytiladi.", correct: false },
      { matn: "Tarix fani doirasida qo‘llaniladigan ilmiy-uslubiy jihatlarga aytiladi.", correct: false },
      { matn: "Tarix fani borasidagi ilmiy bilimlarning tuzilishi va rivojlanishini, ularning natijalarini asoslash yo‘llarini amaliyotda mazkur fanga xos bo‘lgan ilmiy bilimlar mexanizmini samarali tatbiq etilishiga aytiladi.", correct: true },
      { matn: "Tarixiy voqealik va tarixiy manbalar yig‘indisiga aytiladi.", correct: false }
    ]
  },
  {
    id: 349,
    savol: "“Amir Temur davrini qaytadan o‘rganishimiz kerak. Nega deganda, Amir Temurtuzluklarini o‘qigach, bugungi zamonning katta muammolariga javob bergandek bo‘laman”-Ushbu so‘zlar Prezident I.A.Karimovning qaysi kitoblaridan olingan.",
    javob: [
      { matn: "“Vatan sajdagoh kabi muqaddasdir” kitobidan.", correct: false },
      { matn: "“O‘zbekiston buyuk kelajak sari” kitobidan.", correct: false },
      { matn: "“O‘zbekiston:istiqlol, iqtisod, siyosat, mafkura” kitobidan.", correct: true },
      { matn: "“Yuksak ma’naviyat-yengilmas kuch” kitobidan.", correct: false }
    ]
  },
  {
    id: 350,
    savol: "Tarix o‘qitish jarayonida Prezident Islom Karimovning milliy mafkurani shakllantirishga doir nutqlari va asarlarini o‘rganish va ulardan ta’lim-tarbiya jarayonida foydalanish vazifalari:",
    javob: [
      { matn: "Ijtimoiy, iqtisodiy, siyosiy, ma’naviy-madaniy sohalarda amalga oshirilgan ulkan o‘zgarishlarni tarix o‘qitish metodikasi fanira orqali o‘rganish.", correct: false },
      { matn: "Milliy g‘oyani singdirish jarayonida tarixiy boy ma’naviy merosimizga doir bilimlar berishga e’tibor qaratish hamda xalq pedagogikasi va buyuk allomalarimizning falsafiy qarashlari va mulohazalarini o‘rganish.", correct: true },
      { matn: "Tarix fanining o‘qitish nazariyasini takomillashtirish.", correct: false },
      { matn: "O‘qitish jarayonida berilayotgan bilimlar va keltirayotgan asoslarning aniqligiga rioya qilish.", correct: false }
    ]
  },
  {
    id: 351,
    savol: "Darsning mazmuni nimalarga bog‘liq?",
    javob: [
      { matn: "Darsning mazmuni tarixni o‘rganish, ya’ni o‘quvchilarga o‘quv dasturida mo‘ljallangan me’yordagi ma’lum tarixiy bilimlar majmuasining yetkazish.", correct: true },
      { matn: "Darsning mazmuni tarix ta’limidan olgan bilimlarni mustahkamlash, bilimlarni tekshirish.", correct: false },
      { matn: "O‘rganilayotgan tarixiy materialni tahlil etish va umumlashtirish.", correct: false },
      { matn: "O‘quvchilarni o‘rganilayotgan tarixiy material ustida samarali ishlash qobiliyatlari va malakalarini shakllantirish.", correct: false }
    ]
  },
  {
    id: 352,
    savol: "Darsning aniq rejasini tuzishga yordam beruvchi vosita nima?",
    javob: [
      { matn: "Mavzuning ma’ruza matni bilan mosligi.", correct: false },
      { matn: "Dars rejasi necha punktdan iborat ekanligini o‘rganilishi.", correct: false },
      { matn: "Dars davomida o‘rganiladigan mavzuning materialini bir necha masalalar (savollar)ga bo‘lish.", correct: true },
      { matn: "Tarixiy materialni ilmiy-uslubiy jihatdan chuqur o‘rganilishi.", correct: false }
    ]
  },
  {
    id: 353,
    savol: "Darsning asosiy g‘oyaviy mazmuni nima?",
    javob: [
      { matn: "Darsni to‘la muvoffaqiyali chiqishini ta’minlash.", correct: false },
      { matn: "Faqatgina dars mavzusini aniq belgilash va uni bayon qilish.", correct: false },
      { matn: "Uning ta’limiy va tarbiyaviy vazifalari dars jarayonida o‘rganilayotgan tarixiy voqevlikning mohiyati, qonuniyatlari sababi natijalari va ahamiyatining to‘g‘ri bayon qilinishidir.", correct: true },
      { matn: "Har bir dars nafaqat mazmuni bilan balki uning ustida ishlash xarakteri jihatdan ham bir butun tugallangan mavzu bo‘lmog‘i lozim.", correct: false }
    ]
  },
  {
    id: 354,
    savol: "Tarixchi metodist olim S.V.Ivanov darslarni turlarga ajratish va dars o‘tishda eng ko‘p ishlatiladigan metodik vositalarni ko‘rsatib berdi, ular qaysilar?",
    javob: [
      { matn: "Malaka va ko‘nikmalar hosil qilish darsi.", correct: false },
      { matn: "Kirish darsi, xotima darsi, tahlil qilish darsi.", correct: false },
      { matn: "Ma’ruza-dars, kino-dars, o‘quvchilar mustaqil ish olib boradigan dars turlari.", correct: true },
      { matn: "Yangi mavzuni o‘rganish darsi.", correct: false }
    ]
  },
  {
    id: 355,
    savol: "Tarix o‘qitish metodikasini ilmiy-pedagogik fan darajasiga ko‘tarilishida qaysi tarixchi metodist olimlarning xizmatlari katta?",
    javob: [
      { matn: "V.N.Bernadskiy, S.V.Ivanov, V.G.Karsev, M.A.Zinovev, A.A.Vagin, P.S.Leybengrub va boshqalar.", correct: true },
      { matn: "Asosan P.V.Gora, A.A.Vagin, V.G.Karsev va boshqalar.", correct: false },
      { matn: "S.V.Ivanov, V.N.Bernadskiy, M.A.Zinovev.", correct: false },
      { matn: "P.S.Leybengrub va N.G.Dayrilar.", correct: false }
    ]
  },
  {
    id: 356,
    savol: "Turkiston xalq maorifi Komissarligining 1918 yil 12 sentabrda chiqargan farmonida boshlang‘ich maktablarda tarix fanini o‘qitishda nimalar tavsiya etilgan edi?",
    javob: [
      { matn: "Rossiya tarixiga ko‘proq e’tibor berish tavsiya etilgan edi.", correct: false },
      { matn: "Umumiy tarixni, Rossiya va Turkiston xalqlari tarixini hamda Yevropa xalqlari tarixini.", correct: true },
      { matn: "Asosan Yevropaning qadimgi, o‘rta asrlar va yangi tarixini shuningdek rus tarixini o‘rganish tavsiya etilgan edi.", correct: false },
      { matn: "Turkiston xalqlari tarixini qisman o‘rganish tavsiya etilgan edi.", correct: false }
    ]
  },
  {
    id: 357,
    savol: "Tarix fanini o‘qitish deganda?.....",
    javob: [
      { matn: "Ilmiy-uslubiy va didaktik jahatdan to‘g‘ri tashkil etilgan dars tushuniladi.", correct: false },
      { matn: "Tarix o‘qitish jarayonida o‘quvchilarni fikrlashi, tarixiy voqealarni tahlil etishi, tarixiy material asosida xulosalar chiqara olish, jadvallar tuzishi qisqacha ma’ruzalar tayyorlashi va boshqa holatlar tushuniladi.", correct: true },
      { matn: "Faqatgini tarix o‘quvchisini voqealar to‘g‘risidagi hikoyasini tinglash.", correct: false },
      { matn: "Tarixiy voqealarni zudlik bilan o‘quvchilarga yetkazish.", correct: false }
    ]
  },
  {
    id: 358,
    savol: "Tarix o‘qituvchisi o‘zining pedagogik faoliyatida ko‘proq nimalarni hisobga olmog‘i lozim?",
    javob: [
      { matn: "Ilmiy bilimlarni tez suratlarda o‘sib borayotganligini hisobga olmog‘i kerak.", correct: true },
      { matn: "Bolalar-o‘quvchi yoshlar rivojlanishining tez suratlar bilan o‘sib borishini hisobga olishi kerak.", correct: false },
      { matn: "Yoshlarning ham aqliy ham jismoniy jihatdan rivojlanishini hisobga olishi kerak.", correct: false },
      { matn: "Yoshlarining ommaviy ahborot vositalari orqali eng yangiliklarni tez ilg‘ab olishlarini hisobga olishlari kerak.", correct: false }
    ]
  },
  {
    id: 359,
    savol: "Dars mavzusini o‘rganishning motivatsiyasi(asosi) nimalardan iborat?",
    javob: [
      { matn: "Birinchi galda o‘qituvchilarning o‘zi uchun har tomonlama aniq va ravshan bo‘lishi kerak.", correct: false },
      { matn: "Darsda o‘rganiladigan mavzuning ta’limiy-tiarbiyaviy jihatdan ma’lum qonun-qoidalarga asoslangan bo‘lishi kerak.", correct: false },
      { matn: "Darsning motivatsiyasi har bir talaba ongiga eng samarali metodlar vositasida singdirilishi va imkon qadar ularning amaliy faoliyatlarida qo‘llanishga o‘sib o‘tishiga yo‘llanma bo‘lishdan iboratdir.", correct: true },
      { matn: "Ilmiy-metodik talablarga javob berishi kerak.", correct: false }
    ]
  },
  {
    id: 360,
    savol: "Dars sifati nimalarga bog‘liq?",
    javob: [
      { matn: "Dars jarayonida ta’limiy va tarbiyaviy jihatlarga qay darajada e’tibor berishimizga bog‘liq.", correct: false },
      { matn: "Darslarning sifati bizning pedagogik mahoratlarimiz mahsulotlari sifatiga bog‘liqdir.", correct: true },
      { matn: "Dars tuzilishlarini xilma-xilligini takomillashtirib borishga bog‘liq.", correct: false },
      { matn: "Darslarda pedagogik texnologiyalardan foydalanishlarimizga bog‘liq.", correct: false }
    ]
  },
  {
    id: 361,
    savol: "Bugungi zamonaviy darsning maqsadini tushuntirib bering?",
    javob: [
      { matn: "Dars har bir o‘qituvchining darslik materiallarini mufassal tahlil etib borishi, ommaviy ahborot vositalari, Internet axbortlarini o‘rganib, dars jarayonida zarurlarini talabalar ongiga yetkazish.", correct: true },
      { matn: "O‘quv rejalarida ajratilgan maxsus kurslarin o‘rgatish va ana shu kurslarni o‘rganishda Prezident I.A.Karimov asarlari, intervyulari, nutqlaridan maqsadga muvofiq foydalanishimiz lozim.", correct: false },
      { matn: "“O‘zbekiston kelajagi buyuk davlat” ekanligini har bir talaba ongiga singdirib borishimiz kerak.", correct: false },
      { matn: "Yoshlarni mustaqilligimizni yanada mustahkamlashda faol ishtirok etishga davat etishimiz kerak.", correct: false }
    ]
  },
  {
    id: 362,
    savol: "O‘quv-tarbiya jarayonini yanada takomillashtirib borishning asosiy omillaridan biri bu?......",
    javob: [
      { matn: "O‘quvchining uy vazifasini bajarish uchun sarf etadigan vaqtini to‘g‘ri taqsimlanishidir.", correct: false },
      { matn: "Dars samaradorligini pedagogik jihatdan to‘g‘ri tashkil etilishidir.", correct: false },
      { matn: "Dars samaradorligini oshirish uchun kurashishdir.", correct: true },
      { matn: "O‘quvchilarning ruhiy xolati va salomatligiga jiddiy e’tibor berilishidir.", correct: false }
    ]
  },
  {
    id: 363,
    savol: "Amaliyotda ajratilgan vaqtdan samarali foydalanishning asosiy omillaridan biri, bu.....?",
    javob: [
      { matn: "Ajratilgan vaqtdan ta’lim-tarbiya jarayonida foydalanish yangi muammo sirasiga kirmaydi.", correct: false },
      { matn: "Talabalarning bilimlariga nisbatan frontal, induvidual guruhlarga bo‘lib tashkil etish.", correct: true },
      { matn: "Tarix o‘qituvchisi o‘zining pedagogik faoliyatida dars materiallarini to‘g‘ri tanlashga e’tibor berishi.", correct: false },
      { matn: "O‘qituvchining didaktik va metodik jihatdan darslarni to‘g‘ri tashkil etish.", correct: false }
    ]
  },
  {
    id: 364,
    savol: "Tarix o‘qitish samaradorligini oshirishda tarix o‘qituvchisining roli qanday?",
    javob: [
      { matn: "Asosan tarix o‘qituvchisining bilimdonligi, o‘z sohasini yetuk mutaxassisi bo‘lishi hal qiluvchi rol o‘ynaydi.", correct: true },
      { matn: "Tarix fani o‘qituvchisining pedagogik faoliyati ham asosiy rol o‘ynaydi.", correct: false },
      { matn: "O‘qituvchining o‘qitilayotgan fanga nisbatan o‘quvchilarning qiziqishlarini oshirishi ham asosiy rol o‘ynaydi.", correct: false },
      { matn: "Tarix o‘qituvchisining aniq tarixiy faktlarga asoslanib ko‘rgazmali darslarni tashkil etishi muhim rol o‘ynaydi.", correct: false }
    ]
  },
  {
    id: 365,
    savol: "Dars samaradorligini oshira bilmaslik sabablari nimalarda aks etadi?",
    javob: [
      { matn: "O‘tilgan mavzular yuzasidan muammoli emas, dialog sifatida berilgan savollarga og‘zaki javoblarni eshitish natijasida.", correct: false },
      { matn: "O‘qituvchilarning zarur ilmiy-nazariy va metodik talablarni o‘z o‘rniga qo‘llay bilmasligi natijasida.", correct: true },
      { matn: "Darsda faol ishtirok etishga qaratilgan metodlardan umuman darak bo‘lmasligi natijasida.", correct: false },
      { matn: "O‘quvchilar bilimini baholash uchun berilgan savollarni ba’zi hollarda o‘rinsiz va asossiz bo‘lishi natijasida.", correct: false }
    ]
  },
  {
    id: 366,
    savol: "Tarixiy bilimlarni shakllantirish asoslari nimalarga bog‘liq?",
    javob: [
      { matn: "Ta’limiy-tarbiyaviy va rivojlanib boruvchi ta’lim vazifalarini hal etishga bog‘liq.", correct: false },
      { matn: "Tarixiy bilimlar ko‘proq eshitib idrok etishga bog‘liq bo‘ladi.", correct: false },
      { matn: "Tarix fani tizimida jamg‘arilgan, tahlil etilgan va umumlashtirilgan ulkan materiallar yig‘indisiga bog‘liq.", correct: true },
      { matn: "Tarixiy bilimlarni ko‘proq soddalashtirilgan holda bir qolipda eshitishga bog‘liq.", correct: false }
    ]
  },
  {
    id: 367,
    savol: "Tarixiy bilimlar manbai qaerdan olinadi?",
    javob: [
      { matn: "Tarixiy bilimlar asosi turli xil tarixiy hujjatlardan olinadi.", correct: false },
      { matn: "Tarixiy voqealar to‘g‘risidagi bilimlar turli tarixiy ahborotlardan olinadi.", correct: true },
      { matn: "Tarixiy bilimlar turli xil tarixiy ko‘rgazma(rasm)larga asoslanadi.", correct: false },
      { matn: "Tarixiy bilimlar manbai turli xil tarixiy ertak va hikoyalarga asoslanadi.", correct: false }
    ]
  },
  {
    id: 368,
    savol: "Tarixiy faktlar.....",
    javob: [
      { matn: "Tarixiy voqealarning sabab va natijalari mohiyatini tushunib olishga katta yordam beradi.", correct: false },
      { matn: "Tarix o‘qitish jarayonini samarali olib borish uchun asos bo‘lib xizmat qiladi.", correct: false },
      { matn: "Yagona voqeani aks ettirib, tarixda faqat ma’lum sharoitda bir marotaba, ma’lum davrdagi shaxslarning ishtirokda, qat’iy chegaralangan makon va zamonda sodir bo‘ladi hamda o‘zlarida ma’lum tarixiy davr yoki zamon xususiyatlarini aks ettiradi.", correct: true },
      { matn: "Tarixiy faktlar hech qachon aynan takrorlanmaydi.", correct: false }
    ]
  },
  {
    id: 369,
    savol: "Tarixiy faktlarni bilish uchun....",
    javob: [
      { matn: "Ularni sinchiklab o‘rganish, bir tarixiy shaxs yoki butun bir xalqqa baho berishda masalaga taaluqli fikrlarni taqqoslashtirib ko‘rish lozim.", correct: true },
      { matn: "Tarixiy materialni tez va chuqur o‘zlashtirib olish lozim.", correct: false },
      { matn: "Tarixiy tushunchalarga ko‘proq rang-barang va sistemalashtirilgan holda tushuntirilish kerak.", correct: false },
      { matn: "Tarixiy masala yuzasidan keltiriladigan xulosa va umumlashtiruvchi fikrlarni aniqlashtirish lozim.", correct: false }
    ]
  },
  {
    id: 370,
    savol: "O‘quvchilarning tarixiy bilimlarni o‘rganishga bo‘lgan ehtiyoji qanday vaziyatda ortib boradi?",
    javob: [
      { matn: "Ilmiy-uslubiy va didaktik jihatdan to‘g‘ri tashkil etilgan ta’lim jarayonida ortib boradi.", correct: true },
      { matn: "O‘quvchilar bilimlarning miqdori o‘zgarishlaridan sifat o‘zgarishlariga qarab o‘sib o‘tayotganligida ortib boradi.", correct: false },
      { matn: "O‘quvchilarning kundalik ijtimoiy-amaliy ishlar bilan shug‘ullanganlarida ortib boradi.", correct: false },
      { matn: "O‘qituvchi tomonidan mohirlik bilan rahbarlik qilinishini jarayonida ortib boradi.", correct: false }
    ]
  },
  {
    id: 371,
    savol: "Ekologik madaniyat nima?",
    javob: [
      { matn: "Insonning o‘rab turgan tabiatga nisbatan ma’suliyatli bo‘lishidir.", correct: false },
      { matn: "Yoshlarimizning ijtimoiy faolliklarining ifodasini, vatanparvarlik harakatlarning sarchashmasidir.", correct: true },
      { matn: "O‘quvchilarni tevarak atrofga muhitga nisbatan munosabatlarini tubdan o‘zgarishidir.", correct: false },
      { matn: "Yashil tabiatga nisbatan shafqatli bo‘lishdir.", correct: false }
    ]
  },
  {
    id: 372,
    savol: "Tabiatni tushunish va u bilan muloqotda bo‘lishning insonparvarlik xususiyatlari nimalarga da’vat etadi?",
    javob: [
      { matn: "Tabiat har doim Ona ekanligini eslatib turadi.", correct: false },
      { matn: "Tabiatni shafqatsizlarcha vayron etishga qo‘l urilgan kuchlarga qarshi kurashga da’vat etadi.", correct: false },
      { matn: "Ezgulik, ko‘ngilchanlik, rahmdillik bo‘lishga da’vat etadi.", correct: true },
      { matn: "Ekologik sharoit sog‘lomlashtirish borasidagi samarali chora-tadbirlarni amalga oshirishga da’vat etadi.", correct: false }
    ]
  },
  {
    id: 373,
    savol: "O‘quvchilarni ekologik bilimlar bilan qurollantirish uchun?",
    javob: [
      { matn: "Umumlashtiruvchi darslar, predmetlararo aloqa bog‘lash ekskursiyalar tashkil etish, konferensiyalar va uchrashuvlar o‘tkazish va boshqa ishlardan unumli foydalanish kerak.", correct: true },
      { matn: "Tabiat qonunlarini birlamchiligi va unda insonning tutgan o‘rnini alohida o‘rganish kerak.", correct: false },
      { matn: "Insonni tabiatga ta’sir etish xarakteri va uning tabiat muhitiga bog‘liqligini o‘rganish kerak.", correct: false },
      { matn: "Tabiat-tevarak muhitni saqlash umumbashariy muammo ekanligini tushuntirish.", correct: false }
    ]
  },
  {
    id: 374,
    savol: "Ma’lumki 1992 yil 9 dekabrda O‘zbekiston Respublikasida “Tabiatni muhofaza qilish to‘g‘risida” mahsus qaror qabul qilingan edi. Ana shu qonunning maqsadi nimalardan iborat edi?",
    javob: [
      { matn: "Jamiyatning ekologik iqtisodiy va ijtimoiy manfaatlarini ilmiy asoslangan holda uyg‘unlashtirishdan iborat edi.", correct: false },
      { matn: "Qonunnning maqsadi inson va tabiat o‘rtasidagi uyg‘un mavozanatda rivojlanishini ekologik tizimlari, tabiat komplekslari va ayrim ob’ektlar muhofaza qilinishini ta’minlashdan iborat edi.", correct: true },
      { matn: "Tabiatdan oqilona foydalanishni va tabiatni muhofqaza qilishni rag‘batlantirishdan iborat edi.", correct: false },
      { matn: "Fuqarolarning hayot uchun qulay tabiiy muhitga ega bo‘lish huquqini ta’minlashdan iborat edi.", correct: false }
    ]
  },
  {
    id: 375,
    savol: "Milliy qadriyat tushunchasi nimalarni ifodalaydi?",
    javob: [
      { matn: "Maktablarda o‘rganiladigan barcha fanlarda yoshlarning o‘z xalqi milliy qadriyatlari va vatanparvarlik xis-tuyg‘ularini shakllantirishga katta e’tibor beriladi.", correct: false },
      { matn: "Milliy qadriyat tushunchasi fuqarolarimiz ongida ayniqsa o‘quvchi yoshlar tushunchasida yo‘l-yo‘lakay shakllanib, kamol topib, insonni bu sohada harakatga keltiruvchi kuch darajasiga ko‘tarmaydi.", correct: false },
      { matn: "Milliy qadriyat har bir insonni tug‘ilib o‘sgan maskani Vatani, uning tabiat va tarixiga qiziqishlarini uyg‘ota bilan qamol toptirishning asosiy omili hisoblanadi.", correct: true },
      { matn: "Bugungi kunda tarix ta’limi orqali yoshlarimizni milliy qadriyatlar va vatanparvarlik ruhida tarbiyalash sohasida katta yutuqlarga erishilganligi.", correct: false }
    ]
  },
  {
    id: 376,
    savol: "Tarix darslarida fuqarolik tarbiyasini tizimli ravishda amalga oshirib borishda tarix o‘qituvchisi qanday imkoniyatlarga ega bo‘ladi?",
    javob: [
      { matn: "Huquqiy sohadagi ta’limiy ishlarni uslubiy jihatdan ta’minlash imkoniyatiga ega.", correct: false },
      { matn: "Tarix ta’limini mustaqil O‘zbekiston Respublikasining bugungi hayoti bilan bevosita bog‘lab o‘rganish imkoniyatiga ega.", correct: false },
      { matn: "Tarix o‘qituvchisi cheksiz ilmiy-uslubiy va didaktik imkoniyatlarga egadir.", correct: true },
      { matn: "Tarix darslarida huquqiy tarbiyani yaxshilash va har bir talaba ongiga singdirib borish imkoniyatiga ega.", correct: false }
    ]
  },
  {
    id: 377,
    savol: "Tarix darslarida fuqorolik tarbiyasini sobitqadamlik bilan amalga oshirish uchun o‘qituvchi.......",
    javob: [
      { matn: "Respublikada huquqiy davlat qurilishi yo‘lida olib borilayotgan siyosiy, iqtisodiy, ijtimoiy islohatlarni talabalar ongiga singdirishi zarurdir.", correct: false },
      { matn: "O‘zbekiston Respublikasi Konstitutsiyasining “Fuqarolarning burchlari” deb atalgan 2-bobidagi moddalar talablarini dars jarayonida muttasil amalga oshirib borishi zarurdir .", correct: true },
      { matn: "Tarix o‘qituvchisining o‘zi eng avvalo hukumatimiz tomonidan chiqarilayotgan normativ hujjatlarni bilishi kerak.", correct: false },
      { matn: "Yoshlarni huquqiy bilim va saviyalarini zamonaviy talablar darajasiga ko‘tarishda amaliy faoliyat ko‘rsatishi kerak.", correct: false }
    ]
  },
  {
    id: 378,
    savol: "Prezident I.A.Karimovning “Bilishimiz shart bo‘lgan tarix sahifalarini qunt bilan varaqlash hammamiz uchun ham farz, ham qarzdir”-degan so‘zlar qaysi nutq yoki maqalolarida o‘z ifodasini topgan?",
    javob: [
      { matn: "“Islohatimiz tamoyillari”.", correct: false },
      { matn: "“Ollox qalbimizda, yuragimizda”.", correct: false },
      { matn: "“Buyuk kelajagimizning huquqiy kafolati”.", correct: true },
      { matn: "“Yuksak malakali mutahassislar-taraqqiyot omili”.", correct: false }
    ]
  },
  {
    id: 379,
    savol: "Ta’lim jarayonini insonparvarlashtirish, demokratlashtirish va integratsiyalashtirish g‘oyasini izchillik bilan amalga oshira borish nimalarni taqazo etadi?",
    javob: [
      { matn: "Bu jarayon o‘z navbatida har bir o‘qitilayotgan fanning yoshlar dunyoqarashlarini shakllantirishga hos masalalarni ma’lum maqsadga yo‘naltirish, mazkur fanning o‘qitish metodikasiga tarixiylik elementlarini kiritishni va boshqalarni taqazo etadi.", correct: true },
      { matn: "Ta’lim jarayoniga insonparvarlik, demokratik va integratsion yondoshish o‘qituvchidan birinchi galda tafakkur qobiliyatini uzluksiz rivojlantirishni taqazo etadi.", correct: false },
      { matn: "Ta’lim tarbiya jarayonida ijtimoiy-siyosiy ma’naviy va mafkuraviy jahatdan yetuk shaxsni kamol toptirishni taqazo etadi.", correct: false },
      { matn: "Asosan ta’lim-tarbiya tizimini insonparvarlashtirishni taqazo etadi.", correct: false }
    ]
  },
  {
    id: 380,
    savol: "Insonning mantiqiy tafakkurida insonparvarlik demokratiya va integratsiya tushunchalarining qanchalik o‘rni olishi.....",
    javob: [
      { matn: "“Ta’lim to‘g‘risida” va “Kadrlar tayyorlash Milliy dasturi” to‘g‘risidagi qonunlarning bajarilishi ahamiyatini belgilashda muhim rol uynaydi.", correct: false },
      { matn: "Taraqqiyot yo‘lidan sobitqadamlik bilan rivojlanish asoslarini belgilaydi.", correct: false },
      { matn: "Uning kelajakdagi faoliyatini, Vatan taraqqiyoti yo‘lida o‘z orzu umidlarini amalga oshirishdagi faoliyatini belgilashda muhim rol uynaydi.", correct: true },
      { matn: "Tarixiy va madaniy meroslardan bahramand bo‘lishda asosiy rol o‘ynaydi.", correct: false }
    ]
  },
  {
    id: 381,
    savol: "Tarix ta’limda integratsion yondashish metodikasini amalga oshirish jarayonlari Prezident I.A.Karimovning quyidagi qaysi kitoblarda o‘z ifodasini topgan?",
    javob: [
      { matn: "“Bizdan Ozod va obod Vatan qolsin” asarida.", correct: false },
      { matn: "“O‘zbekiston buyuk kelajak sari” asarida.", correct: false },
      { matn: "“Vatan ravnaqi uchun har birimiz ma’sulmiz” asarida.", correct: false },
      { matn: "“O‘zbekistonning o‘z istiqlol va taraqqiyot yo‘li” asarida.", correct: true }
    ]
  },
  {
    id: 382,
    savol: "Tarixiy faktlarning xarakterli xususiyatlari?",
    javob: [
      { matn: "O‘zlariga xos hodisa va voqealarni bayon eta olmaydigan tarixiy faktlar.", correct: false },
      { matn: "Eng avvalo alohida olingan voqealarni aks ettiradigan faktlardir.", correct: true },
      { matn: "Tarix o‘qitish jarayonini samarali tashkil etadigan tarixiy faktlar.", correct: false },
      { matn: "Tarixiy voqealarni mazmun mohiyatiga qarab guruhlashtiriladigan tarixiy faktlar.", correct: false }
    ]
  },
  {
    id: 383,
    savol: "Tarixiy bilimlarni umumlashtirish va tizimlashtirib borish.....",
    javob: [
      { matn: "Chuqur ongli ravishda anglab olingan bilimlarni sistemalartirishdir.", correct: false },
      { matn: "Bu tarixiy ilmiy-asoslarni tushunishning asosiy qurolidir.", correct: true },
      { matn: "Tarixiy bilimlarni egallash yo‘lidagi asosiy harakatlar ifodasidir.", correct: false },
      { matn: "Biri-biri bilan bog‘lanmagan bilimlarni umumlashtirib borishdir.", correct: false }
    ]
  },
  {
    id: 384,
    savol: "Milliy g‘oya va mafkura fani bilan metodika fanining uyg‘unligi natijalari nimalarga bog‘liq?",
    javob: [
      { matn: "Bu fanlardagi asosiy tushuncha va tamoyillarni o‘qitish yoshlarimizning kundalik faoliyatida amaliy jihatdan ijobiy ko‘nikmalarga erishishi davr talabidir.", correct: true },
      { matn: "O‘quvchi yoshlarda mustaqil fikr yuritishni shakllantirib borish natijalari bilan bog‘liq.", correct: false },
      { matn: "Ta’limni demokratlashtirish natijalariga bog‘liq.", correct: false },
      { matn: "Umummilliy maqsadlarni amalga oshirish jarayonlari bilan bog‘liq.", correct: false }
    ]
  },
  {
    id: 385,
    savol: "Tarix ta’limida muzeylarning o‘rni qanday ahamiyatga ega?",
    javob: [
      { matn: "Muzeylarda o‘tmish va zamonaviy tarix aks ettiriladi.", correct: false },
      { matn: "Muzeylar xalqimizning ma’naviy-ahloqiy g‘urur va iftixorini ona Vatanga mehr-muhabbat tuyg‘ularini uyg‘otish va kamol toptirishda zarur vosita xisoblanadi.", correct: true },
      { matn: "Muzey darslari talabalarimizning tarix ta’limiga bo‘lgan qiziqishlarini oshiradi.", correct: false },
      { matn: "Muzeylar orqali arxeologik va etnografik eksponantlardan maqsadga muvofiq foydalaniladi.", correct: false }
    ]
  },
  {
    id: 386,
    savol: "O‘quv jarayonini demokratlashtirish nima?",
    javob: [
      { matn: "O‘quvchilarda mustaqil fikrlash erkinligini uyg‘otish.", correct: false },
      { matn: "O‘quv jarayonida pedagoglarning birinchi galda vazifasi ta’lim-tarbiya jarayonini demokratlashtirib borishdir.", correct: false },
      { matn: "O‘quv jarayonini demokratlashtirish bilan uni ijodiy rivojlantirib borish uzluksiz jarayondir.", correct: true },
      { matn: "Yana bir muhim vazifa Demokratik davlat, fuqarolik jamiyati qurish jarayonlarini yoshlarga tushuntirib borishdir.", correct: false }
    ]
  },
  {
    id: 387,
    savol: "Tarix ta’limida diniy qadriyatlarning o‘rni?",
    javob: [
      { matn: "Diniy qadriyatlarimizni tiklash Davlatimiz siyosatining ustuvor yo‘nalishlaridan biri etib belgilanishi.", correct: true },
      { matn: "Tarix ta’limi orqali allomalarimizning ilmiy ma’naviy meroslarini o‘rganish vazifalarini bajarish.", correct: false },
      { matn: "Tarixiy qadamjolarni obodonlashtirishga e’tibor berilishi.", correct: false },
      { matn: "Diniy qadriyatlarga bag‘ishlangan xalqaro ilmiy-amaliy anjumanlar va turli ma’naviy-ma’rifiy tadbirlarning o‘tkazilishi.", correct: false }
    ]
  },
  {
    id: 388,
    savol: "Interfaol usullarni tushuntirib bering?",
    javob: [
      { matn: "Bu usul pedagog va o‘quvchi-talabaning hamisha hamkorlikdagi faoliyatini tashkillashtirishdir.", correct: false },
      { matn: "Bu jamoa bo‘lib fikrlash deb yuritiladi, ya’ni pedagogik ta’sir etish usullari bo‘lib, ta’lim mazmunining tarkibiy qismi hisoblanadi.", correct: true },
      { matn: "Bu usul yoshlarni yetuk malakaga ega bo‘lishini ta’minlaydi.", correct: false },
      { matn: "Bu usul o‘quvchilarning dars davomida befarq bo‘lmaslikka undaydi.", correct: false }
    ]
  },
  {
    id: 389,
    savol: "Pedagogik texnologiya nima?",
    javob: [
      { matn: "O‘quv jarayonida pedagogik –bu yakka tartibdagi jarayoni bo‘lib, u o‘quvchi talabaning ehtiyojidan kelib chiqqan holda bir maqsadga yo‘naltirilishidir.", correct: true },
      { matn: "O‘quv jarayonining asosiy texnik vositasidir.", correct: false },
      { matn: "Tarix ta’limini dasturlashda va masofali o‘qitishdagi zaruriy jarayondir.", correct: false },
      { matn: "Tarix ta’limida yangi pedagogik va ahborot texnologiyalarni mohiyatini to‘liq ochilishidir.", correct: false }
    ]
  },
  {
    id: 390,
    savol: "Tarix ta’limida yangi pedagogik va ahborot texnologiya mohiyati va vazifalari nimalarga bog‘liq?",
    javob: [
      { matn: "Bu o‘qitish jarayonining ayrim qismlarini tashkiliy jihatdan bog‘laydigan vositadir.", correct: false },
      { matn: "O‘qitish jarayonini takomillashtirishga yoki o‘quvchilarning bilim faoliyatini rivojlantirishga bog‘liq.", correct: false },
      { matn: "Avvalo pedagogik texnologiya-bu o‘qituvchining o‘qitish vositalari yordamida o‘quvchilarga muayyan sharoitda ta’sir ko‘rsatish va aks ta’sir mahsulidir.", correct: true },
      { matn: "Ta’lim amaliyotini maqbullashtirishga yo‘naltirilgan tizimning maqsad va mohiyatini o‘zida aks ettirishga bog‘liq.", correct: false }
    ]
  },
  {
    id: 391,
    savol: "Tarix ta’limini texnologiyalashtirish....",
    javob: [
      { matn: "Tarix ta’limida texnik vositalarning mukammallashgan zamonaviy turlarini qo‘llashdir.", correct: false },
      { matn: "Bu ob’ektiv jarayon bo‘lib, ko‘p bosqichli ta’lim tizimida pedagogik tehnologiyalarning o‘rnini asoslash va zururiy tavsiyanomalar ishlab chiqishdan iboratdir.", correct: true },
      { matn: "Ta’lim-tarbiya jarayonida sinf xonalarini komp’yuterlar va boshqa texnik vositalar bilan ta’minlanishidir.", correct: false },
      { matn: "Tarix ta’limini targ‘ib etishda jahon andozalariga mos bo‘lgan texnik vositalardan foydalanishi yo‘lga qo‘yishdir.", correct: false }
    ]
  },
  {
    id: 392,
    savol: "Amir Temur darslarini o‘tkazishning ilmiy-metodik ahamiyati qanday?",
    javob: [
      { matn: "Ushbu darslar orqali yoshlar Sohibqironning davlat boshqaruvi haqida ma’lumotga ega bo‘ladilar.", correct: false },
      { matn: "Ushbu darslar Amir Temur nomalari bilan atalib kelayotgan hududlarni bilishga yordam beradi.", correct: false },
      { matn: "Ushbu darslarni o‘tkazish o‘quvchi yoshlarimizda milliy g‘urur va qadriyatlarimizni faollashtirib borishda katta vosita bo‘lib xizmat qiladi.", correct: true },
      { matn: "Ushbu darslar Amir Temurning bir necha yillik harbiy yurishlari tarixiy janglaridagi g‘alabalarni bilishga yordam beradi.", correct: false }
    ]
  },
  {
    id: 393,
    savol: "O‘zbekiston tarixi fanini o‘qitishning asosiy maqsadi nima?",
    javob: [
      { matn: "O‘quvchilarda yurtimizning millimy qadriyatlari va ma’naviy merosini o‘rganishi haqida taasurot uyg‘otish.", correct: false },
      { matn: "O‘zbekiston davlatining o‘tmish tarixini o‘rganish va Vatanga sodiq jamiyat kishisini tarbiyalashdan iboratdir.", correct: true },
      { matn: "O‘quvchi yoshlarda mamlakatimiz hududida bo‘lib o‘tgan o‘tmish tarixni yorqin gavdalantirishdan iboratdir.", correct: false },
      { matn: "Tashqi dushmanlarga qarshi kurashgan milliy qahramonlarimiz bilan tanishtirish.", correct: false }
    ]
  },
  {
    id: 394,
    savol: "Tarixni o‘qitish deganda.....",
    javob: [
      { matn: "Tarixiy material vositasida o‘quvchilarga bilim berish, ularni vatanga munosib ruhda tarbiyalash va kamol toptirish vazifalarini amalga oshirish jarayonilari tushuniladi.", correct: true },
      { matn: "Tarix fani orqali o‘quvchilarning ilmiy dunyoqarashini shakllantirish tushuniladi.", correct: false },
      { matn: "Tarix fanini o‘qitish jarayonida yoshlardagi huquqiy, ahloqiy, mafkuraviy jihatlarni shakllantirish tushuniladi.", correct: false },
      { matn: "Tarix fani orqali samarali metodlarni o‘rganib bilish faoliyatlarini yuksaltiradilar.", correct: false }
    ]
  },
  {
    id: 395,
    savol: "Tarix fanining mazmuni deganda.......",
    javob: [
      { matn: "O‘quvchilar tarix fanidan olgan bilimlarni tarixiy material sifatida o‘quv jarayoniga qo‘llay olishlari ham nazarda tutiladi.", correct: false },
      { matn: "Tarix ta’lim jarayonida o‘qitishning maqsad va vazifalari ham mazmuni bilan belgilanishi nazarda tutiladi.", correct: false },
      { matn: "Birinchi galda tarix dasturida belgilab berilgan tarixiy bilimlar ko‘lami, o‘quv materiali, uning asl mazmuni, xulosa va umumlashtirishlar, ko‘nikma va malakalar tizimi va boshqalarni egallashlari ko‘zda tutiladi.", correct: true },
      { matn: "O‘quvchilardagi mavjud bilimlarni ishga solish va ularni ijodiy bilishga yo‘naltirish ham nazarda tutiladi.", correct: false }
    ]
  },
  {
    id: 396,
    savol: "Tarix ta’limining bir-biri bilan uzviy bog‘langan usullar tizimining belgilari?",
    javob: [
      { matn: "O‘quvchilarda tarixiy asoslar haqida jonli tasavvurlarni shakllantirish, ularning xotirasida tarixiy asoslar, xronologiya, mahalliy va tadqiqot ma’lumotlarini mustahkamlash usullari.", correct: true },
      { matn: "O‘quvchilarning ko‘proq tarixiy hujjatlar bilan ishlash usuli badiiy-tarixiy adabiyotlardan foydalanish usullariga e’tibor berishlari.", correct: false },
      { matn: "O‘quvchilar tarixiy voqealikni anglashda tarixiy tasavvurlar va tushunchalarni shakllantirish usullarini nazarda tutishadi.", correct: false },
      { matn: "O‘quvchilarning ma’lum maqsadlarga erishishga qaratilgan birgalikdagi faoliyati usullari tushuniladi.", correct: false }
    ]
  },
  {
    id: 397,
    savol: "Tarix o‘qitish jarayonida o‘qituvchining bayoni qanday formada bo‘ladi?",
    javob: [
      { matn: "Faqat hikoya formasida.", correct: false },
      { matn: "Suratlar va analitik ta’rif formasida.", correct: false },
      { matn: "Monolog yoki dialog formasida.", correct: true },
      { matn: "Tavsifnoma formasida.", correct: false }
    ]
  },
  {
    id: 398,
    savol: "Darslik matni ustida ishlashning qanday usullari mavjud.",
    javob: [
      { matn: "Darslik matnini tarixiy hujjatlar asosida o‘rganish usullari.", correct: false },
      { matn: "Tushuntirib va izohlab o‘qish, darslik matni mazmunini o‘zlashtirish, bob, paragraflarga ajrata bilish, zarur joyni tez topa bilishga o‘rgatish usullari.", correct: true },
      { matn: "Darslik matni ustida ishlashning ilmiy-ommabop badiiy va tarixiy asarlar bilan ishlashga o‘rgatish usulari.", correct: false },
      { matn: "Darslik matni ustida ishlashda tarixiy fakt va hodisalarning mohiyatini ochib berish usullari mavjud.", correct: false }
    ]
  },
  {
    id: 399,
    savol: "Tarix o‘qitish jarayonida tarixiy xujjatlar...",
    javob: [
      { matn: "O‘quvchilar bilimini mustahkamlashga qo‘shimcha asos bo‘lib xizmat qiladi.", correct: false },
      { matn: "O‘qituvchi bayonini yanada osonlashtiradi va xulosa chiqarishda yordam beradi.", correct: false },
      { matn: "O‘qituvchi bayonini aniqlashtirish, chuqurlashtirish va unga yanada aniqlik kiritishga xizmat qiladi.", correct: true },
      { matn: "Tarixiy xujjatlarni o‘quvchilarning o‘zlari tahlil qilishadi.", correct: false }
    ]
  },
  {
    id: 400,
    savol: "Darsni tahlil etishda nimalarga e’tibor berish kerak?",
    javob: [
      { matn: "Eng samarali darsni tashkil etgan yoki tavsiya etgan metodist o‘qituvchi tavsiyasiga.", correct: false },
      { matn: "Darsni tashkil etish metodikasi va nazariyasini mukammal egallagan o‘qituvchilar tavsiyalariga.", correct: false },
      { matn: "Metodologik adabiyotlarga pedagogika fanining yutuqlariga, ilg‘or o‘qituvchilar tajribalariga, nashr qilingan metodik tavsiyalarga.", correct: true },
      { matn: "Ko‘proq ochiq darslarni tashkil eta oladigan ilg‘or metodist o‘qituvchilar tavsiyasiga.", correct: false }
    ]
  },
  {
    id: 401,
    savol: "Darsni tahlil etish prinsiplari qanday amalga oshiriladi?",
    javob: [
      { matn: "Dars tahlili pedagogika, psixologiya, metodikada qabul qilingan umumiy qonun qoidalarga rioya etilgan holda amalga oshiriladi.", correct: true },
      { matn: "Darsni kuzatish jarayonida tug‘ilgan fikr mulohazalar, xulosalar og‘zaki amalga oshiriladi.", correct: false },
      { matn: "Dars ta’lim-tarbiya va jarayoni bilan bog‘liq holda tahlil etilishi shart emas.", correct: false },
      { matn: "Darsni tahlil etishda pedagogika va metodika sohasida erishilgan yangiliklarni ommalashtirilmaydi.", correct: false }
    ]
  },

  // tugadi
  {
    id: 402,
    savol: "Ilk o’rta asrlarda “Dehqon” so’zining ma’nosi nimani anglatgan?",
    javob: [
      { matn: "Askar", correct: false },
      { matn: "Qishloq hokimi", correct: true },
      { matn: "Ziroatchi oddiy qo‘shchilar", correct: false },
      { matn: "Qishloqning dehqonlarga qaram aholisi", correct: false }
    ]
  },
  {
    id: 403,
    savol: "Afrig’iylar sulolasi Xorazmda qachon hukm surgan?",
    javob: [
      { matn: "II-IX asrlar", correct: false },
      { matn: "VII-X asrlar", correct: false },
      { matn: "IV-X asrlar", correct: true },
      { matn: "IV-XII asrlar", correct: false }
    ]
  },
  {
    id: 404,
    savol: "Qachon xorazmshoh o’z qarorgohini Xorazmning qadimgi Kat shahriga ko’chiradi?",
    javob: [
      { matn: "305-yil", correct: true },
      { matn: "205-yil", correct: false },
      { matn: "375-yil", correct: false },
      { matn: "315-yil", correct: false }
    ]
  },
  {
    id: 405,
    savol: "Xorazm davlatining hukmronlik ramzlari qaysilar?",
    javob: [
      { matn: "Ot, burgut", correct: false },
      { matn: "Burgut, lochin", correct: true },
      { matn: "Ot, lochin", correct: false },
      { matn: "Lochin va sigir", correct: false }
    ]
  },
  {
    id: 406,
    savol: "Kidariylar davlatining poytaxti?",
    javob: [
      { matn: "Balx", correct: true },
      { matn: "Kobul", correct: false },
      { matn: "Hirot", correct: false },
      { matn: "Marv", correct: false }
    ]
  },
  {
    id: 407,
    savol: "Ilk o’rta asrlarda qaysi shahar Eloq poytaxti bo’lgan?",
    javob: [
      { matn: "Balx", correct: false },
      { matn: "Tunkat", correct: true },
      { matn: "Choch", correct: false },
      { matn: "Marv", correct: false }
    ]
  },
  {
    id: 408,
    savol: "Muhammad payg’ambar (s.a.v.) nechanchi yillarda yashagan?",
    javob: [
      { matn: "570-632-yillarda", correct: true },
      { matn: "470-562-yillarda", correct: false },
      { matn: "560-630-yillarda", correct: false },
      { matn: "610-632-yillarda", correct: false }
    ]
  },
  {
    id: 409,
    savol: "Muhammad (s.a.v.) vafot etgach, kim xalifa deb e’lon qilinadi?",
    javob: [
      { matn: "Umar", correct: false },
      { matn: "Usmon", correct: false },
      { matn: "Abu Bakr", correct: true },
      { matn: "Moviya", correct: false }
    ]
  },
  {
    id: 410,
    savol: "Qutayba harbiy yurishni qachon Balx viloyati atroflarini zabt etishdan boshlaydi?",
    javob: [
      { matn: "710-yil", correct: false },
      { matn: "705-yil", correct: true },
      { matn: "715-yil", correct: false },
      { matn: "605-yil", correct: false }
    ]
  },
  {
    id: 411,
    savol: "Qaysi atama “egallash”, “zabt etish”, “bosib olish” ma’nosini beradi?",
    javob: [
      { matn: "Dekret", correct: false },
      { matn: "Konkista", correct: false },
      { matn: "Fath", correct: true },
      { matn: "Kolonna", correct: false }
    ]
  },
  {
    id: 412,
    savol: "Qachon arablar Farg’ona vodiysini uzil-kesil egallab, Qoshg’argacha kirib boradi?",
    javob: [
      { matn: "715-yil", correct: true },
      { matn: "615-yil", correct: false },
      { matn: "709-yil", correct: false },
      { matn: "705-yil", correct: false }
    ]
  },
  {
    id: 413,
    savol: "717-719-yillarda kim Arab xalifasi bo’lgan?",
    javob: [
      { matn: "Ubaydulloh", correct: false },
      { matn: "Umar ibn Abdulaziz", correct: true },
      { matn: "Qutayba", correct: false },
      { matn: "Sulaymon", correct: false }
    ]
  },
  {
    id: 414,
    savol: "Qaysi sulola Muhammad (s.a.v.) avlodini qirib tashlashda ayblandi?",
    javob: [
      { matn: "Tohiriylar", correct: false },
      { matn: "Sosoniylar", correct: false },
      { matn: "Abbosiylar", correct: true },
      { matn: "Mashinilar", correct: false }
    ]
  },
  {
    id: 415,
    savol: "Arab xalifaligida markaziy hokimiyat nechanchi yilga qadar Damashqda bo’lgan?",
    javob: [
      { matn: "850-yil", correct: false },
      { matn: "650-yil", correct: false },
      { matn: "750-yil", correct: true },
      { matn: "950-yil", correct: false }
    ]
  },
  {
    id: 416,
    savol: "786-809-yillarda kim Arab xalifasi bo’lgan?",
    javob: [
      { matn: "Qusam ibn Abbos.", correct: false },
      { matn: "Horun ar-Rashid", correct: true },
      { matn: "Abul Abbos Saffoh.", correct: false },
      { matn: "Abu Ali Chag'oniy", correct: false }
    ]
  },
  {
    id: 417,
    savol: "Tohiriylar davlati mavjud bo’lgan asrni aniqlang?",
    javob: [
      { matn: "X", correct: false },
      { matn: "XII", correct: false },
      { matn: "IX", correct: true },
      { matn: "XIII", correct: false }
    ]
  },
  {
    id: 418,
    savol: "977-997-yillarda G’aznaviylar davlatida kim hukmdor bo’lgan?",
    javob: [
      { matn: "Sobuqtegin", correct: true },
      { matn: "Xumortegin", correct: false },
      { matn: "Alptegin", correct: false },
      { matn: "Anushtegin", correct: false }
    ]
  },
  {
    id: 419,
    savol: "997-1030-yillarda G’aznaviylar davlatida kim hukmdor bo’lgan?",
    javob: [
      { matn: "Ma’mun G’aznaviy", correct: false },
      { matn: "Mahmud G’aznaviy", correct: true },
      { matn: "Mas’ud G’aznaviy", correct: false },
      { matn: "Mansur G’aznaviy", correct: false }
    ]
  },
  {
    id: 420,
    savol: "Kim “Qonuni Mas’udiy” asarini sulton Mas’udga bag’ishlagan?",
    javob: [
      { matn: "Narshaxiy", correct: false },
      { matn: "Ibn Battuta", correct: false },
      { matn: "Beruniy", correct: true },
      { matn: "Ibn Fath", correct: false }
    ]
  },
  {
    id: 421,
    savol: "Qoraxoniylar davlati asoschisi kim?",
    javob: [
      { matn: "Abdulkarim Sotuk Bug‘roxon", correct: true },
      { matn: "Ma’mun", correct: false },
      { matn: "Ibrohim Bo’ritegin", correct: false },
      { matn: "Horun Bug’roxon", correct: false }
    ]
  },
  {
    id: 422,
    savol: "Qachon Qoraxoniylar davlati tugatiladi?",
    javob: [
      { matn: "1161-yil", correct: false },
      { matn: "941-yil", correct: false },
      { matn: "1141-yil", correct: true },
      { matn: "1241-yil", correct: false }
    ]
  },
  {
    id: 423,
    savol: "Kimlarning qoraxoniylar ustidan g’alaba qozonishi oqibatida Qoraxoniylar davlati tugatiladi?",
    javob: [
      { matn: "Mo’g’ullar", correct: false },
      { matn: "Qoraxitoylar", correct: true },
      { matn: "Qipchoqlar", correct: false },
      { matn: "Jung’orlar", correct: false }
    ]
  },
  {
    id: 424,
    savol: "Anushteginiylar sulolasi qaysi davrda Xorazmni boshqargan?",
    javob: [
      { matn: "1097–1231-yil", correct: true },
      { matn: "1097–1185-yil", correct: false },
      { matn: "1177–1231-yil", correct: false },
      { matn: "1097–1331-yil", correct: false }
    ]
  },
  {
    id: 425,
    savol: "Mahmud Torobiy qo’zg’oloni qachon bo’lgan?",
    javob: [
      { matn: "1278-yil", correct: false },
      { matn: "1138-yil", correct: false },
      { matn: "1238-yil", correct: true },
      { matn: "1338-yil", correct: false }
    ]
  },
  {
    id: 426,
    savol: "Abu Ali ibn Sino qanchadan ortiq asar yozgan?",
    javob: [
      { matn: "100 dan", correct: false },
      { matn: "1000 dan", correct: false },
      { matn: "450 dan", correct: true },
      { matn: "50 dan", correct: false }
    ]
  },
  {
    id: 427,
    savol: "“Qutadg’u bilig” asarining muallifi?",
    javob: [
      { matn: "Mahmud Qoshg’ariy", correct: false },
      { matn: "Yusuf Xos Hojib", correct: true },
      { matn: "Ahmad Yassaviy", correct: false },
      { matn: "Ahmad Yugnakiy", correct: false }
    ]
  },
  {
    id: 428,
    savol: "“Devonu lug’atit-turk” asarining muallifi?",
    javob: [
      { matn: "Mahmud Qoshg’ariy", correct: true },
      { matn: "Yusuf Xos Hojib", correct: false },
      { matn: "Ahmad Yassaviy", correct: false },
      { matn: "Ahmad Yugnakiy", correct: false }
    ]
  },
  {
    id: 429,
    savol: "“Hibat ul-haqoyiq” asarining muallifi?",
    javob: [
      { matn: "Ahmad Yugnakiy", correct: true },
      { matn: "Mahmud Qoshg’ariy", correct: false },
      { matn: "Yusuf Xos Hojib", correct: false },
      { matn: "Ahmad Yassaviy", correct: false }
    ]
  },
  {
    id: 430,
    savol: "Sarbadorlar so’zining ma’nosini aniqlang?",
    javob: [
      { matn: "Arabcha sar-bosh, dor- yog’och", correct: false },
      { matn: "Forscha sar-bosh, dor-qilich", correct: false },
      { matn: "Forscha sar – bosh, dor – dor", correct: true },
      { matn: "Turkcha sar-qo’l, dor-ip", correct: false }
    ]
  },
  {
    id: 431,
    savol: "Qachon Balx shahri Amir Temurga taslim bo’ladi?",
    javob: [
      { matn: "1380-yil", correct: false },
      { matn: "1370-yil", correct: true },
      { matn: "1379-yil", correct: false },
      { matn: "1355-yil", correct: false }
    ]
  },
  {
    id: 432,
    savol: "Kimlarning ta’kidlashicha, Amir Temurning To’xtamish ustidan qozongan g’alabasi buyuk ahamiyat kasb etgan edi?",
    javob: [
      { matn: "N. S. Likoshin va N. I. Veselovskiy.", correct: false },
      { matn: "V. V. Bartold va V. L. Vyatkin.", correct: false },
      { matn: "B. D. Grekov va A.Yu.Yakubovskiy.", correct: true },
      { matn: "Tolstoy va Yakubovskiy", correct: false }
    ]
  },
  {
    id: 433,
    savol: "Amir Temur qachon 200 ming qo’shin bilan Samarqanddan Xitoy safariga chiqdi?",
    javob: [
      { matn: "1404-yil", correct: true },
      { matn: "1400-yil", correct: false },
      { matn: "1402-yil", correct: false },
      { matn: "1406-yil", correct: false }
    ]
  },
  {
    id: 434,
    savol: "Amir Temur necha yil davomida mamlakatni boshqardi?",
    javob: [
      { matn: "60", correct: false },
      { matn: "35", correct: true },
      { matn: "45", correct: false },
      { matn: "55", correct: false }
    ]
  },
  {
    id: 435,
    savol: "Shohrux Mirzo qachon olamdan o’tadi?",
    javob: [
      { matn: "1450", correct: false },
      { matn: "1447", correct: true },
      { matn: "1440", correct: false },
      { matn: "1460", correct: false }
    ]
  },
  {
    id: 436,
    savol: "Mirzo Ulug’bek qachon Samarqand yaqinida fojiali vafot etdi?",
    javob: [
      { matn: "1449", correct: true },
      { matn: "1445", correct: false },
      { matn: "1420", correct: false },
      { matn: "1470", correct: false }
    ]
  },
  {
    id: 437,
    savol: "1469-1494-yillarda kim Movarounnahrda hukmdorlik qilgan?",
    javob: [
      { matn: "Sulton Umar.", correct: false },
      { matn: "Sulton Ahmad.", correct: true },
      { matn: "Sulton Ali.", correct: false },
      { matn: "Sulton Mahmud.", correct: false }
    ]
  },
  {
    id: 438,
    savol: "Ulug’bek farmoni bilan qachon Buxoroda madrasa bunyod etilgan?",
    javob: [
      { matn: "1440", correct: false },
      { matn: "1417", correct: true },
      { matn: "1425", correct: false },
      { matn: "1430", correct: false }
    ]
  },
  {
    id: 439,
    savol: "Ulug’bekning qaysi kitobi shoh asari hisoblanadi?",
    javob: [
      { matn: "“Ziji jadidi Ko’ragoniy”", correct: true },
      { matn: "Temur tuzuklari”", correct: false },
      { matn: "“Ravzat ussafo”", correct: false },
      { matn: "“Kitob surat ul-arz”", correct: false }
    ]
  },
  {
    id: 440,
    savol: "Ulug’bek farmoni bilan qachon G’ijduvonda madrasa bunyod etilgan?",
    javob: [
      { matn: "1413-yil", correct: false },
      { matn: "1423-yil", correct: false },
      { matn: "1433-yil", correct: true },
      { matn: "1453-yil", correct: false }
    ]
  },
  {
    id: 441,
    savol: "Safforiylar davlatini 873-879-yillarda kim boshqargan?",
    javob: [
      { matn: "Ya’qub ibn Lays", correct: true },
      { matn: "Rizo ibn Lays", correct: false },
      { matn: "Holid ibn Lays", correct: false },
      { matn: "Volid ibn Lays", correct: false }
    ]
  },
  {
    id: 442,
    savol: "1497-yilda Boburning qamaliga dosh berolmagan Boysung'ur Mirzo qayerga qochadi?",
    javob: [
      { matn: "Buxoro hokimi Muhammad Shayboniy huzuriga", correct: false },
      { matn: "Qunduz hokimi Xusravshoh huzuriga", correct: true },
      { matn: "Toshkent hokimi Sulton Mahmudxon huzuriga", correct: false },
      { matn: "Hirot hokimi Sulton Husayn Bayqaro huzuriga", correct: false }
    ]
  },
  {
    id: 443,
    savol: "Muhammad Shayboniyxonning shajarasini aniqlang.",
    javob: [
      { matn: "Abulxayrxon nabirasi, Shohbudog' Sultonning o'g'li", correct: true },
      { matn: "Abulxayrxonning o'g'li", correct: false },
      { matn: "Amir Temurning chevarasi", correct: false },
      { matn: "Jo'jining uchinchi o'g'li Mahedu naslidan", correct: false }
    ]
  },
  {
    id: 444,
    savol: "Shayboniyxon qachon bobosining (Abulxayrxonning) davlatini tiklashga muvaffaq bo'lgan?",
    javob: [
      { matn: "XV asr o'rtalarida", correct: false },
      { matn: "XV asrning 80-yillarida", correct: true },
      { matn: "XVII asr boshlarida", correct: false },
      { matn: "XIV asr boshlarida", correct: false }
    ]
  },
  {
    id: 445,
    savol: "Abdullaxon II Akbarshoh huzuriga ikkinchi marta 1577-yilgi yuborilgan elchilikdan ko'zlangan maqsad nima edi?",
    javob: [
      { matn: "Eronni o'zaro taqsimlab olish", correct: true },
      { matn: "boshqa davlatlar tomonidan bo'lishi mumkin bo'lgan hujum xavfiga qarshi ittifoq tuzish", correct: false },
      { matn: "Badaxshonning fath etilish sabablarini tushuntirish", correct: false },
      { matn: "Eronni Turkiya bosqinidan xalos etish", correct: false }
    ]
  },
  {
    id: 446,
    savol: "Shayboniyxon bilan qaysi Usmonli turklar sultoni o'rtasida Eron Safaviylariga qarshi kurash to'g'risida shartnoma tuzilgan?",
    javob: [
      { matn: "Baroqxon", correct: false },
      { matn: "Navro'z Ahmadxon", correct: false },
      { matn: "Boyazid II", correct: true },
      { matn: "Sulton Salim", correct: false }
    ]
  },
  {
    id: 447,
    savol: "Turkistonda \"Abul mao'niy\" (Ma'nolar otasi) degan nom olgan allomani aniqlang.",
    javob: [
      { matn: "Bedil", correct: true },
      { matn: "Sayido Nasafiy", correct: false },
      { matn: "Muhammad Zamon Buxoriy", correct: false },
      { matn: "Muhammad", correct: false }
    ]
  },
  {
    id: 448,
    savol: "Ulug'bek madrasasi qoshida qurilgan Sherdor madrasasi bunyod etilgan yillarni aniqlang.",
    javob: [
      { matn: "1546-1559-yillar", correct: false },
      { matn: "1619-1635-yillar", correct: true },
      { matn: "1675-1680-yillar", correct: false },
      { matn: "1610-1615-yillar", correct: false }
    ]
  },
  {
    id: 449,
    savol: "Buxoro amirligidagi qaysi davlat mansabdori xon Arkida yashagan ?",
    javob: [
      { matn: "Ko'kaldosh", correct: false },
      { matn: "Devonbegi", correct: false },
      { matn: "Qo'shbegi", correct: true },
      { matn: "Otaliq", correct: false }
    ]
  },
  {
    id: 450,
    savol: "Nechanchi yilga kelib Orenburgdagi Buxoro amirligi savdogarlarining qarorgohidagi xonadonlar soni 30 taga yetdi?",
    javob: [
      { matn: "1730-yilga kelib", correct: false },
      { matn: "1825-yilga kelib", correct: true },
      { matn: "1800-yilga kelib", correct: false },
      { matn: "1880-yilga kelib", correct: false }
    ]
  },
  {
    id: 451,
    savol: "Xorazmning erksevar xalqi qachon va kim yetakchiligida Eron qo’shinlarini mamlakatdan haydab chiqardi?",
    javob: [
      { matn: "1512 Elabarsxon", correct: true },
      { matn: "1525 Abdulatif", correct: false },
      { matn: "1510 Abdulmo’min", correct: false },
      { matn: "1520 Pirmuhammad", correct: false }
    ]
  },
  {
    id: 452,
    savol: "Qaysi Xiva xoni davrida Orolbo’yi o’zbeklari Xiva xonligidan ajralib chiqdi ?",
    javob: [
      { matn: "Qorabayxon", correct: false },
      { matn: "Sherg’ozixon", correct: true },
      { matn: "Elbarsxon", correct: false },
      { matn: "Anushaxon", correct: false }
    ]
  },
  {
    id: 453,
    savol: "Amiriyning g’azalar devoni 1882-yilda qayerda chop etilgan?",
    javob: [
      { matn: "Samarqand", correct: false },
      { matn: "Isfaxon", correct: false },
      { matn: "Istanbul", correct: true },
      { matn: "Toshkent", correct: false }
    ]
  },
  {
    id: 454,
    savol: "Qachon Katta juz Rossiya tobeligiga o’tgan?",
    javob: [
      { matn: "1747-yil", correct: true },
      { matn: "1780-yil", correct: false },
      { matn: "1770-yil", correct: false },
      { matn: "1792-yil", correct: false }
    ]
  },
  {
    id: 455,
    savol: "Rossiya imperiyasi Xiva xonligiga birinchi harbiy yurishni qachon boshlagan?",
    javob: [
      { matn: "1828-yil", correct: false },
      { matn: "1839-yil", correct: true },
      { matn: "1848-yil", correct: false },
      { matn: "1849-yil", correct: false }
    ]
  },
  {
    id: 456,
    savol: "Qaysi sabab Rossiya olib borgan siyosatda harbiy yo’l bilan Markaziy Osiyoni ishg’ol etish tomon burilish ro’y berganligining yaqqol isbotidir?",
    javob: [
      { matn: "Raim va Kopal istehkomlarining qurilishi", correct: true },
      { matn: "Perovskiy ekspeditsiyasi", correct: false },
      { matn: "F.Beneveni elchiligi", correct: false },
      { matn: "Orenburg va Verniy istehkomlarining qurilishi", correct: false }
    ]
  },
  {
    id: 457,
    savol: "“Maqsadlari aniq …Bittasi mingboshi bo’lmoqchi, ikkinchisi Normuhammadning o’rniga o’tirmoqchi, uchinchisi yana bir shaharni o’ziga qaram qilmoqchi” Abdulla Qodiriyning “O’tgan kunlar” romanida kimning tilidan bayon qilgan?",
    javob: [
      { matn: "Homid", correct: false },
      { matn: "Otabek", correct: false },
      { matn: "Yusufbek hoji", correct: true },
      { matn: "Mirzakarim", correct: false }
    ]
  },
  {
    id: 458,
    savol: "XIX asr o’rtalarida Qo’qon xonligi aholisi qancha edi?",
    javob: [
      { matn: "5 mln.ga yaqin", correct: false },
      { matn: "3 mln.dan ortiq", correct: true },
      { matn: "2 mln.atrofida", correct: false },
      { matn: "800 ming", correct: false }
    ]
  },
  {
    id: 459,
    savol: "Buxoro amirligi shaharlarida tinchlik va tartibni saqlashga kim mas’ul hisoblangan?",
    javob: [
      { matn: "Ko’kaldosh", correct: false },
      { matn: "To’pchiboshi", correct: false },
      { matn: "Mirshabboshi", correct: true },
      { matn: "Muhtasib", correct: false }
    ]
  },
  {
    id: 460,
    savol: "Xiva xoni Olloqulixon hukmronlik yillarini aniqlang.",
    javob: [
      { matn: "1845-1855", correct: false },
      { matn: "1842-1845", correct: false },
      { matn: "1825-1842", correct: true },
      { matn: "1806-1825", correct: false }
    ]
  },
  {
    id: 461,
    savol: "Quyidagi qaysi shaxs 200 nafarga yaqin qo’qonlik shoirlar va olimlar ojodini o’z ichiga olgan “Majmuat ush-shuaro” tazkirasini yozgan?",
    javob: [
      { matn: "Fazliy Namonganiy", correct: true },
      { matn: "Gulxaniy", correct: false },
      { matn: "Nishotiy", correct: false },
      { matn: "Bedil", correct: false }
    ]
  },
  {
    id: 462,
    savol: "Toshkent necha dahadan iborat va qaysilar?",
    javob: [
      { matn: "3 ta-Ko’kcha, Kamolon, Beshyog’och", correct: false },
      { matn: "4 ta-Beshyog’och, Ko’kcha, Sebzor, Shayxontoxur", correct: true },
      { matn: "5 ta- Beshyog’och, Ko’kcha, Sebzor, Shayxontoxur, Kamolon", correct: false },
      { matn: "3 ta-Qorasaroy, Sag’bon, Chig’atoy", correct: false }
    ]
  },
  {
    id: 463,
    savol: "Amudaryo bo’limi qachon tuzilgan?",
    javob: [
      { matn: "1881-yil", correct: false },
      { matn: "1868-yil", correct: false },
      { matn: "1873-yil", correct: true },
      { matn: "1878-yil", correct: false }
    ]
  },
  {
    id: 464,
    savol: "Amudaryo bo’limining markazi qaysi shahar?",
    javob: [
      { matn: "Samarqand", correct: false },
      { matn: "Ashxabad", correct: false },
      { matn: "Petro-Aleksandrovsk", correct: true },
      { matn: "Yangi Marg’ilon", correct: false }
    ]
  },
  {
    id: 465,
    savol: "Kim xalq orasida “yarim podsho” nomini olgan?",
    javob: [
      { matn: "Kuropotkin", correct: false },
      { matn: "Kaufman", correct: true },
      { matn: "Chernyayev", correct: false },
      { matn: "Veryovkin", correct: false }
    ]
  },
  {
    id: 466,
    savol: "Kaufman qachon va qayerda Amir Muzaffar bilan Buxoro amirligini Rossiya imperiyasining protektoratiga aylantirgan shartnomani imzoladi?",
    javob: [
      { matn: "1866-yil 8-may –Erjar", correct: false },
      { matn: "1868-yil 28-iyun-Samarqand", correct: true },
      { matn: "1868-yil 12-oktyabr-Jizzax", correct: false },
      { matn: "1868-yil 2-iyun-Zirabuloq", correct: false }
    ]
  },
  {
    id: 467,
    savol: "1839-yilda kimning qo’shini Xivaga yetib borolmay orqaga qaytib ketdi?",
    javob: [
      { matn: "Veryovkin", correct: false },
      { matn: "Abramov", correct: false },
      { matn: "Perovskiy", correct: true },
      { matn: "Chernyayev", correct: false }
    ]
  },
  {
    id: 468,
    savol: "Qaysi shartnomadan so’ng Xiva xoni mustaqil ravishda dunyo, hatto yaqin qo’shnilari bilan ham aloqa o’rnatish imkoniyatidan ham mahrum etildi?",
    javob: [
      { matn: "Turkmanchoy", correct: false },
      { matn: "Gandimiyon", correct: true },
      { matn: "Tilzit", correct: false },
      { matn: "Gandamak", correct: false }
    ]
  },
  {
    id: 469,
    savol: "Rossiya imperiyasi yerlik aholiga o’z ta’sirini kuchaytirish uchun qachon va qayerda mahkama joriy qildi?",
    javob: [
      { matn: "1868 yil-Andijon", correct: false },
      { matn: "1865 yil-Buxoro", correct: false },
      { matn: "1866 yil-Toshkent", correct: true },
      { matn: "1867 yil-Toshkent", correct: false }
    ]
  },
  {
    id: 470,
    savol: "Yetimxon qo’zg’aloni qachon va qayerda bo’lib o’tdi?",
    javob: [
      { matn: "1878-yil-Mingtepa", correct: true },
      { matn: "1885-yilning yozi-Andijon", correct: false },
      { matn: "1879-yilning kuzi-Farg’ona", correct: false },
      { matn: "1880-yil-Xiva", correct: false }
    ]
  },
  {
    id: 471,
    savol: "Turkistonda sug’orilish ishlarining ko’pi bajarilmay qolib ketgan hududlar xato berilgan javobni aniqlang",
    javob: [
      { matn: "Toshkent vohasi", correct: false },
      { matn: "Sirdaryo viloyati", correct: true },
      { matn: "Farg’ona viloyati", correct: false },
      { matn: "Samarqand viloyati", correct: false }
    ]
  },
  {
    id: 472,
    savol: "“Vabo isyoni” qachon va qayerda bo’lib o’tdi ?",
    javob: [
      { matn: "1878-yil-Mingtepa", correct: false },
      { matn: "1892-yil-Toshkent", correct: true },
      { matn: "1898-yil-Andijon", correct: false },
      { matn: "1885-yil-Andijon", correct: false }
    ]
  },
  {
    id: 473,
    savol: "Ismoil Gaspirali qachon va qayerda I-jadid maktabiga asos soldi?",
    javob: [
      { matn: "1884-Qrimdagi Bog’chasaroyda", correct: true },
      { matn: "1884-Qrimdagi Bog’cha darvozada", correct: false },
      { matn: "1884-Qrimdagi Muyelida", correct: false },
      { matn: "1885-Qrimdagi Kavkazdarvozasida", correct: false }
    ]
  },
  {
    id: 474,
    savol: "1910-yilda O’rta Osiyolik jadid ma’rifatparvarlarining eng kattasi kim edi?",
    javob: [
      { matn: "Cho’lpon 32 yoshda", correct: false },
      { matn: "Behbudiy 36 yoshda", correct: true },
      { matn: "Behbudiy 52 yoshda", correct: false },
      { matn: "Cho’lpon 43 yoshda", correct: false }
    ]
  },
  {
    id: 475,
    savol: "A.Avloniy qachon va qayerda tug’ilgan?",
    javob: [
      { matn: "1878-Andijon", correct: false },
      { matn: "1875-Buxoro", correct: false },
      { matn: "1878-Toshkentda", correct: true },
      { matn: "1875-Samarqandda", correct: false }
    ]
  },
  {
    id: 476,
    savol: "A.Avloniy qachon va qaysi gazetaga asos solgan?",
    javob: [
      { matn: "1908-Xurshid", correct: false },
      { matn: "1907-Shuhrat", correct: true },
      { matn: "1907-“Osiyo”", correct: false },
      { matn: "1906-Taraqqiy", correct: false }
    ]
  },
  {
    id: 477,
    savol: "Buxoro amirligida bog’lar va polizlardan olingan daromadlar uchun alohida olingan soliq qaysi?",
    javob: [
      { matn: "Kafsan", correct: false },
      { matn: "Tanobona", correct: true },
      { matn: "Muzd", correct: false },
      { matn: "Dorug’a", correct: false }
    ]
  },
  {
    id: 478,
    savol: "Yosh Buxoroliklar yetuk namoyondalari xato berilgan javobni aniqlang.",
    javob: [
      { matn: "Abdulvohid Burhonov", correct: false },
      { matn: "T.Risqulov", correct: true },
      { matn: "F.Xo’jayev", correct: false },
      { matn: "S.Ayniy", correct: false }
    ]
  },
  {
    id: 479,
    savol: "Qachon BXSR tuzildi?",
    javob: [
      { matn: "1919-yil 29-avgust", correct: false },
      { matn: "1922-yil 2-sentyabr", correct: false },
      { matn: "1920-yil 6-oktabr", correct: true },
      { matn: "1921-yil yanvar", correct: false }
    ]
  },
  {
    id: 480,
    savol: "Turkiston general-gubernatorligining rasmiy nashrini aniqlang.",
    javob: [
      { matn: "“Shuhrat”", correct: false },
      { matn: "“Turkistanskiye vedomosti”", correct: true },
      { matn: "“Xurshid”", correct: false },
      { matn: "“Taraqqiy”", correct: false }
    ]
  },
  {
    id: 481,
    savol: "Turkistonda arxeologiya havaskorlari to’garagi qachon ochilgan?",
    javob: [
      { matn: "1894-yil", correct: false },
      { matn: "1896-yil", correct: false },
      { matn: "1895-yil", correct: true },
      { matn: "1897-yil", correct: false }
    ]
  },
  {
    id: 482,
    savol: "Quyidagi fikr qaysi allomaga tegishli: “Tarix millatlarning o’tmishini, taraqqiyotini hamda tanazzulining sabablarini o’rganaturg’on ilmdir”?",
    javob: [
      { matn: "Behbudiy", correct: false },
      { matn: "Fayzulla Xo’jayev", correct: false },
      { matn: "Fitrat", correct: true },
      { matn: "Hamza Hakimzoda", correct: false }
    ]
  },
  {
    id: 483,
    savol: "O’zbekiston tarixida sovet davrini belgilang?",
    javob: [
      { matn: "1920-1991-yillar", correct: false },
      { matn: "1917-1991-yillar", correct: true },
      { matn: "1920-1990-yillar", correct: false },
      { matn: "1925-1991-yillar", correct: false }
    ]
  },
  {
    id: 484,
    savol: "O’zbekiston tarixida sovet davrini necha bosqichga ajratishadi?",
    javob: [
      { matn: "6", correct: false },
      { matn: "2", correct: true },
      { matn: "7", correct: false },
      { matn: "10", correct: false }
    ]
  },
  {
    id: 485,
    savol: "O’zbekiston tarixida sovet davrining birinchi bosqichiga qaysi yillar kiradi?",
    javob: [
      { matn: "1917-1926-yillar", correct: false },
      { matn: "1925-1930-yillar", correct: false },
      { matn: "1917-1924-yillar", correct: true },
      { matn: "1920-1924-yillar", correct: false }
    ]
  },
  {
    id: 486,
    savol: "“Islom kengashi” qachon tuzildi?",
    javob: [
      { matn: "1920-yil", correct: false },
      { matn: "1915-yil", correct: false },
      { matn: "1917-yil", correct: true },
      { matn: "1919-yil", correct: false }
    ]
  },
  {
    id: 487,
    savol: "“Sho’roi Islomiya” qaysi shaharda tuzilgan va faoliyat olib borgan?",
    javob: [
      { matn: "Turkiston", correct: false },
      { matn: "Toshkent", correct: true },
      { matn: "Petrograd", correct: false },
      { matn: "Buxoro", correct: false }
    ]
  },
  {
    id: 488,
    savol: "“Sho’roi Ulamo” tomonidan qanday jurnallari nashr qilingan?",
    javob: [
      { matn: "“al-Izoh” va “al-Isloh”", correct: true },
      { matn: "“Turon”, “Katta Farg’ona”", correct: false },
      { matn: "”Ulug’ Turkiston”", correct: false },
      { matn: "“Oyna”", correct: false }
    ]
  },
  {
    id: 489,
    savol: "“Sho’roi Islomiya” va “Sho’roi Ulamo” tashkilotlari bolsheviklar tomonidan qachon tugatildi?",
    javob: [
      { matn: "1915-yil", correct: false },
      { matn: "1922-yil", correct: false },
      { matn: "1918-yil", correct: true },
      { matn: "1925-yil", correct: false }
    ]
  },
  {
    id: 490,
    savol: "1917-yil oktyabr to’ntarishi haqidagi xabar qachon Toshkentga yetib keldi?",
    javob: [
      { matn: "1918-yil", correct: false },
      { matn: "1917-yil", correct: true },
      { matn: "1919-yil", correct: false },
      { matn: "1920-yil", correct: false }
    ]
  },
  {
    id: 491,
    savol: "Turkiston ishchi va soldat deputatlari Sovetlarining III o’lka syezdi qachon bo’lib o’tdi?",
    javob: [
      { matn: "1919-yil", correct: false },
      { matn: "1917-yil", correct: true },
      { matn: "1915-yil", correct: false },
      { matn: "1920-yil", correct: false }
    ]
  },
  {
    id: 492,
    savol: "Turkiston ishchi va soldat deputatlari Sovetlarining III o’lka syezdi qaysi shaharda bo’lib o’tdi?",
    javob: [
      { matn: "Qo’qon", correct: false },
      { matn: "Buxoro", correct: false },
      { matn: "Toshkent", correct: true },
      { matn: "Turkiston", correct: false }
    ]
  },
  {
    id: 493,
    savol: "Turkiston o’lka musulmonlari Markaziy Kengashi (Milliy Markaz) bolsheviklar bilan hamkorlik qilishga qarshi chiqdilar va 1917-yil noyabr oyi boshlarida Toshkent shahridan qaysi shaharga ko’chib o’tdilar?",
    javob: [
      { matn: "Xorazm", correct: false },
      { matn: "Qo’qon", correct: true },
      { matn: "Buxoro", correct: false },
      { matn: "Yettisuv", correct: false }
    ]
  },
  {
    id: 494,
    savol: "“Turli musulmon guruhlarining birlashgan kengashi” qaysi tashkilotning tashabbusi bilan o’tkazildi?",
    javob: [
      { matn: "XKS", correct: false },
      { matn: "XKPS", correct: false },
      { matn: "“Sho’roi Ulamo”", correct: true },
      { matn: "Kraymussovet", correct: false }
    ]
  },
  {
    id: 495,
    savol: "“Turli musulmon guruhlarining birlashgan kengashi”da qaysi viloyatlaridan kelgan vakillar qatnashdi?",
    javob: [
      { matn: "Turkiston va Samarqand", correct: false },
      { matn: "Sirdaryo va Samarqand", correct: true },
      { matn: "Sirdaryo va Turkiston", correct: false },
      { matn: "Samarqand va Buxoro", correct: false }
    ]
  },
  {
    id: 496,
    savol: "Harbiy vazir Ubaydulla Xo’jayev ishtirokida qachon ko’rik (parad) o’tkazildi?",
    javob: [
      { matn: "1918-yil boshlarida", correct: true },
      { matn: "1919-yil boshlarida", correct: false },
      { matn: "1919-yil dekabrda", correct: false },
      { matn: "1918-yil dekabrda", correct: false }
    ]
  },
  {
    id: 497,
    savol: "V.I. Leninning buyrug’i bilan O’rta Osiyoning favqulodda komissari qilib jo’natilgan shaxsi aniqlang?",
    javob: [
      { matn: "Fon Kaufman", correct: false },
      { matn: "Chernyayev", correct: false },
      { matn: "P.Kobozev", correct: true },
      { matn: "Skolbilov", correct: false }
    ]
  },
  {
    id: 498,
    savol: "Sovxoz nima?",
    javob: [
      { matn: "Qonunlar toplami", correct: false },
      { matn: "Davlat xo’jaliklari", correct: true },
      { matn: "Markaz binosi", correct: false },
      { matn: "Oziq-ovqat ombori", correct: false }
    ]
  },
  {
    id: 499,
    savol: "Turkiston Muxtoriyatining tashqi ishlar vaziri etib kim tayinlanganligini aniqlang?",
    javob: [
      { matn: "Ubaydulla Xo’jayev", correct: false },
      { matn: "Fayzulla Xo’jayev", correct: false },
      { matn: "Mustafo Cho’qay", correct: true },
      { matn: "Anvar qozi", correct: false }
    ]
  },
  {
    id: 500,
    savol: "Turkiston Muxtoriyatining bosh vaziri etib kim tayinlanganligini aniqlang?",
    javob: [
      { matn: "Mustafo Cho’qay", correct: false },
      { matn: "Islom Sulton Shoahmedov", correct: false },
      { matn: "M.Tinishboyev", correct: true },
      { matn: "Ubaydulla Xo’jayev", correct: false }
    ]
  },
  {
    id: 501,
    savol: "Turkiston ASSRda Yangi iqtisodiy siyosatga o’tishni siyosiy jihatdan asoslab bergan TKP ning VI syezdi qachon bo’lib o’tgan?",
    javob: [
      { matn: "1919-yil", correct: false },
      { matn: "1925-yil", correct: false },
      { matn: "1921-yil", correct: true },
      { matn: "1928-yil", correct: false }
    ]
  },
  {
    id: 502,
    savol: "Madaminbek sovetlar bilan qaysi shaharda yarash bitimini imzoladi?",
    javob: [
      { matn: "Buxoro", correct: false },
      { matn: "Skobelovda", correct: true },
      { matn: "Samarqand", correct: false },
      { matn: "Jizzax", correct: false }
    ]
  },
  {
    id: 503,
    savol: "Amir Sayid Olimxon yashagan yillarni aniqlang?",
    javob: [
      { matn: "1881-1944-y", correct: true },
      { matn: "1881-1960-y", correct: false },
      { matn: "1910-1944-y", correct: false },
      { matn: "1860-1920-y", correct: false }
    ]
  },
  {
    id: 504,
    savol: "Sovet hukumati qachon Buxoro amirligini tugatishga kirishdi?",
    javob: [
      { matn: "1922", correct: false },
      { matn: "1923", correct: false },
      { matn: "1920", correct: true },
      { matn: "1925", correct: false }
    ]
  },
  {
    id: 505,
    savol: "“Qo‘shchi” ittifoqi faoliyat davrini belgilang?",
    javob: [
      { matn: "1940-1980-yillar", correct: false },
      { matn: "1920-1933-yillar", correct: true },
      { matn: "1915-1920-yillar", correct: false },
      { matn: "1930-1960-yillar", correct: false }
    ]
  },
  {
    id: 506,
    savol: "O‘zbekiston SSR tarkibida Tojikiston Avtonom Sovet Sotsialistik Respublikasi (Tojikiston ASSR) tuzilganligi haqida deklaratsiya qayerda qabul qilingan?",
    javob: [
      { matn: "Tehronda", correct: false },
      { matn: "Andijonda", correct: false },
      { matn: "Dushanbeda", correct: true },
      { matn: "Urganchda", correct: false }
    ]
  },
  {
    id: 507,
    savol: "1925-yil 12–19-fevralda Qoraqalpoq avtonom viloyati Sovetlarining I ta’sis syezdi qayerda bo‘lib o‘tdi?",
    javob: [
      { matn: "To’rtko’lda", correct: true },
      { matn: "Moskvada", correct: false },
      { matn: "Xivada", correct: false },
      { matn: "Toshkentda", correct: false }
    ]
  },
  {
    id: 508,
    savol: "1937-yil kimlar qamoqqa olinib, tergovdan so’ng otib tashlandi?",
    javob: [
      { matn: "Botu, Avloniy", correct: false },
      { matn: "F.Xo’jayev, A.Ikromov", correct: true },
      { matn: "A.Qodiriy, Munavvar Qori", correct: false },
      { matn: "Munavvar Qori, Usmon Nosir", correct: false }
    ]
  },
  {
    id: 509,
    savol: "Usmon Nosir qayerda vafot etdi?",
    javob: [
      { matn: "Tergovda", correct: false },
      { matn: "Qamoqxonada", correct: true },
      { matn: "Sud majlisida", correct: false },
      { matn: "Urushda", correct: false }
    ]
  },
  {
    id: 510,
    savol: "”Shahidlar xotirasi” yodgorlik majmuasi qachon ochildi?",
    javob: [
      { matn: "1995 yil", correct: false },
      { matn: "2010 yil", correct: false },
      { matn: "2000 yil", correct: true },
      { matn: "2015 yil", correct: false }
    ]
  },
  {
    id: 511,
    savol: "1939-yil 23-avgustda kimning taklifi bilan Moskvada SSSR va Germaniya o‘rtasida 10 yil muddatga hujum qilmaslik to‘g‘risida bitim imzolandi?",
    javob: [
      { matn: "Chemberling", correct: false },
      { matn: "B. Ribbentrop", correct: true },
      { matn: "Frida Shimid", correct: false },
      { matn: "I. Stalin", correct: false }
    ]
  },
  {
    id: 512,
    savol: "Qachon Sovet ittifoqida harbiy holat joriy etilganligi haqida farmon e’lon qilindi?",
    javob: [
      { matn: "1942-yil 22-iyun", correct: false },
      { matn: "1940-yil 22-iyun", correct: false },
      { matn: "1941-yil 22-iyun", correct: true },
      { matn: "1943-yil 22-iyun", correct: false }
    ]
  },
  {
    id: 513,
    savol: "Lotinchadan olingan bo‘shatmoq, xoli qilmoq ma'nosini anglatuvchi so'zni toping?",
    javob: [
      { matn: "Agressiya", correct: false },
      { matn: "Evakuatsiya", correct: true },
      { matn: "Missiya", correct: false },
      { matn: "Progressiya", correct: false }
    ]
  },
  {
    id: 514,
    savol: "Moskvani himoya qilishda 28 nafar fashistni otib o‘ldirgan snayperchini aniqlang?",
    javob: [
      { matn: "Sobir Rahimov", correct: false },
      { matn: "Zebo G`aniyeva", correct: true },
      { matn: "Qochqor Rahimov", correct: false },
      { matn: "Munsia Sattorova", correct: false }
    ]
  },
  {
    id: 515,
    savol: "KPSS MK Bosh sekratari, SSSR Oliy Soveti Prezdiumi raisi Leonid Brejnev qachon vafot etdi?",
    javob: [
      { matn: "1979-yil", correct: false },
      { matn: "1985-yil", correct: false },
      { matn: "1982-yil", correct: true },
      { matn: "1987-yil", correct: false }
    ]
  },
  {
    id: 516,
    savol: "Mixail Gorbachyov qachon KPSS MK Bosh sekretari lavozimini egalladi?",
    javob: [
      { matn: "1988-yil", correct: false },
      { matn: "1985-yil", correct: true },
      { matn: "1989-yil", correct: false },
      { matn: "1991-yil", correct: false }
    ]
  },
  {
    id: 517,
    savol: "O’zbekistonda qachondan boshlab faol demokratik yangilanish va modernizatsiyalash jarayoni kuzatildi?",
    javob: [
      { matn: "2005 yildan", correct: false },
      { matn: "2010 yildan", correct: false },
      { matn: "2000 yildan", correct: true },
      { matn: "2012 yildan", correct: false }
    ]
  },
  {
    id: 518,
    savol: "O’zbekiston SSRning Mustaqillik Deklaratsiyasi qachon qabul qilingan?",
    javob: [
      { matn: "1989 yil 20 iyun", correct: false },
      { matn: "1991 yil 25 iyun", correct: false },
      { matn: "1990 yil 20 iyun", correct: true },
      { matn: "1991 yil 19 avgust", correct: false }
    ]
  },
  {
    id: 519,
    savol: "Bugungi kunda BMT ga a’zo davlatlar soni nechta?",
    javob: [
      { matn: "150 ta", correct: false },
      { matn: "100 ta", correct: false },
      { matn: "193 ta", correct: true },
      { matn: "350 ta", correct: false }
    ]
  },
  {
    id: 520,
    savol: "O’zbekiston Respublikasi Prezidenti saylovi to’g’risidagi qonun qachon qabul qilingan?",
    javob: [
      { matn: "1990 yil 18 yanvar", correct: false },
      { matn: "1991 yil 18 noyabr", correct: true },
      { matn: "1989 yil 18 noyabr", correct: false },
      { matn: "1987 yil 18 noyabr", correct: false }
    ]
  },
  {
    id: 521,
    savol: "Nechanchi yilda o’tkazilgan referendumda Prezidentlik lavozimi vakolati 5 yildan 7 yilga uzaytirildi?",
    javob: [
      { matn: "2008 y.", correct: false },
      { matn: "2015 y.", correct: false },
      { matn: "2002 y.", correct: true },
      { matn: "2017 y.", correct: false }
    ]
  },
  {
    id: 522,
    savol: "Har bir hokimiyat faoliyatini muvofiqlashtiruvchi mustaqil organ berilgan javobni toping?",
    javob: [
      { matn: "Bosh Vazirl", correct: false },
      { matn: "Prezident", correct: true },
      { matn: "Vazirlar mahkamasi", correct: false },
      { matn: "Sud", correct: false }
    ]
  },
  {
    id: 523,
    savol: "Prezident mamlakat Qurolli kuchlarining oliy bosh qo’mondoni hisoblanishi konstitutsiyamizning nechanchi moddasida aytib o’tilgan?",
    javob: [
      { matn: "1-modda", correct: false },
      { matn: "30-modda", correct: false },
      { matn: "93-modda", correct: true },
      { matn: "129-modda", correct: false }
    ]
  },
  {
    id: 524,
    savol: "O’zbekiston Respublikasi Qurolli Kuchlarining Sharqiy harbiy okrugiga kirgan hududlarni toping?",
    javob: [
      { matn: "Buxoro, Navoiy, Qashqadaryo", correct: false },
      { matn: "Andijon, Namangan, Farg’ona", correct: true },
      { matn: "Samarqand, Jizzax, Sirdaryo", correct: false },
      { matn: "Qoraqalpag’iston, Navoiy, Qashqadaryo", correct: false }
    ]
  },
  {
    id: 525,
    savol: "“Milliy xavfsizlik to'g'risida”gi konsepsiya nechanchi yilda qabul qilingan?",
    javob: [
      { matn: "1991 yil 24 aprel", correct: false },
      { matn: "1997 yil avgust", correct: true },
      { matn: "1989 yil sentyabr", correct: false },
      { matn: "1979 yil avgust", correct: false }
    ]
  },
  {
    id: 526,
    savol: "Markaziy saylov komissiyasi raisi Mirzo Ulug`bek Abdusalamov Shavkat Mirziyoyevga Prezidentlik guvohnomasini qachon topshirgan edi?",
    javob: [
      { matn: "2015 y", correct: false },
      { matn: "2016 y", correct: true },
      { matn: "2017 y", correct: false },
      { matn: "2020 y", correct: false }
    ]
  },
  {
    id: 527,
    savol: "O‘zbekiston Respublikasi Konstitutsiyasi va qonunlarda necha yoshga to‘lgan fuqarolarning saylash huquqiga ega ekanligi belgilab qo’yilgan?",
    javob: [
      { matn: "14", correct: false },
      { matn: "25", correct: false },
      { matn: "18", correct: true },
      { matn: "35", correct: false }
    ]
  },
  {
    id: 528,
    savol: "Qaysi partiya mulkdorlar qatlami, kichik biznes, fermerlik va dehqon xo‘jaliklari vakillari hamda ishbilarmonlar manfaatlarini himoya qiladi?",
    javob: [
      { matn: "O‘zbekiston Xalq demokratik partiyasi", correct: false },
      { matn: "O‘zbekiston Liberal-Demokratik partiyasi (O‘zLiDeP)", correct: true },
      { matn: "O‘zbekiston Adolat sotsial-demokratik partiyasi", correct: false },
      { matn: "Vatan taraqqiyoti partiyasi", correct: false }
    ]
  },
  {
    id: 529,
    savol: "1995-yili iyunda tuzilgan partiya qaysi?",
    javob: [
      { matn: "O‘zbekiston «Fidokorlar» milliy demokratik partiyasi", correct: false },
      { matn: "O‘zbekiston Milliy tiklanish demokratik partiyasi", correct: true },
      { matn: "«Vatan taraqqiyoti»", correct: false },
      { matn: "O‘zbekiston Xalq demokratik partiyasi", correct: false }
    ]
  },
  {
    id: 530,
    savol: "Nechanchi yilda Shavkat Mirziyoyevning farmoniga binoan Xalq qabulxonalari tashkil etildi?",
    javob: [
      { matn: "2014-yil", correct: false },
      { matn: "2015-yil", correct: false },
      { matn: "2016-yil", correct: true },
      { matn: "2010-yil", correct: false }
    ]
  },
  {
    id: 531,
    savol: "Uzoqqa boruvchi ta’sir vositalari va uslublari; maqsadni istiqbolli dinamik aniqlab olish bu — ...",
    javob: [
      { matn: "Sanksiya", correct: false },
      { matn: "Strategiya", correct: true },
      { matn: "Konsepsiya", correct: false },
      { matn: "Konversiya", correct: false }
    ]
  },
  {
    id: 532,
    savol: "Biror sohani rivojlantirishga qaratilgan keng qamrovli loyiha yoki qarashlar majmui bu — …",
    javob: [
      { matn: "Sanksiya", correct: false },
      { matn: "Konsepsiya", correct: true },
      { matn: "Agressiya", correct: false },
      { matn: "Konversiya", correct: false }
    ]
  },
  {
    id: 533,
    savol: "Toshkent xalqaro aeroportiga qachon I.Karimov nomi berildi?",
    javob: [
      { matn: "2005", correct: false },
      { matn: "2015", correct: false },
      { matn: "2017", correct: true },
      { matn: "2000", correct: false }
    ]
  },
  {
    id: 534,
    savol: "Chevrolet Orlando avtomashinasi qachondan ishlab chiqildi?",
    javob: [
      { matn: "2014", correct: true },
      { matn: "2000", correct: false },
      { matn: "2005", correct: false },
      { matn: "2020", correct: false }
    ]
  },
  {
    id: 535,
    savol: "Harakatlar strategiyasida tinchlik va soflikni anglatuvchi rang qaysi qatorda to‘g‘ri berilgan?",
    javob: [
      { matn: "Qora", correct: false },
      { matn: "Oq rang", correct: true },
      { matn: "Ko’k", correct: false },
      { matn: "Pushti", correct: false }
    ]
  },
  {
    id: 536,
    savol: "Qaysi yil “Keksalarni e’zozlash yili” deb nomlandi?",
    javob: [
      { matn: "1999-yil", correct: false },
      { matn: "2015-yil", correct: true },
      { matn: "2019-yil", correct: false },
      { matn: "2020-yil", correct: false }
    ]
  },
  {
    id: 537,
    savol: "YUNESKO tashkiloti tomonidan 1995-yil dunyoning qaysi shahrida «Bag‘rikenglik tamoyillari deklaratsiyasi» qabul qilindi?",
    javob: [
      { matn: "Toshkent", correct: false },
      { matn: "Parij", correct: true },
      { matn: "London", correct: false },
      { matn: "Moskva", correct: false }
    ]
  },
  {
    id: 538,
    savol: "Yoshlar ittifoqi nima maqsadda tuzilgan?",
    javob: [
      { matn: "Tinchlikni saqlash uchun", correct: false },
      { matn: "Ta’limni rivojlantirish uchun", correct: false },
      { matn: "Yoshlarni birlashtirish uchun", correct: true },
      { matn: "Yoshlarda g’oyaviy bo’shliqni to’ldirish uchun", correct: false }
    ]
  },
  {
    id: 539,
    savol: "«Avesto»ning ilk qismi qachon paydo bo'lgan?",
    javob: [
      { matn: "mil.avv VIII-VII asrlarda", correct: false },
      { matn: "mil.avv IX-VIII asrlarda", correct: true },
      { matn: "mil.avv VIII-VI asrlarda", correct: false },
      { matn: "mil.avv VII-VI asrlarda", correct: false }
    ]
  },
  {
    id: 540,
    savol: "Zardusht necha yoshida yangi diniy ta’limot payg‘ambariga aylangan?",
    javob: [
      { matn: "45 yoshida", correct: false },
      { matn: "20 yoshida", correct: false },
      { matn: "30 yoshida", correct: true },
      { matn: "40 yoshida", correct: false }
    ]
  },
  {
    id: 541,
    savol: "O’rta Osiyo hududini bosib olishga harakat qilib ko’rgan dastlabki fors podshosi kim bo’lgan?",
    javob: [
      { matn: "Doro I", correct: false },
      { matn: "Kserks", correct: false },
      { matn: "Kir II", correct: true },
      { matn: "Doro II", correct: false }
    ]
  },
  {
    id: 542,
    savol: "Fors shohi Kir II qachon ulkan lashkar bilan massagetlar ustiga yurish qiladi?",
    javob: [
      { matn: "mil.avv.558-yil", correct: false },
      { matn: "mil.avv.530-yil", correct: true },
      { matn: "mil.avv.520-yil", correct: false },
      { matn: "mil.avv.540-yil", correct: false }
    ]
  },
  {
    id: 543,
    savol: "Fors shohi Kir II ning massagetlar ustiga yurishi haqida qaysi tarixchi yozib qoldirgan?",
    javob: [
      { matn: "Platon", correct: false },
      { matn: "Gerodot", correct: true },
      { matn: "Poliyen", correct: false },
      { matn: "Gomer", correct: false }
    ]
  },
  {
    id: 544,
    savol: "Fors podshosi Doro I qachon saklar ustiga yurish qilgan edi?",
    javob: [
      { matn: "mil.avv.525-yil", correct: false },
      { matn: "mil.avv.519-yil", correct: true },
      { matn: "mil.avv.530-yil", correct: false },
      { matn: "mil.avv.330-yil", correct: false }
    ]
  },
  //jahon tarixi 
  {
    id: 545,
    savol: "Ahamoniylardan kimlarning hukmronligi davrida O’rta Osiyo xalqlari yunon-fors urushlarida qatnashgan edilar?",
    javob: [
      { matn: "Kambiz II va Doro I davrida", correct: false },
      { matn: "Doro I va Kserks davrida", correct: true },
      { matn: "Kir II va Doro I davrida", correct: false },
      { matn: "Doro I va Doro III davrida", correct: false }
    ]
  },
  {
    id: 546,
    savol: "O’rta Osiyo hududida qachon dastlabki tanga pullar tarqalgan?",
    javob: [
      { matn: "mil.avv.XII-XI asrlarda", correct: false },
      { matn: "mil.avv.V-IV asrlarda", correct: true },
      { matn: "mil.avv.II-I asrlarda", correct: false },
      { matn: "mil.avv.IX-IV asrlarda", correct: false }
    ]
  },
  {
    id: 547,
    savol: "Amudaryo xazinasi qachon topilganligini aniqlang.",
    javob: [
      { matn: "1777-yil", correct: false },
      { matn: "1877-yil", correct: true },
      { matn: "1977-yil", correct: false },
      { matn: "1830-yil", correct: false }
    ]
  },
  {
    id: 548,
    savol: "Mil.avv IV asrda Baqtriya poytaxti qaysi shahar edi?",
    javob: [
      { matn: "Kiropolis", correct: false },
      { matn: "Baqtra", correct: true },
      { matn: "Nautaka", correct: false },
      { matn: "Marv", correct: false }
    ]
  },
  {
    id: 549,
    savol: "O’rta Osiyoda Aleksandrga qarshi ko’tarilgan qo’zg’olonga kim rahbarlik qilgan?",
    javob: [
      { matn: "Oksiart", correct: false },
      { matn: "Spitaman", correct: true },
      { matn: "Bess", correct: false },
      { matn: "Sparangiz", correct: false }
    ]
  },
  {
    id: 550,
    savol: "Birlashgan yuechji mulklarining birinchi hukmdorini aniqlang?",
    javob: [
      { matn: "Kudzula Kadfiz", correct: true },
      { matn: "Kanishka", correct: false },
      { matn: "Vima Kadfiz", correct: false },
      { matn: "Mitridat", correct: false }
    ]
  },
  {
    id: 551,
    savol: "Kimning davrida Kushon podsholigi ulkan davlatga aylandi?",
    javob: [
      { matn: "Vima Kadfiz", correct: false },
      { matn: "Kanishka", correct: true },
      { matn: "Mitridat", correct: false },
      { matn: "Kudzula Kadfiz", correct: false }
    ]
  },
  {
    id: 552,
    savol: "Qadimgi Maroqanda bugungi qaysi shaharga to’g’ri keladi?",
    javob: [
      { matn: "Buxoro", correct: false },
      { matn: "Samarqand", correct: true },
      { matn: "Toshkent", correct: false },
      { matn: "Termiz", correct: false }
    ]
  },
  {
    id: 553,
    savol: "Ilk o‘rta asrlarda shaharning hokim qasri joylashgan qismi nima deb nomlangan?",
    javob: [
      { matn: "Yabg‘ukat", correct: false },
      { matn: "Rabot", correct: false },
      { matn: "Kuhandiz", correct: true },
      { matn: "Shahriston", correct: false }
    ]
  },
  {
    id: 554,
    savol: "1867-yilda tashkil etilgan Turkiston general-gubernatorligining markazi qaysi shahar edi?",
    javob: [
      { matn: "Turkiston", correct: false },
      { matn: "Avliyoota", correct: false },
      { matn: "Toshkent", correct: true },
      { matn: "Verniy", correct: false }
    ]
  },
  {
    id: 555,
    savol: "Shayboniy Ubaydullaxon bilan kurash olib borgan temuriy hukmdor kim?",
    javob: [
      { matn: "Humoyun Mirzo", correct: false },
      { matn: "Sulton Ahmad mirzo", correct: false },
      { matn: "Zahiriddin Bobur", correct: true },
      { matn: "Husayn Boyqaro", correct: false }
    ]
  },
  {
    id: 556,
    savol: "Toshkent shahridagi Ko‘kaldosh va Baroqxon madrasalari qaysi sulola davrida bunyod etilgan?",
    javob: [
      { matn: "Ashtarxoniylar", correct: false },
      { matn: "Mang‘itlar", correct: false },
      { matn: "Shayboniylar", correct: true },
      { matn: "Minglar", correct: false }
    ]
  },
  {
    id: 557,
    savol: "Qo’shinni yetti qismga bo’lib joylashtirish tartibini birinchi bo’lib Amir Temur joriy qilganligi haqida kim yozib qoldirgan?",
    javob: [
      { matn: "A.Yu.Yakubovskiy", correct: false },
      { matn: "Ali Yazdiy", correct: true },
      { matn: "Ibn Arabshoh", correct: false },
      { matn: "Nizomiddin Shomiy", correct: false }
    ]
  },
  {
    id: 558,
    savol: "Amir Temur Ispaniya elchisini qayerda qabul qilgan edi?",
    javob: [
      { matn: "Ko’ksaroyda", correct: false },
      { matn: "Bog’i Dilkushoda", correct: true },
      { matn: "Oqsaroyda", correct: false },
      { matn: "Bo’stonsaroyda", correct: false }
    ]
  },
  {
    id: 559,
    savol: "O‘zbekiston Respublikasi Prezidenti huzuridagi maslahatlashuv organi qaysi javobda to‘g‘ri berilgan?",
    javob: [
      { matn: "Mudofaa vazirligi", correct: false },
      { matn: "Davlat xavfsizlik xizmati", correct: false },
      { matn: "Xavfsizlik kengashi", correct: true },
      { matn: "Milliy xavfsizlik xizmati", correct: false }
    ]
  },
  {
    id: 560,
    savol: "So‘g‘diylar qaysi hududda yashagan?",
    javob: [
      { matn: "Amudaryoning quyi oqimida", correct: false },
      { matn: "Toshkent vohasi va Farg’ona vodiysida", correct: false },
      { matn: "Zarafshon va Qashqadaryo vodiysida", correct: true },
      { matn: "O’zbekistonning janubiy viloyatlarida", correct: false }
    ]
  },
  {
    id: 561,
    savol: "2017-yilda Fuqarolarning o‘zini o‘zi boshqarish organlarida jamoatchilik asosida faoliyat yuritadigan qanday lavozim joriy etildi?",
    javob: [
      { matn: "Fuqarolar yig‘ini raisi o‘rinbosari – xotin-qizlar masalalari", correct: false },
      { matn: "Fuqarolar yig‘ini raisi o‘rinbosari – yoshlar masalalari bo‘yicha maslahatchi", correct: true },
      { matn: "Fuqarolar yig‘ini raisi o‘rinbosari – diniy-axloqiy tarbiya bo‘yicha", correct: false },
      { matn: "Fuqarolar yig‘ini raisi o‘rinbosari – ma'naviyat bo'yicha", correct: false }
    ]
  },
  {
    id: 562,
    savol: "Amudaryoning quyi oqimida mavjud bo’lgan qadimgi davlat qaysi qatorda to’g’ri ko’rsatilgan?",
    javob: [
      { matn: "Baqtriya", correct: false },
      { matn: "Xorazm", correct: true },
      { matn: "Sug’diyona", correct: false },
      { matn: "Marg’iyona", correct: false }
    ]
  },
  {
    id: 563,
    savol: "O’zbekiston mustaqillikka erishganining dastlabki yillarida huquqiy-demokratik davlat barpo etish uchun belgilangan eng muhim vazifalardan biri nima edi?",
    javob: [
      { matn: "Ko’ppartiyaviylik tizimi asosida professional parlamentni tashkil etish", correct: false },
      { matn: "Jamiyatda kuchli davlatdan kuchli fuqarolik jamiyatiga o’tish tamoyilini tatbiq etish", correct: false },
      { matn: "Davlat hokimiyatining vakillik va fuqarolarning o‘zini o‘zi boshqarish organlarining yangi sharoitlarga mos keladigan tizimini yaratish", correct: true },
      { matn: "Prezidentning uchala hokimiyatni muvofiqlashtiruvchi rolini kamaytirish", correct: false }
    ]
  },
  {
    id: 564,
    savol: "Amudaryoning qadimiy nomini belgilang.",
    javob: [
      { matn: "Yaksart", correct: false },
      { matn: "Tanais", correct: false },
      { matn: "Oks", correct: true },
      { matn: "Politimet", correct: false }
    ]
  },
  {
    id: 565,
    savol: "Hozirgi amalda bo‘lgan mahalliy vakillik organlari qaysi sobiq davlat organi negizida tashkil etildi?",
    javob: [
      { matn: "Tuman Kommunistik partiyalari", correct: false },
      { matn: "Xalq deputatlari Sovetlari", correct: true },
      { matn: "Mahalla Komitetlari", correct: false },
      { matn: "Viloyat KomPartiyalari", correct: false }
    ]
  },
  {
    id: 566,
    savol: "Makedoniyalik Aleksandr bosib olgan hududda o‘z hukmronligini mustahkamlash maqsadida qanday usulni amalga oshirgan?",
    javob: [
      { matn: "Bosib olingan shaharlarga yunonlarni joylashtirdi", correct: true },
      { matn: "Zodagonlarni pul evaziga sotib oldi", correct: false },
      { matn: "Mahalliy dinlarni butunlay taqiqladi", correct: false },
      { matn: "Aholiga yunon xudolariga sig'inishni majbur qildi", correct: false }
    ]
  },
  {
    id: 567,
    savol: "Qaysi voqeadan so‘ng Yunon-Baqtriya davlati tarixi boshlanadi?",
    javob: [
      { matn: "Salavkiylar davlati parchalanib ketganidan keyin", correct: false },
      { matn: "Antioxning vafot etishidan so‘ng", correct: false },
      { matn: "Diodot o‘zini podsho deb e’lon qilganidan keyin", correct: true },
      { matn: "Salavkiylardan Parfiyaning ajralib chiqishidan so‘ng", correct: false }
    ]
  },
  {
    id: 568,
    savol: "O‘zbekiston Respublikasining Konstitutsiyasiga muvofiq, mahalliy davlat hokimiyati qaysi ikki mustaqil organga bo‘lindi?",
    javob: [
      { matn: "O’zini o’zi boshqarish va hokimlik boshqaruviga", correct: false },
      { matn: "Vakillik va ijroiya hokimiyatiga", correct: true },
      { matn: "Qonun tashabbuskorligi va ijro etuvchi organlarga", correct: false },
      { matn: "Xalq deputatlari kengashi va o’zini o’zi boshqarish organlariga", correct: false }
    ]
  },
  {
    id: 569,
    savol: "Makedoniyalik Aleksandrga O’rta Osiyoda bo’ysunmagan hududlarni ko’rsating:",
    javob: [
      { matn: "Bekobod va Xorazm", correct: false },
      { matn: "Xorazm va Marg‘iyona", correct: false },
      { matn: "Toshkent va Farg‘ona", correct: true },
      { matn: "Xo‘jand va Farg‘ona", correct: false }
    ]
  },
  {
    id: 570,
    savol: "O’zbekistonda mustaqillik yillarida tashkil etilgan ilk siyosiy partiya qaysi?",
    javob: [
      { matn: "Vatan taraqqiyoti demokratik partiyasi", correct: false },
      { matn: "Xalq demokratik partiyasi", correct: true },
      { matn: "Milliy tiklanish demokratik partiyasi", correct: false },
      { matn: "Adolat sotsial demokratik partiyasi", correct: false }
    ]
  },
  {
    id: 571,
    savol: "Makedoniyalik Aleksandr qo’shinlarining bosqinchilik yurishlari qanday oqibatlarga olib keldi?",
    javob: [
      { matn: "Hunarmandchilikning yangicha tarmoqlari vujudga keldi", correct: false },
      { matn: "O‘rta Osiyo yerlari xarobazorga aylandi, ko‘plab shaharlar vayron etildi", correct: true },
      { matn: "Aholining eng quyi qatlami boshqaruvga keldi", correct: false },
      { matn: "Savdo-sotiq mislsiz darajada rivojlandi", correct: false }
    ]
  },
  {
    id: 572,
    savol: "Quyidagi partiyalardan qay biri O’zbekiston Respublikasi Prezidentligiga saylovlarda 5 marta ishtirok etgan?",
    javob: [
      { matn: "Liberal-demokratik partiya", correct: false },
      { matn: "Xalq demokratik partiyasi", correct: true },
      { matn: "Milliy tiklanish demokratik partiyasi", correct: false },
      { matn: "Adolat sotsial demokratik partiyasi", correct: false }
    ]
  },
  {
    id: 573,
    savol: "O’rta Osiyoda Makedoniyalik Aleksandrga qarshi kurash olib borgan xalq qahramoni qaysi qatorda to’g’ri ko’rsatilgan?",
    javob: [
      { matn: "Shiroq", correct: false },
      { matn: "To’maris", correct: false },
      { matn: "Spitaman", correct: true },
      { matn: "Skunxa", correct: false }
    ]
  },
  {
    id: 574,
    savol: "Toshkentning qadimgi nomi qaysi javobda to’g’ri ko’rsatilgan?",
    javob: [
      { matn: "Eloq", correct: false },
      { matn: "Choch", correct: true },
      { matn: "Maroqand", correct: false },
      { matn: "Tunkat", correct: false }
    ]
  },
  {
    id: 575,
    savol: "Masjidga kelib ibodat qiluvchilar uchun ikki dirhamdan pul hadya etishni joriy qilgan xalifalik noibini aniqlang.",
    javob: [
      { matn: "Nasr ibn Sayyor", correct: false },
      { matn: "Qutayba ibn Muslim", correct: true },
      { matn: "Ubaydulloh ibn Ziyod", correct: false },
      { matn: "Said Xaroshiy", correct: false }
    ]
  },
  {
    id: 576,
    savol: "Arablar Movarounnahrda o‘rnatilgan siyosiy hokimiyatni mustahkamlashda qanday tadbirga alohida ahamiyat berdilar?",
    javob: [
      { matn: "Tarqoq mahalliy hokimliklarni kuch bilan birlashtirishga", correct: false },
      { matn: "Aholi o‘rtasida islom dinini yagona din sifatida yoyishga", correct: true },
      { matn: "Soliqlarni vaqtida yig‘ib olishga", correct: false },
      { matn: "Qo‘zg‘olonlarni kelishuvlarsiz bostirishga", correct: false }
    ]
  },
  {
    id: 577,
    savol: "Harakatlar strategiyasining har bir bosqichining amalga oshirilishiga qanday muddat belgilangan?",
    javob: [
      { matn: "Har bir bosqich uchun 2 yil", correct: false },
      { matn: "Har bir bosqich uchun 1 yil belgilangan", correct: true },
      { matn: "Dastlabki uch bosqich uchun 5 yil", correct: false },
      { matn: "Birinchi ikki bosqich uchun 1 yildan", correct: false }
    ]
  },
  {
    id: 578,
    savol: "Quyidagi qaysi davlatning poytaxti Yangikent shahri bo‘lgan?",
    javob: [
      { matn: "Qorluqlar davlati", correct: false },
      { matn: "O‘g‘uzlar davlati", correct: true },
      { matn: "Qoraxoniylar davlati", correct: false },
      { matn: "Qoraxitoylar davlati", correct: false }
    ]
  },
  {
    id: 579,
    savol: "G‘aznaviylar davlatida bosh vazirga bo‘ysunuvchi qanday devonlar (vazirliklar) bo‘lgan?",
    javob: [
      { matn: "Tashqi ishlar, ichki ishlar, madaniyat", correct: false },
      { matn: "Harbiy, elchilik, rasmiy tadbirlar, moliya, xabar-pochta", correct: true },
      { matn: "Soliq, harbiy ishlar, madaniyat", correct: false },
      { matn: "Moliya, tashqi aloqalar, hashar", correct: false }
    ]
  },
  {
    id: 580,
    savol: "Qaysi hujjatda 1-sentabr O‘zbekiston Respublikasining Mustaqillik kuni deb belgilangan?",
    javob: [
      { matn: "O’zbekiston Respublikasi Konstitutsiyasida", correct: false },
      { matn: "“O‘zbekiston Respublikasining davlat mustaqilligini e’lon qilish to‘g‘risida”gi Oliy Kengash qarorida", correct: true },
      { matn: "“O’zbekiston Respublikasining davlat mustaqilligi asoslari to’g’risida”gi qonunda", correct: false },
      { matn: "“Mustaqillik Deklaratsiyasi”da", correct: false }
    ]
  },
  {
    id: 581,
    savol: "Kushоnlаr sulоlаsining dаstlаbki pоytахti qаysi shаhаr bo’lgаn?",
    javob: [
      { matn: "Choch", correct: false },
      { matn: "Dalvarzintepa", correct: true },
      { matn: "Zartepa", correct: false },
      { matn: "Qorovultepa", correct: false }
    ]
  },
  {
    "id": 582,
    "savol": "Quyidagi tarixiy jarayonlardan qaysi biri haqiqatga to’g’ri keladi",
    "javob": [
      {
        "matn": "O’zbekiston respublikasi Konstitutsiyasi ,,O’zbekiston respublikasining davlat mustaqilligi asoslari to’g’risidagi’’ qonun o’zbekiston respublikasi mudofaa ishlari vazirligini tuzish to’g’risidagi farmonda mustahkamlangan tamoyillar va g’oyalarni o’zida to’la mujassamlashtiradi.",
        "correct": false
      },
      {
        "matn": "O’zbekiston Respublikasi Konustitutsiyasini yaratish komissiyasi tarkibiga oliy kengash deputatlari davlat vtashkilotlari xalqaro huquq mutaxasislari va xorijiy ekspertlar kiritildi",
        "correct": false
      },
      {
        "matn": "O’zbekiston Respublikasi Konstitutsiyasi loyihasi ustida ishlagan komissiya Davlat ramzlarini yaratish bo’yicha ham ish olib bordi",
        "correct": true
      },
      {
        "matn": "1992-yilning bahor oylarida o’zbekiston respublikasining konstitutsiyasi loyihasi umumxalq muhokamasi uchun 2-marta televideniyada e’lon qilindi.",
        "correct": false
      }
    ]
  },
  {
    "id": 583,
    "savol": "Mo‘g‘ul hukmdorlari orasida kim birinchi bo‘lib o‘z qarorgohini Movarounnahrga (Qarshiga) ko‘chiradi?",
    "javob": [
      {
        "matn": "Chig‘atoy",
        "correct": false
      },
      {
        "matn": "Kebekxon",
        "correct": true
      },
      {
        "matn": "Munke",
        "correct": false
      },
      {
        "matn": "Tug‘luq Temur",
        "correct": false
      }
    ]
  },
  {
    "id": 584,
    "savol": "Chingizxon istilo qilgan hududlardan Movarounnahrni qaysi o’g’liga ulus qilib bergan edi?",
    "javob": [
      {
        "matn": "Tulu",
        "correct": false
      },
      {
        "matn": "Jo’ji",
        "correct": false
      },
      {
        "matn": "Chig’atoy",
        "correct": true
      },
      {
        "matn": "O’qtoy",
        "correct": false
      }
    ]
  },
  {
    "id": 585,
    "savol": "Quyidagi qaysi atama mo‘g‘ulchada “nazoratchi”, “shahar boshlig‘i” degan ma’nolarni bildiradi?",
    "javob": [
      {
        "matn": "Dorug‘a",
        "correct": true
      },
      {
        "matn": "Bosqoq",
        "correct": false
      },
      {
        "matn": "Noib",
        "correct": false
      },
      {
        "matn": "Tavg‘ach",
        "correct": false
      }
    ]
  },
  {
    "id": 586,
    "savol": "Amir Temur tug‘ilgan Xo‘jailg‘or qishlog‘i hozirda qaysi tumanda joylashgan?",
    "javob": [
      {
        "matn": "Qarshi",
        "correct": false
      },
      {
        "matn": "Kitob",
        "correct": false
      },
      {
        "matn": "Yakkabog‘",
        "correct": true
      },
      {
        "matn": "Shahrisabz",
        "correct": false
      }
    ]
  },
  {
    "id": 587,
    "savol": "Ma’lumki, Amir Temur o‘limidan oldin mamlakatni o‘g‘illari va nabiralariga suyurg‘ol tarzida bo‘lib beradi. Suyurg‘ol egalarining markaziy hukumatga tobeligi nimalardan iborat edi?",
    "javob": [
      {
        "matn": "Tashqi aloqalarni Amir Temur ruxsatisiz olib borishi mumkin bo‘lmagan va o‘z hududidan yig‘iladigan barcha soliqlarning 3/4 qismini murkaziy hukumat xazinasiga jo‘natgan",
        "correct": false
      },
      {
        "matn": "Hirojning bir qismini Samarqandga yuborib turish, oliy hukmdorning harbiy yurishlarida o‘z qo‘shini bilan qatnashish yoki belgilangan askarni yig‘ib berish",
        "correct": true
      },
      {
        "matn": "O‘z hududidan yig‘iladigan barcha soliqlarning yarmini murkaziy hukumat xazinasiga jo‘natgan, Samarqandda bo‘ladigan har yilgi hasharlarda o‘z odamlarining ishtirokini ta’minlash",
        "correct": false
      },
      {
        "matn": "boshqa mamlakatlar bilan aloqa qilmaslik, har oyda oliy hukumat dargohida hosobot berib turish va aholidan yig‘ilgan soliqlarni hukumat xazinasiga yuborish",
        "correct": false
      }
    ]
  },
  {
    "id": 588,
    "savol": "Amir Temur davrida askariy qismlarni viloyatlardan to‘plash bilan qaysi mansabdagi amaldor shug‘ulangan?",
    "javob": [
      {
        "matn": "Bahodir",
        "correct": false
      },
      {
        "matn": "Tavochi",
        "correct": true
      },
      {
        "matn": "Sohibi Surat",
        "correct": false
      },
      {
        "matn": "Sarxang",
        "correct": false
      }
    ]
  },
  {
    "id": 589,
    "savol": ",,To’rt ulus tarixi’’ asarining muallifi kim?",
    "javob": [
      {
        "matn": "Abdurazzoq Samarqandiy",
        "correct": false
      },
      {
        "matn": "Ali Yazdiy",
        "correct": false
      },
      {
        "matn": "Alisher Navoiy",
        "correct": false
      },
      {
        "matn": "Mirzo Ulug‘bek",
        "correct": true
      }
    ]
  },
  {
    "id": 590,
    "savol": "Somоniylаr dаvlаtining pоytахti qаysi jаvоbdа to’g’ri ko’rsаtilgаn?",
    "javob": [
      {
        "matn": "Toshkent",
        "correct": false
      },
      {
        "matn": "Buхоrо shаhri",
        "correct": true
      },
      {
        "matn": "Mаrv shаhri",
        "correct": false
      },
      {
        "matn": "Tеrmiz shаhri",
        "correct": false
      }
    ]
  },
  {
    "id": 591,
    "savol": "Vazirlar Mahkamasi tashkil etilganda unga rahbarlik qilish va uning ishini uyushtirish vazifasi qaysi organga berildi?",
    "javob": [
      {
        "matn": "Prezidentga",
        "correct": false
      },
      {
        "matn": "Bosh vazirga",
        "correct": false
      },
      {
        "matn": "Vitse-prezidentga",
        "correct": true
      },
      {
        "matn": "Prezident va Vitse-prezidentga",
        "correct": false
      }
    ]
  },
  {
    "id": 592,
    "savol": "Quyidagi qaysi shaxs O’zbekistonda Vitse-prezident lavozimida ishlagan?",
    "javob": [
      { "matn": "O‘. Sultonov", "correct": false },
      { "matn": "A.Mutalov", "correct": false },
      { "matn": "Sh. Mirsamadov", "correct": false },
      { "matn": "Sh. Mirsaidov", "correct": true }
    ]
  },
  {
    "id": 593,
    "savol": "O’zbekiston Respublikasining birinchi Bosh vaziri qaysi qatorda to’g’ri ko’rsatilgan?",
    "javob": [
      { "matn": "O‘. Sultonov", "correct": false },
      { "matn": "A.Mutalov", "correct": true },
      { "matn": "Sh. Mirsamadov", "correct": false },
      { "matn": "Sh. Mirsaidov", "correct": false }
    ]
  },
  {
    "id": 594,
    "savol": "O’zbekiston Bosh vazirlarining eng ko’p faoliyat ko’rsatgan muddatiga qarab ketma-ketlikda joylashtiring. 1) Abdulhoshim Mutalov; 2) Oʻtkir Sultonov; 3) Shavkat Mirziyoyev; 4) Abdulla Aripov.",
    "javob": [
      { "matn": "3, 1, 4, 2", "correct": false },
      { "matn": "3, 2, 1, 4", "correct": true },
      { "matn": "3, 1, 2, 4", "correct": false },
      { "matn": "3, 4, 2, 1", "correct": false }
    ]
  },
  {
    "id": 595,
    "savol": "Musavvirlikda “Hirot maktabi” deb nomlangan yangi uslubning asoschisini aniqlang.",
    "javob": [
      { "matn": "Mahmud Muzahhib", "correct": false },
      { "matn": "Kamoliddin Behzod", "correct": true },
      { "matn": "Alisher Navoiy", "correct": false },
      { "matn": "Abdullo Xotifiy", "correct": false }
    ]
  },
  {
    "id": 596,
    "savol": "Sovet hukumatining rahbari V.I.Leninning buyrug‘i bilan O‘rta Osiyoning favqulodda komissari qilib jo‘natilgan shaxsni aniqlang.",
    "javob": [
      { "matn": "F.Kobozev", "correct": true },
      { "matn": "F.Kolesov", "correct": false },
      { "matn": "Y.Perfilev", "correct": false },
      { "matn": "P.Korovichenko", "correct": false }
    ]
  },
  {
    "id": 597,
    "savol": "Urushdab keyingi yillarda O‘zbekiston sanoatini tiklash uchun Markaz qanday tamoyil asosida harakat qildi?",
    "javob": [
      { "matn": "O‘zbekistonning geografik holati va tabiiy inkoniyatlaridan kelib chiqib reja tuzildi", "correct": false },
      { "matn": "O‘zbekistonga qo‘shni mamlakatlar va ko‘pmillatli aholi manfaatidan kelib chiqib reja qilindi", "correct": false },
      { "matn": "Markaz manfaatidan kelib chiqqan holda reja tuzildi", "correct": true },
      { "matn": "O‘zbekiston rahbarlari fikrlari inobatga olingan holda reja tuzildi", "correct": false }
    ]
  },
  {
    "id": 598,
    "savol": "O‘zbekiston iqtisodiyotining bir tomonlama rivojlanishiga Markazning qanday siyosati sabab bo‘lgan edi?",
    "javob": [
      { "matn": "O‘zbekistonga xomashyo yetkazib beruvchi chekka hudud deb qaraganligi", "correct": true },
      { "matn": "O‘zbekiston rahbarlari fikrlari inobatga olingan holda reja tuzildi", "correct": false },
      { "matn": "Ko‘plab GES va GRESlarning qurilishi", "correct": false },
      { "matn": "O‘zbekistonga ishchi kuchi ko‘p va arzon bo‘lgan mamlakat sifatida qaraganligi", "correct": false }
    ]
  },
  {
    "id": 599,
    "savol": "Guliston shahrining dastlabki nomini toping.",
    "javob": [
      { "matn": "Zafarabod", "correct": false },
      { "matn": "Oq oltin", "correct": false },
      { "matn": "Mirzacho‘l", "correct": true },
      { "matn": "Sovetobod", "correct": false }
    ]
  },
  {
    "id": 600,
    "savol": "O‘zbekistonning qaysi rahbari mamlakat kadrlarini mahalliylashtirgani va islom diniga erkinlik berganligi uchun Markaz tomonidan vazifasida ozod qilingan edi?",
    "javob": [
      { "matn": "Inomjon Usmonxo‘jayev", "correct": false },
      { "matn": "Sobir Kamolov", "correct": true },
      { "matn": "Yodgor Nasriddinova", "correct": false },
      { "matn": "Nazar Matchonov", "correct": false }
    ]
  },
  {
    "id": 601,
    "savol": "Urushdan keyingi besh yillik (birinchi va ikkinchi) rejalarda iqtisodiyotni rivojlantirishdagi kapitallar asosan qaysi sohaga sarflandi?",
    "javob": [
      { "matn": "Yengil sanoatga", "correct": false },
      { "matn": "Og‘ir sanoatga", "correct": true },
      { "matn": "Qishloq xo‘jaligiga", "correct": false },
      { "matn": "Ilm-fanga", "correct": false }
    ]
  },
  {
    "id": 602,
    "savol": "Butun Sharqda parlament raisi bo‘lgan birinchi o’zbek ayol nomini toping.",
    "javob": [
      { "matn": "J.Obidova", "correct": false },
      { "matn": "Z.Mahmudova", "correct": false },
      { "matn": "Yo.Nasriddinova", "correct": true },
      { "matn": "T.Shodiyeva", "correct": false }
    ]
  },
  {
    "id": 603,
    "savol": "N.Xrushchev tomonidan O‘zbekiston hukumati raisligidan olinib, Mirzacho‘ldagi “4-Boyovut” sovxoziga direktor qilib jo‘natilgan shaxsni aniqlang.",
    "javob": [
      { "matn": "Sobir Kamolov", "correct": false },
      { "matn": "Usmon Yusupov", "correct": true },
      { "matn": "Nuriddin Muhiddinov", "correct": false },
      { "matn": "Amin Niyozov", "correct": false }
    ]
  },
  {
    "id": 604,
    "savol": "“Paxta ishi” bo‘yicha 1983-yil SSSR Bosh prokurori huzurida tuzilgan maxsus tergovchilarning qaysilar O‘zbekistonga yuborilgan edi?",
    "javob": [
      { "matn": "T.Gdlyan va N.Ivanov", "correct": true },
      { "matn": "K.Chernenko va A.Gromiko", "correct": false },
      { "matn": "Y.Andropov va N.Ivanov", "correct": false },
      { "matn": "A.Nikitin va Y.Ligachyov", "correct": false }
    ]
  },
  {
    "id": 605,
    "savol": "XX asr 80-yillarida “Sharof Rashidovchilik” iborasi o‘ylab topilgan bo‘lib, uning mazmuni nima edi?",
    "javob": [
      { "matn": "Sh.Rashidov bilan birga ishlagan kadrlarning barchasini qatag‘on qilish", "correct": false },
      { "matn": "Sh.Rashidov ish faoliyatini ommalashtirish", "correct": false },
      { "matn": "Sh.Rashidov o‘limidan keyin uni badnom qilish va shunhratini yerga urish", "correct": true },
      { "matn": "Sh.Rashidovning boshqaruv ishlari, uslubi asosida “qayta qurish” siyosatini amalga oshirish", "correct": false }
    ]
  },
  {
    "id": 606,
    "savol": "Birinchi Prezident Islom Karimov qachon O‘zbekiston Kompartiyasi Markaziy Komitetining birinchi sekretari qilib saylandi?",
    "javob": [
      { "matn": "1990-yil 24-mart", "correct": false },
      { "matn": "1989-yil 12-iyun", "correct": false },
      { "matn": "1990-yil 20-may", "correct": false },
      { "matn": "1989-yil 23-iyun", "correct": true }
    ]
  },
  {
    "id": 607,
    "savol": "1991-yil 19–21-avgust kunlari Moskvada ro‘y bergan davlat to‘ntarishi sharoitida O’zbekiston o’z hududiy yaxlitligi, aholi tinchligini himoya qilish yo‘lidagi ilk qadami qaysi qatorda to’g’ri ko’rsatilgan?",
    "javob": [
      { "matn": "Respublika Kompartiyasining KPSS MQ bilan har qanday aloqasini to‘xtatish to’g’risida Bayonot qabul qildi", "correct": false },
      { "matn": "O‘zbekiston Ichki ishlar vazirligi, Davlat xavfsizligi komiteti O’zbekiston SSRning tasarrufiga olindi", "correct": true },
      { "matn": "KPSSning barcha tashkilotlaridan chiqish va qisqa muddatda Respublikaning davlat mustaqilligi to‘g‘risidagi qonun loyihasini tayyorlashga topshiriq berildi", "correct": false },
      { "matn": "O’zbekiston KPSSning Markaziy organlaridagi o‘z vakillarini chaqirib oldi", "correct": false }
    ]
  },
  {
    "id": 608,
    "savol": "1991-yil 20-avgustda imzolanishi kerak bo‘lgan Yangi Ittifoq shartnomasi nima sababdan imzolanmay qoldi?",
    "javob": [
      { "matn": "Butun mamlakat bo‘ylab fuqarolar urushining avj olganligi sababli", "correct": false },
      { "matn": "Moskvada 19 –21 avgust kunlari davlat to‘ntarilishining amalga oshirishi tufayli", "correct": true },
      { "matn": "Ittifoqdosh respublikalarning barchasida referendum o‘tkazilishiga ulgurilmaganligi sababli", "correct": false },
      { "matn": "“9+1” shartnomasining tuzilganligi va bu shartnoma shartlarida Yangi Ittifoq shartnomasi keltirilmaganligi sababli", "correct": false }
    ]
  },
  {
    "id": 609,
    "savol": "Zahiriddin Muhammad Bobur Amir Temurning qaysi o‘g‘li avlodi hisoblanadi?",
    "javob": [
      { "matn": "Mirzo Jahongir", "correct": false },
      { "matn": "Mironshoh Mirzo", "correct": true },
      { "matn": "Umarshayx Mirzo", "correct": false },
      { "matn": "Shohrux Mirzo", "correct": false }
    ]
  },
  {
    "id": 610,
    "savol": "Muhammad Shayboniyxon nechanchi yilda tug‘ilgan?",
    "javob": [
      { "matn": "1461-yil", "correct": false },
      { "matn": "1456-yil", "correct": false },
      { "matn": "1449-yil", "correct": false },
      { "matn": "1451-yil", "correct": true }
    ]
  },
  {
    "id": 611,
    "savol": "Buxoro xonligida ashtarxoniylar davrida xondan keying o‘rinda bo’lib, shahzodalarga tarbiyachilik qilgan lavozim egasi kim?",
    "javob": [
      { "matn": "Devonbegi", "correct": false },
      { "matn": "Qo‘shbegi", "correct": false },
      { "matn": "Otaliq", "correct": true },
      { "matn": "Naqib", "correct": false }
    ]
  },
  {
    "id": 612,
    "savol": "Buxoro amirlaridan qaysi biri din ulamosi bo’lib, pichoqqa qin yasab sotib, shu orqali ro‘zg‘or tebratgan?",
    "javob": [
      { "matn": "Amir Haydar", "correct": false },
      { "matn": "Doniyolbiy", "correct": false },
      { "matn": "Shohmurod", "correct": true },
      { "matn": "Nasrullo", "correct": false }
    ]
  },
  {
    "id": 613,
    "savol": "Markaziy Osiyoda mil. avv. VII-VI asrlarda mavjud bo‘lgan Ko‘zaliqir shahri qaysi davlatning markazlaridan biri bo‘lgan?",
    "javob": [
      { "matn": "Qadimgi Sug’dning", "correct": false },
      { "matn": "Qadimgi Xorazmning", "correct": true },
      { "matn": "Qadimgi Parkananing", "correct": false },
      { "matn": "Marg‘iyonaning", "correct": false }
    ]
  },
  {
    "id": 614,
    "savol": "Quyidagilardan milodiy II asrda yashagan qadimgi yunon tarixchisini aniqlang.",
    "javob": [
      { "matn": "Arrian", "correct": true },
      { "matn": "Ktesiy", "correct": false },
      { "matn": "Strabon", "correct": false },
      { "matn": "Kvint Kursiy Ruf", "correct": false }
    ]
  },
  {
    "id": 615,
    "savol": "Xorazmda shaharsozlikning boshlanishi ....",
    "javob": [
      { "matn": "mil. avv. VII asrga borib taqaladi", "correct": true },
      { "matn": "mil. avv. VIII asrga borib taqaladi", "correct": false },
      { "matn": "Ahamoniylar davri bilan bog‘liqdir", "correct": false },
      { "matn": "ellinizm davriga borib taqaladi", "correct": false }
    ]
  },
  {
    "id": 616,
    "savol": "Sho‘rabashat ko‘hna shahri xarobalari qayerda joylashganligini aniqlang.",
    "javob": [
      { "matn": "So‘g‘diyonada", "correct": false },
      { "matn": "Baqtriyada", "correct": false },
      { "matn": "Xorazmda", "correct": false },
      { "matn": "Farg‘onada", "correct": true }
    ]
  },
  {
    "id": 617,
    "savol": "Dovon davlati barham topgan asrni aniqlang.",
    "javob": [
      { "matn": "milodiy I asrda", "correct": false },
      { "matn": "milodiy II asrda", "correct": true },
      { "matn": "mil.avv. II asrda", "correct": false },
      { "matn": "milodiy III asrda", "correct": false }
    ]
  },
  {
    "id": 618,
    "savol": "Quyidagi qaysi yodgorlik Buxoro viloyatida joylashgan?",
    "javob": [
      { "matn": "Jarqo’ton", "correct": false },
      { "matn": "Namozgoh", "correct": false },
      { "matn": "Zamonbobo", "correct": true },
      { "matn": "Sopollitepa", "correct": false }
    ]
  },
  {
    "id": 619,
    "savol": "Quyidagi yodgorliklardan qaysi birida aylana shaklda qurilgan mustahkam ibodatxona qoldiqlari topilgan?",
    "javob": [
      { "matn": "Qo‘yqirilganqal’a", "correct": true },
      { "matn": "Tuproqqal’a", "correct": false },
      { "matn": "Ko‘zaliqir", "correct": false },
      { "matn": "Uzunqir", "correct": false }
    ]
  },
  {
    "id": 620,
    "savol": "O‘rta Osiyodagi ilk ibodatxona qoldiqlari qaysi manzilgohdan topilgan?",
    "javob": [
      { "matn": "Sopollitepa", "correct": false },
      { "matn": "Jarqo‘ton", "correct": true },
      { "matn": "Zamonbobo", "correct": false },
      { "matn": "Qiziltepa", "correct": false }
    ]
  },
  {
    "id": 621,
    "savol": "Toshkent viloyatining Ohangaron daryosi vodiysidan topilgan qadimgi aholi manzilgohini aniqlang.",
    "javob": [
      { "matn": "Obishir", "correct": false },
      { "matn": "Qo‘shilish", "correct": false },
      { "matn": "Ko‘lbuloq", "correct": true },
      { "matn": "Shoshtepa", "correct": false }
    ]
  },
  {
    "id": 622,
    "savol": "Kushon davri me’morchiligida asosiy e’tibor nimaga qaratilgan edi?",
    "javob": [
      { "matn": "ko‘priklar va hukmdorlar qarorgohlari qurilishiga", "correct": false },
      { "matn": "saroylar va ibodatxonalar qurilishiga", "correct": true },
      { "matn": "qal’alar va qo‘rg‘onlar qurilishiga", "correct": false },
      { "matn": "turar-joy binolari va hunarmandchilik mahallalari bunyod etishga", "correct": false }
    ]
  },
  {
    "id": 623,
    "savol": "Qang‘ (Qang‘uy) davlati dastlab tashkil topgan paytida uning chegaralari hozirgi qaysi hududlarni egallagan?",
    "javob": [
      { "matn": "Toshkent vohasi va Xorazm hududlarini", "correct": false },
      { "matn": "Toshkent vohasi, janubiy Qozog’iston va Sirdaryo bo‘yi hududlarini", "correct": true },
      { "matn": "Toshkent vohasi, Dovon va So‘g‘d yerlarini", "correct": false },
      { "matn": "Dovon, Chimkent va Xorazm yerlarini", "correct": false }
    ]
  },
  {
    "id": 624,
    "savol": "O‘zbekiston hududidagi qadimgi shaharlar joylashgan o‘rni noto‘g‘ri berilgan javobni aniqlang.",
    "javob": [
      { "matn": "Uzunqir Qashqadaryo viloyatida", "correct": false },
      { "matn": "Qiziltepa Surxondaryo viloyatida", "correct": false },
      { "matn": "Ko‘zaliqir Xorazm viloyatida", "correct": false },
      { "matn": "Yerqo‘rg‘on Farg‘ona viloyatida", "correct": true }
    ]
  },
  {
    "id": 625,
    "savol": "Zardushtiylik ta’limotiga ko‘ra borliq va bizni qurshab olgan hamma narsa qanday ikki ibtidodan yaralgan?",
    "javob": [
      { "matn": "suv va havo", "correct": false },
      { "matn": "ezgulik va yovuzlik", "correct": true },
      { "matn": "olov va tuproq", "correct": false },
      { "matn": "o‘lim va hayot", "correct": false }
    ]
  },
  {
    "id": 626,
    "savol": "O‘rta Osiyodagi mil. av. V-IV asrlarga oid bo‘lgan manzilgohni aniqlang.",
    "javob": [
      { "matn": "Qo’yqirilganqal’a", "correct": false },
      { "matn": "Oybo‘yirqal’a", "correct": true },
      { "matn": "Zartepa", "correct": false },
      { "matn": "Varaxsha", "correct": false }
    ]
  },
  {
    "id": 627,
    "savol": "O‘rta Osiyo bo‘yicha eng qadimgi yozuvlar topilgan manzilgohlarni aniqlang.",
    "javob": [
      { "matn": "Oltintepa, Namozgoh", "correct": false },
      { "matn": "Oybo‘yirqal’a, Qo‘yqirilganqal’a", "correct": true },
      { "matn": "Sopollitepa, Dalvarzin", "correct": false },
      { "matn": "Afrosiyob, Yerqo‘rg‘on", "correct": false }
    ]
  },
  {
    "id": 628,
    "savol": "Quyidagi manzilgohlarning hududiy jihatdan joylashuvi to‘g‘ri ko‘rsatilgan javobni aniqlang. a) Zamonbobo b) Uzunqir c) Qiziltepa d) Ko‘zaliqir 1) Qashqadaryoda 2) Surxondaryoda 3) Xorazmda 4) Buxoroda",
    "javob": [
      { "matn": "1-a; 2-b; 3-c; 4-d", "correct": false },
      { "matn": "1-b; 2-c; 3-a; 4-d", "correct": false },
      { "matn": "1-b; 2-c; 3-d; 4-a", "correct": true },
      { "matn": "1-c; 2-b; 3-a; 4-d", "correct": false }
    ]
  },
  {
    "id": 629,
    "savol": "O‘zbekiston hududidagi qadimgi shaharlar nomi to‘g‘ri keltirilgan javob variantini aniqlang.",
    "javob": [
      { "matn": "Oltintepa, Uzunqir, Ko‘zaliqir", "correct": false },
      { "matn": "Sarazm, Ko‘ktepa, Jarqo‘ton", "correct": false },
      { "matn": "Qiziltepa, Yerqo‘rg‘on, Uzunqir", "correct": true },
      { "matn": "Bolaliktepa, Oltintepa, Qiziltepa", "correct": false }
    ]
  },
  {
    "id": 630,
    "savol": "O‘zbekiston tarixi bo‘yicha eng qadimgi yozma manbalar ketma-ketligi to‘g‘ri keltirilgan javobni aniqlang.",
    "javob": [
      { "matn": "“Avesto”, shumer yozuvlari, Gerodotning “Tarix” asari, Behustun yozuvlari", "correct": false },
      { "matn": "“Avesto”, Behustun yozuvlari, Gerodotning “Tarix” asari, Yunon-rim manbalari", "correct": true },
      { "matn": "Ramayana, “Avesto”, Yunon-rim manbalari, Persopol yozuvlari", "correct": false },
      { "matn": "“Avesto”, Yunon-rim manbalari, Xitoy solnomalari", "correct": false }
    ]
  },
  {
    "id": 631,
    "savol": "Amir Temurning 1395-yilda To‘xtamish ustidan qozongan g‘alabasi nimaga xizmat qilgan?",
    "javob": [
      { "matn": "Yetti yillik urushning g‘alaba bilan yakunlanishiga", "correct": false },
      { "matn": "rus knyazliklarining birlashishiga", "correct": true },
      { "matn": "Rossiya bilan diplomatik va savdo aloqalarining o‘rnatilishiga", "correct": false },
      { "matn": "Amir Temurning Hindiston yurishiga tayyorgarlik ishlariga", "correct": false }
    ]
  },
  {
    "id": 632,
    "savol": "X asr oxirida somoniylar davlatining zaiflashishiga nima sabab bo‘lgan?",
    "javob": [
      { "matn": "dindorlar hokimiyatining kuchayishi", "correct": false },
      { "matn": "qurg‘oqchilik, hosilsizlik", "correct": false },
      { "matn": "mahalliy hukmdor va yirik mulkdorlarning markaziy hokimiyatga qarshi kurashi", "correct": true },
      { "matn": "aholining mahalliy hukmdorlarga qarshi qo‘zg‘oloni", "correct": false }
    ]
  },
  {
    "id": 633,
    "savol": "VIII asrning birinchi choragida qaysi Xuroson noibiga so‘g‘dliklar qo‘zg‘olonini bostirish va ularni islomga qaytarish vazifasi yuklatilgan?",
    "javob": [
      { "matn": "Said Xoroshiyga", "correct": true },
      { "matn": "Nasr ibn Sayyorga", "correct": false },
      { "matn": "Umar ibn Abdulazizga", "correct": false },
      { "matn": "Marvon II ga", "correct": false }
    ]
  },
  {
    "id": 634,
    "savol": "Xuroson noibi bo‘lgan Nasr ibn Sayyor mamlakatda o‘z mavqeini mustahkamlash uchun ....",
    "javob": [
      { "matn": "islomga e’tiqod qiluvchilarni xirojdan ozod qildi.", "correct": false },
      { "matn": "moliya islohoti o‘tkazdi", "correct": true },
      { "matn": "musulmon olamidagi ilk harbiy islohotlarni amalga oshirdi.", "correct": false },
      { "matn": "o‘ziga tayanch kuch sifatida Iroqdan yirik yer egalarini Movarounnahrga ko‘chirib keltirdi", "correct": false }
    ]
  },
  {
    "id": 635,
    "savol": "575-576-yillarda turkiy xalqlar qaysi hududlardagi bepoyon yerlarni egallaganlar?",
    "javob": [
      { "matn": "Shimoliy Kavkazdagi", "correct": true },
      { "matn": "Janubiy Kavkazdagi", "correct": false },
      { "matn": "Tohariston va Chag‘oniyondagi", "correct": false },
      { "matn": "Yoyiq va Itil daryosi oralig‘idagi", "correct": false }
    ]
  },
  {
    "id": 636,
    "savol": "Eftaliylar davrida qaysi davlat hukumdorlari o‘z saroylarini O‘rta Osiyodan keltirilgan rangli shishalar bilan bezatganlar?",
    "javob": [
      { "matn": "Eron shahanshohlari", "correct": false },
      { "matn": "Xitoy imperatorlari", "correct": true },
      { "matn": "Vizantiya imperatorlari", "correct": false },
      { "matn": "Hindiston rojalari", "correct": false }
    ]
  },
  {
    "id": 637,
    "savol": "Turkiylar 563-yilda Eftaliylar davlati yerlariga bostirib kirganlarida kimlarning Balxga hujumi ko‘magidan foydalanganlar?",
    "javob": [
      { "matn": "Toxariston malikshohlarining", "correct": false },
      { "matn": "Eron askarlarining", "correct": true },
      { "matn": "Xitoy harbiylarining", "correct": false },
      { "matn": "Afg‘oniston qo‘shinlarining", "correct": false }
    ]
  },
  {
    "id": 638,
    "savol": "Quyidagi qaysi davlat qo‘shinlarida tumanboshi “shad” deb yuritilgan?",
    "javob": [
      { "matn": "Sosoniylar davlatida", "correct": false },
      { "matn": "Turk xoqonligida", "correct": true },
      { "matn": "Eftaliylar davlatida", "correct": false },
      { "matn": "Tohiriylar davlatida", "correct": false }
    ]
  },
  {
    "id": 639,
    "savol": "Turk xoqonligi davridagi “Qam-shomon” qanday din bo‘lgan?",
    "javob": [
      { "matn": "Ko‘k tangriga sig‘inuvchi yakkaxudolik dini", "correct": true },
      { "matn": "dehqonchilik bilan shug‘ullanuvchi o‘troq aholining Yer va Quyoshni ulug‘lovchi dini", "correct": false },
      { "matn": "Ko‘k tangriga sig‘inuvchi chorvador aholining ko‘p xudolilik dini", "correct": false },
      { "matn": "Ona bo‘rini ulug‘lovchi va unga sig‘inuvchi yakkaxudolik dini", "correct": false }
    ]
  },
  {
    "id": 640,
    "savol": "VIII asrning 40-yillarida Muhammad (s.a.v.) payg‘ambarning amakisi Abbosning nabirasi Muhammad ibn Ali toj-taxt uchun kurash boshlagan davrda ummaviylarga qanday ayb qo‘ygan?",
    "javob": [
      { "matn": "ummaviylar fitna uyushtirib xalifani qatl etganlikda ayblandilar", "correct": false },
      { "matn": "ummaviylar Movarounnahr va Xurosonga xalifaning ruxsatisiz o‘z noiblarini tayinlagan edilar", "correct": false },
      { "matn": "ummaviylar Muhammad (s.a.v.) avlodini qirib tashlashda ayblandilar", "correct": true },
      { "matn": "ummaviylar shariat tartiblari va qonun-qoidalariga rioya etmaganlikda ayblandilar", "correct": false }
    ]
  },
  {
    "id": 641,
    "savol": "Qaysi xalifa hukmronligi davrida ummaviylarga qarshi norozilik nihoyatda kuchaygan?",
    "javob": [
      { "matn": "Nasr ibn Sayyor davrida", "correct": false },
      { "matn": "Marvon II davrida", "correct": true },
      { "matn": "Marvon I davrida", "correct": false },
      { "matn": "Muhammad ibn Ali davrida", "correct": false }
    ]
  },
  {
    "id": 642,
    "savol": "Qadimda Oltoyning g‘arbida yashagan qarluqlar keyin qayerda yashaganlar?",
    "javob": [
      { "matn": "Sirdaryoning yuqori oqimlarida", "correct": false },
      { "matn": "Irtish daryosining o‘rta oqimida", "correct": true },
      { "matn": "Ural tog‘larida", "correct": false },
      { "matn": "Ob daryosi havzalarida", "correct": false }
    ]
  },
  {
    "id": 643,
    "savol": "Somoniylar davlatida qaysi devon bosh boshqaruv markazi hisoblangan?",
    "javob": [
      { "matn": "amid ul-muluk devoni", "correct": false },
      { "matn": "vazir devoni", "correct": true },
      { "matn": "sohibi shurat devoni", "correct": false },
      { "matn": "mustovfiy devoni", "correct": false }
    ]
  },
  {
    "id": 644,
    "savol": "Somoniylar davlatida yaxshi va uzoq xizmat qilgan sarbozlar qanday lavozimga ko‘tarilgan?",
    "javob": [
      { "matn": "Hojib", "correct": false },
      { "matn": "Sipohdor", "correct": false },
      { "matn": "hojibi buzruk", "correct": true },
      { "matn": "Sipohsolor", "correct": false }
    ]
  },
  {
    "id": 645,
    "savol": "Janubiy Sibir va Mo‘g‘ulistonga Movarounnahrdan turli Somoniylar davrida qaysi yo‘l orqali mahsulotlar olib borilgan?",
    "javob": [
      { "matn": "Sharqiy yo‘l orqali", "correct": false },
      { "matn": "Shimoliy yo‘l orqali", "correct": true },
      { "matn": "G‘arbiy yo‘l orqali", "correct": false },
      { "matn": "Janubiy yo‘l orqali", "correct": false }
    ]
  },
  {
    "id": 646,
    "savol": "Ma’lumki, Xo‘jand shahri hokimi Temur Malik mo‘g‘ullarga qarshi mardonavor kurash olib borgan edi. U Jo‘jixonga qarshi kurashib qaysi shaharni qaytarib olishga muvaffaq bo‘lgan?",
    "javob": [
      { "matn": "Banokat shahrini", "correct": false },
      { "matn": "Jand shahrini", "correct": false },
      { "matn": "Yangikent shahrini", "correct": true },
      { "matn": "O‘tror shahrini", "correct": false }
    ]
  },
  {
    "id": 647,
    "savol": "Jaloliddin Manguberdi mo‘g‘ullarga qarshi kurashib, G‘aznaga yetib olgunga qadar ....",
    "javob": [
      { "matn": "Amudaryo bo‘ylarida Jo‘jixon qo‘shinlarini tor-mor etdi", "correct": false },
      { "matn": "Niso, Qandahor shaharlari yonida mo‘g‘ul qo‘shinlariga qaqshatqich zarbalar berdi", "correct": true },
      { "matn": "Marvni o‘z qarorgohiga aylantirib, bu yerda katta qo‘shin to‘play boshladi", "correct": false },
      { "matn": "Chingizxon bilan yakkama-yakka muzokoralar olib bordi", "correct": false }
    ]
  },
  {
    "id": 648,
    "savol": "Turk xoqonligida kimlar “Yabg‘u” unvoniga ega bo‘lish huquqini qo‘lga kirita olgan?",
    "javob": [
      { "matn": "yirik sarkardalar", "correct": false },
      { "matn": "xoqonning qarindoshlari", "correct": true },
      { "matn": "katta yer egalari", "correct": false },
      { "matn": "urug‘ sardorlari", "correct": false }
    ]
  },
  {
    "id": 649,
    "savol": "Amir Temur davrida askariy qismlarni viloyatlardan to‘plash bilan shug‘ullangan amaldorni aniqlang.",
    "javob": [
      { "matn": "Yasovulboshi", "correct": false },
      { "matn": "to‘qsabo", "correct": false },
      { "matn": "dorug‘a", "correct": false },
      { "matn": "Tavochi", "correct": true }
    ]
  },
  {
    "id": 650,
    "savol": "Buxorxudotning qiziga uylangan Xuroson noibini aniqlang.",
    "javob": [
      { "matn": "Umar ibn Abdulaziz", "correct": false },
      { "matn": "Said Xaroshiy", "correct": false },
      { "matn": "Nasr ibn Sayyor", "correct": true },
      { "matn": "Muhammad ibn Ali", "correct": false }
    ]
  },
  {
    "id": 651,
    "savol": "Metodologiya haqida to‘xtalsak, uning lug‘aviy ma’nosi yunoncha “metodos” va “logos” degan ikki so‘z birikmasidan iborat bo‘lib, metod, ya’ni,…..",
    "javob": [
      { "matn": "usul", "correct": false },
      { "matn": "nazariya", "correct": false },
      { "matn": "ta`limot", "correct": false },
      { "matn": "hamma javob to`gri", "correct": true }
    ]
  },
  {
    "id": 652,
    "savol": "Uslubiyat ilmiy tadqiqot olib borish yoki biror bir masalani ilmiy o‘rganishning eng qulay usullari, eng to‘g‘ri va mukammal g‘oyasi, nazariyasi va ta’limotlari majmuidan iborat bir butun fan",
    "javob": [
      { "matn": "terminologiya", "correct": false },
      { "matn": "metodologiya", "correct": true },
      { "matn": "xronologiya", "correct": false },
      { "matn": "to`g`ri javob yoq", "correct": false }
    ]
  },
  {
    "id": 653,
    "savol": "Quyidagilardan qaysi biri O‘zbekiston tarixi fanining uslubiy, ilmiy-nazariy, g‘oyaviy va falsafiy asoslari hisoblanadi?",
    "javob": [
      { "matn": "tarixga hozirgi zamon sivilizatsiyasi nuqtai nazari va bag‘rikenglik asosida yondashish", "correct": false },
      { "matn": "tarix, jamiyat va tabiat hamda insoniyat dialektika hamda sinergetika qonuniyatlari asoslarida rivojlanishi haqiqat ekanligi", "correct": false },
      { "matn": "hamma javob to`g’ri", "correct": true },
      { "matn": "din bilan dunyoviylik o‘rtasida mo‘tadil munosabat bo‘lishi va dunyoviylik aslo dahriylik emasligi; tarix milliy va umuminsoniy xotira", "correct": false }
    ]
  },
  {
    "id": 654,
    "savol": "Gerodot qaysi shaharda tug`ilgan?",
    "javob": [
      { "matn": "Afina", "correct": false },
      { "matn": "Galikarnass", "correct": true },
      { "matn": "Sparta", "correct": false },
      { "matn": "Geliopol", "correct": false }
    ]
  },
  {
    "id": 655,
    "savol": "Gerodot qachon tug`ilgan",
    "javob": [
      { "matn": "m/a 454", "correct": false },
      { "matn": "454", "correct": false },
      { "matn": "484", "correct": false },
      { "matn": "m/a 484", "correct": true }
    ]
  },
  {
    "id": 656,
    "savol": "Gerodot necha yil davomida Old Osiyo, Misr, Ossuriya, Bobil va Qora dengizning shimoliy sohillariga sayohat qilib ko‘pdan–ko‘p tarixiy ma’lumotlar to‘plagan?",
    "javob": [
      { "matn": "15", "correct": false },
      { "matn": "20", "correct": false },
      { "matn": "10", "correct": true },
      { "matn": "25", "correct": false }
    ]
  },
  {
    "id": 657,
    "savol": "Kim jahon tarixini “yovvoyilik”, “varvarlik” va “sivilizatsiya” bosqichlariga ajratdi?",
    "javob": [
      { "matn": "Morgan", "correct": false },
      { "matn": "Fergyusson", "correct": true },
      { "matn": "M.O.Kosven", "correct": false },
      { "matn": "Rtvladze", "correct": false }
    ]
  },
  {
    "id": 658,
    "savol": "Kim insoniyat tarixidagi “yovvoyilik, varvarlik va sivilizatsiya” davrlarini alohida bosqichlarga bo‘ladi?",
    "javob": [
      { "matn": "Fergyusson", "correct": false },
      { "matn": "M.O.Kosven", "correct": false },
      { "matn": "Morgan", "correct": true },
      { "matn": "Rtvladze", "correct": false }
    ]
  },
  {
    "id": 659,
    "savol": "Qaysi asrda insoniyat tarixini har tomonlama rivojlangan ijtimoiy va madaniy komplekslar (majmualar) – sivilizatsiyalar belgilab berishi to‘g‘risida konsepsiya shakllangan?",
    "javob": [
      { "matn": "XVII-XIX", "correct": false },
      { "matn": "XX", "correct": false },
      { "matn": "XVII", "correct": false },
      { "matn": "XIX", "correct": true }
    ]
  },
  {
    "id": 660,
    "savol": "“Zaotara” kim?",
    "javob": [
      { "matn": "jangchi", "correct": false },
      { "matn": "hunarmand", "correct": false },
      { "matn": "kohin", "correct": true },
      { "matn": "savdogar", "correct": false }
    ]
  },
  {
    "id": 661,
    "savol": "Avestoda azata kim?",
    "javob": [
      { "matn": "kohin", "correct": false },
      { "matn": "zodagon", "correct": true },
      { "matn": "hunarmand", "correct": false },
      { "matn": "savdogar", "correct": false }
    ]
  },
  {
    "id": 662,
    "savol": "Avestoga ko`ra ratayshtar kim?",
    "javob": [
      { "matn": "hunarmad", "correct": false },
      { "matn": "kohin", "correct": false },
      { "matn": "savdogar", "correct": false },
      { "matn": "jangchi", "correct": true }
    ]
  },
  {
    "id": 663,
    "savol": "Avestoga ko`ra vispati kim?",
    "javob": [
      { "matn": "urug` jamoasi boshlig`i", "correct": true },
      { "matn": "hunarmand", "correct": false },
      { "matn": "savdogar", "correct": false },
      { "matn": "jangchi", "correct": false }
    ]
  },
  {
    "id": 664,
    "savol": "Avestoga ko`ra gaytana nima?",
    "javob": [
      { "matn": "toj", "correct": false },
      { "matn": "mulk", "correct": false },
      { "matn": "uy-qo`rg`on", "correct": true },
      { "matn": "hukmdor", "correct": false }
    ]
  },
  {
    "id": 665,
    "savol": "Qadimgi dunyo tarixi nechinchi yilgacha bo`lgan davrni o`z ichiga oladi?",
    "javob": [
      { "matn": "375", "correct": false },
      { "matn": "476", "correct": true },
      { "matn": "313", "correct": false },
      { "matn": "571", "correct": false }
    ]
  },
  {
    "id": 666,
    "savol": "Yozma manbalar necha turga bo`linadi?",
    "javob": [
      { "matn": "3", "correct": false },
      { "matn": "2", "correct": true },
      { "matn": "4", "correct": false },
      { "matn": "5", "correct": false }
    ]
  },
  {
    "id": 667,
    "savol": "Etnografiya so‘zi ……. tilidan olingan bo‘lib, etnos – xalq, grapho – yozaman, xalq haqidagi ma’lumotlar, xalqshunoslik degan ma’noni bildiradi.",
    "javob": [
      { "matn": "fransuz", "correct": false },
      { "matn": "ingliz", "correct": false },
      { "matn": "lotin", "correct": false },
      { "matn": "yunon", "correct": true }
    ]
  },
  {
    "id": 668,
    "savol": "Etnografiya so`zining ma`nosi nima?",
    "javob": [
      { "matn": "xalqshunoslik", "correct": true },
      { "matn": "tilshunoslik", "correct": false },
      { "matn": "qadimshunoslik", "correct": false },
      { "matn": "madaniyatshunoslik", "correct": false }
    ]
  },
  {
    "id": 669,
    "savol": "Antropologiya fanida ilk qazilma va zamonaviy qiyofadagi odamlar oilasi nima deb ataladi?",
    "javob": [
      { "matn": "zaotara", "correct": false },
      { "matn": "gominiylar", "correct": false },
      { "matn": "homonidae", "correct": false },
      { "matn": "c va d", "correct": true }
    ]
  },
  {
    "id": 670,
    "savol": "“Homo erectus” so`zining manosi nima?",
    "javob": [
      { "matn": "ishbilarmon odam", "correct": false },
      { "matn": "tik yuruvchi odam", "correct": true },
      { "matn": "maymun odami", "correct": false },
      { "matn": "t.j.y", "correct": false }
    ]
  },
  {
    "id": 671,
    "savol": "“Pitekantrop” qanday ma`noni anglatadi?",
    "javob": [
      { "matn": "ishbilarmon odam", "correct": false },
      { "matn": "maymun odami", "correct": true },
      { "matn": "tik yuruvchi odam", "correct": false },
      { "matn": "t.j.y", "correct": false }
    ]
  },
  {
    "id": 672,
    "savol": "Seleng‘ur qurollarining yoshi ….. yildan ziyodroq deb taxmin qilinadi.",
    "javob": [
      { "matn": "10 ming", "correct": false },
      { "matn": "50 ming", "correct": false },
      { "matn": "80 ming", "correct": false },
      { "matn": "1mln", "correct": true }
    ]
  },
  {
    "id": 673,
    "savol": "Toshsoy makoni qayerda joylashgan?",
    "javob": [
      { "matn": "Piskom", "correct": false },
      { "matn": "Gazalkent", "correct": false },
      { "matn": "Angren", "correct": false },
      { "matn": "Ohangaron", "correct": true }
    ]
  },
  {
    "id": 674,
    "savol": "muste madaniyati qaysi davr uchun xos?",
    "javob": [
      { "matn": "o`rta paleolit", "correct": true },
      { "matn": "ilk paleolit", "correct": false },
      { "matn": "mezeolit", "correct": false },
      { "matn": "bronza", "correct": false }
    ]
  },
  {
    "id": 675,
    "savol": "Teshiktosh (Surxondaryo) g‘or qachon ochilgan edi.",
    "javob": [
      { "matn": "1958", "correct": false },
      { "matn": "1928", "correct": false },
      { "matn": "1948", "correct": false },
      { "matn": "1938", "correct": true }
    ]
  },
  {
    "id": 676,
    "savol": "Teshiktosh (Surxondaryo) g‘or kim tomonidan ochilgan edi.",
    "javob": [
      { "matn": "Rtvladze", "correct": false },
      { "matn": "Okladnikov", "correct": true },
      { "matn": "Masson", "correct": false },
      { "matn": "Morgan", "correct": false }
    ]
  },
  {
    "id": 677,
    "savol": "Xo`jakent makoni qayrda joylashgan?",
    "javob": [
      { "matn": "Xorazm", "correct": false },
      { "matn": "Surxondaryo", "correct": false },
      { "matn": "Toshkent vil.", "correct": true },
      { "matn": "Samarqand", "correct": false }
    ]
  },
  {
    "id": 678,
    "savol": "Boysun tog‘idagi g‘or-makonning beshta madaniy qatlamidan ……yaqin tosh qurollar topilgan.",
    "javob": [
      { "matn": "2000", "correct": false },
      { "matn": "3500", "correct": false },
      { "matn": "2500", "correct": false },
      { "matn": "3000", "correct": true }
    ]
  },
  {
    "id": 679,
    "savol": "Chotqol tizmasidagi Paltov soyining yuqori oqimida joylashgan makon qaysi?",
    "javob": [
      { "matn": "obirahmat", "correct": true },
      { "matn": "qo`shilish", "correct": false },
      { "matn": "machay", "correct": false },
      { "matn": "zarautsoy", "correct": false }
    ]
  },
  {
    "id": 680,
    "savol": "Paleografiya so`zining ma`nosi nima?",
    "javob": [
      { "matn": "tosh, metall buyumlar, yog‘och va boshqa qattiq buyumlar ustiga o‘yib yozilgan qadimgi bitiklarni o‘rganadi.", "correct": false },
      { "matn": "qadimiy qo‘lyozma asarlarning qog‘ozi, muqovasi, siyohi, yozuvi va yozish usullarini tekshiradi", "correct": true },
      { "matn": "qadimiy pullarni, ashyosi, shakli, vazni, yozuvlari, zarb etilgan joyi va vaqtini tekshiradi.", "correct": false },
      { "matn": "qadimiy gerblar, turli–tuman nishon va belgilarni o‘rganadi.", "correct": false }
    ]
  },
  {
    "id": 681,
    "savol": "Epigrafika so`zining ma`nosi nima?",
    "javob": [
      { "matn": "qadimiy qo‘lyozma asarlarning qog‘ozi, muqovasi, siyohi, yozuvi va yozish usullarini tekshiradi", "correct": false },
      { "matn": "qadimiy pullarni, ashyosi, shakli, vazni, yozuvlari, zarb etilgan joyi va vaqtini tekshiradi.", "correct": false },
      { "matn": "tosh, metall buyumlar, yog‘och va boshqa qattiq buyumlar ustiga o‘yib yozilgan qadimgi bitiklarni o‘rganadi.", "correct": true },
      { "matn": "qadimiy gerblar, turli–tuman nishon va belgilarni o‘rganadi.", "correct": false }
    ]
  },
  {
    "id": 682,
    "savol": "Numizmatika so`zining ma`nosi nima?",
    "javob": [
      { "matn": "qadimiy qo‘lyozma asarlarning qog‘ozi, muqovasi, siyohi, yozuvi va yozish usullarini tekshiradi", "correct": false },
      { "matn": "qadimiy pullarni, ashyosi, shakli, vazni, yozuvlari, zarb etilgan joyi va vaqtini tekshiradi.", "correct": true },
      { "matn": "tosh, metall buyumlar, yog‘och va boshqa qattiq buyumlar ustiga o‘yib yozilgan qadimgi bitiklarni o‘rganadi.", "correct": false },
      { "matn": "qadimiy gerblar, turli–tuman nishon va belgilarni o‘rganadi.", "correct": false }
    ]
  },
  {
    "id": 683,
    "savol": "Geraldika so`zining ma`nosi nima?",
    "javob": [
      { "matn": "qadimiy qo‘lyozma asarlarning qog‘ozi, muqovasi, siyohi, yozuvi va yozish usullarini tekshiradi", "correct": false },
      { "matn": "tosh, metall buyumlar, yog‘och va boshqa qattiq buyumlar ustiga o‘yib yozilgan qadimgi bitiklarni o‘rganadi.", "correct": false },
      { "matn": "qadimiy pullarni, ashyosi, shakli, vazni, yozuvlari, zarb etilgan joyi va vaqtini tekshiradi.", "correct": false },
      { "matn": "qadimiy gerblar, turli–tuman nishon va belgilarni o‘rganadi.", "correct": true }
    ]
  },
  {
    "id": 684,
    "savol": "Sfragistika nima bilan shug`ullanadi?",
    "javob": [
      { "matn": "qadimiy muhrlar va ularning yozuvlari hamda tasvirlarini o‘rganadi.", "correct": true },
      { "matn": "rasmiy hujjatlarni o‘rganadi va tahlil qiladi.", "correct": false },
      { "matn": "qadimgi xalqlar orasidagi va mamlakatlarda amalda bo‘lgan yil hisobi va taqvimini o‘rganuvchi fan.", "correct": false },
      { "matn": "o‘tmishda turli mamlakatlar va xalqlar orasida amalda bo‘lgan masofa, og‘irlik va sath o‘lchov birliklarini o‘rganadi", "correct": false }
    ]
  },
  {
    "id": 685,
    "savol": "Diplomatika nima bilan shug`ullanadi?",
    "javob": [
      { "matn": "qadimiy muhrlar va ularning yozuvlari hamda tasvirlarini o‘rganadi.", "correct": false },
      { "matn": "qadimgi xalqlar orasidagi va mamlakatlarda amalda bo‘lgan yil hisobi va taqvimini o‘rganuvchi fan.", "correct": false },
      { "matn": "rasmiy hujjatlarni o‘rganadi va tahlil qiladi.", "correct": true },
      { "matn": "o‘tmishda turli mamlakatlar va xalqlar orasida amalda bo‘lgan masofa, og‘irlik va sath o‘lchov birliklarini o‘rganadi", "correct": false }
    ]
  },
  {
    "id": 686,
    "savol": "Xronologiya nima bilan shug`ullanadi?",
    "javob": [
      { "matn": "qadimiy muhrlar va ularning yozuvlari hamda tasvirlarini o‘rganadi.", "correct": false },
      { "matn": "qadimgi xalqlar orasidagi va mamlakatlarda amalda bo‘lgan yil hisobi va taqvimini o‘rganuvchi fan.", "correct": true },
      { "matn": "rasmiy hujjatlarni o‘rganadi va tahlil qiladi.", "correct": false },
      { "matn": "o‘tmishda turli mamlakatlar va xalqlar orasida amalda bo‘lgan masofa, og‘irlik va sath o‘lchov birliklarini o‘rganadi", "correct": false }
    ]
  },
  {
    "id": 687,
    "savol": "Metrologiya nima bilan shug`ullanadi?",
    "javob": [
      { "matn": "qadimiy muhrlar va ularning yozuvlari hamda tasvirlarini o‘rganadi.", "correct": false },
      { "matn": "rasmiy hujjatlarni o‘rganadi va tahlil qiladi.", "correct": false },
      { "matn": "qadimgi xalqlar orasidagi va mamlakatlarda amalda bo‘lgan yil hisobi va taqvimini o‘rganuvchi fan.", "correct": false },
      { "matn": "o‘tmishda turli mamlakatlar va xalqlar orasida amalda bo‘lgan masofa, og‘irlik va sath o‘lchov birliklarini o‘rganadi", "correct": true }
    ]
  },
  {
    "id": 688,
    "savol": "Yurtimizda aniqlangan eng qadimiy tasviriy san’at obidasi qaysi?",
    "javob": [
      { "matn": "zarautsoy", "correct": false },
      { "matn": "lasko", "correct": false },
      { "matn": "siypantosh", "correct": true },
      { "matn": "altamir", "correct": false }
    ]
  },
  {
    "id": 689,
    "savol": "O‘rta Osiyo ………. hududlarida mil. avv. III mingyillikning o‘rtalari – II mingyillik boshlarida ixtisoslashgan hunarmandchilik sohalari rivoj topadi.",
    "javob": [
      { "matn": "saqrqiy", "correct": false },
      { "matn": "shimoliy", "correct": false },
      { "matn": "g`arbiy", "correct": false },
      { "matn": "janubiy", "correct": true }
    ]
  },
  {
    "id": 690,
    "savol": "Nechanchi mingyillikda charx kulolchilik hunariga keng joriy etiladi?",
    "javob": [
      { "matn": "m/a III", "correct": false },
      { "matn": "m/a II", "correct": true },
      { "matn": "m/a III-II", "correct": false },
      { "matn": "I", "correct": false }
    ]
  },
  {
    "id": 691,
    "savol": "Quyidagi qaysi yodgorlik toshdan qurilgan mudofaa devorlariga ega?",
    "javob": [
      { "matn": "Tuproqqal`a", "correct": false },
      { "matn": "Jarqo`ton", "correct": false },
      { "matn": "G`ozqal`a", "correct": false },
      { "matn": "burguttepa", "correct": true }
    ]
  },
  {
    "id": 692,
    "savol": "Topilgan bronza muhr-tamg‘alar burgut, ilon, tuya va boshqa tasvirlar bilan naqshlangan. Ular ayrim katta patriarxal oilalar va urug‘larning ramzlari bo‘lgan. Ta`rif qaysi manzilgohlarga tegishli?",
    "javob": [
      { "matn": "Tuproqqal`a", "correct": false },
      { "matn": "Jarqo`ton va Sopollitepa", "correct": true },
      { "matn": "G`ozqal`a", "correct": false },
      { "matn": "burguttepa", "correct": false }
    ]
  },
  {
    "id": 693,
    "savol": "Qachon Qadimgi Sharqda (Old Osiyo, Misr, Ikkidaryo oralig‘i) ilk davlatlar shakllandi?",
    "javob": [
      { "matn": "Mil. avv. III mingyillikning oxirlariga kelib", "correct": false },
      { "matn": "Mil. avv. II mingyillikning oxirlariga kelib", "correct": false },
      { "matn": "Mil. avv. I mingyillikning oxirlariga kelib", "correct": false },
      { "matn": "Mil. avv. IV mingyillikning oxirlariga kelib", "correct": true }
    ]
  },
  {
    "id": 694,
    "savol": "Marg‘iyona – Baqtriya sivilizatsiyasi fanda nima deb e’tirof etilgan?",
    "javob": [
      { "matn": "zarafshon sivilizatsiyasi", "correct": false },
      { "matn": "sayhun sivilizatsiyasi", "correct": false },
      { "matn": "hamma javob to`g`ri", "correct": false },
      { "matn": "Oks - Amudaryo sivilizatsiyasi", "correct": true }
    ]
  },
  {
    "id": 695,
    "savol": "Qachon O‘rta Osiyo dasht va tog‘ oldilariga chorvador qabilalar keng miqyosda kelib o‘rnasha boshladi?",
    "javob": [
      { "matn": "Mil. avv. III mingyillikning ikkinchi yarmida", "correct": false },
      { "matn": "Mil. avv. II mingyillikning ikkinchi yarmida", "correct": true },
      { "matn": "Mil. avv. I mingyillikning ikkinchi yarmida", "correct": false },
      { "matn": "Mil. avv. III-II mingyillikning ikkinchi yarmida", "correct": false }
    ]
  },
  {
    "id": 696,
    "savol": "Avestoga ko`ra kavi qanday unvon?",
    "javob": [
      { "matn": "harbiy yo‘lboshchi", "correct": false },
      { "matn": "hukmdor, podsho", "correct": true },
      { "matn": "qabila yo‘lboshchisi", "correct": false },
      { "matn": "barcha viloyatlar hududiy birlashuvi", "correct": false }
    ]
  },
  {
    "id": 697,
    "savol": "Avestoga ko`ra sastar qanday unvon?",
    "javob": [
      { "matn": "hukmdor, podsho", "correct": false },
      { "matn": "harbiy yo‘lboshchi", "correct": true },
      { "matn": "qabila yo‘lboshchisi", "correct": false },
      { "matn": "barcha viloyatlar hududiy birlashuvi", "correct": false }
    ]
  },
  {
    "id": 698,
    "savol": "Avestoga ko`ra zantupat qanday unvon?",
    "javob": [
      { "matn": "hukmdor, podsho", "correct": false },
      { "matn": "harbiy yo‘lboshchi", "correct": false },
      { "matn": "qabila yo‘lboshchisi", "correct": true },
      { "matn": "barcha viloyatlar hududiy birlashuvi", "correct": false }
    ]
  },
  {
    "id": 699,
    "savol": "Daxiyusasti nima?",
    "javob": [
      { "matn": "hukmdor, podsho", "correct": false },
      { "matn": "harbiy yo‘lboshchi", "correct": false },
      { "matn": "qabila yo‘lboshchisi", "correct": false },
      { "matn": "barcha viloyatlar hududiy birlashuvi", "correct": true }
    ]
  },
  {
    "id": 700,
    "savol": "Davlat paydo bo`lishining teologik nazariyasiga ko`ra……",
    "javob": [
      { "matn": "davlatlar kelib chiqishini ilohiylik bilan bog‘laydi. Qadimgi davrdayoq Isroilda paydo bo‘lgan bu nazariya ilk davlatlarning diniy boshqaruv shakllarini (teokratik) qattiq turib himoya qiladi.", "correct": true },
      { "matn": "Uning tarafdorlari dastlabki davlat bevosita oiladan o‘sib chiqqan deb hisoblaydi. Unga ko‘ra, davlat hokimiyati otaning oila a’zolari ustidan hokimligini belgilab beradi.", "correct": false },
      { "matn": "Nazariya tarafdorlari davlat yerga mulkchilik huquqidan kelib chiqqan (patrimomum) deb hisoblashadi.", "correct": false },
      { "matn": "davlat - odamlar o‘rtasida tuzilgan shartnoma asosida odamlarning ongli ravishda birlashishidir.", "correct": false }
    ]
  },
  {
    "id": 701,
    "savol": "Davlat paydo bo`lishining Patriarxal nazariyasiga ko`ra……",
    "javob": [
      { "matn": "davlatlar kelib chiqishini ilohiylik bilan bog‘laydi.", "correct": false },
      { "matn": "Uning tarafdorlari dastlabki davlat bevosita oiladan o‘sib chiqqan deb hisoblaydi. Unga ko‘ra, davlat hokimiyati otaning oila a’zolari ustidan hokimligini belgilab beradi.", "correct": true },
      { "matn": "Nazariya tarafdorlari davlat yerga mulkchilik huquqidan kelib chiqqan deb hisoblashadi.", "correct": false },
      { "matn": "davlat - odamlar o‘rtasida tuzilgan shartnoma asosida birlashishidir.", "correct": false }
    ]
  },
  {
    "id": 702,
    "savol": "Davlat paydo bo`lishining Patremonial nazariyasiga ko`ra……",
    "javob": [
      { "matn": "davlatlar kelib chiqishini ilohiylik bilan bog‘laydi.", "correct": false },
      { "matn": "Uning tarafdorlari dastlabki davlat bevosita oiladan o‘sib chiqqan deb hisoblaydi.", "correct": false },
      { "matn": "Nazariya tarafdorlari davlat yerga mulkchilik huquqidan kelib chiqqan (patrimomum) deb hisoblashadi. ya’ni, hokimiyat, yerga egalik qilish huquqidan bevosita u yerda yashovchi odamlarga yoyiladi", "correct": true },
      { "matn": "davlat - odamlar o‘rtasida tuzilgan shartnoma asosida odamlarning ongli ravishda birlashishidir.", "correct": false }
    ]
  },
  {
    "id": 703,
    "savol": "Davlat paydo bo`lishining Shartnomaviy nazariyasiga ko`ra……",
    "javob": [
      { "matn": "davlatlar kelib chiqishini ilohiylik bilan bog‘laydi.", "correct": false },
      { "matn": "Uning tarafdorlari dastlabki davlat bevosita oiladan o‘sib chiqqan deb hisoblaydi.", "correct": false },
      { "matn": "Nazariya tarafdorlari davlat yerga mulkchilik huquqidan kelib chiqqan deb hisoblashadi.", "correct": false },
      { "matn": "davlat - odamlar o‘rtasida tuzilgan shartnoma asosida odamlarning ongli ravishda birlashishidir. Odamlar shartnomaning kuchi bilan o‘z erkinligi, o‘z hokimiyatining bir qismini davlatga beradilar.", "correct": true }
    ]
  },
  {
    "id": 704,
    "savol": "Davlat paydo bo`lishining Zo‘ravonlik nazariyasiga ko`ra……",
    "javob": [
      { "matn": "Uning tarafdorlari: E.Dyuring, L.Gumplovich, K.Kautskiy huquqsiz va himoyasiz qabilalarning kuchli va uyushgan qabilalar tomonidan bosib olinishi tufayli zo‘ravonlik yoki kuch ishlatish yo‘li bilan paydo bo‘lgan deb hisoblaydilar.", "correct": true },
      { "matn": "davlatlarning paydo bo‘lishi, ularning birlamchi despotik shakllari sharqiy agrar viloyatlarda ulkan inshootlar qurilishi bilan bog‘lanadi.", "correct": false },
      { "matn": "davlatning paydo bo‘lishini inson psixologiyasi, shaxsning jamoada yashashga ehtiyoji bilan izohlaydilar", "correct": false },
      { "matn": "Bu nazariyaga ko‘ra, sinflar paydo bo‘lishi va ular o‘rtasida sinfiy kurash keskinlashuvining yakunidir.", "correct": false }
    ]
  },
  {
    "id": 705,
    "savol": "Davlat paydo bo`lishining Irrigatsiya nazariyasiga ko`ra……",
    "javob": [
      { "matn": "Uning tarafdorlari huquqsiz qabilalarning bosib olinishi tufayli paydo bo‘lgan deb hisoblaydilar.", "correct": false },
      { "matn": "davlatlarning paydo bo‘lishi, ularning birlamchi despotik shakllari sharqiy agrar viloyatlarda ulkan inshootlar qurilishi bilan bog‘lanadi.", "correct": true },
      { "matn": "davlatning paydo bo‘lishini inson psixologiyasi bilan izohlaydilar", "correct": false },
      { "matn": "Davlat bir sinfning boshqa sinf ustidan hukmronlik qurolidir.", "correct": false }
    ]
  },
  {
    "id": 706,
    "savol": "Davlat paydo bo`lishining Psixologiya nazariyasiga ko`ra……",
    "javob": [
      { "matn": "Uning tarafdorlari huquqsiz qabilalarning bosib olinishi tufayli paydo bo‘lgan deb hisoblaydilar.", "correct": false },
      { "matn": "davlatlarning paydo bo‘lishi ulkan inshootlar qurilishi bilan bog‘lanadi.", "correct": false },
      { "matn": "L.Petrajetskiy, Z.Freyd, G.Tard davlatning paydo bo‘lishini inson psixologiyasi, shaxsning jamoada yashashga ehtiyoji, obro‘li kishilarni izlash, buyruq berish va itoat istagi bilan izohlaydilar", "correct": true },
      { "matn": "Davlat bir sinfning boshqa sinf ustidan hukmronlik qurolidir.", "correct": false }
    ]
  },
  {
    "id": 707,
    "savol": "Davlat paydo bo`lishining sinfiy nazariyasiga ko`ra……",
    "javob": [
      { "matn": "Uning tarafdorlari: E.Dyuring, L.Gumplovich, K.Kautskiy huquqsiz qabilalarning bosib olinishi tufayli paydo bo‘lgan deb hisoblaydilar.", "correct": false },
      { "matn": "davlatlarning paydo bo‘lishi sharqiy agrar viloyatlarda ulkan inshootlar qurilishi bilan bog‘lanadi.", "correct": false },
      { "matn": "davlatning paydo bo‘lishini inson psixologiyasi va itoat istagi bilan izohlaydilar", "correct": false },
      { "matn": "K.Marks, F.Engels, V.Lenin, G.Plexanov. Bu nazariyaga ko‘ra, sinflar paydo bo‘lishi va ular o‘rtasida sinfiy kurash keskinlashuvining yakunidir. Davlat bir sinfning boshqa sinf ustidan hukmronlik qurolidir.", "correct": true }
    ]
  },
  {
    "id": 708,
    "savol": "Bizgacha etib kelgan “Avesto” qismlari …….. davrida, ya’ni milodning III-VII asrlarida tahrir qilingan.",
    "javob": [
      { "matn": "sosoniylar", "correct": true },
      { "matn": "somoniylar", "correct": false },
      { "matn": "ahamoniylar", "correct": false },
      { "matn": "siyovushlar", "correct": false }
    ]
  },
  {
    "id": 709,
    "savol": "“Avesto” boblari “pahlaviy”- o‘rta fors alifbosi asosida …… ta belgili yozuvdan iboratdir.",
    "javob": [
      { "matn": "38", "correct": false },
      { "matn": "28", "correct": false },
      { "matn": "48", "correct": true },
      { "matn": "58", "correct": false }
    ]
  },
  {
    "id": 710,
    "savol": "“Avesto” o‘rta fors tilidan “Apastak” ya’ni ………..ma’nosini beradi.",
    "javob": [
      { "matn": "hayvon terisi", "correct": false },
      { "matn": "buyuklik", "correct": false },
      { "matn": "kitob", "correct": false },
      { "matn": "asos", "correct": true }
    ]
  },
  {
    "id": 711,
    "savol": "Nechanchi yillarda fransuz olimi Anketil Dyuperron Hindistonning Gujorot viloyatida parslarning diniy yozuvlarini o‘qishga muyassar bo‘lgan?",
    "javob": [
      { "matn": "1766-1769", "correct": false },
      { "matn": "1768-1769", "correct": false },
      { "matn": "1755-1761", "correct": true },
      { "matn": "1777-1778", "correct": false }
    ]
  },
  {
    "id": 712,
    "savol": "Avesto necha kitobdan iborat bo`lgan?",
    "javob": [
      { "matn": "22", "correct": false },
      { "matn": "21", "correct": true },
      { "matn": "23", "correct": false },
      { "matn": "24", "correct": false }
    ]
  },
  {
    "id": 713,
    "savol": "Avesto qismlarini kim tarjima qilgan?",
    "javob": [
      { "matn": "Shampolyon", "correct": false },
      { "matn": "Dyupperon", "correct": true },
      { "matn": "I.Morgan", "correct": false },
      { "matn": "A.Fergyusson", "correct": false }
    ]
  },
  {
    "id": 714,
    "savol": "Yasna qanday ma`noni bildiradi?",
    "javob": [
      { "matn": "barcha hukmronlar", "correct": false },
      { "matn": "devlarga qarshi qonun", "correct": false },
      { "matn": "qurbonlik keltirish", "correct": true },
      { "matn": "ulug‘lash", "correct": false }
    ]
  },
  {
    "id": 715,
    "savol": "Avesto-jamiyati nechta asosiy qismga bo‘linadi?",
    "javob": [
      { "matn": "5", "correct": false },
      { "matn": "4", "correct": true },
      { "matn": "6", "correct": false },
      { "matn": "2", "correct": false }
    ]
  },
  {
    "id": 716,
    "savol": "Nmana qanday manoni anglatadi?",
    "javob": [
      { "matn": "urug‘ jamoasi", "correct": false },
      { "matn": "oila jamoasi, uy", "correct": true },
      { "matn": "qabila", "correct": false },
      { "matn": "qabilalar ittifoqi", "correct": false }
    ]
  },
  {
    "id": 717,
    "savol": "Vis qanday manoni anglatadi?",
    "javob": [
      { "matn": "oila jamoasi", "correct": false },
      { "matn": "qabilalar ittifoqi", "correct": false },
      { "matn": "urug‘ jamoasi", "correct": true },
      { "matn": "qabila", "correct": false }
    ]
  },
  {
    "id": 718,
    "savol": "Zantu qanday manoni anglatadi?",
    "javob": [
      { "matn": "oila jamoasi", "correct": false },
      { "matn": "urug‘ jamoasi", "correct": false },
      { "matn": "qabila", "correct": true },
      { "matn": "qabilalar ittifoqi", "correct": false }
    ]
  },
  {
    "id": 719,
    "savol": "Daxyu qanday manoni anglatadi?",
    "javob": [
      { "matn": "oila jamoasi", "correct": false },
      { "matn": "qabila", "correct": false },
      { "matn": "urug‘ jamoasi", "correct": false },
      { "matn": "qabilalar ittifoqi", "correct": true }
    ]
  },
  {
    "id": 720,
    "savol": "Mil. avv. 545-540 yillarda ahamoniylar O‘rta Osiyoning qaysi viloyatlarini bo‘ysundirganlar?",
    "javob": [
      { "matn": "parfiya", "correct": false },
      { "matn": "baqtriya va sug`d", "correct": false },
      { "matn": "hamma javob to`g`ri", "correct": true },
      { "matn": "marg`iyona", "correct": false }
    ]
  },
  {
    "id": 721,
    "savol": "Kimlarga qarshi Kir II ning yurishlari mil.avv. 530 yilda muvaffaqqiyatsiz yakunlangan?",
    "javob": [
      { "matn": "saklar", "correct": false },
      { "matn": "massagetlar", "correct": true },
      { "matn": "yunonlarga", "correct": false },
      { "matn": "makedonarga", "correct": false }
    ]
  },
  {
    "id": 722,
    "savol": "O‘rta Osiyoda ahamoniylar …… yildan ziyod hukmronlik qilganlar",
    "javob": [
      { "matn": "300", "correct": false },
      { "matn": "250", "correct": false },
      { "matn": "200", "correct": true },
      { "matn": "350", "correct": false }
    ]
  },
  {
    "id": 723,
    "savol": "Ahamoniylar hukmronligi o`rta Osiyoda nechanchi yilgacha davom etgan?",
    "javob": [
      { "matn": "320", "correct": false },
      { "matn": "319", "correct": false },
      { "matn": "545", "correct": false },
      { "matn": "330", "correct": true }
    ]
  },
  {
    "id": 724,
    "savol": "Doro I va Kserks huzuriga turli xalqlarning qanday manzarasi tasvirlangan Persepol shahri topilmalarida?",
    "javob": [
      { "matn": "janglari", "correct": false },
      { "matn": "o`lpon keltirish", "correct": true },
      { "matn": "bino qurish", "correct": false },
      { "matn": "ov qilish", "correct": false }
    ]
  },
  {
    "id": 725,
    "savol": "“Baqtra daryosi nomidan shahar va viloyatning nomi kelib chiqqan”. Degan malumotni kim yozib qoldirgan?",
    "javob": [
      { "matn": "Gerodot", "correct": false },
      { "matn": "Kvint Kursiy Ruf", "correct": true },
      { "matn": "Arrian", "correct": false },
      { "matn": "Poliyen", "correct": false }
    ]
  },
  {
    "id": 726,
    "savol": "Persika asari kimga tegishli?",
    "javob": [
      { "matn": "Arrian", "correct": false },
      { "matn": "Ktesiy", "correct": true },
      { "matn": "Gerodot", "correct": false },
      { "matn": "Poliyen", "correct": false }
    ]
  },
  {
    "id": 727,
    "savol": "Olimlar fikriga ko‘ra, “sak” so‘zi qanday tarjima qilinadi?",
    "javob": [
      { "matn": "qudratli", "correct": true },
      { "matn": "toza", "correct": false },
      { "matn": "musaffo", "correct": false },
      { "matn": "kuchli", "correct": false }
    ]
  },
  {
    "id": 728,
    "savol": "Burg‘ulik (Burganli) madaniyati qayerda rivojlangan?",
    "javob": [
      { "matn": "surxondaryoda", "correct": false },
      { "matn": "Buxoroda", "correct": false },
      { "matn": "Xorazmda", "correct": false },
      { "matn": "Toshkent viloyatida", "correct": true }
    ]
  },
  {
    "id": 729,
    "savol": "Chust madaniyati qayerda rivojlanadi?",
    "javob": [
      { "matn": "surxondaryoda", "correct": false },
      { "matn": "Toshkent viloyatida", "correct": false },
      { "matn": "Buxoroda", "correct": false },
      { "matn": "Farg‘onada", "correct": true }
    ]
  },
  {
    "id": 730,
    "savol": "Mil. avv. 547-546 yillar davomida Kir II qaysi hududlarni istilo qildi?",
    "javob": [
      { "matn": "Yunoniston", "correct": false },
      { "matn": "makedoniya", "correct": false },
      { "matn": "o`rta osiyo", "correct": false },
      { "matn": "kichik osiyo", "correct": true }
    ]
  },
  {
    "id": 731,
    "savol": "Kir II vafotidan so‘ng taxtga kim o‘tirdi?",
    "javob": [
      { "matn": "Kserks", "correct": false },
      { "matn": "Doro III", "correct": false },
      { "matn": "Doro I", "correct": false },
      { "matn": "Kambiz", "correct": true }
    ]
  },
  {
    "id": 732,
    "savol": "Nechanchi yilda Makedoniyalik Aleksandrning Baqtriya va Sug‘diyona yerlariga harbiy yurishlari boshlangan?",
    "javob": [
      { "matn": "m/a 339", "correct": false },
      { "matn": "m/a 319", "correct": false },
      { "matn": "m/a 329", "correct": true },
      { "matn": "m/a 330", "correct": false }
    ]
  },
  {
    "id": 733,
    "savol": "“ Aleksandr anabasisi” degan asarning muallifi kim?",
    "javob": [
      { "matn": "Poliyen", "correct": false },
      { "matn": "Arrian", "correct": true },
      { "matn": "Gerodot", "correct": false },
      { "matn": "Kvint Kursiy Ruf", "correct": false }
    ]
  },
  {
    "id": 734,
    "savol": "«Makedoniyalik Aleksandr tarixi» asari kimga tegishli?",
    "javob": [
      { "matn": "Arrian", "correct": false },
      { "matn": "Poliyen", "correct": false },
      { "matn": "Gerodot", "correct": false },
      { "matn": "Kvint Kursiy Ruf", "correct": true }
    ]
  },
  {
    "id": 735,
    "savol": "Aleksandr ortga qaytib …. bo‘yida Aleksandriya Esxata (uzoq, chekka Aleksandriya) shahriga asos soladi",
    "javob": [
      { "matn": "Oks", "correct": false },
      { "matn": "Tiger", "correct": false },
      { "matn": "Yaksart", "correct": true },
      { "matn": "Frot", "correct": false }
    ]
  },
  {
    "id": 736,
    "savol": "Aleksandr Baqtriya, Sug‘diyona va Ustrushonaning bir qismini istilo qilib, …… yilda Hindistonga hujum boshlaydi",
    "javob": [
      { "matn": "mil. avv. 318", "correct": false },
      { "matn": "mil. avv. 317", "correct": false },
      { "matn": "mil. avv. 328", "correct": false },
      { "matn": "mil. avv. 327", "correct": true }
    ]
  },
  {
    "id": 737,
    "savol": "Aleksandr bosqinidan so‘ng O‘rta Osiyoda qayerlar mustaqil bo‘lib qoladi?",
    "javob": [
      { "matn": "Xorazm", "correct": false },
      { "matn": "Farg‘ona", "correct": false },
      { "matn": "Choch, saklar yurti", "correct": false },
      { "matn": "hamma javob to`g`ri", "correct": true }
    ]
  },
  {
    "id": 738,
    "savol": "Yozma manbalarida Qadimgi Sharq va O‘rta Osiyo tarixiy-geografiyasiga oid ma’lumotlarning ko‘payishiga asos solgan omil nima?",
    "javob": [
      { "matn": "Aleksandning yurishlari", "correct": true },
      { "matn": "dengiz sayohatlari", "correct": false },
      { "matn": "davlatlar paydo bo`lishi", "correct": false },
      { "matn": "hunarmandchilik rivoji", "correct": false }
    ]
  },
  {
    "id": 739,
    "savol": "Mil. avv. 293 yilda Salavk o‘g‘li Antioxni Sharqiy satrapliklarga, ya’ni ……… viloyatlariga o‘zining noibi etib tayinlaydi.",
    "javob": [
      { "matn": "Kichik Osiyo", "correct": false },
      { "matn": "O`rta Osiyo", "correct": true },
      { "matn": "Bobil", "correct": false },
      { "matn": "Yunoniston", "correct": false }
    ]
  },
  {
    "id": 740,
    "savol": "Yunon-Baqtriya davlati qachon paydo bo`lgan?",
    "javob": [
      { "matn": "m/a 230", "correct": false },
      { "matn": "m/a 220", "correct": false },
      { "matn": "m/a 320", "correct": false },
      { "matn": "m/a 250", "correct": true }
    ]
  },
  {
    "id": 741,
    "savol": "Qadimgi mualliflar Baqtriyaning poytaxti ……………ni bir necha marta tilga olganlar",
    "javob": [
      { "matn": "qiziltepa", "correct": false },
      { "matn": "maroqand", "correct": false },
      { "matn": "aleksandiriya esxata", "correct": false },
      { "matn": "baqtra", "correct": true }
    ]
  },
  {
    "id": 742,
    "savol": "Qang` davlati qachon paydo bo`lgan?",
    "javob": [
      { "matn": "m/a III asr boshlarida", "correct": true },
      { "matn": "m/a III o`rtalarida", "correct": false },
      { "matn": "m/a II boshlarida", "correct": false },
      { "matn": "m/a II o`rtalarida", "correct": false }
    ]
  },
  {
    "id": 743,
    "savol": "Avestoning Visprat qismi qanday manoni anglatadi?",
    "javob": [
      { "matn": "qurbonlik keltirish", "correct": false },
      { "matn": "barcha hukmronlar", "correct": true },
      { "matn": "qadrlash", "correct": false },
      { "matn": "devlarga qarshi qonun", "correct": false }
    ]
  },
  {
    "id": 744,
    "savol": "Avestoning Videvdat qismi qanday manoni anglatadi?",
    "javob": [
      { "matn": "qurbonlik keltirish", "correct": false },
      { "matn": "barcha hukmronlar", "correct": false },
      { "matn": "qadrlash", "correct": false },
      { "matn": "devlarga qarshi qonun", "correct": true }
    ]
  },
  {
    "id": 745,
    "savol": "Avestoning yasht qismi qanday manoni anglatadi?",
    "javob": [
      { "matn": "qurbonlik keltirish", "correct": false },
      { "matn": "barcha hukmronlar", "correct": false },
      { "matn": "qadrlash", "correct": true },
      { "matn": "devlarga qarshi qonun", "correct": false }
    ]
  },
  {
    "id": 746,
    "savol": "Mil. avv. 522-486 yillarda hukmronlik qilgan ahamoniylar sulolasi vakili kim?",
    "javob": [
      { "matn": "Doro I", "correct": true },
      { "matn": "Doro III", "correct": false },
      { "matn": "Kambiz", "correct": false },
      { "matn": "Kir II", "correct": false }
    ]
  },
  {
    "id": 747,
    "savol": "Gerodot Tarix asarida qaysi O`rta Osiyo xalqlarini eng ko'p tilga oladi?",
    "javob": [
      { "matn": "eroniylarni", "correct": false },
      { "matn": "baqtraliklar", "correct": false },
      { "matn": "saklar", "correct": false },
      { "matn": "massagetlar", "correct": true }
    ]
  },
  {
    "id": 748,
    "savol": "Maroqanda ahamoniylar davrida uning maydoni ……gektardan iborat bo‘lgan.",
    "javob": [
      { "matn": "219", "correct": true },
      { "matn": "229", "correct": false },
      { "matn": "209", "correct": false },
      { "matn": "218", "correct": false }
    ]
  },
  {
    "id": 749,
    "savol": "O‘rta Osiyo hududini bosib olishga harakat qilib ko‘rgan dastlabki fors podshosi kim bo‘lgan?",
    "javob": [
      { "matn": "Doro I", "correct": false },
      { "matn": "Kir II", "correct": true },
      { "matn": "Kserks", "correct": false },
      { "matn": "Doro II", "correct": false }
    ]
  },
  {
    "id": 750,
    "savol": "Kir II tomonidan bosib olingan O‘rta Osiyo hududlarini aniqlang.",
    "javob": [
      { "matn": "Parfiya, Midiya va Lidiya", "correct": false },
      { "matn": "Parfiya, Marg‘iyona va Baqtriya", "correct": true },
      { "matn": "Midiya, Armaniston va Lidiya", "correct": false },
      { "matn": "Parfiya, So‘g‘diyona va Gurjiston", "correct": false }
    ]
  },
  {
    "id": 751,
    "savol": "Fors shohi Kir II qachon ulkan lashkar bilan massagetlar ustiga yurish qiladi?",
    "javob": [
      { "matn": "mil.avv.522-yil", "correct": false },
      { "matn": "mil.avv.530-yil", "correct": true },
      { "matn": "mil.avv.545-yil", "correct": false },
      { "matn": "mil.avv.540-yil", "correct": false }
    ]
  },
  {
    "id": 752,
    "savol": "Fors shohi Kir II ning massagetlar ustiga yurishi haqida qaysi tarixchi yozib qoldirgan?",
    "javob": [
      { "matn": "Platon", "correct": false },
      { "matn": "Poliyen", "correct": false },
      { "matn": "Gerodot", "correct": true },
      { "matn": "Gomer", "correct": false }
    ]
  },
  {
    "id": 753,
    "savol": "Qadimda kim “tarix otasi” deya yuritilgan?",
    "javob": [
      { "matn": "Platon", "correct": false },
      { "matn": "Poliyen", "correct": false },
      { "matn": "Gomer", "correct": false },
      { "matn": "Gerodot", "correct": true }
    ]
  },
  {
    "id": 754,
    "savol": "Kir II massagetlar ustiga yurish qilganda massagetlar malikasi kim bo‘lgan?",
    "javob": [
      { "matn": "Tug‘shoda", "correct": false },
      { "matn": "Ravshanak", "correct": false },
      { "matn": "Sparangiz", "correct": false },
      { "matn": "To‘maris", "correct": true }
    ]
  },
  {
    "id": 755,
    "savol": "Forslar massagetlar hududiga bostirib kirganlarida malika To‘maris bosqinchilarga qanday taklif bilan murojaat qiladi?",
    "javob": [
      { "matn": "tinch omon ketish taklifi bilan", "correct": true },
      { "matn": "unga turmushga chiqish taklifi bilan", "correct": false },
      { "matn": "omon qolish niyatida katta to‘lov taklifi bilan", "correct": false },
      { "matn": "yurtining bir qismini berish taklifi bilan", "correct": false }
    ]
  },
  {
    "id": 756,
    "savol": "Gerodot qaysi jang haqida “Bu jang….. barcha janglardan ham dahshatliroq edi” deb hikoya qiladi?",
    "javob": [
      { "matn": "saklarning asosiy kuchlari bilan forslarning janggi haqida", "correct": false },
      { "matn": "massagetlarning asosiy kuchlari bilan forslarning janggi haqida", "correct": true },
      { "matn": "Marafon janggi haqida", "correct": false },
      { "matn": "yunon-makedon janggi haqida", "correct": false }
    ]
  },
  {
    "id": 757,
    "savol": "Fors podshosi Kir II qaysi jangda halok bo‘lganligini aniqlang.",
    "javob": [
      { "matn": "skiflar bilan bo‘lgan jangda", "correct": false },
      { "matn": "massagetlar bilan bo‘lgan jangda", "correct": true },
      { "matn": "midiyaliklar bilan bo‘lgan jangda", "correct": false },
      { "matn": "saklar bilan bo‘lgan jangda", "correct": false }
    ]
  },
  {
    "id": 758,
    "savol": "Fors podshosi Kir II qachon halok bo‘lgan?",
    "javob": [
      { "matn": "mil.avv 558-yil", "correct": false },
      { "matn": "mil.avv 539-yil", "correct": false },
      { "matn": "mil.avv 525-yil", "correct": false },
      { "matn": "mil.avv 530-yil", "correct": true }
    ]
  },
  {
    "id": 759,
    "savol": "Fors shohi Doro I hukmronligining birinchi yilida qayerda fors istilochilariga qarshi yirik xalq qo‘zg‘oloni ko‘tarilgan edi?",
    "javob": [
      { "matn": "So‘g‘diyona", "correct": false },
      { "matn": "Baqtriya", "correct": false },
      { "matn": "Xorazm", "correct": false },
      { "matn": "Marg‘iyona", "correct": true }
    ]
  },
  {
    "id": 760,
    "savol": "Marg‘iyonada forslarga qarshi ko‘tarilgan xalq qo‘zg‘oloni rahbari kim edi?",
    "javob": [
      { "matn": "Skunxa", "correct": false },
      { "matn": "Shiroq", "correct": false },
      { "matn": "To‘maris", "correct": false },
      { "matn": "Frada", "correct": true }
    ]
  },
  {
    "id": 761,
    "savol": "Fors podshosi Doro I qo‘shini va Frada boshchiligidagi qo‘zg‘olonchilar o‘rtasida hal qiluvchi jang qachon bo‘lganligini aniqlang.",
    "javob": [
      { "matn": "mil.avv.521-yil", "correct": false },
      { "matn": "mil.avv.522-yil", "correct": true },
      { "matn": "mil.avv.519-yil", "correct": false },
      { "matn": "mil.avv.530-yil", "correct": false }
    ]
  },
  {
    "id": 762,
    "savol": "Marg‘iyonadagi qo‘zg‘olon rahbari Fradaning taqdiri nima bo‘ldi?",
    "javob": [
      { "matn": "boshqa yurtga qochib ketdi", "correct": false },
      { "matn": "Doro I ning xizmatiga o‘tdi", "correct": false },
      { "matn": "asir olinib, qatl etildi", "correct": true },
      { "matn": "o‘zini-o‘zi o‘ldirdi", "correct": false }
    ]
  },
  {
    "id": 763,
    "savol": "Ahamoniylar sulolasi vakili Doro I ning Frada bilan janglari va saklar ustiga yurishi haqida ma’lumotlar qayerda keltirilgan?",
    "javob": [
      { "matn": "Behistun qoyatosh yozuvlarida", "correct": true },
      { "matn": "Geradot asarlarida", "correct": false },
      { "matn": "Qadimgi O‘rta Osiyo manbalarida", "correct": false },
      { "matn": "Doro I yilnomalarida", "correct": false }
    ]
  },
  {
    "id": 764,
    "savol": "Doro I saklar ustiga qachon yurish qilgan?",
    "javob": [
      { "matn": "hukmronligining birinchi yili", "correct": false },
      { "matn": "hukmronligining ikkinchi yili", "correct": false },
      { "matn": "hukmronligining uchinchi yili", "correct": true },
      { "matn": "hukmronligining to‘rtinchi yili", "correct": false }
    ]
  },
  {
    "id": 765,
    "savol": "Fors podshosi Doro I qachon saklar ustiga yurish qilgan edi?",
    "javob": [
      { "matn": "mil.avv.520-yil", "correct": false },
      { "matn": "mil.avv.522-yil", "correct": false },
      { "matn": "mil.avv.519-yil", "correct": true },
      { "matn": "mil.avv.521-yil", "correct": false }
    ]
  },
  {
    "id": 766,
    "savol": "“Behistun bitik” larida Doro I saklarning qaysi guruhiga qarshi jangga kirganligi haqida yozilgan?",
    "javob": [
      { "matn": "saka tigraxauda (uchi o‘tkir kuloh kiyib yuruvchi saklar)", "correct": true },
      { "matn": "saka tiay-taradarayya (daryoning narigi tomonida yashovchi saklar)", "correct": false },
      { "matn": "saka xaumovarka (muqaddas ichimlikka sig‘inuvchi saklar)", "correct": false },
      { "matn": "saka akunamatata", "correct": false }
    ]
  },
  {
    "id": 767,
    "savol": "Saklar yurtiga Doro I yurish qilganda ularning sardori Skunxa bo‘lganligi haqida qayerda ma’lumot keltirilgan?",
    "javob": [
      { "matn": "Poliyen asarida", "correct": false },
      { "matn": "«Behistun» bitiklarida", "correct": true },
      { "matn": "Gerodotning asarida", "correct": false },
      { "matn": "«Avesto» kitobida", "correct": false }
    ]
  },
  {
    "id": 768,
    "savol": "Fors podshosi Doro I ning saklar ustiga yurish qilgan qo‘shinini Shiroq ismli cho‘pon mag‘lub qilgani haqidagi ma’lumot bizgacha qanday yetib kelgan?",
    "javob": [
      { "matn": "«Behistun» bitiklari orqali", "correct": false },
      { "matn": "Gerodotning rivoyati orqali", "correct": false },
      { "matn": "Poliyenning rivoyati orqali", "correct": true },
      { "matn": "«Avesto» asari orqali", "correct": false }
    ]
  },
  {
    "id": 769,
    "savol": "Tarixchi Poliyen qaysi asrda yashaganligini aniqlang.",
    "javob": [
      { "matn": "mil.avv.II asrda", "correct": true },
      { "matn": "mil.avv.V asrda", "correct": false },
      { "matn": "mil.avv.VI asrda", "correct": false },
      { "matn": "mil.avv.IV asrda", "correct": false }
    ]
  },
  {
    "id": 770,
    "savol": "Poliyenning ma’lumotiga ko‘ra, Doro I ning qaysi xalq ustiga qilgan yurishi muvaffaqiyatsiz tugagan?",
    "javob": [
      { "matn": "massagetlar ustiga", "correct": false },
      { "matn": "so‘g‘diylar ustiga", "correct": false },
      { "matn": "marg‘iyonaliklar ustiga", "correct": false },
      { "matn": "saklar ustiga", "correct": true }
    ]
  },
  {
    "id": 771,
    "savol": "Bosib olingan mamlakatlarni itoatda tutmoq uchun ahamoniylar yagona davlatni bo‘lib tashlagan alohida viloyatlar qanday atalgan?",
    "javob": [
      { "matn": "kent", "correct": false },
      { "matn": "sagaris", "correct": false },
      { "matn": "polis", "correct": false },
      { "matn": "satraplik", "correct": true }
    ]
  },
  {
    "id": 772,
    "savol": "Satraplik so‘zi forscha “xshatra” so‘zidan kelib chiqqan. “Xshatra” atamasining ma’nosini toping.",
    "javob": [
      { "matn": "mamlakat", "correct": false },
      { "matn": "tuman", "correct": false },
      { "matn": "viloyat", "correct": true },
      { "matn": "davlat", "correct": false }
    ]
  },
  {
    "id": 773,
    "savol": "Quyidagi javoblarning qaysi biri satraplarning maqomi va holatini to‘g‘ri aks ettiradi?",
    "javob": [
      { "matn": "satrap cheklanmagan hokimiyatga ega bo‘lgan va ko‘pchiligi ahamoniylar sulolasi vakillaridan bo‘lgan", "correct": true },
      { "matn": "satrap faqat davlat mudofaasi bilan shug‘ullanardi", "correct": false },
      { "matn": "satraplar xalq tomonidan saylanardi", "correct": false },
      { "matn": "satrap faqat soliq yig‘ish bilan shug‘ullangan", "correct": false }
    ]
  },
  {
    "id": 774,
    "savol": "O‘rta Osiyoning forslar bosib olgan viloyatlari nechta satraplikka bo‘lingan?",
    "javob": [
      { "matn": "to‘rt satraplikka", "correct": false },
      { "matn": "besh satraplikka", "correct": false },
      { "matn": "ikki satraplikka", "correct": false },
      { "matn": "uch satraplikka", "correct": true }
    ]
  },
  {
    "id": 775,
    "savol": "O‘rta Osiyoning har bir satrapligi……",
    "javob": [
      { "matn": "yoshlarni qo‘shinga jalb qilgan", "correct": false },
      { "matn": "yillik soliq to‘lagan", "correct": true },
      { "matn": "bir necha mayda birliklarga bo‘lingan", "correct": false },
      { "matn": "qo‘shin uchun qurol-yarog‘ yasab bergan", "correct": false }
    ]
  },
  {
    "id": 776,
    "savol": "O‘rta Osiyo satrapliklari forslarga yillik soliq to‘lashdan tashqari yana nimalarga jalb etilgan?",
    "javob": [
      { "matn": "forslarni oziq-ovqat bilan ta’minlab turgan", "correct": false },
      { "matn": "forslarning harbiy yurishlarida qatnashib turgan", "correct": false },
      { "matn": "saroy va ibodatxonalar qurilishiga ham safarbar etilgan", "correct": true },
      { "matn": "fors qo‘shiniga qurol-yarog‘lar yasab berishgan", "correct": false }
    ]
  },
  {
    "id": 777,
    "savol": "Ahamoniylardan kimlarning hukmronligi davrida O‘rta Osiyo xalqlari yunon-fors urushlarida qatnashgan edilar?",
    "javob": [
      { "matn": "Kambiz II va Doro I davrida", "correct": false },
      { "matn": "Doro I va Kserks davrida", "correct": true },
      { "matn": "Kir II va Doro I davrida", "correct": false },
      { "matn": "Doro I va Doro III davrida", "correct": false }
    ]
  },
  {
    "id": 778,
    "savol": "Marafon jangida fors qo‘shinlari markazida O‘rta Osiyoning qaysi xalqi muvaffaqiyatli janglar olib borgan?",
    "javob": [
      { "matn": "massagetlar", "correct": false },
      { "matn": "xorazmliklar", "correct": false },
      { "matn": "baqtriyaliklar", "correct": false },
      { "matn": "saklar", "correct": true }
    ]
  },
  {
    "id": 779,
    "savol": "Marafon jangi qachon bo‘lgan?",
    "javob": [
      { "matn": "mil.avv 480-yil", "correct": false },
      { "matn": "mil.avv 479-yil", "correct": false },
      { "matn": "mil.avv 490-yil", "correct": true },
      { "matn": "mil.avv 449-yil", "correct": false }
    ]
  },
  {
    "id": 780,
    "savol": "Qaysi tarixchi Kserks boshchiligida yunonlar ustiga yurish qilgan O‘rta Osiyolik jangchilar qurol-yarog‘larini mufassal tasvirlagan?",
    "javob": [
      { "matn": "Poliyen", "correct": false },
      { "matn": "Gerodot", "correct": true },
      { "matn": "Sima Szyan", "correct": false },
      { "matn": "Arrian", "correct": false }
    ]
  },
  {
    "id": 781,
    "savol": "Yunon-fors urushida baqtriyaliklar jangda qanday qurollar bilan qatnashganlar?",
    "javob": [
      { "matn": "xanjar va jangovar boltalar bilan", "correct": false },
      { "matn": "xanjar va nayzalar bilan", "correct": false },
      { "matn": "kamon va oyboltalar bilan", "correct": false },
      { "matn": "kamon va nayzalar bilan", "correct": true }
    ]
  },
  {
    "id": 782,
    "savol": "Yunon-fors urushlarida qaysi O‘rta Osiyo xalqi xanjar va jangovar boltalar bilan qatnashgan?",
    "javob": [
      { "matn": "massagetlar", "correct": false },
      { "matn": "baqtriyaliklar", "correct": false },
      { "matn": "saklar", "correct": true },
      { "matn": "xorazmliklar", "correct": false }
    ]
  },
  {
    "id": 783,
    "savol": "Yunon-fors urushlarida xorazmiylar va so‘g‘diylar qanday qurollar bilan qatnashganlar?",
    "javob": [
      { "matn": "xanjar va jangovar boltalar bilan", "correct": false },
      { "matn": "kamon va nayzalar bilan", "correct": true },
      { "matn": "xanjar va nayzalar bilan", "correct": false },
      { "matn": "kamon va oyboltalar bilan", "correct": false }
    ]
  },
  {
    "id": 784,
    "savol": "Kserks qo‘shinidagi eng yaxshi jangchilar kimlar hisoblangan?",
    "javob": [
      { "matn": "baqtriya va massaget suvoriylari", "correct": false },
      { "matn": "sak va baqtriya suvoriylari", "correct": true },
      { "matn": "sak va massaget jangchilari", "correct": false },
      { "matn": "baqtriya va so‘g‘d askarlari", "correct": false }
    ]
  },
  {
    "id": 785,
    "savol": "Mil.avv VI – IV asrlarda O‘rta Osiyo madaniyatining rivojlanishi qanday manbalar asosida o‘rganilgan?",
    "javob": [
      { "matn": "yozma", "correct": false },
      { "matn": "arxeologik", "correct": false },
      { "matn": "yozma va arxeologik", "correct": true },
      { "matn": "moddiy", "correct": false }
    ]
  },
  {
    "id": 786,
    "savol": "Ahamoniylar davrida o‘lkamizning rivojlangan yirik qadimiy shahar-qal’alarini aniqlang.",
    "javob": [
      { "matn": "Qiziltepa, Uzunqir, Yerqo‘rg‘on, Afrosiyob", "correct": true },
      { "matn": "Qiziltepa, Oltintepa, Ko‘zaliqir, Afrosiyob", "correct": false },
      { "matn": "Qiziltepa, Yerqo‘rg‘on, Baqtra, Afrosiyob", "correct": false },
      { "matn": "Qiziltepa, Yerqo‘rg‘on, Ko‘zaliqir, Uzunqir", "correct": false }
    ]
  },
  {
    "id": 787,
    "savol": "Amudaryo xazinasi qachon topilganligini aniqlang.",
    "javob": [
      { "matn": "1807-yil", "correct": false },
      { "matn": "1877-yil", "correct": true },
      { "matn": "1870-yil", "correct": false },
      { "matn": "1822-yil", "correct": false }
    ]
  },
  {
    "id": 788,
    "savol": "Amudaryo xazinasidan qanday buyumlar topilgan?",
    "javob": [
      { "matn": "mis va kumush", "correct": false },
      { "matn": "bronza va oltin", "correct": false },
      { "matn": "oltin va kumush", "correct": true },
      { "matn": "la’l va mis", "correct": false }
    ]
  },
  {
    "id": 789,
    "savol": "“Amudaryo xazinasi” bugungi kunda qayerda saqlanmoqda?",
    "javob": [
      { "matn": "Parij muzeyida", "correct": false },
      { "matn": "Peterburg davlat muzeyida", "correct": false },
      { "matn": "Britaniya muzeyida", "correct": true },
      { "matn": "O‘zbekiston tarixi davlat muzeyida", "correct": false }
    ]
  },
  {
    "id": 790,
    "savol": "Amudaryo xazinasiga oid buyumni qayd eting.",
    "javob": [
      { "matn": "bronzadan yasalgan qozon", "correct": false },
      { "matn": "temirdan ishlangan xanjar va qin", "correct": false },
      { "matn": "bronzadan yasalgan dubulg‘a", "correct": false },
      { "matn": "oltin bilaguzuk", "correct": true }
    ]
  },
  {
    "id": 791,
    "savol": "Oltindan yasalgan ot-arava nusxasi nechanchi asrlarga oid?",
    "javob": [
      { "matn": "mil.avv VI-V asrlar", "correct": false },
      { "matn": "mil.avv V-IV asrlar", "correct": true },
      { "matn": "mil.avv IV-III asrlar", "correct": false },
      { "matn": "mil.avv III-II asrlar", "correct": false }
    ]
  },
  {
    "id": 792,
    "savol": "Quyidagilardan qaysi voqea boshqalarga nisbatan keyin sodir bo‘lgan?",
    "javob": [
      { "matn": "Doro I ning saklar ustiga yurishi muvaffaqiyatsiz tugaydi", "correct": false },
      { "matn": "Kir II massagetlar bilan jangda halok bo‘ldi", "correct": false },
      { "matn": "Doro I yunonlarga qarshi Marafon jangida mag‘lubiyatga uchradi", "correct": true },
      { "matn": "Marg‘iyonada Frada boshchiligidagi qo‘zg‘olon bostirildi", "correct": false }
    ]
  },
  {
    "id": 793,
    "savol": "Nechanchi asrlarda O‘rta Osiyo jangchilari sovut kiyib yurganlar, boshlarida dubulg‘a bo‘lgan, xanjar, jangovar oybolta va nayzalar bilan qurollangan?",
    "javob": [
      { "matn": "mil.avv IX-VIII asrlarda", "correct": false },
      { "matn": "Mil.avv VIII-VI asrlarda", "correct": false },
      { "matn": "Mil.avv VII-IV asrlarda", "correct": true },
      { "matn": "Mil.avv VI-IV asrlarda", "correct": false }
    ]
  },
  {
    "id": 794,
    "savol": "Mil.avv VII – IV asrlarda O‘rta Osiyo jangchilarining kamon o‘qi va xanjari nimadan yasalgan?",
    "javob": [
      { "matn": "mis va bronzadan", "correct": false },
      { "matn": "temir va bronzadan", "correct": true },
      { "matn": "tosh va temirdan", "correct": false },
      { "matn": "oltin va kumushdan", "correct": false }
    ]
  },
  {
    "id": 795,
    "savol": "Mil.avv.VII-IV asrlarda O‘rta Osiyo xalqlari orasida xanjar qanday atalgan?",
    "javob": [
      { "matn": "«ostrakon»", "correct": false },
      { "matn": "«sagaris»", "correct": false },
      { "matn": "«ossuariy»", "correct": false },
      { "matn": "«akinak»", "correct": true }
    ]
  },
  {
    "id": 796,
    "savol": "Mil.avv.VII-IV asrlarda O‘rta Osiyo xalqlari orasida «sagaris» qanday qurol bo‘lgan?",
    "javob": [
      { "matn": "xanjar", "correct": false },
      { "matn": "nayza", "correct": false },
      { "matn": "jangovar oybolta", "correct": true },
      { "matn": "bargustvon", "correct": false }
    ]
  },
  {
    "id": 797,
    "savol": "Mil.avv VII – IV asrlarda uzoq masofadan turib jang qilish quroli sifatida nimadan foydalanilgan?",
    "javob": [
      { "matn": "xanjardan", "correct": false },
      { "matn": "jangovar oyboltadan", "correct": false },
      { "matn": "toshdan", "correct": false },
      { "matn": "kamondan", "correct": true }
    ]
  },
  {
    "id": 798,
    "savol": "Jangovar otlar ustiga va ko‘kraklariga temirdan yasalgan nima yopilgan?",
    "javob": [
      { "matn": "sagaris", "correct": false },
      { "matn": "akinak", "correct": false },
      { "matn": "bargustvon", "correct": true },
      { "matn": "ossuariy", "correct": false }
    ]
  },
  {
    "id": 799,
    "savol": "Mil.avv. VII-IV asrlarda O‘rta Osiyo xalqlarining jang uslubiga ko‘ra dushmanga qarshi hujumni kimlar boshlab berishgan?",
    "javob": [
      { "matn": "piyodalar", "correct": false },
      { "matn": "suvoriylar", "correct": true },
      { "matn": "kamonchilar", "correct": false },
      { "matn": "ayg‘oqchilar", "correct": false }
    ]
  },
  {
    "id": 800,
    "savol": "Mil.avv. VII-IV asrlarda suvoriylar dushmanga qarshi qanday jang taktikasini qo‘llaganlar?",
    "javob": [
      { "matn": "aylana shaklida dushman safini o‘rab olgan", "correct": false },
      { "matn": "dushman qo‘shinining qanotini aylanib o‘tib, orqadan hujum qilgan", "correct": false },
      { "matn": "ot choptirib kelayotib o‘q-yoy, nayza yoki xanjar bilan dushmanga hamla qilgan", "correct": true },
      { "matn": "dushman suvoriylariga qarshi ot yonida turib piyoda jang qilgan", "correct": false }
    ]
  },
  {
    "id": 801,
    "savol": "Mil.avv VII – IV asrlarda O‘rta Osiyo shaharlari nimalar bilan o‘rab olingan edi?",
    "javob": [
      { "matn": "burj va shinaklari bo‘lgan mustahkam devorlar bilan", "correct": true },
      { "matn": "ariqlar bilan", "correct": false },
      { "matn": "daraxtlar bilan", "correct": false },
      { "matn": "hayvonlar bilan", "correct": false }
    ]
  },
  {
    "id": 802,
    "savol": "Mil.avv VII – IV asrlarda O‘rta Osiyo shaharlarining tashqi devorlar bo‘ylab joylashgan dumaloq burjlar ichida kimlar joylashgan?",
    "javob": [
      { "matn": "suvoriylar", "correct": false },
      { "matn": "piyodalar", "correct": false },
      { "matn": "kamonchilar", "correct": true },
      { "matn": "ayg‘oqchilar", "correct": false }
    ]
  },
  {
    "id": 803,
    "savol": "Mil.avv VII – IV asrlarda O‘rta Osiyo shaharlarida qal’aga kiradigan yo‘lni nimalar to‘sib turgan?",
    "javob": [
      { "matn": "suv to‘latilgan chuqur va keng xandaq", "correct": true },
      { "matn": "hayvonlar", "correct": false },
      { "matn": "o‘rmonlar", "correct": false },
      { "matn": "tog‘lar", "correct": false }
    ]
  },
  {
    "id": 804,
    "savol": "Aleksandr qachon Makedoniya podshosi bo‘lgan edi?",
    "javob": [
      { "matn": "mil.avv.337-yil", "correct": false },
      { "matn": "mil.avv.335-yil", "correct": false },
      { "matn": "mil.avv.334-yil", "correct": false },
      { "matn": "mil.avv.336-yil", "correct": true }
    ]
  },
  {
    "id": 805,
    "savol": "Makedoniya podshosi Aleksandr nechanchi yilda Sharqqa yurish boshladi?",
    "javob": [
      { "matn": "Mil.avv 334-yilda", "correct": true },
      { "matn": "Mil.avv 336-yil", "correct": false },
      { "matn": "Mil.avv 330-yil", "correct": false },
      { "matn": "Mil.avv 329-yil", "correct": false }
    ]
  },
  {
    "id": 806,
    "savol": "Makedoniyalik Aleksandrning Sharqqa yurishi necha yil davom etgan?",
    "javob": [
      { "matn": "5 yil", "correct": false },
      { "matn": "8 yil", "correct": false },
      { "matn": "10 yil", "correct": true },
      { "matn": "12 yil", "correct": false }
    ]
  },
  {
    "id": 807,
    "savol": "Makedoniyalik Aleksandr nima maqsadda bosib olingan shaharlarga yunonlarni joylashtirdi?",
    "javob": [
      { "matn": "aholini ellinlashtirish maqsadida", "correct": false },
      { "matn": "ulkan hududda o‘z hukmronligini mustahkamlash maqsadida", "correct": true },
      { "matn": "bosib olingan shaharlar aholisining hammasi qirilib ketganligi uchun", "correct": false },
      { "matn": "yunonlarni oliy irq deb bilgani uchun", "correct": false }
    ]
  },
  {
    "id": 808,
    "savol": "Ahamoniylar sulolasidan bo‘lgan oxirgi shohni aniqlang.",
    "javob": [
      { "matn": "Doro I", "correct": false },
      { "matn": "Doro II", "correct": false },
      { "matn": "Doro III", "correct": true },
      { "matn": "Kserks", "correct": false }
    ]
  },
  {
    "id": 809,
    "savol": "Makedoniyalik Aleksandr qachon Fors shohi Doro III qo‘shinlarini tor-mor qilgan edi?",
    "javob": [
      { "matn": "mil.avv.329-yil", "correct": false },
      { "matn": "mil.avv.323-yil", "correct": false },
      { "matn": "mil.avv.327-yil", "correct": false },
      { "matn": "mil.avv.330-yil", "correct": true }
    ]
  },
  {
    "id": 810,
    "savol": "Makedoniyalik Aleksandr nima maqsadda Amudaryoning narigi tomonida yashovchi elatlarni bo‘ysundirishga qaror qilgan edi?",
    "javob": [
      { "matn": "Eronga yurish qilishdan oldin orqa tomonni xavfsizlantirish maqsadida", "correct": false },
      { "matn": "Hindistonga yurish qilishdan oldin orqa tomonni xavfsizlantirish maqsadida", "correct": true },
      { "matn": "Xorazmga yurish qilishdan oldin orqa tomonni xavfsizlantirish maqsadida", "correct": false },
      { "matn": "Qora dengiz bo‘yiga yurish qilishdan oldin orqa tomonni xavfsizlantirish maqsadida", "correct": false }
    ]
  },
  {
    "id": 811,
    "savol": "Makedoniyalik Aleksandrning O‘rta Osiyoga yurishida birinchi bo‘lib qaysi shahar uning yo‘lini to‘sgan edi?",
    "javob": [
      { "matn": "Nautaka", "correct": false },
      { "matn": "Kiropolis", "correct": false },
      { "matn": "Marv", "correct": false },
      { "matn": "Baqtra", "correct": true }
    ]
  },
  {
    "id": 812,
    "savol": "Mil.avv IV asrda Baqtriya poytaxti qaysi shahar edi?",
    "javob": [
      { "matn": "Nautaka", "correct": false },
      { "matn": "Kiropolis", "correct": false },
      { "matn": "Marv", "correct": false },
      { "matn": "Baqtra", "correct": true }
    ]
  },
  {
    "id": 813,
    "savol": "Baqtriya poytaxti bo‘lgan Baqtra shahrining ikkinchi nomini aniqlang.",
    "javob": [
      { "matn": "Politimet", "correct": false },
      { "matn": "Zariasp", "correct": true },
      { "matn": "Zarqaynar", "correct": false },
      { "matn": "Kurushkat", "correct": false }
    ]
  },
  {
    "id": 814,
    "savol": "Makedoniyalik Aleksandr bosqini davrida Baqtriya satrapi kim bo‘lgan?",
    "javob": [
      { "matn": "Dadarshish", "correct": false },
      { "matn": "Xoriyen", "correct": false },
      { "matn": "Ariamen", "correct": false },
      { "matn": "Bess", "correct": true }
    ]
  },
  {
    "id": 815,
    "savol": "Aleksandrga qarshi kurashda Bess qanday yo'l tutadi?",
    "javob": [
      { "matn": "Aleksandr bilan yakkama-yakka jang qilib uni yengadi", "correct": false },
      { "matn": "Baqtra shahrini dushmanga qoldirib, Amudaryoning narigi tarafiga qochib ketadi", "correct": true },
      { "matn": "Zarafshon daryosi bo‘yida unga qarshi pistirma qo‘yadi", "correct": false },
      { "matn": "o‘zini o‘zi o‘ldiradi", "correct": false }
    ]
  },
  {
    "id": 816,
    "savol": "Aleksandr kimning Kir II va Doro I tajribasiga tayanib bergan maslahatini yodda tutgan edi?",
    "javob": [
      { "matn": "Aristobul", "correct": false },
      { "matn": "Oksiart", "correct": false },
      { "matn": "Aristotel", "correct": true },
      { "matn": "Bess", "correct": false }
    ]
  },
  {
    "id": 817,
    "savol": "Makedoniyalik Aleksandr qo‘shinlari qachon Amudaryodan o‘ta boshladi?",
    "javob": [
      { "matn": "miloddan avvalgi 323- yilda", "correct": false },
      { "matn": "miloddan avvalgi 333- yilda", "correct": false },
      { "matn": "miloddan avvalgi 329- yilda", "correct": true },
      { "matn": "miloddan avvalgi 330- yilda", "correct": false }
    ]
  },
  {
    "id": 818,
    "savol": "Amudaryoning qadimgi nomi nima bo‘lgan?",
    "javob": [
      { "matn": "Yaksart", "correct": false },
      { "matn": "Politimet", "correct": false },
      { "matn": "Jayhun", "correct": false },
      { "matn": "Oks", "correct": true }
    ]
  },
  {
    "id": 819,
    "savol": "Nautaka deb nomlangan hududning geografik o‘rnini aniqlang.",
    "javob": [
      { "matn": "Sirdaryo qirg‘oqlaridagi hudud", "correct": false },
      { "matn": "Qashqadaryo vohasining sharqiy qismi", "correct": true },
      { "matn": "Farg‘ona sohasining sharqiy qismi", "correct": false },
      { "matn": "Surxondaryo vohasining sharqiy qismi", "correct": false }
    ]
  },
  {
    "id": 820,
    "savol": "Maroqanda shahri hozirgi qaysi shahar hisoblanadi?",
    "javob": [
      { "matn": "Buxoro", "correct": false },
      { "matn": "Marv", "correct": false },
      { "matn": "Marg‘ilon", "correct": false },
      { "matn": "Samarqand", "correct": true }
    ]
  },
  {
    "id": 821,
    "savol": "Makedoniyalik Aleksandr qo‘shinlari qachon Maroqandani egallaydilar?",
    "javob": [
      { "matn": "mil.avv.330-yil", "correct": false },
      { "matn": "mil.avv.327-yil", "correct": false },
      { "matn": "mil.avv.329-yil", "correct": true },
      { "matn": "mil.avv.328-yil", "correct": false }
    ]
  },
  {
    "id": 822,
    "savol": "Makedoniyalik Aleksandr Maroqandani egallagach qayerni bosib olish uchun yurish qilgan?",
    "javob": [
      { "matn": "Kurushkat va Sirdaryo qirg‘oqlarini", "correct": true },
      { "matn": "Nautaka va uning atrofini", "correct": false },
      { "matn": "Xorazm hududlarini", "correct": false },
      { "matn": "Marg‘iyona viloyatini", "correct": false }
    ]
  },
  {
    "id": 823,
    "savol": "Sirdaryo qirg‘oqlarida joylashgan Kurushkat shahriga kim asos solgan?",
    "javob": [
      { "matn": "Kserks", "correct": false },
      { "matn": "Makedoniyalik Aleksandr", "correct": false },
      { "matn": "Kir II", "correct": true },
      { "matn": "Kambiz", "correct": false }
    ]
  },
  {
    "id": 824,
    "savol": "Kurushkat shahrining ikkinchi nomini aniqlang.",
    "javob": [
      { "matn": "Zariasp", "correct": false },
      { "matn": "Politimet", "correct": false },
      { "matn": "Kiropolis", "correct": true },
      { "matn": "Karmana", "correct": false }
    ]
  },
  {
    "id": 825,
    "savol": "Yunon-makedon bosqinchilariga qarshi So‘g‘diyona xalqi kurashiga tez orada kimlar qo‘shiladi?",
    "javob": [
      { "matn": "sak va massagetlar", "correct": false },
      { "matn": "baqtriyaliklar va saklar", "correct": true },
      { "matn": "xorazmiylar va parfiyaliklar", "correct": false },
      { "matn": "baqtriyaliklar va xorazmiylar", "correct": false }
    ]
  },
  {
    "id": 826,
    "savol": "O‘rta Osiyoda Aleksandrga qarshi ko‘tarilgan qo‘zg‘olonga kim rahbarlik qilgan?",
    "javob": [
      { "matn": "Bess", "correct": false },
      { "matn": "Oksiart", "correct": false },
      { "matn": "Sparangiz", "correct": false },
      { "matn": "Spitaman", "correct": true }
    ]
  },
  {
    "id": 827,
    "savol": "Spitaman Maroqandani qamal qilganda, Aleksandr yordamga qancha jangchi jo‘natadi?",
    "javob": [
      { "matn": "ikki mingga yaqin", "correct": false },
      { "matn": "uch mingga yaqin", "correct": true },
      { "matn": "to‘rt mingga yaqin", "correct": false },
      { "matn": "besh mingga yaqin", "correct": false }
    ]
  },
  {
    "id": 828,
    "savol": "Spitaman qayerda makedonlarga pistirma qo‘ygandi?",
    "javob": [
      { "matn": "Zarafshon daryosi bo‘yida", "correct": true },
      { "matn": "Sirdaryo bo‘yida", "correct": false },
      { "matn": "Kurushkat shahrida", "correct": false },
      { "matn": "Amudaryo bo‘yida", "correct": false }
    ]
  },
  {
    "id": 829,
    "savol": "Makedoniyalik Aleksandr yurishi davrida qaysi daryo «Politimet» deb nomlangan?",
    "javob": [
      { "matn": "Hind daryosi", "correct": false },
      { "matn": "Sirdaryo", "correct": false },
      { "matn": "Amudaryo", "correct": false },
      { "matn": "Zarafshon", "correct": true }
    ]
  },
  {
    "id": 830,
    "savol": "Makedoniyalik Aleksandr qo‘shinining bir qismi Spitaman tomonidan qayerda qirib tashlangan?",
    "javob": [
      { "matn": "Sirdaryo bo‘yida", "correct": false },
      { "matn": "Zarafshon daryosi bo‘yida", "correct": true },
      { "matn": "Kurushkat shahrida", "correct": false },
      { "matn": "Amudaryo bo‘yida", "correct": false }
    ]
  },
  {
    "id": 831,
    "savol": "Makedoniyalik Aleksandr nima sababdan Aleksandriya Esxata qal’asini qurishni buyurgan?",
    "javob": [
      { "matn": "yunon-makedon piyoda va otliq askarlarini joylashtirish uchun", "correct": false },
      { "matn": "saklarga qarshi kurash uchun", "correct": true },
      { "matn": "O‘rta Osiyoda o‘zining markaziy qal’asi yo‘qligi uchun", "correct": false },
      { "matn": "Ravshanakka uylangani uchun", "correct": false }
    ]
  },
  {
    "id": 832,
    "savol": "Saklarga qarshi kurash uchun Aleksandr Sirdaryo bo‘yida, Xo‘jand yaqinida barpo etgan qal’a nima deb atalgan?",
    "javob": [
      { "matn": "Aleksandriya Esxata", "correct": true },
      { "matn": "Oksdagi Aleksandriya", "correct": false },
      { "matn": "Aleksandr Ekota", "correct": false },
      { "matn": "Marg‘iyona Aleksandriyasi", "correct": false }
    ]
  },
  {
    "id": 833,
    "savol": "“Aleksandriya Esxata” qal’asining ma’nosi nima?",
    "javob": [
      { "matn": "Buyuk Aleksandriya", "correct": false },
      { "matn": "Shamoldan kuchli Aleksandriya", "correct": false },
      { "matn": "Chekka Aleksandriya", "correct": true },
      { "matn": "Shoxli Aleksandriya", "correct": false }
    ]
  },
  {
    "id": 834,
    "savol": "Maroqandada maxsus harbiy qo‘shin qoldirgan Aleksandr asosiy qo‘shinlari bilan qishlash uchun qayerga jo‘naydi?",
    "javob": [
      { "matn": "Zariasp", "correct": true },
      { "matn": "Politimet", "correct": false },
      { "matn": "Zarqaynar", "correct": false },
      { "matn": "Kurushkat", "correct": false }
    ]
  },
  {
    "id": 835,
    "savol": "Aleksandr o‘z lashkarlarini necha qismga bo‘lib, So‘g‘diyonani u boshidan bu boshigacha kezib chiqadi?",
    "javob": [
      { "matn": "2 qismga", "correct": false },
      { "matn": "3 qismga", "correct": true },
      { "matn": "4 qismga", "correct": false },
      { "matn": "5 qismga", "correct": false }
    ]
  },
  {
    "id": 836,
    "savol": "Makedoniyalik Aleksandr bilan Spitaman o‘rtasidagi hal qiluvchi jang qachon bo‘lib o‘tgan edi?",
    "javob": [
      { "matn": "mil.avv.330-yil kuzida", "correct": false },
      { "matn": "mil.avv.327-yil kuzida", "correct": false },
      { "matn": "mil.avv.329-yil kuzida", "correct": false },
      { "matn": "mil.avv.328-yil kuzida", "correct": true }
    ]
  },
  {
    "id": 837,
    "savol": "Mil.avv 328-yil kuzida Spitamanning Aleksandrdan yengilib, cho‘lga chekinishiga nima sabab bo'lgan?",
    "javob": [
      { "matn": "ob-havo noqulay kelganligi uchun", "correct": false },
      { "matn": "baqtriyaliklar va saklar xoinlik qilganligi uchun", "correct": false },
      { "matn": "kuchlar teng bo‘lmaganligi uchun", "correct": true },
      { "matn": "Spitamanning oti o‘lib qolganligi uchun", "correct": false }
    ]
  },
  {
    "id": 838,
    "savol": "Spitaman Aleksandr bilan hal qiluvchi jangda yengilib, cho‘lga chekinadi va o‘sha yerda u ...",
    "javob": [
      { "matn": "mustahkam mudofaa inshootlarini barpo qiladi", "correct": false },
      { "matn": "Xorazm elchilarini qabul qiladi", "correct": false },
      { "matn": "sak va massaget qabilalari bilan ittifoq tuzadi", "correct": false },
      { "matn": "xoinlarcha o‘ldiriladi", "correct": true }
    ]
  },
  {
    "id": 839,
    "savol": "Makedoniyalik Aleksandr qo‘lga kiritgan Xoriyen va Oksiartning tog‘ qal’alari qayerda joylashgan edi?",
    "javob": [
      { "matn": "Qashqadaryo vohasining sharqida", "correct": false },
      { "matn": "Pomir tog‘larida", "correct": false },
      { "matn": "Sirdaryo bo‘ylarida", "correct": false },
      { "matn": "Hisor tog‘larida", "correct": true }
    ]
  },
  {
    "id": 840,
    "savol": "Makedoniyalik Aleksandr uylangan Ravshanak qaysi qabiladan edi?",
    "javob": [
      { "matn": "sak qabilasidan", "correct": false },
      { "matn": "fors qabilasidan", "correct": false },
      { "matn": "so‘g‘d qabilasidan", "correct": true },
      { "matn": "massaget qabilasidan", "correct": false }
    ]
  },
  {
    "id": 841,
    "savol": "Aleksandr uylangan Ravshanak kimning qizi bo‘lgan?",
    "javob": [
      { "matn": "Xoriyenning", "correct": false },
      { "matn": "Oksiartning", "correct": true },
      { "matn": "Spitamanning", "correct": false },
      { "matn": "To‘marisning", "correct": false }
    ]
  },
  {
    "id": 842,
    "savol": "Salavka qachon Bobil (Suriya davlati) hukmdori bo‘lgan edi?",
    "javob": [
      { "matn": "Mil. avv. 312-yil", "correct": true },
      { "matn": "Mil. avv. 303-yil", "correct": false },
      { "matn": "Mil. avv. 314-yil", "correct": false },
      { "matn": "Mil. avv. 308-yil", "correct": false }
    ]
  },
  {
    "id": 843,
    "savol": "Salavka davlatining tarkibiga qaysi hududlar kirar edi?",
    "javob": [
      { "matn": "Misr, Eron, Baqtriya, Hindiston, Marg‘iyona", "correct": false },
      { "matn": "Mesopotamiya, Eron, Parfiya, Baqtriya", "correct": false },
      { "matn": "So‘g‘diyona, Hindiston, Eron, Parfiya, Baqtriya", "correct": false },
      { "matn": "Mesopotamiya, Eron, Parfiya, Baqtriya, So‘g‘diyona, Marg‘iyona", "correct": true }
    ]
  },
  {
    "id": 844,
    "savol": "Marg‘iyona Antioxiysi o‘sha vaqtdagi qaysi shahar edi?",
    "javob": [
      { "matn": "Termiz", "correct": false },
      { "matn": "Baqtra", "correct": false },
      { "matn": "Nishopur", "correct": false },
      { "matn": "Marv", "correct": true }
    ]
  },
  {
    "id": 845,
    "savol": "O‘rta Osiyo tarixida antik davr qaysi voqeadan so‘ng boshlanadi?",
    "javob": [
      { "matn": "Forslar istilolaridan keyin", "correct": false },
      { "matn": "Yunon-makedon istilolaridan keyin", "correct": true },
      { "matn": "Buyuk ipak yo‘li paydo bo‘lgandan so‘ng", "correct": false },
      { "matn": "Xionitlar bosqinidan so'ng", "correct": false }
    ]
  },
  {
    "id": 846,
    "savol": "Salavk o‘z davlati tarkibiga kirgan O‘rta Osiyoni qanday alohida viloyatlarga ajratdi?",
    "javob": [
      { "matn": "Nomlar", "correct": false },
      { "matn": "Satraplik", "correct": true },
      { "matn": "Davlatlar", "correct": false },
      { "matn": "Tumanlar", "correct": false }
    ]
  },
  {
    "id": 847,
    "savol": "Antiox davrida asta-sekinlik bilan qaysi hududlarda tinch hayot tiklana boshlandi?",
    "javob": [
      { "matn": "So‘g‘diyona, Baqtriya va Marg‘iyonada", "correct": true },
      { "matn": "Parfiya, Baqtriya va Marg‘iyonada", "correct": false },
      { "matn": "Parfiya, Baqtriya, So‘g‘diyonada", "correct": false },
      { "matn": "Xorazm va Farg'onada", "correct": false }
    ]
  },
  {
    "id": 848,
    "savol": "Qaysi hududda yunon yozuvi, o'lchov birliklari va san’at buyumlari keng tarqaldi?",
    "javob": [
      { "matn": "Parfiyada", "correct": false },
      { "matn": "Termizda", "correct": false },
      { "matn": "Baqtriya", "correct": true },
      { "matn": "So‘g‘diyona", "correct": false }
    ]
  },
  {
    "id": 849,
    "savol": "Yunonlar qaysi hududning binokorlik va hunarmandchilik an’analarini o‘zlashtirdilar?",
    "javob": [
      { "matn": "Marg‘iyonada", "correct": false },
      { "matn": "So‘g‘diyona", "correct": false },
      { "matn": "Baqtriya", "correct": true },
      { "matn": "Parfiya", "correct": false }
    ]
  },
  {
    "id": 850,
    "savol": "Antiox ulkan davlat boshida turib, uni necha yil boshqardi?",
    "javob": [
      { "matn": "20 yilga yaqin", "correct": true },
      { "matn": "25 yilga yaqin", "correct": false },
      { "matn": "18 yilga oshiqroq", "correct": false },
      { "matn": "20 yildan oshiqroq", "correct": false }
    ]
  },
  {
    "id": 851,
    "savol": "Antik davr tarixchilarining xabar berishicha, mingta Baqtriya shahri hukmdori bo‘lmish kim o‘zini podsho deb e’lon qiladi?",
    "javob": [
      { "matn": "Yevtidem", "correct": false },
      { "matn": "Antiox", "correct": false },
      { "matn": "Diodot", "correct": true },
      { "matn": "Demetriy", "correct": false }
    ]
  },
  {
    "id": 852,
    "savol": "Mil. avv. 250-yilda Salavkiylar davlati tarkibidan ajralib chiqqan qaysi davlat Baqtriyaning raqibiga aylanadi?",
    "javob": [
      { "matn": "Marg‘iyona", "correct": false },
      { "matn": "Parfiya", "correct": true },
      { "matn": "Farg‘ona", "correct": false },
      { "matn": "So‘g‘diyona", "correct": false }
    ]
  },
  {
    "id": 853,
    "savol": "Kimning hukmronligi davrida Yunon-Baqtriya podsholigi eng katta sarhadlarga ega bo‘ldi?",
    "javob": [
      { "matn": "Antiox", "correct": false },
      { "matn": "Diodot", "correct": false },
      { "matn": "Yevtidem", "correct": false },
      { "matn": "Demetriy", "correct": true }
    ]
  },
  {
    "id": 854,
    "savol": "Mil. avv. nechanchi yillarda Yunon-Baqtriya davlati yuechji qabilalari tomonidan bosib olindi?",
    "javob": [
      { "matn": "Mil. avv. 145–135-yillarda", "correct": false },
      { "matn": "Mil. avv. 150–135-yillarda", "correct": false },
      { "matn": "Mil. avv. 143–141-yillarda", "correct": false },
      { "matn": "Mil. avv. 140–130-yillarda", "correct": true }
    ]
  },
  {
    "id": 855,
    "savol": "Parfiyada hokimiyat Mitridat I qo‘liga o‘tishi bilan u qanday yo'l tutadi?",
    "javob": [
      { "matn": "Baqtriyaga harbiy tazyiqni kuchaytiradi", "correct": true },
      { "matn": "Baqtriya bilan madaniy aloqalarni uzadi", "correct": false },
      { "matn": "Baqtriya bilan birga Farg‘onani bosib oladi", "correct": false },
      { "matn": "Salavkiylar bilan ittifoq tuzadi", "correct": false }
    ]
  },
  {
    "id": 856,
    "savol": "Kimning hukmronligi davrida Hindistonning bir qismi Yunon-Baqtriya davlatiga qo‘shib olindi?",
    "javob": [
      { "matn": "Yevtidem", "correct": false },
      { "matn": "Antiox", "correct": false },
      { "matn": "Diodot", "correct": false },
      { "matn": "Demetriy", "correct": true }
    ]
  },
  {
    "id": 857,
    "savol": "Xorazm davlati aholisi xo‘jaligining asosini qaysi soha tashkil qilgan?",
    "javob": [
      { "matn": "Dehqonchilik va chorvachilik", "correct": false },
      { "matn": "Dehqonchilik", "correct": true },
      { "matn": "Hunarmandchilik", "correct": false },
      { "matn": "Chorvachilik", "correct": false }
    ]
  },
  {
    "id": 858,
    "savol": "Ko‘zaliqir shahri xarobalari qaysi davrga taaluqli?",
    "javob": [
      { "matn": "m.av. IV asr", "correct": false },
      { "matn": "m.av. VI asr", "correct": false },
      { "matn": "m. av VII asr", "correct": true },
      { "matn": "m. av VIII asr", "correct": false }
    ]
  },
  {
    "id": 859,
    "savol": "Xorazm qachon Axomaniylar davlatidan ajralib, mustaqil davlatga aylandi?",
    "javob": [
      { "matn": "m.av. IV asr", "correct": true },
      { "matn": "m.av. VI asr", "correct": false },
      { "matn": "m. av VII asr", "correct": false },
      { "matn": "m. av VIII asr", "correct": false }
    ]
  },
  {
    "id": 860,
    "savol": "Xorazmda shaharsozlikning boshlanishi qaysi davrga borib taqaladi?",
    "javob": [
      { "matn": "m.av. IV asr", "correct": false },
      { "matn": "m.av. VI asr", "correct": false },
      { "matn": "m. av VII asr", "correct": true },
      { "matn": "m. av VIII asr", "correct": false }
    ]
  },
  {
    "id": 861,
    "savol": "Qaysi shahar xarobalarida mahalliy hukmdorning qarorgohi bo‘lgan ulkan qal’a bunyod etilgan edi?",
    "javob": [
      { "matn": "Jonbosqal’a", "correct": false },
      { "matn": "Qo‘yqirilganqal’a", "correct": false },
      { "matn": "Qal’aliqir", "correct": true },
      { "matn": "Ko‘zaliqir", "correct": false }
    ]
  },
  {
    "id": 862,
    "savol": "Qaysi shahar miloddan avvalgi III-II asrlarga taaluqli Xorazmning qadimgi shahri bo‘lgan?",
    "javob": [
      { "matn": "Tuproqqal’a", "correct": false },
      { "matn": "Qal’aliqir", "correct": false },
      { "matn": "Ko‘zaliqir", "correct": false },
      { "matn": "Jonbosqal’a", "correct": true }
    ]
  },
  {
    "id": 863,
    "savol": "Aylana shaklda qurilgan mustahkam ibodatxona qoldiqlari qaysi shahar xarobalaridan topilgan?",
    "javob": [
      { "matn": "Jonbosqal’a", "correct": false },
      { "matn": "Qo‘yqirilganqal’a", "correct": true },
      { "matn": "Oybo‘yirqal’a", "correct": false },
      { "matn": "Tuproqqal’a", "correct": false }
    ]
  },
  {
    "id": 864,
    "savol": "Quyidagi qaysi sulola yoki hukmdorlar davrida Xorazm ularning tarkibida bo‘lgan?",
    "javob": [
      { "matn": "Ahamoniylar", "correct": true },
      { "matn": "Salavkiylar", "correct": false },
      { "matn": "Makedoniyalik Aleksandr", "correct": false },
      { "matn": "Yunon-Baqtriya", "correct": false }
    ]
  },
  {
    "id": 865,
    "savol": "Milodiy II-III asrlarda qaysi shaharda ulug‘vor va muhtasham qurilishi ishlari amalga oshirilgan?",
    "javob": [
      { "matn": "Qo‘yqirilganqal’a", "correct": false },
      { "matn": "Jonbosqal’a", "correct": false },
      { "matn": "Tuproqqal’a", "correct": true },
      { "matn": "Qal’aliqir", "correct": false }
    ]
  },
  {
    "id": 866,
    "savol": "O‘rta Osiyoda eng qadimgi yozuv qayerdan topilgan?",
    "javob": [
      { "matn": "Baqtriyadan", "correct": false },
      { "matn": "Xorazmdan", "correct": true },
      { "matn": "Sug‘diyonadan", "correct": false },
      { "matn": "Marg‘iyonadan", "correct": false }
    ]
  },
  {
    "id": 867,
    "savol": "Oybo‘yirqal’adan topilgan yozuv qaysi davrga taaluqli?",
    "javob": [
      { "matn": "Miloddan avvalgi III-II asr", "correct": false },
      { "matn": "Miloddan avvalgi V-IV asr", "correct": true },
      { "matn": "Miloddan avvalgi I asr - milodiy I asr", "correct": false },
      { "matn": "Milodiy II-III asr", "correct": false }
    ]
  },
  {
    "id": 868,
    "savol": "Qo‘yqirilganqal’adan topilgan mahalliy yozuv namunalari qaysi davrga tegishli?",
    "javob": [
      { "matn": "Miloddan avvalgi V-IV asr", "correct": false },
      { "matn": "Miloddan avvalgi III-II asr", "correct": true },
      { "matn": "Miloddan avvalgi I asr - milodiy I asr", "correct": false },
      { "matn": "Milodiy II-III asr", "correct": false }
    ]
  },
  {
    "id": 869,
    "savol": "Qaysi manbalarda Qang‘ davlati Qang‘yuy deb atalgan?",
    "javob": [
      { "matn": "Qadimgi yunon manbalarida", "correct": false },
      { "matn": "Xitoy manbalarida", "correct": true },
      { "matn": "Behistun bitiklarida", "correct": false },
      { "matn": "Avesto manbalarida", "correct": false }
    ]
  },
  {
    "id": 870,
    "savol": "Qang‘ davlatiga qachon asos solingan?",
    "javob": [
      { "matn": "Miloddan avvalgi II asrda", "correct": false },
      { "matn": "Miloddan avvalgi I asrda", "correct": false },
      { "matn": "Miloddan avvalgi III asrda", "correct": true },
      { "matn": "Milodiy I asrda", "correct": false }
    ]
  },
  {
    "id": 871,
    "savol": "Qang‘ davlatiga kimlar asos solgan?",
    "javob": [
      { "matn": "Massagetlar", "correct": false },
      { "matn": "Dasht ko‘chmanchilari", "correct": false },
      { "matn": "Saklar", "correct": true },
      { "matn": "Davanliklar", "correct": false }
    ]
  },
  {
    "id": 872,
    "savol": "Qang‘ davlatining geografik o‘rnini aniqlang?",
    "javob": [
      { "matn": "Janubiy Qozog‘iston va Toshkent vohasi", "correct": false },
      { "matn": "Sirdaryoning yuqori oqimi va Toshkent vohasi", "correct": false },
      { "matn": "Sirdaryoning quyi oqimi", "correct": false },
      { "matn": "Toshkent vohasi", "correct": true }
    ]
  },
  {
    "id": 873,
    "savol": "Qang‘ davlatining poytaxtini aniqlang?",
    "javob": [
      { "matn": "Qang‘dez", "correct": true },
      { "matn": "Qang‘guy", "correct": false },
      { "matn": "Ershi", "correct": false },
      { "matn": "Sho‘rabashat", "correct": false }
    ]
  },
  {
    "id": 874,
    "savol": "Xitoy manbalarida Qang‘dez qanday atalgan?",
    "javob": [
      { "matn": "Bityan", "correct": true },
      { "matn": "Ershi", "correct": false },
      { "matn": "Qanqa", "correct": false },
      { "matn": "Davan", "correct": false }
    ]
  },
  {
    "id": 875,
    "savol": "Qang‘ davlatining asosiy shaharlari qayerlarda joylashgan?",
    "javob": [
      { "matn": "Sirdaryo sohillari bo‘ylarida", "correct": true },
      { "matn": "Ohangaron vodiysi va Farg‘onada", "correct": false },
      { "matn": "Pomir va Farg‘ona vodiysida", "correct": false },
      { "matn": "Janubiy Qozog‘iston va Toshkent vohasida", "correct": false }
    ]
  },
  {
    "id": 876,
    "savol": "Qang‘ davlati qachon qudratli davlatga aylandi?",
    "javob": [
      { "matn": "Miloddan avvalgi II oxirlarida", "correct": true },
      { "matn": "Miloddan avvalgi I oxiri va milodiy I asrda", "correct": false },
      { "matn": "Miloddan avvalgi I asr o‘rtalarida", "correct": false },
      { "matn": "Miloddan avvalgi II asr o‘rtalarida", "correct": false }
    ]
  },
  {
    "id": 877,
    "savol": "Qang‘ davlatining qaysi hududlarida o‘troq ziroatchilik va hunarmandchilik madaniyati vujudga kelgan?",
    "javob": [
      { "matn": "Sirdaryoning quyi va yuqori oqimida joylashgan shaharlarda", "correct": false },
      { "matn": "Janubiy Qozog‘iston hududlarida", "correct": false },
      { "matn": "Toshkent vohasida", "correct": true },
      { "matn": "Farg‘ona vodiysida", "correct": false }
    ]
  },
  {
    "id": 878,
    "savol": "Qang‘ davlatining ko‘chmanchi qabilalar bilan urushlarining kelib chiqishiga asosiy sabab nima bo'lgan?",
    "javob": [
      { "matn": "Buyuk ipak yo‘lining shimoliy tarmog‘i o‘tganligi sababli iqtisodiyotning gullashi", "correct": true },
      { "matn": "O‘troq ziroatchilik madaniyatining vujudga kelganligi", "correct": false },
      { "matn": "Hunarmandchilik sohalarining rivojlanganligi", "correct": false },
      { "matn": "Xitoy va Sharq karvonlarining faqat Qang‘dan o‘tganligi", "correct": false }
    ]
  },
  {
    "id": 879,
    "savol": "Qang‘ davlati qachon parchalanib ketdi?",
    "javob": [
      { "matn": "Miloddan avvalgi I asr oxirida", "correct": false },
      { "matn": "Milodiy I asrda", "correct": false },
      { "matn": "Miloddan avvalgi II asrda", "correct": false },
      { "matn": "Milodiy II asrda", "correct": true }
    ]
  },
  {
    "id": 880,
    "savol": "Davan davlati nomi qaysi manbalarda shu nom bilan tilga olingan?",
    "javob": [
      { "matn": "Behistun bitiklarida", "correct": false },
      { "matn": "Avesto manbalarida", "correct": false },
      { "matn": "Rim va yunon tarixchilari asarlarida", "correct": false },
      { "matn": "Xitoy manbalarida", "correct": true }
    ]
  },
  {
    "id": 881,
    "savol": "Davan davlatining geografik o‘rnini aniqlang?",
    "javob": [
      { "matn": "Janubiy Qozog‘iston va Toshkent vohasi", "correct": false },
      { "matn": "Farg‘ona vodiysida", "correct": true },
      { "matn": "Toshkent vohasida", "correct": false },
      { "matn": "Sirdaryoning quyi va yuqori oqimida", "correct": false }
    ]
  },
  {
    "id": 882,
    "savol": "Davan davlati qachon tashkil topgan?",
    "javob": [
      { "matn": "Miloddan avvalgi II asrda", "correct": false },
      { "matn": "Miloddan avvalgi I asrda", "correct": false },
      { "matn": "Miloddan avvalgi III asrda", "correct": true },
      { "matn": "Milodiy I asrda", "correct": false }
    ]
  },
  {
    "id": 883,
    "savol": "Xitoy hukmdorlari O'rta Osiyoning qaysi hududidagi zotli otlar nasliga qiziqqanlar?",
    "javob": [
      { "matn": "Farg‘ona", "correct": true },
      { "matn": "Toshkent vohasi", "correct": false },
      { "matn": "Xorazm", "correct": false },
      { "matn": "Sug‘diyona", "correct": false }
    ]
  },
  {
    "id": 884,
    "savol": "Davan davlatining poytaxti qaysi shahar bo'lgan?",
    "javob": [
      { "matn": "Qang‘dez", "correct": false },
      { "matn": "Ershi", "correct": true },
      { "matn": "Sho'rabashat", "correct": false },
      { "matn": "Uchqo‘rg‘on", "correct": false }
    ]
  }

];