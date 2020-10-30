import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public firestore: AngularFirestore, private http: HttpClient) { }

  getDocs(collection: string) {
    return this.firestore.collection(collection).snapshotChanges();
  }

  getDocsPromise(collection: string) {
    return this.firestore.collection(collection).get();
  }

  getDoc(collection: string, documentId: string) {
    return this.firestore.collection(collection).doc(documentId).snapshotChanges();
  }

  getDocPromise(collection: string, documentId: string) {
    return this.firestore.collection(collection).doc(documentId).get();
  }

  getDocQuery(collection: string, key: string, equal: boolean, value: any) {
    return this.firestore.collection(collection, ref => ref.where(key, (equal ? '==' : '<='), value)).snapshotChanges();
  }

  addDoc2(collection: string, documentId: string, doc: any) {
    return this.firestore.collection(collection).doc(documentId).set(doc);
  }

  addDoc(collection: string, doc: any) {
    return this.firestore.collection(collection).add(doc);
  }

  updateDoc(collection: string, documentId: string, obj: any) {
    return this.firestore.collection(collection).doc(documentId).update(obj);
  }

  deleteDoc(collection: string, documentId: string) {
    return this.firestore.collection(collection).doc(documentId).delete();
  }

  sendEmail(usuario: any, cuerpo: any, subject: string) {
    this.http.post(`https://us-central1-restaurante-42e1e.cloudfunctions.net/mailer`, {
      to: usuario.correo,
      message: cuerpo,
      subject,
      // html: this.TemplateHtml(cuerpo)
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html xmlns="http://www.w3.org/1999/xhtml">
        <head>
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Neopolitan Confirm Email</title>
          <!-- Designed by https://github.com/kaytcat -->
          <!-- Robot header image designed by Freepik.com -->
      
          <style type="text/css">
            @import url(http://fonts.googleapis.com/css?family=Droid+Sans);
      
            /* Take care of image borders and formatting */
      
            img {
              max-width: 600px;
              outline: none;
              text-decoration: none;
              -ms-interpolation-mode: bicubic;
            }
      
            a {
              text-decoration: none;
              border: 0;
              outline: none;
              color: #bbbbbb;
            }
      
            a img {
              border: none;
            }
      
            /* General styling */
      
            td,
            h1,
            h2,
            h3 {
              font-family: Helvetica, Arial, sans-serif;
              font-weight: 400;
            }
      
            td {
              text-align: center;
            }
      
            body {
              -webkit-font-smoothing: antialiased;
              -webkit-text-size-adjust: none;
              width: 100%;
              height: 100%;
              color: #37302d;
              background: #ffffff;
              font-size: 16px;
            }
      
            table {
              border-collapse: collapse !important;
            }
      
            .headline {
              color: #ffffff;
              font-size: 36px;
            }
      
            .force-full-width {
              width: 100% !important;
            }
      
            .force-width-80 {
              width: 80% !important;
            }
          </style>
      
          <style type="text/css" media="screen">
            @media screen {
              /*Thanks Outlook 2013! http://goo.gl/XLxpyl*/
              td,
              h1,
              h2,
              h3 {
                font-family: "Droid Sans", "Helvetica Neue", "Arial", "sans-serif" !important;
              }
            }
          </style>
      
          <style type="text/css" media="only screen and (max-width: 480px)">
            /* Mobile styles */
            @media only screen and (max-width: 480px) {
              table[class="w320"] {
                width: 320px !important;
              }
      
              td[class="mobile-block"] {
                width: 100% !important;
                display: block !important;
              }
            }
          </style>
        </head>
        <body
          class="body"
          style="
            padding: 0;
            margin: 0;
            display: block;
            background: #ffffff;
            -webkit-text-size-adjust: none;
          "
          bgcolor="#ffffff"
        >
          <table
            align="center"
            cellpadding="0"
            cellspacing="0"
            class="force-full-width"
            height="100%"
          >
            <tr>
              <td align="center" valign="top" bgcolor="#ffffff" width="100%">
                <center>
                  <table
                    style="margin: 0 auto"
                    cellpadding="0"
                    cellspacing="0"
                    width="600"
                    class="w320"
                  >
                    <tr>
                      <td align="center" valign="top">
                        <table
                          style="margin: 0 auto"
                          cellpadding="0"
                          cellspacing="0"
                          class="force-full-width"
                          style="margin: 0 auto"
                        >
                          <tr>
                            <td style="font-size: 20px; text-align: center">
                              <br />
                              ${ cuerpo }
                              <br />
                              <br />
                            </td>
                          </tr>
                        </table>
      
                        <table
                          style="margin: 0 auto"
                          cellpadding="0"
                          cellspacing="0"
                          class="force-full-width"
                          bgcolor="#414141"
                          style="margin: 0 auto"
                        >
                          <br />
                          <tr>
                            <td class="headline">Caserito Restaurante</td>
                          </tr>
                          <tr>
                            <td>
                              <br />
                              <img
                                src="https://firebasestorage.googleapis.com/v0/b/restaurante-42e1e.appspot.com/o/defaultFoto.png?alt=media&token=e09d24a0-f123-421d-9dcb-f0b9fac04d4b"
                                width="224"
                                height="240"
                                alt="robot picture"
                              />
                              <br />
                              <br />
                              <br />
                            </td>
                          </tr>
      
                          <tr>
                            <table style="table-layout: fixed; width: 100%">
                              <td style="background-color: #414141">
                                <a>
                                  <img
                                    src="https://firebasestorage.googleapis.com/v0/b/restaurante-42e1e.appspot.com/o/ubicacionBlanco.png?alt=media&token=5cdca3ac-c4f4-417a-810e-30de98e1886b"
                                    width="50"
                                    height="50"
                                  />
                                </a>
                                <br />
                                <p style="color: #bbbbbb; font-size: 12px">
                                  Av. Siempre Viva 742
                                </p>
                              </td>
      
                              <td style="background-color: #414141">
                                <a>
                                  <img
                                    src="https://firebasestorage.googleapis.com/v0/b/restaurante-42e1e.appspot.com/o/emailBlanco.png?alt=media&token=89f71a4f-9651-47a8-a2e4-55bdc7f6fdc0"
                                    width="50"
                                    height="50"
                                  />
                                </a>
                                <br />
                                <p style="color: #bbbbbb; font-size: 12px">
                                  caseritoRestauranteComida@gmail.com
                                </p>
                              </td>
      
                              <td style="background-color: #414141">
                                <a>
                                  <img
                                    src="https://firebasestorage.googleapis.com/v0/b/restaurante-42e1e.appspot.com/o/whatsappBlanco.png?alt=media&token=e7d60876-b38f-42f1-a370-925d7d94b7d6"
                                    width="50"
                                    height="50"
                                  />
                                </a>
                                <br />
                                <p style="color: #bbbbbb; font-size: 12px">
                                  (+54) 1122769584
                                </p>
                              </td>
                            </table>
                          </tr>
      
                          <tr>
                            <td style="color: #bbbbbb; font-size: 12px">
                              <br />
                              <br />
                              © 2020 Todos los derechos reservados
                              <br />
                              <br />
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </center>
              </td>
            </tr>
          </table>
        </body>
      </html>`
    }).subscribe(res => {
      console.log(res);
    });
  }

 TemplateHtml(cuerpo) {

  let resultado = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Neopolitan Confirm Email</title>
      <!-- Designed by https://github.com/kaytcat -->
      <!-- Robot header image designed by Freepik.com -->
  
      <style type="text/css">
        @import url(http://fonts.googleapis.com/css?family=Droid+Sans);
  
        /* Take care of image borders and formatting */
  
        img {
          max-width: 600px;
          outline: none;
          text-decoration: none;
          -ms-interpolation-mode: bicubic;
        }
  
        a {
          text-decoration: none;
          border: 0;
          outline: none;
          color: #bbbbbb;
        }
  
        a img {
          border: none;
        }
  
        /* General styling */
  
        td,
        h1,
        h2,
        h3 {
          font-family: Helvetica, Arial, sans-serif;
          font-weight: 400;
        }
  
        td {
          text-align: center;
        }
  
        body {
          -webkit-font-smoothing: antialiased;
          -webkit-text-size-adjust: none;
          width: 100%;
          height: 100%;
          color: #37302d;
          background: #ffffff;
          font-size: 16px;
        }
  
        table {
          border-collapse: collapse !important;
        }
  
        .headline {
          color: #ffffff;
          font-size: 36px;
        }
  
        .force-full-width {
          width: 100% !important;
        }
  
        .force-width-80 {
          width: 80% !important;
        }
      </style>
  
      <style type="text/css" media="screen">
        @media screen {
          /*Thanks Outlook 2013! http://goo.gl/XLxpyl*/
          td,
          h1,
          h2,
          h3 {
            font-family: "Droid Sans", "Helvetica Neue", "Arial", "sans-serif" !important;
          }
        }
      </style>
  
      <style type="text/css" media="only screen and (max-width: 480px)">
        /* Mobile styles */
        @media only screen and (max-width: 480px) {
          table[class="w320"] {
            width: 320px !important;
          }
  
          td[class="mobile-block"] {
            width: 100% !important;
            display: block !important;
          }
        }
      </style>
    </head>
    <body
      class="body"
      style="
        padding: 0;
        margin: 0;
        display: block;
        background: #ffffff;
        -webkit-text-size-adjust: none;
      "
      bgcolor="#ffffff"
    >
      <table
        align="center"
        cellpadding="0"
        cellspacing="0"
        class="force-full-width"
        height="100%"
      >
        <tr>
          <td align="center" valign="top" bgcolor="#ffffff" width="100%">
            <center>
              <table
                style="margin: 0 auto"
                cellpadding="0"
                cellspacing="0"
                width="600"
                class="w320"
              >
                <tr>
                  <td align="center" valign="top">
                    <table
                      style="margin: 0 auto"
                      cellpadding="0"
                      cellspacing="0"
                      class="force-full-width"
                      style="margin: 0 auto"
                    >
                      <tr>
                        <td style="font-size: 20px; text-align: center">
                          <br />
                          ${ cuerpo }
                          <br />
                          <br />
                        </td>
                      </tr>
                    </table>
  
                    <table
                      style="margin: 0 auto"
                      cellpadding="0"
                      cellspacing="0"
                      class="force-full-width"
                      bgcolor="#414141"
                      style="margin: 0 auto"
                    >
                      <br />
                      <tr>
                        <td class="headline">Caserito Restaurante</td>
                      </tr>
                      <tr>
                        <td>
                          <br />
                          <img
                            src="https://firebasestorage.googleapis.com/v0/b/restaurante-42e1e.appspot.com/o/defaultFoto.png?alt=media&token=e09d24a0-f123-421d-9dcb-f0b9fac04d4b"
                            width="224"
                            height="240"
                            alt="robot picture"
                          />
                          <br />
                          <br />
                          <br />
                        </td>
                      </tr>
  
                      <tr>
                        <table style="table-layout: fixed; width: 100%">
                          <td style="background-color: #414141">
                            <a>
                              <img
                                src="https://firebasestorage.googleapis.com/v0/b/restaurante-42e1e.appspot.com/o/ubicacionBlanco.png?alt=media&token=5cdca3ac-c4f4-417a-810e-30de98e1886b"
                                width="50"
                                height="50"
                              />
                            </a>
                            <br />
                            <p style="color: #bbbbbb; font-size: 12px">
                              Av. Siempre Viva 742
                            </p>
                          </td>
  
                          <td style="background-color: #414141">
                            <a>
                              <img
                                src="https://firebasestorage.googleapis.com/v0/b/restaurante-42e1e.appspot.com/o/emailBlanco.png?alt=media&token=89f71a4f-9651-47a8-a2e4-55bdc7f6fdc0"
                                width="50"
                                height="50"
                              />
                            </a>
                            <br />
                            <p style="color: #bbbbbb; font-size: 12px">
                              caseritoRestauranteComida@gmail.com
                            </p>
                          </td>
  
                          <td style="background-color: #414141">
                            <a>
                              <img
                                src="https://firebasestorage.googleapis.com/v0/b/restaurante-42e1e.appspot.com/o/whatsappBlanco.png?alt=media&token=e7d60876-b38f-42f1-a370-925d7d94b7d6"
                                width="50"
                                height="50"
                              />
                            </a>
                            <br />
                            <p style="color: #bbbbbb; font-size: 12px">
                              (+54) 1122769584
                            </p>
                          </td>
                        </table>
                      </tr>
  
                      <tr>
                        <td style="color: #bbbbbb; font-size: 12px">
                          <br />
                          <br />
                          © 2020 Todos los derechos reservados
                          <br />
                          <br />
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </center>
          </td>
        </tr>
      </table>
    </body>
  </html>`;
  
  return resultado;
  
  }
}
