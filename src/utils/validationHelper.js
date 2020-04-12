export const validateField = (fieldName, value) => {
  let result = '';
  switch(fieldName) {
    case 'email':
      result = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      break;
    case 'password':
      result = value.length >= 6;
      break;
    default:
      break;
  }
  return result;
};
