import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { RoleService } from '../services/role.service';
@Directive({
  selector: '[hasPermission]',
})
export class HasPermissionDir implements OnInit, AfterViewInit {
  public static instanceOf: HasPermissionDir;
  private requestedRoles: string[] = [];
  // @Input() activities: any = [];
  constructor(
    private templateRef: TemplateRef<any>,
    private eleRef: ElementRef,
    private viewContainer: ViewContainerRef,
    private authService: RoleService
  ) {}

  @Input() set hasPermission(requestedRoles: string[]) {
    this.requestedRoles = requestedRoles;
  }

  ngAfterViewInit() {
  }

  ngOnInit() {
    const { menusToCheck } = this.getActivitiesIfAvailable();
    let hasPermission = this.authService.checkAuthRole(
      this.requestedRoles,
      menusToCheck
    );
    if (hasPermission) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  getActivitiesIfAvailable(): {
    menusToCheck: [];
  } {
    const obj: {
      menusToCheck: [];
    } = {
      menusToCheck: []
    };
    const allAttrs = this.templateRef['_declarationTContainer'].attrs
    if (allAttrs) {
      // check activities
      let isAvailableIndex = allAttrs.findIndex((e:any) => e == 'menu');
      obj.menusToCheck =
        isAvailableIndex != -1
          ? JSON.parse(allAttrs[isAvailableIndex + 1])
          : [];
          return obj;
    } else {
      return obj;
    }
  }

}
