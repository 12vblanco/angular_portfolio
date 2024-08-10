import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { SuccessComponent } from './success.component';

describe('SuccessComponent', () => {
  let component: SuccessComponent;
  let fixture: ComponentFixture<SuccessComponent>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    await TestBed.configureTestingModule({
      declarations: [ SuccessComponent ],
      providers: [{ provide: Router, useValue: mockRouter }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to home after timeout', (done) => {
    spyOn(component, 'handleBackHome').and.callThrough();
    component.ngOnInit();

    setTimeout(() => {
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/']);
      done();
    }, 4000);
  });

  it('should clear timeout on destroy', () => {
    spyOn(window, 'clearTimeout');
    component.ngOnDestroy();
    expect(clearTimeout).toHaveBeenCalledWith((component as any).timer);
  });
});
