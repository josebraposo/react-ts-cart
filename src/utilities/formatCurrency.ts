const CURRENCY_FORMATTER = new Intl.NumberFormat('PT-pt', {
  currency: "EUR",
  style: "currency",
});

export function formatCurrency(number: number) {
    return CURRENCY_FORMATTER.format(number);
}
