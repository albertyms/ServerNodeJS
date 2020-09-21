"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
class FileSystemNoticias {
    constructor() { }
    guardarImg(file) {
        return new Promise((resolve, reject) => {
            //crear carpeta para guardar las imagenes
            const path = this.crearCarpetaImagenNoticia();
            //nombre del archivo
            const nombreArchivo = file.name;
            //mover el archivo
            file.mv(`${path}/${nombreArchivo}`, (err) => {
                if (err) {
                    reject();
                }
                else {
                    resolve();
                }
            });
        });
    }
    crearCarpetaImagenNoticia() {
        const pathImagenNoticia = path_1.default.resolve(__dirname, '../upload/imgNoticias');
        const existe = fs_1.default.existsSync(pathImagenNoticia);
        if (!existe) {
            fs_1.default.mkdirSync(pathImagenNoticia);
        }
        return pathImagenNoticia;
    }
    getImgUrlNoticia(img) {
        const pathImgNoticia = path_1.default.resolve(__dirname, '../upload', 'imgNoticias', img);
        return pathImgNoticia;
    }
    guardarImgYo(file) {
        return new Promise((resolve, reject) => {
            //crear carpeta para guardar las imagenes
            const path = this.crearCarpetaImagenYo();
            //nombre del archivo
            const nombreArchivo = file.name;
            //mover el archivo
            file.mv(`${path}/${nombreArchivo}`, (err) => {
                if (err) {
                    reject();
                }
                else {
                    resolve();
                }
            });
        });
    }
    crearCarpetaImagenYo() {
        const pathImagenYo = path_1.default.resolve(__dirname, '../upload/imgYo');
        const existe = fs_1.default.existsSync(pathImagenYo);
        if (!existe) {
            fs_1.default.mkdirSync(pathImagenYo);
        }
        return pathImagenYo;
    }
    getImgUrlYo(img) {
        const pathImagenYo = path_1.default.resolve(__dirname, '../upload', 'imgYo', img);
        return pathImagenYo;
    }
}
exports.default = FileSystemNoticias;
