var regular = /(0[1-9]|1[0-9]|2[0-9]|3[01]) (Янв|Фев|Мар|Апр|Май|Июн|Июл|Авг|Сен|Окт|Ноя|Дек), (19|20)\d{2}/
var string_data = "21 Янв, 1978"
var result = regular.test(string_data)
console.log(result)