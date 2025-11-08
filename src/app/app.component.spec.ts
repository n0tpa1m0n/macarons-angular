import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AdvantageComponent } from './components/advantage/advantage.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ButtonHoverDirective } from './directives/button-hover.directive';
import { TruncatePipe } from './pipes/truncate.pipe';
import { PhoneFormatPipe } from './pipes/phone-format.pipe';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        AdvantageComponent,
        ProductCardComponent,
        ButtonHoverDirective,
        TruncatePipe,
        PhoneFormatPipe
      ],
      providers: [
        ProductService,
        CartService
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have phone number', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.phoneNumber).toBe('375293689868');
  });

  it('should have cart visible', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.showCart).toBe(true);
  });

  it('should have products array', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.items).toBeDefined();
    expect(Array.isArray(app.items)).toBe(true);
  });

  it('should have advantages array', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.cards).toBeDefined();
    expect(Array.isArray(app.cards)).toBe(true);
    expect(app.cards.length).toBeGreaterThan(0);
  });
});
