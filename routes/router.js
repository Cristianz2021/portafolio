const express = require('express');
const router = express.Router();
/*Nodemailer*/
const nodemailer = require('nodemailer');

//The-Post-Form
router.post('/send-email', async(req, res) =>{
    const {email, name, message} = req.body;
    innerHtml = `
         <h1>Informacion del contacto usuario</h1> 
        <ul>
        <li>Username: ${name}</li>
        <li>Email: ${email}</li>
        </ul>
        <p>
        <h4><b>Descripcion</b></h4>
        ${message}
        </p>
    `;

    const Email = process.env.PORTFOLIO_EMAIL;
    const Password = process.env.PORTFOLIO_PASSWORD;
    const Host = process.env.PORTFOLIO_HOST;
    const Port = process.env.PORTFOLIO_PORT;

    let transportador = nodemailer.createTransport({
        host: Host,
        port: Port,
        secure: false,
        auth: {
            user: Email,
            pass: Password
	    },
        tls: {
          rejectUnauthorized: false
         }
    });

    var mailOptions = await transportador.sendMail({
     from: `"CristianZamora" <${Email}>`,
     to:  'cristian.zamora2400@gmail.com',
     subject: 'Portfolio web contact',
     html: innerHtml
    }); 


     res.redirect('/sucess');
});

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/project', (req, res) =>{
	res.render('project');
});

router.get('/sucess', (req, res) =>{
	res.render('sucess');
});
module.exports = router;