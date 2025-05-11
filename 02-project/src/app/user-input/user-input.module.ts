import { NgModule } from "@angular/core";
import { UserInputComponent } from "./user-input.component";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [UserInputComponent],
    imports: [FormsModule],
    exports: [UserInputComponent]  // EXPORTING THE COMPONENT TO BE USED IN OTHER MODULES
})
export class UserInputModule { 

}