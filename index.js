//databook
const pidginWeekDays = {
  Akum: [
    "Zisàne",
    "Zingèné",
    "Nkuifine",
    "Zinkàbe",
    "Mbyèghdùme",
    "Nzinkùne",
    "Nkwànyine",
    "Mbi'nè",
  ],

  Babadjou: [
    "Shwi'i",
    "Lepare",
    "Legho",
    "Ncwi",
    "Pombwo'o",
    "Chore",
    "Nkap",
    "Mbhi'i",
  ],

  Bafang: [
    "Lie'kwe'",
    "Nkaatee",
    "Ncwe'ko",
    "Ncomtee",
    "Nzingu",
    "Nziso",
    "Ntu'kwa",
    "Ntu'ntaa",
  ],

  Bafou: [
    "Mbouotchou",
    "Effa",
    "Djielah",
    "Ngan",
    "Mbouowa",
    "Mbouolo",
    "Me'ta",
    "Mbouokeu",
  ],

  Bafoussam: [
    "Seinchou",
    "Ghossaha",
    "Dzemteh",
    "Dza' à Nlong",
    "Lecfo'o",
    "Shienku'u",
    "Dzedze",
    "Tamdze",
  ],

  Bagam: [
    "Yentente",
    "Yenkap",
    "Yessi",
    "Yenkessi",
    "Yenkinze",
    "Yepie'",
    "Yenkopie'",
    "Yengwie'",
  ],

  Baham: [
    "Kuogwe",
    "Gosue",
    "Mamto",
    "Tamgwe",
    "Liepfô",
    "Shanku'u",
    "Dzedze",
    "Tamdze",
  ],

  Bahouan: [
    "Kuogwe",
    "Gosue",
    "Mamto",
    "Temgwe",
    "Lipfe",
    "Shanku'u",
    "Dzedze",
    "Tamdze",
  ],

  Balengou: [
    "Di'kong",
    "Di'tcheu",
    "Nguedjou",
    "Dikap",
    "Zegheu",
    "Di'keuh",
    "Zedjio",
    "Di'mbou",
  ],

  Baloum: [
    "Totsah",
    "Fa'ah",
    "Djeulah",
    "Nga'ang",
    "Bougwa'ah",
    "Nzeundah",
    "Djeudjeu",
    "Metalou",
  ],

  Bamena: [
    "Li'nkong",
    "Ntassang",
    "Nguendjou",
    "Lih'kap",
    "Nzeugueuh",
    "Lih'tioh",
    "Nzedjio",
    "Nzeleng",
  ],

  Bamendjinda: [
    "kateu",
    "Kapot",
    "Metagoué",
    "Tsüre",
    "Pobuo",
    "Meta",
    "Seugouè",
    "Njeula",
  ],

  Bamendjou: [
    "Mumete",
    "Memete",
    "Kuitsit",
    "Pfessa",
    "Pfessap",
    "Nshyenda",
    "Ndunshu",
    "Djedjuku'u",
  ],

  Bamenyam: [
    "Bizeu",
    "Bissiène",
    "Binewa",
    "Bikak",
    "Bièbeu",
    "Bikuit",
    "Bifoutgou",
    "Bisset",
  ],

  Bandenkop: [
    "Lie'kouon",
    "Temgou",
    "Lie'djou",
    "Cheptèh",
    "Kwogouèh",
    "Nzessouh",
    "Djeudjeu'",
    "Lie'gang",
  ],

  Bandjoun: [
    "Sêdzu",
    "Gossue",
    "Dzemto",
    "Ntamgo",
    "Tye'pfô",
    "Shyenku'u",
    "Dzedze",
    "Ntamdze",
  ],

  Bangangté: [
    "Nzinyam",
    "Ntanbu'",
    "Ntânte'",
    "Ntanla'",
    "Nsigha",
    "Nsemte'",
    "Nga",
    "Nkôtu",
  ],

  Bangou: [
    "Ndi'nkong",
    "Tabété",
    "Nguédjou",
    "Ndi'nkapC",
    "Nzeugheu",
    "Nditouoh",
    "Nzedjouoh",
    "Nzeleng",
  ],

  Bangoua: [
    "Lie Kouo",
    "Nto'o Sak",
    "Ngue Jou",
    "Lie Tsoue",
    "Lie Chak",
    "Lie Ntio",
    "Nze Nze",
    "Lie Tchak",
  ],

  Bansoua: [
    "Mumete",
    "Memete",
    "Kuitsit",
    "Pfessa",
    "Pfessap",
    "Nshyenda",
    "Ndunshu",
    "Djedjuku'u",
  ],

  Batcham: [
    "Cheatchie",
    "Tcheaze'a",
    "Nkouotchia",
    "Ngahan'ha",
    "Ncheazeme",
    "Nzemezeme",
    "Njyonze",
    "Metuaze",
  ],

  Batchingou: [
    "N'dimkock",
    "N'tassia",
    "N'geudjou",
    "N'dinkap",
    "Nzegeu",
    "N'dintouo",
    "N'zenjouo",
    "N'zeleck ",
  ],

  Batié: [
    "Lie'kouon",
    "Temgou",
    "Lie'djou",
    "Cheptèh",
    "Kwogouèh",
    "Nzessouh",
    "Djeudjeu'",
    "Lie'gang",
  ],

  Batoufam: [
    "Kouotchank",
    "To'ossok",
    "Ndjidjou",
    "Lietswe",
    "Kouotswe",
    "Lietioh",
    "Nzenze",
    "Lietchak",
  ],

  Bayangam: [
    "Sinsu",
    "Gosue",
    "Dzemto",
    "Temgwe",
    "Lipfe",
    "Shanku'u",
    "Dzedze",
    "Tamdze",
  ],

  Dschang: [
    "Mbouotchou",
    "Efaa",
    "Djielah",
    "Ngan",
    "Mbouowa",
    "Mbouolo",
    "Méta",
    "Mbouokeu",
  ],

  Fotouni: [
    "Lie'bong",
    "Ngueussèh",
    "Lie'gham",
    "Nzeula'h",
    "Nzeugou",
    "Nzeusso",
    "Ndjidjio'",
    "Lie'lap",
  ],

  Fondjomakouet: [
    "Liebong",
    "Kapta",
    "Liegwam",
    "Zeula",
    "Zeugou",
    "Zeusseue",
    "Djeudjeue",
    "Liegang",
  ],

  Mbouda: [
    "Cheatchie",
    "Tcheaze'a",
    "Nkouotchia",
    "Ngahan'ha",
    "Ncheazeme",
    "Nzemezeme",
    "Njyonze",
    "Metuaze",    
  ],

  Ndu: [
    "Ngang",
    "Ntala",
    "Sing",
    "Lih",
    "Nkapgny",
    "Nyi",
    "Mruyh",
    "Nfung",
    
  ],

  Féfé: [
    "Lie'kwe'",
    "Nkaatee",
    "Ncwe'ko",
    "Ncomtee",
    "Nzingu",
    "Nziso",
    "Ntu'kwa",
    "Ntu'ntaa",    
  ],

  "Ghomala'": [
    "Se'su'",
    "Gôsu'ë",
    "Nzemtô",
    "Tangô",
    "Tiepfô",
    "Shieku'u",
    "Dze'dze'",
    "Tamze",    
  ],

  "Mboda'a": [
    "Kateu",
    "Kapot",
    "Métagouè",
    "Tsüre",
    "Pobuo",
    "Mota",
    "Seugouè",
    "Djeula",    
  ],

  Medûmba: [
    "Nzinyam",
    "Ntanbu'",
    "Ntânte'",
    "Ntanla'",
    "Nsigha",
    "Nsemte'",
    "Nga",
    "Nkôtu",    
  ],

  Mengaka: [
    "Yentente",
    "Yenkap",
    "Yessi",
    "Yenkossi",
    "Yenkinze",
    "Yièpié",
    "Yenkopiè",
    "Yengwiè",    
  ],

  "Ngiembo'on1": [
    "Tcheatchiezea'a",
    "Tchiezea'a",
    "Nkouotchia",
    "Ngahan'ha",
    "Cheangahan'ha",
    "Zemezeme",
    "Madoungze",
    "Metuanze",    
  ],

  "Ngiembo'on2": [
    "Tcheatchie",
    "Tcheazea'a",
    "Nkouotchia",
    "Ngahan'ha",
    "Cheazeme",
    "Zemezeme",
    "Njyonze",
    "Metuanze",    
  ],

  Nguemba: [
    "Mumetè",
    "Memetè",
    "Kuèsit",
    "Fessa",
    "Fessap",
    "Sheidah", 
    "Duchu",
    "Djedjùkù",    
  ],

  Yemba: [
    "Bouotchou",
    "Faa'",
    "Djielah",
    "Ngaan",
    "Bouowoa",
    "Bouolo",
    "Metaa",
    "Bouokeu",    
  ],
};

