import { Link } from 'react-router-dom';

const NotFound = () => {
    return <div>
        <b>Нет страницы</b>
        <div>
            <Link to="/">На главную</Link>
        </div>
    </div>
}

export {NotFound};