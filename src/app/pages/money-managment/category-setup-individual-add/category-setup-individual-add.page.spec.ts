import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CategorySetupIndividualAddPage } from './category-setup-individual-add.page';

describe('CategorySetupIndividualPage', () => {
  let component: CategorySetupIndividualAddPage;
  let fixture: ComponentFixture<CategorySetupIndividualAddPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [CategorySetupIndividualAddPage],
        imports: [IonicModule.forRoot()],
      }).compileComponents();

      fixture = TestBed.createComponent(CategorySetupIndividualAddPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
