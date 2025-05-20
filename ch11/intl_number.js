const date = [0.05, .075, 1];
const formatData = Intl.NumberFormat(undefined, { style: "percent", minimumFractionDigits: 1, maximumFractionDigits: 1 }).format;
console.log(date.map(formatData));
const arabic = Intl.NumberFormat("ar-AE", { useGrouping: false }).format;
console.log(arabic(123456789));