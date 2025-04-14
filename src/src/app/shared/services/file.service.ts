import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { ConstantsRoutes } from "src/assets/config/constants-routes";
const Tracker_ENDPOINT = "/api/";

@Injectable({ providedIn: "root" })
export class FileService {
  constructor(private http: HttpClient) {}

  downloadFile(id:any) {
    return this.http.get(ConstantsRoutes.VETERINARY_EXPORT_URL+id,{ responseType: "blob"} );
  }

  downloadFileBCTrip(fromDate: any, toDate: any, managerId: any): any {
    return this.http.get(
      Tracker_ENDPOINT +
        "trip/getTripBCDetailsDownloadExcel?fromDate=" +
        fromDate +
        "&toDate=" +
        toDate +
        "&managerId=" +
        managerId,
      { responseType: "blob" }
    );
  }

  exportBcTripReport(fromDate: any, toDate: any): any {
    return this.http.get(
      Tracker_ENDPOINT +
        "trip/exportBcTripReport?fromDate=" +
        fromDate +
        "&toDate=" +
        toDate,
      { responseType: "blob" }
    );
  }

  downloadFileTrip(fromDate: any, toDate: any, managerId: any): any {
    return this.http.get(
      Tracker_ENDPOINT +
        "trip/getTripKMDetailsDownloadExcel?fromDate=" +
        fromDate +
        "&toDate=" +
        toDate +
        "&managerId=" +
        managerId,
      { responseType: "blob" }
    );
  }

  exportHerbalGardensListData(fromDate: any, toDate: any): any {
    return this.http.get(
      Tracker_ENDPOINT +
        "veterinary/export/exportHerbalGardensListData?fromDate=" +
        fromDate +
        "&toDate=" +
        toDate,
      { responseType: "blob" }
    );
  }
  monthlyAttendanceEmployeeWise(fromDate: any, toDate: any): any {
    return this.http.get(
      Tracker_ENDPOINT +
        "veterinary/export/monthlyAttendanceEmployeeWise?fromDate=" +
        fromDate +
        "&toDate=" +
        toDate,
      { responseType: "blob" }
    );
  }
  exportEVMImplementationListData(fromDate: any, toDate: any): any {
    return this.http.get(
      Tracker_ENDPOINT +
        "veterinary/export/ExportEVMImplementationListData?fromDate=" +
        fromDate +
        "&toDate=" +
        toDate,
      { responseType: "blob" }
    );
  }

  exportAnimalWelfareImplementationListdata(fromDate: any, toDate: any): any {
    return this.http.get(
      Tracker_ENDPOINT +
        "veterinary/export/ExportAnimalWelfareImplementationListdata?fromDate=" +
        fromDate +
        "&toDate=" +
        toDate,
      { responseType: "blob" }
    );
  }

  getDailyAttendanceEmployeewiseData(
    fromDate: any,
    toDate: any,
    employeeId: any
  ): any {
    return this.http.get(
      Tracker_ENDPOINT +
        "veterinary/export/getDailyAttendanceEmployeewiseData?fromDate=" +
        fromDate +
        "&toDate=" +
        toDate +
        "&employeeId=" +
        employeeId,
      { responseType: "blob" }
    );
  }

  exportBMCListData(bMCId: any): any {
    return this.http.get(
        "api/bMC/exportBMCListData?bMCId=" +
        bMCId,
      { responseType: "blob" }
    );
  }
}
