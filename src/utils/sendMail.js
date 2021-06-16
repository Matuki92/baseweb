import {
  EMAIL_UID,
  EMAIL_SERVICE_ID,
  EMAIL_TEMPLATE_ID,
} from '../config/email';
import emailjs from 'emailjs-com';

const sendMail = async () => {
  const params = {
    from_name: 'From Name',
    to_name: 'To Name',
    message: 'Message',
  };

  const res = await emailjs.send(
    EMAIL_SERVICE_ID,
    EMAIL_TEMPLATE_ID,
    params,
    EMAIL_UID,
  );

  console.log(res);
};

export default sendMail;
