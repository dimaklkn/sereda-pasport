export function convertToArshinAndVershok(cm) {
  const vershokInCm = 4.445;

  // Сначала переводим всё в вершки
  let totalVershoks = Math.round(cm / vershokInCm);

  // Получаем количество аршинов
  let arshins = Math.floor(totalVershoks / 16);

  // Остаток — это вершки
  let vershoks = totalVershoks % 16;

  return {
    arshin: arshins,
    vershok: vershoks,
  };
}

export function getFutureAndTodayDate() {
  const months = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря",
  ];

  const today = new Date();
  const futureDate = new Date(today);
  futureDate.setMonth(today.getMonth() + 3);

  return {
    future: {
      month: months[futureDate.getMonth()],
      date: futureDate.getDate(),
      year: futureDate.getFullYear(),
    },
    today: {
      month: months[today.getMonth()],
      date: today.getDate(),
      year: today.getFullYear(),
    },
  };
}
