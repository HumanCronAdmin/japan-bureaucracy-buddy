/*
 * Japan Bureaucracy Buddy - Bank Data
 * All data from official bank websites (see data_sources.txt)
 */

var BANKS = [
  {
    name: "MUFG (Mitsubishi UFJ)",
    url: "https://www.bk.mufg.jp/global/",
    foreignerOk: true,
    sixMonthRule: true,
    sixMonthNote: "Non-residents get restricted account",
    englishSupport: "Limited (some branches, ATM has English)",
    requiredDocs: ["Passport", "Residence Card", "My Number notification", "Seal (inkan) or signature"],
    onlineBanking: true,
    onlineBankingNote: "Available after 6-month upgrade",
    bestFor: "Those near a major branch"
  },
  {
    name: "SMBC (Sumitomo Mitsui)",
    url: "https://www.smbc.co.jp/global/",
    foreignerOk: true,
    sixMonthRule: true,
    sixMonthNote: "Non-residents get restricted account",
    englishSupport: "Limited (phone English line: 0120-327-236)",
    requiredDocs: ["Passport", "Residence Card", "Inkan or signature"],
    onlineBanking: true,
    onlineBankingNote: "Available after 6-month upgrade",
    bestFor: "Those who want phone support in English"
  },
  {
    name: "Mizuho",
    url: "https://www.mizuhogroup.com/bank",
    foreignerOk: true,
    sixMonthRule: true,
    sixMonthNote: "Non-residents get restricted account",
    englishSupport: "Limited",
    requiredDocs: ["Passport", "Residence Card"],
    onlineBanking: true,
    onlineBankingNote: "Available after 6-month upgrade",
    bestFor: "Those near a Mizuho branch"
  },
  {
    name: "Japan Post Bank (Yucho)",
    url: "https://www.jp-bank.japanpost.jp/en/",
    foreignerOk: true,
    sixMonthRule: false,
    sixMonthNote: "Can open with 3+ months remaining visa period",
    englishSupport: "Minimal (forms available in English)",
    requiredDocs: ["Residence Card", "Passport"],
    onlineBanking: true,
    onlineBankingNote: "Available from day one",
    bestFor: "New arrivals (most foreigner-friendly)"
  },
  {
    name: "Sony Bank",
    url: "https://moneykit.net/en/",
    foreignerOk: true,
    sixMonthRule: true,
    sixMonthNote: "Applies for initial application",
    englishSupport: "Full (app and website in English)",
    requiredDocs: ["Residence Card", "My Number"],
    onlineBanking: true,
    onlineBankingNote: "Fully English online banking",
    bestFor: "Expats who want full English interface and low FX fees"
  },
  {
    name: "Rakuten Bank",
    url: "https://www.rakuten-bank.co.jp/",
    foreignerOk: true,
    sixMonthRule: true,
    sixMonthNote: "Applies",
    englishSupport: "Partial (some pages translated)",
    requiredDocs: ["Residence Card", "My Number"],
    onlineBanking: true,
    onlineBankingNote: "Fully online account opening",
    bestFor: "Online-only banking; pairs with Rakuten Card rewards"
  }
];
