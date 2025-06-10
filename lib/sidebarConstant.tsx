import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
export const bibleCharacters : string[] = [
  "Aaron",
  "Abel",
  "Abraham",
  "Absalom",
  "Adam",
  "Andrew",
  "Barnabas",
  "Bartholomew",
  "Bathsheba",
  "Cain",
  "Caleb",
  "Cornelius",
  "Daniel",
  "David",
  "Deborah",
  "Elijah",
  "Elisha",
  "Enoch",
  "Esau",
  "Eve",
  "Gideon",
  "Habakkuk",
  "Hagar",
  "Hannah",
  "Hezekiah",
  "Hosea",
  "Isaac",
  "Isaiah",
  "Ishmael",
  "Jacob",
  "James",
  "Jephthah",
  "Jeremiah",
  "Jericho (symbolic)",
  "Jeroboam",
  "Jesus",
  "Joab",
  "Job",
  "Joel",
  "John the Baptist",
  "John (Apostle)",
  "Jonah",
  "Jonathan",
  "Joseph (Old Testament)",
  "Joseph (Mary’s husband)",
  "Joshua",
  "Judas Iscariot",
  "Leah",
  "Lot",
  "Luke",
  "Lydia",
  "Mark",
  "Mary (Mother of Jesus)",
  "Mary Magdalene",
  "Matthew",
  "Micah",
  "Miriam",
  "Moses",
  "Naomi",
  "Nathan",
  "Nehemiah",
  "Nicodemus",
  "Noah",
  "Paul",
  "Peter",
  "Philip",
  "Philemon",
  "Priscilla",
  "Rachel",
  "Rahab",
  "Rebekah",
  "Ruth",
  "Samson",
  "Samuel",
  "Sarah",
  "Saul (King)",
  "Saul/Paul (Apostle)",
  "Seth",
  "Shadrach",
  "Silas",
  "Simon the Zealot",
  "Solomon",
  "Stephen",
  "Thomas",
  "Titus",
  "Uriah",
  "Zacchaeus",
  "Zechariah"
];


export   const themes : string[] = [
    "forgiveness",
    "faithfulness",
    "courage",
    "resurrection",
    "hope",
    "redemption",
    "divine intervention",
    "love",
    "grace",
    "mercy",
    "sacrifice",
    "wisdom",
    "guidance",
    "strength",
    "peace",
    "joy",
    "patience",
    "kindness",
    "goodness",
    "self-control",
  ];

  export const filterLinks = [
      {
        title: "Testament",
        icon: (
          <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
      },
  
      {
        title: "Theme",
        icon: (
          <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
      },
      {
        title: "Character",
        icon: (
          <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
      },
      {
        title: "Book",
        icon: (
          <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
      }
      ,
      {
        title: "Genres",
        icon: (
          <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
      }
    ];

    export const bibleBooks = [
  // Old Testament (39)
  "Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy",
  "Joshua", "Judges", "Ruth", "1 Samuel", "2 Samuel",
  "1 Kings", "2 Kings", "1 Chronicles", "2 Chronicles", "Ezra",
  "Nehemiah", "Esther", "Job", "Psalms", "Proverbs",
  "Ecclesiastes", "Song of Solomon", "Isaiah", "Jeremiah", "Lamentations",
  "Ezekiel", "Daniel", "Hosea", "Joel", "Amos",
  "Obadiah", "Jonah", "Micah", "Nahum", "Habakkuk",
  "Zephaniah", "Haggai", "Zechariah", "Malachi",

  // New Testament (27)
  "Matthew", "Mark", "Luke", "John", "Acts",
  "Romans", "1 Corinthians", "2 Corinthians", "Galatians", "Ephesians",
  "Philippians", "Colossians", "1 Thessalonians", "2 Thessalonians", "1 Timothy",
  "2 Timothy", "Titus", "Philemon", "Hebrews", "James",
  "1 Peter", "2 Peter", "1 John", "2 John", "3 John",
  "Jude", "Revelation"
];
