import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { LoginPage } from './login.page';
import { AuthService } from 'src/app/services/firebase/authentication/auth.service';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let authServiceMock: jasmine.SpyObj<AuthService>;
  let navCtrlMock: jasmine.SpyObj<NavController>;

  beforeEach(waitForAsync(() => {
    authServiceMock = jasmine.createSpyObj('AuthService', ['iniciarSesion']);
    navCtrlMock = jasmine.createSpyObj('NavController', ['navigateForward']);

    TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [IonicModule.forRoot(), FormsModule],
      providers: [
        { provide: AuthService, useValue: authServiceMock },
        { provide: NavController, useValue: navCtrlMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
  }));

  it('debería iniciar sesión y redirigir al main-drive/main si la autenticación es exitosa', () => {
    const email = 'usuario@example.com';
    const password = 'contraseña123';

    // Configure el servicio para simular una autenticación exitosa
    authServiceMock.iniciarSesion.and.returnValue(Promise.resolve());

    // Configure los valores de entrada en el componente
    component.email = email;
    component.password = password;

    // LLamo a la función de inicio de sesión
    component.iniciarSesion();

    // Aqui verificara que isLoading sea falso después de la autenticación
    expect(component.isLoading).toBeFalse();

    // Aqui verifica que se llamó al método de redirección con la ruta correcta
    expect(navCtrlMock.navigateForward).toHaveBeenCalledWith('main-drive/main');
  });

  it('debería manejar errores al iniciar sesión', () => {
    const errorMessage = 'Error al iniciar sesión';

    // Configure el servicio para simular un error al iniciar sesión
    authServiceMock.iniciarSesion.and.returnValue(Promise.reject(errorMessage));

    // LLamo a la función de inicio de sesión
    component.iniciarSesion();

    // Verifico que isLoading sea falso después de manejar el error
    expect(component.isLoading).toBeFalse();

    // Verifico que se haya registrado el error en la consola
    expect(console.error).toHaveBeenCalledWith('Error al iniciar sesión: ', errorMessage);
  });
});
