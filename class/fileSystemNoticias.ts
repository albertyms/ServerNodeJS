import path from 'path';
import fs from 'fs';

export default class FileSystemNoticias {
    constructor() { }

    guardarImg(file: any) {
        return new Promise((resolve, reject) => {
            //crear carpeta para guardar las imagenes
            const path = this.crearCarpetaImagenNoticia();
            //nombre del archivo
            const nombreArchivo = file.name;
            //mover el archivo
            file.mv(`${path}/${nombreArchivo}`, (err: any) => {
                if(err) {
                    reject();
                } else {
                    resolve();
                }
            });
        });
    }

    private crearCarpetaImagenNoticia() {
        const pathImagenNoticia = path.resolve(__dirname, '../upload/imgNoticias');
        const existe = fs.existsSync(pathImagenNoticia);
        if (!existe) {
            fs.mkdirSync(pathImagenNoticia);
        }
        return pathImagenNoticia;
    }

    getImgUrlNoticia(img: string) {
        const pathImgNoticia = path.resolve(__dirname, '../upload', 'imgNoticias', img);
        return pathImgNoticia;
    }


    guardarImgYo(file: any) {
        return new Promise((resolve, reject) => {
            //crear carpeta para guardar las imagenes
            const path = this.crearCarpetaImagenYo();
            //nombre del archivo
            const nombreArchivo = file.name;
            //mover el archivo
            file.mv(`${path}/${nombreArchivo}`, (err: any) => {
                if(err) {
                    reject();
                } else {
                    resolve();
                }
            });
        });
    }

    private crearCarpetaImagenYo() {
        const pathImagenYo = path.resolve(__dirname, '../upload/imgYo');
        const existe = fs.existsSync(pathImagenYo);
        if (!existe) {
            fs.mkdirSync(pathImagenYo);
        }
        return pathImagenYo;
    }

    getImgUrlYo(img: string) {
        const pathImagenYo = path.resolve(__dirname, '../upload', 'imgYo', img);
        return pathImagenYo;
    }
}