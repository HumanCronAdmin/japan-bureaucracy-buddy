/*
 * Japan Bureaucracy Buddy - Step Data
 * All data from official sources (see data_sources.txt)
 */

var STEPS = [
  {
    id: "address",
    number: 1,
    title: "Address Registration (Tennyuu Todoke)",
    description: "Register your address at the ward/city office within 14 days of moving in. This is legally required under the Resident Basic Act.",
    timeEstimate: "30 min - 1 hour at the office",
    englishSupport: "Limited (some offices have multilingual staff)",
    lastUpdated: "2026-03",
    officialUrl: "https://www.isa.go.jp/en/",
    requiredDocs: {
      all: [
        "Passport",
        "Residence Card (Zairyu Card)",
        "Move-in notification form (available at the office)"
      ],
      "permanent-resident": [],
      "engineer": [],
      "student": [],
      "specified-skilled": [],
      "spouse": ["Spouse's family register (koseki tohon) or marriage certificate — if registering together"]
    },
    warnings: [
      "You must register within 14 days of moving in. Failure may result in a fine up to 200,000 yen.",
      "Bring your Residence Card — the office will print your new address on the back."
    ],
    tips: [
      "Go early in the morning to avoid long waits.",
      "Some ward offices have English-speaking counters. Check their website before visiting.",
      "You can often complete My Number application at the same time."
    ],
    visaDifferences: {
      "permanent-resident": "Same process as other visa types.",
      "engineer": "Your employer may provide a letter confirming your address for corporate housing.",
      "student": "Your school may assist with address registration.",
      "specified-skilled": "Your employer or support agency often assists with this step.",
      "spouse": "You and your spouse can register together if moving to the same address."
    }
  },
  {
    id: "mynumber",
    number: 2,
    title: "My Number Card",
    description: "Apply for your My Number Card at the ward/city office. You will receive a My Number notification letter first, and the card arrives by mail in 1-2 months.",
    timeEstimate: "15 min application + 1-2 months for card delivery",
    englishSupport: "Limited (application forms available in multiple languages)",
    lastUpdated: "2026-03",
    officialUrl: "https://www.kojinbango-card.go.jp/en/",
    requiredDocs: {
      all: [
        "Residence Card",
        "My Number notification letter (sent to your registered address)",
        "Photo (4.5cm x 3.5cm, taken within 6 months)"
      ],
      "permanent-resident": [],
      "engineer": [],
      "student": [],
      "specified-skilled": [],
      "spouse": []
    },
    warnings: [
      "The My Number notification letter is sent by mail after address registration. Keep it safe.",
      "You need the My Number card for many services: bank accounts, tax filing, health insurance."
    ],
    tips: [
      "You can apply online at the Digital Agency portal if you have the QR code from your notification letter.",
      "The card pickup requires an in-person visit to the ward office with your notification letter and ID.",
      "While waiting for the card, the notification letter can be used as proof of your My Number."
    ],
    visaDifferences: {
      "permanent-resident": "Same process. Your My Number stays the same even after status changes.",
      "engineer": "Your employer will ask for your My Number for tax and social insurance paperwork.",
      "student": "You need My Number for part-time work tax reporting.",
      "specified-skilled": "Your employer or support agency may assist with the application.",
      "spouse": "Same process as other visa types."
    }
  },
  {
    id: "bank",
    number: 3,
    title: "Bank Account",
    description: "Open a Japanese bank account. Most banks require you to visit a branch in person. The FEFTA 6-month rule restricts new arrivals to limited accounts.",
    timeEstimate: "1-2 hours at the branch",
    englishSupport: "Varies by bank (see comparison table below)",
    lastUpdated: "2026-03",
    officialUrl: null,
    requiredDocs: {
      all: [
        "Residence Card",
        "Passport",
        "My Number notification or card",
        "Inkan (personal seal) or signature — depends on the bank"
      ],
      "permanent-resident": [],
      "engineer": ["Proof of employment (company letter or business card) — may help"],
      "student": ["Student ID or enrollment certificate"],
      "specified-skilled": [],
      "spouse": []
    },
    warnings: [
      "The 6-month rule (FEFTA): If you have lived in Japan less than 6 months, you are classified as a non-resident. Your account will have restrictions: no online banking, no debit card, limited ATM hours.",
      "After 6 months, visit the bank to upgrade to a full resident account."
    ],
    tips: [
      "Japan Post Bank (Yucho) is the most foreigner-friendly — they accept new arrivals with 3+ months remaining visa.",
      "Bring all documents even if you think they are not needed. Banks may ask for additional ID.",
      "Some banks require an appointment. Call ahead."
    ],
    visaDifferences: {
      "permanent-resident": "No 6-month restriction. You can open a full account immediately.",
      "engineer": "6-month rule applies if you just arrived. Your employer may help open a salary account.",
      "student": "6-month rule applies. Japan Post Bank is recommended for new students.",
      "specified-skilled": "6-month rule applies. Your employer or agency often assists.",
      "spouse": "6-month rule may apply if you just arrived."
    },
    crossLink: {
      text: "Compare international transfer fees",
      url: "https://humancronadmin.github.io/money-transfer-japan/"
    }
  },
  {
    id: "insurance",
    number: 4,
    title: "Health Insurance",
    description: "Enroll in health insurance at your ward/city office within 14 days of arrival. All residents of Japan must have health insurance.",
    timeEstimate: "30 min - 1 hour at the office",
    englishSupport: "Limited",
    lastUpdated: "2026-03",
    officialUrl: "https://www.mhlw.go.jp/english/policy/health-medical/health-insurance/",
    requiredDocs: {
      all: [
        "Residence Card",
        "Passport",
        "My Number notification or card"
      ],
      "permanent-resident": [],
      "engineer": [],
      "student": [],
      "specified-skilled": [],
      "spouse": ["Spouse's insurance information (if joining their plan)"]
    },
    warnings: [
      "Enrollment is mandatory. Do not skip this step.",
      "Premiums are based on your previous year income. First year premiums are usually low.",
      "From 2027: Unpaid health insurance premiums will be checked at visa renewal. Non-payment may result in visa renewal denial."
    ],
    tips: [
      "You can often enroll at the same time as address registration.",
      "Keep your insurance card (hokensho) with you at all times — you need it for any doctor visit.",
      "Insurance covers 70% of medical costs. You pay 30%."
    ],
    visaDifferences: {
      "permanent-resident": "NHI (National Health Insurance) or employer insurance. No visa renewal concern for insurance.",
      "engineer": "Usually covered by employer insurance (shakai hoken). Your company enrolls you.",
      "student": "Must enroll in NHI (National Health Insurance) at the ward office. Mandatory.",
      "specified-skilled": "Covered by employer insurance (shakai hoken). Your company enrolls you.",
      "spouse": "NHI, or you can join your spouse employer insurance if they have shakai hoken."
    },
    crossLink: {
      text: "Estimate your taxes",
      url: "https://humancronadmin.github.io/japan-tax-calculator/"
    }
  },
  {
    id: "pension",
    number: 5,
    title: "National Pension",
    description: "Enroll in the National Pension System at your ward/city office. All residents aged 20-59 must be enrolled.",
    timeEstimate: "15-30 min at the office",
    englishSupport: "Limited (Japan Pension Service has English resources online)",
    lastUpdated: "2026-03",
    officialUrl: "https://www.nenkin.go.jp/international/",
    requiredDocs: {
      all: [
        "Residence Card",
        "My Number notification or card",
        "Passport"
      ],
      "permanent-resident": [],
      "engineer": [],
      "student": ["Student ID or enrollment certificate (for exemption application)"],
      "specified-skilled": [],
      "spouse": ["Spouse pension booklet or employer information (for Category 3 dependent)"]
    },
    warnings: [
      "Monthly premium: approximately 16,980 yen (FY2025).",
      "Non-payment can affect visa renewal (same as health insurance from 2027)."
    ],
    tips: [
      "Students can apply for a payment exemption (gakusei nofutokurei).",
      "When you leave Japan permanently, you can apply for a lump-sum withdrawal of pension contributions.",
      "Keep your pension booklet (nenkin techo) safe."
    ],
    visaDifferences: {
      "permanent-resident": "Mandatory. No exemption available. Pension payments build towards retirement benefits.",
      "engineer": "Covered by employer pension (kosei nenkin). Your company enrolls you and splits the cost.",
      "student": "Can apply for student exemption (gakusei nofutokurei) — no payment required during enrollment.",
      "specified-skilled": "Covered by employer pension (kosei nenkin). Your company handles enrollment.",
      "spouse": "If your spouse is a company employee, you may qualify as Category 3 dependent — no payment required."
    }
  }
];
