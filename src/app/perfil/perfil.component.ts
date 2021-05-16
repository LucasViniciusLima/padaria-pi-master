import { Component, OnInit } from '@angular/core';
import { PerfilfirebaseService} from '../perfilfirebase.service';
import{AngularFireStorage} from '@angular/fire/storage';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})

 


export class PerfilComponent implements OnInit {
  
  perfil: any;
  perfilName: string;
  perfilPhone: string;
  perfilImage: string;
  filePath:String;
 

 



  constructor(private perfilService : PerfilfirebaseService, private afStorage: AngularFireStorage) { }

  ngOnInit(){
    this.perfilService.read_Perfil().subscribe(data => {
    this.perfil = data.map(e => {
    return{
      id: e.payload.doc.id,
      isEdit: false,
      Name: e.payload.doc.data()['Name'],
      Phone: e.payload.doc.data()['Phone'],
    };
    })
    console.log(this.perfil);
    });
    }
    CreateRecord(){
      let record = {};
      record['Name'] = this.perfilName;
      record['Phone'] = this.perfilPhone;
      record['Image'] = 'https://firebasestorage.googleapis.com/v0/b/projeto-integrador-v-547f7.appspot.com/o/'+this.uploadImage()+'?alt=media';
      this.perfilService.create_NewPerfil(record).then(resp => {
        this.perfilName="";
        this.perfilPhone = "";

       
        console.log(resp);

      })
      .catch(error => {
        console.log(error);

      });
    }
    RemoveRecord(rowID) {
        this.perfilService.delete_Perfil(rowID);
    }

    EditRecord(record){
      record.isEdit = true;
      record.EditName = record.Name;
      record.EditPhone = record.Phone;

    }
    UpdateRecord(recordRow){
      let record = {};
      record['Name']=recordRow.EditName;
      record['Phone']= recordRow.EditPhone;
      this.perfilService.update_Perfil(recordRow.id, record);
      recordRow.isEdit = false;
    }
    upload($event) {    
      this.filePath = $event.target.files[0]
    }
    uploadImage(){
      let url = Math.random()  + ''
      this.afStorage.upload(url, this.filePath);
      return url
    }
    
    
    
    
    
    


}

