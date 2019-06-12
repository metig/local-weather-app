import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitySearchComponent } from './city-search.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatButtonModule, MatIconModule, MatFormFieldModule, MatCardModule, MatToolbarModule,  MatInputModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule} from '@angular/common/http/testing';


describe('CitySearchComponent', () => {
  let component: CitySearchComponent;
  let fixture: ComponentFixture<CitySearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [
        BrowserAnimationsModule,
        HttpClientTestingModule,
        MatFormFieldModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule

      ],
      declarations: [ CitySearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
