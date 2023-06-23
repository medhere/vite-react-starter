import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

// const { register, handleSubmit, formState:{errors} } = useForm();
const {
  register,
  setError,
  trigger,
  clearErrors,
  handleSubmit,
  setValue,
  getValues,
  setFocus,
  reset,
  watch,
  formState,
} = useForm();

const {
  errors,
  isDirty,
  dirtyFields,
  touchedFields,
  isSubmitted,
  isSubmitSuccessful,
  isSubmitting,
  submitCount,
  isValid,
  isValidating,
} = formState;

// const onSubmit = (data, e) => {console.log(data, e); var multipart=new FormData(e.target)}
// const onError = (errors, e) => console.log(errors, e);
// <form onSubmit={handleSubmit(onSubmit,onError)} >
// {!!errors.email && errors?.email.message}
// error={errors.example && Boolean(errors.example)}
// helperText={errors.example && `${errors.example['type']}:${errors.example['message']}}

// <ErrorMessage errors={errors} name="singleErrorInput" />

// <ErrorMessage
//   errors={errors}
//   name="singleErrorInput"
//   render={({ message }) => <p>{message}</p>}
// />

// <ErrorMessage errors={errors} name="name" message="This is required" />

// <ErrorMessage
//   errors={errors}
//   name="multipleErrorInput"
//   render={({ messages }) =>
//     messages &&
//     Object.entries(messages).map(([type, message]) => (
//       <p key={type}>{message}</p>
//     ))
//   }
// />;
