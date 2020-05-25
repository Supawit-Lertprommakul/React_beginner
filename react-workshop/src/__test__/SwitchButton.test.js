import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SwitchButtonHooks from '../SwitchButtonHooks'

test('p', () => {
    const { getByText, debug} = render(<SwitchButtonHooks/>)
    const btn = getByText('TURN ON')
    // debug()
    fireEvent.click(btn)
    expect(btn.textContent).toBe('TURN OFF')
    // debug()
})

test('', () => {
    const { getByText, debug} = render(<SwitchButtonHooks isOn={true} />)
    const btn = getByText('TURN ON')
    fireEvent.click(btn)
    expect(btn.textContent).toBe('TURN OFF')
})