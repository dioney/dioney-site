import React from "react"

import UxDesign from "../images/ux-designer.svg"
import MobileDesign from "../images/mobile-design.svg"
import DesignSystem from "../images/design-system.svg"

const Services = () => (
  <section className="services">
    <div className="services__item">
      <UxDesign />
      <h3 className="heading2">Consultoria em UX</h3>
      <p>
        Soluções complexas necessitam de uma experiência bem eficiente para
        garantir o sucesso do seu projeto.
      </p>
    </div>
    <div className="services__item">
      <MobileDesign />
      <h3 className="heading2">Design de Aplicativos</h3>
      <p>
        Um projeto para ter uma boa experiência precisa também de uma interface
        memorável.
      </p>
    </div>
    <div className="services__item">
      <DesignSystem />
      <h3 className="heading2">Design Escalável</h3>
      <p>
        Para que seu projeto possa crescer junto com o sucesso do produto, é
        necessário uma operação de design.
      </p>
    </div>
  </section>
)

export default Services
