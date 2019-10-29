import { withFormik } from 'formik';
import LoginForm from '../components/LoginForm';
import validateForm from 'utils/validate';

export default withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    email: '',
    fullname: '',
    password: '',
    password2: '',
  }),
  validate: values => validateForm({ isAuth: true, values }),
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },
  displayName: 'LoginForm',
})(LoginForm);
