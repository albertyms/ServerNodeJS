"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./class/server"));
const usuario_1 = __importDefault(require("./rutas/usuario"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const contacto_1 = __importDefault(require("./rutas/contacto"));
const imagenesYo_1 = __importDefault(require("./rutas/imagenesYo"));
const sobreMi_1 = __importDefault(require("./rutas/sobreMi"));
const tecnologias_1 = __importDefault(require("./rutas/tecnologias"));
const noticias_1 = __importDefault(require("./rutas/noticias"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const cors_1 = __importDefault(require("cors"));
const server = new server_1.default();
//BodyParser 
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
//CORS 
server.app.use(cors_1.default({ origin: true, credentials: true }));
//File Upload
server.app.use(express_fileupload_1.default());
//Rutas de la aplicacion
server.app.use('/usuario', usuario_1.default);
//crear mensaje
server.app.use('/contacto', contacto_1.default);
//subir imagen
server.app.use('/uploadYo', imagenesYo_1.default);
//crear sobre mi
server.app.use('/sobreMi', sobreMi_1.default);
//crear tecnologia
server.app.use('/tecnologia', tecnologias_1.default);
//crear noticias
server.app.use('/noticias', noticias_1.default);
//conexion a base de datos
let mongoDB;
if (process.env.NODE_ENV === 'production') {
    mongoDB = 'mongodb+srv://test:**123456789@cluster0.ew7h0.mongodb.net/testAngMon';
}
else {
    mongoDB = 'mongodb://localhost:27017/testAngMon';
}
mongoose_1.default.connect(mongoDB, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false }, (err) => {
    if (err) {
        throw err;
    }
    console.log('DB online');
});
server.start(() => {
    console.log(`Server online port: ${server.port}`);
});
