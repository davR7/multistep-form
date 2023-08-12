import * as Yup from 'yup';

const schemaSignup = Yup.object().shape({
  email: Yup.string().email('E-mail inválido').required('Campo obrigatório'),
  password: Yup.string()
    .min(5, 'A senha deve ter pelo menos 5 caracteres')
    .required('Campo obrigatório'),
  passConfirm: Yup.string()
    .oneOf([Yup.ref('password')], 'As senhas devem corresponder')
    .required('Campo obrigatório'),
});

const schemaPersonal = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[a-zA-Z\s]*$/, 'Campo não aceita números.')
    .required('Campo obrigatório'),
  lastName: Yup.string()
    .matches(/^[a-zA-Z\s]*$/, 'Campo não aceita números.')
    .required('Campo obrigatório'),
  userName: Yup.string().required('Campo obrigatório'),
});

const schemaProfissional = Yup.object().shape({
  currentCompany: Yup.string()
    .matches(/^[a-zA-Z\s]*$/, 'Campo não aceita números.')
    .required('Campo obrigatório'),
  designation: Yup.string()
    .matches(/^[a-zA-Z\s]*$/, 'Campo não aceita números.')
    .required('Campo obrigatório'),
  startDate: Yup.string().required('Campo obrigatório'),
});

export const schema = [schemaSignup, schemaPersonal, schemaProfissional];
