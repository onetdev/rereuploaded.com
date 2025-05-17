import { Dropdown, DropdownTrigger, Button, DropdownMenu, DropdownItem } from "@heroui/react";

export function LayerInsertDropdown() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered">Add layer</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dropdown menu with shortcut" variant="flat" color="secondary">
        <DropdownItem key="new" shortcut="⌘N">
          New file
        </DropdownItem>
        <DropdownItem key="copy" shortcut="⌘C">
          Copy link
        </DropdownItem>
        <DropdownItem key="edit" shortcut="⌘⇧E">
          Edit file
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
