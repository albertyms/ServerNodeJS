import { Router, Response } from "express";
import { verificarToken } from "../middelwares/autentificacion";
import { Tecnologias } from "../models/tecnologias";


const tecnologiasRutas = Router();


//Crear tecnologias
tecnologiasRutas.post('/', verificarToken, (req: any, res: Response) => {
    const body = req.body;
    
    Tecnologias.create(body).then(tecnologiaDB => {
        res.json({
            ok: true,
            sobreMi: tecnologiaDB
        });
    }).catch(err => {
        res.json(err)
    });
});

// Obtener tecnologias
tecnologiasRutas.get('/', async (req: any, res: Response) => {

    const tecnologias = await Tecnologias.find()
        .sort({ _id: -1 })
        .exec();

    res.json({
        ok: true,
        tecnologias
    });
});

//actualizae tecnologia
tecnologiasRutas.post('/update/:id', verificarToken, (req: any, res: Response) => {

    const id = req.params.id;

    const tecnologia = {
        icono: req.body.icono,
        tecnologia: req.body.tecnologia,
        experiencia: req.body.experiencia,
    }

    Tecnologias.findByIdAndUpdate(id, tecnologia, { new: true }, (err, tecnologiaDB) => {
        if (err) throw err;
        if (!tecnologiaDB) {
            return res.json({
                ok: false,
                mensaje: 'Invalid Data'
            })
        }
        res.json({
            ok: true,
            tecnologia
        });
    })
});

export default tecnologiasRutas;
