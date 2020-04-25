import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import UxDesign from "../images/ux-designer.svg"
import MobileDesign from "../images/mobile-design.svg"
import DesignSystem from "../images/design-System.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="showcase">
      <div>
        <h2 className="overline">UX Designer</h2>
        <h1 className="heading1">
          Ajudo empresas e startups a lançarem e escalar seus produtos através
          do design
        </h1>
        <p className="showcase__description">
          Sou designer de interfaces e desenvolvedor front-end com larga
          experiência em visual design. Atuo remotamente para clientes de Natal,
          São Paulo, Florianópolis e EUA.
        </p>
      </div>
    </section>

    <section className="services">
      <div className="services__item">
        <UxDesign />
        <h3 className="heading2">
          Consultoria em Design de Experiência do Usuário
        </h3>
        <p>
          Soluções complexas necessitam de uma experiência bem eficiente para
          garantir o sucesso do seu projeto.
        </p>
      </div>
      <div className="services__item">
        <MobileDesign />
        <h3 className="heading2">Design de Web Apps e Aplicações Mobile</h3>
        <p>
          Um projeto para ter uma boa experiência precisa também de uma
          interface memorável.
        </p>
      </div>
      <div className="services__item">
        <DesignSystem />
        <h3 className="heading2">
          Sistema de Design para aplicações escaláveis
        </h3>
        <p>
          Para que seu projeto possa crescer junto com o sucesso do produto, é
          necessário uma operação de design.
        </p>
      </div>
    </section>

    <section className="works">
      <div className="works__item">
        <h3>Consultoria em Design de Experiência do Usuário</h3>
        <p>
          Soluções complexas necessitam de uma experiência bem eficiente para
          garantir o sucesso do seu projeto.
        </p>
      </div>
      <div className="works__item">
        <h3>Consultoria em Design de Experiência do Usuário</h3>
        <p>
          Soluções complexas necessitam de uma experiência bem eficiente para
          garantir o sucesso do seu projeto.
        </p>
      </div>
      <div className="works__item">
        <h3>Consultoria em Design de Experiência do Usuário</h3>
        <p>
          Soluções complexas necessitam de uma experiência bem eficiente para
          garantir o sucesso do seu projeto.
        </p>
      </div>
    </section>
  </Layout>
)

export default IndexPage
