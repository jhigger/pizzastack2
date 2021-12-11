import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import {Paper, Typography} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import {Grid} from '@material-ui/core';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Container from '@material-ui/core/Container';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import MyTextField from './MyTextField';
import Email from '../../../assets/email.json';
import DateTimePicker from './DateTimePicker';

const useStyles = makeStyles((theme) => ({
	paper: {
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		margin: theme.spacing(3)
	}
}));

export default function ApplicationForm() {
	const classes = useStyles();
	const formEl = React.useRef(null);

	return (
		<Container maxWidth="md">
			<Paper className={classes.paper}>
				<Formik
					initialValues={{
						name: '',
						address: '',
						email: '',
						telephone: '',
						mobile: '',
						company: '',
						position: '',
						company_address: '',
						company_tel: '',
						company_email: '',
						area: '',
						consider_other_areas: '',
						consider_specify: '',
						investment: '',
						active_passive: '',
						individual_partners: '',
						other_businesses: '',
						lead_source: '',
						other_source: '',
						request: '',
						date_time: ''
					}}
					validationSchema={Yup.object({
						name: Yup.string()
							.required('Required')
							.min(5, 'Full name too short')
							.max(50, 'Full name too long'),
						address: Yup.string().required('Required'),
						email: Yup.string().email('Invalid email').required('Required'),
						telephone: Yup.number()
							.integer()
							.typeError('Please enter a valid telephone number')
							.required('Required'),
						mobile: Yup.number()
							.integer()
							.typeError('Please enter a valid mobile number')
							.required('Required'),
						company: Yup.string().required('Required'),
						position: Yup.string().required('Required'),
						company_address: Yup.string().required('Required'),
						company_tel: Yup.number()
							.integer()
							.typeError('Please enter a valid telephone number')
							.required('Required'),
						company_email: Yup.string()
							.email('Invalid email')
							.required('Required'),
						area: Yup.string().required('Required'),
						consider_other_areas: Yup.string().required('Required'),
						consider_specify: Yup.string(),
						investment: Yup.number()
							.typeError('Please enter a valid currency number')
							.required('Required'),
						active_passive: Yup.string().required('Required'),
						individual_partners: Yup.string().required('Required'),
						other_businesses: Yup.string(),
						lead_source: Yup.string().required('Required'),
						other_source: Yup.string(),
						request: Yup.string().required('Required'),
						date_time: Yup.string().required('Required')
					})}
					onSubmit={() => {
						formEl.current.submit();
					}}
				>
					{({values, touched, errors, getFieldProps, handleSubmit}) => {
						if (values.consider_other_areas != 'Yes')
							values.consider_specify = '';
						if (values.lead_source != 'Others') values.other_source = '';

						return (
							<form
								autoComplete="off"
								action={`https://formsubmit.co/${Email.address}`}
								method="POST"
								ref={formEl}
								onSubmit={handleSubmit}
							>
								<input type="hidden" name="_template" value="table" />
								<input
									type="hidden"
									name="_subject"
									value="Franchise Application"
								/>
								<Grid container spacing={2}>
									<Grid item xs={12}>
										<Typography variant="h5" align="center">
											APPLICATION FORM
										</Typography>
									</Grid>
									<Grid item xs={12}>
										<MyTextField label="Complete Name" name="name" />
									</Grid>
									<Grid item xs={12}>
										<MyTextField label="Home Address" name="address" />
									</Grid>
									<Grid item xs={12}>
										<MyTextField label="Email Address" name="email" />
									</Grid>
									<Grid item xs={12} sm={6}>
										<MyTextField label="Telephone Number" name="telephone" />
									</Grid>
									<Grid item xs={12} sm={6}>
										<MyTextField label="Mobile Number" name="mobile" />
									</Grid>
									<Grid item xs={12}>
										<MyTextField label="Company" name="company" />
									</Grid>
									<Grid item xs={12}>
										<MyTextField label="Position" name="position" />
									</Grid>
									<Grid item xs={12}>
										<MyTextField
											label="Company Address"
											name="company_address"
										/>
									</Grid>
									<Grid item xs={12} sm={6}>
										<MyTextField label="Company Telephone" name="company_tel" />
									</Grid>
									<Grid item xs={12} sm={6}>
										<MyTextField label="Company Email" name="company_email" />
									</Grid>
									<Grid item xs={12}>
										<MyTextField
											label="Area/Location proposed for the franchise outlet (Please describe):"
											name="area"
											multiline
											rows={3}
										/>
									</Grid>
									<Grid item sm={4}>
										<FormControl
											component="fieldset"
											error={Boolean(
												touched.consider_other_areas &&
													errors.consider_other_areas
											)}
										>
											<FormLabel component="legend">
												Will you consider other areas?
											</FormLabel>
											<RadioGroup
												name="consider_other_areas"
												{...getFieldProps('consider_other_areas')}
											>
												<FormControlLabel
													value="Yes"
													control={<Radio />}
													label="Yes"
												/>
												<FormControlLabel
													value="No"
													control={<Radio />}
													label="No"
												/>
											</RadioGroup>
											<FormHelperText>
												{touched.consider_other_areas &&
													errors.consider_other_areas}
											</FormHelperText>
										</FormControl>
									</Grid>
									<Grid item xs={8}>
										<MyTextField
											fast={false}
											disabled={values.consider_other_areas != 'Yes'}
											label="Specify other area:"
											name="consider_specify"
											multiline
											rows={3}
										/>
									</Grid>
									<Grid item xs={12}>
										<MyTextField
											label="I can invest the total amount of (in pesos):"
											name="investment"
										/>
									</Grid>
									<Grid item sm={6}>
										<FormControl
											component="fieldset"
											error={Boolean(
												touched.active_passive && errors.active_passive
											)}
										>
											<FormLabel component="legend">
												I plan to be a Franchisee:
											</FormLabel>
											<RadioGroup
												name="active/passive"
												{...getFieldProps('active_passive')}
											>
												<FormControlLabel
													value="Actively involved in the business"
													control={<Radio />}
													label="Actively involved in the business"
												/>
												<FormControlLabel
													value="Passive and behind the scenes"
													control={<Radio />}
													label="Passive and behind the scenes"
												/>
											</RadioGroup>
											<FormHelperText>
												{touched.active_passive && errors.active_passive}
											</FormHelperText>
										</FormControl>
									</Grid>
									<Grid item sm={6}>
										<FormControl
											component="fieldset"
											error={Boolean(
												touched.individual_partners &&
													errors.individual_partners
											)}
										>
											<FormLabel component="legend">
												I plan to operate the franchise:
											</FormLabel>
											<RadioGroup
												name="individual/partners"
												{...getFieldProps('individual_partners')}
											>
												<FormControlLabel
													value="As an individual"
													control={<Radio />}
													label="As an individual"
												/>
												<FormControlLabel
													value="With Partners"
													control={<Radio />}
													label="With Partners"
												/>
											</RadioGroup>
											<FormHelperText>
												{touched.individual_partners &&
													errors.individual_partners}
											</FormHelperText>{' '}
										</FormControl>
									</Grid>
									<Grid item xs={12}>
										<MyTextField
											label="Other businesses:"
											name="other_businesses"
										/>
									</Grid>
									<Grid item sm={12}>
										<FormControl
											component="fieldset"
											error={Boolean(touched.lead_source && errors.lead_source)}
										>
											<FormLabel component="legend">
												How did you hear about us:
											</FormLabel>
											<RadioGroup
												name="lead_source"
												{...getFieldProps('lead_source')}
											>
												<Grid container spacing={2}>
													<Grid item sm={3}>
														<FormControlLabel
															value="Asian Expo"
															control={<Radio />}
															label="Asian Expo"
														/>
													</Grid>
													<Grid item sm={3}>
														<FormControlLabel
															value="Facebook"
															control={<Radio />}
															label="Facebook"
														/>
													</Grid>
													<Grid item sm={3}>
														<FormControlLabel
															value="Advertisement"
															control={<Radio />}
															label="Advertisement"
														/>
													</Grid>
													<Grid item sm={3}>
														<FormControlLabel
															value="Referral"
															control={<Radio />}
															label="Referral"
														/>
													</Grid>
													<Grid item sm={3}>
														<FormControlLabel
															value="Others"
															control={<Radio />}
															label="Others"
														/>
													</Grid>
													<Grid item xs={9}>
														<MyTextField
															fast={false}
															disabled={values.lead_source != 'Others'}
															label="Other source:"
															name="other_source"
														/>
													</Grid>
												</Grid>
											</RadioGroup>
											<FormHelperText>
												{touched.lead_source && errors.lead_source}
											</FormHelperText>{' '}
										</FormControl>
									</Grid>
									<Grid item sm={6}>
										<FormControl
											component="fieldset"
											error={Boolean(touched.request && errors.request)}
										>
											<FormLabel component="legend">
												I would like to request for a:
											</FormLabel>
											<RadioGroup name="request" {...getFieldProps('request')}>
												<Grid container spacing={2}>
													<Grid item sm={6}>
														<FormControlLabel
															value="Business meeting"
															control={<Radio />}
															label="Business meeting"
														/>
													</Grid>
													<Grid item sm={6}>
														<FormControlLabel
															value="Franchise presentation"
															control={<Radio />}
															label="Franchise presentation"
														/>
													</Grid>
												</Grid>
											</RadioGroup>
											<FormHelperText>
												{touched.request && errors.request}
											</FormHelperText>
										</FormControl>
									</Grid>
									<Grid item xs={6}>
										<DateTimePicker label="Date & Time:" name="date_time" />
									</Grid>
									<Grid item xs={12}>
										<Button
											size="large"
											variant="outlined"
											endIcon={<SendIcon />}
											fullWidth={true}
											type="submit"
										>
											Submit
										</Button>
									</Grid>
								</Grid>
							</form>
						);
					}}
				</Formik>
			</Paper>
		</Container>
	);
}
