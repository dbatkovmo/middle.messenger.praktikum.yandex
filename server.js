const express = require('express');
const app = express();
const PORT = 3000;
const port = process.env.PORT || PORT;
const filesDirectory = `${__dirname}/dist`;
const routes = [
    {
        path: '/',
        file: '/login.html'
    },
    {
        path: '/login',
        file: '/login.html'
    },
    {
        path: '/registration',
        file: '/registration.html'
    },
    {
        path: '/settings-user',
        file: '/settings-user.html'
    },
    {
        path: '/chat',
        file: '/chat.html'
    }
]

app.use(express.static(`${__dirname}/dist`));

routes.forEach(({ path, file }) => {
    app.get(path, function(req, res) {
        res.sendFile(`${filesDirectory}${file}`);
    });
})

app.use('*/*', (req, res) => {
    res.sendFile(`${filesDirectory}/login.html`);
})

app.use(function (req, res, next) {
    res.status(404).sendFile(`${filesDirectory}/404.html`);
});

app.listen(port, () => {
    console.log(`Server http://localhost:3000/`);
});
