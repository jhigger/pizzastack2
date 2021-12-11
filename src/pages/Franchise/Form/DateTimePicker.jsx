import React, {useState} from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {DateTimePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import {useField, Field, useFormikContext} from 'formik';

export default function BasicDateTimePicker({name, ...props}) {
	const [field, meta] = useField(name);
	const {setFieldValue} = useFormikContext();

	const DateAndTimePicker = () => {
		const [selectedDate, handleDateChange] = useState(new Date());

		return (
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<DateTimePicker
					inputVariant="outlined"
					value={selectedDate}
					disablePast
					onChange={() => {
						handleDateChange();
						setFieldValue(name, selectedDate);
					}}
					label="Date & Time"
					showTodayButton
					fullWidth
				/>
			</MuiPickersUtilsProvider>
		);
	};

	return (
		<Field
			as={DateAndTimePicker}
			fullWidth
			variant="outlined"
			name={name}
			{...field}
			{...props}
			error={Boolean(meta.touched && meta.error)}
			helperText={meta.touched && meta.error}
		></Field>
	);
}
