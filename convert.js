// Sample JSON data for the app
const daysData = {
  "Sunday": {
    "en": "Sunday",
    "es": "Domingo",
    "fr": "Dimanche",
    "sw": "Jumapili",
    "al": "Sonntag",
  },
  "Monday": {
    "en": "Monday",
    "es": "Lunes",
    "fr": "Lundi",
    "sw": "Jumatatu",
    "al": "Montag",

  },
  "Tuesday": {
    "en": "Tuesday",
    "es": "Martes",
    "fr": "Mardi",
    "sw": "Jumanne",
    "al": "Dienstag",

  },
  "Wednesday": {
    "en": "Wednesday",
    "es": "Miércoles",
    "fr": "Mercredi",
    "sw": "Jumatano",
    "al": "Mittwoch",
  },
  "Thursday": {
    "en": "Thursday",
    "es": "Jueves",
    "fr": "Jeudi",
    "sw": "Alhamisi",
    "al": "Donnerstag",
  },
  "Friday": {
    "en": "Friday",
    "es": "Viernes",
    "fr": "Vendredi",
    "sw": "Ijumaa",
    "al": "Freitag",
  },
  "Saturday": {
    "en": "Saturday",
    "es": "Sábado",
    "fr": "Samedi",
    "sw": "Jumamosi",
    "al": "Samstag",
  }
}

// // Function to translate day of week to other languages
// function translateDayOfWeek(dayOfWeek, language) {
//   return daysData[dayOfWeek][language];
// }

// // Sample usage of the function
// const dateStr = "15/05/2022"; // Input date string in day/month/year format
// const dateComponents = dateStr.split("/"); // Split the string into day, month, and year components
// const inputDate = new Date(dateComponents[2], Number(dateComponents[1])-1, dateComponents[0]); // Create a new date object using the components
// const dayOfWeek = inputDate.toLocaleString('en-us', {weekday: 'long'}); // Get the day of the week in English
// console.log(`Day of week in English: ${dayOfWeek}`);
// console.log(`Day of week in Spanish: ${translateDayOfWeek(dayOfWeek, "es")}`);
// console.log(`Day of week in French: ${translateDayOfWeek(dayOfWeek, "fr")}`);
// console.log(`Day of week in Swahili: ${translateDayOfWeek(dayOfWeek, "sw")}`);

function translateDayOfWeek() {
    const inputDate = document.getElementById("date").value.trim();
    const language = document.getElementById("language").value;

    const dateComponents = inputDate.split("/");
    const inputDateObj = new Date(dateComponents[2], Number(dateComponents[1])-1, dateComponents[0]);
    const dayOfWeek = inputDateObj.toLocaleString('en-us', {weekday: 'long'});

    const translatedDayOfWeek = daysData[dayOfWeek][language];

    document.getElementById("result").innerHTML = `Day of week in ${language}: ${translatedDayOfWeek}`;
  }