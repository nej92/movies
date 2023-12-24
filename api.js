const peliculas = [
    {
        id: "01",
        name: "Harry Potter y la piedra filosofal",
        saga: true,
        year: "2001",
        img: "/imgs/HP1.jpg",
        trailer: ""
    },
    {
        id: "02",
        name: "Harry Potter y la camara secreta",
        saga: true,
        year: "2002",
        img: "/imgs/HP2.jpg",
        trailer: "https://youtu.be/jBltxS8HfQ4"
    },
    {
        id: "03",
        name: "Harry Potter y el caliz de fuego",
        saga: true,
        year: "2005",
        img: "/imgs/HP4.jpg",
        trailer: "https://youtu.be/3EGojp4Hh6I"
    },
    {
        id: "04",
        name: "Harry Potter y la orden del Fénix",
        saga: true,
        year: "2007",
        img: "/imgs/HP5.jpg",
        trailer: "https://youtu.be/y6ZW7KXaXYk"
    },
    {
        id: "05",
        name: "Harry Potter y el prisionero de Azkaban",
        saga: true,
        year: "2004",
        img: "/imgs/HP3.jpg",
        trailer: "https://youtu.be/1ZdlAg3j8nI"
    },
    {
        id: "06",
        name: "Harry Potter y las reliquias de la muerte 1",
        saga: true,
        year: "2010",
        img: "/imgs/HP6.jpg",
        trailer: "https://youtu.be/MxqsmsA8y5k"
    },
    {
        id: "07",
        name: "Harry Potter y las reliquias de la muerte 2",
        saga: true,
        year: "2011",
        img: "/imgs/HP7.jpg",
        trailer: "https://youtu.be/5NYt1qirBWg"
    },
    {
        id: "08",
        name: "Love, Death & Robots",
        saga: false,
        year: "2019",
        img: "/imgs/LDAR.jpg",
        trailer: ""
    },
    {
        id: "09",
        name: "Black Mirror",
        saga: false,
        year: "2014",
        img: "/imgs/blackMirror.jpg",
        trailer: ""
    },
    {
        id: "10",
        name: "Cyberpunk",
        saga: false,
        year: "2020",
        img: "/imgs/cyberpunk.jpg",
        trailer: ""
    },
    {
        id: "11",
        name: "The Avengers",
        saga: true,
        year: "2012",
        img: "/imgs/theAvengers.jpg",
        trailer: ""
    },
    {
        id: "12",
        name: "Avengers: Age of Ultron",
        saga: true,
        year: "2015",
        img: "/imgs/AvengersUltron.jpg",
        trailer: ""
    },
    {
        id: "13",
        name: "Avengers: Infinity War",
        saga: true,
        year: "2018",
        img: "/imgs/AvengersInfinity.jpg",
        trailer: ""
    },
    {
        id: "14",
        name: "Avengers: Endgame",
        saga: true,
        year: "2019",
        img: "/imgs/AvengersEndgame.jpg",
        trailer: ""
    },
    {
        id: "15",
        name: "X-Men",
        saga: true,
        year: "2000",
        img: "/imgs/XMen.jpg",
        trailer: ""
    },
    {
        id: "16",
        name: "X-Men 2",
        saga: true,
        year: "2003",
        img: "/imgs/xmen2.jpg",
        trailer: ""
    },
    {
        id: "17",
        name: "X-Men 3: The Last Stand",
        saga: true,
        year: "2006",
        img: "/imgs/xMen3.jpg",
        trailer: ""
    },
    {
        id: "18",
        name: "X-Men Origins",
        saga: true,
        year: "2009",
        img: "/imgs/xMenOrigins.jpg",
        trailer: ""
    },
    {
        id: "19",
        name: "X-Men First Class",
        saga: true,
        year: "2011",
        img: "/imgs/xMenFirstClass.jpg",
        trailer: ""
    },
    {
        id: "20",
        name: "X-Men: The Wolverine",
        saga: true,
        year: "2013",
        img: "/imgs/theWolverine.jpg",
        trailer: ""
    },
    {
        id: "21",
        name: "X-Men: Days of Future Past",
        saga: true,
        year: "2014",
        img: "/imgs/xMenDaysFuture.jpg",
        trailer: ""
    },
    {
        id: "22",
        name: "X-Men: Apocalipsis",
        saga: true,
        year: "2016",
        img: "/imgs/xmenApocalipsis.jpg",
        trailer: ""
    },
    {
        id: "23",
        name: "X-Men: Logan",
        saga: true,
        year: "2017",
        img: "/imgs/logan.jpg",
        trailer: ""
    },
    {
        id: "24",
        name: "X-Men: Dark Phoenix",
        saga: true,
        year: "2019",
        img: "/imgs/xMenDarkPhoenix.jpg",
        trailer: ""
    },
    {
        id: "25",
        name: "Spider-Man: Homecoming",
        saga: true,
        year: "2017",
        img: "/imgs/SpiderManHomeComing.jpg",
        trailer: ""
    },
    {
        id: "26",
        name: "Spider-Man: Far from Home",
        saga: true,
        year: "2019",
        img: "/imgs/Spider_Man_Far_From_Home.jpg",
        trailer: ""
    },
    {
        id: "27",
        name: "Spider-Man: No Way Home",
        saga: true,
        year: "2021",
        img: "/imgs/SpiderManNoWayHome.jpg",
        trailer: ""
    },
    {
        id: "28",
        name: "Doctor Strange",
        saga: true,
        year: "2016",
        img: "/imgs/DoctorStrange.jpg",
        trailer: ""
    },
    {
        id: "29",
        name: "Doctor Strange in the Multiverse of Madness",
        saga: true,
        year: "2022",
        img: "/imgs/DoctorStrangeMultiverse.jpg",
        trailer: ""
    },
    {
        id: "30",
        name: "The Fast and the Furious",
        saga: true,
        year: "2001",
        img: "/imgs/TheFastadnTheFurious.jpg",
        trailer: ""
    },
    {
        id: "31",
        name: "2 Fast 2 Furious",
        saga: true,
        year: "2003",
        img: "/imgs/2Fast2Furious.jpg",
        trailer: ""
    },
    {
        id: "32",
        name: "The Fast and the Furious: Tokyo Drift",
        saga: true,
        year: "2006",
        img: "/imgs/fastandFuriousTokyo.jpg",
        trailer: ""
    },
    {
        id: "33",
        name: "Fast & Furious",
        saga: true,
        year: "2009",
        img: "/imgs/fast_and_furious.jpg",
        trailer: ""
    },
    {
        id: "34",
        name: "Fast Five",
        saga: true,
        year: "2011",
        img: "/imgs/Fast_Five.jpg",
        trailer: ""
    },
    {
        id: "35",
        name: "Fast & Furious 6",
        saga: true,
        year: "2013",
        img: "/imgs/fast_and_furious6.jpg",
        trailer: ""
    },
    {
        id: "36",
        name: "Furious 7",
        saga: true,
        year: "2015",
        img: "/imgs/Furious7.jpg",
        trailer: ""
    },
    {
        id: "37",
        name: "The Fate of the Furious",
        saga: true,
        year: "2017",
        img: "/imgs/theFateOfTheFurious.jpg",
        trailer: ""
    },
    {
        id: "38",
        name: "F9",
        saga: true,
        year: "2021",
        img: "/imgs/F9.jpg",
        trailer: ""
    },
    {
        id: "39",
        name: "Fast X",
        saga: true,
        year: "2023",
        img: "/imgs/fastX.jpg",
        trailer: ""
    },
    {
        id: "40",
        name: "Rick and Morty",
        saga: false,
        year: "2023",
        img: "/imgs/RickadnMorty.jpg",
        trailer: ""
    },
    {
        id: "41",
        name: "Fantastic Beasts and Where to Find Them",
        saga: true,
        year: "2016",
        img: "/imgs/FB1.jpg",
        trailer: ""
    },
    {
        id: "42",
        name: "Fantastic Beasts: The Crimes of Grindelwald",
        saga: true,
        year: "2018",
        img: "/imgs/FBgrindelwald.jpg",
        trailer: ""
    },
    {
        id: "43",
        name: "Fantastic Beasts: The Secrets of Dumbledore",
        saga: true,
        year: "2022",
        img: "/imgs/FBDumbledor.jpg",
        trailer: ""
    },
    {
        id: "44",
        name: "High School Musical",
        saga: true,
        year: "2006",
        img: "/imgs/HSM1.jpg",
        trailer: ""
    },
    {
        id: "45",
        name: "High School Musical 2",
        saga: true,
        year: "2007",
        img: "/imgs/HSM2.jpg",
        trailer: ""
    },
    {
        id: "46",
        name: "High School Musical 3: Senior Year",
        saga: true,
        year: "2008",
        img: "/imgs/HSM3.jpg",
        trailer: ""
    },
    {
        id: "47",
        name: "Real Steel",
        saga: false,
        year: "2011",
        img: "/imgs/RealSteal.jpg",
        trailer: ""
    },
    {
        id: "48",
        name: "Ready Player One",
        saga: false,
        year: "2018",
        img: "/imgs/ReadyPlayerOne.jpg",
        trailer: ""
    },
    {
        id: "49",
        name: "Alita: Battle Angel",
        saga: false,
        year: "2019",
        img: "/imgs/Alita.jpg",
        trailer: ""
    },
    {
        id: "50",
        name: "Dune",
        saga: true,
        year: "2021",
        img: "/imgs/.jpg",
        trailer: ""
    }
    /*
    {
        id: "",
        name: "",
        saga: true,
        year: "2023",
        img: "/imgs/.jpg",
        trailer: ""
    }
    {
        id: "",
        name: "",
        saga: true,
        year: "2023",
        img: "/imgs/.jpg",
        trailer: ""
    }
    {
        id: "",
        name: "",
        saga: true,
        year: "2023",
        img: "/imgs/.jpg",
        trailer: ""
    }
    {
        id: "",
        name: "",
        saga: true,
        year: "2023",
        img: "/imgs/",
        trailer: ""
    }
    {
        id: "",
        name: "",
        saga: true,
        year: "2023",
        img: "/imgs/",
        trailer: ""
    }*/
]