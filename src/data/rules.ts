export interface Rule {
  title: string;
  description: string;
  subrules?: string[];
}

export const rules: Rule[] = [
  {
    title: "1. Respekt a chování",
    description: "Chovejte se ke všem hráčům s respektem a dodržujte základní pravidla slušného chování.",
    subrules: [
      "Zákaz urážek, nadávek a toxického chování",
      "Zákaz diskriminace v jakékoliv formě",
      "Respektujte rozhodnutí administrátorů"
    ]
  },
  {
    title: "2. Roleplay pravidla",
    description: "Dodržujte základní principy roleplay a zůstaňte ve své roli.",
    subrules: [
      "Zákaz metagamingu (využívání informací mimo RP)",
      "Zákaz powergamingu (nereálné/nemožné akce)",
      "Dodržujte realistický přístup k RP situacím"
    ]
  },
  {
    title: "3. Cheaty a exploity",
    description: "Používání cheatů, modifikací nebo exploitů je přísně zakázáno.",
    subrules: [
      "Zákaz používání jakýchkoliv cheatů nebo hacků",
      "Zákaz zneužívání bugů nebo exploitů",
      "Povinnost nahlásit nalezené bugy administrátorům"
    ]
  },
  {
    title: "4. Komunikace",
    description: "Dodržujte pravidla komunikace v herním prostředí.",
    subrules: [
      "Používejte pouze český nebo slovenský jazyk",
      "Zákaz spamování v chatu nebo hlasové komunikaci",
      "Respektujte ostatní hráče při komunikaci"
    ]
  }
];