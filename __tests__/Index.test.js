import { mount } from '@vue/test-utils';
import clickModifier from '../public/control/index'; 


const wrapper = mount(clickModifier);

test('starts all clickmodifiers at 1', () => {
    

    expect(wrapper.comp).toBe("1");
    expect(wrapper.board).toBe("1");
    expect(wrapper.chip).toBe("1");
    expect(wrapper.cpu).toBe("1");
});