import { NgModule } from "@angular/core";
import { HasPermissionDir } from "./directive/haspermission.directive";
import { CommonModule } from "@angular/common";
import { PortalModule } from "@angular/cdk/portal";

@NgModule({
declarations:[
    HasPermissionDir,
],
imports:[
    CommonModule,
    PortalModule,

],
exports:[
    HasPermissionDir,
    CommonModule,
]
})
export class SharedModule{}