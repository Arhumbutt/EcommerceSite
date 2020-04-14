import {Injectable} from '@angular/core';

@Injectable()
export class Config {
public static api: String = 'https://ownstyle.herokuapp.com/';
   public static Imageurl: string = 'https://storage.choicegenie.com/media/';
    public  static  Imageurlget = 'https://storage.choicegenie.com/images/';
   public  static  Imageurlupload = 'https://storage.kingbestmall.com/upload_image.php';
   public static pdfupload='https://storage.choicegenie.com/upload.php';
}

