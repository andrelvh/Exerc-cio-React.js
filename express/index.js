const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const cds = [
    {
      id: 1,
      name: "Made In The A.M",
      image: "https://images-na.ssl-images-amazon.com/images/I/71w6zMTrt6L._AC_SX450_.jpg",
      description: "Um CD de pop internacional, protagonizado pela melhor banda que já existiu, One Direction.",
      price: 36.19
    },
    {
      id: 2,
      name: "Mamma Mia: Here We Go Again",
      image: "https://images-na.ssl-images-amazon.com/images/I/81P96-YSIOL._AC_SX679_.jpg",
      description: "Trilha sonora do filme Mamma Mia, recheado de músicas do ABBA.",
      price: 57.00
    },
    {
      id: 3,
      name: "Sweetener",
      image: "https://images-na.ssl-images-amazon.com/images/I/61Ydxi702wL._AC_SX569_.jpg",
      description: "CD de pop internacional de uma das artistas mais populares atualmente, Ariana Grande.",
      price: 79.00
    },
    {
      id: 4,
      name: "Dangerous Woman",
      image: "https://images-na.ssl-images-amazon.com/images/I/81FYPpvG1aL._AC_SX679_.jpg",
      description: "CD do terceiro álbum de estúdio da cantora norte-americana Ariana Grande.",
      price: 40.90
    },
    {
      id: 5,
      name: "21",
      image: "https://images-na.ssl-images-amazon.com/images/I/71ipksWZcjL._AC_SX450_.jpg",
      description: "Segundo álbum de estúdio da cantora britânica Adele.",
      price: 34.50
    },
    {
      id: 6,
      name: "Harry Styles",
      image: "https://images-na.ssl-images-amazon.com/images/I/71KkhyFgrwL._AC_SX569_.jpg",
      description: "Álbum solo homônimo do cantor e compositor inglês Harry Styles, antigo integrante da One Direction.",
      price: 118.70
    },
    {
      id: 7,
      name: "Fine Line",
      image: "https://images-na.ssl-images-amazon.com/images/I/61uo57hXGxL._AC_SX679_.jpg",
      description: "Segundo álbum de estúdio do cantor inglês Harry Styles, lançado em 13 de dezembro de 2019 pela Columbia e Erskine Records.",
      price: 129.90
    },
    {
      id: 8,
      name: "Future Nostalgia",
      image: "https://images-na.ssl-images-amazon.com/images/I/51IPQ8DJ-sL._AC_SY450_.jpg",
      description: "Segundo álbum de estúdio da cantora inglesa Dua Lipa.",
      price: 39.47
    },
    {
      id: 9,
      name: "Chromatica",
      image: "https://images-na.ssl-images-amazon.com/images/I/81Le2R1yAgL._AC_SX679_.jpg",
      description: "Lady Gaga apresenta seu sexto álbum solo de estúdio, que promete ser um retorno ao pop e às pistas de dança.",
      price: 39.90
    },
    {
      id: 10,
      name: "Four (Deluxe)",
      image: "https://images-na.ssl-images-amazon.com/images/I/81AsgARNqqL._AC_SX569_.jpg",
      description: "Quarto álbum de estúdio da boy band britânica-irlandesa One Direction.",
      price: 32.50
    }
];

app.get("/", (req, res) => {
    res.status(200).send(cds);
});

app.listen(3333);