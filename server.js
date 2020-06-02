const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production';

const app = next({dev});

const handle = app.getRequestHandler();

app.prepare()
.then(() => {
    const server = express();

    server.get('/user/:name',(req,res) => {
        app.render(req,res,'/user', {name:req.param.name})
    })
    
    server.get('/github/:user',(req,res) => {
        app.render(req,res,'/github', {user:req.param.user})
    })

    server.get('*',(req,res) => {
        return handle(req,res);
    })

    server.listen(process.env.PORT || 3000, err => {
        if(err) throw err;''

        console.log('Ready on http://localhost:3000');
    })
})

.catch(ex => {
    console.error(ex.stack);

    process.exit(1)
})