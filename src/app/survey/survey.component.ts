import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})

export class SurveyComponent implements OnInit {
    private surveyForm: FormGroup;
    private likeBest: Array<String> = ['Students', 'Location', 'Campus', 'Atmosphere', 'Dorms', 'Sports'];
    private  selectedBest = [];

    constructor(private http: HttpClient, private _fb: FormBuilder) {

        this.surveyForm = new FormGroup({
            firstName: new FormControl(),
            lastName: new FormControl(),
            addrStreet: new FormControl(),
            addrCity: new FormControl(),
            addrState: new FormControl(),
            addrZip: new FormControl(),
            phone: new FormControl(),
            email: new FormControl(),
            date: new FormControl(),
            likeBest: this.addLikeBest(),
            howHeard: new FormControl(),
            recommendLikelihood: new FormControl()
        });
  }

  addLikeBest() {
        const  arr = this.likeBest.map(e => {
            return this._fb.control(false)
        })
     return this._fb.array(arr);
  }

  get likeBestAry() {
        return <FormArray>this.surveyForm.get('likeBest')
  }

    getSelectedBestValues() {
        this.selectedBest = [];
        this.likeBestAry.controls.forEach((control, i) => {
            if (control.value) {
                this.selectedBest.push(this.likeBest[i])
            }
        })
    }

  ngOnInit(): void {
  }

  private postData() {
     console.log(this.selectedBest)
    const inputData = {
                   id: 1000,
                   nameFirst: this.surveyForm.value.firstName,
                   nameLast: this.surveyForm.value.lastName,
                   addrStreet: this.surveyForm.value.addrStreet,
                   addrCity: this.surveyForm.value.addrCity,
                   addrState: this.surveyForm.value.addrState,
                   addrZip: this.surveyForm.value.addrZip,
                   phone: this.surveyForm.value.phone,
                   email: this.surveyForm.value.email,
                   date: this.surveyForm.value.date,
                   likeBest: this.selectedBest.join(),
                   howHeard: this.surveyForm.value.howHeard,
                   recommendLikelihood: this.surveyForm.value.recommendLikelihood
    }

    this.http.post<any>('http://localhost:8080/survey-submit', inputData).subscribe({
      next: data => {
        console.log(data.id);
      }
    })
  }
}
