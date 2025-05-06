import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { SharedModule } from "./shared/shared.module";
import { TasksModule } from "./tasks/tasks.module";

@NgModule({
    declarations: [     // declarations IS USED FOR NON STANDALONE COMPONENTS
        AppComponent, 
        HeaderComponent, 
        UserComponent
    ],
    bootstrap: [ AppComponent ],
    imports: [ BrowserModule, SharedModule, TasksModule ]   // FOR STANDALONE COMPONENTS
})
export class AppModule {

}