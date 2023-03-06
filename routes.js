const express =require('express')
const routes = express.Router()


routes.get('/',(req,res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('select * from puntajes', (err,rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
});

routes.post('/',(req,res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('insert into puntajes set ? ', [req.body], (err,rows)=>{
            if(err) return res.send(err)

            res.send('Registrado')
        })
    })
});


module.exports = routes