import { useState } from 'react';
import './FormCalculadora.css';

const OPERACOES = {
  '+': (primeiro, segundo) => primeiro + segundo,
  '-': (primeiro, segundo) => primeiro - segundo,
  '*': (primeiro, segundo) => primeiro * segundo,
  '/': (primeiro, segundo) => primeiro / segundo,
};

function FormCalculadora() {
  const [primeiroNumero, setPrimeiroNumero] = useState('');
  const [segundoNumero, setSegundoNumero] = useState('');
  const [operacao, setOperacao] = useState('+');
  const [resultado, setResultado] = useState(null);
  const [erro, setErro] = useState('');

  function calcular(event) {
    event.preventDefault();
    const primeiro = Number(primeiroNumero);
    const segundo = Number(segundoNumero);

    if (primeiroNumero === '' || segundoNumero === '') {
      setErro('Preencha os dois números para continuar.');
      setResultado(null);
      return;
    }

    if (operacao === '/' && segundo === 0) {
      setErro('Não é possível dividir por zero.');
      setResultado(null);
      return;
    }

    setErro('');
    setResultado(OPERACOES[operacao](primeiro, segundo));
  }

  function limpar() {
    setPrimeiroNumero('');
    setSegundoNumero('');
    setOperacao('+');
    setResultado(null);
    setErro('');
  }

  return (
    <form className="calculator-form" onSubmit={calcular}>
      <div className="fields-grid">
        <label htmlFor="primeiro-numero">
          Primeiro número
          <input
            id="primeiro-numero"
            type="number"
            step="any"
            value={primeiroNumero}
            onChange={(event) => setPrimeiroNumero(event.target.value)}
            placeholder="Ex.: 10"
          />
        </label>

        <label htmlFor="segundo-numero">
          Segundo número
          <input
            id="segundo-numero"
            type="number"
            step="any"
            value={segundoNumero}
            onChange={(event) => setSegundoNumero(event.target.value)}
            placeholder="Ex.: 5"
          />
        </label>
      </div>

      <label htmlFor="operacao">
        Operação
        <select id="operacao" value={operacao} onChange={(event) => setOperacao(event.target.value)}>
          <option value="+">Adição (+)</option>
          <option value="-">Subtração (-)</option>
          <option value="*">Multiplicação (*)</option>
          <option value="/">Divisão (/)</option>
        </select>
      </label>

      <div className="button-row">
        <button className="calculate-button" type="submit">Calcular</button>
        <button className="clear-button" type="button" onClick={limpar}>Limpar</button>
      </div>

      <div className={`result-box ${resultado !== null ? 'has-result' : ''}`} aria-live="polite">
        <span>Resultado</span>
        <strong>{resultado !== null ? resultado : '—'}</strong>
      </div>

      {erro && <p className="error-message" role="alert">{erro}</p>}
    </form>
  );
}

export default FormCalculadora;

