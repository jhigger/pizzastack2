import {useField, FastField} from 'formik';
import TextField from '@material-ui/core/TextField';

export default function BasicDateTimePicker({name, ...props}) {
	const [field, meta] = useField(name);

	return (
		<FastField
			as={TextField}
			fullWidth
			variant="outlined"
			type="datetime-local"
			InputLabelProps={{
				shrink: true
			}}
			name={name}
			{...field}
			{...props}
			error={Boolean(meta.touched && meta.error)}
			helperText={meta.touched && meta.error}
		></FastField>
	);
}
