import { Schema, model, Document } from 'mongoose';

const tecnologiasSchema = new Schema({
    icono: {
        type: String,
        required: [true, 'El icono es obligatorio']
    },
    tecnologia: {
        type: String,
        required: [true, 'La tenologia es obligatorio']
    },
    experiencia: {
        type: String,
        required: [true, 'La experiencia es obligatorio']
    }
});

interface ITecnologias extends Document {
    icono: string;
    tecnologia: string;
    experiencia: string;
}

export const Tecnologias = model<ITecnologias>('Tecnologias', tecnologiasSchema);