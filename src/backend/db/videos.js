/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */

import { v4 as uuid } from "uuid";

const punkRock = [
  {
    _id: uuid(),
    videoId: "Soa3gO7tL-c",
    title: "Green Day - Boulevard Of Broken Dreams",
    artist: "Green Day",
    genre: "Punk Rock",
    views: "615M",
    created: "9 years ago",
    thumbnail:
      "https://i.ytimg.com/vi/Soa3gO7tL-c/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD0ceeBXv2asgWGNWF7RXZ7QfLNWg",
    description:
      "Watch the official music video for Boulevard Of Broken Dreams by Green Day from the album American Idiot.",
  },
  {
    _id: uuid(),
    videoId: "r00ikilDxW4",
    title: "Green Day - 21 Guns",
    artist: "Green Day",
    genre: "Punk Rock",
    views: "419M",
    created: "12 years ago",
    thumbnail:
      "https://i.ytimg.com/vi/r00ikilDxW4/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAYDnclIX4D-t17RW1fM-htjk6x3A",
    description:
      "Watch the official music video for 21 Guns by Green Day from the album 21st Century Breakdown.",
  },
  {
    _id: uuid(),
    videoId: "NU9JoFKlaZ0",
    title: "Green Day - Wake Me Up When September Ends",
    artist: "Green Day",
    genre: "Punk Rock",
    views: "192M",
    created: "12 years ago",
    thumbnail:
      "https://i.ytimg.com/vi/NU9JoFKlaZ0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC95wZ3vwiHSNrc-nLLvkC9OCmkdg",
    description:
      "Watch the official music video for Wake Me Up When September Ends by Green Day from the album American Idiot.",
  },
  {
    _id: uuid(),
    videoId: "By7ctqcWxyM",
    title: "Sum 41 - Pieces",
    artist: "Sum 41",
    genre: "Punk Rock",
    views: "63M",
    created: "12 years ago",
    thumbnail:
      "https://i.ytimg.com/vi/By7ctqcWxyM/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArXmQfQ7DQ9M6Dv3ZTX7xcJvzTXQ",
    description:
      "Music video by Sum 41 performing Pieces. (C) 2004 The Island Def Jam Music Group",
  },
  {
    _id: uuid(),
    videoId: "g8z-qP34-1Y",
    title: "Sum 41 - With Me",
    artist: "Sum 41",
    genre: "Punk Rock",
    views: "66M",
    created: "12 years ago",
    thumbnail:
      "https://i.ytimg.com/vi/g8z-qP34-1Y/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBvrKQ87tpvCJFZjTrhQ_BU4Xky9w",
    description:
      "Music video by Sum 41 performing With Me. (C) 2008 The Island Def Jam Music Group",
  },
];

const metal = [
  {
    _id: uuid(),
    videoId: "A7ry4cx6HfY",
    title: "Avenged Sevenfold - So Far Away",
    artist: "Avenged Sevenfold",
    genre: "Metal",
    views: "286M",
    created: "10 years ago",
    thumbnail:
      "https://i.ytimg.com/vi/A7ry4cx6HfY/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCPL_yk1VdOPr8FAnHCoXMo8EHvGQ",
    description:
      "Watch the official music video for So Far Away by Avenged Sevenfold from the album Nightmare.",
  },
  {
    _id: uuid(),
    videoId: "mzX0rhF8buo",
    title: "Avenged Sevenfold - Dear God",
    artist: "Avenged Sevenfold",
    genre: "Metal",
    views: "150M",
    created: "12 years ago",
    thumbnail:
      "https://i.ytimg.com/vi/mzX0rhF8buo/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD6F3p0tn2NnwEQE3IgpE-eyKB8bg",
    description:
      "Watch the official music video for Dear God by Avenged Sevenfold from the album Avenged Sevenfold.",
  },
  {
    _id: uuid(),
    videoId: "DelhLppPSxY",
    title: "Avenged Sevenfold - Hail To The King",
    artist: "Avenged Sevenfold",
    genre: "Metal",
    views: "212M",
    created: "8 years ago",
    thumbnail:
      "https://i.ytimg.com/vi/DelhLppPSxY/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB3hur0ID5yZj5syYtZAiBmAdZuzg",
    description:
      "Watch the official music video for Hail To The King by Avenged Sevenfold from the album Hail To The King",
  },
  {
    _id: uuid(),
    videoId: "WM8bTdBs-cw",
    title: "Metallica: One",
    artist: "Metallica",
    genre: "Metal",
    views: "248M",
    created: "12 years ago",
    thumbnail:
      "https://i.ytimg.com/vi/WM8bTdBs-cw/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBE8nkoTBGx6D6VW9iM1YS5-Fz8JQ",
    description:
      "Metallica's official music video for “One,” from the album “...And Justice for All.",
  },
  {
    _id: uuid(),
    videoId: "dkNfNR1WYMY",
    title: "Metallica - The Day That Never Comes",
    artist: "Metallica",
    genre: "Metal",
    views: "63M",
    created: "12 years ago",
    thumbnail:
      "https://i.ytimg.com/vi/K6AJuRK2NE4/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAWbpwQnhO1rXh0LUo1U1HjkTXF3Q",
    description:
      "The Day That Never Comes” by Metallica from the album Death Magnetic ©2008",
  },
];

