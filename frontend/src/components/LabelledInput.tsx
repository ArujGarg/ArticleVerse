
interface LabelledInputType {
    label: string
    placeholder: string
}

export const LabelledInput = ({label, placeholder} : LabelledInputType) => {
    return (
        <div>
            <div>
                {label}
            </div>
            <div>
                <input type="text" placeholder={placeholder}></input>
            </div>
        </div>
    )
}