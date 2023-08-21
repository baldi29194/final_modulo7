import PropsType from 'prop-types';
import './Dialog.css';

export const Dialog = ({
    primary = false,
    titulo='',
    contenido='',
    labelbutton='',
}) => {
    const estiloModo = primary ? 'primary':'secondary'
    return (
        <>
            <div className={['dialog-style', `dialog-style--${estiloModo}`].join(' ')}>
                <div className={['titulo', `titulo--${estiloModo}`].join(' ')}>
                    {titulo}
                    <button className='close-btn'>X</button>
                </div>
                <div className={['cuerpo', `cuerpo--${estiloModo}`].join(' ')}>
                    <p>{contenido}</p>
                </div>
                <div className={['pie', `pie--${estiloModo}`].join(' ')}>
                    <a href="#">{labelbutton}</a>
                </div>
        </div>

        </>
    );
};

Dialog.propTypes = {
    primary: PropsType.bool,
    titulo: PropsType.string,
    contenido: PropsType.string,
    labelbutton: PropsType.string,
}

Dialog.defaultProps = {
    primary: true,
    titulo: 'Titulo dialog',
    contenido: 'Contenido dialog',
    labelbutton: 'Cancelar',
}