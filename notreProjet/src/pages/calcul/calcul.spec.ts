import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculPage } from './calcul';


describe('SimplePage', () => {
    let component: CalculPage;
    let fixture: ComponentFixture<CalculPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                CalculPage
            ],
            imports: [

            ],
            providers: [

            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CalculPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});