var mercadopago = require('mercadopago');

const mp = async(req, res) => {

    mercadopago.configure({
        access_token: 'TEST-1502925796113432-050619-a0f473760c0e7f71f94a36f082dea042-256849858'
    });

    const itemsMercadoPago=req.body.carrito 

    var preference = {
    items: itemsMercadoPago.map(item=>({ 
        title: item.nombre, // nombre del producto
        unit_price: parseInt(item.precio_venta),
        quantity: parseInt(item.cantidad), //esto hay q crearlo
        currency_id: 'ARS'
        })),
    payer: {
        name: req.body.inputs.nombre,
        surname: req.body.inputs.apellido,
        email: req.body.inputs.email,
        phone:{
            area_code: req.body.inputs.codigo,
            number: parseInt(req.body.inputs.telefono)
        },
        address: {
            zip_code: req.body.inputs.codigoPostal,
            street_name: req.body.inputs.calle,
            street_number: parseInt(req.body.inputs.numero)
        },
        // identification: {
        //     number: req.body.inputs.codigo,
        //     type: req.body.inputs.telefono
        // }
    },
    back_urls: {
        success: process.env.SUCCESS_MP ||"http://localhost:3000/pagoexitoso",
        failure:  process.env.FAILURE_MP || "http://localhost:3000/pagofallido",
        pending:  process.env.PENDING_MP || "http://localhost:3000/pagopendiente",
    },};
    
    mercadopago.preferences.create(preference)
    .then((r)=>{
        return res.json(r.body.init_point)
    })
    .catch((err)=>{
        console.log(req.body)
        res.status(404).json({error: err})
    })
}

module.exports = mp;