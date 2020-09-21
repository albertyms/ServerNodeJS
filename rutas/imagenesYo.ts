import { Router, Response } from "express";
import FileSystemYo from "../class/fileSystemYo";
import { verificarToken } from "../middelwares/autentificacion";
import { ImagenesYo } from "../models/imagenesYo";
import fs from 'fs';
import path from 'path';

const yoRutas = Router();
const fileSystemYo = new FileSystemYo();

//subir imagenes
yoRutas.post('/', verificarToken, (req: any, res: Response) => {
    const body = req.body;
    const file = req.files.img;
    body.img = file.name;
    console.log(file);

    ImagenesYo.create(body).then(imgYoDB => {
        res.json({
            ok: true,
            imgYoDB
        });

        fileSystemYo.guardarImagenYo(file, req.usuario.nombre);

    }).catch(err => {
        res.json(err)
    });
});

//mostrar imagen por URL
yoRutas.get('/Algo123/:img', (req: any, res: Response) => {
    const img = req.params.img;
    const pathImagen = fileSystemYo.getImgUrl(img);
    res.sendFile(pathImagen);
});

yoRutas.post('/update', verificarToken, (req: any, res: Response) => {
    const file = req.files.img;
    fileSystemYo.guardarImagenYo(file, req.usuario.nombre);
    res.json({
        ok: true,
        mensaje: 'Imagen actualizada.'
    });
});

yoRutas.delete('/:id/:name', verificarToken, (req: any, res: Response) => {
    const id = req.params.id;
    const name = req.params.name;

    ImagenesYo.findByIdAndRemove(id, (err, imgBorrar) => {
        if (err) throw err;

        res.json({
            ok: true,
            mensaje: 'Imagen borrada.',
            imgBorrar
        })
        fs.unlinkSync(path.resolve(__dirname, '../upload', 'Algo123', name));
    })

})

export default yoRutas;