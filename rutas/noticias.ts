import { Router, Response } from "express";
import FileSystemNoticias from "../class/fileSystemNoticias";
import { Noticias } from "../models/noticias";
import { verificarToken } from "../middelwares/autentificacion";


const noticiasRutas = Router();
const fileSystemNoticias = new FileSystemNoticias();

//subir imagenes
noticiasRutas.post('/:img/:imgYo', verificarToken, (req: any, res: Response) => {
    const body = req.body;
    const img = req.params.img;
    const imgYo = req.params.imgYo;

    body.img = img;
    body.imgYo = imgYo;

    Noticias.create(body).then(noticiasDB => {
        res.json({
            ok: true,
            noticia: noticiasDB
        });

    }).catch(err => {
        res.json(err)
    });
});

//obtener noticias paginadas
noticiasRutas.get('/', async (req: any, res: Response) => {

    let pagina = Number(req.query.pagina) || 1;
    let saltar = pagina -1 ;
    saltar = saltar * 8;

    const noticias = await Noticias.find()
        .sort({ _id: -1 })
        .skip(saltar)
        .limit(8)
        .exec();

    res.json({
        ok: true,
        pagina,
        noticias
    });
});

//Subir imagenesYO 
noticiasRutas.post('/upload1', verificarToken, async (req: any, res: Response) => {
    const file1 = req.files.imgYo;
    await fileSystemNoticias.guardarImgYo(file1);
    res.json({
        ok: true,
        file1: file1.name
    });
});


//Subir imagenes noticias
noticiasRutas.post('/upload2', verificarToken, async (req: any, res: Response) => {
    const file2 = req.files.img;
    await fileSystemNoticias.guardarImg(file2);
    res.json({
        ok: true,
        file1: file2.name
    });
});

//mostrar imagen por URL
noticiasRutas.get('/imgNoticias/:img', (req: any, res: Response) => {
    const img = req.params.img;
    const pathImagen = fileSystemNoticias.getImgUrlNoticia(img);
    res.sendFile(pathImagen);
});

//mostrar imagen por URL
noticiasRutas.get('/imgYo/:img', (req: any, res: Response) => {
    const img = req.params.img;
    const pathImagen = fileSystemNoticias.getImgUrlYo(img);
    res.sendFile(pathImagen);
});

export default noticiasRutas;