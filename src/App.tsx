import { FormEvent, useState } from "react";

import logoImg from "./assets/logo.png";

import "./App.css";

function App() {
  const [alcool, setAlcool] = useState<number>(1);
  const [gasolina, setGasolina] = useState<number>(1);
  const [result, setResult] = useState("");

  let calculo = (alcool / gasolina).toFixed(2);

  const Calcular = (e: FormEvent) => {
    e.preventDefault();

    if (calculo <= "0.7") {
      setResult("Abasteça alcool");
      return;
    } else {
      setResult("Abasteça gasolina");
    }
  };

  const FormatPrice = (valor: number) => {
    const price = valor.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
    return price;
  };

  return (
    <>
      <main className="content">
        <div>
          <img src={logoImg} alt="logo do formulario" />
        </div>
        <h1>Calculo de Combustiveis</h1>

        <div>
          <form onSubmit={Calcular}>
            <div className="formulario">
              <label htmlFor="alcool">Alcool (preço por litro)</label>
              <input
                type="number"
                id="alcool"
                placeholder="3,90"
                min="1"
                step="0.01"
                value={alcool}
                onChange={(e) => setAlcool(Number(e.target.value))}
              />

              <label htmlFor="gasolina">Gasolina (preço por litro)</label>
              <input
                type="number"
                placeholder="4,90"
                id="gasolina"
                min="1"
                step="0.01"
                value={gasolina}
                onChange={(e) => setGasolina(Number(e.target.value))}
              />

              <input className="button" type="submit" value="Calcular" />
            </div>
          </form>

          {result && result.length > 0 ? (
            <section className="result">
              <h1>{result}</h1>
              <span>{FormatPrice(alcool)}</span>
              <span>{FormatPrice(gasolina)}</span>

              <p>Base do calculo: {calculo}</p>
            </section>
          ) : (
            ""
          )}
        </div>
      </main>
    </>
  );
}

export default App;
