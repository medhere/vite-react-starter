import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { IonInput, IonSelect, IonSelectOption } from "@ionic/react";

// const { register, setError, clearErrors, handleSubmit, formState: { errors } } = useForm();
// const { register, setError, trigger, clearErrors, handleSubmit, setValue, getValues, setFocus, reset, watch, formState, } = useForm();
// const { errors, isDirty, dirtyFields, touchedFields, isSubmitted, isSubmitSuccessful, isSubmitting, submitCount, isValid, isValidating, } = formState;    

// const signin = useXHR('post', 'signin', { device_id: '9988' });
//   const onSubmit = (data, e) => {
// console.log(data, e); 
// var multipart=new FormData(e.target)
//     signin.send(data)
//     .catch((err) => {
//       Object.entries(err.response.data.errors).forEach(([key, value]) => {
//         setError(key, { message: value })
//       })
//     })
//   }
//   const onError = (errors, e) => console.log(errors, e);
// <form onSubmit={handleSubmit(onSubmit,onError)} >

// {!!errors.email && errors?.email.message}
// error={errors.example && Boolean(errors.example)}
// helperText={errors.example && `${errors.example['type']}:${errors.example['message']}}


export const FormError = ({ errors, field_name }) => {

    // TODO check if errors are object or array before rendering

    const singleError = <ErrorMessage errors={errors} name={field_name} render={
        ({ message }) => message && <p style={{ color: 'red' }}>{message}</p>
    }
    />
    const multiError = <ErrorMessage errors={errors} name={field_name}
        render={
            ({ messages }) => messages &&
                Object.entries(messages).map(([type, message]) => (
                    <p key={type} style={{ color: 'red' }}>{message}</p>
                ))
        }
    />

    return singleError
}




export const UserInput = ({
    type, placeholder, name, label, labelPlacement, helperText, value,
    disabled, readonly, errorText, required,
    maxlength, minlength, size, className, ...args
}) => {


    return <IonInput
        type={type}
        placeholder={placeholder}
        name={name}
        label={label}
        labelPlacement={labelPlacement}  //"end" ｜ "fixed" ｜ "floating" ｜ "stacked" ｜ "start"
        helperText={helperText}
        value={value}

        disabled={disabled}
        readonly={readonly}
        errorText={errorText}
        required={required}

        //   color={}
        counter={true}
        maxlength={maxlength}
        minlength={minlength}
        fill="" //"outline" ｜ "solid" for md
        size={size}
        autoCapitalize="words"
        clearInput={true}
        className={className}
        {...args}
    />
}

// --background	Background of the input
// --border-color	Color of the border below the input when using helper text, error text, or counter
// --border-radius	Radius of the input. A large radius may display unevenly when using fill="outline"; if needed, use shape="round" instead or increase --padding-start.
// --border-style	Style of the border below the input when using helper text, error text, or counter
// --border-width	Width of the border below the input when using helper text, error text, or counter
// --color	Color of the input text
// --highlight-color-focused	The color of the highlight on the input when focused
// --highlight-color-invalid	The color of the highlight on the input when invalid
// --highlight-color-valid	The color of the highlight on the input when valid
// --padding-bottom	Bottom padding of the input
// --padding-end	Right padding if direction is left-to-right, and left padding if direction is right-to-left of the input
// --padding-start	Left padding if direction is left-to-right, and right padding if direction is right-to-left of the input
// --padding-top	Top padding of the input
// --placeholder-color	Color of the input placeholder text
// --placeholder-font-style	Font style of the input placeholder text
// --placeholder-font-weight	Font weight of the input placeholder text
// --placeholder-opacity	Opacity of the input placeholder text


export const UserSelect = ({
    selectData, type, placeholder, name, label, labelPlacement, okText,
    disabled, multiple, cancelText, interfaceType, justify, className, ...args
}) => {

    return (
        <IonSelect
            type={type}
            placeholder={placeholder}
            name={name}
            label={label}
            // labelPlacement={labelPlacement}  //"end" ｜ "fixed" ｜ "floating" ｜ "stacked" ｜ "start"
            // okText={okText}
            // disabled={disabled}
            // multiple={multiple}
            // cancelText={cancelText}
            // fill="" //"outline" ｜ "solid" for md
            // interface={interfaceType}    //"action-sheet" ｜ "alert" ｜ "popover"
            // justify={justify}  //"end" ｜ "space-between" ｜ "start"

            // value={value}
            // helperText={helperText}
            // errorText={errorText}
            // required={required}
            // color={color}
            {...args}
        >
            {selectData?.map((item) => {
                <IonSelectOption value={item.value}>{item.text}</IonSelectOption>
            })}
        </IonSelect>
    )
}