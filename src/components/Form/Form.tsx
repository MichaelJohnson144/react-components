import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import FormField from './FormField/FormField';

export default function Form() {
  const methods = useForm();

  const testOnSubmit: SubmitHandler<any> = (data: any) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        className={'flex flex-row flex-nowrap justify-start items-start w-full h-screen'}
        onSubmit={methods.handleSubmit(testOnSubmit)}
      >
        <FormField />
      </form>
    </FormProvider>
  );
}
