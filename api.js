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
    }
    /*{
        id: "08",
        name: "Love, Death & Robots",
        saga: false,
        year: "",
        img: "",
        trailer: ""
    }
    {
        id: "",
        name: "Black Mirror",
        saga: false,
        year: "",
        img: "",
        trailer: ""
    }
    {
        id: "",
        name: "Cyberpunk",
        saga: false,
        year: "",
        img: "",
        trailer: ""
    }
    {
        id: "",
        name: "The Avengers",
        saga: true,
        year: "2012",
        img: "",
        trailer: ""
    }
    {
        id: "",
        name: "Avengers: Age of Ultron",
        saga: true,
        year: "2015",
        img: "",
        trailer: ""
    }
    {
        id: "",
        name: "Avengers: Infinity War",
        saga: true,
        year: "2018",
        img: "",
        trailer: ""
    }
    {
        id: "",
        name: "Avengers: Endgame",
        saga: true,
        year: "2019",
        img: "",
        trailer: ""
    }
    {
        id: "",
        name: "X-Men",
        saga: true,
        year: "2000",
        img: "",
        trailer: ""
    }
    {
        id: "",
        name: "X-Men 2",
        saga: true,
        year: "2003",
        img: "",
        trailer: ""
    }
    {
        id: "",
        name: "X-Men 3: The Last Stand",
        saga: true,
        year: "2006",
        img: "",
        trailer: ""
    }
    {
        id: "",
        name: "X-Men Origins",
        saga: true,
        year: "2009",
        img: "",
        trailer: ""
    }
    {
        id: "",
        name: "X-Men First Class",
        saga: true,
        year: "2011",
        img: "",
        trailer: ""
    }
    {
        id: "",
        name: "X-Men: The Wolverine",
        saga: true,
        year: "2013",
        img: "",
        trailer: ""
    }
    {
        id: "",
        name: "X-Men: Days of Future Past",
        saga: true,
        year: "2014",
        img: "",
        trailer: ""
    }
    {
        id: "",
        name: "X-Men: Apocalipsis",
        saga: true,
        year: "2016",
        img: "",
        trailer: ""
    }
    {
        id: "",
        name: "X-Men: Logan",
        saga: true,
        year: "2017",
        img: "",
        trailer: ""
    }
    {
        id: "",
        name: "X-Men: Dark Phoenix",
        saga: true,
        year: "2019",
        img: "",
        trailer: ""
    }
    {
        id: "",
        name: "Spider-Man: Homecoming",
        saga: true,
        year: "2017",
        img: "",
        trailer: ""
    }
    {
        id: "",
        name: "Spider-Man: Far from Home",
        saga: true,
        year: "2019",
        img: "",
        trailer: ""
    }
    {
        id: "",
        name: "Spider-Man: No Way Home",
        saga: true,
        year: "2021",
        img: "",
        trailer: ""
    }
    {
        id: "",
        name: "Doctor Strange",
        saga: true,
        year: "2016",
        img: "",
        trailer: ""
    }
    {
        id: "",
        name: "Doctor Strange in the Multiverse of Madness",
        saga: true,
        year: "2022",
        img: "",
        trailer: ""
    }
    {
        id: "",
        name: "The Fast and the Furious",
        saga: true,
        year: "2001",
        img: "",
        trailer: ""
    }
    {
        id: "",
        name: "2 Fast 2 Furious",
        saga: true,
        year: "2003",
        img: "",
        trailer: ""
    }
    {
        id: "",
        name: "The Fast and the Furious: Tokyo Drift",
        saga: true,
        year: "2006",
        img: "",
        trailer: ""
    }
    {
        id: "",
        name: "Fast & Furious",
        saga: true,
        year: "2009",
        img: "",
        trailer: ""
    }
    {
        id: "",
        name: "Fast Five",
        saga: true,
        year: "2011",
        img: "",
        trailer: ""
    }
    {
        id: "",
        name: "Fast & Furious 6",
        saga: true,
        year: "2013",
        img: "",
        trailer: ""
    }
    {
        id: "",
        name: "Furious 7",
        saga: true,
        year: "2015",
        img: "",
        trailer: ""
    }
    {
        id: "",
        name: "The Fate of the Furious",
        saga: true,
        year: "2017",
        img: "",
        trailer: ""
    }
    {
        id: "",
        name: "F9",
        saga: true,
        year: "2021",
        img: "",
        trailer: ""
    }
    {
        id: "",
        name: "Fast X",
        saga: true,
        year: "2023",
        img: "",
        trailer: ""
    }
    {
        id: "",
        name: "Rick and Morty",
        saga: false,
        year: "2023",
        img: "",
        trailer: ""
    }
    {
        id: "",
        name: "Fantastic Beasts and Where to Find Them",
        saga: true,
        year: "2016",
        img: "",
        trailer: ""
    }
    {
        id: "",
        name: "Fantastic Beasts: The Crimes of Grindelwald",
        saga: true,
        year: "2018",
        img: "",
        trailer: ""
    }
    {
        id: "",
        name: "Fantastic Beasts: The Secrets of Dumbledore",
        saga: true,
        year: "2022",
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