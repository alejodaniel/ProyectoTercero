import { Categoria1Module } from './categoria1.module';

describe('Categoria1Module', () => {
  let categoria1Module: Categoria1Module;

  beforeEach(() => {
    categoria1Module = new Categoria1Module();
  });

  it('should create an instance', () => {
    expect(categoria1Module).toBeTruthy();
  });
});
