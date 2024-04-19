import './contactpane.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactPane = (props: any) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        toast.success("Copied the text: " + text);
      })
      .catch((error) => {
        console.error('Failed to copy text to clipboard:', error);
        toast.error("Failed to copy text. Please try again.");
      });
  };

  return (
    <div>
      <a className='circle-link' href={props.href}>
        <div className='circle' onClick={() => copyToClipboard(props.text)}>
          <img className='circle-image' src={props.src} alt="circle"></img>
          <h3
            className='circle-text-main'
            style={{ right: props.right}}
            color={props.color}
            font-size={props.fontSize}>{props.text}</h3>
        </div>
      </a>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default ContactPane;