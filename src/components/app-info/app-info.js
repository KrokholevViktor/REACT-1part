import './app-info.css';

const AppInfo = ({employees, increased}) => {
    return (
        <div className="app-info">
            <h1>Учёт сотрудников компании N</h1>
            <h2>общее число сотрудников: {employees}</h2>
            <h2>Премию получат: {increased}</h2>
        </div>
    );
}

export default AppInfo;