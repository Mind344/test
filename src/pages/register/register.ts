import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActionSheetController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  public form: FormGroup;
  public id_card: any;
  public name: any;
  //public lname: any;
  public tel: any;
  public email: any;
  public password: any;

  // Flag to be used for checking whether we are adding/editing an entry
  public isEdited: boolean = false;
  // Flag to hide the form upon successful completion of remote operation
  public hideForm: boolean = false;
  // Property to help ste the page title
  public pageTitle: string;
  // Property to store the recordID for when an existing entry is being edited
  //public recordID: any = null;
  private baseURI: string = "http://localhost/meechok/";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController,
    public http: Http,
    public fb: FormBuilder,
    public toastCtrl: ToastController) {

    this.form = fb.group({
      "id_card": ["", Validators.required],
      "name": ["", Validators.required],
      //"lname": ["", Validators.required],
      "tel": ["", Validators.required],
      "email": ["", Validators.required],
      "password": ["", Validators.required]
    });
  }

  ionViewWillEnter() {
    this.resetFields();

    if (this.navParams.get("record")) {
      this.isEdited = true;
      this.selectEntry(this.navParams.get("record"));
      this.pageTitle = 'Amend entry';
    }
    else {
      this.isEdited = false;
      this.pageTitle = 'Create entry';
    }
  }

  resetFields(): void {
    this.id_card = "";
    this.name = "";
    //this.lname = "";
    this.tel = "";
    this.email = "";
    this.password = "";
  }

  sendNotification(message): void {
    let notification = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    notification.present();
  }

  selectEntry(item) {
    this.id_card = item.id_card;
    this.name = item.name;
    //this.lname = item.id_card;
    this.tel = item.tel;
    this.email = item.email;
    this.password = item.password;
    //this.recordID = item.ser;
  }

  createEntry(id_card, name, tel, email, password) {
    let body: string = "key=create&id_card=" + id_card + "&name=" + name + "&tel=" + tel + "&email=" + email + "&password=" + password,
      type: string = "application/x-www-form-urlencoded; charset=UTF-8",
      headers: any = new Headers({ 'Content-Type': type }),
      options: any = new RequestOptions({ headers: headers }),
      url: any = this.baseURI + "function.php";

    this.http.post(url, body, options)
      .subscribe((data) => {
        // If the request was successful notify the user
        if (data.status === 200) {
          let alert = this.alertCtrl.create({
            title: '<center style="font-family: \'bangna\';">\
                    <img src="img/smile1.png" width="50">\n \
                    </center>\
                    ',
            subTitle: ' <center>ยินดีต้อนรับสมาชิก<br> \
                        <h3>มีโชคพลาซ่า</h3>\
                        </center>\
                      ',
            buttons: ['ตกลง']
          });
          alert.present();
        }
        else {
          let alert = this.alertCtrl.create({
            title: '<center style="font-family: \'bangna\';">\
          <img src="img/sad1.png" width="50">\n \
          </center>\
          ',
            subTitle: ' <center>บันทึกข้อมูลไม่สำเร็จ<br> \
          กรุณาตรวจสอบข้อมูลอีกครั้ง\
          </center>\
    ',
            buttons: ['ตกลง', 'ยกเลิก']


          });
          alert.present();
        }
      });
  }

  updateEntry(id_card, name,tel, email, password) {
    let body: string = "key=create&id_card=" + id_card + "&name=" + name +"&tel=" + tel + "&email=" + email + "&password=" + password ,
      type: string = "application/x-www-form-urlencoded; charset=UTF-8",
      headers: any = new Headers({ 'Content-Type': type }),
      options: any = new RequestOptions({ headers: headers }),
      url: any = this.baseURI + "function.php";

    this.http.post(url, body, options)
      .subscribe(data => {
        // If the request was successful notify the user
        if (data.status === 200) {
          this.hideForm = true;
          this.sendNotification(`Congratulations : ${name} was successfully updated`);
        }
        // Otherwise let 'em know anyway
        else {
          this.sendNotification('Something went wrong!');
        }
      });
  }

  saveEntry() {
    let id_card: string = this.form.controls["id_card"].value,
      name: string = this.form.controls["name"].value,
      //lname: string = this.form.controls["lname"].value,
      tel: string = this.form.controls["tel"].value,
      email: string = this.form.controls["email"].value,
      password: string = this.form.controls["password"].value;

    if (this.isEdited) {
      this.updateEntry(id_card, name, tel, email, password);
    }
    else {
      this.createEntry(id_card, name,  tel, email, password);
    }
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  proPic() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'เพิ่มรูปโปรไฟล์',
      buttons: [
        {
          text: 'เลือกรูปจากคลัง',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        }, {
          text: 'ถ่ายรูป',
          handler: () => {
            console.log('Archive clicked');
          }
        }, {
          text: 'ยกเลิก',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
