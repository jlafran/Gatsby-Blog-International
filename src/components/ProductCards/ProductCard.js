import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './style.css';

function GroupExample() {
  return (
    <div className="container">
      <CardGroup>
        <Card className="cardContent">
          <Card.Img
            variant="top"
            src="https://imagenes.elpais.com/resizer/L3624VeyrnoaafZKt6o8nqpmBJU=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/LMEVAOA7EVFRDOP76Z5526FL5A.jpg"
          />
          <Card.Body>
            <Card.Title>Valores</Card.Title>
            <Card.Text>
              Manejamos la tecnologia como producto y expresion directa de la creatividad humana. Gracias a nuestro
              enfoque flexible y cercania con el cliente, contamos con una raiz hecha de miles de conexiones profundas,
              establecidas a lo largo de muchos años, con las necesidades informáticas/mercantiles del pequeño, mediano,
              y gran empresario. Necesidades que conocemos a fondo.
            </Card.Text>
            <span className="textospan">Learn more about Square Register -{'>'}</span>
          </Card.Body>
        </Card>
        <Card className="cardContent">
          <Card.Img
            variant="top"
            src="https://http2.mlstatic.com/storage/pog-cm-admin/calm-assets/MLA-Smart-OG-Image--291fade0.png"
          />
          <Card.Body>
            <Card.Title>Soluciones</Card.Title>
            <Card.Text>
              Desarrollamos sistemas automatizados de registro y facturación, con un diseño adaptado a las
              características más precisas de su negocio. Las soluciuones tecnológicas que ofrecemos son amables con el
              usuario y abarcan un rango especializado que dominamos con plena firmeza y seguridad hace decadas.{' '}
            </Card.Text>
            <span className="textospan">Learn more about Square Register -{'>'}</span>
          </Card.Body>
        </Card>
        <Card className="cardContent">
          <Card.Img
            variant="top"
            src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_1080,h_675/https://bistrosoft.com/wp-content/uploads/2020/10/MG_2920-2-3-scaled-e1602796445436-1080x675.jpg"
          />
          <Card.Body>
            <Card.Title>Experiencia</Card.Title>
            <Card.Text>
              Desarrollamos sistemas automatizados de registro y facturación, con un diseño adaptado a las
              características más precisas de su negocio. Las soluciuones tecnológicas que ofrecemos son amables con el
              usuario y abarcan un rango especializado que dominamos con plena firmeza y seguridad hace decadas.
            </Card.Text>
            <span className="textospan">Learn more about Square Register -{'>'}</span>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}

export default GroupExample;
