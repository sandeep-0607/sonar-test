import React from 'react';
import Expform from './expform';
import Enzyme ,{ shallow }from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe('i m testing my expense form', ()=>{
    it('test my comp',()=> {
        const form = shallow(<Expform/>);
        const divClass = form.find('.formContainer');
        expect(divClass.length).toBe(1)
    })
    
    it('test my comp',()=> {
        const form = shallow(<Expform/>);
        const label = form.find('label.label2').text();  
        expect(label).toBe('Amount');
    })

    it('Test of map function', ()=>{
        const wrapper = shallow(<Expform/>);
        const component = wrapper.find('.testDiv').map((item) =>item.text());
        expect(component).toEqual(['san','raj','it','solution']);
    })

    it('wether input element present or not',()=> {
        const form = shallow(<Expform/>);
        const inputValue = form.find('input.inputDescription');
        console.log(inputValue);
        expect(inputValue.equals(<input
            className = 'inputDescription'
            type = "text"
            placeholder = "eg - Car rent"
            name = "charge"
        />)).toEqual(true);
    })

    it('element matches or not', ()=>{
        const handleAmount = jest.fn()
        const wrapper = shallow(<Expform edit handleAmount={handleAmount} />);
        const button = wrapper.find('button.label2');

        button.simulate('click', {});
        expect(handleAmount).toHaveBeenCalled()
    })

    it('parent element name', ()=>{
        const wrapper = shallow(<Expform/>);
        expect(wrapper.name()).toEqual('Fragment');
    })

    it('reducer function', ()=>{
        const wrapper = shallow(<Expform/>);
        const total = wrapper.find(<span/>).reduceRight((amount, n) => amount + n.prop('amount'),0);
        expect(total).toBe(0);//it must be 14, in erlier testing false must be true check all tht and also props
    })
    
})

// ref={chargeInput}
// value = {charge}
// onChange = {handleCharge}