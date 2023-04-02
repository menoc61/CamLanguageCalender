const pidginWeekDays = ["Sanda", "Monde", "Tiisde", "Wenzde", "Tosde", "Fraide", "Satade"];

function translateDateToPidgin(dateString) {
  const [day, month, year] = dateString.split("-").map(num => parseInt(num));
  const dateObj = new Date(year, month - 1, day);
  const weekDay = pidginWeekDays[dateObj.getDay()];
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

const translateBtn = document.getElementById("translateBtn");
const dateInput = document.getElementById("dateInput");
const languageSelect = document.getElementById("languageSelect");
const resultsDiv = document.getElementById("results");

translateBtn.addEventListener("click", function(e) {
    e.preventDefault();
    const pidginDate = translateDateToPidgin(dateInput.value);
    const selectedLanguage = languageSelect.value;
    const translatedDate = translateToLanguage(dateInput.value, selectedLanguage);
    resultsDiv.innerHTML = `<p>Pidgin English: ${pidginDate}</p><p>${selectedLanguage}: ${translatedDate}</p>`;
    console.log(dateInput.value);
});