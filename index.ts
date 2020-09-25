import Server from "./class/server";
import usuarioRutas from "./rutas/usuario";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import contactoRutas from "./rutas/contacto";
import yoRutas from "./rutas/imagenesYo";
import sobreMiRutas from "./rutas/sobreMi";
import tecnologiasRutas from "./rutas/tecnologias";
import noticiasRutas from "./rutas/noticias";
import fileUpload from 'express-fileupload';
import cors from 'cors';
import express from 'express';
import path from 'path';

const server = new Server();

//BodyParser 
server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());

//CORS 
server.app.use(cors({origin: true, credentials: true}));

server.app.use(express.static(path.join((__dirname + '/public'))));

//File Upload
server.app.use(fileUpload()); 
//Rutas de la aplicacion
server.app.use('/usuario', usuarioRutas);
//crear mensaje
server.app.use('/contacto', contactoRutas);
//subir imagen
server.app.use('/uploadYo', yoRutas);
//crear sobre mi
server.app.use('/sobreMi', sobreMiRutas);
//crear tecnologia
server.app.use('/tecnologia', tecnologiasRutas);
//crear noticias
server.app.use('/noticias', noticiasRutas);



//conexion a base de datos

let mongoDB: string;

if(process.env.NODE_ENV === 'production') {
    mongoDB = 'mongodb+srv://test:**123456789@cluster0.ew7h0.mongodb.net/testAngMon';
} else {
    mongoDB = 'mongodb://localhost:27017/testAngMon';
}
mongoose.connect(
    mongoDB,
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false },
    (err) => {
        if (err) {
            throw err;
        }
        console.log('DB online');
    }
)

server.start(() => {
    console.log(`Server online port: ${server.port}`)
})