import React from 'react';
import { Dropdown, DropdownItem } from 'flowbite-react';

export default function FilterProds() {
    return (
        <div className="flex justify-end my-2">
            <Dropdown label="products" dismissOnClick={false} size="sm" placement='left'>
                <DropdownItem>Yash</DropdownItem>
                <DropdownItem>Lala</DropdownItem>
                <DropdownItem>Moti</DropdownItem>
                <DropdownItem>Masala</DropdownItem>
            </Dropdown>
        </div>
    );
}
