type faqDataType = {
  question: string;
  answer: string;
};

const faqData: faqDataType[] = [
  {
    question: "¿Dónde está ubicado?",
    answer: "Piedecuesta - Santander",
  },
  {
    question: "¿Los productos tienen garantía?",
    answer: `Entendemos la importancia de la garantía en tus compras, sin
    embargo, como se trata de productos de un emprendimiento que decidí
    no continuar, no cuentan con garantía. Pero te aseguramos que son de
    excelente calidad y están en perfecto estado.`,
  },
  {
    question: "¿Los precios son negociables?",
    answer: `Lamentablemente no podemos ofrecer precios diferentes a los
    publicados, ya que están ajustados al costo. Sin embargo, si decides
    comprar todo el lote, podemos hacer una rebaja especial de
    $3.500.000.`,
  },
  {
    question: "¿Puedo agendar una cita para ver los productos?",
    answer: `¡Por supuesto! Nos encantaría mostrarte los productos en persona.
    Escríbenos por Facebook o WhatsApp para coordinar una cita que te
    acomode.`,
  },
  {
    question: "¿Puedo comprar solo algunos productos en específico?",
    answer: `¡Claro que sí! Puedes comprar los productos que necesites, sin
    embargo, el precio de venta será el costo original de cada producto.
    La oferta de $3.500.000 es exclusiva para la compra de todo el lote.`,
  },
  {
    question: "¿En qué estado se encuentran los productos?",
    answer: `Los productos se encuentran en perfectas condiciones, completamente
    nuevos. Hemos cuidado cada detalle para ofrecerte productos de alta
    calidad a precios accesibles.`,
  },
  {
    question: "¿Dónde puedo continuar comprando estos productos?",
    answer:
      "Si estás interesado en seguir comprando estos productos, AliExpress.com es una excelente opción que es donde yo compré todos estos productos. Como una tienda en línea china, ofrece una amplia variedad de productos. Aunque el envío puede tardar entre uno y dos meses, normalmente llega en buen estado. Además, en caso de que un pedido no llegue a su destino, la plataforma cuenta con políticas de garantía que protegen al comprador, asegurando que se le devolverá su dinero. \n\n Ten en cuenta que algunos productos pueden ser muy baratos, pero el costo de envío puede ser elevado. Por lo tanto, es recomendable buscar productos con envío económico o incluso gratis, para que te quede más económico.",
  },
];

export default function Faq() {
  return (
    <div className="accordion mt-5" id="accordionExample">
      {faqData.map((data, index) => (
        <div key={index} className="accordion-item">
          <h2 className="accordion-header" id={`heading-${index}`}>
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse-${index}`}
              aria-expanded="false"
              aria-controls={`collapse-${index}`}
            >
              {data.question}
            </button>
          </h2>
          <div
            id={`collapse-${index}`}
            className={`accordion-collapse collapse ${index === 0 && "show"}`}
            aria-labelledby={`heading-${index}`}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">{data.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
