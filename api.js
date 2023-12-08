const peliculas = [
    {
        id: "01",
        name: "Harry Potter y la piedra filosofal",
        saga: true,
        year: "2001",
        img: "https://i0.wp.com/cineyvaloressj.com/wp-content/uploads/2020/08/42100525172832813e301be5faadbbf1.jpg?fit=1077%2C1481&ssl=1",
        trailer: "https://youtu.be/mNgwNXKBEW0"
    },
    {
        id: "02",
        name: "Harry Potter y la cámara secreta",
        saga: true,
        year: "2002",
        img: "https://pics.filmaffinity.com/Harry_Potter_y_la_caamara_secreta-954557814-large.jpg",
        trailer: "https://youtu.be/jBltxS8HfQ4"
    },
    {
        id: "03",
        name: "Harry Potter y el cáliz de fuego",
        saga: true,
        year: "2005",
        img: "https://pics.filmaffinity.com/Harry_Potter_y_el_c_liz_de_fuego-574935053-large.jpg",
        trailer: "https://youtu.be/3EGojp4Hh6I"
    },
    {
        id: "04",
        name: "Harry Potter y la orden del Fénix",
        saga: true,
        year: "2007",
        img: "https://pics.filmaffinity.com/Harry_Potter_y_la_orden_del_F_nix-427130056-large.jpg",
        trailer: "https://youtu.be/y6ZW7KXaXYk"
    },
    {
        id: "05",
        name: "Harry Potter y el prisionero de Azkaban",
        saga: true,
        year: "2004",
        img: "https://es.web.img2.acsta.net/pictures/14/04/30/11/36/185120.jpg",
        trailer: "https://youtu.be/1ZdlAg3j8nI"
    },
    {
        id: "06",
        name: "Harry Potter y las reliquias de la muerte 1",
        saga: true,
        year: "2010",
        img: "https://es.web.img2.acsta.net/medias/nmedia/18/82/10/76/19599753.jpg",
        trailer: "https://youtu.be/MxqsmsA8y5k"
    },
    {
        id: "07",
        name: "Harry Potter y las reliquias de la muerte 2",
        saga: true,
        year: "2011",
        img: "https://es.web.img2.acsta.net/medias/nmedia/18/84/93/87/19765356.jpg",
        trailer: "https://youtu.be/5NYt1qirBWg"
    },
    {
        id: "08",
        name: "Love, Death & Robots",
        saga: false,
        year: "2019",
        img: "https://pics.filmaffinity.com/love_death_robots-192878001-mmed.jpg",
        trailer: ""
    },
    {
        id: "",
        name: "Black Mirror",
        saga: false,
        year: "2014",
        img: "https://media.es.wired.com/photos/6480ef20a566376ee967be75/16:9/w_2992,h_1683,c_limit/black%20mirror%20chatgpt.jpg",
        trailer: ""
    },
    {
        id: "",
        name: "Cyberpunk",
        saga: false,
        year: "2020",
        img: "https://ahscatseye.com/wp-content/uploads/2022/11/Cyberpunk-Edgerunners-Wallpaper-1.webp",
        trailer: ""
    },
    {
        id: "",
        name: "The Avengers",
        saga: true,
        year: "2012",
        img: "https://static.tvtropes.org/pmwiki/pub/images/100420.jpg",
        trailer: ""
    },
    {
        id: "",
        name: "Avengers: Age of Ultron",
        saga: true,
        year: "2015",
        img: "https://static.wikia.nocookie.net/marvel-cinematic-universe/images/7/7f/Avengers_Age_of_Ultron_poster.JPG/revision/latest?cb=20150308230451",
        trailer: ""
    },
    {
        id: "",
        name: "Avengers: Infinity War",
        saga: true,
        year: "2018",
        img: "https://static.wikia.nocookie.net/doblaje/images/0/0b/AvengersIW.jpg/revision/latest?cb=20180811120336&path-prefix=es",
        trailer: ""
    },
    {
        id: "",
        name: "Avengers: Endgame",
        saga: true,
        year: "2019",
        img: "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810",
        trailer: ""
    },
    {
        id: "",
        name: "X-Men",
        saga: true,
        year: "2000",
        img: "https://pics.filmaffinity.com/X_Men-602628413-large.jpg",
        trailer: ""
    },
    {
        id: "",
        name: "X-Men 2",
        saga: true,
        year: "2003",
        img: "https://pics.filmaffinity.com/X_Men_2-867374336-large.jpg",
        trailer: ""
    },
    {
        id: "",
        name: "X-Men 3: The Last Stand",
        saga: true,
        year: "2006",
        img: "https://lumiere-a.akamaihd.net/v1/images/xmen3_584x800_fb5b8bf7.jpeg",
        trailer: ""
    },
    {
        id: "",
        name: "X-Men Origins",
        saga: true,
        year: "2009",
        img: "https://lumiere-a.akamaihd.net/v1/images/xmenow_584x800_db9a721b.jpeg?region=0%2C0%2C584%2C800",
        trailer: ""
    },
    {
        id: "",
        name: "X-Men First Class",
        saga: true,
        year: "2011",
        img: "https://m.media-amazon.com/images/M/MV5BMTg5OTMxNzk4Nl5BMl5BanBnXkFtZTcwOTk1MjAwNQ@@._V1_SL1024_.jpg",
        trailer: ""
    },
    {
        id: "",
        name: "X-Men: The Wolverine",
        saga: true,
        year: "2013",
        img: "https://static.wikia.nocookie.net/marveldatabase/images/7/79/The_Wolverine_%28film%29_poster_003.jpg/revision/latest?cb=20130326173841",
        trailer: ""
    },
    {
        id: "",
        name: "X-Men: Days of Future Past",
        saga: true,
        year: "2014",
        img: "https://static.wikia.nocookie.net/marveldatabase/images/5/5f/X-Men_Days_of_Future_Past_%28film%29_poster_003.jpg/revision/latest?cb=20140324155123",
        trailer: ""
    },
    {
        id: "",
        name: "X-Men: Apocalipsis",
        saga: true,
        year: "2016",
        img: "https://play-lh.googleusercontent.com/a3B3z0-dMFGbdwGa9Lt_2Gtp-XcZez6S1T8o2XUyE-xtVil1K1AQP1ZjwKW89Ick9bQpCA",
        trailer: ""
    },
    {
        id: "",
        name: "X-Men: Logan",
        saga: true,
        year: "2017",
        img: "https://cdn.marvel.com/content/1x/logan_lob_crd_02.jpg",
        trailer: ""
    },
    {
        id: "",
        name: "X-Men: Dark Phoenix",
        saga: true,
        year: "2019",
        img: "https://static.wikia.nocookie.net/xmen9260/images/f/f5/Dark_Phoenix.jpg/revision/latest?cb=20210111165215&path-prefix=es",
        trailer: ""
    },
    {
        id: "",
        name: "Spider-Man: Homecoming",
        saga: true,
        year: "2017",
        img: "https://www.ecartelera.com/carteles/9900/9968/006_m.jpg",
        trailer: ""
    },
    {
        id: "",
        name: "Spider-Man: Far from Home",
        saga: true,
        year: "2019",
        img: "https://static.wikia.nocookie.net/spiderman/images/f/fc/Spider_Man_Far_From_Home_-_P%C3%B3ster_EEUU.png/revision/latest?cb=20190522155952&path-prefix=es",
        trailer: ""
    },
    {
        id: "",
        name: "Spider-Man: No Way Home",
        saga: true,
        year: "2021",
        img: "https://resizing.flixster.com/8PNiwC2bpe9OecfYZSOVkvYC5vk=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2U5NGM0Y2Q1LTAyYTItNGFjNC1hNWZhLWMzYjJjOTdjMTFhOS5qcGc=",
        trailer: ""
    },
    {
        id: "",
        name: "Doctor Strange",
        saga: true,
        year: "2016",
        img: "https://lumiere-a.akamaihd.net/v1/images/p_doctorstrange_19918_516f94d3.jpeg",
        trailer: ""
    },
    {
        id: "",
        name: "Doctor Strange in the Multiverse of Madness",
        saga: true,
        year: "2022",
        img: "https://lumiere-a.akamaihd.net/v1/images/p_drstrangeinthemultiverseofmadness_245_476cabb1.jpeg?region=0%2C0%2C540%2C810",
        trailer: ""
    },
    {
        id: "",
        name: "The Fast and the Furious",
        saga: true,
        year: "2001",
        img: "https://static.wikia.nocookie.net/fastandfurious/images/8/87/Fast_One_Poster.jpg/revision/latest?cb=20200205060103",
        trailer: ""
    },
    {
        id: "",
        name: "2 Fast 2 Furious",
        saga: true,
        year: "2003",
        img: "https://es.web.img2.acsta.net/medias/nmedia/18/68/78/98/20073083.jpg",
        trailer: ""
    },
    {
        id: "",
        name: "The Fast and the Furious: Tokyo Drift",
        saga: true,
        year: "2006",
        img: "https://static.tvtropes.org/pmwiki/pub/images/mpw_19912.jpg",
        trailer: ""
    },
    {
        id: "",
        name: "Fast & Furious",
        saga: true,
        year: "2009",
        img: "https://pics.filmaffinity.com/fast_and_furious_4-818035556-mmed.jpg",
        trailer: ""
    },
    {
        id: "",
        name: "Fast Five",
        saga: true,
        year: "2011",
        img: "https://static.wikia.nocookie.net/fastandfurious/images/e/ed/Fast_Five_Poster.jpg/revision/latest?cb=20200323092932",
        trailer: ""
    },
    {
        id: "",
        name: "Fast & Furious 6",
        saga: true,
        year: "2013",
        img: "https://es.web.img3.acsta.net/pictures/205/399/20539964_2013051016211584.jpg",
        trailer: ""
    },
    {
        id: "",
        name: "Furious 7",
        saga: true,
        year: "2015",
        img: "https://www.ecartelera.com/carteles/2400/2459/002_m.jpg",
        trailer: ""
    },
    {
        id: "",
        name: "The Fate of the Furious",
        saga: true,
        year: "2017",
        img: "https://m.media-amazon.com/images/M/MV5BZmJiYTBkNzUtOGYyMy00YThiLWIxZWYtMDZlNzM5Y2Q5NTg5XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        trailer: ""
    },
    {
        id: "",
        name: "F9",
        saga: true,
        year: "2021",
        img: "https://play-lh.googleusercontent.com/EbE24jpcWH6sV3RmJydtmbj7Qw6Ym6v8_6Sek0CjOHYuLxPoSjShJGuCy_oA75solihiV0aHhU7NdZ3ZV1dy",
        trailer: ""
    },
    {
        id: "",
        name: "Fast X",
        saga: true,
        year: "2023",
        img: "https://static.wikia.nocookie.net/atodogas/images/5/51/Poster_de_Rapidos_y_Furiosos_10.jpg/revision/latest?cb=20230614171609&path-prefix=es",
        trailer: ""
    },
    {
        id: "",
        name: "Rick and Morty",
        saga: false,
        year: "2023",
        img: "https://images.sr.roku.com/idType/roku/context/global/id/2b01e91bcae4585784b1e4f66c62134f/images/gracenote/assets/p10376284_b_v12_aa.jpg/magic/396x0/filters:quality(70)",
        trailer: ""
    },
    {
        id: "",
        name: "Fantastic Beasts and Where to Find Them",
        saga: true,
        year: "2016",
        img: "https://m.media-amazon.com/images/I/51g5D+Qx6+L.jpg",
        trailer: ""
    },
    {
        id: "",
        name: "Fantastic Beasts: The Crimes of Grindelwald",
        saga: true,
        year: "2018",
        img: "https://play-lh.googleusercontent.com/v5L_Bt6Rwh_nmB-roPrutWRTMS1WbSRS2YRUWb9b4qzLkUAbN8mj5gUuCfIn6pjTsgUgg79N5LkOcWRkCg",
        trailer: ""
    },
    {
        id: "",
        name: "Fantastic Beasts: The Secrets of Dumbledore",
        saga: true,
        year: "2022",
        img: "https://play-lh.googleusercontent.com/15hBYbwFcWYNGwx1V1BmTgNjn8DLPckxoUBiFOJ00h4MQmd0BnQYAHnxMcWxb9IgfBUMrcfRUFcy_pwReWg",
        trailer: ""
    }
    /*
    {
        id: "",
        name: "",
        saga: tsrue,
        year: "2023",
        img: "",
        trailer: ""
    }
    {
        id: "",
        name: "",
        saga: true,
        year: "2023",
        img: "",
        trailer: ""
    }
    {
        id: "",
        name: "",
        saga: true,
        year: "2023",
        img: "",
        trailer: ""
    }
    {
        id: "",
        name: "",
        saga: true,
        year: "2023",
        img: "",
        trailer: ""
    }
    {
        id: "",
        name: "",
        saga: true,
        year: "2023",
        img: "",
        trailer: ""
    }
    {
        id: "",
        name: "",
        saga: true,
        year: "2023",
        img: "",
        trailer: ""
    }
    {
        id: "",
        name: "",
        saga: true,
        year: "2023",
        img: "",
        trailer: ""
    }
    {
        id: "",
        name: "",
        saga: true,
        year: "2023",
        img: "",
        trailer: ""
    }
    {
        id: "",
        name: "",
        saga: true,
        year: "2023",
        img: "",
        trailer: ""
    }
    {
        id: "",
        name: "",
        saga: true,
        year: "2023",
        img: "",
        trailer: ""
    }
    {
        id: "",
        name: "",
        saga: true,
        year: "2023",
        img: "",
        trailer: ""
    }
    {
        id: "",
        name: "",
        saga: true,
        year: "2023",
        img: "",
        trailer: ""
    }*/
]