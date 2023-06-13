// server için gerekli olanları burada ayarlayın
const express = require("express");
const server = express();

// posts router'ını buraya require edin ve bağlayın
const postRouter = require("./posts/posts-router");

// server'ın istekleri json formatında desteklemesi için; 
server.use(express.json());

// server'ı dışarı çıkarıyoruz
module.exports = server;