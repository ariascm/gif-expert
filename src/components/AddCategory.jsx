import PropTypes from "prop-types"
import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        if (inputValue.trim().length <= 1) return
        // setCategories(categories => [inputValue, ...categories])
        onNewCategory(inputValue.trim())
        setInputValue('')
    }

    return (
        // <form onSubmit={event => onSubmit(event)}>
        <form onSubmit={onSubmit} aria-label="formLabel">
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                // onChange={event => onInputChange(event)}
                onChange={onInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}