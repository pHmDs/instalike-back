import express from "express";

const posts = [
    { descricao: "Uma foto teste",
         imagem: "https://placecats.com/millie/300/150",
        id: 1 
    },
    { 
        descricao: "Um lindo pôr do sol", 
        imagem: "https://placecats.com/millie/300/150", 
        id: 2
    },
    { descricao: "Um Carro Verde",
        imagem: "https://placecats.com/millie/300/150",
       id: 3 
   },
   { 
       descricao: "Um Receba Manoel", 
       imagem: "https://placecats.com/millie/300/150", 
       id: 4
   },
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

function buscarPosts(id) {
    return posts.findIndex((post) => {
        return post.id == Number(id)
    });
};

app.get("/posts/:id", (req, res) => {
    const index = buscarPosts(req.params.id)
    res.status(200).json(posts[index]);
});
