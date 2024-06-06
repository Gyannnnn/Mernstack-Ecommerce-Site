const app = require('./App');
const dotenv = require('dotenv');

dotenv.config({path:'backend/Config/Config.env'});
app.listen(process.env.PORT,()=>{
    console.log(`server is running at https://loaclhost${process.env.PORT}`);
})