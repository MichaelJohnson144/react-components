import { Controller, useFormContext } from 'react-hook-form';
import { InputAdornment } from '@mui/material';
import { CustomTextField } from '../TextFieldStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';

export default function Subject() {
  const {
    control,
    formState: { errors },
    register,
  } = useFormContext();

  return (
    <Controller
      control={control}
      defaultValue={''}
      name={'subject'}
      render={({ field: { ref, value } }) => (
        <CustomTextField
          className={'!w-full'}
          error={!!errors.subject}
          helperText={errors.subject ? 'Please enter a subject' : null}
          InputProps={{
            endAdornment: (
              <InputAdornment
                className={'!h-fit !text-3xl sm:!text-4xl !text-pink-400'}
                position={'end'}
              >
                <FontAwesomeIcon icon={faEnvelopeOpenText} />
              </InputAdornment>
            ),
          }}
          inputRef={ref}
          label={'Subject *'}
          placeholder={'Subject'}
          {...register('subject', {
            onBlur: undefined,
            onChange: undefined,
            pattern: /.+/g,
            required: true,
          })}
          value={value}
          variant={'outlined'}
        />
      )}
    />
  );
}
