import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'

export default function CustomDropDown(){
    return(

        <DropdownButton  variant="secondary" id="category-dropdown" title="Всички категории">
                <Dropdown.Header>Всички категории</Dropdown.Header>
                <Dropdown.Item>Category 1</Dropdown.Item>
                <Dropdown.Item>Category 2</Dropdown.Item>
        </DropdownButton>
    )
}