const pop = [
  {
    _id: uuid(),
    videoId: "09R8_2nJtjg",
    title: "Maroon 5 - Sugar",
    artist: "Maroon 5",
    genre: "Pop",
    views: "3.6B",
    created: "7 years ago",
    thumbnail:
      "https://i.ytimg.com/vi/09R8_2nJtjg/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAqdjSBqyvPDYWKW-KL523yslY5Dw",
    description:
      "Music video by Maroon 5 performing Sugar. (C) 2015 Interscope Records",
  },
  {
    _id: uuid(),
    videoId: "hT_nvWreIhg",
    title: "OneRepublic - Counting Stars",
    artist: "OneRepublic",
    genre: "Pop",
    views: "3.5B",
    created: "8 years ago",
    thumbnail:
      "https://i.ytimg.com/vi/hT_nvWreIhg/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD07e2ntG66xGjVR_Kk4uHAGuW7bg",
    description:
      "Music video by OneRepublic performing Counting Stars. (C) 2013 Mosley Music/Interscope Records",
  },
  {
    _id: uuid(),
    videoId: "QJO3ROT-A4E",
    title: "One Direction - What Makes You Beautiful",
    artist: "One Direction",
    genre: "Pop",
    views: "1.3B",
    created: "10 years ago",
    thumbnail:
      "https://i.ytimg.com/vi/QJO3ROT-A4E/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB903vulhEksIh35Jr8bE66o_YpUw",
    description: "Check out One Direction’s 10 Year Anniversary website",
  },
  {
    _id: uuid(),
    videoId: "Jwgf3wmiA04",
    title: "One Direction - Drag Me Down",
    artist: "One Direction",
    genre: "Pop",
    views: "995M",
    created: "6 years ago",
    thumbnail:
      "https://i.ytimg.com/vi/Jwgf3wmiA04/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDMrXF7n_wv2mthSlGA-t6pymuTVw",
    description: "Check out One Direction’s 10 Year Anniversary website",
  },
  {
    _id: uuid(),
    videoId: "Z9pWgjSLLag",
    title: "Hot Chelle Rae - Hung Up",
    artist: "Hot Chelle Rae",
    genre: "Pop",
    views: "6.8M",
    created: "9 years ago",
    thumbnail:
      "https://i.ytimg.com/vi/Z9pWgjSLLag/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD6RYFmYsk0_hlJudZF7WLGHeTzVw",
    description:
      "Hot Chelle Rae's official music video for 'Hung Up'. Click to listen to Hot Chelle Rae on Spotify",
  },
];

const rock = [
  {
    _id: uuid(),
    videoId: "pAgnJDJN4VA",
    title: "AC/DC - Back In Black",
    artist: "AC/DC",
    genre: "Rock",
    views: "832M",
    created: "9 years ago",
    thumbnail:
      "https://i.ytimg.com/vi/pAgnJDJN4VA/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC2vejqrEyBg0540IhDSl8OlmMfEA",
    description: "Official 4K Video for Back In Black by AC/DC",
  },
  {
    _id: uuid(),
    videoId: "l482T0yNkeo",
    title: "AC/DC - Highway to Hell",
    artist: "AC/DC",
    genre: "Rock",
    views: "228M",
    created: "9 years ago",
    thumbnail:
      "https://i.ytimg.com/vi/l482T0yNkeo/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBzeXSbvY2xOsVbMi0WKyqDvrk8ag",
    description: "Official 4K Video for Highway to Hell by AC/DC",
  },
  {
    _id: uuid(),
    videoId: "Lo2qQmj0_h4",
    title: "AC/DC - You Shook Me All Night Long",
    artist: "AC/DC",
    genre: "Rock",
    views: "246M",
    created: "9 years ago",
    thumbnail:
      "https://i.ytimg.com/vi/Lo2qQmj0_h4/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBXrYvD_y-oonlIAn4sGzzE2Ru-8A",
    description: "Official 4K Video for You Shook Me All Night Long by AC/DC",
  },
  {
    _id: uuid(),
    videoId: "1w7OgIMMRc4",
    title: "Guns N' Roses - Sweet Child O' Mine",
    artist: "Guns N' Roses",
    genre: "Rock",
    views: "1.3B",
    created: "12 years ago",
    thumbnail:
      "https://i.ytimg.com/vi/1w7OgIMMRc4/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBZJmDlnn8QxL4f8hygsliBtmRnMA",
    description: "REMASTERED IN HD! OVER A BILLION VIEWS!",
  },
  {
    _id: uuid(),
    videoId: "YlUKcNNmywk",
    title: "Red Hot Chili Peppers - Californication",
    artist: "Red Hot Chili Peppers",
    genre: "Rock",
    views: "928M",
    created: "12 years ago",
    thumbnail:
      "https://i.ytimg.com/vi/YlUKcNNmywk/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDRZL3dr-uyBFO64ZAxIx8GQGCynA",
    description:
      "Watch the official music video for Californication by Red Hot Chili Peppers from the album Californication. ",
  },
];

