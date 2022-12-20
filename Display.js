class Display {
  constructor(displayValorAnterior, displayValorActual) {
    this.displayValorAnterior = displayValorAnterior;
    this.displayValorActual = displayValorActual;
    this.calculadora = new Calculadora();
    this.tipoOperacion = undefined;
    this.valorAnterior = "";
    this.valorActual = "";
    this.signos = {
      sumar: "+",
      restar: "-",
      multiplicar: "x",
      dividir: "/",
    };
  }

  borrar() {
    this.valorActual = this.valorActual.toString().slice(0, -1);
    this.mostrarValores();
  }

  borrarTodo() {
    this.valorActual = "";
    this.valorAnterior = "";
    this.tipoOperacion = undefined;
    this.mostrarValores();
  }

  computar(tipo) {
    this.tipoOperacion !== "igual" && this.calcular();
    this.tipoOperacion = tipo;
    this.valorAnterior = this.valorActual || this.valorAnterior;
    this.valorActual = "";
    this.mostrarValores();
  }

  agregarNumero(numero) {
    if (numero === "." && this.valorActual.includes(".")) return;

    this.valorActual = this.valorActual.toString() + numero.toString();
    this.mostrarValores();
  }

  mostrarValores() {
    this.displayValorActual.textContent = this.valorActual;
    this.displayValorAnterior.textContent = `${this.valorAnterior} ${
      this.signos[this.tipoOperacion] || ""
    }`;
  }

  calcular() {
    const valorAnterior = parseFloat(this.valorAnterior);
    const valorActual = parseFloat(this.valorActual);

    if (isNaN(valorActual) || isNaN(valorAnterior)) return;
    this.valorActual = this.calculadora[this.tipoOperacion](
      valorAnterior,
      valorActual
    );
  }
}
