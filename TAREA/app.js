const app = express();
const port = 5005;

app.use(express.static('public'));
app.use('/',pageRoutes);
app.get('/',(req,res)=>{
    
    res.redirect('/index');
});
app.listen(port,()=>{
    console.log(`Servidor en escucha desde http://localhost:${port}`)
})