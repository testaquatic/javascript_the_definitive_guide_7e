const d = new Date("2020-01-02T13:14:15Z");

console.log(Intl.DateTimeFormat("en-US").format(d));
console.log(Intl.DateTimeFormat("fr-FR").format(d));

let opts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
console.log(Intl.DateTimeFormat("en-US", opts).format(d));
console.log(Intl.DateTimeFormat("es-ES", opts).format(d));

opts = {
    hour: "numeric", minute: "2-digit", timezone: "America/New_York"
};
console.log(Intl.DateTimeFormat("fr-CA", opts).format(d));