import { createAction } from '@reduxjs/toolkit';

export const openPanelAction = createAction('openPanelAction');
export const closePanelAction = createAction('closePanelAction');

export function openBottomPanel(name, snapTo) {
    return openPanelAction({ name, snapTo });
}

export function closeBottomPanel() {
    return closePanelAction();
}
