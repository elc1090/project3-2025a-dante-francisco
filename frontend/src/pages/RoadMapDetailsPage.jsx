import { useParams } from 'react-router-dom';
import Footer from '../layouts/Footer';
import MarkDownRenderer from '../components/MarkDownRenderer';
import MarkdownAccordion from '../components/MarkdownAccordion';

const fakeRoadmaps = [
  {
    _id: '1',
    title: 'Como se tornar Frontend Developer',
    description: `
## Como se tornar Frontend Developer

Este roadmap abrange uma jornada completa para quem deseja atuar como desenvolvedor frontend. A seguir estão os principais tópicos:

- **HTML**: Estruturação de páginas, semântica, acessibilidade.
- **CSS**: Estilização, Flexbox, Grid, animações, preprocessadores como SASS.
- **JavaScript**: Fundamentos da linguagem, manipulação do DOM, eventos.
- **Frameworks**: React.js, Vue.js ou Angular — escolha pelo menos um.
- **Controle de versão**: Git e GitHub.
- **Ferramentas modernas**: Webpack, Babel, ESLint.
- **Testes**: Jest, Testing Library.
- **Boas práticas**: Clean Code, responsividade, performance.

Ao final deste roadmap, você será capaz de construir aplicações frontend profissionais, com foco em usabilidade, estética e performance.
`
  },
  { _id: '2', title: 'Desenvolvimento Mobile',   description: `
# Introdução ao Desenvolvimento Mobile

O desenvolvimento mobile envolve a criação de aplicativos para dispositivos móveis, como smartphones e tablets. Existem diversas abordagens e ferramentas disponíveis.

## Principais Abordagens

1. **Desenvolvimento Nativo**: Criar apps específicos para cada sistema operacional, como Android (Java/Kotlin) e iOS (Swift).
2. **Desenvolvimento Híbrido**: Utilizar frameworks como React Native ou Flutter para criar apps multiplataforma.
3. **Progressive Web Apps (PWA)**: Aplicativos web que funcionam como apps nativos.

## Ferramentas Essenciais

- Android Studio
- Xcode
- React Native CLI
- Flutter SDK

## Exemplos de Código

### Exemplo de função simples em Kotlin:

\`\`\`kotlin
fun sayHello() {
    println("Hello, Mobile Developer!")
}
\`\`\`

## Recursos Recomendados

- [Documentação oficial do React Native](https://reactnative.dev/)
- [Guia Flutter](https://flutter.dev/docs)

> "A simplicidade é a sofisticação máxima." — Leonardo da Vinci

Com dedicação e prática, você poderá criar aplicações móveis incríveis e impactantes!
`
},
  { _id: '3', title: 'DevOps Essentials', description: 'Introdução a CI/CD, Docker, Kubernetes e práticas DevOps.' },
];

const RoadMapDetailsPage = () => {
  const { roadmapId } = useParams();

  const roadmap = fakeRoadmaps.find((r) => r._id === roadmapId);

  if (!roadmap) {
    return <div className="max-w-3xl mx-auto p-4">Roadmap não encontrado.</div>;
  }

  return (
    <>
      <div className="max-w-3xl mx-auto p-4">
       {/*<MarkDownRenderer content={roadmap.description} />  */} 
       <MarkdownAccordion content={roadmap.description} />
      </div>

      <Footer /> 
    </>
  );
};

export default RoadMapDetailsPage;
