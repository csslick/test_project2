// express 모듈 추가
const express = require("express");
const app = express();

// 포케몬 데이터: 이름, 이미지
const pokemons = [
  {
    name: "이상해씨",
    imgUrl: "https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/000101.png",
  },
  {
    name: "이상해풀",
    imgUrl: "https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/000101.png",
  },
  {
    name: "이상해꽃",
    imgUrl: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/000302.png",
  },
];

// pokemon 요청   접속 url : localhost3000:0 , 1, 2
app.get("/pokemon/:id", (req, res) => {
  // req.params 클라이언트 요청 변수값
  console.log(req.params);
  res.send(`<img src='${pokemons[req.params.id]}' alt='${req.params.id}' />`);
});

// get 요청
// app.get("/", (요청, 응답) => {
//   응답.send("home으로 접속");
// });
app.get("/", (요청, 응답) => {
  응답.sendFile(__dirname + "/pages/index.html");
});

// about으로 접속하면 about.html 보여주기
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/pages/about.html");
});

// 라우팅 추가로 더 만들기
app.get("/tea", (req, res) => {
  res.sendFile(__dirname + "/pages/tea.html");
});
app.get("/coffee", (req, res) => {
  res.sendFile(__dirname + "/pages/coffee.html");
});

// 404, *표시는 모든 것을 의미하므로 위의 라우터가 아닌 모든 url 은 404로 오게 되어 있다.
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/pages/404.html");
});

// 서버 오픈
app.listen(3000, function () {
  console.log("서버가 열림");
});
