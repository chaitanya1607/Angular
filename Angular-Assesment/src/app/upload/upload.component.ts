import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-upload",
  templateUrl: "./upload.component.html",
  styleUrls: ["./upload.component.css"]
})
export class UploadComponent implements OnInit {
  certificates: File[] = [];
  medicalReports: File[] = [];
  isCertificatesEmpty = false;
  isMedicalReportsEmpty = false;

  constructor() {}

  ngOnInit() {
    this.isCertificatesEmpty = true;
    this.isMedicalReportsEmpty = true;
  }

  certificateUpload(event) {
    if (
      event.target.files[0].type === "application/pdf" ||
      event.target.files[0].type === "image/jpeg"
    ) {
      this.certificates.push(event.target.files[0]);
      this.isCertificatesEmpty = false;
    } else {
      alert("upload only pdf or JPEG");
    }
  }

  deleteCertificate(certificateName) {
    for (var i = 0; i < this.certificates.length; i++) {
      if (this.certificates[i].name == certificateName) {
        this.certificates.splice(i, 1);
        break;
      }
    }
    if (this.certificates.length == 0) {
      this.isCertificatesEmpty = true;
    }
  }

  medicalRecordUpload(event) {
    if (
      event.target.files[0].type === "application/pdf" ||
      event.target.files[0].type === "image/jpeg"
    ) {
      this.medicalReports.push(event.target.files[0]);
      this.isMedicalReportsEmpty = false;
    } else {
      alert("upload only pdf or JPEG");
    }
  }

  deleteMedicalRecord(recordName) {
    for (var i = 0; i < this.medicalReports.length; i++) {
      if (this.medicalReports[i].name == recordName) {
        this.medicalReports.splice(i, 1);
        break;
      }
    }
    if (this.medicalReports.length == 0) {
      this.isMedicalReportsEmpty = true;
    }
  }
}
