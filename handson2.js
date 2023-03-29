const express =require('express');
const app =express();


app.get('/',function(req,resp){
    resp.send('MAin page! Welcome');
})
app.listen(8090);

app.get('/api/main',function(req,resp){
    resp.send('Express is an efficient,flexible and widely used open-source JS framework that is used for building back-end services.');
    resp.send('Express JS is a JS Framework.');
})

