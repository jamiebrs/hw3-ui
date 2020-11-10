import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-surveylist',
  templateUrl: './surveylist.component.html',
  styleUrls: ['./surveylist.component.css']
})
export class SurveylistComponent implements OnInit {
  private data: Object;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchPosts();
  }

  private fetchPosts() {
    this.http.get('http://localhost:8080/old-surveys').subscribe(posts => {
      console.log(posts)
      this.data = posts
    })
  }

}
