import emailjs from 'emailjs-com';
import {
  EMAIL_UID,
  EMAIL_SERVICE_ID,
  EMAIL_TEMPLATE_ID,
} from '../config/email';

const sendMail = async (params) => {
  const res = await emailjs.send(
    EMAIL_SERVICE_ID,
    EMAIL_TEMPLATE_ID,
    params,
    EMAIL_UID,
  );

  console.log(res);
};

export default sendMail;
