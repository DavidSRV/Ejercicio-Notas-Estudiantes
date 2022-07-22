const studentsControllers = {};
const e = require("express");

studentsControllers.getAll = (req, res) => {

    console.log(res);

}

const notasFinales = [];
const mayorNota = {};
const perdieron = [];
const habilitan = [];
const response = [];
const ganan = {};

studentsControllers.create = (req, res) => {

    let notaMayor = 0;

    const notas = req.body;

    for (let i = 0; i < notas["estudiantes"].length; i++) {
        const defnotas = notas["estudiantes"][i];

        let notaFinal = (defnotas.n1 + defnotas.n2 + defnotas.n3 + defnotas.n4 + defnotas.n5) / 5;

        let obj_estudiante = {}
        obj_estudiante.nombre = defnotas.nombre;
        obj_estudiante.notaFinal = notaFinal

        notasFinales.push(obj_estudiante);
        
        let cganan = 0;

        if(notaFinal > 3.0){
          cganan++
            ganan['Estqueganaron'] = cganan;
        }

        if (notaFinal > notaMayor) {
            notaMayor = notaFinal;
            mayorNota['nombre'] = defnotas.nombre;
            mayorNota['mayorNota'] = notaMayor;
        }

        let obj_estudiante1 = {}

        if (notaFinal <= 2.9) {
            obj_estudiante1.nombre = defnotas.nombre;
            obj_estudiante1.perdieronMateria = notaFinal;
        }
        perdieron.push(obj_estudiante1);

        let obj_estudiante2 = {}

        if (notaFinal <= 2.9 & notaFinal >= 2.0) {
            obj_estudiante2['nombre'] = defnotas['nombre']; obj_estudiante2.Habilitan = notaFinal
        }
        habilitan.push(obj_estudiante2);
    }

    response.push(notasFinales);
    response.push([mayorNota]);
    response.push(perdieron);
    response.push(habilitan);
    response.push([ganan]);

    res.json({response});

};

module.exports = studentsControllers;