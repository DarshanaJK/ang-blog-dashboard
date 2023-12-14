import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../../environment/environment";
import {BrowserModule} from "@angular/platform-browser";
import {NgForm} from "@angular/forms";


@Component({
  imports: [
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    BrowserModule
  ],
  selector: 'app-categories',
  standalone: true,
  styleUrl: './categories.component.css',
  templateUrl: './categories.component.html'
})

export class CategoriesComponent implements OnInit{

  constructor( private afs: AngularFirestore ) { }

  ngOnInit() {
  }

  onSubmit (formData: any) {                            //check again
    let categoryData = {
      category: formData.value.category
    }

    this.afs.collection("categories").add(categoryData).then(docRef =>  {
      console.log(docRef);
    })
      .catch(err => { console.log(err) })

  }
}

