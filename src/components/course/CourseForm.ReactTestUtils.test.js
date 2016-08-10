import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';

function setup(saving) {
    let props = {
        course: {},
        saving: saving,
        errors: {},
        onSave: () => {},
        onChange: () => {}
    };

    let renderer = TestUtils.createRenderer();
    renderer.render(<CourseForm {...props} />);

    let output = renderer.getRenderOutput();

    return {
        props,
        output,
        renderer
    };
}

describe('CourseForm via React Test Utils', () => {
    it('renders form', () => {
        const { output } = setup();
        expect(output.type).toBe('form');
    });

    it('save button labeled "Save" when not saving', () => {
        const { output } = setup(false);
        const submitButton = output.props.children[4];
        expect(submitButton.props.value).toBe('Save');
    });

    it('save button labeled "Save..." when saving', () => {
        const { output } = setup(true);
        const submitButton = output.props.children[4];
        expect(submitButton.props.value).toBe('Saving...');
    });
});