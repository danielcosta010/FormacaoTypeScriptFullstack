import { Card } from "./components/Card";
import { Layout } from "./components/Layout";

function App() {
  return (
    <>
      <Layout>
        <Card
          id={1}
          paragraph="Component HTML5"
          details="Para estruturar páginas web"
        />
        <Card
          id={2}
          paragraph="Component react"
          details="para dar agilidade a pagina"
        />
        <Card
          id={3}
          paragraph="Component Mongo"
          details="Backend agil e seguro"
        />
      </Layout>
    </>
  );
}

export default App;
