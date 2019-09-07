import {ModuleWithProviders, NgModule} from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import {CORPORATE_THEME, COSMIC_THEME, DARK_THEME, DEFAULT_THEME, NbThemeModule} from "@nebular/theme";
import {ADJUTANT_DEFAULT_THEME} from "./theme.adjutant.default";

@NgModule({
  declarations: [],
  imports: [
    SharedModule
  ]
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ThemeModule,
      providers: [
        ...NbThemeModule.forRoot(
          {
            name: 'adjutantDefault',
          },
          [DEFAULT_THEME, COSMIC_THEME, CORPORATE_THEME, DARK_THEME, ADJUTANT_DEFAULT_THEME],
        ).providers,
      ],
    };
  }
}
