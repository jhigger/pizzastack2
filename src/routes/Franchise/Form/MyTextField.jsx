import React from 'react';
import {useField, FastField, Field} from 'formik';
import TextField from '@material-ui/core/TextField';

export default function MyTextField({name, fast = true, ...props}) {
	const [field, meta] = useField(name);

	return fast ? (
		<FastField
			as={TextField}
			fullWidth
			variant="outlined"
			name={name}
			{...field}
			{...props}
			error={Boolean(meta.touched && meta.error)}
			helperText={meta.touched && meta.error}
		/>
	) : (
		<Field
			as={TextField}
			fullWidth
			variant="outlined"
			name={name}
			{...field}
			{...props}
			error={Boolean(meta.touched && meta.error)}
			helperText={meta.touched && meta.error}
		/>
	);
}
