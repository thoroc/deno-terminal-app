import React, { useState } from 'npm:react';
import {useApp} from 'npm:ink';
import { Item } from 'npm:ink-select-input/build/SelectInput';
import { SideBar } from './components/side-bar.tsx';
import MainLayout from './layout.tsx';
import ContentPane from './components/content-pane.tsx';

const navItems: Item<string>[] = [
	{label: 'Pane 1', value: 'pane_one'},
	{label: 'Pane 2', value: 'pane_two'},
	{label: 'Exit', value: 'exit'},
];

const App = () => {
	const [currentNavItem, setCUrrentNavItem] = useState(navItems[0]);
	const {exit} = useApp();

	const onNavItemSlected = (item: Item<string>) => {
		if (item.value === 'exit') {
			exit();
		} else {
			setCUrrentNavItem(item);
		}
	};

	return (
		<MainLayout>
			<SideBar navItems={navItems} onSelect={onNavItemSlected} />
			{currentNavItem?.value === 'pane_one' && <ContentPane name={"retro"} text={"Pane 1"} content={"I'm the content area one"} />}
			{currentNavItem?.value === 'pane_two' && <ContentPane name={"rainbow"} text={"Pane 1"} content={"I'm the content area two"}/>}
		</MainLayout>
	);
}

export default App;
