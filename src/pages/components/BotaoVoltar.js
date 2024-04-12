import { Link } from 'react-router-dom';

function BotaoVoltar() {
    return (
        <div className="Page-body-content">
            <Link to="/menu">
                <button className="Page-body-content-button">
                    Voltar
                </button>
            </Link>
        </div>
    );
}

export default BotaoVoltar;
