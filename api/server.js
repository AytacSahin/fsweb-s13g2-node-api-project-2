// 🟢 server için gerekli olanları burada ayarlayın
const express = require("express");
const server = express();

// 🟢 server'ın istekleri json formatında desteklemesi için; 
server.use(express.json());

// 🟢 posts router'ını buraya require edin ve bağlayın
const postRouter = require("./posts/posts-router");
server.use("/api/posts", postRouter);

// 🟢 server'ı dışarı çıkarıyoruz
module.exports = server;