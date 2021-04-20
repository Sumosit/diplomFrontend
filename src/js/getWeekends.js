export default function getWeekends(day, month) {
  var weekends = [
    {day: 1, month: 1},
    {day: 2, month: 1},
    {day: 3, month: 1},
    {day: 4, month: 1},
    {day: 7, month: 1},
    {day: 9, month: 1},
    {day: 10, month: 1},
    {day: 16, month: 1},
    {day: 23, month: 1},
    {day: 24, month: 1},
    {day: 30, month: 1},
    {day: 31, month: 1},

    {day: 6, month: 2},
    {day: 7, month: 2},
    {day: 13, month: 2},
    {day: 14, month: 2},
    {day: 20, month: 2},
    {day: 21, month: 2},
    {day: 27, month: 2},
    {day: 28, month: 2},

    {day: 6, month: 3},
    {day: 7, month: 3},
    {day: 8, month: 3},
    {day: 13, month: 3},
    {day: 14, month: 3},
    {day: 20, month: 3},
    {day: 21, month: 3},
    {day: 22, month: 3},
    {day: 23, month: 3},
    {day: 24, month: 3},
    {day: 27, month: 3},
    {day: 28, month: 3},

    {day: 3, month: 4},
    {day: 4, month: 4},
    {day: 10, month: 4},
    {day: 11, month: 4},
    {day: 17, month: 4},
    {day: 18, month: 4},
    {day: 24, month: 4},
    {day: 25, month: 4},

    {day: 1, month: 5},
    {day: 2, month: 5},
    {day: 3, month: 5},
    {day: 7, month: 5},
    {day: 8, month: 5},
    {day: 9, month: 5},
    {day: 15, month: 5},
    {day: 16, month: 5},
    {day: 22, month: 5},
    {day: 23, month: 5},
    {day: 29, month: 5},
    {day: 30, month: 5},

    {day: 5, month: 6},
    {day: 6, month: 6},
    {day: 12, month: 6},
    {day: 13, month: 6},
    {day: 19, month: 6},
    {day: 20, month: 6},
    {day: 26, month: 6},
    {day: 27, month: 6},

    {day: 4, month: 7},
    {day: 5, month: 7},
    {day: 6, month: 7},
    {day: 10, month: 7},
    {day: 11, month: 7},
    {day: 17, month: 7},
    {day: 18, month: 7},
    {day: 20, month: 7},
    {day: 24, month: 7},
    {day: 25, month: 7},
    {day: 31, month: 7},

    {day: 1, month: 8},
    {day: 7, month: 8},
    {day: 8, month: 8},
    {day: 14, month: 8},
    {day: 15, month: 8},
    {day: 21, month: 8},
    {day: 22, month: 8},
    {day: 28, month: 8},
    {day: 29, month: 8},
    {day: 30, month: 8},

    {day: 4, month: 9},
    {day: 5, month: 9},
    {day: 11, month: 9},
    {day: 12, month: 9},
    {day: 18, month: 9},
    {day: 19, month: 9},
    {day: 25, month: 9},
    {day: 26, month: 9},

    {day: 2, month: 10},
    {day: 3, month: 10},
    {day: 9, month: 10},
    {day: 10, month: 10},
    {day: 16, month: 10},
    {day: 17, month: 10},
    {day: 23, month: 10},
    {day: 24, month: 10},
    {day: 30, month: 10},
    {day: 31, month: 10},

    {day: 6, month: 11},
    {day: 7, month: 11},
    {day: 13, month: 11},
    {day: 14, month: 11},
    {day: 20, month: 11},
    {day: 21, month: 11},
    {day: 27, month: 11},
    {day: 28, month: 11},

    {day: 1, month: 12},
    {day: 4, month: 12},
    {day: 5, month: 12},
    {day: 11, month: 12},
    {day: 12, month: 12},
    {day: 16, month: 12},
    {day: 17, month: 12},
    {day: 18, month: 12},
    {day: 19, month: 12},
    {day: 25, month: 12},
    {day: 26, month: 12},
  ];
  for (var i = 0; i < weekends.length; i++) {
    if (weekends[i].day === day &&
    weekends[i].month === month) {
      return weekends[i];
    }
  }
}