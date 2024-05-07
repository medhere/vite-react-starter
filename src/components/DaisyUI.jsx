import { FormError } from "./Form"

export const UserInput = ({ type, form_props, props, label, altlabel, placeholder, bottomlabel, altbottomlabel, errors = null, field_name = null }) => {
    return (
        <div className="form-control w-full">
            <label className="label">
                <span className="label-text">{label}</span>
                <span className="label-text-alt">{altlabel}</span>
            </label>
            <input type={type} placeholder={placeholder} className="input input-bordered input-primary" {...form_props} {...props} />
            {/* <FormError errors={errors} field_name={field_name} /> */}
            <label className="label">
                <span className="label-text-alt">{bottomlabel}</span>
                <span className="label-text-alt">{altbottomlabel}</span>
            </label>
        </div>
    )
}


export const UserSelect = ({ form_props, props, label, altlabel, placeholder, bottomlabel, altbottomlabel, errors = null, field_name = null, children }) => {
    return (
        <div className="form-control w-full">
            <label className="label">
                <span className="label-text">{label}</span>
                <span className="label-text-alt">{altlabel}</span>
            </label>
            <select className="select select-primary select-bordered" {...form_props} {...props}>
                {children}
            </select>
            <label className="label">
                <span className="label-text-alt">{bottomlabel}</span>
                <span className="label-text-alt">{altbottomlabel}</span>
            </label>
        </div>
    )
}


export const UserTextArea = ({ type, form_props, props, label, altlabel, placeholder, bottomlabel, altbottomlabel, errors = null, field_name = null }) => {
    return (
        <div className="form-control w-full">
            <label className="label">
                <span className="label-text">{label}</span>
                <span className="label-text-alt">{altlabel}</span>
            </label>
            <textarea class="textarea textarea-primary" placeholder={placeholder} {...form_props} {...props}></textarea>
            {/* <FormError errors={errors} field_name={field_name} /> */}
            <label className="label">
                <span className="label-text-alt">{bottomlabel}</span>
                <span className="label-text-alt">{altbottomlabel}</span>
            </label>
        </div>
    )
}


export const UserCheckBox = ({ type, form_props, props, label, errors = null, field_name = null }) => {
    return (
        <div className="form-control">
            <label className="label cursor-pointer">
                <span className="label-text">{label}</span>
                <input type="checkbox" {...form_props} {...props} className="checkbox checkbox-primary" />
            </label>
        </div>
    )
}


export const UserRadio = ({ type, form_props, props, label, errors = null, field_name = null }) => {
    return (
        <div className="form-control">
            <label className="label cursor-pointer">
                <span className="label-text">{label}</span>
                <input type="radio" className="radio radio-primary" {...form_props} {...props} />
            </label>
        </div>
    )
}


export const UserToggle = ({ type, form_props, props, label, errors = null, field_name = null }) => {
    return (
        <div className="form-control">
            <label className="label cursor-pointer">
                <span className="label-text">{label}</span>
                <input type="checkbox" className="toggle toggle-primary" {...form_props} {...props} />
            </label>
        </div>
    )
}
