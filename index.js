//databook
const pidginWeekDays = {
  Akum: [
    "Zinkàbe",
    "Nkuifine",
    "Zingèné",
    "Zisàne", //0
    "Mbi'nè",
    "Nkwànyine",
    "Nzinkùne",
    "Mbyèghdùme",
  ],
  Babadjou: [
    "Ncwi",
    "Legho",
    "Lepare",
    "Shwi'i", //0
    "Mbhi'i",
    "Nkap",
    "Chore",
    "Pombwo'o",
  ],
  Bafang: [
    "Ncomtee",
    "Ncwe'ko",
    "Nkaatee",
    "Lie'kwe'", //0
    "Ntu'ntaa",
    "Ntu'kwa",
    "Nziso",
    "Nzingu",
  ],
  Bafou: [
    "Ngan",
    "Djielah",
    "Effa",
    "Mbouotchou", //0
    "Mbouokeu",
    "Me'ta",
    "Mbouolo",
    "Mbouowa",
  ],
  Bafoussam: [
    "Dza' à Nlong",
    "Dzemteh",
    "Ghossaha",
    "Seinchou", //0
    "Tamdze",
    "Dzedze",
    "Shienku'u",
    "Lecfo'o",
  ],
  Bagam: [
    "Yenkessi",
    "Yessi",
    "Yenkap",
    "Yentente", //0
    "Yengwie'",
    "Yenkopie'",
    "Yepie'",
    "Yenkinze",
  ],
  Baham: [
    "Tamgwe",
    "Mamto",
    "Gosue",
    "Kuogwe", //0
    "Tamdze",
    "Dzedze",
    "Shanku'u",
    "Liepfô",
  ],
  Bahouan: [
    "Temgwe",
    "Mamto",
    "Gosue",
    "Kuogwe", //0
    "Tamdze",
    "Dzedze",
    "Shanku'u",
    "Lipfe",
  ],
  Balengou: [
    "Dikap",
    "Nguedjou",
    "Di'tcheu",
    "Di'kong", //0
    "Di'mbou",
    "Zedjio",
    "Di'keuh",
    "Zegheu",
  ],
  Baloum: [
    "Nga'ang",
    "Djeulah",
    "Fa'ah",
    "Totsah", //0
    "Metalou",
    "Djeudjeu",
    "Nzeundah",
    "Bougwa'ah",
  ],
  Bamena: [
    "Nguendjou",
    "Ntassang",
    "Li'nkong", //0ok
    "Nzeleng",
    "Nzedjio",
    "Lih'tioh",
    "Nzeugueuh",
    "Lih'kap",
  ],
  Bamendjinda: [
    "Tsüre",
    "Metagoué",
    "Kapot",
    "kateu", //0
    "Njeula",
    "Seugouè",
    "Meta",
    "Pobuo",
  ],
  Bamendjou: [
    "Pfessa",
    "Kuitsit",
    "Memete",
    "Mumete", //0
    "Djedjuku'u",
    "Ndunshu",
    "Nshyenda",
    "Pfessap",
  ],
  Bamenyam: [
    "Bikak",
    "Binewa",
    "Bissiène",
    "Bizeu", //0
    "Bisset",
    "Bifoutgou",
    "Bikuit",
    "Bièbeu",
  ],
  Bandenkop: [
    "Cheptèh",
    "Lie'djou",
    "Temgou",
    "Lie'kouon", //0
    "Lie'gang",
    "Djeudjeu'",
    "Nzessouh",
    "Kwogouèh",
  ],
  Bandjoun: [
    "Ntamgo",
    "Dzemto",
    "Gossue",
    "Sêdzu", //0
    "Ntamdze",
    "Dzedze",
    "Shyenku'u",
    "Tye'pfô",
  ],
  Bangangté: [
    "Ntanla'",
    "Ntânte'",
    "Ntanbu'",
    "Nzinyam", //0
    "Nkôtu",
    "Nga",
    "Nsemte'",
    "Nsigha",
  ],
  Bangou: [
    "Ndi'nkapC",
    "Nguédjou",
    "Tabété",
    "Ndi'nkong", //0
    "Nzeleng",
    "Nzedjouoh",
    "Nditouoh",
    "Nzeugheu",
  ],
  Bangoua: [
    "Lie Tsoue",
    "Ngue Jou",
    "Nto'o Sak",
    "Lie Kouo", //0
    "Lie Tchak",
    "Nze Nze",
    "Lie Ntio",
    "Lie Chak",
  ],
  Bansoua: [
    "Pfessa",
    "Kuitsit",
    "Memete",
    "Mumete", //0
    "Djedjuku'u",
    "Ndunshu",
    "Nshyenda",
    "Pfessap",
  ],
  Batcham: [
    "Ngahan'ha",
    "Nkouotchia",
    "Tcheaze'a",
    "Cheatchie", //0
    "Metuaze",
    "Njyonze",
    "Nzemezeme",
    "Ncheazeme",
  ],
  Batchingou: [
    "N'dinkap",
    "N'geudjou",
    "N'tassia",
    "N'dimkock", //0
    "N'zeleck",
    "N'zenjouo",
    "N'dintouo",
    "Nzegeu",
  ],
  Batié: [
    "Cheptèh",
    "Lie'djou",
    "Temgou",
    "Lie'kouon", //0
    "Lie'gang",
    "Djeudjeu'",
    "Nzessouh",
    "Kwogouèh",
  ],
  Batoufam: [
    "Lietswe",
    "Ndjidjou",
    "To'ossok",
    "Kouotchank",//0
    "Lietchak",
    "Nzenze",
    "Lietioh",
    "Kouotswe",
  ],
  Bayangam: [
    "Temgwe",
    "Dzemto",
    "Gosue",
    "Sinsu", //0
    "Tamdze",
    "Dzedze",
    "Shanku'u",
    "Lipfe",
  ],
  Dschang: [
    "Ngan",
    "Djielah",
    "Efaa",
    "Mbouotchou",//0
    "Mbouokeu",
    "Méta",
    "Mbouolo",
    "Mbouowa",
  ],
  Fotouni: [
    "Nzeula'h",
    "Lie'gham",
    "Ngueussèh",
    "Lie'bong", //0
    "Lie'lap",
    "Ndjidjio'",
    "Nzeusso",
    "Nzeugou",
  ],
  Fondjomakouet: [
    "Zeula",
    "Liegwam",
    "Kapta",
    "Liebong", //0
    "Liegang",
    "Djeudjeue",
    "Zeusseue",
    "Zeugou",
  ],
  Mbouda: [
    "Ngahan'ha",
    "Nkouotchia",
    "Tcheaze'a",
    "Cheatchie", //0
    "Metuaze",
    "Njyonze",
    "Nzemezeme",
    "Ncheazeme",
  ],
  Ndu: [
    "Lih",
    "Sing",
    "Ntala",
    "Ngang",//0
    "Nfung",
    "Mruyh",
    "Nyi",
    "Nkapgny",
  ],
  Féfé: [
    "Ncomtee",
    "Ncwe'ko",
    "Nkaatee",
    "Lie'kwe'",//0,
    "Ntu'ntaa",
    "Ntu'kwa",
    "Nziso",
    "Nzingu",
  ],
  "Ghomala'": [
    "Tangô",
    "Nzemtô",
    "Gôsu'ë",
    "Se'su'",//0
    "Tamze",
    "Dze'dze'",
    "Shieku'u",
    "Tiepfô",
  ],
  "Mboda'a": [
    "Tsüre",
    "Métagouè",
    "Kapot",
    "Kateu",//0
    "Djeula",
    "Seugouè",
    "Mota",
    "Pobuo",
  ],
  Medûmba: [
    "Ntanla'",
    "Ntânte'",
    "Ntanbu'",
    "Nzinyam",//0
    "Nkôtu",
    "Nga",
    "Nsemte'",
    "Nsigha",
  ],
  Mengaka: [
    "Yenkossi",
    "Yessi",
    "Yenkap",
    "Yentente",//0
    "Yengwiè",
    "Yenkopiè",
    "Yièpié",
    "Yenkinze",
  ],
  "Ngiembo'on1": [
    "Ngahan'ha",
    "Nkouotchia",
    "Tchiezea'a",
    "Tcheatchiezea'a",//0
    "Metuanze",
    "Madoungze",
    "Zemezeme",
    "Cheangahan'ha",
  ],
  "Ngiembo'on2": [
    "Ngahan'ha",
    "Nkouotchia",
    "Tcheazea'a",
    "Tcheatchie",//0
    "Metuanze",
    "Njyonze",
    "Zemezeme",
    "Cheazeme",
  ],
  Nguemba: [
    "Fessa",
    "Kuèsit",
    "Memetè",
    "Mumetè",//0
    "Djedjùkù",
    "Duchu",
    "Sheidah",
    "Fessap",
  ],
  Yemba: [
    "Ngaan",
    "Djielah",
    "Faa'",
    "Bouotchou",//0
    "Bouokeu",
    "Metaa",
    "Bouolo",
    "Bouowoa",
  ],
};

function translateDateToPidgin(dateString, dialect) {
  const [day, month, year] = dateString.split("-").map((num) => parseInt(num));
  const dateObj = new Date(year, month - 2, day);
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
