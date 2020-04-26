import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// export const Image = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       ImageSouphia: file(relativePath: { eq: "portifolio/soulphia.png" }) {
//         childImageSharp {
//           fluid(maxWidth: 300) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//       ImageSolidos: file(relativePath: { eq: "portifolio/solidos.png" }) {
//         childImageSharp {
//           fluid(maxWidth: 300) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   `)
//   console.log(data)

//   return <Img fluid={data.ImageSouphia.childImageSharp.fluid} />
// }

const Works = () => {
  const data = useStaticQuery(graphql`
    query {
      ThumbSoulphia: file(relativePath: { eq: "portifolio/soulphia.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ThumbSolidos: file(relativePath: { eq: "portifolio/solidos.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ThumbSurfmappers: file(
        relativePath: { eq: "portifolio/surfmappers.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ThumbPaytour: file(relativePath: { eq: "portifolio/paytour.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <section className="works">
      <div className="row">
        <div className="works__item">
          <div className="thumbnail">
            {/* <Image /> */}
            <Img fluid={data.ThumbSolidos.childImageSharp.fluid} />
          </div>
          <h3 className="heading2">Solidos</h3>
          <p>
            A Solidos é uma plataforma de economia circular, que atua na conexão
            entre grandes geradores de resíduos, transportadores e pátios de
            reciclagem.
          </p>
          <p>
            No projeto atuei diretamente na construção da identidade visual
            (marca), documentação de design system, bem como tratando
            constantemente com stakeholders, validando protótipos e requisitos
            da operação em nível nacional.
          </p>
        </div>
        <div className="works__item">
          <div className="thumbnail">
            <Img fluid={data.ThumbSoulphia.childImageSharp.fluid} />
          </div>
          <h3 className="heading2">Soulphia</h3>
          <p>
            A plataforma Soulphia é um projeto de ensino de línguas com viés de
            contribuição social, permitindo recolocação profissional de
            imigrantes como instrutores dentro do ambiente de ensino.
          </p>
          <p>
            O desafio do projeto foi avaliar os problemas de experiência dos
            usuários, propor uma nova identidade visual, bem como arquitetar o
            design do projeto para escalabilidade global em outros países.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="works__item">
          <div className="thumbnail">
            <Img fluid={data.ThumbSurfmappers.childImageSharp.fluid} />
          </div>
          <h3 className="heading2">Surfmappers</h3>
          <p>
            O Surfmappers é um aplicativo que conecta fotógrafos a surfistas,
            realizando a venda e gestão dos registros fotográficos desde o
            agendamento de horário para sessão até o pagamento.
          </p>
          <p>
            Neste projeto atuei no mapeamento de fluxos, prototipagem e
            validação da experiência dentro do app, foi criado uma documentação
            de design para o time técnico mobile realizar a implementação da UI.
          </p>
        </div>
        <div className="works__item">
          <div className="thumbnail">
            <Img fluid={data.ThumbPaytour.childImageSharp.fluid} />
          </div>
          <h3 className="heading2">Paytour</h3>
          <p>
            O PayTour é uma solução de motor de reservas, pagamentos e operação
            para receptivos turísticos, oferecendo para os assinantes uma painel
            completo para gestão do seu negócio.
          </p>
          <p>
            A proposta foi realizar o redesign de todo o painel administrativo,
            documentação de Design System para garantir a consistência nas
            interfaces, bem como identificar e solucionar problemas de
            usabilidade do painel antigo.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Works
