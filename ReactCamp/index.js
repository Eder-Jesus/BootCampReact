var container = document.getElementById('app')

    // var titulo = document.createElement('h1')
    // titulo.innerHTML = "Titulo inserido por JavaScriptO"
    // container.appendChild(titulo)


function Contador(props)
{
    //let numero = 0;
    const[numero, setNumero] = React.useState(0);

    function Somar()
    {
    setNumero(numero+1);
    console.log("Somei e ficou = " + numero)
    }

    function Subtrair()
    {
    setNumero(numero-1)
    console.log("Subtrai e ficou = " + numero)
    }
    
    return(
    <React.Fragment>
    <h1>{props.titulo}</h1>
    <h2>{numero}</h2>
    <button onClick={Somar}>+</button>
    <button onClick={Subtrair}>-</button>
    </React.Fragment>
    );
}

function App(props) {
    return ( 
        <React.Fragment>
            <h1>Qual foi o placar?</h1>
            <Contador titulo="Flamengo"/>
            <Contador titulo="River Plate"/>
        </React.Fragment>
    );
}

ReactDOM.render(React.createElement(App,null,null), container);