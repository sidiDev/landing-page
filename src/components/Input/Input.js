export default ({ onChange, type, placeholder, className, id }) => {
    return (
        <input
            className={ `${className} outline-none border p-2.5 rounded-md focus:border-indigo-500` }
            type={ type }
            onChange={ (e) => onChange(e.target.value) }
            placeholder={ placeholder }
            id={ id }
        />
    )
}