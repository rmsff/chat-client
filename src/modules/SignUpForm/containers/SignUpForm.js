import { withFormik } from 'formik';
import SignUpForm from '../components/SignUpForm';
import validateForm from 'utils/validate';
import { userActions } from 'redux/actions';
import store from 'redux/store';

export default withFormik({
	enableReinitialize: true,
	mapPropsToValues: () => ({
		email: '',
		fullname: '',
		password: '',
		password_2: '',
	}),
	validate: values => validateForm({ isAuth: false, values }),
	handleSubmit: (values, { setSubmitting, setStatus }) => {
		store
			.dispatch(userActions.fetchUserSignUp(values))
			.then(status => {
				setSubmitting(false);
				setStatus(status === 'success');
				setTimeout(()=> window.history.back(-4), 4000);
			})
			.catch(() => setSubmitting(false));
	},
	displayName: 'SignUpForm',
})(SignUpForm);