function translateDateToPidgin(dateString, dialect) {
  const [day, month, year] = dateString.split("-").map((num) => parseInt(num));
  const dateObj = new Date(year, month - 1, day);
  const weekDay = pidginWeekDays[dialect][dateObj.getDay()];
  return `${weekDay}, ${day}-${month}-${year}`;
}

function translateToLanguage(dateString, languageCode) {
  const dateObj = new Date(dateString);
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return dateObj.toLocaleDateString(languageCode, options);
}

const usePidginCheckbox = document.getElementById("usePidgin");
const pidginSelect = document.getElementById("pidginSelect");
usePidginCheckbox.addEventListener("change", function () {
  pidginSelect.disabled = !usePidginCheckbox.checked;
});

const translateBtn = document.getElementById("translateBtn");
const dateInput = document.getElementById("dateInput");
const languageSelect = document.getElementById("languageSelect");
const resultsDiv = document.getElementById("results");
translateBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (usePidginCheckbox.checked) {
    const selectedPidgin = pidginSelect.value;
    const pidginDate = translateDateToPidgin(dateInput.value, selectedPidgin);
    resultsDiv.innerHTML = `<div class="alert alert-success mt-3" role="alert">${selectedPidgin} Dialate: ${pidginDate}</div>`;
    return;
  }
  const selectedLanguage = languageSelect.value;
  const translatedDate = translateToLanguage(dateInput.value, selectedLanguage);
  resultsDiv.innerHTML = `<div class="alert alert-info mt-3" role="alert">${selectedLanguage}: ${translatedDate}</div>`;
});
