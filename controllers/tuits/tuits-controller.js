import posts from "./tuits.js";
let tuits = posts;

const createTuit = (req, res) => {
    const tuitBody = req.body;

    const currentUser = {
        "userName": "NASA",
        "handle": "@nasa",
        "image": "nasa.png",
    };

    const templateTuit = {
        ...currentUser,
        "topic": "Space",
        "time": "2h",
        "liked": false,
        "replies": 0,
        "retuits": 0,
        "likes": 0,
        "disliked": false,
        "dislikes": 0,
    }

    const newTuit = {
        ...tuitBody,
        ...templateTuit,
        _id: (new Date()).getTime()
    }

    tuits.splice(0, 0, newTuit);
    res.json(newTuit);
}

const findTuits  = (req, res) => res.json(tuits);

const updateTuit = (req, res) => {
    const tuitdIdToUpdate = parseInt(req.params.tid);
    const updates = req.body;
    const tuitIndex = tuits.findIndex(
        (t) => t._id === tuitdIdToUpdate)
    tuits[tuitIndex] =
        {...tuits[tuitIndex], ...updates};
    res.sendStatus(200);
}

const deleteTuit = (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    tuits = tuits.filter((t) =>
        t._id.toString() !== tuitdIdToDelete);
    res.sendStatus(200);
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}

