import { Dropdown, DropdownTrigger, Button, DropdownMenu, DropdownItem } from "@heroui/react";

interface LayerInsertDropdownProps {
  items: {
    key: string;
    label: string;
    shortcut?: string;
  }[]
  onInsert?: (key: string) => void;
}

export function LayerInsertDropdown({ items, onInsert }: LayerInsertDropdownProps) {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered">Add layer</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dropdown menu with shortcut" variant="flat" color="secondary">
        {items.map((item) => (
          <DropdownItem key={item.key} shortcut={item.shortcut} onPress={() => onInsert?.(item.key)}>
            {item.label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  )
}
