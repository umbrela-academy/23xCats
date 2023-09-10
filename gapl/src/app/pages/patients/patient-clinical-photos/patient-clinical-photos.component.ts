import { ChangeDetectorRef, Component } from '@angular/core';
import { ClinicalImageDetail } from './clinical-image-detail.model';

import { FormBuilder, FormControl } from '@angular/forms';

const localPlaceholder = "assets/img/profile-placeholder.png";
@Component({
  selector: 'gapl-patient-clinical-photos',
  templateUrl: './patient-clinical-photos.component.html',
  styleUrls: ['./patient-clinical-photos.component.scss'],
})
export class PatientClinicalPhotosComponent {

  imagesWithDetails: ClinicalImageDetail[] = [];

  photoForm = this.fb.group({
    photos: new FormControl<Array<string | ArrayBuffer | null>>([])
  });

  editFile: boolean = true;
  removeUpload: boolean = true;

  displaySlides = false;
  activeIndex = 0;

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 4
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 2
    }
  ];

  constructor(private fb: FormBuilder, private cd: ChangeDetectorRef) { }

  uploadFiles(event: any) {
    console.log("upload event", event);
    const files: FileList = event.target.files;
    if (event.target.files && event.target.files.length) {
      Array.from(files).forEach(file => {
        console.log("file", file, file.name);
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          if (!reader.result) return;
          this.imagesWithDetails = [
            ...this.imagesWithDetails,
            {
              url: reader.result,
              name: file.name.split('.').filter((_, i, arr) => arr.length !== i + 1).join('.'),
              detail: new Date(file.lastModified).toString().split('GMT')[0].substring(4)
            }
          ];
          this.editFile = false;
          this.removeUpload = true;
        };
      });
      this.photoForm.patchValue({
        photos: this.imagesWithDetails.map(i => i.url),
      });
      this.cd.markForCheck();
    }
  }

  removeUploadedFiles() {
    this.editFile = true;
    this.removeUpload = false;
    this.photoForm.patchValue({
      photos: null,
    });
  }

  onSubmit() {
    if (!this.photoForm.valid) {
      console.log("invalid");
    } else {
      console.log(this.photoForm.value);
    }
  }

  imageClick(url: string | ArrayBuffer) {
    console.log("a", this.displaySlides);
    const index = this.imagesWithDetails.findIndex(v => v.url === url);
    this.activeIndex = index;
    this.displaySlides = true;
  }

  visibilitySync(event: boolean) {
    console.log("on visible change", event);
    if (event === false) this.displaySlides = false;
  }

  removePic(url: string | ArrayBuffer) {
    this.imagesWithDetails = this.imagesWithDetails.filter(v => v.url !== url);
  }
}
