export default function Faq() {
  return (
    <div className="accordion mt-5" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            ¿Dónde está ubicado?
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">Piedecuesta - Santander</div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            ¿Los productos tienen garantía?
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            Entendemos la importancia de la garantía en tus compras, sin
            embargo, como se trata de productos de un emprendimiento que decidí
            no continuar, no cuentan con garantía. Pero te aseguramos que son de
            excelente calidad y están en perfecto estado.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            ¿Los precios son negociables?
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            Lamentablemente no podemos ofrecer precios diferentes a los
            publicados, ya que están ajustados al costo. Sin embargo, si decides
            comprar todo el lote, podemos hacer una rebaja especial de
            $3.500.000.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingFour">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFour"
            aria-expanded="false"
            aria-controls="collapseFour"
          >
            ¿Puedo agendar una cita para ver los productos?
          </button>
        </h2>
        <div
          id="collapseFour"
          className="accordion-collapse collapse"
          aria-labelledby="headingFour"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            ¡Por supuesto! Nos encantaría mostrarte los productos en persona.
            Escríbenos por Facebook o WhatsApp para coordinar una cita que te
            acomode.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingFive">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFive"
            aria-expanded="false"
            aria-controls="collapseFive"
          >
            ¿Puedo comprar solo algunos productos en específico?
          </button>
        </h2>
        <div
          id="collapseFive"
          className="accordion-collapse collapse"
          aria-labelledby="headingFive"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            ¡Claro que sí! Puedes comprar los productos que necesites, sin
            embargo, el precio de venta será el costo original de cada producto.
            La oferta de $3.500.000 es exclusiva para la compra de todo el lote.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingSix">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSix"
            aria-expanded="false"
            aria-controls="collapseSix"
          >
            ¿En qué estado se encuentran los productos?
          </button>
        </h2>
        <div
          id="collapseSix"
          className="accordion-collapse collapse"
          aria-labelledby="headingSix"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            Los productos se encuentran en perfectas condiciones, completamente
            nuevos. Hemos cuidado cada detalle para ofrecerte productos de alta
            calidad a precios accesibles.
          </div>
        </div>
      </div>
    </div>
  );
}
