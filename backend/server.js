const express = require('express');
const cors = require('cors');
const { google } = require('googleapis');

const app = express();
app.use(cors()); 
app.use(express.json()); 

// Autenticación con tu archivo credentials.json
const auth = new google.auth.GoogleAuth({
    keyFile: 'credentials.json', 
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
});

app.post('/api/postulantes', async (req, res) => {
    try {
        const { nombre, dni, celular, correo, carrera, colegio, canal, estado, distrito, genero } = req.body;
        const client = await auth.getClient();
        const sheets = google.sheets({ version: 'v4', auth: client });

        // 👇 REEMPLAZA ESTO POR EL ID DE TU HOJA DE GOOGLE SHEETS
        const spreadsheetId = '1KT_xZkYKVojcguzQDl6cdgjSCEJAlwd8pUBa1tJm08M'; 

        await sheets.spreadsheets.values.append({
            spreadsheetId,
            range: 'Hoja 1!A:J', // Cambia "Hoja 1" si tu pestaña se llama diferente
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [[
                    nombre, dni, celular, correo, carrera, colegio, canal, estado, distrito, genero, new Date().toISOString().split('T')[0]
                ]]
            }
        });

        res.status(200).json({ success: true, message: 'Guardado en Google Sheets' });
    } catch (error) {
        console.error('Error al guardar:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`));