// posts için gerekli routerları buraya yazın

const router = require("express").Router()
const postsModel = require("./posts-model");

router.get("/", async (req, res) => {
    try {
        const all = await postsModel.find();
        res.json(all);
    } catch (error) {
        res.status(500).json({ message: "Gönderiler alınamadı" });
    }
});

module.exports = router;