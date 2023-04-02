const pidginWeekDays = {
    standard: ["Sanda", "Monde", "Tiisde", "Wenzde", "Tosde", "Fraide", "Satade"],
    awunyi: ["Sonday", "Monde", "Tuday", "Wendesday", "Torsday", "Fryday", "Satday"],
    bafaw: ["Sandi", "Minday", "Tuday", "Wendesday", "Tosday", "Fraisday", "Sataday"],
    mbouda: ["Sandi", "Mondi", "Chuŋdi", "Ekrili", "Tɛɛsdɛ", "Fɛlâydi", "Satadi"],
    ngumba: ["Ntoon", "Mɔ́ndii", "Sɔ́ndii", "Sɔ́ndii mɛ́díkɛ́", "Fúladé", "Fɛláy", "Sɔ́ndii tǎanǎ́"]
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