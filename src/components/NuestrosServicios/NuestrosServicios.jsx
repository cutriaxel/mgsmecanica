import React from "react";
import "./NuestrosServicios.scss";
import { Card, CardContent, CardMedia, Typography, List, ListItem, ListItemText } from '@mui/material';
import { ArrowForward } from "@mui/icons-material";

const NuestrosServicios = () => {
  return (
    <>
     <div className="titulo-services">
  <h3>Mecánica integral del automóvil</h3>
</div>

<div className="services">
  <div className="container">
    <div className="row" >
      <div className="col-md-6" >
        <Card style={{display: 'flex', marginBottom: '20px', borderRadius: '15px' }}>
          <CardMedia
           style={{width: '230px'}}
            component="img"
            src="https://www.talleresautomotrices.com/wp-content/uploads/2020/03/escaneo-vehicular.jpg"
            alt="Taller mecánico de autos diagnóstico computarizado"
          />
          <CardContent  style={{backgroundColor: '#00686C'}}>
            <Typography variant="h5">Diagnóstico computarizado</Typography>
            <Typography>
              Es recomendable realizar un <strong>diagnóstico computarizado</strong> por lo menos
              una vez al año. Nuestro <strong>taller mecánico</strong> cuenta con los mejores equipos de diagnóstico del país.
            </Typography>
          </CardContent >
        </Card>
        <Card style={{display: 'flex'}}>
          <CardMedia
          style={{width: '230px'}}
            component="img"
            src="https://adminclasificados.rionegro.com.ar/files/imagecache/landscape_1020_560_sc/notas/control-mecanico-37.jpg"
            alt="Taller mecánico de autos diagnóstico computarizado"
          />
          <CardContent style={{backgroundColor: '#00686C', borderRadius: '15px' }}>
            <Typography variant="h5">Mantenimiento</Typography>
            <Typography>
              El mantenimiento del automóvil se realiza cada 6 meses o acorde a las especificaciones del fabricante. Realizamos cambio de aceite, cambio de filtro de: Aceite, nafta, filtro de aire, control de líquido de freno.
            </Typography>
          </CardContent >
        </Card>
      </div>
      <div className="col-md-6">
        <Card style={{display: 'flex'}}>
        <CardMedia
        style={{width: '230px'}}
            component="img"
            src="https://bgprodservicios.es/wp-content/uploads/2022/06/revisiones-de-los-frenos-en-el-taller.jpg"
            alt="Taller mecánico de autos diagnóstico computarizado"
          />
          <CardContent style={{backgroundColor: '#00686C', borderRadius: '15px' }}>
            <Typography variant="h5">Frenos</Typography>
            <Typography>
              Pastillas de Freno. Discos de Freno. Bomba de Freno. Servofreno. Flexibles. Líquido de Freno. Es muy importante realizar un <strong>control del sistema de frenos</strong> cada 6 o 7 meses.
            </Typography>
          </CardContent>
        </Card>

        <Card style={{display: 'flex', marginTop: '20px'}}>
        <CardMedia
        style={{width: '230px'}}
            component="img"
            src="https://www.ciutatdelmotor.com/wp-content/uploads/Co%CC%81mo-saber-si-mi-coche-lleva-correa-de-distribucio%CC%81n-1.jpg"
            alt="Taller mecánico de autos diagnóstico computarizado"
          />
          <CardContent style={{backgroundColor: '#00686C', borderRadius: '15px' }}>
            <Typography variant="h5">Distribución</Typography>
            <Typography>
              El sistema de distribución sincroniza el movimiento del <strong>cigüeñal</strong> y sus <strong>pistones</strong>. Se debe controlar el <strong>kit de distribución</strong> cada 50.000KM o cada 3 años para prevenir la rotura de la tapa de cilindros o de los pistones.
            </Typography>
          </CardContent>
        </Card>
        
        
      </div>
    </div>

    <div className="row">
      <div className="col-md-6 se-lt">
      <Card>
          <CardContent style={{ backgroundColor: '#00686C', borderRadius: '15px'  }}>
            <Typography variant="h5" style={{ color: 'white' }}>Refrigeración del motor</Typography>
            <Typography style={{ color: 'white' }}>
              Es recomendable controlar el <strong>sistema de refrigeración</strong> al menos una vez por año para prevenir el recalentamiento del motor y futuros problemas con la <strong>tapa de cilíndros</strong> y el resto del motor.
            </Typography>
            <List className="arrow-list">
              <ListItem>
                <ArrowForward style={{ color: 'white' }} />
                <ListItemText primary="Radiador de Agua" />
              </ListItem>
              <ListItem>
                <ArrowForward style={{ color: 'white' }} />
                <ListItemText primary="Depósito de Agua" />
              </ListItem>
              <ListItem>
                <ArrowForward style={{ color: 'white' }} />
                <ListItemText primary="Mangueras" />
              </ListItem>
              <ListItem>
                <ArrowForward style={{ color: 'white' }} />
                <ListItemText primary="Termostato" />
              </ListItem>
              <ListItem>
                <ArrowForward style={{ color: 'white' }} />
                <ListItemText primary="Electroventilador" />
              </ListItem>
              <ListItem>
                <ArrowForward style={{ color: 'white' }} />
                <ListItemText primary="Bomba de Agua" />
              </ListItem>
              <ListItem>
                <ArrowForward style={{ color: 'white' }} />
                <ListItemText primary="Líquido Refrigerante" />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </div>

      <div className="col-md-6 se-lt">
        <Card>
          <CardContent style={{ backgroundColor: '#00686C', borderRadius: '15px' }}>
            <Typography variant="h5" style={{ color: 'white' }}>Tren delantero</Typography>
            <Typography style={{ color: 'white' }}>
              Se debe realizar un control del <strong>tren delantero</strong> cada 6 o 7 meses para prevenir múltiples problemas en las diferentes partes que lo componen. El <strong>tren delantero</strong> es fundamental ya que es parte de la seguridad.
            </Typography>
            <List className="arrow-list">
              <ListItem>
                <ArrowForward style={{ color: 'white' }} />
                <ListItemText primary="Caja de Dirección" />
              </ListItem>
              <ListItem>
                <ArrowForward style={{ color: 'white' }} />
                <ListItemText primary="Cremallera de Dirección" />
              </ListItem>
              <ListItem>
                <ArrowForward style={{ color: 'white' }} />
                <ListItemText primary="Amortiguadores" />
              </ListItem>
              <ListItem>
                <ArrowForward style={{ color: 'white' }} />
                <ListItemText primary="Espirales" />
              </ListItem>
              <ListItem>
                <ArrowForward style={{ color: 'white' }} />
                <ListItemText primary="Barra Estabilizadora" />
              </ListItem>
              <ListItem>
                <ArrowForward style={{ color: 'white' }} />
                <ListItemText primary="Parrilla de Suspención" />
              </ListItem>
              <ListItem>
                <ArrowForward style={{ color: 'white' }} />
                <ListItemText primary="Bujes, Extremos y Rótulas" />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default NuestrosServicios;

