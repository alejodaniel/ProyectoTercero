import { Categoria2Module } from './categoria2.module';

describe('Categoria2Module', () => {
  let categoria2Module: Categoria2Module;

  beforeEach(() => {
    categoria2Module = new Categoria2Module();
  });

  it('should create an instance', () => {
    expect(categoria2Module).toBeTruthy();
  });
});
