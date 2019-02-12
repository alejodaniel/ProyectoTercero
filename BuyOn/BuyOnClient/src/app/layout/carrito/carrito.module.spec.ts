import { CarritoModule } from './carrito.module';

describe('CarritoModule', () => {
  let carritoModule: CarritoModule;

  beforeEach(() => {
    carritoModule = new CarritoModule();
  });

  it('should create an instance', () => {
    expect(carritoModule).toBeTruthy();
  });
});
