// import cors from 'cors';
// import express from 'express';
// import { productRouter } from './routes/product-router';
// import { categoryRouter } from './routes/category-router';

// const app = express();
// app.use(cors());

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// app.use("/product", productRouter);
// app.use("/category", categoryRouter);

// app.use(errorHandler);

// app.listen(PORT, () => {
//   console.log("정상적으로 서버를 시작하였습니다");
// });

// exports.app = app;

// --------------------------------

// app.js

/*
express 설정, middleware 적용, 라우팅 설정, 서버 실행
*/

const express = require("express");
const cors = require("cors");

// 라우터 연결
const usersRouter = require("./routes/user-router"); // user(사용자) router 연결
const productRouter = require("./routes/product-router");
const categoryRouter = require("./routes/category-router");

const app = express();

// 미들웨어 적용
app.use(cors()); // cors 에러 방지. 다른 도메인의 요청 허용
app.use(express.json()); // content-type: application/json 형태. post 요청에서 body 추출
app.use(express.urlencoded({ extended: ture })); // url-encoded body parser

// api 라우터
app.use("/user", usersRouter);
app.use("/user/myroom/order-list", router); // order-list 연결
app.use("/product", productRouter);
app.use("/category", categoryRouter);

// 에러 처리
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({ message: `server error occured` });
});

module.exports = app;