const electronic = [
  {
    _id: uuid(),
    videoId: "yZIummTz9mM",
    title: "Linkin Park - Leave Out All The Rest",
    artist: "Linkin Park",
    genre: "Electronic",
    views: "190M",
    created: "13 years ago",
    thumbnail:
      "https://i.ytimg.com/vi/yZIummTz9mM/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA6O44RNIsRKMOCahE1Ql_mA-XJ5A",
    description:
      "Watch the official music video for Leave Out All The Rest by Linkin Park from the album Minutes to Midnight.",
  },
  {
    _id: uuid(),
    videoId: "5qF_qbaWt3Q",
    title: "Linkin Park - Waiting For The End",
    artist: "Linkin Park",
    genre: "Electronic",
    views: "212M",
    created: "11 years ago",
    thumbnail:
      "https://i.ytimg.com/vi/5qF_qbaWt3Q/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDueUF7WdPsm8KfjwOcBBnj7Bly9g",
    description:
      "Watch the official music video for Waiting For The End by Linkin Park from the album A Thousand Suns.",
  },
  {
    _id: uuid(),
    videoId: "ysSxxIqKNN0",
    title: "Linkin Park - New Divide",
    artist: "Linkin Park",
    genre: "Electronic",
    views: "516M",
    created: "12 years ago",
    thumbnail:
      "https://i.ytimg.com/vi/ysSxxIqKNN0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCfn1WTrhd1n83l7fbRM8xunzPdqw",
    description:
      "Watch the official music video for New Divide by Linkin Park from the New Divide EP.",
  },
];

const alternativeRock = [
  {
    _id: uuid(),
    videoId: "Lo2qQmj0_h4",
    title: "AC/DC - You Shook Me All Night Long",
    artist: "AC/DC",
    genre: "Alternative Rock",
    views: "246M",
    created: "9 years ago",
    thumbnail:
      "https://i.ytimg.com/vi/Lo2qQmj0_h4/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBXrYvD_y-oonlIAn4sGzzE2Ru-8A",
    description: "Official 4K Video for You Shook Me All Night Long by AC/DC",
  },
  {
    _id: uuid(),
    videoId: "1w7OgIMMRc4",
    title: "Guns N' Roses - Sweet Child O' Mine",
    artist: "Guns N' Roses",
    genre: "Rock",
    views: "1.3B",
    created: "12 years ago",
    thumbnail:
      "https://i.ytimg.com/vi/1w7OgIMMRc4/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBZJmDlnn8QxL4f8hygsliBtmRnMA",
    description: "REMASTERED IN HD! OVER A BILLION VIEWS!",
  },
  {
    _id: uuid(),
    videoId: "YlUKcNNmywk",
    title: "Red Hot Chili Peppers - Californication",
    artist: "Red Hot Chili Peppers",
    genre: "Rock",
    views: "928M",
    created: "12 years ago",
    thumbnail:
      "https://i.ytimg.com/vi/YlUKcNNmywk/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDRZL3dr-uyBFO64ZAxIx8GQGCynA",
    description:
      "Watch the official music video for Californication by Red Hot Chili Peppers from the album Californication. ",
  },
];

const alternativeMetal = [
  {
    _id: uuid(),
    videoId: "DelhLppPSxY",
    title: "Avenged Sevenfold - Hail To The King",
    artist: "Avenged Sevenfold",
    genre: "Alternative Metal",
    views: "212M",
    created: "8 years ago",
    thumbnail:
      "https://i.ytimg.com/vi/DelhLppPSxY/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB3hur0ID5yZj5syYtZAiBmAdZuzg",
    description:
      "Watch the official music video for Hail To The King by Avenged Sevenfold from the album Hail To The King",
  },
  {
    _id: uuid(),
    videoId: "WM8bTdBs-cw",
    title: "Metallica: One",
    artist: "Metallica",
    genre: "Alternative Metal",
    views: "248M",
    created: "12 years ago",
    thumbnail:
      "https://i.ytimg.com/vi/WM8bTdBs-cw/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBE8nkoTBGx6D6VW9iM1YS5-Fz8JQ",
    description:
      "Metallica's official music video for “One,” from the album “...And Justice for All.",
  },
  {
    _id: uuid(),
    videoId: "dkNfNR1WYMY",
    title: "Metallica - The Day That Never Comes",
    artist: "Metallica",
    genre: "Alternative Metal",
    views: "63M",
    created: "12 years ago",
    thumbnail:
      "https://i.ytimg.com/vi/K6AJuRK2NE4/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAWbpwQnhO1rXh0LUo1U1HjkTXF3Q",
    description:
      "The Day That Never Comes” by Metallica from the album Death Magnetic ©2008",
  },
];

export const videos = [
  ...punkRock,
  ...metal,
  ...pop,
  ...rock,
  ...electronic,
  ...alternativeRock,
  ...alternativeMetal,
];
