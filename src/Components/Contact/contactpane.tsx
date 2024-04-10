import './contactpane.scss';

const ContactPane = (props:any) => {
    return (
        <a className='circle-link' href={props.href}>
            <div className='circle'>
                <img className='circle-image'src={props.src}></img>
                <h3 className='circle-text-main'>{props.text}</h3>
                <a><h3></h3></a>
            </div>
        </a>
    )
}

export default ContactPane;