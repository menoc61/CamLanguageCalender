//databook
const pidginWeekDays = {
  // starting on sunday index +1
  Akum: ["Zingèné", "Zisàne", "Mbi'nè", "Nkwànyine", "Nzinkùne", "Mbyèghdùme", "Zinkàbe","Nkuifine"],
  Babadjou: ["Lepare","Shwi'i", "Mbhi'i","Nkap","Chore","Pombwo'o","Ncwi","Legho"],
  Bafang: ["Nkaatee","Lie'kwe'","Ntu'ntaa","Ntu'kwa","Nziso","Nzingu","Ncomtee","Ncwe'ko" ],
  Bafou: ["Effa","Mbouotchou", "Mbouokeu","Me'ta", "Mbouolo", "Mbouowa", "Ngan", "Djielah"],
  Bafoussam: [ "Ghossaha","Seinchou","Tamdze","Dzedze","Shienku'u","Lecfo'o","Dza' à Nlong","Dzemteh"],
  Bagam: ["Yenkap","Yentente","Yengwie'","Yenkopie'","Yepie'","Yenkinze","Yenkessi","Yessi"],
  Baham: ["Gosue","Kuogwe","Tamdze","Dzedze","Shanku'u","Liepfô","Tamgwe","Mamto"],
  Bahouan: ["Gosue","Kuogwe","Tamdze","Dzedze","Shanku'u","Lipfe","Temgwe","Mamto"],
  Balengou: ["Di'tcheu","Di'kong","Di'mbou","Zedjio","Di'keuh","Zegheu","Dikap","Nguedjou"],
  Baloum:["Fa'ah","Totsah","Metalou","Djeudjeu","Nzeundah","Bougwa'ah","Nga'ang","Djeulah"],	
  Bamena:["Ntassang","Li'nkong","Nzeleng","Nzedjio","Lih'tioh","Nzeugueuh","Lih'kap","Nguendjou"],		
  Bamendjinda: ["Kapot","kateu","Njeula","Seugouè","Meta","Pobuo","Tsüre","Metagoué"],
  Bamendjou: ["Memete","Mumete","Djedjuku'u","Ndunshu","Nshyenda","Pfessap","Pfessa","Kuitsit"],
  Bamenyam: ["Bissiène","Bizeu","Bisset","Bifoutgou","Bikuit","Bièbeu","Bikak","Binewa"],
  Bandenkop: ["Temgou","Lie'kouon","Lie'gang","Djeudjeu'","Nzessouh","Kwogouèh","Cheptèh","Lie'djou"],
  Bandjoun: ["Gossue","Sêdzu","Ntamdze","Dzedze","Shyenku'u","Tye'pfô","Ntamgo","Dzemto"],
  Bangangté: ["Ntanbu'","Nzinyam","Nkôtu","Nga","Nsemte'","Nsigha","Ntanla'","Ntânte'"],
  Bangou: ["Tabété","Ndi'nkong","Nzeleng","Nzedjouoh","Nditouoh","Nzeugheu","Ndi'nkapC","Nguédjou"],
  Bangoua: ["Nto'o Sak","Lie Kouo","Lie Tchak","Nze Nze","Lie Ntio","Lie Chak","Lie Tsoue","Ngue Jou"],		
  Bansoua: ["Memete","Mumete","Djedjuku'u","Ndunshu","Nshyenda","Pfessap","Pfessa","Kuitsit"],
  Batcham: ["Tcheaze'a","Cheatchie","Metuaze","Njyonze","Nzemezeme","Ncheazeme","Ngahan'ha","Nkouotchia"],
  Batchingou: ["N'tassia","N'dimkock","N'zeleck","N'zenjouo","N'dintouo","Nzegeu","N'dinkap","N'geudjou"],
  Batié: ["Temgou","Lie'kouon","Lie'gang","Djeudjeu'","Nzessouh","Kwogouèh","Cheptèh","Lie'djou"],
  Batoufam: ["To'ossok","Kouotchank","Lietchak","Nzenze","Lietioh","Kouotswe","Lietswe","Ndjidjou"],
  Bayangam: ["Gosue","Sinsu","Tamdze","Dzedze","Shanku'u","Lipfe","Temgwe","Dzemto"],
  Dschang: ["Efaa","Mbouotchou","Mbouokeu","Méta","Mbouolo","Mbouowa","Ngan","Djielah"],
  Fotouni: ["Ngueussèh","Lie'bong","Lie'lap","Ndjidjio'","Nzeusso","Nzeugou","Nzeula'h","Lie'gham"],
  Fondjomakouet: ["Kapta","Liebong","Liegang","Djeudjeue","Zeusseue","Zeugou","Zeula","Liegwam"],		
  Mbouda: ["Tcheaze'a","Cheatchie","Metuaze","Njyonze","Nzemezeme","Ncheazeme","Ngahan'ha","Nkouotchia"],		
  Ndu: ["Ntala","Ngang","Nfung","Mruyh","Nyi","Nkapgny","Lih","Sing"],
  "Féfé": ["Nkaatee","Lie'kwe'","Ntu'ntaa","Ntu'kwa","Nziso","Nzingu","Ncomtee","Ncwe'ko"],		
  "Ghomala'": ["Gôsu'ë","Se'su'","Tamze","Dze'dze'","Shieku'u","Tiepfô","Tangô","Nzemtô"],		
  "Mboda'a": ["Kapot","Kateu","Djeula","Seugouè","Mota","Pobuo","Tsüre","Métagouè"],		
  Medûmba: ["Ntanbu'","Nzinyam","Nkôtu","Nga","Nsemte'","Nsigha","Ntanla'","Ntânte'"],		
  Mengaka: ["Yenkap","Yentente","Yengwiè","Yenkopiè","Yièpié","Yenkinze","Yenkossi","Yessi"],		
  "Ngiembo'on1": ["Tchiezea'a","Tcheatchiezea'a","Metuanze","Madoungze","Zemezeme","Cheangahan'ha","Ngahan'ha","Nkouotchia"],		
  "Ngiembo'on2": ["Tcheazea'a","Tcheatchie","Metuanze","Njyonze","Zemezeme","Cheazeme","Ngahan'ha","Nkouotchia"],		
  Nguemba: ["Memetè","Mumetè","Djedjùkù","Duchu","Sheidah" ,"Fessap","Fessa","Kuèsit"],		
  Yemba: ["Faa'","Bouotchou","Bouokeu","Metaa","Bouolo","Bouowoa","Ngaan","Djielah"],


  };
  
  function translateDateToPidgin(dateString, dialect) {
    const [day, month, year] = dateString.split("-").map(num => parseInt(num));
    const dateObj = new Date(year, month - 1, day);
    const weekDay = pidginWeekDays[dialect][dateObj.getDay()];
    return `${weekDay}, ${day}-${month}-${year}`;
  }
  
  function translateToLanguage(dateString, languageCode) {
    const dateObj = new Date(dateString);
    const options = {
      weekday: 'long', 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric'
    };
    return dateObj.toLocaleDateString(languageCode, options);
  }
  
  const usePidginCheckbox = document.getElementById("usePidgin");
  const pidginSelect = document.getElementById("pidginSelect");
  usePidginCheckbox.addEventListener("change", function() {
    pidginSelect.disabled = !usePidginCheckbox.checked;
  });
  
  const translateBtn = document.getElementById("translateBtn");
  const dateInput = document.getElementById("dateInput");
  const languageSelect = document.getElementById("languageSelect");
  const resultsDiv = document.getElementById("results");
  translateBtn.addEventListener("click", function(e) {
    e.preventDefault();
    if (usePidginCheckbox.checked) {
      const selectedPidgin = pidginSelect.value;
      const pidginDate = translateDateToPidgin(dateInput.value, selectedPidgin);
      resultsDiv.innerHTML = `<div class="alert alert-success mt-3" role="alert">${selectedPidgin} Pidgin: ${pidginDate}</div>`;
    } else {
      const selectedLanguage = languageSelect.value;
      const translatedDate = translateToLanguage(dateInput.value, selectedLanguage);
      resultsDiv.innerHTML = `<div class="alert alert-info mt-3" role="alert">${selectedLanguage}: ${translatedDate}</div>`;
    }
  });