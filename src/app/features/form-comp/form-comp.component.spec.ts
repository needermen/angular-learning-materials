import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormCompComponent } from './form-comp.component';

fdescribe('FormCompComponent', () => {
  let component: FormCompComponent;
  let fixture: ComponentFixture<FormCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCompComponent ],
      imports: [ FormsModule, ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct h3 txt', () => {
    const el: HTMLElement = fixture.nativeElement;
    const h3 = el.querySelector('h3');
    expect(h3.textContent).toEqual('form status INVALID');
  });

  it('should have invalid form, if user pass & confirmPass is not equal', () => {
    const passGroup = component.form.get('passwordGroup');
    expect(component.form.invalid).toBeTruthy();

    passGroup.get('password').setValue('123');
    passGroup.get('confirmPassword').setValue('122');

    expect(component.form.invalid).toBeTruthy();

    passGroup.get('password').setValue('123');
    passGroup.get('confirmPassword').setValue('123');

    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    const h3 = el.querySelector('h3');
    expect(h3.textContent).toEqual('form status VALID');

    expect(component.form.invalid).toBeFalsy();

  });

});
