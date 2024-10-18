import React from "npm:react";
import SelectInput from "npm:ink-select-input";
import { Box } from "npm:ink";
import { Item } from 'npm:ink-select-input/build/SelectInput';


export type SideBarProps = {
	navItems: Array<Item<string>>;
	onSelect: (item: Item<string>) => void;
};

export const SideBar = ({navItems, onSelect}: SideBarProps) => {
	return (
		<Box
			borderStyle={'single'}
			height={'100%'}
			width={40}
			paddingTop={1}
			paddingBottom={1}
			paddingLeft={2}
			paddingRight={2}
		>
			<SelectInput items={navItems} onSelect={onSelect} />
		</Box>
	);
}