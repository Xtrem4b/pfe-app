import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientLinkDialogComponent } from './ingredient-link-dialog.component';

describe('IngredientLinkDialogComponent', () => {
  let component: IngredientLinkDialogComponent;
  let fixture: ComponentFixture<IngredientLinkDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientLinkDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientLinkDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
