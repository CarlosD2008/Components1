import FormCalculadora from './components/FormCalculadora.jsx';

function App() {
  return (
    <main className="app-shell">
      <section className="calculator-card" aria-labelledby="titulo-calculadora">
        <div className="card-header">
          <span className="eyebrow">DESAFIO REACT JS</span>
          <h1 id="titulo-calculadora">Calculadora Simples</h1>
          <p>Informe dois números, escolha uma operação e calcule o resultado.</p>
        </div>
        <FormCalculadora />
      </section>
    </main>
  );
}

export default App;

