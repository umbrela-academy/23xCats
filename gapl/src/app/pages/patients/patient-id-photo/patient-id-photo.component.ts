import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

const localPlaceholder = "assets/img/profile-placeholder.png";

@Component({
  selector: 'gapl-patient-id-photo',
  templateUrl: './patient-id-photo.component.html',
  styleUrls: ['./patient-id-photo.component.scss'],
})
export class PatientIdPhotoComponent {

  idPhotoForm = this.fb.group({
    photo: new FormControl<string | ArrayBuffer | null>(null)
  });

  imageUrl: string | null | ArrayBuffer = localPlaceholder;
  editFile: boolean = true;
  removeUpload: boolean = true;

  constructor(private fb: FormBuilder, private cd: ChangeDetectorRef) { }

  uploadFile(event: any) {
    const reader = new FileReader();
    const file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.imageUrl = reader.result;
        this.idPhotoForm.patchValue({
          photo: reader.result,
        });
        this.editFile = false;
        this.removeUpload = true;
      };

      this.cd.markForCheck();
    }
  }

  removeUploadedFile() {
    this.imageUrl = localPlaceholder;
    this.editFile = true;
    this.removeUpload = false;
    this.idPhotoForm.patchValue({
      photo: null,
    });
  }

  onSubmit() {
    if (!this.idPhotoForm.valid) {
      console.log("invalid");
    } else {
      console.log(this.idPhotoForm.value);
    }
  }

}
