import Adapter from 'enzyme-adapter-react-15';
import MakeRecipe from './index'
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() })

describe('<MakeRecipe /> Mounted', () => {
    beforeEach(() => {
        wrapper = shallow(<MakeRecipe />);
      });
    it('El form debe tener un label que diga: "Nombre / Name:"', () => {
        const { container } = render(<MakeRecipe />)
        const element = container.querySelectorAll('label')[0]
        expect(element.innerHTML).toBe('Nombre / Name:');
    });
    it('El form debe tener un label que diga: "Descripcion / Description:"', () => {
        const { container } = render(<MakeRecipe />)
        const element = container.querySelectorAll('label')[0]
        expect(element.innerHTML).toBe('Descripcion / Description:');
    });
    it('El form debe tener un label que diga: "Tipo/s de Plato/s / Type of Dish:"', () => {
        const { container } = render(<MakeRecipe />)
        const element = container.querySelectorAll('label')[0]
        expect(element.innerHTML).toBe('Tipo/s de Plato/s / Type of Dish:');
    });
    it('El form debe tener un label que diga: "Puntaje / Score:"', () => {
        const { container } = render(<MakeRecipe />)
        const element = container.querySelectorAll('label')[0]
        expect(element.innerHTML).toBe('Puntaje / Score:');
    });
    it('El form debe tener un label que diga: "Puntaje Saludable / Healthy Score:"', () => {
        const { container } = render(<MakeRecipe />)
        const element = container.querySelectorAll('label')[0]
        expect(element.innerHTML).toBe('Puntaje Saludable / Healthy Score:');
    });
    it('El form debe tener un label que diga: "Instrucciones / Steps:"', () => {
        const { container } = render(<MakeRecipe />)
        const element = container.querySelectorAll('label')[0]
        expect(element.innerHTML).toBe('Instrucciones / Steps:');
    });
    it('El form debe tener un label que diga: "Imagen / Image:"', () => {
        const { container } = render(<MakeRecipe />)
        const element = container.querySelectorAll('label')[0]
        expect(element.innerHTML).toBe('Imagen / Image:');
    });
  
    it('El form debe tener un input con name "name" y type "text"', () => {
      const { container } = render(<MakeRecipe />)
      const element = container.querySelectorAll('input')[0]
      expect(element.type).toBe('text');
      expect(element.name).toBe('name');
    });

    it('El form debe tener un input con name "description" y type "text"', () => {
        const { container } = render(<MakeRecipe />)
        const element = container.querySelectorAll('input')[0]
        expect(element.type).toBe('text');
        expect(element.name).toBe('description');
      });
      it('El form debe tener un input con name "dishes" y type "text"', () => {
        const { container } = render(<MakeRecipe />)
        const element = container.querySelectorAll('input')[0]
        expect(element.type).toBe('text');
        expect(element.name).toBe('dishes');
      });
      it('El form debe tener un input con name "score" y type "text"', () => {
        const { container } = render(<MakeRecipe />)
        const element = container.querySelectorAll('input')[0]
        expect(element.type).toBe('text');
        expect(element.name).toBe('score');
      });
      it('El form debe tener un input con name "healthy" y type "text"', () => {
        const { container } = render(<MakeRecipe />)
        const element = container.querySelectorAll('input')[0]
        expect(element.type).toBe('text');
        expect(element.name).toBe('healthy');
      });
      it('El form debe tener un input con name "image" y type "text"', () => {
        const { container } = render(<MakeRecipe />)
        const element = container.querySelectorAll('input')[0]
        expect(element.type).toBe('text');
        expect(element.name).toBe('image');
      });
  });