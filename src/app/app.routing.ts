import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import {AboutComponent} from './about/about.component';
import {LinksComponent} from './links/links.component';
import {SurveyComponent} from './survey/survey.component';
import {SurveylistComponent} from './surveylist/surveylist.component';

const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index',                component: ComponentsComponent },
    { path: 'nucleoicons',          component: NucleoiconsComponent },
    { path: 'about', component: AboutComponent},
    {path: 'links', component: LinksComponent},
    {path: 'survey', component: SurveyComponent},
    {path: 'surveylist', component: SurveylistComponent}
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
